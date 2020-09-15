<template>
  <Layout>
    <Block title="形成性评价">
      <div slot="content" class="container">
        <div class="basicInfo">
          <div class="basicInfoItem">
            <div style="display:flex; height: 100%">
              <pieChart></pieChart>
              <pieChart></pieChart>
            </div>
          </div>
          <div class="basicInfoItem">
            <lineChart></lineChart>
          </div>
          <div class="basicInfoItem">
            <barChart></barChart>
          </div>
        </div>
        <div class="radarInfo">
          <div ref="radarChart" style="width: 100%; height: 100%;"></div>
        </div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="js">
  import echarts from 'echarts'
  import barChart from "@/components/charts/barChart"
  import lineChart from "@/components/charts/lineChart"
  import pieChart from "@/components/charts/pieChart"

  export default {
    name: "FormativeEvaluation",
    components: {
      barChart,
      lineChart,
      pieChart
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        const Chart = echarts.init(this.$refs.radarChart);
        Chart.setOption({
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
  .container {
    display:flex;
    border: 1px solid green;
    justify-content: space-between;

    > .basicInfo {
      display:flex;
      flex-direction: column;
      flex-grow: 1;
      border: 1px solid red;

      > .basicInfoItem {
        height: 33.3%;
        border: 1px solid yellowgreen;
      }
    }

    > .radarInfo {
      width: 750px;
      height: 750px;
      border: 1px solid gainsboro;
      justify-content: flex-end;
    }
  }
</style>
