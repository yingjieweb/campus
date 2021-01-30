<template>
  <div class="hot-job">
    <div class="hot-job-nav">
      <span class="hot-job-title">力推好公司</span>
      <span class="hot-job-city" v-for="item in ['北京', '上海', '杭州', '深圳', '成都', '南京']">{{item}}</span>
    </div>
    <el-tabs type="border-card" tab-position="left">
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
  </div>
</template>

<script lang="js">
  export default {
    name: "HotCompany"
  }
</script>

<style lang="scss" scoped>
  .hot-job {
    .hot-job-nav {
      height: 32px;
      margin-top: 8px;

      .hot-job-title {
        font-weight: 600;
        font-size: 20px;
        color: #333;
        line-height: 28px;
        display: inline-block;
        margin-right: 40px;
      }

      .hot-job-city {
        margin-left: 20px;
        cursor: pointer;
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
