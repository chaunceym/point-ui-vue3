<template>
<div>I am Tab</div>
<Tabs selected="title1">
  <Tab title="title1">Tab1</Tab>
  <Tab title="title2">Tab2</Tab>
  <Tab title="title3">Tab3</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";

export default {
  components: {
    Tabs,
    Tab,
  },
};
</script>
