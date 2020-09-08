<template>
  <Layout>
    <Block title="用户管理">
      <div slot="button">
        <el-button type="primary" size="small" plain icon="el-icon-circle-plus-outline" @click="addUser">新增</el-button>
        <el-button type="danger" size="small" plain icon="el-icon-circle-close">删除</el-button>
        <el-button type="primary" size="small" plain icon="el-icon-download">下载模板</el-button>
        <el-button type="primary" size="small" plain icon="el-icon-upload">导入用户</el-button>
      </div>
      <div slot="operation">
        <Search placeholder="登录名/姓名"></Search>
      </div>
      <div slot="content">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <UserManageModal ref="UserManageModal"></UserManageModal>
      </div>
    </Block>
  </Layout>
</template>

<script>
  import Search from "@/components/search/Search"
  import UserManageModal from "@/views/system/userManage/UserManageModal"

  export default {
    name: "UserManage",
    components: {
      Search,
      UserManageModal
    },
    data() {
      return {
        isShowDialog: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      addUser(){
        this.$refs.UserManageModal.setDialogVisible(true);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-bar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
