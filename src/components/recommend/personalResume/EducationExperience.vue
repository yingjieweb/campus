<template>
  <div class="educationExp">
    <ResumeViewTitle title="教育经历"></ResumeViewTitle>
    <div class="eduItems">
      <div class="eduItem" v-for="(item, index) in eduExp" :key="index">
        <div class="eduItemKey">{{item[0]}}</div>
        <div class="eduItemValue">{{item[1]}}</div>
      </div>
    </div>
    <el-button @click="editEduExp">编辑</el-button>
    <el-button @click="addEduExp">添加</el-button>

    <EducationExperienceModal ref="EducationExperienceModal" @updateEduExp="updateEduExp"></EducationExperienceModal>
  </div>
</template>

<script lang="ts">
  import ResumeViewTitle from "./ResumeViewTitle.vue";
  import EducationExperienceModal from "./EducationExperienceModal.vue";

  export default {
    name: "EducationExperience",
    components: {
      ResumeViewTitle,
      EducationExperienceModal
    },
    data(){
      return {
        eduExp: {
          school: ['学校','东北大学'],
          major: ['专业','软件工程'],
          period: ['起止时间','2018.09 ~ 2021.07'],
          record: ['学历','硕士'],
          scoreRank: ['成绩排名','50%'],
          studyType: ['学历类型', '统招全日制']
        }
      }
    },
    methods: {
      editEduExp(){
        this.$refs.EducationExperienceModal.setDialogVisible('编辑教育经历', true, this.eduExp)
      },
      addEduExp(){
        this.$refs.EducationExperienceModal.setDialogVisible('新增教育经历', true, '')
      },
      updateEduExp(form){
        this.eduExp.school = ['学校',form.school];
        this.eduExp.major = ['专业',form.major];
        this.eduExp.period = ['起止时间',form.period];
        this.eduExp.record = ['学历',form.record];
        this.eduExp.scoreRank = ['成绩排名',form.scoreRank];
        this.eduExp.studyType = ['学历类型',form.studyType];
      }
    }
  }
</script>

<style lang="scss" scoped>
  .educationExp {
    height: 750px;
    margin-right: 8px;

    > .eduItems {
      display: flex;
      flex-wrap: wrap;

      > .eduItem {
        width: 50%;
        margin-bottom: 16px;

        > .eduItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .eduItemValue {
          margin-bottom: 4px;
        }
      }
    }
  }
</style>
