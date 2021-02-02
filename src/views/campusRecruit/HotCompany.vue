<template>
  <div class="hot-company">
    <div class="nav">
      <span class="title">力推好公司</span>
      <span
          class="city"
          v-for="(item, index) in cityArr"
          :key="item"
          @click="clickTabs(index)"
          :class="{highlight: activeIndex === index}"
      >{{item}}</span>
    </div>
    <el-tabs v-show="activeIndex === 0" type="border-card" tab-position="left">
      <el-tab-pane label="字节跳动1" class="recommend-company">
        <div class="company-content-left">
          <div class="company-profile">
            <img class="company-avatar" src="@/database/companyAvatar/shanbei.png">
            <div class="company-basic-info">
              <div class="company-name">扇贝单词</div>
              <div class="company-intro">北京 / 社交平台 / 上市公司</div>
              <div class="company-badge">岗位晋升、帅哥多、奥奥奥</div>
            </div>
          </div>
          <div class="company-desc">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
            绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
            绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
          </div>
        </div>
        <div class="company-content-right">
          <img src="@/database/companyAvatar/shanbei-propa.png">
        </div>
      </el-tab-pane>
      <el-tab-pane label="字节跳动2">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动3">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动4">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动5">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动6">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动7">定时任务补偿</el-tab-pane>
    </el-tabs>

    <el-tabs v-show="activeIndex === 1" type="border-card" tab-position="left">
      <el-tab-pane label="字节跳动1">1111111111</el-tab-pane>
      <el-tab-pane label="字节跳动2">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动3">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动4">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动5">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动6">定时任务补偿</el-tab-pane>
      <el-tab-pane label="字节跳动7">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="js">
  export default {
    name: "HotCompany",
    data() {
      return {
        activeIndex: 0,
        cityArr: ['北京', '上海', '杭州', '深圳', '成都', '南京']
      }
    },
    methods: {
      clickTabs(currentTabIndex) {
        this.activeIndex = currentTabIndex
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hot-company {
    .nav {
      height: 32px;

      .title {
        font-weight: 600;
        font-size: 20px;
        color: #333;
        line-height: 28px;
        display: inline-block;
        margin-right: 20px;
      }

      .city {
        margin-left: 35px;
        cursor: pointer;
      }

      .highlight {
        color: #409eff;
        position: relative;
      }
      .highlight:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #409eff;
        position: absolute;
        left: 0;
        top: 110%;
      }
    }

    ::v-deep .recommend-company{
      height: 303px;
      display: flex;

      .company-content-left {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 10px;

        .company-profile {
          display: flex;

          .company-avatar {
            width: 96px;
            height: 96px;
            border: 1px solid rgba(0,0,0,.04);
            border-radius: 5px;
          }

          .company-basic-info {
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        }

        .company-desc {
          color: #666;
          font-size: 14px;
          line-height: 30px;
          margin: 34px 0;
          max-height: 120px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }

      .company-content-right {
        flex: 3;
        margin-left: 30px;
        border: 1px solid red;

        img {
          height: 100%;
          width: 520px;
          /*height: 290px;*/
        }
      }
    }
  }
</style>
