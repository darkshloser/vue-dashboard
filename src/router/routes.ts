import { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/team',
    component: () => import('@/views/Team.vue'),
  },
  {
    path: '/contact',
    component: () => import('@/views/Contact.vue'),
  },
]

export default routes