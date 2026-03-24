import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from "firebase/auth"

// 🔥 IMPORTANTE: usa o auth do firebase.js
import { auth } from '../services/firebase'

// Lazy Loading
const Home = () => import('../pages/Home.vue')
const Agendamento = () => import('../pages/Agendamento.vue')
const Sobre = () => import('../pages/Sobre.vue')
const Contato = () => import('../pages/Contato.vue')
const Exhibitions = () => import('../pages/Exhibitions.vue')
const Admin = () => import('../pages/AdminAgendamento.vue')
const Login = () => import('../pages/Login.vue')
const NotFound = () => import('../pages/NotFound.vue')

// Exibições
const Afluente = () => import('../pages/Exibitions/Afluente.vue')
const Cabecas = () => import('../pages/Exibitions/Cabecas.vue')
const Arqueologia = () => import('../pages/Exibitions/Arqueologia.vue')
const Rios = () => import('../pages/Exibitions/Rios.vue')
const Aneis = () => import('../pages/Exibitions/Aneis.vue')

// Subpáginas
const Videos = () => import('../pages/Exibitions/Afluente/Videos.vue')
const Galeria = () => import('../pages/Exibitions/Casas/Galeria.vue')
const DetalheGaleria = () => import('../pages/Exibitions/Casas/DetalheGaleria.vue')
const LinhaTempo = () => import('../pages/Exibitions/Afluente/linhatempo.vue')

const routes = [
  { path: '/', component: Home, meta: { title: 'Museu da Cidade de Manaus' } },
  { path: '/agendamento', component: Agendamento, meta: { title: 'Agendamento | Museu de Manaus' } },
  { path: '/sobre', component: Sobre, meta: { title: 'Sobre | Museu de Manaus' } },
  { path: '/contato', component: Contato, meta: { title: 'Contato | Museu de Manaus' } },
  { path: '/exhibitions', component: Exhibitions, meta: { title: 'Exposições | Museu de Manaus' } },

  // 🔐 Login
  { path: '/login', component: Login, meta: { title: 'Login | Admin' } },

  // 🔒 Admin protegido
  { 
    path: '/admin', 
    component: Admin, 
    meta: { requiresAuth: true, title: 'Admin | Museu de Manaus' } 
  },

  // Exposições
  { path: '/afluente', component: Afluente },
  { path: '/cabecas', component: Cabecas },
  { path: '/arqueologia', component: Arqueologia },
  { path: '/rios', component: Rios },
  { path: '/aneis', component: Aneis },

  // Subpáginas
  { path: '/videos', component: Videos },
  { path: '/galeria', component: Galeria },
  { path: '/galeria/:id', component: DetalheGaleria },
  { path: '/linhatempo', component: LinhaTempo },

  // 404
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// 🔐 Proteção + título
router.beforeEach(async (to, from, next) => {

  if (to.meta.title) {
    document.title = to.meta.title
  }

  const user = await new Promise((resolve) => {
    onAuthStateChanged(auth, resolve)
  })

  if (to.meta.requiresAuth && !user) {
    next('/login')
  } else {
    next()
  }
})

export default router