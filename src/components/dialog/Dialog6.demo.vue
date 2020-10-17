<demo>带回调的模态框</demo>
<template>
  <Button @click="toggle">带回调模态框</Button>
  <Dialog :ok="ok" :cancel="cancel" v-model:visible="visible">点我就回调</Dialog>
</template>

<script>
  import Dialog from '../../lib/Dialog.vue'
  import Button from '../../lib/Button.vue'
  import {ref} from 'vue';

  export default {
    components: {
      Dialog,
      Button
    },
    setup() {
      const visible = ref(false)
      const toggle = () => {
        visible.value = !visible.value
      }
      const ok = () => {
        alert('你点击了 ok')
      }
      const cancel = () => {
        alert('你点击了 cancel')
      }
      return {
        visible,
        toggle,
        ok,
        cancel
      }
    }
  }
</script>
