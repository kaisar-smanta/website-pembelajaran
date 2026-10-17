/**
 * Pengendali dasbor `/kemajuan` di sisi peramban.
 *
 * `bootDashboard` membaca data topik dari elemen JSON di halaman dan seluruh
 * kemajuan dari `localStorage`, lalu merender ringkasan, tinjauan, penguasaan,
 * refleksi, dan rincian per mata pelajaran. Modul ini hanya boleh dipanggil di
 * peramban karena mengakses DOM dan penyimpanan lokal.
 */

import { loadProgress, type ProgressMap } from '@/lib/progress';
import {
  loadCompletions,
  loadPredictions,
  loadReflections,
  type CompletionMap,
  type PredictionMap,
  type ReflectionMap,
} from '@/lib/learner';
import { LEARNER_KEYS, SCHEMA_VERSION } from '@/lib/storage-keys';
import { safeStorage } from '@/lib/storage';
import {
  buildOverview,
  continueLearning,
  suggestedStart,
  groupOverview,
  type SiteOverview,
  type TopicEntry,
  type TopicOverview,
  type TopicMastery,
  type MasteryBand,
  type LowConfidenceEntry,
  type EnrichmentSummary,
} from '@/lib/progress-overview';
import { buildReviewQueue, summarizeReviewQueue } from '@/lib/review';
import { elementColorVar } from '@/data/display';
import { query, readJsonArray } from '@/lib/dom';
import { formatPercentWhole, setSectionVisible } from '@/lib/client-shared';
import type { ElementId } from '@/types/content';

interface ContinueItemData {
  element?: string;
  title: string;
  practiceHref: string;
  materialHref: string;
  meta: string;
  supplementary?: boolean;
}

/** Menyaring entri JSON tersemat sebelum dipakai `buildOverview`. */
function isTopicEntry(value: unknown): value is TopicEntry {
  return typeof value === 'object' && value !== null && 'id' in value;
}

