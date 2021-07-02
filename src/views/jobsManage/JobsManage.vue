<template>
  <Block title="岗位管理">
    <div slot="button" class="buttons">
      <el-button type="primary" size="small" plain icon="el-icon-circle-plus-outline" @click="addJob">新增</el-button>
      <el-button type="danger" size="small" plain icon="el-icon-circle-close" @click="batchDeleteClick">删除</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-download" @click="downloadTemplate">下载模板</el-button>
      <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :before-upload="beforeUpload"
          :on-success="uploadSuccess"
          :show-file-list="false">
        <el-button type="primary" size="small" plain icon="el-icon-upload">导入岗位信息</el-button>
      </el-upload>
    </div>
    <div slot="operation">
      <Search placeholder="请输入公司名称"></Search>
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
            <el-button type="text" size="small" @click="editJob(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteJob(scope.row)">删除</el-button>
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

      <JobsManageModal ref="jobManageModal" @loadTableData="loadTableData"></JobsManageModal>
    </div>
  </Block>
</template>

<script lang="js">
import Search from "@/components/search/Search"
import JobsManageModal from "@/views/jobsManage/JobsManageModal"
import jobData from "@/database/jobData";

export default {
  name: "JobsManage",
  components: {
    Search,
    JobsManageModal
  },
  data() {
    return {
      jobData: jobData,
      totalPageCount: '',
      currentPage: 1,
      selectedJobId: [],
      currentPageJobs: []
    }
    },
    methods: {
      getCurrentPageJobs() {
        this.currentPageJobs = this.jobData.slice((this.currentPage - 1) * 10, this.currentPage * 10)
        if (this.currentPageJobs.length === 0 && this.jobData.length !== 0) {
          this.currentPageJobs = this.jobData.slice((this.currentPage - 2) * 10, this.currentPage * 10)
        }
      },
      getTotalPageCount() {
        this.totalPageCount = this.jobData.length / 10 * 10
      },
      addJob() {
        this.$refs.jobManageModal.setDialogVisible(true, 'add', this.jobData.length)
      },
      editJob(jobData) {
        this.$refs.jobManageModal.setDialogVisible(true, 'edit', JSON.parse(JSON.stringify(jobData)))
      },
      deleteJob(jobInfo) {
        this.jobData.map((item, index) => {
          if (item.id === jobInfo.id)
            this.jobData.splice(index, 1)
        })
        this.getCurrentPageJobs()
        this.getTotalPageCount()
      },
      loadTableData(status, newJobInfo) {
        if (status === 'add') {
          this.jobData.push(newJobInfo)
        } else if (status === 'edit') {
          this.jobData.map((item, index) => {
            if (item.id === newJobInfo.id) {
              this.$set(this.jobData, index, newJobInfo)
            }
          })
        }
        this.getCurrentPageJobs()
        this.getTotalPageCount()
      },
      selsChange(sels) {
        this.selectedJobId = sels.map(item => {
          return item.id
        })
      },
      batchDeleteClick() {
        if (this.selectedJobId.length > 0) {
          this.$confirm('是否确认删除当前已选岗位信息？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.jobData = this.jobData.filter(item => {
              return !this.selectedJobId.includes(item.id)
            })
            this.getCurrentPageJobs()
            this.getTotalPageCount()
          }).catch(() => {
            this.$message.info('取消删除操作！')
          })
        } else {
          this.$message.info('请选择需要删除的岗位信息！')
        }
      },
      downloadTemplate() {
        let link = document.createElement("a")
        link.setAttribute("download", "岗位信息收集模板.csv")
        link.href = "job_info_template.csv"
        link.style.display = "none"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      },
      beforeUpload(file) {
        const isCSV = file.name.substring(file.name.lastIndexOf('.') + 1) === 'csv'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isCSV) this.$message.error('请按照模板上传 csv 格式文件!')
        if (!isLt2M) this.$message.error('上传文件大小不能超过 2MB!')
        if (isCSV && isLt2M) this.$message.success('文件上传成功!')

        return isCSV && isLt2M;
      },
      uploadSuccess(res, file) {
        this.$message.success('正在解析，请稍候...')
        let reader = new FileReader()
        reader.onload = (event) => {
          this.parseUploadData(event.target.result)
        };
        reader.readAsText(file.raw, 'GB2312');
      },
      parseUploadData(fileData) {
        let dataBody = fileData.split('\r\n').slice(1)

        let newJobInfo = []
        dataBody.map(item => {
          let itemArr = item.split(',')
          newJobInfo.push({
            id: this.jobData.length + 1,
            companyName: itemArr[0],
            companyCity: itemArr[1],
            companyAddress: itemArr[2],
            companyScale: itemArr[3],
            companyType: itemArr[4],
            companyWelfare: itemArr[5],
            recruitJob: itemArr[6],
            recruitCount: itemArr[7],
            requiredDegree: itemArr[8],
            requiredExp: itemArr[9],
            requiredMajor: itemArr[10],
            jobDutyDetails: itemArr[11],
            requiredSkillDesc: itemArr[12],
            salary: itemArr[13],
            publishTime: itemArr[14],
            label: itemArr[15],
            introduce: itemArr[16],
            companyAvatar: itemArr[17],
            companyPropaPic: itemArr[18],
            companyHomePage: itemArr[19],
            abstract: itemArr[20]
          })
        })
        this.jobData = this.jobData.concat(newJobInfo)

        this.$message.success('岗位信息导入成功！')
        this.getCurrentPageJobs()
        this.getTotalPageCount()
      },
      searchStudent(queryString) {
        if (queryString === '') {
          this.jobData = jobData.slice(1)
        } else {
          this.jobData = jobData.slice(1).filter(item => {
            return item.name.includes(queryString)
          })
        }
        this.getCurrentPageJobs()
        this.getTotalPageCount()
      },
      prevClick(currentPage) {
        this.currentPageJobs = jobData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      nextClick(currentPage) {
        this.currentPageJobs = jobData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      currentChange(currentPage) {
        this.currentPage = currentPage
        this.currentPageJobs = jobData.slice((currentPage - 1) * 10, currentPage * 10);
      }
    },
    created() {
      this.getCurrentPageJobs()
      this.getTotalPageCount()
    },
  }
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;

  ::v-deep .el-upload {
    margin-left: 10px;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
