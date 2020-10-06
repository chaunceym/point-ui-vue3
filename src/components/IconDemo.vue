<template>
  <ul class="po-icon-container">
    <li @click="copyIcon(value)" v-for="value in types" :key="value">
      <Icon :type="value"/>
      <span>{{value}}</span>
    </li>
  </ul>
  <input type="text" class="copyInput">
</template>
<script lang="ts">
  import Icon from '../lib/Icon.vue';
  import {ref} from 'vue';
  import {obj} from './iconName.js';

  export default {
    components: {Icon},
    setup() {
      const types = ref(obj.arr);
      const copyIcon = (value) => {
        const copyInput = document.querySelector('.copyInput');
        copyInput.value = `<Icon type="${value}"/>`;
        copyInput.select();
        document.execCommand('Copy');
        alert(`<Icon type="${value}"/> copyed`);
      };

      return {types, copyIcon};
    }
  };

</script>
<style lang="scss" scoped>
  .copyInput {
    opacity: 0;
  }

  .po-icon-container {
    display: flex;
    flex-wrap: wrap;


    > li {
      display: flex;
      width: 150px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 32px;
      transition: all 500ms;

      > span {
        display: block;
        width: 100%;
        padding: 0 3px;
        margin-top: 10px;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行kkk
      }
    }

    > li:hover {
      background: blue;
      border-radius: 4px;
      color: #fff;
    }

    > li:hover .iconfont {
      transform: scale(1.2)
    }
  }
</style>