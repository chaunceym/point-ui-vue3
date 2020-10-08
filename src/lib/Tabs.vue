<template>
<div class="po-tabs">
  <div class="po-tabs-nav">
    <div class="po-tabs-nav-item" :class="{ selected: t === selected }" v-for="(t, index) in titles" :key="index">
      {{ t }}
    </div>
  </div>
  <div class="po-tabs-content">
    <component class="po-tabs-content-item" v-for="(c, index) in defaults" :is="c" :key="index" />
  </div>
</div>
</template>

<script lang="ts">
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
    const defaults = context.slots.default();
    console.log(defaults);
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("tabs 里必须是 tab 组件");
      }
    });
    const titles = defaults.map((item) => item.props.title);
    return {
      defaults,
      titles,
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
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
