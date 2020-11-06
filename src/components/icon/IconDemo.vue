<template>
  <h1 style="padding-left: 12px">Icon 图标</h1>
  <ul class="po-icon-container">
    <li @click="copyIcon(value)" v-for="value in types" :key="value">
      <Icon :type="value"/>
      <span class="icon-value">{{ value }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
  import Icon from '../../lib/Icon.vue';
  import {ref} from 'vue';
  import {obj} from '../demoData';

  export default {
    components: {
      Icon
    },
    setup() {
      const types = ref(obj.arr);
      const copyIcon = (value) => {
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.value = `<Icon type="${value}"/>`;
        input.select();
        document.execCommand('Copy');
        document.body.removeChild(input);
        alert(`<Icon type="${value}"/> copyed`);
      };

      return {
        types,
        copyIcon
      };
    },
  };
</script>

<style lang="scss" scoped>
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
      flex: 1;

      > span {
        display: block;
        width: 100%;
        padding: 0 3px;
        margin-top: 10px;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行kkk
        text-align: center;
      }
    }

    > li:hover {
      background: #1b1b1d;
      border-radius: 4px;
      color: #cdbe91;
      cursor: pointer;
    }

    > li:hover .iconfont {
      transform: scale(1.2);
    }

    @media (max-width: 500px) {
      li {
        width: 40px;
      }
      .icon-value{
        display: none;
      }
    }
  }
</style>
