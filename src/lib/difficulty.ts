/**
 * Konstanta tingkat kesulitan. Ditempatkan di lapisan `lib` (bukan `data`) agar
 * modul logika seperti `practice.ts` tidak perlu mengimpor dari lapisan data.
 * `src/data/display.ts` mengekspor ulang keduanya demi kompatibilitas impor
 * lama.
 */

import type { Difficulty } from '@/types/content';

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  dasar: 'Dasar',
  cakap: 'Cakap',
  mahir: 'Mahir',
};

export const DIFFICULTY_ORDER: Difficulty[] = ['dasar', 'cakap', 'mahir'];
