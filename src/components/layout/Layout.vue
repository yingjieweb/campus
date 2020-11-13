<template>
  <el-container style="height: 100vh; width: 100vw;">
    <el-container>
      <el-header height="50px" style="padding: 0;">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Header from '@/components/header/Header.vue'

  export default {
    name: "Layout",
    components: {
      Header
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    padding: 5px;
    background-color: #F2F2F2;
  }
</style>
