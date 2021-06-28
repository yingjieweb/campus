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
              :data="currentPageJobs"
              tooltip-effect="dark"
              border
              @selection-change="selsChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="companyName" label="公司名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="companyCity" label="公司城市"></el-table-column>
        <el-table-column prop="companyAddress" label="公司地址" show-overflow-tooltip></el-table-column>
        <el-table-column prop="companyScale" label="公司规模"></el-table-column>
        <el-table-column prop="companyType" label="公司性质"></el-table-column>
        <el-table-column prop="recruitJob" label="招聘岗位" show-overflow-tooltip></el-table-column>
        <el-table-column prop="recruitCount" label="招聘数量"></el-table-column>
        <el-table-column prop="requiredDegree" label="要求学历"></el-table-column>
        <el-table-column prop="requiredMajor" label="要求专业" show-overflow-tooltip></el-table-column>
        <el-table-column prop="publishTime" label="发布时间"></el-table-column>
        <el-table-column prop="salary" label="薪资" show-overflow-tooltip></el-table-column>
        <el-table-column prop="label" label="岗位标签" show-overflow-tooltip></el-table-column>
        <el-table-column prop="introduce" label="关键字" show-overflow-tooltip></el-table-column>
        <el-table-column prop="abstract" label="公司简介" show-overflow-tooltip></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination
                background
                layout="prev, pager, next"
                @prev-click="prevClick"
                @next-click="nextClick"
                @current-change="currentChange"
                :total="totalPageCount">
        </el-pagination>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import Search from "@/components/search/Search"
  import jobData from "@/database/jobData"

  export default {
    name: "JobsManage",
    components: {
      Search
    },
    data() {
      return {
        isShowDialog: false,
        selectedJobId: [],
        currentPageJobs: '',
      }
    },
    computed: {
      totalPageCount() {
        return jobData.length + 13851 / 10 * 10;
      }
    },
    methods: {
      selsChange(sels) {
        this.selectedJobId = sels.map(item => {
          return item.id
        })
      },
      handleChange(value) {
        console.log(value);
      },
      prevClick(currentPage) {
        this.currentPageJobs = jobData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      nextClick(currentPage) {
        this.currentPageJobs = jobData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      currentChange(currentPage) {
        this.currentPageJobs = jobData.slice((currentPage - 1) * 10, currentPage * 10);
      }
    },
    created() {
      this.currentPageJobs = jobData.slice(0, 10);
    },
  }
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
</style>
