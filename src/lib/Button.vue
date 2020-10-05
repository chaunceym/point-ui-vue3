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
        default: 'button',
      },
      size: {
        type: String,
        default: 'normal'
      },
      level:{
        type:String,
        default: 'default'
      }
    },
    setup(props) {
      const {theme, size,level} = props;
      const classes = computed(() => {
        return {
          [`po-theme-${theme}`]: theme, [`po-size-${size}`]: size, [`po-level-${level}`]: level,
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

    &.po-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }
    &.po-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
    &.po-level-warning{
      border: 1px solid orange;
      color: orange;
    }
    &.po-level-danger{
      border: 1px solid red;
      color: red;
    }
  }
</style>
