<template>
  <Block title="岗位管理">
    <div slot="button">
      <el-button type="primary" size="small" plain icon="el-icon-circle-plus-outline">新增</el-button>
      <el-button type="danger" size="small" plain icon="el-icon-circle-close">删除</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-download">下载模板</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-upload">导入岗位信息</el-button>
    </div>
    <div slot="operation">
      <Search placeholder="请输入搜索信息"></Search>
    </div>
    <div slot="content">
      <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              border
              @selection-change="selsChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="公司"></el-table-column>
        <el-table-column prop="grade" label="岗位名称"></el-table-column>
        <el-table-column prop="gender" label="薪资"></el-table-column>
        <el-table-column prop="studentId" label="标签"></el-table-column>
        <el-table-column prop="phone" label="介绍"></el-table-column>
        <el-table-column prop="address" label="简介" show-overflow-tooltip></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import Search from "@/components/search/Search"

  export default {
    name: "JobsManage",
    components: {
      Search
    },
    data() {
      return {
        isShowDialog: false,
        selectedStudentId: [],
        tableData: [{
          name: '张磊',
          grade: '2014级',
          studentId: '2014416659',
          gender: '男',
          phone: '18860628958',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      selsChange(sels) {
        this.selectedStudentId = sels.map(item => {
          return item.studentId
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
</style>
