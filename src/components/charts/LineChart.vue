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
    props: {
      option: {
        type: Object,
        default: {}
      }
    },
    methods: {
      init() {
        const Chart = echarts.init(this.$refs.lineChart);
        Chart.setOption(this.option)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
