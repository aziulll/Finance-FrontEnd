<template>
  <main>
    <div class="list-father flex items-center justify-between mt-2">
      <h1 class="text-2xl font-bold">Despesas</h1>

      <form @submit.prevent="searchReceitas" class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Procurar nome..."
            required
          />
        </div>
        <button
          type="submit"
          class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>

      <router-link
        :to="`/despesa/create`"
        class="p-2 w-12 text-black rounded-md"
      >
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11V15L11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17L15 17V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H17V11Z"
              fill="#3A52EE"
            ></path>
          </g>
        </svg>
      </router-link>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mr-2">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">#</th>
            <th scope="col" class="px-6 py-3">Nome</th>
            <th scope="col" class="px-6 py-3">Valor</th>
            <th scope="col" class="px-6 py-3">Categoria</th>
            <th scope="col" class="px-6 py-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="despesa in paginatedDespesas"
            :key="despesa.id"
            class="bg-white border-b hover:bg-gray-50"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ despesa.id }}
            </th>
            <td class="px-6 py-4">
              {{ despesa.nome }}
            </td>
            <td class="px-6 py-4">R${{ despesa.valor }},00</td>
            <td class="px-6 py-4">
              {{ despesa.categoria }}
            </td>
            <td class="px-6 py-4">
              <router-link :to="`/despesa/${despesa.id}/edit`">
                Editar</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex flex-col-reverse items-center">
      <!-- Help text -->
      <span class="text-sm"></span>
      <!-- Buttons -->
      <div class="inline-flex mt-2 xs:mt-0">
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="flex items-center justify-center"
        >
          <svg
            class="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === pageCount"
          class="flex items-center justify-center"
        >
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>
  
  <script>
import axios from "axios";
import { useAuthStore } from "../../stores/AuthStore";
// import TotalComponent from "./TotalComponent.vue";

export default {
  components: {
    // TotalComponent,
  },
  data() {
    return {
      despesas: [],
      total: 0,
      currentPage: 1,
      perPage: 10,
    };
  },
  computed: {
    loggedIn() {
      return useAuthStore().token !== "";
    },
    user() {
      return useAuthStore().user;
    },
    paginatedReceitas() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.despesas.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.despesas.length / this.perPage);
    },
  },
  async created() {
    try {
      const response = await axios.get("/api/despesa/despesa");
      this.despesas = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage += 1;
      }
    },
  },
};
</script>
  
  
  <style scoped>
#list {
  padding: 10px 0 10px 10px;
  margin: 20px 0 0 0;
}
</style>