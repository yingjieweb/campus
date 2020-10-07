<template>
  <div class="selfAssess">
    <ResumeViewTitle title="自我评价"></ResumeViewTitle>
    自我评价

    <SelfAssessModal ref="SelfAssessModal"></SelfAssessModal>
  </div>
</template>

<script lang="js">
  import ResumeViewTitle from "@/components/recommend/personalResume/ResumeViewTitle"
  import SelfAssessModal from "@/components/recommend/personalResume/SelfAssessModal"

  export default {
    name: "SelfAssess",
    components: {
      ResumeViewTitle,
      SelfAssessModal
    }
  }
</script>

<style lang="scss" scoped>

</style>
