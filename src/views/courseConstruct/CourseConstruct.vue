<template>
  <Block title="课程建设">
    <div slot="content" class="container">
      <div class="scheme">
        <p>课程演示1</p>
        <p>演示方案</p>
        <p>教学大纲</p>
        <p style="background-color: #1296DB; padding: 2px; color: white;">课程信息</p>
      </div>
      <div class="detail">
        <div class="buttons">
          <el-button type="primary" size="small" plain>编辑</el-button>
          <el-button type="primary" size="small" plain>结构导图</el-button>
          <el-button type="primary" size="small" plain>报告分析</el-button>
          <el-button type="primary" size="small" plain>达成度图谱</el-button>
          <el-button type="primary" size="small" plain>持续改进</el-button>
          <el-button type="primary" size="small" plain>支撑文件</el-button>
          <el-button type="primary" size="small" plain>设置权重</el-button>
        </div>
        <div class="classify">
          <div class="classify1">
            <p><i class="el-icon-pie-chart"></i></p>
            <p>完成度区</p>
          </div>
          <div class="classify2">达成度区</div>
          <div class="classify3">资源区</div>
        </div>
      </div>
    </div>
  </Block>
</template>

<script lang="ts">
  export default {
    name: "CourseConstruct"
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    min-height: 170px;

    > .scheme {
      flex: 2;
      text-align: center;
      border: 2px solid #E6E8ED;
      border-radius: 4px;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    > .detail {
      flex: 10;
      border: 1px solid #E6E8ED;
      border-radius: 4px;

      > .buttons {
        margin: 4px;
      }

      > .classify {
        height: 80px;
        display: flex;

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

        > .classify2 {
          flex: 3;
          border: 1px solid #E6E8ED;
        }

        > .classify3 {
          flex: 4;
          border: 1px solid #E6E8ED;
        }
      }
    }
  }
</style>
