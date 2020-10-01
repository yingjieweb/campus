<template>
  <div class="internExp">
    <ResumeViewTitle title="实习经历"></ResumeViewTitle>
    <div class="hasIntern">
      <el-checkbox v-model="hasIntern">我没有实习经历</el-checkbox>
      <div class="switchState" @click="switchState"></div>
    </div>
    <el-divider></el-divider>
    <div v-if="!hasIntern">
      <div class="internItems" v-for="(internExpItem,index) in internExp">
        <div
            :class="index === 'describe' ? 'growWidth' : 'internItem'"
            v-for="(item, index) in internExpItem"
            :key="index">
          <div class="internItemKey">{{item[0]}}</div>
          <div class="internItemValue">{{item[1]}}</div>
        </div>
        <el-button @click="editInternExp(index)">编辑</el-button>
        <el-button @click="deleteInternExp(index)">删除</el-button>
        <el-button @click="addInternExp" v-if="index === internExp.length-1">添加</el-button>
        <el-button @click="goNextItem" v-if="index === internExp.length-1">下一项</el-button>
      </div>
      <el-button @click="addInternExp" v-if="internExp.length === 0">添加</el-button>
      <el-button @click="goNextItem" v-if="internExp.length === 0">下一项</el-button>
    </div>

    <InternExperienceModal ref="InternExperienceModal" @updateInternExp="updateInternExp"></InternExperienceModal>
  </div>
</template>

<script lang="js">
  import ResumeViewTitle from "@/components/recommend/personalResume/ResumeViewTitle"
  import InternExperienceModal from "@/components/recommend/personalResume/InternExperienceModal"

  export default {
    name: "InternExperience",
    components: {
      ResumeViewTitle,
      InternExperienceModal
    },
    data(){
      return {
        hasIntern: false,
        internExp: [{
          company: ['公司', '京东'],
          period: ['时间', '2020.08.01~2020.05.01'],
          position: ['岗位', '前端开发实习生'],
          describe: ['描述', '我干了哪些模块，具体用到的技术栈具体用到的技术栈具体用到的技术栈具体用到的技术栈具体用到的技术栈具体用到的技术栈']
        }]
      }
    },
    methods: {
      switchState(){
        this.hasIntern = !this.hasIntern;
      },
      addInternExp(){
        this.$refs.InternExperienceModal.setDialogVisible('新增实习经历', true, '', 'add');
      },
      editInternExp(index){
        this.$refs.InternExperienceModal.setDialogVisible('编辑实习经历', true, this.internExp[index], 'edit', index);
      },
      deleteInternExp(deleteIndex){
        this.internExp = this.internExp.filter((item, index) => {
          return index !== deleteIndex;
        })
      },
      updateInternExp(form, type, editItemIndex){
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
      },
      goNextItem(){
        this.$emit('goNextItem', 'third');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .internExp {
    height: 750px;
    margin-right: 8px;
    overflow-y: auto;

    >.hasIntern {
      display: flex;
      padding: 8px 0;
      cursor: pointer;
      margin-bottom: -12px;

      > .switchState {
        flex-grow: 1;
      }
    }

    .internItems {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 12px;
      &:hover {
        background-color: #F9FBFF;
      }

      > .internItem {
        width: 50%;
        margin-bottom: 16px;

        > .internItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .internItemValue {
          margin-bottom: 4px;
        }
      }

      > .growWidth {
        width: 100%;
        margin-bottom: 16px;

        > .internItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .internItemValue {
          margin-bottom: 4px;
        }
      }
    }
  }
</style>
