<template>
  <Block title="往届毕业生去向">
    <div slot="content" class="container">
      <div class="left">
        <div class="jobOrient">
          <BarChart :option="jobOrient" ref="barChart1"></BarChart>
        </div>
        <div class="jobOrient">
          <BarChart :option="hotJobs" ref="barChart2"></BarChart>
        </div>
        <div class="jobOrient">
          <BarChart :option="salaryRank" ref="barChart3"></BarChart>
        </div>
      </div>
      <div class="map">
        <div class="search">
          <el-form ref="form" :model="form" label-width="80px" :inline="true">
            <el-form-item label="往届生">
              <el-select v-model="form.grade" placeholder="请选择往届生" clearable style="width:170px">
                <el-option label="2017 届" value="2017"></el-option>
                <el-option label="2018 届" value="2018"></el-option>
                <el-option label="2019 届" value="2019"></el-option>
                <el-option label="2020 届" value="2020"></el-option>
                <el-option label="2021 届" value="2021"></el-option>
                <el-option label="不限" value="all"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="薪资水平">
              <el-select v-model="form.salaryRank" placeholder="请选择薪资水平" clearable style="width:170px">
                <el-option label="小于 5k" value="5"></el-option>
                <el-option label="5k - 10k" value="10"></el-option>
                <el-option label="10k - 15k" value="15"></el-option>
                <el-option label="15k - 20k" value="20"></el-option>
                <el-option label="大于 20k" value="25"></el-option>
                <el-option label="不限" value="all"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="就业岗位">
              <el-select v-model="form.job" placeholder="请选择就业岗位" clearable style="width:170px">
                <el-option label="技术类" value="technology"></el-option>
                <el-option label="产品类" value="product"></el-option>
                <el-option label="设计类" value="design"></el-option>
                <el-option label="运营类" value="operation"></el-option>
                <el-option label="市场类" value="market"></el-option>
                <el-option label="销售类" value="sell"></el-option>
                <el-option label="职能类" value="function"></el-option>
                <el-option label="不限" value="all"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="margin-left: 16px;">
              <el-button type="primary" plain size="medium" @click="filterData">立即筛选</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="map">
          <ChinaMap></ChinaMap>
        </div>
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
        form: {
          grade: '2021',
          salaryRank: 'all',
          job: 'all',
        }
      }
    },
    computed: {
      jobOrient: function () {
        return {
          title: {
            text: '往届毕业生就业城市',
            subtext: `${this.form.grade}届毕业生就业热门城市`
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            formatter: '{b}: {c} 人'
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
              name: '2021届',
              type: 'bar',
              data: [78, 46, 22, 74, 58, 124]
            }
          ]
        }
      },
      hotJobs: function () {
        return {
          title: {
            text: '往届毕业生就业岗位排行榜',
            subtext: `${this.form.grade}届毕业生热门就业岗位`
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            formatter: '{b}: {c} 人'
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
              name: '2021年',
              type: 'bar',
              data: [166, 95, 49, 67, 52, 26]
            }
          ]
        }
      },
      salaryRank: function () {
        return {
          title: {
            text: '往届毕业生岗位薪资排行榜',
            subtext: `${this.form.grade}届毕业生岗位薪资排行榜（月薪）`
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            formatter: '{b}: {c} ￥'
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
              name: '2021年',
              type: 'bar',
              data: [15300, 13600, 20500, 10500, 15000, 12700]
            }
          ]
        }
      },
      positionPredict: function () {
        return {
          title: {
            text: '岗位数量实时预测',
            subtext: '2021年岗位招聘数量预测'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}岗: {c} 个 ({d}%)'
          },
          series: [
            {
              type: 'pie',
              radius: ['50%', '65%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  position: 'outer',
                  show: true
                }
              },
              data: [
                {value: 1648, name: 'Java'},
                {value: 1346, name: 'Web'},
                {value: 134, name: '算法'},
                {value: 958, name: '测试'},
                {value: 226, name: '产品'},
                {value: 603, name: '设计'}
              ]
            }
          ]
        }
      },
      enrollRate: function () {
        return {
          title: {
            text: '往年岗位投递录取比例',
            subtext: '2021年各岗位投递录取比例'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            formatter: '{b}岗: {c}:1'
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
              name: '2021年',
              type: 'bar',
              data: [6, 4, 26, 4, 17, 5]
            }
          ]
        }
      },
      positionTrend: function () {
        return {
          title: {
            text: '近年热门岗位招聘走势'
          },
          tooltip: {trigger: 'axis'},
          legend: {
            top: '8%',
            left: '30%',
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
            data: ['2017', '2018', '2019', '2020', '2021']
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
    },
    methods: {
      filterData() {
        this.$refs.barChart1.init();
        this.$refs.barChart2.init();
        this.$refs.barChart3.init();
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
      flex-direction: column;

      .search {
        margin-bottom: 5px;
        border: 1px dashed #1296DB;
        display: flex;
        justify-content: center;
        align-items: center;

        ::v-deep .el-form-item {
          margin-top: 22px;
        }
      }

      .map {
        flex: 1;
        height: calc(100% - 91px);
        border: 1px dashed #1296DB;
      }
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
