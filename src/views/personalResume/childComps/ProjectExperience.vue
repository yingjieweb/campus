<template>
  <div class="projectExp">
    <ResumeViewTitle title="项目经验"></ResumeViewTitle>

    <div class="projectItems" v-for="(projectExpItem,index) in projectExp">
      <div
              :class="index === 'describe' ? 'growWidth' : 'projectItem'"
              v-for="(item, index) in projectExpItem"
              :key="index">
        <div class="projectItemKey">{{item[0]}}</div>
        <div class="projectItemValue"><pre>{{item[1]}}</pre></div>
      </div>
      <el-button @click="editProjectExp(index)">编辑</el-button>
      <el-button @click="deleteProjectExp(index)">删除</el-button>
      <el-button @click="addProjectExp" v-if="index === projectExp.length-1">添加</el-button>
      <el-button @click="goNextItem" v-if="index === projectExp.length-1">下一项</el-button>
    </div>
    <el-button @click="addProjectExp" v-if="projectExp.length === 0">添加</el-button>
    <el-button @click="goNextItem" v-if="projectExp.length === 0">下一项</el-button>

    <ProjectExperienceModal ref="ProjectExperienceModal" @updateProjectExp="updateProjectExp"></ProjectExperienceModal>
  </div>
</template>

<script lang="js">
  import ResumeViewTitle from "@/views/personalResume/childComps/ResumeViewTitle"
  import ProjectExperienceModal from "@/views/personalResume/childComps/ProjectExperienceModal"

  export default {
    name: "ProjectExperience",
    components: {
      ResumeViewTitle,
      ProjectExperienceModal
    },
    data(){
      return {
        projectExp: [{
          projectName: ['项目名称','军方综合管控系统'],
          projectRole: ['项目角色','模块负责人'],
          period: ['起止时间','2018.09 ~ 2021.07'],
          projectURL: ['项目链接','https://github.com/yingjieweb'],
          describe: ['项目描述', '本人主要协助测试对系统功能进行测试：协助开发修改后端bug：协助需求工程师与用户对接系统功能需求；协助需求工程师完成需求大纲、详细设计大纲的编写：协助测试工程师完成测试大纲的编写。']
        }]
      }
    },
    methods: {
      addProjectExp(){
        this.$refs.ProjectExperienceModal.setDialogVisible('新增项目经验', true, '', 'add');
      },
      editProjectExp(index){
        this.$refs.ProjectExperienceModal.setDialogVisible('编辑项目经验', true, this.projectExp[index], 'edit', index);
      },
      deleteProjectExp(deleteIndex){
        this.projectExp = this.projectExp.filter((item, index) => {
          return index !== deleteIndex;
        })

        this.$EventBus.$emit('updateResumeProjectExp', this.projectExp);
      },
      updateProjectExp(form, type, editItemIndex){
        if (type === 'add'){
          let newProjectExpItem = {};
          newProjectExpItem.projectName = ['项目名称',form.projectName];
          newProjectExpItem.projectRole = ['项目角色',form.projectRole];
          newProjectExpItem.period = ['起止时间',form.period];
          newProjectExpItem.projectURL = ['项目链接',form.projectURL];
          newProjectExpItem.describe = ['项目描述',form.describe];
          this.projectExp.push(newProjectExpItem);
        }else {
          this.projectExp[editItemIndex].projectName = ['项目名称',form.projectName];
          this.projectExp[editItemIndex].projectRole = ['项目角色',form.projectRole];
          this.projectExp[editItemIndex].period = ['起止时间',form.period];
          this.projectExp[editItemIndex].projectURL = ['项目链接',form.projectURL];
          this.projectExp[editItemIndex].describe = ['项目描述',form.describe];
        }

        this.$EventBus.$emit('updateResumeProjectExp', this.projectExp);
      },
      goNextItem(){
        this.$emit('goNextItem', 'fifth');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .projectExp {
    height: 750px;
    margin-right: 8px;
    overflow-y: auto;

    > .projectItems {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 12px;
      &:hover {
        background-color: #F9FBFF;
      }

      > .projectItem {
        width: 50%;
        margin-bottom: 16px;

        > .projectItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .projectItemValue {
          margin-bottom: 4px;
        }
      }

      > .growWidth {
        width: 100%;
        margin-bottom: 16px;

        > .projectItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .projectItemValue {
          margin-bottom: 4px;
        }
      }
    }
  }
</style>
