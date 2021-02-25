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
      <!--
      {
          id: 1,
          companyName: '扇贝',
          companyCity: '无锡',
          companyAddress: '无锡市新吴区菱湖大道200号E1栋6楼',
          companyScale: '150-500人',
          companyType: '国有企业',
          companyWelfare: '六险一金，周末双休，餐补，交通补贴',
          recruitJob: 'web前端开发工程师',
          recruitCount: 15,
          requiredDegree: '本科',
          requiredMajor: '计算机/软件/通信工程',
          jobDutyDetails: '1、负责公司产品前端页面的功能设计与实现，包括管理系统和H5页面；\n',
          requiredSkillDesc: '1、掌握项目开发流程，精通HTML、CSS布局，网页标准、HTML5/CSS3规范；\n',
          salary: '7k-13k·13薪',
          publishTime: '2021/02/25',
          label: ['前端开发', 'HTML5', '移动端'],
          introduce: '移动互联网/教育/B轮',
          companyAvatar: require('./companyAvatar/shanbei.png'),
          companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
          companyHomePage: 'https://www.cardinfolink.com/#/',
          abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势',
        },
      -->

      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import Search from "@/components/search/Search"
  import JobData from  "@/database/jobData"

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
    methods: {
      selsChange(sels) {
        this.selectedJobId = sels.map(item => {
          return item.id
        })
      }
    },
    created() {
      this.currentPageJobs = JobData.slice(0, 10);
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
