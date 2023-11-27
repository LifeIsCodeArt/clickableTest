import { createRouter, createWebHistory } from 'vue-router'
import ClickSPINMain from '../views/ClickSPINMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ClickSPINMain',
      component: ClickSPINMain
    }
  ]
})

export default router
