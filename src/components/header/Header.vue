<template>
  <div class="header">
    <div class="userInfo">
      <button class="button"><i class="el-icon-arrow-down"></i></button>
      <span class="username">{{username}}</span>
      <el-avatar :size="25" :src="circleUrl"></el-avatar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        username: this.$store.state.username,
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 100%;
    width: 100%;
    border: 1px solid #20335D;
    border-left: none;

    .userInfo {
      height: 100%;
      margin-right: 15px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;

      > .username {
        margin: auto 5px;
      }
      > .button {
        border: none;
        outline: none;
        background-color: white;
      }
    }
  }
</style>
