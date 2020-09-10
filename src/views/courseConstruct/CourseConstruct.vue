<template>
  <Layout>
    <Block title="课程建设">
      <div slot="content" style="display:flex; border: 1px solid green;">
        <div style="flex: 2; text-align: center; border: 1px solid red; margin-right: 10px;">
          <p>课程演示1</p>
          <p>演示方案</p>
          <p>教学大纲</p>
          <p>课程信息</p>
        </div>
        <div style="flex: 10; border: 1px solid red;">
          <div style="border: 1px solid red;">编辑、结构导图、报告分析、达成度图谱</div>
          <div style="display:flex; height: 80px;">
            <div style="flex: 3; border: 1px solid red;">完成度</div>
            <div style="flex: 3; border: 1px solid red;">达成取</div>
            <div style="flex: 4; border: 1px solid red;">资源区</div>
          </div>
        </div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: "CourseConstruct"
  }
</script>

<style lang="scss" scoped>

</style>
