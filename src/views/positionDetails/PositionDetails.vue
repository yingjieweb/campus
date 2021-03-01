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
        <div class="position-head-r">
          <div class="operate">
            <div class="collect">收藏</div>
            <div class="send">投递简历</div>
          </div>
          <div class="resume">
            <span class="online">☆ 在线简历</span>
            <span class="upload">☆ 上传附件简历</span>
          </div>
        </div>
      </div>

      <div class="position-body">
        <div class="position-info">
          <div class="comp-welfare">
            <span class="title">职位诱惑：</span>
            <p class="welfare">{{currentJob.companyWelfare}}</p>
          </div>
          <div class="comp-duty">
            <span class="title">岗位职责：</span>
            <p class="duty" v-html="currentJob.jobDutyDetails.replace(/\n/g,'<br/>')"></p>
          </div>
          <div class="comp-require">
            <span class="title">岗位要求：</span>
            <p class="require" v-html="currentJob.requiredSkillDesc.replace(/\n/g,'<br/>')"></p>
          </div>
        </div>
        <div class="position-address">
          <span class="title">工作地址：</span>
          <div class="address" style="width: 100%; height: 500px;">
            <amap
                    cache-key="map"
                    ref="map"
                    view-mode="3D"
                    map-style="amap://styles/whitesmoke"
                    async
                    :zoom.sync="zoom"
                    :center.sync="center"
                    :pitch.sync="pitch"
                    :rotation.sync="rotation"
                    :show-indoor-map="false"
                    is-hotspot
                    @hotspotclick="onHotspotClick"
            >
              <amap-marker
                      :position="position"
                      :label="{
                        content: currentJob.companyAddress,
                        direction: 'bottom',
                      }"
              />
            </amap>
          </div>
        </div>
        <div class="similar-job">
          <span class="title">相似岗位:</span>
          <div class="recommend-list" v-loading="isLoading">
            <div class="recommend-item" v-for="item in similarJob" :key="item.name" @click="goDetails(item.id)">
              <div class="avatar">
                <img :src="item.companyAvatar">
              </div>
              <div class="info">
                <div class="name">
                  <span class="company">{{item.companyName}}</span>
                  <span class="salary">{{item.salary}}</span>
                </div>
                <div class="intro">{{item.introduce.substr(0, 13)}}...</div>
              </div>
            </div>
          </div>
        </div>
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
        currentJob: {},
        isLoading: true,
        center: [116.473778, 39.990661],
        position: [116.473778, 39.990661],
        zoom: 14,
        pitch: 45,
        rotation: 15,
      }
    },
    computed: {
      similarJob() {
        let currentJobId = this.currentJob.id
        return jobData.filter(item => {
          return item.id !== currentJobId
        }).slice(0, 5)
      }
    },
    watch: {
      $route() {
        this.getCurrentJob()
      }
    },
    methods: {
      onHotspotClick(e) {
        if (e && e.lnglat) {
          this.center = [e.lnglat.lng, e.lnglat.lat];
        }
      },
      goDetails(id) {
        this.$router.push({
          path: '/position-details',
          query: { positionId: id },
        })
      },
      getCurrentJob() {
        this.currentJob = jobData[--this.$route.query.positionId]
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }
    },
    created() {
      this.getCurrentJob()
    }
  }
</script>

<style lang="scss" scoped>
  .position-head {
    height: 180px;
    padding: 10px;
    background-color: #f2f5f4;
    display: flex;
    justify-content: space-between;
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

    .position-head-r {
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
          user-select: none;
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
  }

  .position-body {
    height: 560px;
    padding: 10px;
    display: flex;

    .position-info {
      flex: 3;
      min-width: 540px;

      .comp-welfare, .comp-duty, .comp-require {
        margin-bottom: 10px;

        .title {
          font-weight: 600;
          line-height: 32px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .position-address {
      flex: 4;
      min-width: 540px;
      margin: 0 10px;

      .title {
        font-weight: 600;
        line-height: 32px;
      }

      .address {
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
      }
    }

    .similar-job {
      flex: 2;
      min-width: 360px;

      .title {
        font-weight: 600;
        line-height: 32px;
      }

      .recommend-list {
        background: #FFF;
        border: 1px solid #DCDFE6;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);

        .recommend-item {
          height: 66.5px;
          display: flex;
          padding: 0 10px;
          align-items: center;
          cursor: pointer;
          border-bottom: 1px dashed #f0f0f0;

          &:hover {
            background-color: #f0f0f0;
          }

          .avatar {
            width: 44px;
            height: 44px;
            margin-right: 10px;
            img {
              width: 44px;
            }
          }
          .info {
            width: 100%;

            .name {
              display: flex;
              justify-content: space-between;

              .salary {
                color: #e6775c;
              }
            }
          }
        }
      }
    }
  }
</style>
