<template>
  <div ref="mapChart" style="width: 100%; height: 100%;"></div>
</template>

<script lang="js">
  import echarts from 'echarts'
  import '../../../node_modules/echarts/map/js/china.js'
  import cityCoordMap from '../../database/cityCoordMap.json'

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
          areaColor: "#DFEAED",
          borderColor: "#389dff",
          borderWidth: 1, //设置外层边框
          shadowBlur: 5,
          shadowOffsetY: 8,
          shadowOffsetX: 0,
          shadowColor: "#DFEAED"
        },
        emphasis: {
          areaColor: "#70BFC7",
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
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: "#DFEAED",
            borderColor: "#389dff",
            borderWidth: 0.5
          },
          emphasis: {
            areaColor: "#70BFC7",
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
    name: "ChinaMap",
    mounted(){
      this.init();
      this.setCityCoord();
    },
    methods: {
      init(){
        const Chart = echarts.init(this.$refs.mapChart);
        Chart.setOption(option)
      },
      dealWithData() {
        let data = [];
        for (let key in cityCoordMap) {
          data.push({ name: key, value: cityCoordMap[key] });
        }
        return data;
      },
      setCityCoord(){
        let dataValue = this.dealWithData();
        let data1 = dataValue.splice(0, 6);
        let option = {
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
                  show: false
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
            },
            {
              name: "",
              type: "scatter",
              coordinateSystem: "geo",
              data: dataValue,
              //   symbolSize: function(val) {
              //     return val[2] / 10;
              //   },
              symbol: "circle",
              symbolSize: 8,
              hoverSymbolSize: 10,
              tooltip: {
                formatter(value) {
                  return value.data.name + "<br/>" + "毕业生：" + Math.ceil(Math.random() * 6);
                },
                show: true
              },
              encode: {
                value: 2
              },
              label: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              itemStyle: {
                color: "#0efacc"
              },
              emphasis: {
                label: {
                  show: false
                }
              }
            },
            {
              name: "Top 5",
              type: "effectScatter",
              coordinateSystem: "geo",
              data: data1,
              symbolSize: 15,
              tooltip: {
                show: false
              },
              encode: {
                value: 2
              },
              showEffectOn: "render",
              rippleEffect: {
                brushType: "stroke",
                color: "#0efacc",
                period: 9,
                scale: 5
              },
              hoverAnimation: true,
              label: {
                formatter: "{b}",
                position: "right",
                show: true
              },
              itemStyle: {
                color: "#0efacc",
                shadowBlur: 2,
                shadowColor: "#333"
              },
              zlevel: 1
            }
          ]
        };

        const Chart = echarts.init(this.$refs.mapChart);
        Chart.setOption(option)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
