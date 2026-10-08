/**
 * Tata letak grafik prasyarat yang murni dan bebas DOM.
 *
 * Modul ini memindahkan seluruh perhitungan rank/lapisan/pengurangan
 * persilangan/koordinat/rute sisi dari komponen Astro sehingga dapat diuji
 * langsung dengan Node dan dipakai ulang. Fungsi utama hanya menerima data
 * masukan (node + sisi) dan mengembalikan data siap render.
 */

/** Node masukan minimal yang dibutuhkan oleh algoritma tata letak. */
export interface LayoutNodeInput {
  id: string;
  title?: string;
  element?: string;
}

/** Sisi berarah (prasyarat -> topik) yang menghubungkan dua id node. */
export interface GraphEdgeInput {
  from: string;
  to: string;
}

/** Opsi geometri dan pengurutan; semua punya nilai bawaan. */
export interface GraphLayoutOptions {
  /** Urutan elemen kurikulum untuk pengurutan dalam satu lapisan. */
  elementOrder?: string[];
  nodeWidth?: number;
  nodeHeight?: number;
  rowGap?: number;
  padding?: number;
  corner?: number;
  titleWrap?: number;
  gapMin?: number;
  gapMax?: number;
  gapBase?: number;
  gapPerEdge?: number;
}

/** Atribut penempatan yang ditambahkan ke tiap node masukan. */
export interface PositionedNode {
  dummy: boolean;
  rank: number;
  seq: number;
  x: number;
  y: number;
  lines: string[];
  titleY: number;
}

/** Sisi hasil render, siap dipakai sebagai atribut `<path>`. */
export interface GraphLayoutEdge {
  from: string;
  to: string;
  primary: boolean;
  d: string;
}

/** Hasil tata letak lengkap. */
export interface GraphLayoutResult<T extends LayoutNodeInput> {
  nodes: Array<T & PositionedNode>;
  edges: GraphLayoutEdge[];
  width: number;
  height: number;
  /** Daftar id yang membentuk siklus pertama, atau kosong bila graf asiklik. */
  cycle: string[];
}

export const DEFAULT_NODE_WIDTH = 176;
export const DEFAULT_NODE_HEIGHT = 58;
export const DEFAULT_ROW_GAP = 16;
export const DEFAULT_PADDING = 24;
export const DEFAULT_CORNER = 10;
export const DEFAULT_TITLE_WRAP = 21;
export const DEFAULT_GAP_MIN = 52;
export const DEFAULT_GAP_MAX = 132;
export const DEFAULT_GAP_BASE = 44;
export const DEFAULT_GAP_PER_EDGE = 10;

interface LayerNode {
  id: string;
  dummy: boolean;
  rank: number;
  seq: number;
  title: string;
  element?: string;
  preds: LayerNode[];
  succs: LayerNode[];
  x: number;
  y: number;
}

interface InternalEdge {
  from: string;
  to: string;
  source: LayerNode;
  target: LayerNode;
  chain: LayerNode[];
  primary: boolean;
  d: string;
}

/**
 * Mendeteksi siklus pertama (DFS tiga warna). Mengembalikan jalur siklus,
 * mis. `['a', 'b', 'c', 'a']`, atau array kosong bila graf asiklik.
 */
function findCycle(ids: string[], out: Map<string, string[]>): string[] {
  const state = new Map<string, 0 | 1 | 2>();
  const stack: string[] = [];
  const position = new Map<string, number>();

  const visit = (id: string): string[] | undefined => {
    state.set(id, 1);
    position.set(id, stack.length);
    stack.push(id);
    for (const next of out.get(id) ?? []) {
      const seen = state.get(next) ?? 0;
      if (seen === 1) {
        const start = position.get(next) ?? 0;
        return [...stack.slice(start), next];
      }
      if (seen === 0) {
        const found = visit(next);
        if (found) return found;
      }
    }
    stack.pop();
    position.delete(id);
    state.set(id, 2);
    return undefined;
  };

  for (const id of ids) {
    if ((state.get(id) ?? 0) !== 0) continue;
    const found = visit(id);
    if (found && found.length) return found;
  }
  return [];
}

/**
 * Menghitung rank (kedalaman terpanjang) dengan pengurutan topologis Kahn.
 * Graf asiklik menghasilkan rank yang selalu bertambah di sepanjang sisi;
 * bila ada siklus, node yang tersisa tetap mendapat rank hingga (bukan NaN).
 */
