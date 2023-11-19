// user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: null, // Inicialmente, o ID do usuário é nulo
  }),
  getters: {
    getUserId: (state) => state.userId,
  },
  actions: {
    setUserId(id) {
      this.userId = id;
    },
  },
});
