<template>
  <div class="header">
    <div class="hiddenNav" @click="toggleMenuCollapse">
      <i class="el-icon-s-fold" v-if="!menuCollapse"></i>
      <i class="el-icon-s-unfold" v-else></i>
    </div>
    <router-link to="/work-bench">
      <div class="logo">
        <p class="intro">
          <strong class="strong">大学生就业推荐系统 </strong>
          <span class="version">1.0.0</span>
        </p>
        <p class="english">
          <span>Employment recommendation</span>
        </p>
      </div>
    </router-link>
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
        username: this.$store.state.currentUser.username,
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        operationVisible: false,
        menuCollapse: true
      }
    },
    methods: {
      toggleMenuCollapse() {
        this.menuCollapse = !this.menuCollapse
        this.$emit('toggleMenuCollapse', this.menuCollapse)
      },
      logout(){
        this.$router.push('/login');
        this.$store.commit('changeLoginStatus', false)
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
    align-items: center;

    > .hiddenNav {
        padding: 0 5px;

        i {
          font-size: 1.5em;
        }
    }

    .logo {
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      > .intro {
        > .strong {
          vertical-align: top;
        }

        > .version {
          display: inline-block;
          margin-top: 1px;
          font-size: 12px;
          padding: 2px;
          border: 1px solid #F9D149;
          border-radius: 10px;
          color: #F9D149;
        }
      }
    }

    > .userInfo {
      height: 100%;
      margin-left: auto;
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
