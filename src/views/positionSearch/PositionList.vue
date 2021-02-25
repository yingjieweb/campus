<template>
  <div class="position-list">
    <PositionItem v-for="item in jobDataList" :key="item.id" :job-item="item"></PositionItem>
  </div>
</template>

<script lang="js">
  import PositionItem from "@/views/positionSearch/PositionItem"

  export default {
    name: "PositionList",
    components: {
      PositionItem
    },
    props: {
      jobDataList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .position-list {
    width: 100%;
    min-width: 1664px;
    display: flex;
    flex-wrap: wrap;
  }
</style>
