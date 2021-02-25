<template>
  <div class="search-condition">
    <div class="left">
      <div class="position">
        <span class="title">工作地点：</span>
        <span class="option"
              v-for="(item, index) in positionArr"
              :key="item"
              @click="clickPositionItem('positionCurrentIndex', index)"
              :class="{active: index === positionCurrentIndex}"
        >{{item}}</span>
      </div>
      <div class="experience">
        <span class="title">工作经验：</span>
        <span class="option"
              v-for="(item, index) in experienceArr"
              :key="item"
              @click="clickPositionItem('experienceCurrentIndex', index)"
              :class="{active: index === experienceCurrentIndex}"
        >{{item}}</span>
      </div>
      <div class="degree">
        <span class="title">学历要求：</span>
        <span class="option"
              v-for="(item, index) in degreeArr"
              :key="item"
              @click="clickPositionItem('degreeCurrentIndex', index)"
              :class="{active: index === degreeCurrentIndex}"
        >{{item}}</span>
      </div>
    </div>
    <div class="right">
      <div class="status">
        <span class="title">融资阶段：</span>
        <span class="option"
              v-for="(item, index) in statusArr"
              :key="item"
              @click="clickPositionItem('statusCurrentIndex', index)"
              :class="{active: index === statusCurrentIndex}"
        >{{item}}</span>
      </div>
      <div class="scale">
        <span class="title">公司规模：</span>
        <span class="option"
              v-for="(item, index) in degreeArr"
              :key="item"
              @click="clickPositionItem('scaleCurrentIndex', index)"
              :class="{active: index === scaleCurrentIndex}"
        >{{item}}</span>
      </div>
      <div class="field">
        <span class="title">行业领域：</span>
        <span class="option"
              v-for="(item, index) in fieldArr"
              :key="item"
              @click="clickPositionItem('fieldCurrentIndex', index)"
              :class="{active: index === fieldCurrentIndex}"
        >{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "SearchCondition",
    data() {
      return {
        positionArr: ['全国', '北京', '上海', '深圳', '广州', '杭州', '成都', '南京', '武汉', '西安', '厦门', '长沙', '苏州', '天津'],
        experienceArr: ['不限', '在校/应届', '3年及以下', '3-5年', '5-10年', '10年以上', '不要求'],
        degreeArr: ['不限', '大专', '本科', '硕士', '博士', '不要求'],
        statusArr: ['不限', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '上市公司', '不需要融资'],
        scaleArr: ['不限', '少于15人', '15-50人', '50-150人', '150-500人', '500-2000人', '2000人'],
        fieldArr: ['不限', '移动互联网', '电商', '金融', '企业服务', '教育', '文娱丨内容', '游戏', '消费生活', '硬件'],
        positionCurrentIndex: 0,
        experienceCurrentIndex: 0,
        degreeCurrentIndex: 0,
        statusCurrentIndex: 0,
        scaleCurrentIndex: 0,
        fieldCurrentIndex: 0,
      }
    },
    methods: {
      clickPositionItem(field, index) {
        this[field] = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-condition {
    padding: 6px;
    min-height: 36px;
    background-color: #fafafa;
    display: flex;

    .left, .right {
      width: 50%;
      min-width: 815px;
      border: 1px solid #ededed;

      > div {
        padding: 6px 10px;

        .title {
          height: 14px;
          padding: 5px 8px;
          font-weight: 600;
          font-size: 14px;
          line-height: 14px;
        }

        .option {
          color: #555;
          cursor: pointer;
          padding: 5px 8px;
          font-size: 14px;
          margin: 0 1px;

          &:hover {
            color: #fff;
            background-color: #00b38a;
          }
        }

        .active {
          color: #fff;
          background-color: #00b38a;
        }
      }
    }
  }
</style>
