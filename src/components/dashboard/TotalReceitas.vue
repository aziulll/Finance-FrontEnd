<template>
<div>

<p style="font-family: 'Dela Gothic One', cursive; color: gray;" class="text-center">R$ {{ totalValue }}</p>

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
        .get(`http://127.0.0.1:8000/api/total/${userId}`)
        .then((response) => {
          this.totalValue = response.data;
        });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
};
</script>
