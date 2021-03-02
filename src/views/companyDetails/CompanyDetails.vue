<template>
  <Block title="岗位详情">
    <div slot="content">
      <div class="comp-details">
        <el-tabs class="comp-tabs" v-model="activeName">
          <el-tab-pane label="公司主页" name="first" class="comp-pane">
            <div class="comp-details-left">
              <div class="company-profile">
                <img class="company-avatar" :src="currentComp.companyAvatar">
                <div class="company-basic-info">
                  <div class="company-name">{{currentComp.companyName}}</div>
                  <div class="company-intro">{{currentComp.introduce}}</div>
                  <div class="company-badge">
                    <span v-for="badge in currentComp.label">{{badge}}</span>
                  </div>
                </div>
              </div>
              <div class="company-desc">{{currentComp.abstract}}</div>
            </div>
            <div class="comp-details-right">
              <img :src="currentComp.companyPropaPic">
            </div>
          </el-tab-pane>
          <el-tab-pane label="招聘岗位" name="second">
            <PositionList :job-data-list="currentPageJobs"></PositionList>
          </el-tab-pane>
          <el-tab-pane label="校招岗位" name="third">
            <PositionList :job-data-list="currentPageJobs"></PositionList>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import jobData from "@/database/jobData"
  import PositionList from "@/views/positionSearch/PositionList"

  export default {
    name: "CompanyDetails",
    components: {
      PositionList
    },
    data() {
      return {
        currentComp: {},
        activeName: 'first',
        currentPageJobs: []
      }
    },
    methods: {
      getCurrentComp() {
        this.currentComp = jobData[--this.$route.query.positionId]
      },
      getCurrentPageJobs() {
        this.currentPageJobs = jobData.filter(item => {
          return item.id === this.currentComp.id
        })
      }
    },
    created() {
      this.getCurrentComp()
      this.getCurrentPageJobs()
    }
  }
</script>

<style lang="scss" scoped>
  .comp-tabs {
    height: 750px;

    ::v-deep .comp-pane {
      max-width: 1100px;
      display: flex;

      .comp-details-left {
        flex: 1;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 18px;

        .company-profile {
          display: flex;

          .company-avatar {
            width: 96px;
            height: 96px;
            border: 1px solid rgba(0,0,0,.04);
            border-radius: 5px;
            cursor: pointer;
          }

          .company-basic-info {
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .company-name {cursor: pointer;}

            .company-badge span {
              border: 1px solid gainsboro;
              margin-right: 5px;
              padding: 2px;
            }
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

      .comp-details-right {
        margin-left: 30px;

        img {
          height: 100%;
          width: 520px;
        }
      }
    }
  }
</style>
