import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/', 
    name: 'Root',
    component: () => import('../views/index.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router