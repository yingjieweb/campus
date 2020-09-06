<template>
  <div class="login">
    <div class="form">
      <div class="avatar">
        <img src="@/assets/images/login.png" alt="avatar">
      </div>
      <el-input style="margin: 10px auto" placeholder="用户名" prefix-icon="el-icon-user" v-model="input1"></el-input>
      <el-input style="margin: 14px auto" placeholder="密码" prefix-icon="el-icon-lock" v-model="input2"></el-input>
      <el-button class="submit" type="primary" size="mini" round>登录</el-button>
    </div>
    <div class="instructions">大学生就业推荐系统</div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Login",
    data(){
      return {
        input1: '',
        input2: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    > .form {
      max-width: 475px;
      max-height: 240px;
      padding: 65px 60px 30px 60px;
      position: relative;
      border: 1px solid #E6E8ED;
      border-radius: 4px;

      > .avatar {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        border-radius: 50%;
        padding: 5px;
        box-shadow: 2px 2px 2px #888888;
      }

      > input {
        margin: 10px 0;
      }

      > .submit {
        padding: 4px 45px;
      }
    }

    > .instructions{
      margin-top: 60px;
      color: #E6E8ED;
    }
  }
</style>
