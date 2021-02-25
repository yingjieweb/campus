<template>
  <div class="position-item">
    <div class="top">
      <div class="top-left">
        <div class="basic-info" @click="goDetails(jobItem.id)">
          <h3 class="job-name">{{jobItem.recruitJob}}</h3>
          <span class="comp-city">[{{jobItem.companyCity}}]</span>
          <span class="pub-time">{{jobItem.publishTime}} 发布</span>
        </div>
        <div class="detail-info">
          <span class="salary">{{jobItem.salary}}</span>
          <span class="exp-degree">{{jobItem.requiredExp}}/{{jobItem.requiredDegree}}</span>
        </div>
      </div>
      <div class="top-right">
        <div class="comp-desc">
          <span class="comp-name" @click="goDetails(jobItem.id)">{{jobItem.companyName}}</span>
          <span class="comp-intro">{{jobItem.introduce}}</span>
        </div>
        <img class="comp-avatar" :src="jobItem.companyAvatar" @click="goDetails(jobItem.id)">
      </div>
    </div>
    <div class="bot">
      <span class="comp-label">
        <span class="label-item" v-for="item in jobItem.label" :key="item">{{item}}</span>
      </span>
      <span class="comp-welfare">{{jobItem.companyWelfare}}</span>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "PositionItem",
    props: {
      jobItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      goDetails(id) {
        this.$router.push({
          path: '/position-details',
          query: { positionId: id },
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .position-item {
    width: calc(50% - 8px);
    height: 106px;
    border: 1px solid #ededed;
    margin: 2px 4px;

    .top {
      height: 65%;
      padding: 5px 5px 0;
      display: flex;
      background-color: #fff;

      .top-left {
        width: 50%;

        .basic-info {
          height: 35px;
          display: flex;
          align-items: center;
          cursor: pointer;

          .job-name, .comp-city, .pub-time {
            font-size: 16px;
            line-height: 35px;
            color: #00b38a;
            margin-right: 20px;
          }
          .pub-time {color: #999; font-size: 14px;}
        }

        .detail-info {
          height: 27px;
          display: flex;
          align-items: center;

          .salary {
            margin-right: 1em;
            font-size: 16px;
            color: #fd5f39;
          }
          .exp-degree {font-size: 14px;color: #555;}
        }
      }

      .top-right {
        width: 50%;
        display: flex;
        justify-content: space-between;

        .comp-desc {
          display: flex;
          flex-direction: column;
          padding-left: 10px;

          .comp-name {
            line-height: 35px;
            color: #00b38a;
            cursor: pointer;
          }
          .comp-intro {
            color: #555;
            line-height: 27px;
            font-size: 14px;
          }
        }

        .comp-avatar {
          width: 57px;
          height: 57px;
          cursor: pointer;
        }
      }
    }

    .bot {
      height: 35%;
      padding: 5px;
      background-color: #fafafa;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .comp-label {
        width: 50%;
        font-size: 14px;

        .label-item {
          height: 20px;
          max-width: 108px;
          padding: 0 5px;
          display: inline-block;
          font-size: 14px;
          line-height: 20px;
          color: #555;
          border: 1px solid #dcdcdc;
          border-radius: 3px;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 5px;
        }
      }
      .comp-welfare {
        width: 50%;
        color: #555;
        font-size: 14px;
        padding-left: 10px;
      }
    }
  }
</style>
