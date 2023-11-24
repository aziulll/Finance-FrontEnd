<template>
  <div class="w-auth-[100px] rounded-md drop-shadow-md border p-2 ">
  <h1>Valor total - Receitas:</h1>
  <span style="color: green ">R$ {{ totalValue }},00</span> 
  </div>
  
</template>

<script>
import axios from "axios";
import { useUserStore } from '../../stores/UserStore';

export default {
  data() {
    return {
      totalValue: 0,
    };
  },
  mounted() {
    const userStore = useUserStore(); 

    // Se você tem o userId no seu store, use-o
    const userId = userStore.userId;

    if (!userId) {
      console.error("UserId not found in useUserStore");
      return;
    }

    try {
      axios
        .get(`http://127.0.0.1:8000/api/receita/total/${userId}`)
        .then((response) => {
          this.totalValue = response.data;
        });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
};
</script>
