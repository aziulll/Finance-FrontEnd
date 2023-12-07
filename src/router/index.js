import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Auth/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Registro from '../views/Auth/Registro.vue'
import ReceitaList from '../views/Receitas/ReceitaList.vue'
import DespesasList from '../views/Despesas/DespesasList.vue'
import Home from '../views/Home.vue'
import ReceitaNew from '@/views/Receitas/ReceitaNew.vue'
import Perfil from '@/views/Usuario/PerfilUsuario.vue'
import Solicitacao from '@/views/Auth/Solicitacao.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: Login
    },
    {
      path: '/registrar', component: Registro
    },
    { path: '/solicitacao', component: Solicitacao },

    {

      path: '/about', component: Dashboard,
      children: [

        { path: '/receitas', component: ReceitaList },
        { path: '/despesas', component: DespesasList },
        { path: '/home', component: Home },
        { path: '/receita/create', component: ReceitaNew },
        { path: '/receita/:id/edit', component: ReceitaNew },



        { path: '/perfil', component: Perfil }

      ]

    },

  ]
})

export default router
