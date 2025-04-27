import type { Directive } from 'vue';

export const preventImageActions: Directive = {
  mounted(el) {
    if (el instanceof HTMLImageElement) {
      el.addEventListener('contextmenu', (e) => e.preventDefault());
      el.addEventListener('selectstart', (e) => e.preventDefault());
      el.addEventListener('mousedown', (e) => e.preventDefault());
    } else {
      console.warn('v-prevent-image-actions is attached to a non-image element.');
    }
  }
};