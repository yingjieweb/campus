<template>
  <div class="selfAssess">
    <ResumeViewTitle title="自我评价"></ResumeViewTitle>
    <div class="assessText">
      <pre>{{selfAssess}}</pre>
    </div>
    <el-button @click="editSelfAssess">编辑</el-button>
    <el-button @click="goNextItem">下一项</el-button>

    <SelfAssessModal ref="SelfAssessModal" @updateSelfAssess="updateSelfAssess"></SelfAssessModal>
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
    },
    data(){
      return {
        selfAssess: '真不错，感觉自己真不错'
      }
    },
    methods: {
      editSelfAssess(){
        this.$refs.SelfAssessModal.setDialogVisible('编辑自我评价', true, this.selfAssess);
      },
      updateSelfAssess(form){
        this.selfAssess = form.selfAssess;
      },
      goNextItem(){
        this.$emit('goNextItem', 'seventh');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .assessText {
    margin-bottom: 16px;
  }
</style>
