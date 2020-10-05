<template>
  <button class="po-switch" :class="{ 'po-checked':checked }">
    <span @click="toggle"/>
  </button>
</template>

<script lang="ts">
  export default {
    props: {
      checked: Boolean,
    },
    setup(props, context) {
      const toggle = () => {
        context.emit('update:checked', !props.checked);
      };
      return {
        toggle,
      };
    },
  };
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;

  .po-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #162229;
    border-radius: $h/2;
    position: relative;

    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2/2;
      transition: left 250ms;
    }

    &.po-checked {
      background: #aa853b;
    }

    &.po-checked > span {
      left: calc(100% - #{$h2} - 2px);
    }

    &:focus {
      outline: none;
    }
  }
</style>
