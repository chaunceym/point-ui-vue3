import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: MyButton },
    { path: '/input', component: MyInput },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
