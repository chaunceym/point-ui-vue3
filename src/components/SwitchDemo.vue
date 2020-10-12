<template>
<div>
  <div class="switch-demo-1">
    <div class="explain">
      <h4>基本用法</h4>
      <p>最简单用法</p>
    </div>
    <div class="display">
      <Switch v-model:checked="checked1" />
      <div class="icon">
        <Icon type="icon-copy" />
        <Icon type="icon-accesskeys" />
      </div>
    </div>
  </div>
  <div class="switch-demo-1">
    <div class="explain">
      <h4>不可用</h4>
      <p>Switch 失效状态</p>
    </div>
    <div class="display">
      <Switch v-model:checked="checked2" disabled />
      <div class="icon">
        <Icon @click="copyCode" type="icon-copy" />
        <Icon @click="toggleCode" type="icon-accesskeys" />
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import Icon from '../lib/Icon.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
    Icon,
  },
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)
    const copyCode = () => {
      console.log('copy')
    }
    const toggleCode = () => {
      console.log('toggleCode')
    }
    return {
      checked1,
      checked2,
      copyCode,
      toggleCode,
    }
  },
}
</script>

<style lang="scss">
.switch-demo-1 {
  border-radius: 4px;
  margin: 10px;
  width: 20em;
  border: 1px solid #ccc;
  box-shadow: 0 0 3px fade_out(black, 0.8);

  .display {
    padding: 20px 10px;
    display: flex;
    align-content: center;
    justify-content: space-between;

    .icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .iconfont {
      font-size: 18px;
      margin-right: 4px;
      color: #b3b3b3;
    }
  }

  .explain {
    padding: 10px;

    >h3 {
      color: #777777;
    }

    p {
      padding: 6px 0;
      color: #314659;
      font-size: 14px;
    }
  }
}
</style>
