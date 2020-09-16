<template>
  <Layout>
    <Block title="形成性评价">
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
            <BarChart></BarChart>
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
    name: "FormativeEvaluation",
    components: {
      PieChart,
      LineChart,
      BarChart,
      RadarChart
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
