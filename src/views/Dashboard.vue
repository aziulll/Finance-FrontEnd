<script>
import Usuario from "../components/Usuario/Usuario.vue";

export default {
  components: { Usuario },
};
</script>


<template>
  <div class="main">
    <div class="sidebar">
      <div
        class="sidebarMenu absolute top-0 left-0 h-screen w-48 text-white drop-shadow-2xl"
      >
        <!-- Título do menu -->
        <div
          class="text-xl font-semibold text-center p-4"
          style="font-family: 'Dela Gothic One', cursive"
        >
          FINANCE
        </div>

        <!-- Linha divisória -->
        <hr class="border-t border-gray-600" />

        <!-- Itens do menu -->
        <ul>
          <li class="p-2 text-center">
            <router-link
              to="/home"
              class="nav-link text-white"
              style="text-decoration: none; color: white"
              ><svg
                class="bi d-block mx-auto mb-1"
                width="24px"
                height="24px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                stroke-width="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M5.6 2A2.6 2.6 0 0 0 3 4.6v4.8A2.6 2.6 0 0 0 5.6 12h2.8A2.6 2.6 0 0 0 11 9.4V4.6A2.6 2.6 0 0 0 8.4 2H5.6ZM5.6 14A2.6 2.6 0 0 0 3 16.6v2.8A2.6 2.6 0 0 0 5.6 22h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 8.4 14H5.6ZM15.6 2A2.6 2.6 0 0 0 13 4.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8A2.6 2.6 0 0 0 21 7.4V4.6A2.6 2.6 0 0 0 18.4 2h-2.8ZM15.6 12a2.6 2.6 0 0 0-2.6 2.6v4.8a2.6 2.6 0 0 0 2.6 2.6h2.8a2.6 2.6 0 0 0 2.6-2.6v-4.8a2.6 2.6 0 0 0-2.6-2.6h-2.8Z"
                    fill="#ffffff"
                  ></path>
                </g></svg
              >Dashboard</router-link
            >
          </li>
          <li class="p-2 text-center">
            <router-link
              class="nav-link text-white"
              style="text-decoration: none; color: white"
              to="/receitas"
              ><svg
                class="bi d-block mx-auto mb-1"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 7.5V16.5"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17 3V7H21"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M22 2L17 7"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g></svg
              >Receitas</router-link
            >
          </li>
          <li class="p-2 text-center">
            <router-link
              to="/despesas"
              class="nav-link text-white"
              style="text-decoration: none; color: white"
              ><svg
                class="bi d-block mx-auto mb-1"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 7.5V16.5"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M22 6V2H18"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17 7L22 2"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g></svg
              >Despesas</router-link
            >
          </li>

          <li class="p-2 text-center">
            <router-link
              to="/perfil"
              class="nav-link text-white"
              style="text-decoration: none; color: white"
            >
              <svg
                class="bi d-block mx-auto mb-1"
                width="24px"
                height="24px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>profile [#ffffff]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-180.000000, -2159.000000)"
                      fill="#ffffff"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298"
                          id="profile-[#ffffff]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g></svg
              >Perfil</router-link
            >
          </li>

          
          <li class="p-2 text-center">
            <router-link
              to="/usuarios"
              class="nav-link text-white"
              style="text-decoration: none; color: white"
              ><svg
                class="bi d-block mx-auto mb-1"
                fill="#ffffff"
                width="25px"
                height="25px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>users</title>
                  <path
                    d="M16 21.916c-4.797 0.020-8.806 3.369-9.837 7.856l-0.013 0.068c-0.011 0.048-0.017 0.103-0.017 0.16 0 0.414 0.336 0.75 0.75 0.75 0.357 0 0.656-0.25 0.731-0.585l0.001-0.005c0.875-3.885 4.297-6.744 8.386-6.744s7.511 2.859 8.375 6.687l0.011 0.057c0.076 0.34 0.374 0.59 0.732 0.59 0 0 0.001 0 0.001 0h-0c0.057-0 0.112-0.007 0.165-0.019l-0.005 0.001c0.34-0.076 0.59-0.375 0.59-0.733 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005c-1.045-4.554-5.055-7.903-9.849-7.924h-0.002zM9.164 10.602c0 0 0 0 0 0 2.582 0 4.676-2.093 4.676-4.676s-2.093-4.676-4.676-4.676c-2.582 0-4.676 2.093-4.676 4.676v0c0.003 2.581 2.095 4.673 4.675 4.676h0zM9.164 2.75c0 0 0 0 0 0 1.754 0 3.176 1.422 3.176 3.176s-1.422 3.176-3.176 3.176c-1.754 0-3.176-1.422-3.176-3.176v0c0.002-1.753 1.423-3.174 3.175-3.176h0zM22.926 10.602c2.582 0 4.676-2.093 4.676-4.676s-2.093-4.676-4.676-4.676c-2.582 0-4.676 2.093-4.676 4.676v0c0.003 2.581 2.095 4.673 4.675 4.676h0zM22.926 2.75c1.754 0 3.176 1.422 3.176 3.176s-1.422 3.176-3.176 3.176c-1.754 0-3.176-1.422-3.176-3.176v0c0.002-1.753 1.423-3.174 3.176-3.176h0zM30.822 19.84c-0.878-3.894-4.308-6.759-8.406-6.759-0.423 0-0.839 0.031-1.246 0.089l0.046-0.006c-0.049 0.012-0.092 0.028-0.133 0.047l0.004-0.002c-0.751-2.129-2.745-3.627-5.089-3.627-2.334 0-4.321 1.485-5.068 3.561l-0.012 0.038c-0.017-0.004-0.030-0.014-0.047-0.017-0.359-0.053-0.773-0.084-1.195-0.084-0.002 0-0.005 0-0.007 0h0c-4.092 0.018-7.511 2.874-8.392 6.701l-0.011 0.058c-0.011 0.048-0.017 0.103-0.017 0.16 0 0.414 0.336 0.75 0.75 0.75 0.357 0 0.656-0.25 0.731-0.585l0.001-0.005c0.737-3.207 3.56-5.565 6.937-5.579h0.002c0.335 0 0.664 0.024 0.985 0.070l-0.037-0.004c-0.008 0.119-0.036 0.232-0.036 0.354 0.006 2.987 2.429 5.406 5.417 5.406s5.411-2.419 5.416-5.406v-0.001c0-0.12-0.028-0.233-0.036-0.352 0.016-0.002 0.031 0.005 0.047 0.001 0.294-0.044 0.634-0.068 0.98-0.068 0.004 0 0.007 0 0.011 0h-0.001c3.379 0.013 6.203 2.371 6.93 5.531l0.009 0.048c0.076 0.34 0.375 0.589 0.732 0.59h0c0.057-0 0.112-0.007 0.165-0.019l-0.005 0.001c0.34-0.076 0.59-0.375 0.59-0.733 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005zM16 18.916c-0 0-0 0-0.001 0-2.163 0-3.917-1.753-3.917-3.917s1.754-3.917 3.917-3.917c2.163 0 3.917 1.754 3.917 3.917 0 0 0 0 0 0.001v-0c-0.003 2.162-1.754 3.913-3.916 3.916h-0z"
                  ></path>
                </g></svg
              >Usuários</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="content-right ml-[200px]">
      <div class="Navbar">
        <Usuario />
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
      

    <style >
.sidebarMenu {
  background-color: #3c70f5;
}
</style>
      
      