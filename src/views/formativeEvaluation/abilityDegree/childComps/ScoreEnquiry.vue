<template>
  <div style="border: 1px solid gainsboro;">
    <p class="title">个人成绩</p>
    <el-table :data="tableData" stripe>
      <el-table-column prop="courseName" label="课程名" width="180"></el-table-column>
      <el-table-column prop="courseScore" label="成绩" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="js">
  export default {
    name: "ScoreEnquiry",
    created() {
      let computedTableData = [];
      for (let item in this.scores){
        computedTableData.push(Object.assign({}, {courseName: item, courseScore: this.scores[item]}))
      }
      this.tableData = computedTableData;
    },
    data() {
      return {
        scores: this.$store.state.currentUser.scores,
        tableData: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    font-size: 18px;
    color: #303133;
    font-weight: bold;
  }
</style>
