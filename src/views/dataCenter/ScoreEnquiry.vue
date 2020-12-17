<template>
  <Block title="个人成绩">
    <div slot="content" class="container">
      <div class="scoreSection">
        <span class="title">个人成绩</span>
        <el-table :data="tableData" stripe border>
          <el-table-column prop="courseName" label="课程名"></el-table-column>
          <el-table-column prop="courseScore" label="成绩"></el-table-column>
        </el-table>
      </div>
      <div class="abilitySection">
        <span class="title">个人能力</span>
        <el-table :data="tableData2" stripe border>
          <el-table-column prop="ability" label="能力（单项满分为10分）" width="200"></el-table-column>
          <el-table-column prop="classRank" label="班级内排名" width="180"></el-table-column>
          <el-table-column prop="majorRank" label="专业排名" width="180"></el-table-column>
          <el-table-column prop="gradeRank" label="年级内排名"></el-table-column>
        </el-table>
      </div>
    </div>
  </Block>
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
        tableData: [],
        tableData2: [{
          ability: '专业能力',
          classRank: '05-04',
          majorRank: '56',
          gradeRank: '517'
        }, {
          ability: '学习能力',
          classRank: '05-04',
          majorRank: '16',
          gradeRank: '569'
        }, {
          ability: '协作能力',
          classRank: '05-01',
          majorRank: '55',
          gradeRank: '519'
        }, {
          ability: '管理能力',
          classRank: '05-03',
          majorRank: '48',
          gradeRank: '116'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;

    .title {
      font-size: 18px;
      color: #303133;
      font-weight: bold;
      margin-left: 6px;
    }

    .scoreSection {
      flex: 5;
      margin-right: 10px;
    }

    .abilitySection {
      flex: 5;
    }
  }
</style>
