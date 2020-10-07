<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog title="表单" ok-text="yes" cancel-text="no" v-model:visible="visible" :ok="ok" :cancel="cancel">
      确定是否取消
    </Dialog>
  </div>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import {ref} from 'vue';
  import Button from '../lib/Button.vue';

  export default {
    components: {Dialog, Button},
    setup() {
      const visible = ref(false);
      const toggle = () => {
        visible.value = !visible.value;
      };
      const ok = () => {
        console.log('ok');
        // return true;
      };
      const cancel = () => {
        console.log('cancel');
        return false;
      };
      return {visible, toggle, ok, cancel};
    }
  };

</script>
