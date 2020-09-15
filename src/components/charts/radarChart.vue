<template>
  <div ref="radarChart" style="width: 100%; height: 100%;"></div>
</template>

<script lang="js">
  import echarts from 'echarts'

  export default {
    name: "radarChart",
    mounted(){
      this.init();
    },
    methods: {
      init(){
        const Chart = echarts.init(this.$refs.radarChart);
        Chart.setOption({
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
              { name: '学习能力', max: 6500},
              { name: '管理能力', max: 16000},
              { name: '信息沟通能力', max: 30000},
              { name: '运动能力', max: 38000},
              { name: '研发能力', max: 52000},
              { name: '工作能力', max: 25000}
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '平均能力分布'
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '个人能力分布图'
              }
            ]
          }]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
