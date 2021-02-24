<template>
  <Block title="校园招聘" style="height: 1200px;">
    <div slot="content" class="container">
      <div class="search">
        <input type="text" placeholder="搜索职位、公司、地点">
        <button>搜索</button>
      </div>
      <div class="banner">
        <div class="positions">
          <PositionChoice></PositionChoice>
        </div>
        <div class="hot-recommend">
          <div class="hot-position">
            <div class="head">
              <span class="title">大家都在投</span>
              <span class="message">助力好未来</span>
            </div>
            <div class="position-list" v-for="item in recommendList1" :key="item.name">
              <div class="position-item">
                <div class="avatar">
                  <img :src="item.companyAvatar">
                </div>
                <div class="info">
                  <div class="name">
                    <span class="company">{{item.company}}</span>
                    <span class="salary">{{item.salary}}</span>
                  </div>
                  <div class="intro">{{item.introduce.substr(0, 13)}}...</div>
                </div>
              </div>
            </div>
          </div>
          <div class="hot-company">
            <div class="head">
              <span class="title">投递热门榜</span>
              <span class="message">值得投一投</span>
            </div>
            <div class="position-list" v-for="item in recommendList2" :key="item.name">
              <div class="position-item">
                <div class="avatar">
                  <img :src="item.companyAvatar">
                </div>
                <div class="info">
                  <div class="name">
                    <span class="company">{{item.company}}</span>
                    <span class="salary">{{item.salary}}</span>
                  </div>
                  <div class="intro">{{item.introduce.substr(0, 10)}}...</div>
                </div>
              </div>
            </div>
          </div>
          <div class="high-salary">
            <div class="head">
              <span class="title">高薪职业榜</span>
              <span class="message">才华最值钱</span>
            </div>
            <div class="position-list" v-for="item in recommendList3" :key="item.name">
              <div class="position-item">
                <div class="avatar">
                  <img :src="item.companyAvatar">
                </div>
                <div class="info">
                  <div class="name">
                    <span class="company">{{item.company}}</span>
                    <span class="salary">{{item.salary}}</span>
                  </div>
                  <div class="intro">{{item.introduce.substr(0, 10)}}...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile">
          <ProfileInfo></ProfileInfo>
        </div>
      </div>
      <div class="footer">
        <HotCompany class="hot-company"></HotCompany>
        <div class="recommend-jobs">
          <div class="title">为你匹配</div>
          <div class="recommend-list">
            <div class="recommend-item" v-for="item in recommendList1" :key="item.name">
              <div class="avatar">
                <img :src="item.companyAvatar">
              </div>
              <div class="info">
                <div class="name">
                  <span class="company">{{item.company}}</span>
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
  import PositionChoice from "@/views/campusRecruit/PositionChoice"
  import ProfileInfo from "@/views/campusRecruit/ProfileInfo"
  import HotCompany from "@/views/campusRecruit/HotCompany"
  import jobData from "@/database/jobData"
  import {getRandomNum} from "@/utils/randomNum"

  export default {
    name: "CampusRecruit",
    components: {
      PositionChoice,
      ProfileInfo,
      HotCompany
    },
    data() {
      return {
        random1: getRandomNum(0, 8),
        random2: getRandomNum(0, 8),
        random3: getRandomNum(0, 8)
      }
    },
    computed: {
      recommendList1() {
        return jobData.slice(this.random1, this.random1+5)
      },
      recommendList2() {
        return jobData.slice(this.random2, this.random2+5)
      },
      recommendList3() {
        return jobData.slice(this.random3, this.random3+5)
      }

    }
  }
</script>

<style lang="scss" scoped>
  .container {
    .search {
      display: flex;
      justify-content: center;
      margin-bottom: 6px;

      input {
        width: 770px;
        height: 42px;
        line-height: 46px;
        padding: 12px 8px 12px 16px;
        font-size: 16px;
        border: 1px solid #e8e8e8;
        border-right: 0;
        vertical-align: top;
        outline: none;
        color: #333;
      }

      button {
        width: 140px;
        height: 42px;
        line-height: 46px;
        font-size: 18px;
        border: 1px solid #00b38a;
        background: #00b38a;
        color: #fff;
        cursor: pointer;
      }
    }

    .banner {
      height: 350px;
      display: flex;
      margin-bottom: 6px;

      .positions {
        flex: 0.8;
        border: 1px solid #f0f0f0;
      }
      .hot-recommend {
        flex: 3;
        display: flex;

        .hot-position, .hot-company, .high-salary {
          flex: 1;
          padding-bottom: 10px;
          border: 1px solid #f0f0f0;

          .head {
            height: 46px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom: 1px dashed #f0f0f0;

            .title {font-weight: 600;}
          }
          .position-list {
            min-width: 312px;

            .position-item {
              height: 58px;
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
        .hot-position {
          margin-left: 10px;
          border-top: 3px solid rgba(27,166,255,.5);
          .head {
            .title {color: #1ba6ff;}
            .message {font-size: 12px;}
          }
        }
        .hot-company {
          margin: 0 10px;
          border-top: 3px solid rgba(245,133,86,.5);
          .head {
            .title {color: #f58556;}
            .message {font-size: 12px;}
          }
        }
        .high-salary {
          margin-right: 10px;
          border-top: 3px solid rgba(0,179,138,.5);
          .head {
            .title {color: #00b38a;}
            .message {font-size: 12px;}
          }
        }
      }
      .profile {
        flex: 0.8;
        border: 1px solid #f0f0f0;
      }
    }

    .footer {
      display: flex;

      .hot-company {flex: 3;}
      .recommend-jobs {
        flex: 1;
        margin-left: 10px;
        margin-bottom: 32px;

        .title {
          height: 32px;
          font-weight: 600;
          font-size: 20px;
          color: #333;
          line-height: 28px;
          display: inline-block;
          margin-right: 20px;
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
  }
</style>
