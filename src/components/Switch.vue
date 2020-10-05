<template>
<switch-demo :value="checked" @input="checked = $event" />
</template>

<script lang="ts">
import {
  ref
} from "vue";
import SwitchDemo from "../lib/SwitchDemo.vue";
export default {
  components: {
    SwitchDemo,
  },
  setup() {
    const checked = ref(false);
    return {
      checked,
    };
  },
};
</script>
