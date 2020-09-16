<template>
  <div ref="barChart" style="width: 100%; height: 100%;"></div>
</template>

<script lang="js">
  import echarts from 'echarts'

  export default {
    name: "BarChart",
    mounted(){
      this.init();
    },
    methods: {
      init(){
        const Chart = echarts.init(this.$refs.barChart);
        Chart.setOption({
          title: {
            text: '课程成绩柱状图'
          },
          tooltip: {},
          xAxis: {
            data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
          },
          yAxis: {},
          series: [{
            type: 'bar',
            data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
          }]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
