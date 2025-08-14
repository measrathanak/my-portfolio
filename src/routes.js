import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/layout/Home.vue'
import NotFound from '@/components/layout/NotFound.vue'
<<<<<<< HEAD
import Projects from '@/components/layout/Projects.vue'
import Whyme from '@/components/layout/Whyme.vue'
import Skills from '@/components/layout/Skills.vue'
import Contact from '@/components/layout/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Projects', component: Projects },
  { path: '/Skills', component: Skills },
  { path: '/Whyme', component: Whyme },
  { path: '/Contact', component: Contact },
=======

const routes = [
  { path: '/', component: Home },
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  linkActiveClass: 'font-bold',
  linkExactActiveClass: 'font-bold',
  history: createWebHistory(),
  routes,
})

router.afterEach(async (to, from, failure) => {
  if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100)
})

export default router
