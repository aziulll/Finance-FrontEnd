// user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: null,
    isAdm: false,
  }),
  getters: {
    getUserId: (state) => state.userId,
    getIsAdm: (state) => state.isAdm,

  },
  actions: {
    setUserId(id) {
      this.userId = id;
    },
    setIsAdm(isAdm) {
      this.isAdm = isAdm;
    },
  },
});
