<template>
  <el-container style="height: 100vh; width: 100vw;">
    <el-container>
      <el-header height="50px" style="padding: 0;" v-if="$route.name !== 'Login'">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <div class="sidebar"  v-if="$route.name !== 'Login'">
          <Nav></Nav>
        </div>
        <div class="content">
          <RouterTags v-if="$route.name !== 'Login'"></RouterTags>
          <router-view/>
        </div>
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
  .main {
    padding: 0;
    display: flex;
    background-color: #F2F2F2;

    .sidebar {
      background-color: #20335D;
    }

    .content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
  }
</style>
