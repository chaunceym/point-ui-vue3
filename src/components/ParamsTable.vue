<template>
  <h1>参数介绍</h1>
  <table>
    <thead>
    <tr>
      <th>参数名</th>
      <th>类型</th>
      <th>说明</th>
      <th>默认值</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="param in paramsIntroduce">
      <td>{{param.name}}</td>
      <td>{{param.type}}</td>
      <td>{{param.explain}}</td>
      <td>{{param.default}}</td>
    </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
  export default {
    props: {
      paramsIntroduce: {
        type: Array,
        required: true
      }
    }
  };
</script>