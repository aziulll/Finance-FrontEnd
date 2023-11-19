<template>
  <div class="flex flex-row mt-2">
    <div>
      <TotalUsuarios />
    </div>

    {{ userId }}
  </div>
</template>

<script setup>
import TotalUsuarios from "@/components/dashboard/TotalUsuarios.vue";
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();
const userId = userStore.getUserId;

</script>

