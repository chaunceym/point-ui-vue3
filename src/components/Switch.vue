<template>
<switch-demo v-model:checked="checked" />
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
