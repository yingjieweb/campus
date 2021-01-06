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
  import ResumeViewTitle from "@/views/personalResume/childComps/ResumeViewTitle"
  import SelfAssessModal from "@/views/personalResume/childComps/SelfAssessModal"

  export default {
    name: "SelfAssess",
    components: {
      ResumeViewTitle,
      SelfAssessModal
    },
    data(){
      return {
        selfAssess: '真不错，感觉自己真不错！作为一位职场新人，一定能够以积极主动的工作态度来迎接工作中的每一个挑战；团队配合能力：善于沟通，' +
            '有一定团队协作经验，具备活动策划和组织协调能力；工作态度评价：良好的责任感，吃苦耐劳，擅于管理时间，勇于面对变化和挑战。'
      }
    },
    methods: {
      editSelfAssess(){
        this.$refs.SelfAssessModal.setDialogVisible('编辑自我评价', true, this.selfAssess);
      },
      updateSelfAssess(form){
        this.selfAssess = form.selfAssess;

        this.$EventBus.$emit('updateResumeSelfAccess', this.selfAssess);
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
