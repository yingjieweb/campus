<template>
  <Block title="学生能力分析">
    <div slot="content" class="container">
      <div class="total-ability">
        <div class="graduates-ability">
          <LineChart :option="lineOption1"></LineChart>
        </div>

        <div class="undergraduate-ability">
          <div class="chart">
            <LineChart :option="lineOption2" ref="LineChart2"></LineChart>
          </div>
          <div class="buttons">
            <el-button plain size="mini" @click="updateLineChart2(1)">大一</el-button>
            <el-button plain size="mini" @click="updateLineChart2(2)">大二</el-button>
            <el-button plain size="mini" @click="updateLineChart2(3)">大三</el-button>
            <el-button plain size="mini" @click="updateLineChart2(4)">大四</el-button>
          </div>
        </div>
      </div>

      <div class="ability-item">
        <div class="ability-1">
          <div class="chart">
            <BarChart :option="barOption1" ref="BarChart1"></BarChart>
          </div>
          <div class="buttons">
            <el-button plain size="mini" @click="updateBarChart1(1)">大一</el-button>
            <el-button plain size="mini" @click="updateBarChart1(2)">大二</el-button>
            <el-button plain size="mini" @click="updateBarChart1(3)">大三</el-button>
            <el-button plain size="mini" @click="updateBarChart1(4)">大四</el-button>
          </div>
        </div>
        <div class="ability-2">
          <div class="chart">
            <BarChart :option="barOption2" ref="BarChart2"></BarChart>
          </div>
          <div class="buttons">
            <el-button plain size="mini" @click="updateBarChart2(1)">大一</el-button>
            <el-button plain size="mini" @click="updateBarChart2(2)">大二</el-button>
            <el-button plain size="mini" @click="updateBarChart2(3)">大三</el-button>
            <el-button plain size="mini" @click="updateBarChart2(4)">大四</el-button>
          </div>
        </div>
      </div>
      <div class="ability-item">
        <div class="ability-3">
          <div class="chart">
            <BarChart :option="barOption3" ref="BarChart3"></BarChart>
          </div>
          <div class="buttons">
            <el-button plain size="mini" @click="updateBarChart3(1)">大一</el-button>
            <el-button plain size="mini" @click="updateBarChart3(2)">大二</el-button>
            <el-button plain size="mini" @click="updateBarChart3(3)">大三</el-button>
            <el-button plain size="mini" @click="updateBarChart3(4)">大四</el-button>
          </div>
        </div>
        <div class="ability-4">
          <div class="chart">
            <BarChart :option="barOption4" ref="BarChart4"></BarChart>
          </div>
          <div class="buttons">
            <el-button plain size="mini" @click="updateBarChart4(1)">大一</el-button>
            <el-button plain size="mini" @click="updateBarChart4(2)">大二</el-button>
            <el-button plain size="mini" @click="updateBarChart4(3)">大三</el-button>
            <el-button plain size="mini" @click="updateBarChart4(4)">大四</el-button>
          </div>
        </div>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
import LineChart from "@/components/charts/LineChart"
import BarChart from "@/components/charts/BarChart";

