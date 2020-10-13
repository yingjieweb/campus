<template>
  <Layout>
    <Block title="个人能力达成度">
      <div slot="content" class="container">
        <div class="basicInfo">
          <div class="basicInfoItem">
            <div style="display:flex; height: 100%">
              <PieChart></PieChart>
              <PieChart></PieChart>
            </div>
          </div>
          <div class="basicInfoItem">
            <LineChart></LineChart>
          </div>
          <div class="basicInfoItem">
            <BarChart :option="option"></BarChart>
          </div>
        </div>
        <div class="radarInfo">
          <RadarChart></RadarChart>
        </div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="js">
  import PieChart from "@/components/charts/PieChart"
  import LineChart from "@/components/charts/LineChart"
  import BarChart from "@/components/charts/BarChart"
  import RadarChart from "@/components/charts/RadarChart"

  export default {
    name: "AbilityDegree",
    components: {
      PieChart,
      LineChart,
      BarChart,
      RadarChart
    },
    data(){
      return {
        option: {
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
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display:flex;
    justify-content: space-between;

    > .basicInfo {
      display:flex;
      flex-direction: column;
      flex-grow: 1;
      margin-right: 8px;
      border: 1px solid gainsboro;

      > .basicInfoItem {
        height: 33.333%;
        border-bottom: 1px solid gainsboro;
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
