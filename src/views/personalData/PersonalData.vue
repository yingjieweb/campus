<template>
  <Block title="个人数据">
    <div slot="content" class="container">
      <div class="score-section">
        <span class="title">课程成绩</span>
        <el-table :data="tableData" stripe border>
          <el-table-column prop="courseName" label="课程名"></el-table-column>
          <el-table-column prop="courseScore" label="成绩"></el-table-column>
        </el-table>
      </div>
      <div class="ability-section">
        <span class="title">个人能力</span>
        <el-table :data="tableData2" stripe border>
          <el-table-column prop="name" label="能力信息"></el-table-column>
          <el-table-column prop="ability" label="能力（满分10分）"></el-table-column>
          <el-table-column prop="classRank" label="班级内排名"></el-table-column>
          <el-table-column prop="majorRank" label="专业排名"></el-table-column>
          <el-table-column prop="gradeRank" label="年级内排名"></el-table-column>
        </el-table>
        <div class="ability-chart">
          <BarChart :option="barOption"></BarChart>
        </div>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import BarChart from "@/components/charts/BarChart"

  export default {
    name: "PersonalData",
    components: {
      BarChart
    },
    data() {
      return {
        scores: this.$store.state.currentUser.scores,
        tableData: [],
        tableData2: [{
          name: '专业知识能力',
          ability: '8.5',
          classRank: '05-04',
          majorRank: '56',
          gradeRank: '517'
        }, {
          name: '学习能力',
          ability: '7.2',
          classRank: '05-04',
          majorRank: '16',
          gradeRank: '569'
        }, {
          name: '实践能力',
          ability: '8.6',
          classRank: '05-01',
          majorRank: '55',
          gradeRank: '519'
        }, {
          name: '创新能力',
          ability: '9.2',
          classRank: '05-03',
          majorRank: '48',
          gradeRank: '116'
        }],
        barOption: {
          title: {
            text: '个人能力水平柱状图'
          },
          legend: {},
          dataset: {
            dimensions: ['product', '18平均', '19平均', '20平均', '21平均', '本人'],
            source: [
              {product: '专业知识能力', '18平均': 85.8, '19平均': 93.7, '20平均': 93.7, '21平均': 91.7, '本人': 43.3},
              {product: '学习能力', '18平均': 73.4, '19平均': 55.1, '20平均': 93.7, '21平均': 87.3, '本人': 83.1},
              {product: '实践能力', '18平均': 65.2, '19平均': 82.5, '20平均': 93.7, '21平均': 90.7, '本人': 86.4},
              {product: '创新能力', '18平均': 53.9, '19平均': 39.1, '20平均': 93.7, '21平均': 84.7, '本人': 72.4}
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
          ]
        },
      }
    },
    created() {
      let computedTableData = [];
      for (let item in this.scores){
        computedTableData.push(Object.assign({}, {courseName: item, courseScore: this.scores[item]}))
      }
      this.tableData = computedTableData;
    },
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

    .score-section {
      flex: 5;
      margin-right: 10px;
    }

    .ability-section {
      flex: 5;

      .ability-chart {
        height: 372px;
        margin-top: 10px;
        border: 1px solid gainsboro;
      }
    }
  }
</style>
