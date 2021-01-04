<template>
  <div class="recommendList">
    <RecommendItem v-for="(item, index) in recommendData" :key="index" :recommendItem="item">{{item}}</RecommendItem>
  </div>
</template>

<script lang="ts">
  import RecommendItem from "./RecommendItem.vue";

  export default {
    name: "RecommendList",
    components: {
      RecommendItem
    },
    props: {
      recommendData: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recommendList {
    display: flex;
    flex-wrap: wrap;
    /*border: 1px solid red;*/
    justify-content: flex-start;
  }
</style>
