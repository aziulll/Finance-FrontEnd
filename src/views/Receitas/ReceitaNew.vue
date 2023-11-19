<template>
  <div>
    <h2 v-if="isNewReceita" class="text-2xl font-bold text-center mt-6">
      Nova Receita
    </h2>
    <h2 v-else class="text-2xl font-bold text-center mt-6">Editar Receita</h2>
    <form @submit.prevent="submitForm" class="mt-2 ml-6 mr-6 space-y-4">
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

      <!-- <div class="mb-3">
        <label for="categoria" class="block text-sm font-medium text-gray-700"
          >Categoria</label
        >
        <input
          class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:ring-opacity-50"
          type="text"
          id="price"
          v-model="categoria"
          required
        />
      </div> -->

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
        v-if="isNewReceita"
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Adicionar Receita
      </button>
      <button
        type="submit"
        v-else
        class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Atualizar Receita
      </button>
    </form>

    <Notification
      v-if="showSuccessNotification"
      message="Nova receita criada com sucesso!"
      type="success"
    />
    <Notification
      v-if="showErrorNotification"
      message="Ocorreu um erro ao criar a receita."
      type="error"
    />
  </div>
</template>
    
    <script>
import axios from "axios";
//   import Notification from '../Notification.vue';

import { useUserStore } from "../../stores/UserStore";

export default {
  setup() {
    const userStore = useUserStore();
    const idUser = userStore.getUserId;

    return {
      idUser,
    };
  },
  data() {
    return {
      nome: "",
      detalhes: "",
      valor: "",
      categoria: "",

      showSuccessNotification: false,
      showErrorNotification: false,
    };
  },
  components: {
    // Notification,
  },
  computed: {
    isNewReceita() {
      return !this.$route.path.includes("edit");
    },
  },
  async created() {
    if (!this.isNewReceita) {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/receita/receita/${this.$route.params.id}`
      );
      this.receita = response.data;
    }
  },
  methods: {
    async submitForm() {
      console.log(this.idUser);
      try {
        if (this.isNewReceita) {
          await axios.post("http://127.0.0.1:8000/api/receita/criar-receita", {
            nome: this.nome,
            detalhes: this.detalhes,
            valor: this.valor,
            categoria: this.categoria,
            user_id: this.idUser,
          });

          this.showSuccessNotification = true;
          console.log("nova receita criada");
        } else {
          await axios.put(
            `http://127.0.0.1:8000/api/receita/editar-receita/${this.$route.params.id}`,
            this.receita
          );
        }
        this.$router.push("/receitas");
      } catch (error) {
        console.error(error);
        this.showErrorNotification = true;
      }
    },
  },
};
</script>