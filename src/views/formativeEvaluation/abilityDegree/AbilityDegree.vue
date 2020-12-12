<template>
  <Layout>
    <Block title="个人能力达成度">
      <div slot="content" class="container">
        <div class="indexOptions">
          <el-button type="primary">评价</el-button>
          <el-button type="primary">评价</el-button>
          <el-button type="primary">评价</el-button>
        </div>
        <div class="indexChart">
          <div class="lineChart">
            <LineChart :option="option"></LineChart>
          </div>
          <div class="pieChart">
            <PieChart></PieChart>
          </div>
        </div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="js">
  import PieChart from "@/components/charts/PieChart"
  import LineChart from "@/components/charts/LineChart"
  import RadarChart from "@/components/charts/RadarChart"

  export default {
    name: "AbilityDegree",
    components: {
      PieChart,
      LineChart,
      RadarChart
    },
    data(){
      return {
        option: {
          title: {
            text: '个人能力曲线'
          },
          legend: {
            data: ['专业能力', '学习能力', '协作能力', '管理能力']
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['类别一', '类别二', '类别三', '类别四']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '专业能力',
              type: 'line',
              stack: '总量',
              data: [162, 182, 191, 234]
            },
            {
              name: '学习能力',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154]
            },
            {
              name: '协作能力',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334]
            },
            {
              name: '管理能力',
              type: 'line',
              stack: '总量',
              data: [225, 486, 301, 534]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;

    .indexOptions {
      flex: 3;
      margin-right: 10px;
      border: 1px solid gainsboro;
    }

    .indexChart {
      flex: 5;

      .lineChart, .pieChart {
        flex: 1;
        height: 350px;
        border: 1px solid gainsboro;
      }
    }
  }
</style>
