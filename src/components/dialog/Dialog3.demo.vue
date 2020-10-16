<demo>模态框尺寸</demo>
<template>
  <Button @click="toggleSmall">小号</Button>
  <Button @click="toggleNormal">正常</Button>
  <Button @click="toggleBig">大号</Button>
  <Dialog size="small" v-model:visible="visibleSmall">
    <h1>小号</h1>
  </Dialog>
  <Dialog v-model:visible="visibleNormal">
    <h1>正常</h1>
  </Dialog>
  <Dialog size="big" v-model:visible="visibleBig">
    <h1>大号</h1>
  </Dialog>
</template>

<script lang="ts">
  import Dialog from '../../lib/Dialog.vue';
  import Button from '../../lib/Button.vue';
  import {
    ref
  } from 'vue';

  export default {
    components: {
      Button,
      Dialog
    },
    setup() {
      const visibleSmall = ref(false);
      const visibleNormal = ref(false);
      const visibleBig = ref(false);
      const toggleSmall = () => {
        visibleSmall.value = !visibleSmall.value;
      };
      const toggleNormal = () => {
        visibleNormal.value = !visibleNormal.value;
      };
      const toggleBig = () => {
        visibleBig.value = !visibleBig.value;
      };
      return {
        visibleSmall,
        visibleNormal,
        visibleBig,
        toggleSmall,
        toggleNormal,
        toggleBig,
      };
    }
  };
</script>
