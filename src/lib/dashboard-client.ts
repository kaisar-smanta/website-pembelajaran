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

export function bootDashboard(): void {
  function boot() {
    const rootEl = document.querySelector<HTMLElement>('[data-kemajuan-root]');
    if (!rootEl) return;
    const root = rootEl;

    const dataEl = document.getElementById('kemajuan-data');
    let entries: TopicEntry[] = [];
    try {
      const parsed: unknown = dataEl ? JSON.parse(dataEl.textContent ?? '[]') : [];
      if (Array.isArray(parsed)) entries = parsed as TopicEntry[];
    } catch {
      entries = [];
    }

    const storage = safeStorage();
    const emptyEl = root.querySelector<HTMLElement>('[data-empty]');
    const mascotHappy = root.querySelector<HTMLElement>('[data-summary-mascot-happy]');
    const mascotCelebrate = root.querySelector<HTMLElement>('[data-summary-mascot-celebrate]');
    const sections = {
      summary: root.querySelector<HTMLElement>('[data-summary]'),
      review: root.querySelector<HTMLElement>('[data-review]'),
      challenge: root.querySelector<HTMLElement>('[data-challenge]'),
      mastery: root.querySelector<HTMLElement>('[data-mastery]'),
      confidence: root.querySelector<HTMLElement>('[data-confidence]'),
      enrichment: root.querySelector<HTMLElement>('[data-enrichment]'),
      continue: root.querySelector<HTMLElement>('[data-continue]'),
      suggest: root.querySelector<HTMLElement>('[data-suggest]'),
      breakdown: root.querySelector<HTMLElement>('[data-breakdown]'),
      manage: root.querySelector<HTMLElement>('[data-manage]'),
    };

    const dateFmt = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeStyle: 'short' });
    const percent = (ratio: number) => `${Math.round(ratio * 100)}%`;
    const formatDate = (value: number) => {
      try {
        return dateFmt.format(new Date(value));
      } catch {
        return '';
      }
    };

    function setSectionVisible(el: HTMLElement | null, visible: boolean) {
      if (el) el.hidden = !visible;
    }

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
      track.setAttribute(
        'aria-valuetext',
        `${answered} dari ${total} soal dikerjakan`,
      );
      const bar = document.createElement('span');
      bar.className = 'bar';
      bar.style.width = total ? `${Math.round((answered / total) * 100)}%` : '0%';
      track.appendChild(bar);
      return track;
    }

    function topicListItem(topic: TopicOverview): HTMLLIElement {
      const item = document.createElement('li');
      item.className = 'continue-item';
      item.style.setProperty('--accent', `var(--color-${accentKey(topic.element)})`);

      const main = document.createElement('div');
      main.className = 'continue-main';

      const link = document.createElement('a');
      link.className = 'continue-title';
      link.href = topic.practiceHref;
      link.textContent = topic.title;

      const meta = document.createElement('span');
      meta.className = 'continue-meta';
      const ratio = topic.total ? `${topic.answered}/${topic.total} soal (${percent(topic.answered / topic.total)})` : 'belum ada soal';
      const accuracy = topic.gradedAnswered ? ` · ketepatan ${percent(topic.accuracy)}` : '';
      const when = topic.lastAt ? ` · terakhir ${formatDate(topic.lastAt)}` : '';
      meta.textContent = `${topic.gradeName} · ${topic.elementName} · ${ratio}${accuracy}${when}`;

      main.append(link);
      if (topic.supplementary) {
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
      material.href = topic.materialHref;
      material.textContent = 'Baca materi';

      item.append(main, material);
      return item;
    }

    function accentKey(element: string): string {
      const map: Record<string, string> = {
        bilangan: 'number',
        'aljabar-fungsi': 'algebra',
        geometri: 'geometry',
        kalkulus: 'calculus',
        'data-peluang': 'data',
      };
      return map[element] ?? 'primary';
    }

    function renderContinue(overview: SiteOverview) {
      const list = sections.continue?.querySelector<HTMLOListElement>('[data-continue-list]');
      const items = continueLearning(overview, 6);
      setSectionVisible(sections.continue, items.length > 0);
      if (!list) return;
      list.replaceChildren(...items.map(topicListItem));
    }

    function renderSuggest(overview: SiteOverview) {
      const list = sections.suggest?.querySelector<HTMLOListElement>('[data-suggest-list]');
      const items = suggestedStart(overview, 4);
      const hasContinue =
        sections.continue instanceof HTMLElement && !sections.continue.hidden;
      setSectionVisible(sections.suggest, !hasContinue && items.length > 0);
      if (list) list.replaceChildren(...items.map(topicListItem));
    }

    function renderEnrichment(summary: EnrichmentSummary) {
      const startedEl = root.querySelector('[data-enrichment-started]');
      const completedEl = root.querySelector('[data-enrichment-completed]');
      const answeredEl = root.querySelector('[data-enrichment-answered]');
      const accuracyEl = root.querySelector('[data-enrichment-accuracy]');
      const list = sections.enrichment?.querySelector<HTMLOListElement>(
        '[data-enrichment-list]',
      );
      const note = root.querySelector<HTMLElement>('[data-enrichment-note]');

      if (startedEl) startedEl.textContent = `${summary.started}/${summary.total}`;
      if (completedEl) completedEl.textContent = String(summary.completed);
      if (answeredEl) {
        answeredEl.textContent = `${summary.answered}/${summary.totalQuestions}`;
      }
      if (accuracyEl) accuracyEl.textContent = percent(summary.accuracy);
      if (list) list.replaceChildren(...summary.topics.map(topicListItem));
      if (note) {
        note.textContent =
          summary.started > 0
            ? 'Topik pengayaan yang sudah disentuh tampil di atas. Materi wajib dan pengayaan dihitung terpisah.'
            : 'Belum ada topik pengayaan yang dimulai. Buka salah satu lewat halaman tantangan bila ingin melangkah lebih jauh.';
      }
    }

    function renderBreakdown(overview: SiteOverview) {
      const body = root.querySelector<HTMLElement>('[data-breakdown-body]');
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
        subjectMeta.textContent = `${subject.answered}/${subject.total} soal dikerjakan · ketepatan ${percent(subject.accuracy)}`;
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
            count.textContent = `${element.answered}/${element.total} soal · ${percent(element.accuracy)}`;
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
      const answered = root.querySelector('[data-stat-answered]');
      const accuracy = root.querySelector('[data-stat-accuracy]');
      const topicsEl = root.querySelector('[data-stat-topics]');
      const interactions = root.querySelector('[data-stat-interactions]');
      const lastEl = root.querySelector('[data-stat-last]');
      const bar = root.querySelector<HTMLElement>('[data-overall-bar]');
      const track = root.querySelector<HTMLElement>('[data-overall-track]');

      if (answered) answered.textContent = `${overview.answered}/${overview.totalQuestions}`;
      if (accuracy) accuracy.textContent = percent(overview.accuracy);
      if (topicsEl) topicsEl.textContent = `${overview.topicsStarted}/${overview.topics.length}`;
      if (interactions) {
        interactions.textContent = String(
          overview.predictions + overview.reflections + overview.activities,
        );
      }
      const ratio = overview.totalQuestions ? overview.answered / overview.totalQuestions : 0;
      if (bar) bar.style.width = `${Math.round(ratio * 100)}%`;
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
      const item = document.createElement('li');
      item.className = 'continue-item';
      item.style.setProperty('--accent', `var(--color-${accentKey(topic.element ?? '')})`);

      const main = document.createElement('div');
      main.className = 'continue-main';

      const link = document.createElement('a');
      link.className = 'continue-title';
      link.href = topic.practiceHref;
      link.textContent = topic.title;

      const meta = document.createElement('span');
      meta.className = 'continue-meta';
      const ratio =
        topic.total > 0
          ? `${topic.answered}/${topic.total} soal (${percent(topic.completion)})`
          : 'belum ada soal';
      const accuracy = topic.gradedAnswered
        ? ` · ketepatan ${percent(topic.accuracy)}`
        : '';
      const enrich = topic.supplementary ? ' · pengayaan' : '';
      meta.textContent = `${topic.gradeName} · ${topic.elementName} · ${ratio}${accuracy} · ${BAND_LABELS[topic.band]}${enrich}`;

      main.append(link, meta);

      const material = document.createElement('a');
      material.className = 'btn btn-secondary btn-sm';
      material.href = topic.materialHref;
      material.textContent = 'Baca materi';

      item.append(main, material);
      return item;
    }

    function renderReview(progress: ProgressMap) {
      const title = root.querySelector<HTMLElement>('[data-review-title]');
      const text = root.querySelector<HTMLElement>('[data-review-text]');
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
      const kicker = root.querySelector<HTMLElement>('[data-challenge-kicker]');
      const title = root.querySelector<HTMLElement>('[data-challenge-title]');
      const text = root.querySelector<HTMLElement>('[data-challenge-text]');
      const link = root.querySelector<HTMLAnchorElement>('[data-challenge-link]');
      const secondary = root.querySelector<HTMLAnchorElement>('[data-challenge-secondary]');
      const ready = overview.answered >= 10 && overview.accuracy >= 0.8;

      if (kicker) kicker.textContent = ready ? 'Pengayaan' : 'Latihan';
      if (title) title.textContent = ready ? 'Kamu siap untuk tantangan' : 'Tingkatkan ketepatanmu';
      if (text) {
        text.textContent = ready
          ? `Ketepatanmu ${percent(overview.accuracy)} dari ${overview.answered} soal yang dikerjakan. Coba soal tingkat mahir dan topik pengayaan untuk melangkah lebih jauh.`
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
      const bandsEl = root.querySelector<HTMLElement>('[data-mastery-bands]');
      const list = root.querySelector<HTMLOListElement>('[data-mastery-list]');
      const note = root.querySelector<HTMLElement>('[data-mastery-note]');
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
      const totalEl = root.querySelector('[data-conf-total]');
      const averageEl = root.querySelector('[data-conf-average]');
      const lowCountEl = root.querySelector('[data-conf-low-count]');
      const list = root.querySelector<HTMLUListElement>('[data-conf-list]');
      const note = root.querySelector<HTMLElement>('[data-conf-note]');

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
      const copyBtn = root.querySelector<HTMLButtonElement>('[data-export-copy]');
      const downloadBtn = root.querySelector<HTMLButtonElement>('[data-export-download]');
      const output = root.querySelector<HTMLTextAreaElement>('[data-export-output]');
      const status = root.querySelector<HTMLElement>('[data-export-status]');

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
      const start = root.querySelector<HTMLButtonElement>('[data-reset-start]');
      const confirm = root.querySelector<HTMLElement>('[data-reset-confirm]');
      const yes = root.querySelector<HTMLButtonElement>('[data-reset-yes]');
      const cancel = root.querySelector<HTMLButtonElement>('[data-reset-cancel]');
      const status = root.querySelector<HTMLElement>('[data-reset-status]');

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
