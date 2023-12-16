import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const usePiniaStore = defineStore('store', {
  state: () => ({
    screenWidth: window.innerWidth,
  }),

  getters: {
    isSmallScreen: (state) => {
      return state.screenWidth < 414; // Adjust the threshold as needed
    },
  },

  actions: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
});

