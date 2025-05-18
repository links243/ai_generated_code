import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/', 
    name: 'Root',
    redirect: '/chat',
    component: () => import('../views/Layout/index.vue'),
    children: [
      {
        path: '/chat/:uuid?',
        name: 'Chat',
        component: () => import('@/views/Chat/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router