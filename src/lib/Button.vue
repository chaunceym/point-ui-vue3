<template>
  <button :disabled="disabled" class="po-button" :class="classes">
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
      },
      disabled: {
        type: Boolean,
      },
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
  $border-color: #333;
  $color: #333;
  $blue: #40a9ff;
  $grey: grey;
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
    position: relative;
    background: #fff;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fadeout(#000000, 0.95);

    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      border-color: $grey;

      &:hover {
        color: $grey;
        border-color: $grey;
      }
    }

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

    &.po-theme-loading {
      padding-left: 40px;

      &::before {
        content: '';
        display: block;
        height: 14px;
        top: 50%;
        left: 16px;
        margin-top: -8px;
        position: absolute;
        width: 14px;
        border-width: 2px;
        border-color: $color $color $color transparent;
        border-style: solid;
        margin-right: 4px;
        border-radius: 50%;
        animation: loadingCircle 1s infinite linear;
      }

      &:hover,
      &:focus {
        color: $color;
        border-color: $color;
      }
    }

    @keyframes loadingCircle {
      0% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }

    &.po-theme-dashed {
      border-style: dashed;
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
      border-color: orange;
      color: orange;

      &:active {
        color: lighten(orange, 5%);
        border-color: lighten(orange, 5%);
      }
    }

    &.po-level-danger {
      border-color: red;
      color: red;

      &:active {
        color: lighten(red, 5%);
        border-color: lighten(red, 5%);
      }
    }

    &.po-color-red {
      border-color: red;
      background: red;
      color: #fff;

      &:active {
        background: lighten(red, 5%);
        border-color: lighten(red, 5%);
      }
    }

    &.po-color-yellow {
      border-color: yellow;
      background: yellow;
      color: #fff;

      &:active {
        background: lighten(yellow, 5%);
        border-color: lighten(yellow, 5%);
      }
    }

    &.po-color-olive {
      background: olive;
      border-color: olive;
      color: #fff;

      &:active {
        background: lighten(olive, 5%);
        border-color: lighten(olive, 5%);
      }
    }

    &.po-color-green {
      border-color: green;
      background: green;
      color: #fff;

      &:active {
        background: lighten(green, 5%);
        border-color: lighten(green, 5%);
      }
    }

    &.po-color-teal {
      border-color: teal;
      background: teal;
      color: #fff;

      &:active {
        background: lighten(teal, 5%);
        border-color: lighten(teal, 5%);
      }
    }

    &.po-color-blue {
      background: blue;
      border-color: blue;
      color: #fff;

      &:active {
        background: lighten(blue, 5%);
        border-color: lighten(blue, 5%);
      }
    }

    &.po-color-violet {
      background: violet;
      border-color: violet;
      color: #fff;

      &:active {
        background: lighten(violet, 5%);
        border-color: lighten(violet, 5%);
      }
    }

    &.po-color-purple {
      background: purple;
      border-color: purple;
      color: #fff;

      &:active {
        background: lighten(purple, 5%);
        border-color: lighten(purple, 5%);
      }
    }

    &.po-color-pink {
      background: pink;
      border-color: pink;
      color: #fff;

      &:active {
        background: lighten(pink, 5%);
        border-color: lighten(pink, 5%);
      }
    }
  }
</style>
