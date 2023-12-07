<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Configurações do usuário</h1>
    <span
      class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
      v-if="isAdm"
      >Titular</span
    >
    <div class="grid grid-rows-1 md:grid-cols-2 lg:grid-rows-1 gap-6">
      <div class="border mt-6 p-2">
        <div v-if="user && user.name" class="mt-2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Nome:</label
          >
          <input
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="user.name"
          />
        </div>

        <div v-if="user && user.name" class="mt-2">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Email:</label
          >
          <input
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="user.email"
          />
        </div>

        <div v-if="user && user.name" class="mt-2">
          <label for="nasc" class="block mb-2 text-sm font-medium text-gray-900"
            >Data de nascimento:</label
          >
          <input
            type="text"
            id="nasc"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="user.data_nascimento"
          />
        </div>
      </div>
    </div>

    <button
      type="button"
      class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 mt-2"
      @click="update"
    >
      Salvar
    </button>
    <button
      type="button"
      class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 mt-2"
    >
      Alterar senha
    </button>
  </div>
</template>
<script>
import axios from "axios";
import { useUserStore } from "../../stores/UserStore";

export default {
  data() {
    return {
      user: [],
      isAdm: false,
    };
  },
  mounted() {
    const userStore = useUserStore();

    const userId = userStore.userId;

    if (!userId) {
      console.error("UserId not found in useUserStore");
      return;
    }

    try {
      axios
        .get(`http://127.0.0.1:8000/api/usuarios/user/${userId}`)
        .then((response) => {
          this.user = response.data;

          if (this.user.is_Adm) {
            this.isAdm = true;
          } else {
            console.log("O usuário não é um administrador");
          }
        });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
  methods: {
    async update() {
      try {
        const response = await axios.put(
          `http://127.0.0.1:8000/api/usuarios/${userId}/editar`
        );
        this.user = response.data;
        console.log("Usuário editado com sucesso");
      } catch (error) {
        console.error("Não foi possivel editar o usuário");
      }
    },
  },
};
</script>
