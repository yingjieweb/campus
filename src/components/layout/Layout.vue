<template>
  <el-container style="height: 100vh; width: 100vw;">
    <el-aside class="aside" width="220px" v-if="$route.name !== 'Login'">
      <router-link to="/work-bench">
        <div class="logo">
          <p class="intro">
            <strong class="strong">大学生就业推荐系统 </strong>
            <span class="version">1.0.0</span>
          </p>
          <p class="english">
            <span>Employment recommendation</span>
          </p>
        </div>
      </router-link>
      <Nav></Nav>
    </el-aside>
    <el-container>
      <el-header height="50px" style="padding: 0;" v-if="$route.name !== 'Login'">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <RouterTags v-if="$route.name !== 'Login'"></RouterTags>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Header from '@/components/header/Header.vue'
  import RouterTags from "@/components/tags/Tags"
  import Nav from '@/components/nav/Nav.vue'

  export default {
    name: "Layout",
    components: {
      Header,
      RouterTags,
      Nav
    }
  }
</script>

<style lang="scss" scoped>
  .aside {
    height: 100vh;
    background-color: #20335D;

    .logo {
      height: 50px;
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

  .main {
    padding: 0;
    background-color: #F2F2F2;
  }
</style>
