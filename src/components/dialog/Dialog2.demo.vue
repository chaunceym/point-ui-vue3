<demo>动态生成模态框</demo>
<template>
  <Button @click="showDialog">动态打开模态框</Button>
</template>

<script lang="ts">
  import Dialog from '../../lib/Dialog.vue';
  import Button from '../../lib/Button.vue';
  import {
    openDialog
  } from '../../lib/openDialog';
  import {
    ref
  } from 'vue';

  export default {
    components: {
      Button,
      Dialog
    },
    setup() {
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
      return {
        showDialog
      };
    }
  };
</script>
