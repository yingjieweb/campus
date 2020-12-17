<template>
  <el-container style="height: 100vh; width: 100vw;">
    <el-header height="50px" style="padding: 0;">
      <Header></Header>
    </el-header>
    <el-main class="main">
      <RouterTags></RouterTags>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
  import Header from '@/components/header/Header.vue'
  import RouterTags from "@/components/tags/Tags"

  export default {
    name: "Layout",
    components: {
      Header,
      RouterTags
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    padding: 5px;
    background-color: #F2F2F2;
  }
</style>
