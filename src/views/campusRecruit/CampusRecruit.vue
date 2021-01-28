<template>
  <Block title="校园招聘" style="height: 1200px;">
    <div slot="content" class="container">
      <div class="search">
        <input type="text" placeholder="搜索职位、公司、地点">
        <button>搜索</button>
      </div>
      <div class="banner">
        <div class="positions"></div>
        <div class="hot-recommend">
          <div class="hot-position">
            <div class="head">
              <span class="title">大家都在投</span>
              <span class="message">助力好未来</span>
            </div>
            <div class="positionsList" v-for="item in recommendList" :key="item.name">
              <div class="positionItem">
                <div class="avatar">
                  <img :src="item.avatar">
                </div>
                <div class="info">
                  <div class="name">{{item.name}}</div>
                  <div class="intro">{{item.intro}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="hot-company">
            <div class="head">
              <span class="title">投递热门榜</span>
              <span class="message">值得投一投</span>
            </div>
            <div class="positionsList" v-for="item in recommendList" :key="item.name">
              <div class="positionItem">
                <div class="avatar">
                  <img :src="item.avatar">
                </div>
                <div class="info">
                  <div class="name">{{item.name}}</div>
                  <div class="intro">{{item.intro}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="high-salary">
            <div class="head">
              <span class="title">高薪职业榜</span>
              <span class="message">才华最值钱</span>
            </div>
            <div class="positionsList" v-for="item in recommendList" :key="item.name">
              <div class="positionItem">
                <div class="avatar">
                  <img :src="item.avatar">
                </div>
                <div class="info">
                  <div class="name">{{item.name}}</div>
                  <div class="intro">{{item.intro}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile"></div>
      </div>
      <div class="hot-job"></div>
    </div>
  </Block>
</template>

<script lang="js">
  export default {
    name: "CampusRecruit",
    data() {
      return {
        recommendList: [
          {avatar: require('../../database/companyAvatar/shanbei.png'), name: '字节跳动1', intro: '北京/文娱/D轮及以上'},
          {avatar: require('../../database/companyAvatar/shanbei.png'), name: '字节跳动2', intro: '北京/文娱/D轮及以上'},
          {avatar: require('../../database/companyAvatar/shanbei.png'), name: '字节跳动3', intro: '北京/文娱/D轮及以上'},
          {avatar: require('../../database/companyAvatar/shanbei.png'), name: '字节跳动4', intro: '北京/文娱/D轮及以上'},
          {avatar: require('../../database/companyAvatar/shanbei.png'), name: '字节跳动5', intro: '北京/文娱/D轮及以上'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    .search {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;

      input {
        width: 770px;
        height: 46px;
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
        height: 46px;
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
        flex: 1;
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
          .positionsList {
            .positionItem {
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
        flex: 1;
        border: 1px solid #f0f0f0;
      }
    }

    .hot-job {
      height: 356px;
      border: 1px solid red;
    }
  }
</style>
