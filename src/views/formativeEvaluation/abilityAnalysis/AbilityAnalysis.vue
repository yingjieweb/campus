<template>
  <Layout>
    <Block title="能力对比分析">
      <div slot="content" class="container">
        <div class="barChart">
          <BarChart :option="option"></BarChart>
        </div>
        <div class="radarChart">
          <RadarChart></RadarChart>
        </div>
      </div>
    </Block>
  </Layout>
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
        option: {
          title: {
            text: '个人能力与往届平均能力对比柱状图'
          },
          legend: {},
          tooltip: {},
          dataset: {
            dimensions: ['product', '本人', '18平均', '19平均', '20平均'],
            source: [
              {product: '类别1', '本人': 43.3, '18平均': 85.8, '19平均': 93.7, '20平均': 93.7},
              {product: '类别2', '本人': 83.1, '18平均': 73.4, '19平均': 55.1, '20平均': 93.7},
              {product: '类别3', '本人': 86.4, '18平均': 65.2, '19平均': 82.5, '20平均': 93.7},
              {product: '类别4', '本人': 72.4, '18平均': 53.9, '19平均': 39.1, '20平均': 93.7}
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
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
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
</style>
