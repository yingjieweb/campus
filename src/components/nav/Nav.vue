<template>
  <div class="nav">
    <el-menu background-color="#20335D" text-color="#fff" style="border-right: none;border-bottom: 1px solid red;">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>考试系统</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">试题审核</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-folder"></i>
        <span slot="title">课程建设</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-aim"></i>
        <span slot="title">学校标准</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-s-data"></i>
        <span slot="title">数据中心</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-cpu"></i>
        <span slot="title">数据处理</span>
      </el-menu-item>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">用户管理</el-menu-item>
          <el-menu-item index="7-2">班级管理</el-menu-item>
          <el-menu-item index="7-3">排课管理</el-menu-item>
          <el-menu-item index="7-4">课程控制</el-menu-item>
          <el-menu-item index="7-5">课程备份</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped>
  .nav {
    text-align: left;
    width: 100%;
    margin-right: -1px;
  }
</style>
