import { defineStore } from 'pinia';

export const useReceitaStore = defineStore('receita', {
  state: () => ({
    receitaId: null,
    
  }),
  getters: {
    getReceitaId: (state) => state.receitaId,
  
  },
  actions: {
    setReceitaId(id) {
      this.receitaId = id;
    },

  },
});
