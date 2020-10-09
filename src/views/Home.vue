<template>
<div>
  <TopNav />
  <div class="banner">
    <div class="banner-left">
      <h1 class="title">Point UI</h1>
      <h1>基于 Vue3 的轻量级UI框架</h1>
      <p class="actions">
        <a href="https://github.com/chaunceym">GitHub</a>
        <router-link to="/doc">start</router-link>
      </p>
    </div>
    <div class="banner-right"></div>
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
@import "../var";

.banner {
  color: #fff;
  padding: 100px 0;
  display: flex;
  background: #1b1b1d;
  height: 100vh;

  &-left {
    color: $point-color;
    padding: 50px 100px;

    >.title {
      padding-bottom: 40px;
      font-size: 80px;
    }

    >.actions {
      padding: 40px 0;
      margin-top: 40px;

      a {
        &:first-child {
          margin-right: 12px;
          color: $point-color;
          background: $point-bg;
        }

        background: $point-color;
        display: inline-block;
        color: $point-bg;
        $h: 48px;
        text-align: center;
        border: 1px solid $point-color;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 28px;

        &:hover {
          border: 1px solid lighten($point-color, 15%);
          color: lighten($point-color, 45%);
        }
      }
    }
  }

  &-right {
    width: 50%;
  }
}
</style>
