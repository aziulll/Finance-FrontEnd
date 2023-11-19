<template>
    <div class=" w-auth-[100px] rounded-md drop-shadow-md border p-2">


        <h1 class="text-center mt-2 ">Total de usuários</h1>
        <p class="text-center  mt-2">{{ totalUsuarios }}</p>
    </div>
</template>

<script>

import axios from 'axios';

export default {

// components: {
//   //adicionar componentes
// },
data() {
  return {
    totalUsuarios: 0
  };
},
async created() { // Altere o nome do método para "created"
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/usuarios/total-usuarios");

    this.totalUsuarios = response.data;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
},
methods: {
 // adicionar métodos 
},

};
</script>