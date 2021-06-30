<template>
  <Block title="能力对比分析">
    <div slot="content" class="container">
      <div class="search">
        <span class="label">学校</span>
        <el-input placeholder="请输入" style="width: 200px;" v-model="school"></el-input>
        <span class="label">学院</span>
        <el-input placeholder="请输入" style="width: 200px;" v-model="college"></el-input>
        <span class="label">专业</span>
        <el-input placeholder="请输入" style="width: 200px;" v-model="major"></el-input>
        <el-button type="primary">分析</el-button>
      </div>
      <div class="charts">
        <div class="left-part">
          <div class="score-table">
            <span class="title">个人能力</span>
            <el-table :data="tableData2" stripe border>
              <el-table-column prop="name" label="能力信息"></el-table-column>
              <el-table-column prop="ability" label="能力（满分10分）"></el-table-column>
              <el-table-column prop="classRank" label="班级内排名"></el-table-column>
              <el-table-column prop="majorRank" label="专业排名"></el-table-column>
              <el-table-column prop="gradeRank" label="年级内排名"></el-table-column>
            </el-table>
          </div>
          <div class="bar-chart">
            <BarChart :option="barOption"></BarChart>
          </div>
        </div>
        <div class="right-part">
          <RadarChart :option="radarOption"></RadarChart>
        </div>
      </div>
    </div>
  </Block>
</template>

<script>
  import BarChart from "@/components/charts/BarChart"
  import RadarChart from "@/components/charts/RadarChart"

  export default {
    name: "AbilityCompare",
    components: {
      BarChart,
      RadarChart,
    },
    data() {
      return {
        school: '',
        college: '',
        major: '',
        barOption: {
          title: {
            text: '个人能力与往届平均能力对比柱状图'
          },
          legend: {},
          tooltip: {},
          dataset: {
            dimensions: ['product', '本人', '18届平均', '19届平均', '20届平均'],
            source: [
              {product: '专业知识能力', '本人': 7.33, '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37},
              {product: '学习能力', '本人': 8.31, '18届平均': 7.34, '19届平均': 8.21, '20届平均': 9.37},
              {product: '实践能力', '本人': 8.64, '18届平均': 8.52, '19届平均': 8.25, '20届平均': 8.67},
              {product: '创新能力', '本人': 8.24, '18届平均': 7.39, '19届平均': 6.91, '20届平均': 8.37}
            ]
          },
          xAxis: {type: 'category'},
          yAxis: [{
            max: 10,
            min: 0,
            type: 'value',
            name: '能力值（分）',
            interval: 2
          }],
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
          ]
        },
        tableData2: [{
          name: '专业知识能力',
          ability: '7.33',
          classRank: '12',
          majorRank: '56',
          gradeRank: '117'
        }, {
          name: '学习能力',
          ability: '8.31',
          classRank: '7',
          majorRank: '16',
          gradeRank: '69'
        }, {
          name: '实践能力',
          ability: '8.64',
          classRank: '6',
          majorRank: '15',
          gradeRank: '49'
        }, {
          name: '创新能力',
          ability: '8.24',
          classRank: '5',
          majorRank: '8',
          gradeRank: '36'
        }],
        radarOption: {
          title: {
            text: '全方位能力分析'
          },
          tooltip: {},
          legend: {
            data: ['本人', '18届平均', '19届平均', '20届平均']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 20,
                padding: [3, 5]
              }
            },
            indicator: [
              {name: '专业知识能力', max: 10},
              {name: '学习能力', max: 10},
              {name: '实践能力', max: 10},
              {name: '创新能力', max: 10}
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            nameTextStyle: {
              padding: [0, 0, 0, 10]    // 四个数字分别为上右下左与原位置距离
            },
            type: 'radar',
            data: [
              {
                value: [7.33, 8.31, 8.64, 8.24],
                name: '本人'
              },
              {
                value: [7.58, 7.34, 8.52, 7.39],
                name: '18届平均'
              },
              {
                value: [8.37, 8.21, 8.25, 6.91],
                name: '19届平均'
              },
              {
                value: [7.37, 9.37, 8.67, 8.37],
                name: '20届平均'
              }
            ]
          }]
        },
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {

    .search {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .label {
        font-size: 14px;
        color: #606266;
        margin-left: 10px;
        margin-right: 10px;
      }

      ::v-deep .el-button {
        padding: 11px 20px;
        margin-left: 10px;
      }
    }

    .charts {
      display: flex;
      height: 700px;

      .left-part {
        flex: 3;

        .score-table {
          border: 1px solid gainsboro;

          .title {
            font-size: 18px;
            color: #303133;
            font-weight: bold;
            margin-left: 6px;
          }
        }
        .bar-chart {
          height: 61%;
          margin-top: 5px;
          border: 1px solid gainsboro;
        }
      }

      .right-part {
        flex: 2;
        margin-left: 5px;
        border: 1px solid gainsboro;
      }
    }
  }
</style>
