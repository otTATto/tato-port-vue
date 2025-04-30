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
      el.addEventListener('touchstart', (e) => {
        e.preventDefault();
        // タッチスタートしてすぐ終わらせるふりをする
        const touchEndEvent = new Event('touchend', { bubbles: true, cancelable: true });
        e.target?.dispatchEvent(touchEndEvent);
      }, { passive: false });
    } else {
      console.warn('v-prevent-image-actions is attached to a non-image element.');
    }
  }
};