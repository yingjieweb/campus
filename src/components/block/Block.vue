<template>
  <el-card class="block">
    <slot></slot>
  </el-card>
</template>

<script>
  export default {
    name: "Block"
  }
</script>

<style lang="scss" scoped>
  .block {
    display: flex;
    margin: 5px 0;
  }
</style>
