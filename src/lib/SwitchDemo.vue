<template>
<button :class="{ checked }">
  <span @click="toggle"></span>
</button>
</template>

<script lang="ts">
import {
  ref
} from "vue";
export default {
  props: {
    checked: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:checked", !props.checked);
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;

  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 250ms;
  }

  &.checked {
    background: blue;
  }

  &.checked>span {
    left: calc(100% - #{$h2} - 2px);
  }

  &:focus {
    outline: none;
  }
}
</style>
