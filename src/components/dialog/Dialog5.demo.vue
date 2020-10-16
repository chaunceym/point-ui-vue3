<demo>模态框信息</demo>
<template>
  <Button @click="toggleInfo">普通信息</Button>
  <Dialog v-model:visible="visibleInfo" message="info">
    出现普通信息
  </Dialog>
  <Button @click="toggleSuccess">成功信息</Button>
  <Dialog v-model:visible="visibleSuccess" message="success">
    出现成功信息
  </Dialog>
  <Button @click="toggleWarning">警告信息</Button>
  <Dialog v-model:visible="visibleWarning" message="warning">
    出现警告信息
  </Dialog>
  <Button @click="toggleError">错误信息</Button>
  <Dialog v-model:visible="visibleError" message="error">
    出现错误信息
  </Dialog>
</template>

<script>
  import Dialog from '../../lib/Dialog.vue'
  import Button from '../../lib/Button.vue'
  import {
    ref
  } from 'vue';

  export default {
    components: {
      Dialog,
      Button
    },
    setup() {
      const visibleInfo = ref(false);
      const visibleSuccess = ref(false);
      const visibleWarning = ref(false);
      const visibleError = ref(false);
      const toggleSuccess = () => {
        visibleSuccess.value = !visibleSuccess.value;
      };
      const toggleWarning = () => {
        visibleWarning.value = !visibleWarning.value;
      };
      const toggleError = () => {
        visibleError.value = !visibleError.value;
      };
      const toggleInfo = () => {
        visibleInfo.value = !visibleInfo.value;
      };
      return {
        visibleInfo,
        toggleInfo,
        visibleSuccess,
        toggleSuccess,
        visibleWarning,
        toggleWarning,
        visibleError,
        toggleError,
      }
    }
  }
</script>
