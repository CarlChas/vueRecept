import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FavoritesView from '../views/FavoritesView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/favorites', component: FavoritesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
