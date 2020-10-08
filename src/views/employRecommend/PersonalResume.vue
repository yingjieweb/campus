<template>
  <Layout>
    <div style="display:flex;">
      <Block title="我的个人简历"  style="flex: 6;">
        <div slot="content" class="container">
          <el-tabs tab-position="left" class="resumeEdit" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
              <BasicInfo @goNextItem="goNextItem"></BasicInfo>
            </el-tab-pane>
            <el-tab-pane label="教育经历" name="second">
              <EducationExperience @goNextItem="goNextItem"></EducationExperience>
            </el-tab-pane>
            <el-tab-pane label="实习经历" name="third">
              <InternExperience @goNextItem="goNextItem"></InternExperience>
            </el-tab-pane>
            <el-tab-pane label="项目经验" name="fourth">
              <ProjectExperience @goNextItem="goNextItem"></ProjectExperience>
            </el-tab-pane>
            <el-tab-pane label="语言能力" name="fifth">
              <LanguageAbility @goNextItem="goNextItem"></LanguageAbility>
            </el-tab-pane>
            <el-tab-pane label="自我评价" name="sixth">
              <SelfAssess @goNextItem="goNextItem"></SelfAssess>
            </el-tab-pane>
            <el-tab-pane label="😏 求职意向" name="tenth">
              <JobIntention></JobIntention>
            </el-tab-pane>
          </el-tabs>
        </div>
      </Block>

      <Block title="简历预览图" style="flex: 4;">
        <div slot="content" class="container">
          <ResumePreview></ResumePreview>
        </div>
      </Block>
    </div>
  </Layout>
</template>

<script lang="ts">
  import BasicInfo from "../../components/recommend/personalResume/BasicInfo.vue";
  import EducationExperience from "../../components/recommend/personalResume/EducationExperience.vue";
  import InternExperience from "../../components/recommend/personalResume/InternExperience.vue";
  import ProjectExperience from "../../components/recommend/personalResume/ProjectExperience.vue";
  import LanguageAbility from "../../components/recommend/personalResume/LanguageAbility.vue";
  import SelfAssess from "../../components/recommend/personalResume/SelfAssess.vue";
  import JobIntention from "../../components/recommend/personalResume/JobIntention.vue";
  import ResumePreview from "../../components/recommend/personalResume/ResumePreview.vue";

  export default {
    name: "PersonalResume",
    components: {
      BasicInfo,
      EducationExperience,
      InternExperience,
      ProjectExperience,
      LanguageAbility,
      SelfAssess,
      JobIntention,
      ResumePreview
    },
    data(){
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      goNextItem(next){
        this.activeName = next;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display:flex;

    > .resumeEdit {
      flex: 7;
      height: 750px;
    }
  }
</style>
