<template>
  <Block title="岗位详情">
    <div slot="content">
      positionId： {{positionId}}
      jobDataDetails: {{jobDataDetails}}
      <img :src="jobDataDetails.companyAvatar">
    </div>
  </Block>
</template>

<script lang="js">
  import jobData from "@/database/jobData"

  export default {
    name: "CompanyDetails",
    data() {
      return {
        positionId: '',
        jobData: jobData
      }
    },
    computed: {
      jobDataDetails() {
        return jobData[--this.positionId]
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
