<template>
  <Block title="校园招聘">
    <div slot="content" class="container">
      <input type="text" placeholder="搜索职位、公司、地点">
      <button>搜索</button>
    </div>
  </Block>
</template>

<script lang="js">
  export default {
    name: "CampusRecruit"
  }
</script>

<style lang="scss" scoped>
  .container {
    border: 1px solid red;
    display: flex;
    justify-content: center;
  }
</style>
