<template>
  <Layout>
    <Block title="应届生就业推荐">
      <div slot="content">
        <el-tabs tab-position="left" style="height: 750px;">
          <el-tab-pane label="基本信息">
            <div class="basicInfo" style="border: 1px solid red; height: 500px;">
              基本信息
            </div>
          </el-tab-pane>
          <el-tab-pane label="求职意向">求职意向</el-tab-pane>
          <el-tab-pane label="教育经历">教育经历</el-tab-pane>
          <el-tab-pane label="实习经历">实习经历</el-tab-pane>
          <el-tab-pane label="学生干部经历">学生干部经历</el-tab-pane>
          <el-tab-pane label="项目经验">项目经验</el-tab-pane>
          <el-tab-pane label="奖惩经历">奖惩经历</el-tab-pane>
          <el-tab-pane label="家庭情况">家庭情况</el-tab-pane>
          <el-tab-pane label="自我评价">自我评价</el-tab-pane>
          <el-tab-pane label="其他情况">其他情况</el-tab-pane>
        </el-tabs>
      </div>
    </Block>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: "PersonalResume"
  }
</script>

<style lang="scss" scoped>

</style>
