<template>
  <div class="layout">
    <TopNav class="nav"/>
    <div class="content">
      <transition name="fade">
        <aside v-if="menuVisible">
          <h3 class="doc-title">开始使用</h3>
          <ol>
            <li>
              <router-link to="/doc/introduce">项目介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">快速上手</router-link>
            </li>
          </ol>
          <h3 class="doc-title">组件列表</h3>
          <ol>
            <li>
              <router-link to="/doc/switch">Swich 开关</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 按钮</router-link>
            </li>
            <li>
              <router-link to="/doc/tab">Tab 切换</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 模态框</router-link>
            </li>
            <li>
              <router-link to="/doc/icon">Icon 图标</router-link>
            </li>
          </ol>
        </aside>
      </transition>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    inject,
    Ref,
    ref
  } from 'vue';
  import TopNav from '../components/TopNav.vue';
  import {
    router
  } from '../router';

  export default {
    components: {
      TopNav,
    },
    setup() {
      const menuVisible = inject<Ref<boolean>>('xxx');
      return {
        menuVisible,
      };
    },
  };
</script>

<style lang="scss">
  @import '../var';

  .fade-enter-active { //类名：隐藏到显示过程所需要的时间
    animation: bounce-in 250ms;
  }

  .fade-leave-active { //类名：显示到隐藏过程所需要的时间
    animation: bounce-in 250ms reverse; //reverse表示和隐藏到显示动画相反
  }

  @keyframes bounce-in {
    0% {
      left: -150px;
    }
    100% {
      left: 0;
    }
  }

  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > .nav {
      flex-shrink: 0;
    }

    > .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;

      .doc-title {
        color: #BBA179;
        padding: 4px 0;
      }

      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    > aside {
      flex-shrink: 0;

    }

    > main {
      overflow: auto;
      flex-grow: 1;
      padding: 16px;
      background: $point-white;
    }
  }

  aside {
    color: $point-color;
    background: $point-bg;
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 70px 8px 8px;
    height: 100%;
    z-index: 8;

    > h3 {
      margin: 10px 8px;
    }

    > ol {
      > li {
        a {
          display: inline-flex;
          width: 100%;
          height: 100%;
          padding: 4px 8px;
          transition: all 250ms;
        }
      }
    }

    .router-link-active {
      color: $point-bg;
      background: $point-color;
      border-radius: 4px;
      font-weight: 700;
    }
  }
</style>
