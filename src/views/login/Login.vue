<template>
  <div class="login">
    <div class="form">
      <div class="avatar">
        <img src="@/assets/images/login.png" alt="avatar">
      </div>
      <el-input style="margin: 10px auto"
                placeholder="学号「学生：12345」「管理员：admin」"
                prefix-icon="el-icon-user"
                v-model="studentNo"
                ref="studentNoInput"></el-input>
      <el-input style="margin: 14px auto"
                placeholder="密码「可以随便填」"
                prefix-icon="el-icon-lock"
                v-model="password"
                show-password>
      </el-input>

      <div class="verify">
        <el-input style="margin: 14px 14px 14px 0"
                  placeholder="验证码"
                  prefix-icon="el-icon-lock"
                  v-model="verifyInput"
                  @keydown.enter.native="onsubmit">
        </el-input>
        <div class="verify-code" @click="changeCode">{{ verifyCode }}</div>
      </div>

      <el-button class="submit" type="primary" size="mini" round @click="onsubmit">登录</el-button>
      <el-button class="submit" type="primary" size="mini" round @click="registerAccount">注册</el-button>
    </div>
    <div class="instructions">大学生综合能力评价及就业推荐系统</div>
    <!--<div class="instructions">基于学生能力和行为画像的就业推荐系统</div>-->
  </div>
</template>

<script lang="js">
  import studentData from "@/database/studentData"

  export default {
    name: "Login",
    data() {
      return {
        studentNo: '',
        password: '',
        verifyInput: '',
        verifyCode: Math.ceil(Math.random() * 9999)
      }
    },
    methods: {
      changeCode() {
        this.verifyCode = Math.ceil(Math.random() * 9999)
      },
      onsubmit() {
        let currentStudent = studentData.filter(item => {
          return item.studentNo === this.studentNo
        })

        if (currentStudent.length === 1) {
          // if (currentStudent[0].password === this.password) {
          if (this.password) {
            if (parseInt(this.verifyInput) === this.verifyCode) {
              this.$message({message: '登陆成功', type: 'success'})

              this.$store.commit('changeLoginStatus', true)
              this.$router.push('/campus-recruit')
              this.$store.commit('getUserInfo', currentStudent[0])
            } else {
              this.$message({message: '请输入正确的验证码！', type: 'error'})
            }
          } else {
            this.$message({message: '密码错误，请重新输入！', type: 'error'})
          }
        } else {
          this.$message({message: '当前用户不存在！', type: 'error'})
        }
      },
      registerAccount() {
        this.$message.warning('注册账号功能正在开发当中...')
      }
    },
    mounted() {
      this.$refs.studentNoInput.focus()
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

      .verify {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        .verify-code {
          height: 40px;
          padding: 0 10px;
          line-height: 40px;
          text-align: center;
          border: 1px solid #E6E8ED;
          border-radius: 4px;
          font-weight: bold;
          color: #606266;
          cursor: pointer;
          user-select: none;
          background-image: url(../../assets/images/verify_bgc.jpg);
        }
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
