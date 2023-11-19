

<template>
  <div
    class="fundoLogin min-h-screen flex items-center justify-start pl-[121px]"
  >
    <div class="w-full max-w-screen-md">
      <div class="FormsLogin w-full p-4">
        <p class="text-[16px] font-light text-white text-center">
          Seja bem-vindo(a) ao
        </p>
        <div
          class="text-[38px] font-semibold text-center"
          style="font-family: 'Dela Gothic One', cursive"
        >
          FINANCE
        </div>
        <form @submit.prevent="login" class="">
          <div class="mb-4">
    <label for="email-address-icon" class="block mb-2 text-sm font-thin text-white">Email:</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
        </div>
        <input
            type="text"
            id="email-address-icon"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none block w-full pl-10 p-2.5"
            placeholder="exemplo@finance.com"
            v-model="email"
        />
    </div>
</div>

<div class="mb-4">
    <label for="password" class="block text-sm font-thin text-white">Senha:</label>
    <input
        type="password"
        id="password"
        v-model="password"
        required
        class="mt-1 p-2 rounded-md w-full border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none text-black-500"
        placeholder="senha"
    />
</div>


          <div class="flex flex-row mt-2 ">
            <label
              class="relative inline-flex items-center mb-5 cursor-pointer"
            >
              <input type="checkbox" value="" class="sr-only peer" disabled />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-2 mr-[60px] text-sm font-thin text-white-400"
                >Lembrar de mim</span
              >
            </label>

         
          </div>

          <button
            type="submit"
            class="login w-full pt-8 bg-blue-400 text-white font-thin py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Login
          </button>

        
          <!-- <router-link to="/registrar" class="m-5 text-center align-center text-white"
            >Não possuo uma conta</router-link
          > -->

          <p class="pt-2 text-green-500">{{ messagem }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useAuthStore } from "../../stores/AuthStore";
import { useUserStore } from "../../stores/UserStore";

export default {
  data() {
    return {
      email: "",
      password: "",
      messagem: "",
      success: false,
    };
  },
  methods: {
    login() {
      const authStore = useAuthStore();
      const userStore = useUserStore();
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
          device_name: "your_device_name",
        })
        .then((response) => {
          const token = response.data.token;
          const user = response.data.user;

          authStore.login(token, user);
          localStorage.setItem("token", token);
          this.success = true;

          userStore.setUserId(user.id);

          this.$router.push("/home");
        })
        .catch((error) => {
          this.messagem = error;
        });
    },
  },
};
</script>

<style>
.fundoLogin {
  color: white;

  background: linear-gradient(116deg, #0c133b 0.77%, #3c70f5 97.12%);
}

.login {
  background: #3f74ff;
}

.FormsLogin {
  border-radius: 15px;
  border: 2px solid #fff;
  background: rgba(6, 27, 70, 0.27);
  box-shadow: 0px 11px 33.2px 0px rgba(0, 0, 0, 0.25);

  width: 490px;
  height: 542px;
}
</style>