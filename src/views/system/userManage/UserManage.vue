<template>
  <Layout>
    <Block title="用户管理">
      <div slot="button">
        <el-button type="primary" size="small" plain icon="el-icon-circle-plus-outline">新增</el-button>
        <el-button type="danger" size="small" plain icon="el-icon-circle-close">删除</el-button>
        <el-button type="primary" size="small" plain icon="el-icon-download">下载模板</el-button>
        <el-button type="primary" size="small" plain icon="el-icon-upload">导入用户</el-button>
      </div>
      <div slot="operation">
        <Search placeholder="登录名/姓名"></Search>
      </div>
    </Block>
  </Layout>
</template>

<script>
  import Search from "@/components/search/Search"

  export default {
    name: "UserManage",
    components: {
      Search
    },
    data() {
      return {
        /*tableData: [{
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
        }]*/
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
