import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const usePiniaStore = defineStore('store', {
  state: () => ({
    screenWidth: document.documentElement.clientWidth,
  }),

  getters: {
    isSmallScreen: (state) => {
      return state.screenWidth < 640; // Adjust the threshold as needed
    },
  },

  actions: {
    updateScreenWidth() {
      this.screenWidth = document.documentElement.clientWidth;
    },
  },
});

