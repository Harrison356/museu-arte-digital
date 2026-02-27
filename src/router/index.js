import { createRouter, createWebHistory } from 'vue-router'

// Lazy Loading (melhor performance)
const Home = () => import('../pages/Home.vue')
const Sobre = () => import('../pages/Sobre.vue')
const Contato = () => import('../pages/Contato.vue')
const Exhibitions = () => import('../pages/Exhibitions.vue')
const Admin = () => import('../pages/Admin.vue')
const NotFound = () => import('../pages/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Museu da Cidade de Manaus' }
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
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true, title: 'Admin | Museu de Manaus' }
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
