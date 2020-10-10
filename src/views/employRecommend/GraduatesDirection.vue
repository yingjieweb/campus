<template>
  <Layout>
    <Block title="往届毕业生去向">
      <div slot="content" class="container">
        <div class="left">
          <div class="jobOrient">
            <BarChart :option="jobOrient"></BarChart>
          </div>
          <div class="kind">
            <div class="hotJobs">
              <BarChart :option="hotJobs"></BarChart>
            </div>
            <div class="hotJobs">
              <BarChart :option="salaryRank"></BarChart>
            </div>
          </div>
        </div>
        <div class="map">
          <ChinaMap></ChinaMap>
        </div>
        <div class="right">
          <div class="jobOrient">
            <BarChart :option="jobOrient"></BarChart>
          </div>
          <div class="kind">
            <div class="hotJobs">
              <BarChart :option="hotJobs"></BarChart>
            </div>
            <div class="hotJobs">
              <BarChart :option="salaryRank"></BarChart>
            </div>
          </div>
        </div>
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
        jobOrient: {
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
            data: ['杭州', '上海', '青岛', '深圳', '南京', '北京']
          },
          series: [
            {
              name: '2020年',
              type: 'bar',
              data: [171, 103, 139, 123, 104, 182]
            }
          ]
        },
        hotJobs: {
          title: {
            text: '就业岗位排行榜',
            subtext: '2020届毕业生热门岗位'
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
            data: ['杭州', '上海', '青岛', '深圳', '南京', '北京']
          },
          series: [
            {
              name: '2020年',
              type: 'bar',
              data: [171, 103, 139, 123, 104, 182]
            }
          ]
        },
        salaryRank: {
          title: {
            text: '岗位薪资排行榜',
            subtext: '岗位薪资排行榜'
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
            data: ['杭州', '上海', '青岛', '深圳', '南京', '北京']
          },
          series: [
            {
              name: '2020年',
              type: 'bar',
              data: [171, 103, 139, 123, 104, 182]
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

      > .jobOrient {
        height: 250px;
        margin-bottom: 5px;
        border: 1px dashed #1296DB;
      }

      > .kind {
        flex-grow: 1;
        border: 1px dashed #1296DB;

        > .hotJobs { height: 50%}
      }
    }

    > .map {
      flex: 6;
      border: 1px dashed #1296DB;
    }

    > .right {
      flex: 2;
      display: flex;
      flex-direction: column;
      margin-left: 5px;

      > .jobOrient {
        height: 250px;
        margin-bottom: 5px;
        border: 1px dashed #1296DB;
      }

      > .kind {
        flex-grow: 1;
        border: 1px dashed #1296DB;

        > .hotJobs { height: 50%}
      }
    }
  }
</style>
