<template>
   <div class="mt-6">
     <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
       <li class="pb-3 sm:pb-4" v-for="user in users" :key="user.id">
         <div class="flex items-center space-x-4">
           <div class="flex-shrink-0">
             <img class="w-8 h-8 rounded-full" src="@/assets/logo.png" alt="User image">
           </div>
           <div class="flex-1 min-w-0">
             <p class="text-sm font-medium text-gray-900 truncate">
               {{ user.name }}
             </p>
             <p class="text-sm text-gray-500 truncate">
               {{ user.email }}
             </p>
           </div>
           <div class="inline-flex items-center text-base font-semibold text-gray-900">
             $320
           </div>
         </div>
       </li>
     </ul>
   </div>
 </template>
 
 <script>
 import axios from "axios";
 
 export default {
   data() {
     return {
       users: [],
     };
   },
   mounted() {
     this.fetchUsers();
   },
   methods: {
     async fetchUsers() {
       try {
         const response = await axios.get("http://127.0.0.1:8000/api/usuarios/usuarios");
         this.users = response.data.data; // Ajuste aqui se a estrutura da resposta for diferente
       } catch (error) {
         console.error("Error fetching users:", error);
       }
     },
   },
 };
 </script>
 