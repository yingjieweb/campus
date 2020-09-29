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
            <el-tab-pane label="实习经历" name="third">实习经历</el-tab-pane>
            <el-tab-pane label="学生干部经历" name="fourth">学生干部经历</el-tab-pane>
            <el-tab-pane label="项目经验" name="fifth">项目经验</el-tab-pane>
            <el-tab-pane label="奖惩经历" name="sixth">奖惩经历</el-tab-pane>
            <el-tab-pane label="家庭情况" name="seventh">家庭情况</el-tab-pane>
            <el-tab-pane label="自我评价" name="eighth">自我评价</el-tab-pane>
            <el-tab-pane label="其他情况" name="ninth">其他情况</el-tab-pane>

            <el-tab-pane label="😏 求职意向" name="tenth">求职意向</el-tab-pane>
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
  import ResumePreview from "../../components/recommend/personalResume/ResumePreview.vue";

  export default {
    name: "PersonalResume",
    components: {
      BasicInfo,
      EducationExperience,
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
