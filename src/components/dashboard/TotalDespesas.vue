<template>
    <div class="w-auth-[100px] rounded-md drop-shadow-md border p-2 ">
    <h1>Valor total - Despesas:</h1>
    <span style="color: green ">R$ {{ totalValue }},00</span> 
    </div>
    
  </template>
  
  <script>
  import axios from 'axios';
  import { useUserStore } from '../../stores/UserStore';
  
  export default {
    data() {
      return {
        totalValue: 0,
      };
    },
    async created() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/despesa/total/13');
  
        this.totalValue = response.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
  