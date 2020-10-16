<template>
  <h1 style="padding-left: 12px">Switch 开关</h1>
  <Demo :component="SwitchDemo1" describe="最简单用法"/>
  <Demo :component="SwitchDemo2" describe="Switch 失效状态"/>
  <params-table :paramsIntroduce="paramsList"/>
</template>

<script lang="ts">
  import SwitchDemo1 from './Switch1.demo.vue';
  import SwitchDemo2 from './Switch2.demo.vue';
  import Demo from '../Demo.vue';
  import ParamsTable from '../ParamsTable.vue';
  import {switchParams} from '../demoData';
  import {ref} from 'vue';

  export default {
    components: {
      Demo,
      ParamsTable
    },
    setup() {
      const paramsList = ref(switchParams.arr);
      return {
        SwitchDemo1,
        SwitchDemo2,
        paramsList
      };
    },
  };
</script>
