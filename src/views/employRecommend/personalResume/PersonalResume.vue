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
            <el-tab-pane label="😏 求职意向" name="seventh">
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
  import BasicInfo from "./childComps/BasicInfo.vue";
  import EducationExperience from "./childComps/EducationExperience.vue";
  import InternExperience from "./childComps/InternExperience.vue";
  import ProjectExperience from "./childComps/ProjectExperience.vue";
  import LanguageAbility from "./childComps/LanguageAbility.vue";
  import SelfAssess from "./childComps/SelfAssess.vue";
  import JobIntention from "./childComps/JobIntention.vue";
  import ResumePreview from "./childComps/ResumePreview.vue";

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
