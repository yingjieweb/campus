<template>
  <el-container style="height: 100vh; width: 100vw;">
    <el-aside class="aside" width="220px">
      <div class="logo" style="height: 50px;">
        <p class="intro">
          <strong class="strong">大学生就业推荐系统 </strong>
          <span class="version">1.0.0</span>
        </p>
        <p class="english">
          <span>Employment recommendation</span>
        </p>
      </div>
      <Nav></Nav>
    </el-aside>
    <el-container>
      <el-header height="50px" style="background-color:#2c3e50;">Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Nav from '@/components/nav/Nav.vue'

  export default {
    name: "Layout",
    components: {
      Nav
    }
  }
</script>

<style lang="scss" scoped>
  .aside {
    background-color:#20335D;

    > .logo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      > .intro {
        > .strong {
          color: #F3F6F8;
          vertical-align: top;
        }
        > .version {
          display: inline-block;
          margin-top: 1px;
          font-size: 12px;
          padding: 2px;
          border: 1px solid #F9D149;
          border-radius: 10px;
          color: #F9D149;
        }
      }

      > .english {
        color: #D8D7D1;
      }
    }
  }
</style>
