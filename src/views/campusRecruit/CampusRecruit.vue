<template>
  <Block title="校园招聘" style="height: 1200px;">
    <div slot="content" class="container">
      <div class="search">
        <input type="text" placeholder="搜索职位、公司、地点">
        <button>搜索</button>
      </div>
      <div class="banner">
        <div class="position"></div>
        <div class="advertise"></div>
        <div class="profile"></div>
      </div>
      <div class="hot-company"></div>
      <div class="hot-job"></div>
    </div>
  </Block>
</template>

<script lang="js">
  export default {
    name: "CampusRecruit"
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
      height: 310px;
      background: #fff;
      padding: 18px 20px 14px;
      border: 1px solid #f0f0f0;
      display: flex;

      .position {
        flex: 2;
        border: 1px solid #f0f0f0;
      }
      .advertise {
        flex: 6;
        border: 1px solid #f0f0f0;

      }
      .profile {
        flex: 2;
        border: 1px solid #f0f0f0;
      }
    }

    .hot-company {
      height: 200px;
      border: 1px solid red;
    }

    .hot-job {
      height: 200px;
      border: 1px solid red;
    }
  }
</style>
