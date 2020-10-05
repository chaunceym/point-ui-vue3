<template>
  <div>
    <div>
      <h1>按钮类型</h1>
      <Button>普通按钮</Button>
      <Button theme="link">链接按钮</Button>
      <Button theme="text">文本按钮</Button>
    </div>
    <div>
      <h1>按钮大小</h1>
      <Button>普通按钮</Button>
      <Button size="big">大按钮</Button>
      <Button size="small">小按钮</Button>
    </div>
    <div>
      <h1>按钮颜色</h1>
      <Button level="primary">默认</Button>
      <Button level="danger">危险</Button>
      <Button level="warning">警告</Button>
    </div>
    <div>
      <h1>加载中按钮</h1>
      <Button level="primary">默认</Button>
      <Button level="danger">危险</Button>
      <Button level="warning">警告</Button>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    components: {
      Button,
    },
  };
</script>
