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
    min-width: 1502px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>
