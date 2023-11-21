<template>
  <div>
    
  <div class="grid grid-cols-2 gap-4 pt-6">
    <div class="">
      <TotalUsuarios />
    </div>

    <div class=" w-auth-[100px] rounded-md drop-shadow-md border p-2  text-center mr-2">
     <p class="text-bold">Id do usuário autenticado: </p> 
     <span>{{ userId }}</span>
    </div>

    <div >
      <TotalReceitas />
    </div>
    <div class="mr-2">
      <TotalDespesas/>
    </div>

    <div class="Danger">

    </div>
   
  </div>
</div>
</template>

<script setup>
import TotalUsuarios from "@/components/dashboard/TotalUsuarios.vue";
import TotalDespesas from "../components/dashboard/TotalDespesas.vue";
import TotalReceitas from "../components/dashboard/TotalReceitas.vue";



import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();
const userId = userStore.getUserId;

</script>

