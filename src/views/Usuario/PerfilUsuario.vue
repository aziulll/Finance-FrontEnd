<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Configurações do usuário</h1>
    <span
      class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
      v-if="adm">Adm</span>
    <div class="grid grid-rows-1 md:grid-cols-2 lg:grid-rows-1 gap-6">
      <div class="">
        <div v-if="user && user.name" class="pt-4">
          <div class="border rounded-md shadow-md p-2">
            <span class="font-semibold">Nome:</span>
            {{ user.name }}
          </div>
        </div>

        <div
          class="border rounded-md shadow-md p-2 mt-2"
          v-if="user && user.name"
        >
          <span class="font-semibold">Email:</span>
          {{ user.email }}
        </div>

        <div class="border rounded-md shadow-md p-2 mt-2">
          <span class="font-semibold">Endereço:</span>
        </div>
      </div>

      <!-- Adicionando a div da foto -->
      <div class="photo-container mt-6">
        <img
          class="w-20 h-20 rounded"
          src="https://media.licdn.com/dms/image/D4D03AQGv-WXqbiHdzg/profile-displayphoto-shrink_800_800/0/1689260566097?e=1706140800&v=beta&t=e6afkK0tzeC04zSsqWdPyWsDVVmUsO7-tscUkCVClhs"
          alt="Large avatar"
        />
      </div>
    </div>

    <button
      type="button"
      class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 mt-2"
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
      user: null,
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
        .get(`http://127.0.0.1:8000/api/usuarios/${userId}`)
        .then((response) => {
          this.user = response.data;

          if (this.user.is_Adm) {
            this.isAdm = true
            
          } else {
            console.log("O usuário não é um administrador");
            
          }

        });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
};
</script>
