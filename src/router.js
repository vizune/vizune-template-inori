import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'

// Add a page: create it in src/pages, then add a route here and a link in Header/Navigation.vue
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export default createRouter({
  // Hash URLs (/#/about) work on any static host without server config.
  // Switch to createWebHistory() for clean URLs if your host supports an SPA fallback.
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
