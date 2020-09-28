<template>
  <Layout>
    <Block title="我的个人简历"  style="flex: 6;">
      <div slot="content" class="container">
        <el-tabs tab-position="left" class="resumeEdit" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first">
            <ResumePersonalInfo></ResumePersonalInfo>
          </el-tab-pane>
          <el-tab-pane label="求职意向" name="second">求职意向</el-tab-pane>
          <el-tab-pane label="教育经历" name="third">教育经历</el-tab-pane>
          <el-tab-pane label="实习经历" name="fourth">实习经历</el-tab-pane>
          <el-tab-pane label="学生干部经历" name="fifth">学生干部经历</el-tab-pane>
          <el-tab-pane label="项目经验" name="sixth">项目经验</el-tab-pane>
          <el-tab-pane label="奖惩经历" name="seventh">奖惩经历</el-tab-pane>
          <el-tab-pane label="家庭情况" name="eighth">家庭情况</el-tab-pane>
          <el-tab-pane label="自我评价" name="ninth">自我评价</el-tab-pane>
          <el-tab-pane label="其他情况" name="tenth">其他情况</el-tab-pane>
        </el-tabs>
      </div>
    </Block>

    <Block title="简历预览图" style="flex: 4;">
      <div slot="content" class="container">
        <ResumePreview></ResumePreview>
      </div>
    </Block>
  </Layout>
</template>

<script lang="ts">
  import ResumePersonalInfo from "../../components/recommend/personalResume/ResumePersonalInfo.vue";
  import ResumePreview from "../../components/recommend/personalResume/ResumePreview.vue";

  export default {
    name: "PersonalResume",
    components: {
      ResumePersonalInfo,
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
