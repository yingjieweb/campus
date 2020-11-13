<template>
  <div id="app">
    <el-aside class="aside" width="220px" v-show="this.$store.state.showAsideNav">
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
      <Nav></Nav>
    </el-aside>
    <router-view/>
  </div>
</template>

<script>
  import Nav from '@/components/nav/Nav.vue'

  export default {
    name: 'App',
    components: {
      Nav
    },
    created(){
      if (localStorage.getItem('store')){
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem("store"))));
      }
      window.addEventListener('beforeunload', () => {
        localStorage.setItem('store', JSON.stringify(this.$store.state))
      })
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/helper.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
  }
  .aside {
    height: 100vh;
    background-color: #20335D;

    .logo {
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      > .intro {
        > .strong {
          color: #F3F6F8;
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

      > .english {
        color: #D8D7D1;
      }
    }
  }
</style>
