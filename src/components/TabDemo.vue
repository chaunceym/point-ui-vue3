<template>
  <div>
    I am Tab
  </div>
  <Tabs>
    <Tab>Tab1</Tab>
    <Tab>Tab2</Tab>
  </Tabs>
</template>
<script lang="ts">
  import Tabs from '../lib/Tabs.vue';
  import Tab from '../lib/Tab.vue';

  export default {
    components: {Tabs, Tab}
  };
</script>