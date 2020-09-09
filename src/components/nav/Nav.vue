<template>
  <div class="nav">
    <el-menu :default-active="$route.path" @select="handleSelect" background-color="#20335D" text-color="#fff" style="border-right: none;">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-edit-outline"></i><span>考试系统</span></template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><i class="el-icon-caret-right"></i>本科生考试</el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-caret-right"></i>研究生考试</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">试题审核</span>
      </el-menu-item>
      <router-link to="/course-construct" style="font-size: inherit;">
        <el-menu-item index="3">
            <i class="el-icon-folder"></i>
            <span slot="title">课程建设</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-aim"></i><span>学校标准</span></template>
        <el-menu-item-group>
          <el-menu-item index="4-1"><i class="el-icon-caret-right"></i>学校标准1</el-menu-item>
          <el-menu-item index="4-2"><i class="el-icon-caret-right"></i>学校标准2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-s-data"></i>
        <span slot="title">数据中心</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-cpu"></i>
        <span slot="title">数据治理</span>
      </el-menu-item>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-setting"></i><span>系统设置</span></template>
        <el-menu-item-group>
          <router-link to="/user-manage" style="font-size: inherit;">
            <el-menu-item index="/user-manage">
                <i class="el-icon-caret-right"></i>用户管理
            </el-menu-item>
          </router-link>
          <el-menu-item index="7-2"><i class="el-icon-caret-right"></i>班级管理</el-menu-item>
          <el-menu-item index="7-3"><i class="el-icon-caret-right"></i>排课管理</el-menu-item>
          <el-menu-item index="7-4"><i class="el-icon-caret-right"></i>课程控制</el-menu-item>
          <el-menu-item index="7-5"><i class="el-icon-caret-right"></i>课程备份</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .nav {
    text-align: left;
    width: 100%;
    margin-right: -1px;
  }
</style>