function computeRanks(
  ids: string[],
  edges: GraphEdgeInput[],
): Map<string, number> {
  const rank = new Map<string, number>(ids.map((id) => [id, 0]));
  const indegree = new Map<string, number>(ids.map((id) => [id, 0]));
  const out = new Map<string, string[]>(ids.map((id) => [id, []]));

  for (const edge of edges) {
    if (!rank.has(edge.from) || !rank.has(edge.to)) continue;
    indegree.set(edge.to, (indegree.get(edge.to) ?? 0) + 1);
    out.get(edge.from)?.push(edge.to);
  }

  const queue: string[] = ids.filter((id) => (indegree.get(id) ?? 0) === 0);
  while (queue.length) {
    const id = queue.shift() as string;
    const base = rank.get(id) ?? 0;
    for (const next of out.get(id) ?? []) {
      if (base + 1 > (rank.get(next) ?? 0)) rank.set(next, base + 1);
      const left = (indegree.get(next) ?? 0) - 1;
      indegree.set(next, left);
      if (left === 0) queue.push(next);
    }
  }

  return rank;
}

function wrapTitle(value: string, titleWrap: number): string[] {
  const words = value.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let index = 0;
  while (index < words.length && lines.length < 2) {
    let line = words[index++];
    while (index < words.length && `${line} ${words[index]}`.length <= titleWrap) {
      line += ` ${words[index++]}`;
    }
    if (line.length > titleWrap) line = line.slice(0, titleWrap);
    lines.push(line);
  }
  if (index < words.length && lines.length === 2) {
    const second = lines[1];
    const clamped = second.length >= titleWrap ? second.slice(0, titleWrap - 1) : second;
    lines[1] = `${clamped.trimEnd()}…`;
  }
  return lines.length ? lines : [''];
}

/**
 * Menata graf prasyarat menjadi koordinat dan rute sisi siap render.
 *
 * @param nodes Node masukan (id wajib; metadata lain diteruskan apa adanya).
 * @param edges Sisi berarah dari prasyarat menuju topik.
 * @param options Opsi geometri/pengurutan opsional.
 */
