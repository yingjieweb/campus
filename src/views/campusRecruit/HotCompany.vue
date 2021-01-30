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
        <div class="basic-info">
          <div class="company-info">基本信息</div>
          <div class="company-intro">介绍</div>
        </div>
        <div class="company-pic">照片</div>
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
      margin-top: 8px;

      .title {
        font-weight: 600;
        font-size: 20px;
        color: #333;
        line-height: 28px;
        display: inline-block;
        margin-right: 40px;
      }

      .city {
        margin-left: 20px;
        cursor: pointer;
      }

      .highlight {
        color: red;
      }
    }

    ::v-deep .recommend-company{
      display: flex;
      border: 1px solid red;

      .company-info {
        /*border: 1px solid red;*/
      }
      .company-intro {
        /*border: 1px solid red;*/
      }
      .company-pic {
        /*border: 1px solid red;*/
      }
    }
  }
</style>
