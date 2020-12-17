<template>
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
          <PieChart :option="positionPredict"></PieChart>
        </div>
        <div class="jobOrient">
          <BarChart :option="enrollRate"></BarChart>
        </div>
        <div class="jobOrient">
          <LineChart :option="positionTrend"></LineChart>
        </div>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import ChinaMap from "@/components/charts/ChinaMap"
  import BarChart from "@/components/charts/BarChart"
  import PieChart from "@/components/charts/PieChart"
  import LineChart from "@/components/charts/LineChart"

  export default {
    name: "GraduatesDirection",
    components: {
      ChinaMap,
      BarChart,
      PieChart,
      LineChart
    },
    data() {
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
        },
        positionPredict: {
          title: {
            text: '岗位实时预测',
            subtext: '2021年岗位招聘数量预测'
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
                {value: 1548, name: 'Java'},
                {value: 1346, name: 'Web'},
                {value: 234, name: '算法'},
                {value: 958, name: '测试'},
                {value: 826, name: '产品'},
                {value: 603, name: '设计'}
              ]
            }
          ]
        },
        enrollRate: {
          title: {
            text: '各岗位录取比例',
            subtext: '各岗位录取比例'
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
              data: [4, 4, 26, 4, 13, 5]
            }
          ]
        },
        positionTrend: {
          title: {
            text: '近年热门岗位招聘走势'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            top: '8%',
            data: ['Java', 'Web', '算法', '测试', '产品', '设计']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2016', '2017', '2018', '2019', '2020']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Java',
              type: 'line',
              data: [1450, 1380, 1520, 1650, 1750]
            },
            {
              name: 'Web',
              type: 'line',
              data: [462, 510, 539, 620, 750]
            },
            {
              name: '算法',
              type: 'line',
              data: [512, 590, 730, 820, 401]
            },
            {
              name: '测试',
              type: 'line',
              data: [378, 420, 446, 530, 590]
            },
            {
              name: '产品',
              type: 'line',
              data: [932, 980, 1150, 1180, 1270]
            },
            {
              name: '设计',
              type: 'line',
              data: [80, 98, 134, 185, 204]
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
