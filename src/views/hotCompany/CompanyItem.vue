<template>
  <div class="company-item">
    <div class="top">
      <img :src="companyItem.companyAvatar" @click="goDetails(companyItem.id)">
      <span class="company-name" @click="goDetails(companyItem.id)">{{companyItem.companyName}}</span>
      <span class="company-intro">{{companyItem.introduce.substr(0, 12)}}...</span>
    </div>
    <div class="bottom">
      <div class="bottom-item" @click="goDetails(companyItem.id)">
        <span>{{ random1 }}</span>
        <span>面试评价</span>
      </div>
      <div class="bottom-item" @click="goDetails(companyItem.id)">
        <span>{{ random2 }}</span>
        <span>在招岗位</span>
      </div>
      <div class="bottom-item" @click="goDetails(companyItem.id)">
        <span>{{ random3 }}</span>
        <span>简历投递数</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  import {getRandomNum} from "@/utils/randomNum";

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
    data() {
      return {
        random1: getRandomNum(4, 34),
        random2: getRandomNum(2, 19),
        random3: getRandomNum(1, 25)
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

      img {
        width: 70px;
        cursor: pointer;
      }

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
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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
