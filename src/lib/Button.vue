<template>
  <button class="po-button" :class="classes">
    <slot/>
  </button>
</template>

<script lang="ts">
  import {computed} from 'vue';

  export default {
    props: {
      theme: {
        type: String,
      },
      size: {
        type: String,
      },
      level: {
        type: String,
      },
      color: {
        type: String,
      }
    },
    setup(props) {
      const {theme, size, level, color} = props;
      const classes = computed(() => {
        return {
          [`po-theme-${theme}`]: theme, [`po-size-${size}`]: size, [`po-level-${level}`]: level,
          [`po-color-${color}`]: color
        };
      });
      return {classes};
    }
  };
</script>

<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .po-button {
    font-weight: 700;
    box-sizing: border-box;
    padding: 10px 20px;
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

    & + & {
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

    &.po-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover, &:focus {
        color: lighten($blue, 10%);
      }
    }

    &.po-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover, &:focus {
        background: darken(white, 5%);;
      }
    }

    &.po-size-mini {
      font-size: 12px;
      padding: 6px 12px;
    }

    &.po-size-tiny {
      font-size: 13px;
      padding: 8px 16px;
    }

    &.po-size-small {
      font-size: 14px;
      padding: 9px 18px;
    }

    &.po-size-medium {
      font-size: 15px;
      padding: 10px 20px;
    }

    &.po-size-large {
      font-size: 16px;
      padding: 11px 22px;
    }

    &.po-size-big {
      font-size: 17px;
      padding: 12px 24px;
    }

    &.po-size-huge {
      font-size: 18px;
      padding: 13px 26px;
    }

    &.po-level-warning {
      border: 1px solid orange;
      color: orange;
    }

    &.po-level-danger {
      border: 1px solid red;
      color: red;
    }

    &.po-color-red {
      background: red;
      color: #fff;
    }

    &.po-color-yellow {
      background: yellow;
      color: #fff;
    }

    &.po-color-olive {
      background: olive;
      color: #fff;
    }

    &.po-color-green {
      background: green;
      color: #fff;
    }

    &.po-color-teal {
      background: teal;
      color: #fff;
    }

    &.po-color-blue {
      background: blue;
      color: #fff;
    }

    &.po-color-violet {
      background: violet;
      color: #fff;
    }

    &.po-color-purple {
      background: purple;
      color: #fff;
    }

    &.po-color-pink {
      background: pink;
      color: #fff;
    }

    &.po-color-brown {
      background: brown;
      color: #fff;
    }

    &.po-color-grey {
      background: grey;
      color: #fff;
    }

    &.po-color-black {
      background: black;
      color: #fff;
    }
  }
</style>
