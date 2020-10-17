<demo>
  不可用
</demo>
<template>
  <Switch v-model:checked="checked" disabled/>
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
