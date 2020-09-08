<template>
  <div class="header">
    <div class="hiddenNav">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="userInfo">
      <el-avatar :size="25" :src="circleUrl"></el-avatar>
      <span class="username">{{username}}</span>
      <button class="button" @click="operationVisible = !operationVisible"><i class="el-icon-arrow-down"></i></button>
    </div>
    <div class="operation" v-if="operationVisible">
      <span class="logout" @click="logout">退出</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        username: this.$store.state.username,
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        operationVisible: false
      }
    },
    methods: {
      logout(){
        this.$router.push('/login');
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
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .hiddenNav {
        padding-left: 5px;

        i {
          font-size: 1.5em;
        }
    }

    > .userInfo {
      height: 100%;
      margin-right: 15px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      > .username {
        margin: auto 5px;
      }
      > .button {
        border: none;
        outline: none;
        background-color: white;
        cursor: pointer;
      }
    }

    > .operation {
      padding: 6px;
      width: 105px;
      position: absolute;
      top: 85%;
      right: 5px;
      border: 1px solid #E6E8ED;
      border-radius: 5px;
      background-color: white;

      > .logout {
        width: 100%;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        padding: 2px;
      }
    }
  }
</style>
