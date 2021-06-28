<template>
  <el-menu
          :default-active="$route.path"
          background-color="#20335D"
          text-color="#fff"
          class="el-menu-vertical"
          style="border-right: none;"
          :collapse="isCollapse"
          unique-opened
          router>
    <el-menu-item index="/personal-data" v-if="!this.$store.state.isAdmin">
      <i class="el-icon-s-custom"></i>
      <span slot="title">个人数据</span>
    </el-menu-item>
    <el-menu-item index="/student-manage" v-if="this.$store.state.isAdmin">
      <i class="el-icon-school"></i>
      <span slot="title">学生管理</span>
    </el-menu-item>
    <el-menu-item index="/jobs-manage" v-if="this.$store.state.isAdmin">
      <i class="el-icon-suitcase"></i>
      <span slot="title">岗位管理</span>
    </el-menu-item>
    <el-menu-item index="/personal-resume" v-if="!this.$store.state.isAdmin">
      <i class="el-icon-s-order"></i>
      <span slot="title">我的简历</span>
    </el-menu-item>
    <el-menu-item index="/position-search">
      <i class="el-icon-search"></i>
      <span slot="title">岗位搜索</span>
    </el-menu-item>
    <el-menu-item index="/campus-recruit">
      <i class="el-icon-s-home"></i>
      <span slot="title">校园招聘</span>
    </el-menu-item>
    <el-menu-item index="/hot-company">
      <i class="el-icon-office-building"></i>
      <span slot="title">热门公司</span>
    </el-menu-item>
    <el-submenu index="8">
      <template slot="title"><i class="el-icon-stopwatch"></i><span>形成性评价</span></template>
      <el-menu-item-group>
        <el-menu-item index="/ability-degree"><i class="el-icon-caret-right"></i>个人能力达成度</el-menu-item>
        <el-menu-item index="/ability-analysis"><i class="el-icon-caret-right"></i>能力对比分析</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/employ-recommend" v-if="!this.$store.state.isAdmin">
      <i class="el-icon-s-marketing"></i>
      <span slot="title">就业岗位推荐</span>
    </el-menu-item>
    <el-menu-item index="/graduates-direction">
      <i class="el-icon-s-promotion"></i>
      <span slot="title">往届毕业生去向</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        isCollapse: false
      }
    },
    created() {
      this.$EventBus.$on('toggleMenuCollapse', (status) => {
        this.isCollapse = status
      })
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 210px;
    min-height: 400px;
  }
</style>
