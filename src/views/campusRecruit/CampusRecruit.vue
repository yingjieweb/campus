<template>
  <Block title="校园招聘" style="height: 1200px;">
    <div slot="content" class="container">
      <div class="search">
        <input type="text" placeholder="搜索职位、公司、地点">
        <button>搜索</button>
      </div>
      <div class="banner"></div>
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
      height: 50px;
      border: 1px solid red;
    }

    .banner {
      height: 200px;
      border: 1px solid red;
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
