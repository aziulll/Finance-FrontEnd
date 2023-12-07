<template>
  <div >
    <p style="font-family: 'Dela Gothic One', cursive; color:gray;" class="text-center">R$ {{ totalValue }}</p>
  </div>
</template>
  
  <script>
import axios from "axios";
import { useUserStore } from "../../stores/UserStore";

export default {
  data() {
    return {
      totalValue: 0,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/despesa/total/"
      );

      this.totalValue = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
  