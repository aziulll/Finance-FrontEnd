
 <template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="p-6 bg-white rounded-lg shadow-lg flex">
      <!-- Elemento da imagem e formulário ocupando a mesma largura -->
      <div class="w-1/2 flex justify-center items-center">
        <img src="@/assets/cadastro.png" alt="Imagem" class="w-2/3 h-auto" />
      </div>
      <div class="w-1/2 p-4">
        <h1 class="text-2xl font-bold mb-4">Seja bem vindo(a) ao Finance!</h1>
        <form @submit.prevent="registro">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Nome</label
            >
            <input
              type="name"
              id="name"
              v-model="name"
              required
              class="mt-1 p-2 rounded-md w-full border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="mt-1 p-2 rounded-md w-full border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="mt-1 p-2 rounded-md w-full border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            class="bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Registrar-se
          </button>
      


          <div class="verificacao mt-6" v-if="password.length > 0"> 

    
            <h2 class="mt-2 text-lg font-semibold text-gray-900">
              Necessário para a senha:
            </h2>          
          <ul
            class="max-w-md space-y-1 text-gray-500 list-inside "
          >
            <li class="flex items-center" v-if="password.length >= 8"> 
              <svg
                class="w-3.5 h-3.5 mr-2 text-green-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                />
              </svg>
             Mínimo 8 caracteres
            </li>

            <li class="flex items-center" v-else> 
              <svg class="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
             Mínimo 8 caracteres
            </li>
            
          
          </ul>
        </div>
          <p class="pt-2 text-green-500">{{ messagem }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      messagem: "",
    };
  },
  methods: {
    registro() {
      axios
        .post("http://127.0.0.1:8000/api/usuarios/novo-usuario", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.messagem = "Usuário cadastrado com sucesso";
          this.$router.push("/");
        })
        .catch((error) => {
          this.messagem = error;
        });
    },
  },
};
</script>
