<template>
  <div>
    <h1>基础 Dialog</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog title="表单" ok-text="yes" cancel-text="no" v-model:visible="visible" :ok="ok" :cancel="cancel">
      确定是否取消
    </Dialog>
  </div>
  <div>
    <h1>动态生成 Dialog</h1>
    <Button @click="showDialog">showDialog</Button>
  </div>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import {ref} from 'vue';
  import Button from '../lib/Button.vue';
  import {openDialog} from '../lib/openDialog';

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
      const showDialog = () => {
        openDialog({
          title: '动态',
          content: 'nihc',
          okText: 'dyes',
          cancelText: 'dno',
          ok() {
            console.log('dyes');
          },
          cancel() {
            console.log('dno');
          },
          maskClosable: false
        });
      };
      return {visible, toggle, ok, cancel, showDialog};
    }
  };

</script>
