<template>
  <div class="api-table">
    <h2>API</h2>
    <table border="1" cellspacing="0" cellpadding="0">
      <thead>
      <tr>
        <th>参数名</th>
        <th>类型</th>
        <th>说明</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="param in paramsIntroduce" :key="param">
        <td>{{param.name}}</td>
        <td>{{param.type}}</td>
        <td>{{param.explain}}</td>
        <td>{{param.default}}</td>
      </tr>
      </tbody>
    </table>
  </div>
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

<style lang="scss" scoped>
  .api-table{
    padding: 10px;
    >h2{
     padding-left: 4px;
    }
    >table {
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
      border: 1px solid #ebedf0;
      width: 100%;
      margin: 8px 0 16px;
      font-size: 14px;
      line-height: 1.5;
      th,td{
        padding: 10px;
      }
      >thead{
        background: #FAFAFA;
        border-bottom: 3px solid #E8E8E8;
        >th{
          font-weight: normal;
        }
      }
  }

}
</style>
