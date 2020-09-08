<template>
  <Layout>
    <Block title="用户管理">
      <div slot="button">
        <el-button type="primary" size="small" plain icon="el-icon-circle-plus-outline" @click="addUser">新增</el-button>
        <el-button type="danger" size="small" plain icon="el-icon-circle-close" @click="batchDeleteClick">删除</el-button>
        <el-button type="primary" size="small" plain icon="el-icon-download">下载模板</el-button>
        <el-button type="primary" size="small" plain icon="el-icon-upload">导入用户</el-button>
      </div>
      <div slot="operation">
        <Search placeholder="登录名/姓名"></Search>
      </div>
      <div slot="content">
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                border
                @selection-change="selsChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="username" label="登录名"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="gender" label="性别"></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        </el-table>
        <UserManageModal ref="UserManageModal" @addUserInfo="addUserInfo"></UserManageModal>
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
        selectedUser: [],
        tableData: [{
          username: '一只小皮皮',
          name: '王小虎',
          gender: '男',
          phone: '18860628958',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      addUser(){
        this.$refs.UserManageModal.setDialogVisible(true);
      },
      addUserInfo(newUserInfo){
        this.tableData.push(newUserInfo);
      },
      selsChange(sels) {
        this.selectedUser = sels.map(item => {
          return item.id
        })
      },
      batchDeleteClick(){
        if (this.selectedUser.length > 0) {
          this.$confirm('是否确认删除当前已选用户信息？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            console.log(this.selectedUser)
          }).catch(() => {
            this.$message({message: '取消删除操作！', type: 'info'})
          })
        } else {
          this.$message({
            type: "info",
            message: "请选择需要删除的用户信息！"
          });
        }
      },
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
