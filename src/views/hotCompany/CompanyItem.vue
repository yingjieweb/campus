<template>
  <div class="company-item">
    <div class="top">
      <img :src="companyItem.companyAvatar">
      <span class="company-name">{{companyItem.company}}</span>
      <span class="company-intro">{{companyItem.introduce.substr(0, 15)}}</span>
    </div>
    <div class="bottom">
      <div class="bottom-item">
        <span>198</span>
        <span>面试评价</span>
      </div>
      <div class="bottom-item">
        <span>198</span>
        <span>在招岗位</span>
      </div>
      <div class="bottom-item">
        <span>198</span>
        <span>简历投递数</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "CompanyItem",
    props: {
      companyItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      goDetails(id) {
        this.$router.push({
          path: '/company-details',
          query: { positionId: id },
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .company-item {
    width: 256px;
    height: 220px;
    margin: 10px 10px;
    border: 1px solid #EEE;
    padding: 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      box-shadow: 0 0 10px 0 rgb(56 81 76 / 12%);
    }

    .top {
      height: 75%;
      border-bottom: 1px dashed #EDEDED;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      img {width: 70px;}

      .company-name {
        cursor: pointer;

        &:hover {color: #00b38a;}
      }

      .company-intro {color: #999;}
    }

    .bottom {
      height: 20%;
      display: flex;

      .bottom-item {
        text-align: center;
        align-self: flex-start;

        &:hover {
          span {color: #00b38a;}
        }

        &:not(:first-child) {
          border-left: 1px solid #EDEDED;
        }

        span {
          font-size: 14px;
          display: inline-block;
          cursor: pointer;
        }
      }
    }
  }
</style>
