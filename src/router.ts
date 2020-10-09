import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Tab from './components/TabDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Icon from './components/IconDemo.vue'
import Introduce from './views/Introduce.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: 'introduce', component: Introduce },
        { path: 'install', component: Install },
        { path: 'get-started', component: GetStarted },
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'tab', component: Tab },
        { path: 'dialog', component: Dialog },
        { path: 'icon', component: Icon },
      ],
    },
  ],
})
