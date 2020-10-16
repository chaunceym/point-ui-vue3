<template>
<Demo :component="TabDemo1" describe="最基本用法" />
<params-table :paramsIntroduce="paramsList" />
</template>

<script lang="ts">
import TabDemo1 from './Tab1.demo.vue'
import Demo from './Demo.vue'
import ParamsTable from './ParamsTable.vue'
import {
  tabParams
} from './demoData';
import {
  ref
} from 'vue';
export default {
  components: {
    Demo,
    ParamsTable
  },
  setup() {
    const paramsList = ref(tabParams.arr)
    return {
      TabDemo1,
      paramsList
    }
  }
};
</script>
