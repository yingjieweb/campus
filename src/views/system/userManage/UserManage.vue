<template>
  <Layout>
    <Block title="用户管理">
      <h1>用户管理</h1>
    </Block>
    <el-card>
      <div class="top-bar" style="display:flex; justify-content: space-between;">
        <div class="buttons">
          <el-button type="primary" size="small" plain icon="el-icon-edit">新增</el-button>
          <el-button type="success" size="small" plain icon="el-icon-edit">删除</el-button>
          <el-button type="success" size="small" plain icon="el-icon-edit">下载模板</el-button>
          <el-button type="success" size="small" plain icon="el-icon-edit">导入用户</el-button>
        </div>
        <div class="search">
          <Search placeholder="登录名/姓名"></Search>
        </div>
      </div>
    </el-card>
    <Block>

      <!--<template>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
          <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="address"
                  label="地址">
          </el-table-column>
        </el-table>
      </template>-->

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
