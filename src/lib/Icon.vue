<template>
  <i :class="{[`iconfont ${type}`]:type}"/>
</template>
<script lang="ts">
  export default {
    props: {
      type: {
        type: String,
        required: true
      }
    }
  };
</script>
<style lang="scss">
  .iconfont {
    font-size: 30px;
  }
</style >