export function layoutGraph<T extends LayoutNodeInput>(
  nodes: T[],
  edges: GraphEdgeInput[],
  options: GraphLayoutOptions = {},
): GraphLayoutResult<T> {
  const NODE_W = options.nodeWidth ?? DEFAULT_NODE_WIDTH;
  const NODE_H = options.nodeHeight ?? DEFAULT_NODE_HEIGHT;
  const ROW_GAP = options.rowGap ?? DEFAULT_ROW_GAP;
  const PADDING = options.padding ?? DEFAULT_PADDING;
  const CORNER = options.corner ?? DEFAULT_CORNER;
  const TITLE_WRAP = options.titleWrap ?? DEFAULT_TITLE_WRAP;
  const GAP_MIN = options.gapMin ?? DEFAULT_GAP_MIN;
  const GAP_MAX = options.gapMax ?? DEFAULT_GAP_MAX;
  const GAP_BASE = options.gapBase ?? DEFAULT_GAP_BASE;
  const GAP_PER_EDGE = options.gapPerEdge ?? DEFAULT_GAP_PER_EDGE;

  const ids = nodes.map((node) => node.id);
  const idSet = new Set(ids);

  const knownEdges = edges.filter((edge) => idSet.has(edge.from) && idSet.has(edge.to));

  const outAdjacency = new Map<string, string[]>(ids.map((id) => [id, []]));
  for (const edge of knownEdges) outAdjacency.get(edge.from)?.push(edge.to);
  const cycle = findCycle(ids, outAdjacency);

  const rankOf = computeRanks(ids, knownEdges);

  const maxRank = nodes.length ? Math.max(...ids.map((id) => rankOf.get(id) ?? 0)) : 0;

  const layers: LayerNode[][] = Array.from({ length: maxRank + 1 }, () => []);
  const layoutById = new Map<string, LayerNode>();
  let seq = 0;

  for (const node of nodes) {
    const rank = rankOf.get(node.id) ?? 0;
    const layout: LayerNode = {
      id: node.id,
      dummy: false,
      rank,
      seq: seq++,
      title: typeof node.title === 'string' ? node.title : '',
      element: typeof node.element === 'string' ? node.element : undefined,
      preds: [],
      succs: [],
      x: 0,
      y: 0,
    };
    layoutById.set(node.id, layout);
    layers[rank].push(layout);
  }

  const primaryTargetRank = new Map<string, number>();
  for (const edge of knownEdges) {
    const sourceRank = rankOf.get(edge.from) ?? 0;
    if (sourceRank > (primaryTargetRank.get(edge.to) ?? -1)) {
      primaryTargetRank.set(edge.to, sourceRank);
    }
  }

  const internalEdges: InternalEdge[] = [];
  for (const edge of knownEdges) {
    const source = layoutById.get(edge.from);
    const target = layoutById.get(edge.to);
    if (!source || !target) continue;
    const primary = (rankOf.get(edge.from) ?? 0) === (primaryTargetRank.get(edge.to) ?? -1);
    const chain: LayerNode[] = [source];
    for (let r = source.rank + 1; r < target.rank; r++) {
      const dummy: LayerNode = {
        id: `dummy-${edge.from}-${edge.to}-${r}`,
        dummy: true,
        rank: r,
        seq: seq++,
        title: '',
        preds: [],
        succs: [],
        x: 0,
        y: 0,
      };
      layers[r].push(dummy);
      chain.push(dummy);
    }
    chain.push(target);
    for (let i = 0; i < chain.length - 1; i++) {
      chain[i].succs.push(chain[i + 1]);
      chain[i + 1].preds.push(chain[i]);
    }
    internalEdges.push({ from: edge.from, to: edge.to, source, target, chain, primary, d: '' });
  }

  const elementOrder = options.elementOrder ?? [];
  const elementIndex = new Map<string, number>(elementOrder.map((element, i) => [element, i]));

  for (const layer of layers) {
    layer.sort((a, b) => {
      if (a.dummy !== b.dummy) return a.dummy ? 1 : -1;
      if (!a.dummy && !b.dummy) {
        const ea = a.element ? elementIndex.get(a.element) ?? 0 : 0;
        const eb = b.element ? elementIndex.get(b.element) ?? 0 : 0;
        if (ea !== eb) return ea - eb;
        const byTitle = a.title.localeCompare(b.title, 'id');
        if (byTitle !== 0) return byTitle;
      }
      return a.seq - b.seq;
    });
  }

  function indexLayer(rank: number): Map<LayerNode, number> {
    const index = new Map<LayerNode, number>();
    layers[rank].forEach((node, i) => index.set(node, i));
    return index;
  }

  function sortByNeighbours(
    rank: number,
    neighboursOf: (node: LayerNode) => LayerNode[],
    reference: Map<LayerNode, number>,
  ): void {
    const layer = layers[rank];
    const own = indexLayer(rank);
    const keyed = layer.map((node) => {
      const neighbours = neighboursOf(node);
      let value = own.get(node) ?? 0;
      if (neighbours.length) {
        let sum = 0;
        let count = 0;
        for (const neighbour of neighbours) {
          const idx = reference.get(neighbour);
          if (idx !== undefined) {
            sum += idx;
            count++;
          }
        }
        if (count) value = sum / count;
      }
      return { node, value };
    });
    keyed.sort((a, b) => a.value - b.value || a.node.seq - b.node.seq);
    layers[rank] = keyed.map((entry) => entry.node);
  }

  for (let pass = 0; pass < 4; pass++) {
    for (let r = 1; r <= maxRank; r++) {
      sortByNeighbours(r, (node) => node.preds, indexLayer(r - 1));
    }
    for (let r = maxRank - 1; r >= 0; r--) {
      sortByNeighbours(r, (node) => node.succs, indexLayer(r + 1));
    }
  }

  function countCrossings(): number {
    let total = 0;
    for (let r = 0; r < maxRank; r++) {
      const from = layers[r];
      const fromIndex = new Map<LayerNode, number>();
      from.forEach((node, i) => fromIndex.set(node, i));
      const toIndex = new Map<LayerNode, number>();
      layers[r + 1].forEach((node, i) => toIndex.set(node, i));
      const pairs: Array<[number, number]> = [];
      for (const node of from) {
        const a = fromIndex.get(node) ?? 0;
        for (const succ of node.succs) {
          const b = toIndex.get(succ);
          if (b !== undefined) pairs.push([a, b]);
        }
      }
      for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
          const p = pairs[i];
          const q = pairs[j];
          if (p[0] === q[0] || p[1] === q[1]) continue;
          if ((p[0] - q[0]) * (p[1] - q[1]) < 0) total++;
        }
      }
    }
    return total;
  }

  let bestCrossings = countCrossings();
  for (let round = 0; round < 8; round++) {
    let improved = false;
    for (let r = 0; r <= maxRank; r++) {
      const layer = layers[r];
      for (let i = 0; i + 1 < layer.length; i++) {
        const first = layer[i];
        const second = layer[i + 1];
        layer[i] = second;
        layer[i + 1] = first;
        const next = countCrossings();
        if (next < bestCrossings) {
          bestCrossings = next;
          improved = true;
        } else {
          layer[i] = first;
          layer[i + 1] = second;
        }
      }
    }
    if (!improved) break;
  }

  const maxColumnCount = Math.max(1, ...layers.map((layer) => layer.length));

  const corridorCount: number[] = new Array(Math.max(0, maxRank)).fill(0);
  for (const edge of internalEdges) {
    for (let r = edge.source.rank; r < edge.target.rank; r++) corridorCount[r]++;
  }

  function gapAfter(rank: number): number {
    const count = corridorCount[rank] ?? 0;
    return Math.min(GAP_MAX, Math.max(GAP_MIN, GAP_BASE + count * GAP_PER_EDGE));
  }

  const columnX: number[] = new Array(maxRank + 1);
  let cursorX = PADDING;
  for (let r = 0; r <= maxRank; r++) {
    columnX[r] = cursorX;
    if (r < maxRank) cursorX += NODE_W + gapAfter(r);
  }
  const width = columnX[maxRank] + NODE_W + PADDING;
  const height = PADDING * 2 + maxColumnCount * (NODE_H + ROW_GAP);

  for (let r = 0; r <= maxRank; r++) {
    const layer = layers[r];
    const offset = ((maxColumnCount - layer.length) * (NODE_H + ROW_GAP)) / 2;
    layer.forEach((node, i) => {
      node.x = columnX[r];
      node.y = PADDING + i * (NODE_H + ROW_GAP) + offset;
    });
  }

  const corridorUse = new Map<number, number[]>();
  internalEdges.forEach((edge, edgeIndex) => {
    for (let c = edge.source.rank; c <= edge.target.rank - 1; c++) {
      const list = corridorUse.get(c);
      if (list) list.push(edgeIndex);
      else corridorUse.set(c, [edgeIndex]);
    }
  });

  function roundedPath(rawPoints: Array<{ x: number; y: number }>): string {
    const pts = rawPoints.filter(
      (point, i) =>
        i === 0 ||
        Math.abs(point.x - rawPoints[i - 1].x) > 0.5 ||
        Math.abs(point.y - rawPoints[i - 1].y) > 0.5,
    );
    if (pts.length < 2) return '';
    if (pts.length === 2) return `M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y}`;
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const prev = pts[i - 1];
      const cur = pts[i];
      const next = pts[i + 1];
      const inDx = cur.x - prev.x;
      const inDy = cur.y - prev.y;
      const outDx = next.x - cur.x;
      const outDy = next.y - cur.y;
      const inLen = Math.hypot(inDx, inDy) || 1;
      const outLen = Math.hypot(outDx, outDy) || 1;
      const radius = Math.min(CORNER, inLen / 2, outLen / 2);
      const startX = cur.x - (inDx / inLen) * radius;
      const startY = cur.y - (inDy / inLen) * radius;
      const endX = cur.x + (outDx / outLen) * radius;
      const endY = cur.y + (outDy / outLen) * radius;
      d += ` L ${startX} ${startY} Q ${cur.x} ${cur.y} ${endX} ${endY}`;
    }
    const last = pts[pts.length - 1];
    d += ` L ${last.x} ${last.y}`;
    return d;
  }

  internalEdges.forEach((edge, edgeIndex) => {
    const a = edge.source.rank;
    const b = edge.target.rank;
    const startY = edge.source.y + NODE_H / 2;
    const endY = edge.target.y + NODE_H / 2;

    if (b - a <= 1) {
      const startX = edge.source.x + NODE_W;
      const endX = edge.target.x;
      const dx = endX - startX;
      edge.d = `M ${startX} ${startY} C ${startX + dx / 2} ${startY}, ${endX - dx / 2} ${endY}, ${endX} ${endY}`;
      return;
    }

    const points: Array<{ x: number; y: number }> = [{ x: edge.source.x + NODE_W, y: startY }];
    let currentY = startY;
    for (let k = a + 1; k <= b; k++) {
      const node = edge.chain[k - a];
      if (!node) continue;
      const nextY = node.y + NODE_H / 2;
      const corridor = k - 1;
      const users = corridorUse.get(corridor) ?? [];
      const lane = users.indexOf(edgeIndex);
      const step = users.length > 0 && lane >= 0 ? (lane + 1) / (users.length + 1) : 0.5;
      const corridorStart = columnX[corridor] + NODE_W;
      const corridorEnd = columnX[corridor + 1];
      const corridorX = corridorStart + (corridorEnd - corridorStart) * step;
      points.push({ x: corridorX, y: currentY });
      points.push({ x: corridorX, y: nextY });
      currentY = nextY;
    }
    points.push({ x: edge.target.x, y: endY });
    edge.d = roundedPath(points);
  });

  const positioned = nodes
    .map((node) => {
      const layout = layoutById.get(node.id);
      return layout ? { node, layout } : undefined;
    })
    .filter((entry): entry is { node: T; layout: LayerNode } => Boolean(entry))
    .map(({ node, layout }) => {
      const lines = wrapTitle(layout.title, TITLE_WRAP);
      return {
        ...node,
        dummy: false,
        rank: layout.rank,
        seq: layout.seq,
        x: layout.x,
        y: layout.y,
        lines,
        titleY: layout.y + (lines.length > 1 ? 22 : 30),
      };
    });

  const resultEdges: GraphLayoutEdge[] = internalEdges.map((edge) => ({
    from: edge.from,
    to: edge.to,
    primary: edge.primary,
    d: edge.d,
  }));

  return { nodes: positioned, edges: resultEdges, width, height, cycle };
}
