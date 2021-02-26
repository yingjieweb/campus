<template>
  <Block title="岗位详情">
    <div slot="content">
      <div class="position-head">
        <div class="position-head-l">
          <h4 class="comp-name">{{currentJob.companyName}}招聘</h4>
          <h1 class="job-name">{{currentJob.recruitJob}}</h1>
          <div class="basic-info">
            <span class="salary">{{currentJob.salary}}</span>
            <span class="comp-city">{{currentJob.companyCity}}</span>
            <span class="degree">{{currentJob.requiredDegree}}</span>
            <span class="experience">{{currentJob.requiredExp}}</span>
          </div>
          <div class="comp-label">
            <span class="label-item" v-for="item in currentJob.label">{{item}}</span>
          </div>
          <div class="pub-time">{{currentJob.publishTime}} 发布</div>
        </div>
        <div class="position-head-m">
          <div class="operate">
            <div class="collect">收藏</div>
            <div class="send">投递简历</div>
          </div>
          <div class="resume">
            <span class="online">☆ 在线简历</span>
            <span class="upload">☆ 上传附件简历</span>
          </div>
        </div>
        <div class="position-head-r"></div>
      </div>

      <div class="position-body">
        222
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import jobData from "@/database/jobData"

  export default {
    name: "PositionDetails",
    data() {
      return {
        currentJob: {}
      }
    },
    created() {
      this.currentJob = jobData[this.$route.query.positionId]
    }
  }
</script>

<style lang="scss" scoped>
  .position-head {
    height: 180px;
    padding: 10px;
    background-color: #f2f5f4;
    display: flex;
    margin-bottom: 10px;

    .position-head-l {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .comp-name {
        font-size: 14px;
        color: #555;
      }

      .job-name {
        height: 42px;
        font-size: 36px;
        font-weight: 500;
        max-width: 492px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .basic-info {
        span {margin-right: 1em; color: #737373;}
        .salary {color: #fd5f39;}
      }

      .comp-label {
        .label-item {
          display: inline-block;
          height: 22px;
          padding: 0 10px;
          margin-right: 8px;
          line-height: 22px;
          background-color: #fff;
          color: #70797b;
          font-size: 12px;
          border-radius: 10px;
        }
      }

      .pub-time {color: #737373;}
    }

    .position-head-m {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .operate {
        .collect, .send {
          height: 44px;
          width: 130px;
          display: inline-block;
          line-height: 44px;
          text-align: center;
          border: 1px solid #00b38a;
          border-radius: 3px;
          cursor: pointer;
          font-size: 14px;
        }

        .collect {
          color: #00b38a;
          background-color: #ebf0ef;
          margin-right: 20px;
        }
        .send {
          background-color: #00b38a;
          color: #fff}
      }

      .resume {
        .online, .upload {
          color: #555;
          margin-right: 1em;
          cursor: pointer;

          &:hover {color: #00b38a;}
        }
      }
    }
    .position-head-r {
      width: 40%;
      border: 1px solid red;
    }
  }

  .position-body {
    height: 300px;
    border: 1px solid red;
  }
</style>
