<template>
  <div class="position-list">
    <PositionItem v-for="item in 16"></PositionItem>
  </div>
</template>

<script lang="js">
  import PositionItem from "@/views/positionSearch/PositionItem"

  export default {
    name: "PositionList",
    components: {
      PositionItem
    }
  }
</script>

<style lang="scss" scoped>
  .position-list {
    width: 100%;
    border: 1px solid red;

    display: flex;
    flex-wrap: wrap;
  }
</style>
