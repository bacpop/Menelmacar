import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.scss'

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/view/:modelId',
    name: 'details',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')
