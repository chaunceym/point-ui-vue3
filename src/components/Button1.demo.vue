<demo>按钮类型</demo>
<template>
<Button>普通按钮</Button>
<Button theme="link">链接按钮</Button>
<Button theme="text">文本按钮</Button>
<Button theme="dashed">虚线按钮</Button>
<Button disabled>禁用按钮</Button>
<Button theme="loading">加载</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  components: {
    Button
  }
}
</script>
