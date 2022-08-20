import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Main from './pages/Main.vue'
import Md2Sb from './pages/Md2Sb.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/md2sb', component: Md2Sb }
  ]
})

createApp(App).use(router).mount('#app')
