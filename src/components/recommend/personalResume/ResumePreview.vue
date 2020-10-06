<template>
  <div class="resumePreview">
    <div class="basicInfo">基本信息</div>
    <div class="basicInfo">求职意向</div>
    <div class="basicInfo">教育经历</div>
    <div class="basicInfo">实习经历</div>
    <div class="basicInfo">项目经验</div>
    <div class="basicInfo">奖惩情况</div>
    <div class="basicInfo">家庭情况</div>
    <div class="basicInfo">自我评价</div>
    <div class="basicInfo">其他情况</div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ResumePreview"
  }
</script>

<style lang="scss" scoped>
  .resumePreview {
    flex-grow: 3;
    border: 1px solid salmon;
  }
</style>
