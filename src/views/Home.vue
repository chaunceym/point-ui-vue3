<template>
<div>
  <TopNav />
  <div class="banner">
    <h1 class="title">Point UI</h1>
    <h3>基于 Vue3 的轻量级UI框架</h3>
    <p class="actions">
      <a href="https://github.com/chaunceym">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  color: #fff;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1b1b1d;
  height: 100vh;

  >.title {
    padding-bottom: 40px;
  }

  >.actions {
    padding: 40px 0;

    a {
      margin: 0 12px;
      background: #1b1b1d;
      display: inline-block;
      $h: 32px;
      text-align: center;
      height: $h;
      line-height: $h;
      border: 1px solid #fff;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
