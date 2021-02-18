<template>
  <el-menu
          :default-active="$route.path"
          @select="handleSelect"
          background-color="#20335D"
          text-color="#fff"
          class="el-menu-vertical"
          style="border-right: none;"
          :collapse="isCollapse"
          unique-opened
          router>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-edit-outline"></i><span>考试系统</span></template>
      <el-menu-item-group>
        <el-menu-item index="1-1"><i class="el-icon-caret-right"></i>本科生考试</el-menu-item>
        <el-menu-item index="1-2"><i class="el-icon-caret-right"></i>研究生考试</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-aim"></i><span>数据中心</span></template>
      <el-menu-item-group>
        <el-menu-item index="/score-enquiry"><i class="el-icon-caret-right"></i>成绩查询</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-cpu"></i>
      <span slot="title">数据治理</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-setting"></i><span>系统设置</span></template>
      <el-menu-item-group>
        <el-menu-item index="/user-manage">
          <i class="el-icon-caret-right"></i>用户管理
        </el-menu-item>
        <el-menu-item index="4-2"><i class="el-icon-caret-right"></i>班级管理</el-menu-item>
        <el-menu-item index="4-3"><i class="el-icon-caret-right"></i>排课管理</el-menu-item>
        <el-menu-item index="4-4"><i class="el-icon-caret-right"></i>课程控制</el-menu-item>
        <el-menu-item index="4-5"><i class="el-icon-caret-right"></i>课程备份</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/personal-resume" v-if="this.$store.state.permission">
      <i class="el-icon-s-order"></i>
      <span slot="title">我的简历</span>
    </el-menu-item>
    <el-menu-item index="/position-search">
      <i class="el-icon-search"></i>
      <span slot="title">职位搜索</span>
    </el-menu-item>
    <el-menu-item index="/campus-recruit" v-if="this.$store.state.permission">
      <i class="el-icon-s-home"></i>
      <span slot="title">校园招聘</span>
    </el-menu-item>
    <el-menu-item index="/hot-company" v-if="this.$store.state.permission">
      <i class="el-icon-office-building"></i>
      <span slot="title">热门公司</span>
    </el-menu-item>
    <el-submenu index="9" v-if="this.$store.state.permission">
      <template slot="title"><i class="el-icon-stopwatch"></i><span>形成性评价</span></template>
      <el-menu-item-group>
        <el-menu-item index="/ability-degree"><i class="el-icon-caret-right"></i>个人能力达成度</el-menu-item>
        <el-menu-item index="/ability-analysis"><i class="el-icon-caret-right"></i>能力对比分析</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/employ-recommend" v-if="this.$store.state.permission">
      <i class="el-icon-s-marketing"></i>
      <span slot="title">就业岗位推荐</span>
    </el-menu-item>
    <el-menu-item index="/graduates-direction" v-if="this.$store.state.permission">
      <i class="el-icon-s-promotion"></i>
      <span slot="title">往届毕业生去向</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "Nav",
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    },
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
