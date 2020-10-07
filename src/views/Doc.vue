<template>
  <div class="layout">
    <TopNav class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Swich 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tab">Tab 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/icon">Icon 组件</router-link>
          </li>
        </ol>
      </aside>
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
    > h2 {
      margin: 10px;
    }

    > ol {
      > li {
        padding: 10px 8px;
        margin: 4px 0;
        transition: all 250ms;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
      }

      > li:hover {
        background: $point-color;
        color: $point-bg;
        transform: translate(15%, 10%);
        font-weight: 700;
      }
    }
  }

</style>
