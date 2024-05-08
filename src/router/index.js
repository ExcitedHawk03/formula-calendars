import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import F1Calendar from '../pages/F1Calendar.vue'
import F2Calendar from '../pages/F2Calendar.vue'
import F3Calendar from '../pages/F3Calendar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/f1-calendar',
      name: 'F1 Calendar',
      component: F1Calendar
    },
    {
      path: '/f2-calendar',
      name: 'F2 Calendar',
      component: F2Calendar
    },
    {
      path: '/f3-calendar',
      name: 'F3 Calendar',
      component: F3Calendar
    }
  ]
})

export default router
