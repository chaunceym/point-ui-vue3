<template>
  <h1 style="padding-left: 12px">Dialog 模态框</h1>
  <Demo :component="DialogDemo1" describe="最普通的模态框"/>
  <Demo :component="DialogDemo2" describe="使用JS函数打开模态框"/>
  <Demo :component="DialogDemo3" describe="模态框的大小"/>
  <Demo :component="DialogDemo4" describe="模态框里带表单"/>
  <Demo :component="DialogDemo5" describe="模态框里带信息图标"/>
  <Demo :component="DialogDemo6" describe="模态框可以在选择后在回调做一些事情"/>
  <params-table :paramsIntroduce="paramsList"/>
</template>

<script lang="ts">
  import ParamsTable from '../ParamsTable.vue';
  import DialogDemo1 from './Dialog1.demo.vue';
  import DialogDemo2 from './Dialog2.demo.vue';
  import DialogDemo3 from './Dialog3.demo.vue';
  import DialogDemo4 from './Dialog4.demo.vue';
  import DialogDemo5 from './Dialog5.demo.vue';
  import DialogDemo6 from './Dialog6.demo.vue';
  import Demo from '../Demo.vue';
  import {dialogParams} from '../demoData';
  import {ref} from 'vue';

  export default {
    components: {
      Demo,
      ParamsTable
    },
    setup() {
      const paramsList = ref(dialogParams.arr);
      return {
        paramsList,
        DialogDemo1,
        DialogDemo2,
        DialogDemo3,
        DialogDemo4,
        DialogDemo5,
        DialogDemo6,
      };
    }
  };
</script>
