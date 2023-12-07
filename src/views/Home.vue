<template>
  <div class="w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">

<!-- Bloco 1: Usuários Ativos -->
<div class="bg-white p-4 rounded-md shadow-md">
  <h2 class="text-lg font-semibold mb-2 text-center">Usuários na conta</h2>
  <p class="text-black-600 text-center "  style="font-family: 'Dela Gothic One', cursive; color: gray;">1</p>
  <div class="mt-4">
    <span class="text-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        class="h-5 w-5 inline-block">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 13l4 4L19 7"></path>
      </svg>
     Único usuário dessa conta!
    </span>
  </div>
</div>

<!-- Bloco 2: Receitas do Mês -->
<div class="bg-white p-4 rounded-md shadow-md">
  <h2 class="text-lg font-semibold mb-2 text-center">Receitas do Mês</h2>
  <p class="text-gray-600"><TotalReceitas /></p>
  <div class="mt-4">
    <span class="text-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        class="h-5 w-5 inline-block">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 13l4 4L19 7"></path>
      </svg>
      15% em relação ao mês passado
    </span>
  </div>
</div>

<!-- Bloco 3: Despesas do Mês -->
<div class="bg-white p-4 rounded-md shadow-md">
  <h2 class="text-lg font-semibold mb-2 text-center">Despesas do Mês</h2>
  <p class="text-gray-600"><TotalDespesas/></p>
  <div class="mt-4">
    <span class="text-red-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        class="h-5 w-5 inline-block">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      8% em relação ao mês passado
    </span>
  </div>
</div>


<div class="bg-white p-4 rounded-md shadow-md">
    <h2 class="text-lg font-semibold mb-2 text-center">Pix</h2>
    <p style="font-family: 'Dela Gothic One', cursive; color: gray;" class="text-center">R$ 0,00</p>
    <div class="mt-4">
      <span class="text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="h-5 w-5 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        5% em relação ao mês passado
      </span>
    </div>
  </div>

  <div class="bg-white p-4 rounded-md shadow-md">
    <h2 class="text-lg font-semibold mb-2 text-center">Projetos</h2>
    <p style="font-family: 'Dela Gothic One', cursive; color: gray;" class="text-center">R$ 0,00</p>
    <div class="mt-4">
      <span class="text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="h-5 w-5 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        5% em relação ao mês passado
      </span>
    </div>
  </div>

<!-- Div com Imagem -->
<div class="bg-white p-4 rounded-md shadow-md col-span-2">
  <img src="../assets/financeiro.jpg" alt="">
</div>

<div class="bg-white p-4 rounded-md shadow-md">
  <h2 class="text-lg font-semibold mb-2 text-center">Lembretes</h2>
  <div class="flex items-center">
    <div class="mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        class="h-6 w-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16h-1v-1h1v1zm0-2h-1V7h1v9z"></path>
      </svg>
    </div>
    <p class="text-gray-600">- Envie relatório até sexta-feira</p>
 
  </div>
  
</div>
  
</div>

</template>

<script setup>
import TotalDespesas from "../components/dashboard/TotalDespesas.vue";
import TotalReceitas from "../components/dashboard/TotalReceitas.vue";

import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();
const userId = userStore.getUserId;
</script>

