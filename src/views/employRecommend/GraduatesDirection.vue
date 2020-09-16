<template>
  <Layout>
    <Block title="往届毕业生去向">
      <div slot="content" class="container">
        <div class="left"></div>
        <div class="mid" ref="mapChart"></div>
        <div class="right"></div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="js">
  import echarts from 'echarts'
  import "../../../node_modules/echarts/map/js/china.js"

  let option = {
    tooltip: {
      show: false
    },
    geo: {
      map: "china",
      roam: false,// 一定要关闭拖拽
      zoom: 1.23,
      center: [105, 36], // 调整地图位置
      label: {
        normal: {
          show: false, //关闭省份名展示
          fontSize: "10",
          color: "rgba(0,0,0,0.7)"
        },
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: "#0d0059",
          borderColor: "#389dff",
          borderWidth: 1, //设置外层边框
          shadowBlur: 5,
          shadowOffsetY: 8,
          shadowOffsetX: 0,
          shadowColor: "#01012a"
        },
        emphasis: {
          areaColor: "#184cff",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 5,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    },
    series: [
      {
        type: "map",
        map: "china",
        roam: false,
        zoom: 1.23,
        center: [105, 36],
        // geoIndex: 1,
        // aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
            textStyle: {
              color: "#fff"
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: "#0d0059",
            borderColor: "#389dff",
            borderWidth: 0.5
          },
          emphasis: {
            areaColor: "#17008d",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 5,
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  export default {
    name: "GraduatesDirection",
    mounted(){
      this.init();
    },
    methods: {
      init(){
        const Chart = echarts.init(this.$refs.mapChart);
        Chart.setOption(option)
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
      border: 1px solid red;
    }

    > .mid {
      flex: 6;
      border: 1px solid red;
    }

    > .right {
      flex: 2;
      border: 1px solid red;
    }
  }
</style>
