// @brief PC の右クリックやドラッグ、スマホのタッチ操作を無効化するディレクティブ
// @detail 画像に適応することを想定している

import type { Directive } from 'vue';

export const preventImageActions: Directive = {
  mounted(el) {
    if (el instanceof HTMLImageElement) {
      // PC: 右クリックメニューを無効化
      el.addEventListener('contextmenu', (e) => e.preventDefault());
      // PC: ドラッグを無効化
      el.addEventListener('selectstart', (e) => e.preventDefault());
      el.addEventListener('mousedown', (e) => e.preventDefault());
      // スマホ: タッチ操作を無効化
      let touchTimer: number | null = null;
      el.addEventListener('touchstart', (e) => {
        // 500ms 以上のタッチを長押しと見なし、タッチ操作を無効化
        touchTimer = window.setTimeout(() => {
          e.preventDefault();
        }, 500);
      });
      el.addEventListener('touchmove', () => {
        // 指を動かしたら、スクロールと見なし、タッチ操作の無効化を解除
        if (touchTimer !== null) {
          clearTimeout(touchTimer);
          touchTimer = null;
        }
      });
      el.addEventListener('touchend', () => {
        // タッチが終わったら、タッチ操作の無効化を解除
        if (touchTimer !== null) {
          clearTimeout(touchTimer);
          touchTimer = null;
        }
      });
    } else {
      console.warn('v-prevent-image-actions is attached to a non-image element.');
    }
  }
};