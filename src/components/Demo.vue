<template>
<div class="switch-demo-1">
  <div class="explain">
    <h4>{{component.__sourceCodeTitle}}</h4>
    <p>{{describe}}</p>
  </div>
  <div class="display">
    <component :is="component" />
    <div class="icon">
      <Icon @click="copyCode" type="icon-copy" />
      <Icon @click="toggleCode" type="icon-accesskeys" />
    </div>
  </div>
  <hr>
  <transition name="fade" mode="out-in" appear>
    <pre v-html="Prism.highlight(component.__sourceCode,Prism.languages.html,'html')" v-if="visibleCode" class="display-code language-html">
      </pre>
  </transition>
</div>
</template>

<script lang="ts">
import Icon from '../lib/Icon.vue'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import {
  ref
} from 'vue'
const Prism = (window as any).Prism // 代码高亮
export default {
  components: {
    Icon
  },
  props: {
    component: Object,
    describe: {
      type: String,
      default: '描述'
    }
  },
  setup(props, context) {
    const visibleCode = ref(false)
    const copyCode = () => {
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.value = props.component.__sourceCode
      input.select()
      if (document.execCommand('copy')) {
        document.execCommand('copy')
        alert('copyed')
      }
      document.body.removeChild(input)
    }
    const toggleCode = () => {
      visibleCode.value = !visibleCode.value
    }

    return {
      visibleCode,
      copyCode,
      toggleCode,
      Prism
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../var';

.switch-demo-1 {
  border-radius: 4px;
  margin: 10px;
  width: 20em;
  border: 1px solid #ccc;
  box-shadow: 0 0 3px fade_out(black, 0.8);

  .display-code {
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
      color: #162229;
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
