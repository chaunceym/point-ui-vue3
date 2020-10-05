<template>
<button class="po-button" :class="`po-theme-${theme}`">
  <slot />
</button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" >
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;

.po-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background: #fff;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fadeout(#000000, 0.95);

  &+& {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
