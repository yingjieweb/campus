<template>
  <Block title="岗位详情">
    <div slot="content">
      positionId： {{positionId}}
    </div>
  </Block>
</template>

<script lang="js">
  export default {
    name: "PositionDetails",
    data() {
      return {
        positionId: ''
      }
    },
    created() {
      this.positionId = this.$route.query.positionId
    }
  }
</script>

<style lang="scss" scoped>
  .positionDetails {
    border: 1px solid red;
  }
</style>
