<template>
<Demo :component="SwitchDemo1" describe="最简单用法" />
<Demo :component="SwitchDemo2" describe="Switch 失效状态" />
</template>

<script lang="ts">
import SwitchDemo1 from './Switch1.demo.vue'
import SwitchDemo2 from './Switch2.demo.vue'
import Demo from './Demo.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
    }
  },
}
</script>
