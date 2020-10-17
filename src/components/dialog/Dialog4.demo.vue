<demo>模态框表单</demo>
<template>
  <Button @click="toggleForm">模态框表单</Button>
  <Dialog v-model:visible="visibleForm" :form="true"></Dialog>
</template>

<script lang="ts">
  import Dialog from '../../lib/Dialog.vue';
  import Button from '../../lib/Button.vue';
  import {ref} from 'vue';

  export default {
    components: {
      Button,
      Dialog
    },
    setup() {
      const visibleForm = ref(false);
      const toggleForm = () => {
        visibleForm.value = !visibleForm.value;
      };
      return {
        visibleForm,
        toggleForm
      };
    }
  };
</script>
