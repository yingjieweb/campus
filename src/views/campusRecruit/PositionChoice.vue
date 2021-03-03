<template>
  <div class="container">
    <div class="position-sample" v-for="items in positions">
      <span class="title">{{items[0]}}</span>
      <span class="position-behalf" @click="searchJobs(items[1])">{{items[1]}}</span>
      <span class="position-behalf" @click="searchJobs(items[2])">{{items[2]}}</span>
      <span class="position-behalf" @click="searchJobs(items[3])">{{items[3]}}</span>
      <span class="arrow">></span>
      <div class="position-details">
        <span v-for="item in items.slice(1)" @click="searchJobs(item)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "PositionChoice",
    data() {
      return {
        positions: [
          ['技术', 'JAVA', 'PHP', '软件开发', 'C++', '测试', 'Python', '.NET', '游戏开发', 'web前端', 'Node.js', 'Android', 'iOS', '大数据', '数据挖掘', '自然语言', '嵌入式'],
          ['产品', '产品经理', '策划', '游戏策划', '产品实习生', '网页产品'],
          ['设计', 'Ul设计', '视觉设计', '交互设计', '平面设计', '原画', '动画', '美术', '后期', '用户研究'],
          ['运营', '新媒体运营', '产品运营', '内容运营', '用户运营', '游戏运营', '数据运营', '海外运营', '活动运营', '网络运营', '商家运营', '客服', '编辑', '记者', '文案'],
          ['市场', '策划', '推广', '商务', '渠道', '销售', '售前', '售后', '采购', '外贸'],
          ['职能', '人力资源', '人事', '行政', '前台', '招聘', '财务', '会计', '出纳'],
          ['销售', '销售专员', '销售顾问', '商务拓展', '渠道销售', '广告销售', '销售总监', '其他销售'],
        ]
      }
    },
    methods: {
      searchJobs(queryString) {
        this.$router.push({
          path: '/position-search',
          query: { queryString: queryString },
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    min-width: 288px;

    .position-sample {
      height: 50px;
      font-size: 18px;
      line-height: 18px;
      font-weight: 500;
      padding-left: 15px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .position-behalf {
        font-size: 12px;
        cursor: pointer;

        &:hover {
          color: #55CBCA;
          border-bottom: 1px solid #55CBCA;
        }
      }

      .position-details {
        width: 100%;
        padding: 16px;
        position: absolute;
        top: 0;
        left: 100%;
        display: none;
        background-color: #fff;
        box-shadow: 0 0 4px 1px rgba(0 0 0 / 9%);

        span {
          display: inline-block;
          padding: 0 12px;
          font-size: 14px;
          line-height: 14px;
          margin: 7px 0;
          color: #777;
          border-left: 1px solid #d8d8d8;
          cursor: pointer;

          &:hover {
            color: #55CBCA;
          }
        }
      }

      &:hover {
        box-shadow: 0 0 4px 1px rgba(0 0 0 / 9%);

        .position-details {
          display: block;
        }
      }
    }
  }
</style>
