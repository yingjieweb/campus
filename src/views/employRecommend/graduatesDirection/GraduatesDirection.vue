<template>
  <Layout>
    <Block title="往届毕业生去向">
      <div slot="content" class="container">
        <div class="left">
          <div class="jobOrient">
            <BarChart :option="jobOrient"></BarChart>
          </div>
          <div class="jobOrient">
            <BarChart :option="hotJobs"></BarChart>
          </div>
          <div class="jobOrient">
            <BarChart :option="salaryRank"></BarChart>
          </div>
        </div>
        <div class="map">
          <ChinaMap></ChinaMap>
        </div>
        <div class="right">
          <div class="jobOrient">
            <PieChart></PieChart>
          </div>
          <div class="jobOrient">
            <BarChart :option="jobOrient"></BarChart>
          </div>
          <div class="jobOrient">
            <BarChart :option="jobOrient"></BarChart>
          </div>
        </div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="js">
  import BarChart from "@/components/charts/BarChart"
  import ChinaMap from "@/components/charts/ChinaMap"
  import PieChart from "@/components/charts/PieChart"

  export default {
    name: "GraduatesDirection",
    components: {
      BarChart,
      ChinaMap,
      PieChart
    },
    data(){
      return {
        jobOrient: {
          title: {
            text: '毕业生去向',
            subtext: '毕业生就业热门城市'
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
            data: ['Java', 'Web', '算法', '测试', '产品', '设计']
          },
          series: [
            {
              name: '2020年',
              type: 'bar',
              data: [186, 125, 39, 107, 82, 56]
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
            data: ['Java', 'Web', '算法', '测试', '产品', '设计']
          },
          series: [
            {
              name: '2020年',
              type: 'bar',
              data: [22370, 20698, 27540, 17526, 21010, 18736]
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
      justify-content: space-between;
      margin-right: 5px;

      > .jobOrient {
        height: 246px;
        border: 1px dashed #1296DB;
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
      justify-content: space-between;
      margin-left: 5px;

      > .jobOrient {
        height: 246px;
        border: 1px dashed #1296DB;
      }
    }
  }
</style>
