<template>
  <Block title="能力对比分析">
    <div slot="content" class="container">
      <div class="search">
        <span class="label">学校</span>
        <el-input placeholder="请输入" style="width: 200px;"></el-input>
        <span class="label">学院</span>
        <el-input placeholder="请输入" style="width: 200px;"></el-input>
        <span class="label">专业</span>
        <el-input placeholder="请输入" style="width: 200px;"></el-input>
        <el-button type="primary">分析</el-button>
      </div>
      <div class="charts">
        <div class="barChart">
          <BarChart :option="barOption"></BarChart>
        </div>
        <div class="radarChart">
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
    name: "AbilityAnalysis",
    components: {
      BarChart,
      RadarChart,
    },
    data() {
      return {
        barOption: {
          title: {
            text: '个人能力与往届平均能力对比柱状图'
          },
          legend: {},
          tooltip: {},
          dataset: {
            dimensions: ['product', '本人', '18平均', '19平均', '20平均'],
            source: [
              {product: '专业能力', '本人': 43.3, '18平均': 85.8, '19平均': 93.7, '20平均': 93.7},
              {product: '学习能力', '本人': 83.1, '18平均': 73.4, '19平均': 55.1, '20平均': 93.7},
              {product: '协作能力', '本人': 86.4, '18平均': 65.2, '19平均': 82.5, '20平均': 93.7},
              {product: '管理能力', '本人': 72.4, '18平均': 53.9, '19平均': 39.1, '20平均': 93.7}
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
            {type: 'bar'}
          ]
        },
        radarOption: {
          title: {
            text: '全方位能力分析雷达图'
          },
          tooltip: {},
          legend: {
            data: ['平均能力分布', '个人能力分布图']
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
              { name: '专业能力', max: 10},
              { name: '学习能力', max: 10},
              { name: '实践能力', max: 10},
              { name: '创新能力', max: 10}
            ]
          },
          series: [{
            name: '平均能力分布 vs 个人能力分布图',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4.3, 7.1, 6.9, 8.0],
                name: '平均能力分布'
              },
              {
                value: [8.2, 6.0, 7.4, 6.8],
                name: '个人能力分布图'
              }
            ]
          }]
        }
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
      height: 500px;

      .barChart {
        flex: 3;
        border: 1px solid gainsboro;
      }

      .radarChart {
        flex: 2;
        margin-left: 5px;
        border: 1px solid gainsboro;
      }
    }
  }
</style>
