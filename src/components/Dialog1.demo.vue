<demo>基础 Dialog</demo>
<template>
<Button @click="toggle">打开模态框</Button>
<Dialog v-model:visible="visible">
  确定是否取消
</Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {
  ref
} from 'vue';
export default {
  components: {
    Button,
    Dialog
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    return {
      visible,
      toggle
    }
  }
}
</script>
