import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MessageView from '../views/MessageView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/message',
    name: 'message',
    component: MessageView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