export default {
  name: "AbilityAnalysis",
  components: {
    LineChart,
    BarChart
  },
  data() {
    return {
      title: 'AbilityAnalysis',
      lineOption1: {
        title: {
          text: '毕业生平均能力曲线'
        },
        legend: {
          x: '180px',
          data: ['专业知识能力', '学习能力', '实践能力', '创新能力']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2018届', '2019届', '2020届', '2021届']
        },
        yAxis: [{
          max: 10,
          min: 0,
          type: 'value',
          name: '能力值（分）',
          interval: 2
        }],
        series: [
          {
            name: '专业知识能力',
            type: 'line',
            data: [3.2, 5.2, 7.1, 9.4]
          },
          {
            name: '学习能力',
            type: 'line',
            data: [3.0, 3.2, 7.8, 8.4]
          },
          {
            name: '实践能力',
            type: 'line',
            data: [3.3, 6.2, 8.1, 9.7]
          },
          {
            name: '创新能力',
            type: 'line',
            data: [2.5, 5.6, 7.6, 8.9]
          }
        ]
      },
      lineOption2: {
        title: {
          text: '在校生平均能力曲线'
        },
        legend: {
          x: '180px',
          data: ['专业知识能力', '学习能力', '实践能力', '创新能力']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['第一学年', '第二学年', '第三学年', '第四学年']
        },
        yAxis: [{
          max: 10,
          min: 0,
          type: 'value',
          name: '能力值（分）',
          interval: 2
        }],
        series: [
          {
            name: '专业知识能力',
            type: 'line',
            data: [5.2, 7.1, 9.4, 5.2]
          },
          {
            name: '学习能力',
            type: 'line',
            data: [3.2, 7.8, 8.4, 3.2]
          },
          {
            name: '实践能力',
            type: 'line',
            data: [6.2, 8.1, 9.7, 6.2,]
          },
          {
            name: '创新能力',
            type: 'line',
            data: [5.6, 7.6, 8.9, 5.6]
          }
        ]
      },
      barOption1: {
        title: {
          text: '专业知识能力对比'
        },
        legend: {x: '160px'},
        dataset: {
          dimensions: ['product', '18届平均', '19届平均', '20届平均', '21届平均', '在校平均'],
          source: [
            {product: '学科基础课平均成绩', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '专业课平均成绩', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '毕业设计评级', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '毕业论文评级', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
          ]
        },
        xAxis: [{
          type: 'category',
          axisLabel: {
            rotate: -15,
            textStyle: {fontSize: 12}
          }
        }],
        yAxis: [{
          max: 10,
          min: 0,
          type: 'value',
          name: '能力值（分）',
          interval: 2
        }],
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
      },
      barOption2: {
        title: {
          text: '学习能力指标对比'
        },
        legend: {x: '160px'},
        dataset: {
          dimensions: ['product', '18届平均', '19届平均', '20届平均', '21届平均', '在校平均'],
          source: [
            {product: '通识课平均成绩', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '四六级成绩', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '每周阅读核心文献量', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '个人技能掌握', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37}
          ]
        },
        xAxis: [{
          type: 'category',
          axisLabel: {
            rotate: -15,
            textStyle: {fontSize: 12}
          }
        }],
        yAxis: [{
          max: 10,
          min: 0,
          type: 'value',
          name: '能力值（分）',
          interval: 2
        }],
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
      },
      barOption3: {
        title: {
          text: '实践能力指标对比'
        },
        legend: {x: '160px'},
        dataset: {
          dimensions: ['product', '18届平均', '19届平均', '20届平均', '21届平均', '在校平均'],
          source: [
            {product: '实践类课程平均成绩', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '实训评级', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '参与项目', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '担任职务', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37}
          ]
        },
        xAxis: [{
          type: 'category',
          axisLabel: {
            rotate: -15,
            textStyle: {fontSize: 12}
          }
        }],
        yAxis: [{
          max: 10,
          min: 0,
          type: 'value',
          name: '能力值（分）',
          interval: 2
        }],
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
      },
      barOption4: {
        title: {
          text: '创新能力指标'
        },
        legend: {x: '160px'},
        dataset: {
          dimensions: ['product', '18届平均', '19届平均', '20届平均', '21届平均', '在校平均'],
          source: [
            {product: '创新奖励', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '创新成果情况', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37},
            {product: '创新创业教育成绩', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': 7.37}
          ]
        },
        xAxis: [{
          type: 'category',
          axisLabel: {
            rotate: -15,
            textStyle: {fontSize: 12}
          }
        }],
        yAxis: [{
          max: 10,
          min: 0,
          type: 'value',
          name: '能力值（分）',
          interval: 2
        }],
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
      },
    }
  },
  methods: {
    updateLineChart2(grade) {
      this.lineOption2.series = [
        {
          name: '专业知识能力',
          type: 'line',
          data: [0, 5.2, 7.1, 9.4, 5.2, 7.1, 9.4, 5.2, 7.1, 9.4].slice(grade, grade * 2)
        },
        {
          name: '学习能力',
          type: 'line',
          data: [0, 3.2, 7.8, 8.4, 3.2, 7.8, 8.4, 3.2, 7.8, 8.4].slice(grade, grade * 2)
        },
        {
          name: '实践能力',
          type: 'line',
          data: [0, 6.2, 8.1, 9.7, 6.2, 8.1, 9.7, 6.2, 8.1, 9.7].slice(grade, grade * 2)
        },
        {
          name: '创新能力',
          type: 'line',
          data: [0, 5.6, 7.6, 8.9, 5.6, 7.6, 8.9, 5.6, 7.6, 8.9].slice(grade, grade * 2)
        }
      ]
      this.$refs.LineChart2.init()
    },
    updateBarChart1(grade) {
      this.barOption1.dataset.source = [
        {
          product: '学科基础课平均成绩',
          '18届平均': 7.58,
          '19届平均': 8.37,
          '20届平均': 7.37,
          '21届平均': 7.37,
          '在校平均': [0, 4, 5, 6, 7][grade]
        },
        {
          product: '专业课平均成绩',
          '18届平均': 7.58,
          '19届平均': 8.37,
          '20届平均': 7.37,
          '21届平均': 7.37,
          '在校平均': [0, 4, 5, 6, 7][grade]
        },
        {product: '毕业设计评级', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': [0, 4, 5, 6, 7][grade]},
        {product: '毕业论文评级', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': [0, 4, 5, 6, 7][grade]},
      ]
      this.$refs.BarChart1.init()
    },
    updateBarChart2(grade) {
      this.barOption2.dataset.source = [
        {
          product: '通识课平均成绩',
          '18届平均': 7.58,
          '19届平均': 8.37,
          '20届平均': 7.37,
          '21届平均': 7.37,
          '在校平均': [0, 4, 5, 6, 7][grade]
        },
        {product: '四六级成绩', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': [0, 4, 5, 6, 7][grade]},
        {
          product: '每周阅读核心文献量',
          '18届平均': 7.58,
          '19届平均': 8.37,
          '20届平均': 7.37,
          '21届平均': 7.37,
          '在校平均': [0, 4, 5, 6, 7][grade]
        },
        {product: '个人技能掌握', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': [0, 4, 5, 6, 7][grade]}
      ]
      this.$refs.BarChart2.init()
    },
    updateBarChart3(grade) {
      this.barOption3.dataset.source = [
        {
          product: '实践类课程平均成绩',
          '18届平均': 7.58,
          '19届平均': 8.37,
          '20届平均': 7.37,
          '21届平均': 7.37,
          '在校平均': [0, 4, 5, 6, 7][grade]
        },
        {product: '实训评级', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': [0, 4, 5, 6, 7][grade]},
        {product: '参与项目', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': [0, 4, 5, 6, 7][grade]},
        {product: '担任职务', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': [0, 4, 5, 6, 7][grade]}
      ]
      this.$refs.BarChart3.init()
    },
    updateBarChart4(grade) {
      this.barOption4.dataset.source = [
        {product: '创新奖励', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': [0, 4, 5, 6, 7][grade]},
        {product: '创新成果情况', '18届平均': 7.58, '19届平均': 8.37, '20届平均': 7.37, '21届平均': 7.37, '在校平均': [0, 4, 5, 6, 7][grade]},
        {
          product: '创新创业教育成绩',
          '18届平均': 7.58,
          '19届平均': 8.37,
          '20届平均': 7.37,
          '21届平均': 7.37,
          '在校平均': [0, 4, 5, 6, 7][grade]
        }
      ]
      this.$refs.BarChart4.init()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 750px;
  display: flex;

  .total-ability {
    flex: 6;
    display: flex;
    flex-direction: column;

    .graduates-ability {
      flex: 1;
      border: 1px solid #EEE;
    }

    .undergraduate-ability {
      flex: 1;
      display: flex;
      margin-top: 5px;
      border: 1px solid #EEE;

      .chart {
        width: 85%;
      }

      .buttons {
        width: 15%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        border-left: 1px solid #EEE;

        ::v-deep .el-button {
          margin-left: 0;
        }
      }
    }
  }

  .ability-item {
    flex: 5;
    display: flex;
    flex-direction: column;
    margin-left: 5px;

    > div {
      flex: 1;
      display: flex;
      border: 1px solid #EEE;

      .chart {
        width: 85%;
      }

      .buttons {
        width: 15%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        border-left: 1px solid #EEE;

        ::v-deep .el-button {
          margin-left: 0;
        }
      }
    }

    .ability-2, .ability-4 {
      margin-top: 5px;
    }
  }
}
</style>