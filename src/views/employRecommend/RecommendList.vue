<template>
  <div class="recommend-list">
    <RecommendItem v-for="(item, index) in recommendList" :key="index" :recommendItem="item"></RecommendItem>
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
      recommendList: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recommend-list {
    min-width: 1502px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>
