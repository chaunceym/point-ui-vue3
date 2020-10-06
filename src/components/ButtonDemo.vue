<template>
  <div>
    <div>
      <h1>按钮类型</h1>
      <Button>普通按钮</Button>
      <Button theme="link">链接按钮</Button>
      <Button theme="text">文本按钮</Button>
      <Button theme="dashed">文本按钮</Button>
      <Button disabled>禁用按钮</Button>
      <Button theme="loading">加载</Button>
    </div>
    <div>
      <h1>按钮大小</h1>
      <Button>default</Button>
      <Button size="mini">小按钮</Button>
      <Button size="tiny">小按钮</Button>
      <Button size="small">小按钮</Button>
      <Button size="medium">小按钮</Button>
      <Button size="large">小按钮</Button>
      <Button size="big">小按钮</Button>
      <Button size="huge">小按钮</Button>
    </div>
    <div>
      <h1>按钮级别</h1>
      <Button level="primary">default</Button>
      <Button level="danger">danger</Button>
      <Button level="warning">warning</Button>
    </div>
    <div>
      <h1>组合按钮</h1>
      <Button>default</Button>
      <Button color="olive">olive</Button>
      <Button color="red">red</Button>
      <Button color="yellow">yellow</Button>
      <Button color="green">green</Button>
      <Button color="teal">teal</Button>
      <Button color="blue">blue</Button>
      <Button color="violet">violet</Button>
      <Button color="purple">purple</Button>
      <Button color="pink">pink</Button>
      <Button color="brown">brown</Button>
      <Button color="grey">gery</Button>
      <Button color="black">black</Button>
    </div>
    <div>
      <h1>图标按钮</h1>
      <Button>
        <Icon type="icon-WIFI"/>
      </Button>
      <Button>
        <Icon type="icon-home"/>
      </Button>
      <Button>
        <Icon type="icon-monitoring"/>
      </Button>
      <Button>
        <Icon type="icon-diagnose"/>
      </Button>
      <Button>
        <Icon type="icon-loading"/>
      </Button>
    </div>
    <div>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';
  import Icon from '../lib/Icon.vue';

  export default {
    components: {
      Button, Icon
    },
  };
</script>
