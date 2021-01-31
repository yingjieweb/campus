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

            </div>
          </div>
          <div class="company-desc">介绍</div>
        </div>
        <div class="company-content-right">照片</div>
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
      display: flex;

      .company-content-left {
        flex: 1;
        border: 1px solid red;

        .company-profile {
          .company-avatar {
            width: 96px;
            height: 96px;
            border: 1px solid rgba(0,0,0,.04);
            border-radius: 5px;
          }

          .company-basic-info {

          }
        }
      }

      .company-content-right {
        flex: 1;
        border: 1px solid red;
      }
    }
  }
</style>
