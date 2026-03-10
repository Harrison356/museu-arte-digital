import { createRouter, createWebHistory } from 'vue-router'


// Lazy Loading (melhor performance)
const Home = () => import('../pages/Home.vue')
const Agendamento = () => import('../pages/Agendamento.vue')
const Sobre = () => import('../pages/Sobre.vue')
const Contato = () => import('../pages/Contato.vue')
const Exhibitions = () => import('../pages/Exhibitions.vue')
const Admin = () => import('../pages/AdminAgendamento.vue')
const NotFound = () => import('../pages/NotFound.vue')
const Afluente = () => import('../pages/Exibitions/Afluente.vue')
const Cabecas = () => import('../pages/Exibitions/Cabecas.vue')
const Arqueologia = () => import('../pages/Exibitions/Arqueologia.vue')
const Rios = () => import('../pages/Exibitions/Rios.vue')
const Aneis = () => import('../pages/Exibitions/Aneis.vue')
const Videos = () => import('../pages/Exibitions/Afluente/Videos.vue')
const LinhaTempo = () => import('../pages/Exibitions/Afluente/linhatempo.vue')




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Museu da Cidade de Manaus' }
  },
  {
    path: '/Agendamento',
    name: 'Agendamento',
    component: Agendamento,
    meta: { title: 'Agendamento | Museu de Manaus' }
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre,
    meta: { title: 'Sobre | Museu de Manaus' }
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
    meta: { title: 'Contato | Museu de Manaus' }
  },
  {
    path: '/exhibitions',
    name: 'Exhibitions',
    component: Exhibitions,
    meta: { title: 'Exposições | Museu de Manaus' }
  },
  {
    path: '/admin',
    name: 'AdminAgendamento',
    component: Admin,
    meta: { requiresAuth: true, title: 'Admin | Museu de Manaus' }
  },{
  path: '/afluente',
  name: 'Afluente',
  component: Afluente
},
  {
  path: '/cabecas',
  name: 'Cabecas',
  component: Cabecas
},
  {
  path: '/videos',
  name: 'Videos',
  component: Videos
},
  {
  path: '/linhatempo',
  name: 'LinhaTempo',
  component: LinhaTempo
},
  {
  path: '/arqueologia',
  name: 'Arqueologia',
  component: Arqueologia
},
  {
  path: '/rios',
  name: 'Rios',
  component: Rios
},
  {
  path: '/aneis',
  name: 'Aneis',
  component: Aneis
},
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// Atualiza título da página dinamicamente
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
