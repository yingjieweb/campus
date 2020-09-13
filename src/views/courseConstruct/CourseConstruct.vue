<template>
  <Layout>
    <Block title="课程建设">
      <div slot="content" class="container">
        <div class="scheme">
          <p>课程演示1</p>
          <p>演示方案</p>
          <p>教学大纲</p>
          <p>课程信息</p>
        </div>
        <div class="detail">
          <div class="buttons">编辑、结构导图、报告分析、达成度图谱</div>
          <div class="classify">
            <div class="classify1">
              <p><i class="el-icon-pie-chart" ></i></p>
              <p>完成度</p>
            </div>
            <div class="classify2">达成取</div>
            <div class="classify3">资源区</div>
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
  .container {
    display:flex;

    > .scheme {
      flex: 2;
      text-align: center;
      border: 1px solid #E6E8ED;
      border-radius: 4px;
      margin-right: 10px;
    }

    > .detail {
      flex: 10;
      border: 1px solid #E6E8ED;
      border-radius: 4px;

      > .classify {
        height: 80px;
        display:flex;

        > .classify1 {
          flex: 3;
          border: 1px solid #E6E8ED;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          i {
            font-size: 2em;
            color: #1296DB;
          }
        }
        > .classify2 {flex: 3; border: 1px solid #E6E8ED;}
        > .classify3 {flex: 4; border: 1px solid #E6E8ED;}
      }
    }
  }
</style>
