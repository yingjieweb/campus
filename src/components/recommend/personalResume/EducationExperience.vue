<template>
  <div class="educationExp">
    <ResumeViewTitle title="教育经历"></ResumeViewTitle>
    <div class="eduItems" v-for="(eduExpItem,index) in eduExp">
      <div class="eduItem" v-for="(item, index) in eduExpItem" :key="index">
        <div class="eduItemKey">{{item[0]}}</div>
        <div class="eduItemValue">{{item[1]}}</div>
      </div>
      <el-button @click="editEduExp(index)">编辑</el-button>
      <el-button @click="deleteEduExp(index)">删除</el-button>
      <el-button @click="addEduExp" v-if="index === eduExp.length-1">添加</el-button>
      <el-button @click="goNextItem" v-if="index === eduExp.length-1">下一项</el-button>
    </div>
    <el-button @click="addEduExp" v-if="eduExp.length === 0">添加</el-button>
    <el-button @click="goNextItem" v-if="eduExp.length === 0">下一项</el-button>

    <EducationExperienceModal ref="EducationExperienceModal" @updateEduExp="updateEduExp"></EducationExperienceModal>
  </div>
</template>

<script lang="js">
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
        eduExp: [{
          school: ['学校','东北大学'],
          major: ['专业','软件工程'],
          period: ['起止时间','2018.09.07 ~ 2021.07.01'],
          record: ['学历','硕士'],
          scoreRank: ['成绩排名','50%'],
          studyType: ['学历类型', '统招全日制']
        }]
      }
    },
    methods: {
      addEduExp(){
        this.$refs.EducationExperienceModal.setDialogVisible('新增教育经历', true, '', 'add');
      },
      editEduExp(index){
        this.$refs.EducationExperienceModal.setDialogVisible('编辑教育经历', true, this.eduExp[index], 'edit', index);
      },
      deleteEduExp(deleteIndex){
        this.eduExp = this.eduExp.filter((item, index) => {
          return index !== deleteIndex;
        });

        this.$EventBus.$emit('updateResumeEduExp', this.eduExp);
      },
      updateEduExp(form, type, editItemIndex){
        if (type === 'add'){
          let newEduExpItem = {};
          newEduExpItem.school = ['学校',form.school];
          newEduExpItem.major = ['专业',form.major];
          newEduExpItem.period = ['起止时间',form.period];
          newEduExpItem.record = ['学历',form.record];
          newEduExpItem.scoreRank = ['成绩排名',form.scoreRank];
          newEduExpItem.studyType = ['学历类型',form.studyType];
          this.eduExp.push(newEduExpItem);
        }else {
          this.eduExp[editItemIndex].school = ['学校',form.school];
          this.eduExp[editItemIndex].major = ['专业',form.major];
          this.eduExp[editItemIndex].period = ['起止时间',form.period];
          this.eduExp[editItemIndex].record = ['学历',form.record];
          this.eduExp[editItemIndex].scoreRank = ['成绩排名',form.scoreRank];
          this.eduExp[editItemIndex].studyType = ['学历类型',form.studyType];
        }

        this.$EventBus.$emit('updateResumeEduExp', this.eduExp);
      },
      goNextItem(){
        this.$emit('goNextItem', 'third');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .educationExp {
    height: 750px;
    margin-right: 8px;
    overflow-y: auto;

    > .eduItems {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 12px;
      &:hover {
        background-color: #F9FBFF;
      }

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
