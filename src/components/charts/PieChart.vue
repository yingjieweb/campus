<template>
  <div ref="pieChart" style="width: 100%; height: 100%;"></div>
</template>

<script lang="js">
  import echarts from 'echarts'

  export default {
    name: "PieChart",
    mounted() {
      this.init();
    },
    methods: {
      init() {
        const Chart = echarts.init(this.$refs.pieChart);
        Chart.setOption({
          title: {
            text: '个人能力占比图'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}￥ ({d}%)'
          },
          series: [
            {
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  position: 'outer',
                  show: true
                }
              },
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ]
            }
          ]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
