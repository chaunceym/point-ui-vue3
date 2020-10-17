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
import introduce from './markdown/introduce.md';
import install from './markdown/install.md';
import getStarted from './markdown/getStarted.md';

const history = createWebHashHistory();
const md = (string, key) => {
  return h(Markdown, {content: string, key});
};
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: 'introduce', component: md(introduce, 'introduce')},
        {path: 'install', component: md(install, 'install')},
        {path: 'get-started', component: md(getStarted, 'getStarted')},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'tab', component: Tab},
        {path: 'dialog', component: Dialog},
        {path: 'icon', component: Icon},
      ],
    },
  ],
});
