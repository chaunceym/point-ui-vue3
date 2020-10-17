<demo>基本用法</demo>
<template>
  <Switch v-model:checked="checked"/>
</template>

<script>
  import {ref} from 'vue'
  import Switch from '../../lib/Switch.vue'

  export default {
    components: {
      Switch
    },
    setup() {
      const checked = ref(false)
      return {
        checked
      }
    }
  }
</script>