export function bootDashboard(): void {
  function boot() {
    const rootEl = query<HTMLElement>(document, '[data-kemajuan-root]');
    if (!rootEl) return;
    const root = rootEl;

    const entries = readJsonArray<TopicEntry>(query(document, '#kemajuan-data'), isTopicEntry);

    const storage = safeStorage();
    const emptyEl = query<HTMLElement>(root, '[data-empty]');
    const mascotHappy = query<HTMLElement>(root, '[data-summary-mascot-happy]');
    const mascotCelebrate = query<HTMLElement>(root, '[data-summary-mascot-celebrate]');
    const sections = {
      summary: query<HTMLElement>(root, '[data-summary]'),
      review: query<HTMLElement>(root, '[data-review]'),
      challenge: query<HTMLElement>(root, '[data-challenge]'),
      mastery: query<HTMLElement>(root, '[data-mastery]'),
      confidence: query<HTMLElement>(root, '[data-confidence]'),
      enrichment: query<HTMLElement>(root, '[data-enrichment]'),
      continue: query<HTMLElement>(root, '[data-continue]'),
      suggest: query<HTMLElement>(root, '[data-suggest]'),
      breakdown: query<HTMLElement>(root, '[data-breakdown]'),
      manage: query<HTMLElement>(root, '[data-manage]'),
    };

    const dateFmt = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeStyle: 'short' });
    const formatDate = (value: number) => {
      try {
        return dateFmt.format(new Date(value));
      } catch {
        return '';
      }
    };

    function readStores(): {
      progress: ProgressMap;
      predictions: PredictionMap;
      reflections: ReflectionMap;
      completions: CompletionMap;
    } {
      return {
        progress: loadProgress(storage),
        predictions: loadPredictions(storage),
        reflections: loadReflections(storage),
        completions: loadCompletions(storage),
      };
    }

    function makeTrack(answered: number, total: number, label: string): HTMLElement {
      const track = document.createElement('div');
      track.className = 'track';
      track.setAttribute('role', 'progressbar');
      track.setAttribute('aria-label', label);
      track.setAttribute('aria-valuemin', '0');
      track.setAttribute('aria-valuemax', String(total));
      track.setAttribute('aria-valuenow', String(answered));
      track.setAttribute('aria-valuetext', `${answered} dari ${total} soal dikerjakan`);
      const bar = document.createElement('span');
      bar.className = 'bar';
      bar.style.width = total ? formatPercentWhole(answered / total) : '0%';
      track.appendChild(bar);
      return track;
    }

    function continueItem(data: ContinueItemData): HTMLLIElement {
      const item = document.createElement('li');
      item.className = 'continue-item';
      item.style.setProperty('--accent', `var(${elementColorVar(data.element as ElementId | undefined)})`);

      const main = document.createElement('div');
      main.className = 'continue-main';

      const link = document.createElement('a');
      link.className = 'continue-title';
      link.href = data.practiceHref;
      link.textContent = data.title;

      const meta = document.createElement('span');
      meta.className = 'continue-meta';
      meta.textContent = data.meta;

      main.append(link);
      if (data.supplementary) {
        const row = document.createElement('span');
        row.className = 'continue-meta-row';
        const badge = document.createElement('span');
        badge.className = 'badge badge-pengayaan';
        badge.textContent = 'Pengayaan';
        row.append(meta, badge);
        main.append(row);
      } else {
        main.append(meta);
      }

      const material = document.createElement('a');
      material.className = 'btn btn-secondary btn-sm';
      material.href = data.materialHref;
      material.textContent = 'Baca materi';

      item.append(main, material);
      return item;
    }

    function topicListItem(topic: TopicOverview): HTMLLIElement {
      const ratio = topic.total ? `${topic.answered}/${topic.total} soal (${formatPercentWhole(topic.answered / topic.total)})` : 'belum ada soal';
      const accuracy = topic.gradedAnswered ? ` · ketepatan ${formatPercentWhole(topic.accuracy)}` : '';
      const when = topic.lastAt ? ` · terakhir ${formatDate(topic.lastAt)}` : '';
      return continueItem({
        element: topic.element,
        title: topic.title,
        practiceHref: topic.practiceHref,
        materialHref: topic.materialHref,
        meta: `${topic.gradeName} · ${topic.elementName} · ${ratio}${accuracy}${when}`,
        supplementary: topic.supplementary,
      });
    }

    function renderContinue(overview: SiteOverview) {
      const list = sections.continue ? query<HTMLOListElement>(sections.continue, '[data-continue-list]') : null;
      const items = continueLearning(overview, 6);
      setSectionVisible(sections.continue, items.length > 0);
      if (!list) return;
      list.replaceChildren(...items.map(topicListItem));
    }

    function renderSuggest(overview: SiteOverview) {
      const list = sections.suggest ? query<HTMLOListElement>(sections.suggest, '[data-suggest-list]') : null;
      const items = suggestedStart(overview, 4);
      const hasContinue =
        sections.continue instanceof HTMLElement && !sections.continue.hidden;
      setSectionVisible(sections.suggest, !hasContinue && items.length > 0);
      if (list) list.replaceChildren(...items.map(topicListItem));
    }

    function renderEnrichment(summary: EnrichmentSummary) {
      const startedEl = query(root, '[data-enrichment-started]');
      const completedEl = query(root, '[data-enrichment-completed]');
      const answeredEl = query(root, '[data-enrichment-answered]');
      const accuracyEl = query(root, '[data-enrichment-accuracy]');
      const list = sections.enrichment ? query<HTMLOListElement>(sections.enrichment, '[data-enrichment-list]') : null;
      const note = query<HTMLElement>(root, '[data-enrichment-note]');

      if (startedEl) startedEl.textContent = `${summary.started}/${summary.total}`;
      if (completedEl) completedEl.textContent = String(summary.completed);
      if (answeredEl) {
        answeredEl.textContent = `${summary.answered}/${summary.totalQuestions}`;
      }
      if (accuracyEl) accuracyEl.textContent = formatPercentWhole(summary.accuracy);
      if (list) list.replaceChildren(...summary.topics.map(topicListItem));
      if (note) {
        note.textContent =
          summary.started > 0
            ? 'Topik pengayaan yang sudah disentuh tampil di atas. Materi wajib dan pengayaan dihitung terpisah.'
            : 'Belum ada topik pengayaan yang dimulai. Buka salah satu lewat halaman tantangan bila ingin melangkah lebih jauh.';
      }
    }

    function renderBreakdown(overview: SiteOverview) {
      const body = query<HTMLElement>(root, '[data-breakdown-body]');
      if (!body) return;
      body.replaceChildren();

      for (const subject of groupOverview(overview)) {
        const subjectBlock = document.createElement('article');
        subjectBlock.className = 'card subject-block';

        const heading = document.createElement('h3');
        heading.textContent = subject.subjectName;
        subjectBlock.appendChild(heading);

        const subjectMeta = document.createElement('p');
        subjectMeta.className = 'subject-meta';
        subjectMeta.textContent = `${subject.answered}/${subject.total} soal dikerjakan · ketepatan ${formatPercentWhole(subject.accuracy)}`;
        subjectBlock.appendChild(subjectMeta);

        for (const grade of subject.grades) {
          const gradeBlock = document.createElement('div');
          gradeBlock.className = 'grade-block';

          const gradeHeading = document.createElement('h4');
          gradeHeading.textContent = `${grade.gradeName} · ${grade.answered}/${grade.total} soal`;
          gradeBlock.appendChild(gradeHeading);

          for (const element of grade.elements) {
            const elementBlock = document.createElement('div');
            elementBlock.className = `element-block accent-${element.element}`;

            const head = document.createElement('div');
            head.className = 'element-head';
            const name = document.createElement('span');
            name.className = 'element-name';
            const dot = document.createElement('span');
            dot.className = 'element-dot';
            dot.setAttribute('aria-hidden', 'true');
            name.append(dot, document.createTextNode(element.elementName));
            const count = document.createElement('span');
            count.className = 'element-count';
            count.textContent = `${element.answered}/${element.total} soal · ${formatPercentWhole(element.accuracy)}`;
            head.append(name, count);

            const started = element.topics
              .filter((topic) => topic.started)
              .sort((a, b) => b.lastAt - a.lastAt);

            elementBlock.append(head, makeTrack(element.answered, element.total, `Kemajuan ${element.elementName}`));

            if (started.length > 0) {
              const list = document.createElement('ul');
              list.className = 'element-topics';
              for (const topic of started) {
                const item = document.createElement('li');
                const link = document.createElement('a');
                link.href = topic.practiceHref;
                link.textContent = topic.title;
                const ratio = document.createElement('span');
                ratio.className = 'ratio';
                ratio.textContent = `${topic.answered}/${topic.total}`;
                item.append(link, ratio);
                list.appendChild(item);
              }
              elementBlock.appendChild(list);
            } else {
              const note = document.createElement('p');
              note.className = 'element-empty';
              note.textContent = 'Belum ada yang dikerjakan pada elemen ini.';
              elementBlock.appendChild(note);
            }

            gradeBlock.appendChild(elementBlock);
          }

          subjectBlock.appendChild(gradeBlock);
        }

        body.appendChild(subjectBlock);
      }
    }

    function renderSummary(overview: SiteOverview) {
      const answered = query(root, '[data-stat-answered]');
      const accuracy = query(root, '[data-stat-accuracy]');
      const topicsEl = query(root, '[data-stat-topics]');
      const interactions = query(root, '[data-stat-interactions]');
      const lastEl = query(root, '[data-stat-last]');
      const bar = query<HTMLElement>(root, '[data-overall-bar]');
      const track = query<HTMLElement>(root, '[data-overall-track]');

      if (answered) answered.textContent = `${overview.answered}/${overview.totalQuestions}`;
      if (accuracy) accuracy.textContent = formatPercentWhole(overview.accuracy);
      if (topicsEl) topicsEl.textContent = `${overview.topicsStarted}/${overview.topics.length}`;
      if (interactions) {
        interactions.textContent = String(
          overview.predictions + overview.reflections + overview.activities,
        );
      }
      const ratio = overview.totalQuestions ? overview.answered / overview.totalQuestions : 0;
      if (bar) bar.style.width = formatPercentWhole(ratio);
      if (track) {
        track.setAttribute('aria-valuemax', String(overview.totalQuestions));
        track.setAttribute('aria-valuenow', String(overview.answered));
        track.setAttribute(
          'aria-valuetext',
          `${overview.answered} dari ${overview.totalQuestions} soal dijawab`,
        );
      }
      if (lastEl) {
        lastEl.textContent = overview.lastAt
          ? `Aktivitas terakhir: ${formatDate(overview.lastAt)}.`
          : '';
      }
    }

    const BAND_LABELS: Record<MasteryBand, string> = {
      mahir: 'Mahir',
      cukup: 'Cukup',
      berlatih: 'Berlatih',
      belum: 'Belum',
    };

    function masteryListItem(topic: TopicMastery): HTMLLIElement {
      const ratio = topic.total > 0 ? `${topic.answered}/${topic.total} soal (${formatPercentWhole(topic.completion)})` : 'belum ada soal';
      const accuracy = topic.gradedAnswered ? ` · ketepatan ${formatPercentWhole(topic.accuracy)}` : '';
      const enrich = topic.supplementary ? ' · pengayaan' : '';
      return continueItem({
        element: topic.element,
        title: topic.title,
        practiceHref: topic.practiceHref,
        materialHref: topic.materialHref,
        meta: `${topic.gradeName} · ${topic.elementName} · ${ratio}${accuracy} · ${BAND_LABELS[topic.band]}${enrich}`,
      });
    }

    function renderReview(progress: ProgressMap) {
      const title = query<HTMLElement>(root, '[data-review-title]');
      const text = query<HTMLElement>(root, '[data-review-text]');
      const ids = entries.flatMap((entry) => entry.questionIds);
      const queue = buildReviewQueue(ids, progress, Date.now());
      const summary = summarizeReviewQueue(queue);

      if (title) {
        title.textContent =
          queue.length > 0
            ? `${queue.length} soal menunggu tinjauan`
            : 'Semua soal sudah tepat';
      }
      if (text) {
        text.textContent =
          queue.length > 0
            ? `${summary.missed} soal belum tepat dan ${summary.unanswered} soal belum dicoba. Urutannya memprioritaskan yang paling mendesak.`
            : 'Tidak ada soal yang belum tepat atau belum dicoba. Pertahankan dengan berlatih soal baru atau soal tingkat mahir.';
      }
    }

    function renderChallenge(overview: SiteOverview) {
      const kicker = query<HTMLElement>(root, '[data-challenge-kicker]');
      const title = query<HTMLElement>(root, '[data-challenge-title]');
      const text = query<HTMLElement>(root, '[data-challenge-text]');
      const link = query<HTMLAnchorElement>(root, '[data-challenge-link]');
      const secondary = query<HTMLAnchorElement>(root, '[data-challenge-secondary]');
      const ready = overview.answered >= 10 && overview.accuracy >= 0.8;

      if (kicker) kicker.textContent = ready ? 'Pengayaan' : 'Latihan';
      if (title) title.textContent = ready ? 'Kamu siap untuk tantangan' : 'Tingkatkan ketepatanmu';
      if (text) {
        text.textContent = ready
          ? `Ketepatanmu ${formatPercentWhole(overview.accuracy)} dari ${overview.answered} soal yang dikerjakan. Coba soal tingkat mahir dan topik pengayaan untuk melangkah lebih jauh.`
          : 'Lanjutkan berlatih untuk memperkuat dasar sebelum menuju soal tantangan.';
      }
      if (link) {
        const target = ready ? link.dataset.hrefChallenge : link.dataset.hrefPractice;
        if (target) link.href = target;
        link.textContent = ready ? 'Buka tantangan & pengayaan' : 'Kerjakan latihan';
      }
      if (secondary) secondary.hidden = !ready;
    }

    function renderMastery(overview: SiteOverview) {
      const bandsEl = query<HTMLElement>(root, '[data-mastery-bands]');
      const list = query<HTMLOListElement>(root, '[data-mastery-list]');
      const note = query<HTMLElement>(root, '[data-mastery-note]');
      const summary = overview.mastery;

      if (bandsEl) {
        const order: MasteryBand[] = ['mahir', 'cukup', 'berlatih', 'belum'];
        bandsEl.replaceChildren(
          ...order.map((band) => {
            const cell = document.createElement('div');
            cell.className = `stat mastery-band band-${band}`;
            const dt = document.createElement('dt');
            dt.textContent = BAND_LABELS[band];
            const dd = document.createElement('dd');
            dd.textContent = String(summary.bands[band]);
            cell.append(dt, dd);
            return cell;
          }),
        );
      }

      if (list) list.replaceChildren(...summary.focus.map(masteryListItem));

      if (note) {
        note.textContent =
          summary.focus.length > 0
            ? 'Topik berikut belum tuntas atau ketepatannya masih di bawah 70%.'
            : 'Tidak ada topik yang tertinggal. Pertahankan dengan mengulang secara berkala.';
      }
    }

    function renderConfidence(overview: SiteOverview) {
      const summary = overview.confidence;
      const totalEl = query(root, '[data-conf-total]');
      const averageEl = query(root, '[data-conf-average]');
      const lowCountEl = query(root, '[data-conf-low-count]');
      const list = query<HTMLUListElement>(root, '[data-conf-list]');
      const note = query<HTMLElement>(root, '[data-conf-note]');

      if (totalEl) totalEl.textContent = String(summary.total);
      if (averageEl) {
        averageEl.textContent = summary.average === null ? '–' : `${summary.average.toFixed(1)}/5`;
      }
      if (lowCountEl) lowCountEl.textContent = String(summary.low.length);

      if (list) {
        list.replaceChildren(...summary.low.map(confidenceListItem));
      }

      if (note) {
        if (summary.rated === 0) {
          note.textContent = 'Belum ada refleksi yang menyertakan skala keyakinan.';
        } else if (summary.low.length === 0) {
          note.textContent = 'Tidak ada refleksi dengan keyakinan rendah. Pertahankan.';
        } else {
          note.textContent =
            'Refleksi berikut menandai pemahaman yang masih goyah (keyakinan 2 atau kurang).';
        }
      }
    }

    function confidenceListItem(entry: LowConfidenceEntry): HTMLLIElement {
      const item = document.createElement('li');
      item.className = 'confidence-item';

      const head = document.createElement('div');
      head.className = 'confidence-head';

      if (entry.practiceHref) {
        const link = document.createElement('a');
        link.href = entry.practiceHref;
        link.textContent = entry.topicTitle;
        head.appendChild(link);
      } else {
        const name = document.createElement('span');
        name.textContent = entry.topicTitle;
        head.appendChild(name);
      }

      const score = document.createElement('span');
      score.className = 'confidence-score';
      score.textContent = `Keyakinan ${entry.confidence}/5`;
      head.appendChild(score);

      item.appendChild(head);

      const snippet = entry.text.trim();
      if (snippet) {
        const text = document.createElement('p');
        text.className = 'confidence-text';
        text.textContent = snippet.length > 100 ? `${snippet.slice(0, 100)}…` : snippet;
        item.appendChild(text);
      }

      return item;
    }

    function render() {
      const { progress, predictions, reflections, completions } = readStores();
      const overview = buildOverview(entries, progress, predictions, reflections, completions);

      if (!overview.hasData) {
        if (emptyEl) emptyEl.hidden = false;
        setSectionVisible(sections.summary, false);
        setSectionVisible(sections.review, false);
        setSectionVisible(sections.challenge, false);
        setSectionVisible(sections.mastery, false);
        setSectionVisible(sections.confidence, false);
        setSectionVisible(sections.enrichment, false);
        setSectionVisible(sections.continue, false);
        setSectionVisible(sections.suggest, false);
        setSectionVisible(sections.breakdown, false);
        setSectionVisible(sections.manage, false);
        return;
      }

      if (emptyEl) emptyEl.hidden = true;
      setSectionVisible(sections.summary, true);
      /* Numi pada ringkasan beralih dari senang ke merayakan begitu ketepatan
         dan jumlah soal yang dikerjakan cukup. */
      const celebrate = overview.answered >= 10 && overview.accuracy >= 0.8;
      if (mascotHappy) mascotHappy.hidden = celebrate;
      if (mascotCelebrate) mascotCelebrate.hidden = !celebrate;
      setSectionVisible(sections.review, overview.answered > 0);
      setSectionVisible(sections.challenge, true);
      setSectionVisible(sections.mastery, overview.answered > 0);
      setSectionVisible(sections.confidence, overview.confidence.total > 0);
      setSectionVisible(sections.enrichment, overview.enrichment.total > 0);
      setSectionVisible(sections.breakdown, true);
      setSectionVisible(sections.manage, true);
      renderSummary(overview);
      renderChallenge(overview);
      if (overview.answered > 0) {
        renderMastery(overview);
        renderReview(progress);
      }
      if (overview.confidence.total > 0) renderConfidence(overview);
      if (overview.enrichment.total > 0) renderEnrichment(overview.enrichment);
      renderContinue(overview);
      renderSuggest(overview);
      renderBreakdown(overview);
    }

    function setupExport() {
      const copyBtn = query<HTMLButtonElement>(root, '[data-export-copy]');
      const downloadBtn = query<HTMLButtonElement>(root, '[data-export-download]');
      const output = query<HTMLTextAreaElement>(root, '[data-export-output]');
      const status = query<HTMLElement>(root, '[data-export-status]');

      const collect = () => {
        const { progress, predictions, reflections, completions } = readStores();
        return JSON.stringify(
          {
            aplikasi: 'Matematika SMA',
            versiSkema: SCHEMA_VERSION,
            dieksporPada: new Date().toISOString(),
            progress,
            predictions,
            reflections,
            completions,
          },
          null,
          2,
        );
      };

      copyBtn?.addEventListener('click', () => {
        const text = collect();
        const fail = () => {
          if (output) {
            output.value = text;
            output.hidden = false;
            output.focus();
            output.select();
          }
          if (status) {
            status.textContent =
              'Penyimpanan papan klip tidak tersedia. Data ditampilkan di kotak teks, silakan salin manual.';
          }
        };
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(
              () => {
                if (status) status.textContent = 'Data kemajuan disalin ke papan klip.';
              },
              fail,
            );
            return;
          }
        } catch {
          /* jatuh ke cadangan di bawah */
        }
        fail();
      });

      downloadBtn?.addEventListener('click', () => {
        try {
          const blob = new Blob([collect()], { type: 'application/json' });
          const objectUrl = URL.createObjectURL(blob);
          const anchor = document.createElement('a');
          anchor.href = objectUrl;
          anchor.download = `kemajuan-matematika-${new Date().toISOString().slice(0, 10)}.json`;
          document.body.appendChild(anchor);
          anchor.click();
          anchor.remove();
          window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
          if (status) status.textContent = 'Berkas JSON sedang diunduh.';
        } catch {
          if (status) status.textContent = 'Tidak dapat mengunduh berkas di peramban ini.';
        }
      });
    }

    function setupReset() {
      const start = query<HTMLButtonElement>(root, '[data-reset-start]');
      const confirm = query<HTMLElement>(root, '[data-reset-confirm]');
      const yes = query<HTMLButtonElement>(root, '[data-reset-yes]');
      const cancel = query<HTMLButtonElement>(root, '[data-reset-cancel]');
      const status = query<HTMLElement>(root, '[data-reset-status]');

      const showConfirm = (visible: boolean) => {
        if (confirm) confirm.hidden = !visible;
        if (start) start.hidden = visible;
      };

      start?.addEventListener('click', () => {
        showConfirm(true);
        yes?.focus();
      });

      cancel?.addEventListener('click', () => {
        showConfirm(false);
        start?.focus();
      });

      yes?.addEventListener('click', () => {
        let ok = false;
        if (storage) {
          try {
            for (const key of LEARNER_KEYS) storage.removeItem(key);
            ok = true;
          } catch {
            ok = false;
          }
        }
        if (status) {
          status.textContent = ok
            ? 'Semua data kemajuan di peramban ini telah dihapus.'
            : 'Tidak dapat mengakses penyimpanan peramban untuk menghapus data.';
        }
        showConfirm(false);
        render();
      });
    }

    render();
    setupExport();
    setupReset();

    window.addEventListener('mtk:progress', render);
    window.addEventListener('mtk:interaction', render);
    window.addEventListener('pageshow', render);
    window.addEventListener('storage', render);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
}
