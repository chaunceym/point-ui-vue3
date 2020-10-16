<template>
<div>
  <div class="switch-demo-1">
    <div class="explain">
      <h4>基本用法</h4>
      <p>最简单用法</p>
    </div>
    <div class="display">
      <switch-demo-1 />
      <div class="icon">
        <Icon @click="copyCode1" type="icon-copy" />
        <Icon @click="toggleCode1" type="icon-accesskeys" />
      </div>
    </div>
    <hr>
    <transition>
      <pre v-text="SwitchDemo1.__sourceCode" v-if="visibleCode1" class="display-code">
      </pre>
    </transition>
  </div>
  <div class="switch-demo-1">
    <div class="explain">
      <h4>不可用</h4>
      <p>Switch 失效状态</p>
    </div>
    <div class="display">
      <switch-demo-2 />
      <div class="icon">
        <Icon @click="copyCode2" type="icon-copy" />
        <Icon @click="toggleCode2" type="icon-accesskeys" />
      </div>
    </div>
    <hr>
    <transition>
      <pre v-text="SwitchDemo2.__sourceCode" v-if="visibleCode2" class="display-code">
      </pre>
    </transition>
  </div>
</div>
</template>

<script lang="ts">
import SwitchDemo1 from './Switch1.demo.vue'
import SwitchDemo2 from './Switch2.demo.vue'
import Icon from '../lib/Icon.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    SwitchDemo1,
    SwitchDemo2,
    Icon,
  },
  setup() {
    const visibleCode1 = ref(false)
    const visibleCode2 = ref(false)
    const copyCode1 = () => {
      console.log('copy')
    }
    const copyCode2 = () => {
      console.log('copy')
    }
    const toggleCode1 = () => {
      visibleCode1.value = !visibleCode1.value
    }
    const toggleCode2 = () => {
      visibleCode2.value = !visibleCode2.value
    }
    return {
      visibleCode1,
      visibleCode2,
      copyCode1,
      copyCode2,
      toggleCode1,
      toggleCode2,
      SwitchDemo1,
      SwitchDemo2
    }
  },
}
</script>

<style lang="scss">
@import '../var';

.switch-demo-1 {
  border-radius: 4px;
  margin: 10px;
  width: 20em;
  border: 1px solid #ccc;
  box-shadow: 0 0 3px fade_out(black, 0.8);

  .display-code {
    padding: 10px;
    overflow: auto;
  }

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

    .icon i:hover {
      color: #93834D;
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
