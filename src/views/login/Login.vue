<template>
  <div class="login">
    <div class="form">
      <div class="avatar">
        <img src="@/assets/images/login.png" alt="avatar">
      </div>
      <el-input style="margin: 10px auto" placeholder="用户名" prefix-icon="el-icon-user" v-model="username"></el-input>
      <el-input style="margin: 14px auto" placeholder="密码" prefix-icon="el-icon-lock" v-model="password" show-password></el-input>
      <el-button class="submit" type="primary" size="mini" round @click="onsubmit">登录</el-button>
    </div>
    <div class="instructions">大学生综合评价就业推荐系统</div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    created() {
      document.addEventListener('keydown', this.keydown)
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown)
    },
    methods: {
      keydown(event) {
        if (event.code == 'Enter') {
          this.onsubmit();
        }
      },
      onsubmit() {
        if (this.username === 'admin' && this.password === 'admin@123') {
          this.$message({message: '登陆成功', type: 'success'});
          this.$router.push('/work-bench');
          this.$store.commit('getUserInfo', this.username);
          this.$store.commit('getUserPermission', 'admin');
        } else if (this.username === 'student' && this.password === 'student@123') {
          this.$message({message: '登陆成功', type: 'success'});
          this.$router.push('/work-bench');
          this.$store.commit('getUserInfo', this.username);
          this.$store.commit('getUserPermission', 'student');
        } else {
          this.$message({message: '用户名或密码错误！', type: 'error'});
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    background-image: url(../../assets/images/bg_login.png);

    > .form {
      max-width: 475px;
      max-height: 240px;
      padding: 65px 60px 30px 60px;
      position: relative;
      border: 1px solid #E6E8ED;
      border-radius: 4px;
      box-shadow: 0 0 1px #888888;
      background-color: white;

      > .avatar {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        border-radius: 50%;
        padding: 5px;
        box-shadow: 0 1px 4px #888888;
      }

      > input {
        margin: 10px 0;
      }

      > .submit {
        padding: 5px 45px;
        background-color: #1296DB;
      }
    }

    > .instructions {
      font-size: 24px;
      margin-top: 60px;
      color: #1296DB;
    }
  }
</style>
