<template>
  <Layout>
    <Block title="往届毕业生去向">
      <div slot="content" class="container">
        <div class="left">
          <div class="max">
            <BarChart :option="option"></BarChart>
          </div>
          <div class="kind">
            就业岗位排行榜
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            岗位薪资排行榜
          </div>
        </div>
        <div class="mid">
          <ChinaMap></ChinaMap>
        </div>
        <div class="right"></div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="js">
  import BarChart from "@/components/charts/BarChart"
  import ChinaMap from "@/components/charts/ChinaMap"

  export default {
    name: "GraduatesDirection",
    components: {
      BarChart,
      ChinaMap
    },
    data(){
      return {
        option: {
          title: {
            text: '毕业生去向图',
            subtext: '毕业生主流城市去向'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['北京', '上海', '青岛', '深圳', '南京', '杭州']
          },
          series: [
            {
              name: '2020年',
              type: 'bar',
              data: [182, 103, 239, 203, 104, 131]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 750px;
    display: flex;

    > .left {
      flex: 2;
      display: flex;
      flex-direction: column;
      margin-right: 5px;

      > .max {
        height: 200px;
        margin-bottom: 5px;
        border: 1px dashed #1296DB;
      }

      > .kind {
        flex-grow: 1;
        border: 1px dashed #1296DB;
      }
    }

    > .mid {
      flex: 6;
      border: 1px dashed #1296DB;
    }

    > .right {
      flex: 2;
      margin-left: 5px;
      border: 1px dashed #1296DB;
    }
  }
</style>
