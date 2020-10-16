<demo>基础用法</demo>
<template>
  <Tabs v-model:selected="selectedValue">
    <Tab title="title1">标题1</Tab>
    <Tab title="title2">标题2</Tab>
    <Tab title="title3">标题3</Tab>
  </Tabs>
</template>

<script lang="ts">
  import Tabs from '../../lib/Tabs.vue';
  import Tab from '../../lib/Tab.vue';
  import {
    ref
  } from 'vue';

  export default {
    components: {
      Tabs,
      Tab,
    },
    setup() {
      const selectedValue = ref('title1');
      return {
        selectedValue,
      };
    },
  };
</script>
