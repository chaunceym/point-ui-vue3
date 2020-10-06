<template>
  <div class="topnav">
    <div class="logo">Point UI</div>
    <Icon class="showMenu" @click="toggleMenu" type="icon-menu"/>
    <ul class="menu">
      <li>文档</li>
      <li>教程</li>
      <li><a href="https://github.com/chaunceym">GitHub</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {
    inject,
    Ref,
    ref
  } from 'vue';
  import Icon from '../lib/Icon.vue';

  export default {
    components: {
      Icon
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
  .topnav {
    color: #fff;
    z-index: 10;
    background: #1b1b1d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

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
