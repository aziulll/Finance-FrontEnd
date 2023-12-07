<template>
  <div>
    <h2 v-if="isNewReceita" class="text-2xl font-bold text-center mt-6">
      Nova Receita
    </h2>
    <h2 v-else class="text-2xl font-bold text-center mt-6">Editar Receita</h2>
    <form
      v-if="isNewReceita"
      @submit.prevent="submitForm"
      class="mt-2 ml-6 mr-6 space-y-4"
    >
      <div class="mb-3">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Nome:</label
        >
        <input
          class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:ring-opacity-50"
          type="text"
          id="name"
          v-model="nome"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Detalhes:</label
        >
        <textarea
          class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:ring-opacity-50"
          id="description"
          v-model="detalhes"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="price" class="block text-sm font-medium text-gray-700"
          >Valor:</label
        >
        <input
          class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:ring-opacity-50"
          type="number"
          id="price"
          v-model="valor"
          required
          placeholder="R$"
        />
      </div>

      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-700"
        >Categoria</label
      >
      <select
        v-model="categoria"
        id="countries"
        class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:ring-opacity-50"
      >
        <option>Pix</option>
        <option>Projetos</option>
        <option>Bônus</option>
        <option>Salário</option>
      </select>
      <button
        type="submit"
        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-green-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        Adicionar Receita
      </button>
    </form>

    <form v-else @submit.prevent="submitForm" class="mt-2 ml-6 mr-6 space-y-4">
      <div class="mb-3">
       
      </div>
      <!-- <label for="name" class="block text-sm font-medium text-gray-700"
          >Nome:</label
        >
        <input
          class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:ring-opacity-50"
          type="text"
          id="name"
          v-model="nome"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Detalhes:</label
        >
        <textarea
          class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:ring-opacity-50"
          id="description"
          v-model="detalhes"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label
          for="price"
          class="block text-sm font-medium text-gray-700"
          
          >Valor:</label
        >
        <input
          class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:ring-opacity-50"
          type="number"
          id="price"
          v-model="valor"
          required
          placeholder="R$"
        />
      </div>

      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-700"
        >Categoria</label
      >
      <select
        v-model="categoria" 
        id="countries"
        class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:ring-opacity-50"
      >
        <option>Pix</option>
        <option>Projetos</option>
        <option>Bônus</option>
        <option>Salário</option>
      </select> -->
      <button
        type="submit"
        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-green-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        Editar Receita
      </button>
    </form>
  </div>
</template>
    
    <script>
import axios from "axios";

import { useUserStore } from "../../stores/UserStore";
import { useReceitaStore } from "../../stores/ReceitaStore";
export default {
  setup() {
    const userStore = useUserStore();
    const idUser = userStore.getUserId;

    const receitaStore = useReceitaStore();
    const receitaId = receitaStore.getReceitaId;

    return {
      receitaId,
      idUser,
    };
  },
  data() {
    return {
      nome: "",
      detalhes: "",
      valor: "",
      categoria: "",
      receita: [],
    };
  },

  computed: {
    isNewReceita() {
      return !this.$route.path.includes("edit");
    },
  },
  async created() {
    if (!this.isNewReceita) {
     const response = await axios.get(
        `http://127.0.0.1:8000/api/receita/${this.receitaId}/${this.idUser}`
      );

      this.receita = response.data;
      console.log(this.receitaId)
    }
  },
  methods: {
    async submitForm() {
      try {
        if (this.isNewReceita) {
          await axios.post("http://127.0.0.1:8000/api/criar-receita", {
            nome: this.nome,
            detalhes: this.detalhes,
            valor: this.valor,
            categoria: this.categoria,
            user_id: this.idUser,
          });

          this.showSuccessNotification = true;
          console.log("nova receita criada");
        }
        this.$router.push("/receitas");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>