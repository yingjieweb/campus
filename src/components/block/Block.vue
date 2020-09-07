<template>
  <el-card class="block">
    <div slot="header" class="header" v-if="title">
      <div class="title" style="padding: 0 0 10px 0;">{{title}}</div>
      <div class="operation" style="width: 100%; display:flex; justify-content: space-between; align-items: center;">
        <div><slot name="button"></slot></div>
        <div><slot name="operation"></slot></div>
      </div>
    </div>
    <slot name="content"></slot>
  </el-card>
</template>

<script>
  export default {
    name: "Block",
    props: {
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  >>> .el-card__header{
    padding: 5px 20px;

    .header {
      font-size: 16px;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      > .title {
        padding: 10px;
      }
      > .operation {
        border: 1px solid red;
        display: flex;
      }
    }
  }
</style>
