<template>
  <Layout>
    <Block title="应届生就业推荐">
      <div slot="content" style="border: 1px solid green;">
        <div class="search">
          <input type="text" placeholder="搜索职位、公司或地点">
          <button>11111</button>
        </div>
        <RecommendList :recommend-data="recommendData"></RecommendList>
      </div>
    </Block>
  </Layout>
</template>

<script lang="ts">
  import RecommendList from "../../components/recommend/RecommendList.vue";
  import RecommendItem from "../../components/recommend/RecommendItem.vue";
  import recommendData from "../../database/recommendData.json"


  export default {
    name: "EmployRecommend",
    components: {
      RecommendList,
      RecommendItem
    },
    data(){
      return {
        recommendData: recommendData
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    justify-content: center;

    > input {
      display: inline-block;
      width: 400px;
      height: 40px;
    }
  }
</style>
