<template>
  <div ref="lineChart" style="width: 100%; height: 100%;"></div>
</template>

<script lang="js">
  import echarts  from 'echarts'

  export default {
    name: "LineChart",
    mounted(){
      this.init();
    },
    methods: {
      init() {
        const Chart = echarts.init(this.$refs.lineChart);
        Chart.setOption({
          title: {
            text: '个人能力曲线'
          },
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {
            show: true,
            formatter: '{b}日: {c}￥'
          },
          series: [{
            type: 'line',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
          }]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
