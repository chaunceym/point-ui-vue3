import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/switch/SwitchDemo.vue';
import Button from './components/button/ButtonDemo.vue';
import Tab from './components/tab/TabDemo.vue';
import Dialog from './components/dialog/DialogDemo.vue';
import Icon from './components/icon/IconDemo.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';

const history = createWebHashHistory();
const md = (fileName) => {
  return h(Markdown, {path: `../markdown/${fileName}.md`, key: fileName});
};
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: 'introduce', component: md('introduce')},
        {path: 'install', component: md('install')},
        {path: 'get-started', component: md('getStarted')},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'tab', component: Tab},
        {path: 'dialog', component: Dialog},
        {path: 'icon', component: Icon},
      ],
    },
  ],
});
