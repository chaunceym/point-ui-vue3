<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">Point UI</router-link>
    </div>
    <Icon class="showMenu" @click="toggleMenu" type="icon-menu"/>
    <ul class="menu">
      <li>
        <router-link to="/doc/switch"> 文档</router-link>
      </li>
      <li><a href="https://chaunceym.gitee.io/pointui/">回到旧版</a></li>
      <li><a href="https://github.com/chaunceym">GitHub</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';
  import Icon from '../lib/Icon.vue';

  export default {
    components: {
      Icon,
    },
    setup() {
      const menuVisible = inject<Ref<boolean>>('xxx');
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value;
      };
      return {
        toggleMenu,
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../var";

  .topnav {
    color: $point-color;
    z-index: 10;
    background: $point-bg;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid $point-color;

    > .logo {
      max-width: 6em;
      margin-right: auto;
    }

    > .showMenu {
      width: 24px;
      height: 24px;
      font-size: 20px;
      outline: 0;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;

      > li {
        margin: 0 1em;
      }
    }

    @media (max-width: 500px) {
      .menu {
        display: none;
      }

      .showMenu {
        display: block;
      }

      .logo {
        margin: 0 auto;
      }
    }
  }
</style>
