<template>
  <Block title="岗位详情">
    <div slot="content">
      positionId： {{positionId}}
      recommendDataDetails: {{recommendDataDetails}}
      <img :src="recommendDataDetails.companyAvatar" alt="">
    </div>
  </Block>
</template>

<script lang="js">
  import recommendData from "../../../../database/recommendData.js"

  export default {
    name: "PositionDetails",
    data() {
      return {
        positionId: '',
        recommendData: recommendData
      }
    },
    computed: {
      recommendDataDetails() {
        return recommendData[--this.positionId]
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
