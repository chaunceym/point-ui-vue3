<template>
<div class="po-tabs">
  <div class="po-tabs-nav" ref="container">
    <div @click="select(t)" :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        " class="po-tabs-nav-item" :class="{ selected: t === selected }" v-for="(t, index) in titles" :key="index">
      {{ t }}
    </div>
    <div class="po-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="po-tabs-content">
    <component class="po-tabs-content-item" :class="{ selected: c.props.title === selected }" v-for="(c, index) in defaults" :key="index" :is="c" />
  </div>
</div>
</template>

<script lang="ts">
import {
  onMounted,
  onUpdated,
  ref,
  watchEffect,
  watch
} from "vue";
import Tab from "./Tab.vue";
export default {
  components: {
    Tab,
  },
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref < HTMLDivElement > (null);
    const indicator = ref < HTMLDivElement > (null);
    const container = ref < HTMLDivElement > (null);
    onMounted(() => {
      watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const {
          left: left1
        } = container.value.getBoundingClientRect();
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.left = left2 - left1 + "px";
      });
    });

    // watchEffect(fixed);
    const defaults = context.slots.default();
    const select = (title) => {
      context.emit("update:selected", title);
    };
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("tabs 里必须是 tab 组件");
      }
    });
    const titles = defaults.map((item) => item.props.title);
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.po-tabs {
  &-nav {
    display: flex;
    color: $color;
    position: relative;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 8px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 50px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
