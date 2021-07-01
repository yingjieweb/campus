<template>
  <div class="header">
    <div class="hiddenNav" @click="toggleMenuCollapse">
      <i class="el-icon-s-fold" v-if="!menuCollapse"></i>
      <i class="el-icon-s-unfold" v-else></i>
    </div>
    <router-link to="/campus-recruit">
      <div class="logo">
        <div class="intro">
          <strong class="strong">大学生综合能力评价及就业推荐系统 </strong>
          <!--<strong class="strong">基于学生能力和行为画像的就业推荐系统 </strong>-->
          <strong class="version"> 1.0.0</strong>
        </div>
      </div>
    </router-link>
    <div class="userInfo">
      <el-avatar :size="25" :src="circleUrl"></el-avatar>
      <span class="username">{{username}}</span>
      <button class="button" @click="operationVisible = !operationVisible"><i class="el-icon-arrow-down"></i></button>
    </div>
    <div class="operation" v-if="operationVisible">
      <el-button @click="logout" size="small">退出账户</el-button>
      <el-button @click="downloadDoc" size="small" v-if="this.$store.state.isAdmin">下载文档</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        username: this.$store.state.currentUser.name,
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        operationVisible: false,
        menuCollapse: false
      }
    },
    methods: {
      toggleMenuCollapse() {
        this.menuCollapse = !this.menuCollapse
        this.$EventBus.$emit('toggleMenuCollapse', this.menuCollapse)
      },
      logout() {
        this.$router.push('/login');
        this.$store.commit('changeLoginStatus', false)
      },
      downloadDoc() {
        let link = document.createElement("a")
        link.setAttribute("download", "系统说明文档.docx")
        link.href = "sys_intro_doc.docx"
        link.style.display = "none"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
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
        cursor: pointer;

        i {font-size: 1.5em;}
    }

    .logo {
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .intro {
        .strong {
          display: inline-block;
          margin-right: 5px;
        }
        .version {
          display: inline-block;
          font-size: 14px;
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
      width: 105px;
      padding: 6px;
      position: absolute;
      top: 96%;
      right: 8px;
      border: 1px solid #E6E8ED;
      border-radius: 5px;
      background-color: white;

      ::v-deep .el-button {
        width: 100%;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        margin: 10px 0;
      }
    }
  }
</style>
