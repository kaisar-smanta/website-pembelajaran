/**
 * Interaksi peta prasyarat: peredupan/fokus kelas dan sorot leluhur + turunan
 * saat sebuah topik disorot. Logika penutupan (closure) dipisahkan sebagai
 * fungsi murni agar dapat diuji tanpa DOM.
 */

/** Peta ketetanggaan: id -> daftar id tetangga. */
export type Graph = Record<string, string[]>;

/**
 * Menghimpun sebuah id bersama seluruh leluhurnya (lewat `incoming`) dan
 * seluruh turunannya (lewat `outgoing`) menjadi himpunan aktif.
 */
export function prerequisiteClosure(id: string, incoming: Graph, outgoing: Graph): Record<string, boolean> {
  const active: Record<string, boolean> = { [id]: true };

  const walk = (start: string, graph: Graph) => {
    const seen: Record<string, boolean> = { [start]: true };
    const stack: string[] = [start];
    while (stack.length) {
      const current = stack.pop()!;
      const neighbours = graph[current];
      if (!neighbours) continue;
      for (const next of neighbours) {
        if (seen[next]) continue;
        seen[next] = true;
        active[next] = true;
        stack.push(next);
      }
    }
  };

  walk(id, incoming);
  walk(id, outgoing);
  return active;
}

function buildGraph(edges: Element[], attr: 'from' | 'to'): Graph {
  const graph: Graph = {};
  for (const edge of edges) {
    const from = edge.getAttribute('data-from');
    const to = edge.getAttribute('data-to');
    if (!from || !to) continue;
    const key = attr === 'from' ? from : to;
    const value = attr === 'from' ? to : from;
    (graph[key] ??= []).push(value);
  }
  return graph;
}

/** Menyiapkan interaksi seluruh peta prasyarat pada halaman. */
export function setupPrerequisiteGraph(): void {
  try {
    const wraps = document.querySelectorAll<HTMLElement>('.prereq-wrap');
    if (!wraps.length) return;

    wraps.forEach((wrap) => {
      const nodeEls = Array.from(wrap.querySelectorAll<HTMLElement>('.prereq-node'));
      const edgeEls = Array.from(wrap.querySelectorAll<Element>('.prereq-edge'));
      if (!nodeEls.length) return;
      wrap.classList.add('is-ready');

      const gradeChips = Array.from(wrap.querySelectorAll<HTMLElement>('[data-grade-filter]'));
      const gradeGroups = Array.from(wrap.querySelectorAll<Element>('.prereq-group[data-grade]'));
      const gradeMap: Record<string, string | null> = {};
      for (const el of nodeEls) {
        gradeMap[el.getAttribute('data-id') ?? ''] = el.getAttribute('data-grade');
      }
      let gradeFilter = 'all';

      const incoming = buildGraph(edgeEls, 'from');
      const outgoing = buildGraph(edgeEls, 'to');

      const apply = (active: Record<string, boolean>) => {
        for (const el of nodeEls) {
          const on = Boolean(active[el.getAttribute('data-id') ?? '']);
          el.classList.toggle('is-active', on);
          el.classList.toggle('is-dim', !on);
        }
        for (const edge of edgeEls) {
          const from = edge.getAttribute('data-from');
          const to = edge.getAttribute('data-to');
          const on = Boolean(from && to && active[from] && active[to]);
          edge.classList.toggle('is-active', on);
          edge.classList.toggle('is-dim', !on);
        }
      };

      const clear = () => {
        for (const el of nodeEls) el.classList.remove('is-active', 'is-dim');
        for (const edge of edgeEls) edge.classList.remove('is-active', 'is-dim');
      };

      const applyGrade = () => {
        for (const el of nodeEls) {
          const id = el.getAttribute('data-id') ?? '';
          const match = gradeFilter === 'all' || gradeMap[id] === gradeFilter;
          el.classList.toggle('is-grade-dim', !match);
        }
        for (const edge of edgeEls) {
          const from = edge.getAttribute('data-from') ?? '';
          const to = edge.getAttribute('data-to') ?? '';
          const match =
            gradeFilter === 'all' ||
            gradeMap[from] === gradeFilter ||
            gradeMap[to] === gradeFilter;
          edge.classList.toggle('is-grade-dim', !match);
        }
        for (const group of gradeGroups) {
          const match = gradeFilter === 'all' || group.getAttribute('data-grade') === gradeFilter;
          group.classList.toggle('is-grade-hidden', !match);
        }
        for (const chip of gradeChips) {
          const active = chip.getAttribute('data-grade-filter') === gradeFilter;
          chip.classList.toggle('is-active', active);
          chip.setAttribute('aria-pressed', active ? 'true' : 'false');
        }
      };

      for (const el of nodeEls) {
        const id = el.getAttribute('data-id');
        if (!id) continue;
        el.addEventListener('mouseenter', () => apply(prerequisiteClosure(id, incoming, outgoing)));
        el.addEventListener('focusin', () => apply(prerequisiteClosure(id, incoming, outgoing)));
        el.addEventListener('mouseleave', clear);
        el.addEventListener('focusout', clear);
        el.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') return;
          const href =
            el.getAttribute('href') ||
            el.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
          if (!href) return;
          event.preventDefault();
          window.location.href = href;
        });
      }

      for (const chip of gradeChips) {
        chip.addEventListener('click', () => {
          gradeFilter = chip.getAttribute('data-grade-filter') || 'all';
          clear();
          applyGrade();
        });
      }
      applyGrade();
    });
  } catch {
    /* biarkan graf tetap tampil tanpa interaksi */
  }
}
