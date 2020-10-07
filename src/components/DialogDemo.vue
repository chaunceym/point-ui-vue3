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
  <div>
    <h1>基础 Dialog</h1>
    <Button @click="toggleSmall">small</Button>
    <Button @click="toggleNormal">normal</Button>
    <Button @click="toggleBig">big</Button>
    <Dialog size="small" v-model:visible="visibleSmall">
      <h1>Small</h1>
    </Dialog>
    <Dialog v-model:visible="visibleNormal">
      <h1>Normal</h1>
    </Dialog>
    <Dialog size="big" v-model:visible="visibleBig">
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
      <h1>Big</h1>
    </Dialog>
  </div>
  <params-table :params-introduce="paramsList"/>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import ParamsTable from './ParamsTable.vue';
  import {ref} from 'vue';
  import Button from '../lib/Button.vue';
  import {openDialog} from '../lib/openDialog';
  import {dialogParams} from './demoData';

  export default {
    components: {Dialog, Button, ParamsTable},
    setup() {
      const visible = ref(false);
      const visibleSmall = ref(false);
      const visibleNormal = ref(false);
      const visibleBig = ref(false);
      const paramsList = ref(dialogParams.arr);
      const toggle = () => {
        visible.value = !visible.value;
      };
      const toggleSmall = () => {
        visibleSmall.value = !visibleSmall.value;
      };
      const toggleNormal = () => {
        visibleNormal.value = !visibleNormal.value;
      };
      const toggleBig = () => {
        visibleBig.value = !visibleBig.value;
      };
      const ok = () => {
        console.log('ok');
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
      return {
        visible, visibleSmall, toggleSmall, toggle,
        visibleNormal, toggleNormal,
        visibleBig, toggleBig, ok, cancel, showDialog, paramsList
      };
    }
  };

</script>
