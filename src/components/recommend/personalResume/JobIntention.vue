<template>
  <div class="jobIntention">
    <ResumeViewTitle title="求职意向"></ResumeViewTitle>
    <el-alert
            title="请谨慎填写求职意向，系统会在您的求职意向的基础上，结合您在校期间的个人综合性评价，尽可能为您提供精准的岗位推荐~"
            type="info"
            center
            show-icon
            :closable="false">
    </el-alert>

    <div class="jobItems">
      <div class="jobItem" v-for="(item, index) in jobIntention" :key="index">
        <div class="jobItemKey">{{item[0]}}</div>
        <div class="jobItemValue">{{item[1]}}</div>
      </div>
      <el-button @click="editJobIntention">编辑</el-button>
      <el-button @click="finishResume">完成</el-button>
    </div>

    <JobIntentionModal ref="JobIntentionModal" @updateJobIntention="updateJobIntention"></JobIntentionModal>
  </div>
</template>

<script lang="js">
  import ResumeViewTitle from "@/components/recommend/personalResume/ResumeViewTitle"
  import JobIntentionModal from "@/components/recommend/personalResume/JobIntentionModal"

  export default {
    name: "JobIntention",
    components: {
      ResumeViewTitle,
      JobIntentionModal
    },
    data(){
      return {
        jobIntention: {
          expectedPosition: ['期望职位','大数据开发工程师'],
          expectedIndustry: ['期望行业','软件工程'],
          workCity: ['工作城市','北京'],
          salaryRank: ['薪资要求','15k']
        }
      }
    },
    methods: {
      editJobIntention(){
        this.$refs.JobIntentionModal.setDialogVisible('编辑求职意向', true, this.jobIntention);
      },
      updateJobIntention(form){
        this.jobIntention.expectedPosition = ['期望职位', form.expectedPosition];
        this.jobIntention.expectedIndustry = ['期望行业', form.expectedIndustry];
        this.jobIntention.workCity = ['工作城市', form.workCity];
        this.jobIntention.salaryRank = ['薪资要求', form.salaryRank];
      },
      finishResume(){
        alert(1111);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .jobIntention {
    height: 750px;
    margin-right: 8px;
    overflow-y: auto;

    > .jobItems {
      display: flex;
      flex-wrap: wrap;
      margin-top: 12px;
      margin-bottom: 12px;

      > .jobItem {
        width: 50%;
        margin-bottom: 16px;

        > .jobItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .jobItemValue {
          margin-bottom: 4px;
        }
      }
    }
  }
</style>
