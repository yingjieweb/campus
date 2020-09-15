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
          <radarChart></radarChart>
        </div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="js">
  import barChart from "@/components/charts/barChart"
  import lineChart from "@/components/charts/lineChart"
  import pieChart from "@/components/charts/pieChart"
  import radarChart from "@/components/charts/radarChart"

  export default {
    name: "FormativeEvaluation",
    components: {
      pieChart,
      lineChart,
      barChart,
      radarChart
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
