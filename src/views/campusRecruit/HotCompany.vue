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
      <el-tab-pane :label="item.company" class="recommend-company" v-for="item in recommendList1" :key="item.id">
        <div class="company-content-left">
          <div class="company-profile">
            <img class="company-avatar" :src="item.companyAvatar">
            <div class="company-basic-info">
              <div class="company-name">{{item.company}}</div>
              <div class="company-intro">{{item.introduce}}</div>
              <div class="company-badge">
                <span v-for="badge in item.label">{{badge}}</span>
              </div>
            </div>
          </div>
          <div class="company-desc">{{item.abstract}}</div>
        </div>
        <div class="company-content-right">
          <img :src="item.companyPropaPic">
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-tabs v-show="activeIndex === 1" type="border-card" tab-position="left">
      <el-tab-pane :label="item.company" class="recommend-company" v-for="item in recommendList2" :key="item.id">
        <div class="company-content-left">
          <div class="company-profile">
            <img class="company-avatar" :src="item.companyAvatar">
            <div class="company-basic-info">
              <div class="company-name">{{item.company}}</div>
              <div class="company-intro">{{item.introduce}}</div>
              <div class="company-badge">
                <span v-for="badge in item.label">{{badge}}</span>
              </div>
            </div>
          </div>
          <div class="company-desc">{{item.abstract}}</div>
        </div>
        <div class="company-content-right">
          <img :src="item.companyPropaPic">
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-tabs v-show="activeIndex === 2" type="border-card" tab-position="left">
      <el-tab-pane :label="item.company" class="recommend-company" v-for="item in recommendList3" :key="item.id">
        <div class="company-content-left">
          <div class="company-profile">
            <img class="company-avatar" :src="item.companyAvatar">
            <div class="company-basic-info">
              <div class="company-name">{{item.company}}</div>
              <div class="company-intro">{{item.introduce}}</div>
              <div class="company-badge">
                <span v-for="badge in item.label">{{badge}}</span>
              </div>
            </div>
          </div>
          <div class="company-desc">{{item.abstract}}</div>
        </div>
        <div class="company-content-right">
          <img :src="item.companyPropaPic">
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-tabs v-show="activeIndex === 3" type="border-card" tab-position="left">
      <el-tab-pane :label="item.company" class="recommend-company" v-for="item in recommendList4" :key="item.id">
        <div class="company-content-left">
          <div class="company-profile">
            <img class="company-avatar" :src="item.companyAvatar">
            <div class="company-basic-info">
              <div class="company-name">{{item.company}}</div>
              <div class="company-intro">{{item.introduce}}</div>
              <div class="company-badge">
                <span v-for="badge in item.label">{{badge}}</span>
              </div>
            </div>
          </div>
          <div class="company-desc">{{item.abstract}}</div>
        </div>
        <div class="company-content-right">
          <img :src="item.companyPropaPic">
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-tabs v-show="activeIndex === 4" type="border-card" tab-position="left">
      <el-tab-pane :label="item.company" class="recommend-company" v-for="item in recommendList5" :key="item.id">
        <div class="company-content-left">
          <div class="company-profile">
            <img class="company-avatar" :src="item.companyAvatar">
            <div class="company-basic-info">
              <div class="company-name">{{item.company}}</div>
              <div class="company-intro">{{item.introduce}}</div>
              <div class="company-badge">
                <span v-for="badge in item.label">{{badge}}</span>
              </div>
            </div>
          </div>
          <div class="company-desc">{{item.abstract}}</div>
        </div>
        <div class="company-content-right">
          <img :src="item.companyPropaPic">
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-tabs v-show="activeIndex === 5" type="border-card" tab-position="left">
      <el-tab-pane :label="item.company" class="recommend-company" v-for="item in recommendList6" :key="item.id">
        <div class="company-content-left">
          <div class="company-profile">
            <img class="company-avatar" :src="item.companyAvatar">
            <div class="company-basic-info">
              <div class="company-name">{{item.company}}</div>
              <div class="company-intro">{{item.introduce}}</div>
              <div class="company-badge">
                <span v-for="badge in item.label">{{badge}}</span>
              </div>
            </div>
          </div>
          <div class="company-desc">{{item.abstract}}</div>
        </div>
        <div class="company-content-right">
          <img :src="item.companyPropaPic">
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="js">
  import recommendData from "@/database/recommendData"

  export default {
    name: "HotCompany",
    data() {
      return {
        activeIndex: 0,
        cityArr: ['北京', '上海', '杭州', '深圳', '成都', '南京'],
        random1: Math.ceil(Math.random() * 6),
        random2: Math.ceil(Math.random() * 6),
        random3: Math.ceil(Math.random() * 6),
        random4: Math.ceil(Math.random() * 6),
        random5: Math.ceil(Math.random() * 6),
        random6: Math.ceil(Math.random() * 6),
      }
    },
    computed: {
      recommendList1() {
        return recommendData.slice(this.random1, this.random1+7)
      },
      recommendList2() {
        return recommendData.slice(this.random2, this.random2+7)
      },
      recommendList3() {
        return recommendData.slice(this.random3, this.random3+7)
      },
      recommendList4() {
        return recommendData.slice(this.random4, this.random4+7)
      },
      recommendList5() {
        return recommendData.slice(this.random5, this.random5+7)
      },
      recommendList6() {
        return recommendData.slice(this.random6, this.random6+7)
      },
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
          }

          .company-basic-info {
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

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

      .company-content-right {
        margin-left: 30px;

        img {
          height: 100%;
          width: 520px;
        }
      }
    }
  }
</style>
