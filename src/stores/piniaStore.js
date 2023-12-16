import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const usePiniaStore = defineStore('store', {
  state: () => ({
    screenWidth: window.innerWidth,
  }),

  getters: {
    isSmallScreen: (state) => {
      // You can define your logic here to determine if it's a small screen
      return state.screenWidth < 414; // Adjust the threshold as needed
    },
  },

  actions: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      console.log('sc', this.screenWidth)
    },
  },
});

