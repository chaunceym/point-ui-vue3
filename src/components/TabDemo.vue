<template>
<div>I am Tab</div>
<Tabs v-model:selected="selectedValue">
  <Tab title="title1">Tab1</Tab>
  <Tab title="title2">Tab2</Tab>
  <Tab title="title3dddd">Tab33333</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import {
  ref
} from "vue";

export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const selectedValue = ref("title1");
    return {
      selectedValue,
    };
  },
};
</script>
