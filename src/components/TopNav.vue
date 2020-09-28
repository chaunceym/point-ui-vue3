<template>
<div class="topnav">
  <div class="logo">LOGO</div>
  <button class="showMenu" @click="toggleMenu">++</button>
  <ul class="menu">
    <li>菜单1</li>
    <li>菜单2</li>
  </ul>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref,
  ref
} from 'vue'
export default {
  setup() {
    const menuVisible = inject < Ref < boolean >> ('xxx')
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {
      toggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  position: relative;
  z-index: 10;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  >.logo {
    max-width: 6em;
    margin-right: auto;
  }

  >.showMenu {
    width: 24px;
    height: 24px;
    outline: 0;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
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
      margin: 0 auto
    }
  }
}
</style>
