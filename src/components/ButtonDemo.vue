<template>
<Demo :component="ButtonDemo1" describe="按钮有六种类型：普通按钮、链接按钮、文本按钮、虚线按钮、禁用按钮和加载按钮" />
<Demo :component="ButtonDemo2" describe="显示级别的按钮, 有普通按钮, 危险按钮, 警告按钮" />
<Demo :component="ButtonDemo3" describe="多色按钮, 有很多种颜色可以选择" />
<Demo :component="ButtonDemo4" describe="可以加图标的按钮, 图标库里的都可以加" />
<params-table :params-introduce="paramsList" />
</template>

<script lang="ts">
import ButtonDemo1 from './Button1.demo.vue';
import ButtonDemo2 from './Button2.demo.vue';
import ButtonDemo3 from './Button3.demo.vue';
import ButtonDemo4 from './Button4.demo.vue';
import Demo from './Demo.vue'
import {
  buttonParams
} from './demoData';
import {
  ref
} from 'vue';
import ParamsTable from './ParamsTable.vue';

export default {
  components: {
    ParamsTable,
    Demo
  },
  setup() {
    const paramsList = ref(buttonParams.arr);
    return {
      paramsList,
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
    };
  }
};
</script>
