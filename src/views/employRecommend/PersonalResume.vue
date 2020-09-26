<template>
  <Layout>
    <Block title="应届生就业推荐">
      <div slot="content">
        <div class="container">
          <div class="resume">
            11111
          </div>
          <div class="sideNav">
            <ul>
              <li>基本信息</li>
              <li>求职意向</li>
              <li>教育经历</li>
              <li>实习经历</li>
              <li>学生干部经历</li>
              <li>项目经验</li>
              <li>外语情况</li>
              <li>奖惩经历</li>
              <li>家庭情况</li>
              <li>自我评价</li>
              <li>其他情况</li>
            </ul>
          </div>
        </div>
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
  .container {
    display: flex;

    > .resume {
      flex: 9;
      border: 1px solid red;
    }

    > .sideNav {
      flex: 1;
      border: 1px solid red;
    }
  }
</style>
