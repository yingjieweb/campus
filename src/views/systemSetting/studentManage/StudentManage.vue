<template>
  <Block title="用户管理">
    <div slot="button" class="buttons">
      <el-button type="primary" size="small" plain icon="el-icon-circle-plus-outline" @click="addStudent">新增</el-button>
      <el-button type="danger" size="small" plain icon="el-icon-circle-close" @click="batchDeleteClick">删除</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-download" @click="downloadTemplate">下载模板</el-button>
      <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false">
        <el-button type="primary" size="small" plain icon="el-icon-upload">点击上传</el-button>
      </el-upload>
    </div>
    <div slot="operation">
      <Search placeholder="请输入搜索信息"></Search>
    </div>
    <div slot="content">
      <el-table
              ref="multipleTable"
              :data="currentPageStudents"
              tooltip-effect="dark"
              border
              @selection-change="selsChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="grade" label="年级"></el-table-column>
        <el-table-column prop="studentNo" label="学号"></el-table-column>
        <el-table-column prop="major" label="专业"></el-table-column>
        <el-table-column prop="address" label="籍贯" show-overflow-tooltip></el-table-column>
        <el-table-column prop="signCompany" label="签约公司" show-overflow-tooltip></el-table-column>
        <el-table-column prop="signJob" label="签约岗位" show-overflow-tooltip></el-table-column>
        <el-table-column prop="jobCity" label="就业城市" show-overflow-tooltip></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editStudent(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteStudent(scope.row)">删除</el-button>
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

      <StudentManageModal ref="StudentManageModal" @loadTableData="loadTableData"></StudentManageModal>
    </div>
  </Block>
</template>

<script>
  import Search from "@/components/search/Search"
  import StudentManageModal from "@/views/systemSetting/studentManage/StudentManageModal"
  import studentData from "@/database/studentData"

  export default {
    name: "StudentManage",
    components: {
      Search,
      StudentManageModal
    },
    data() {
      return {
        studentData: studentData,
        totalPageCount: '',
        currentPage: 1,
        currentPageStudents: [],
        selectedStudentId: []
      }
    },
    methods: {
      getCurrentPageStudents() {
        this.currentPageStudents = this.studentData.slice((this.currentPage - 1) * 10, this.currentPage * 10)
      },
      getTotalPageCount() {
        this.totalPageCount = this.studentData.length / 10 * 10
      },
      addStudent(){
        this.$refs.StudentManageModal.setDialogVisible(true, 'add')
      },
      editStudent(studentInfo) {
        this.$refs.StudentManageModal.setDialogVisible(true, 'edit', JSON.parse(JSON.stringify(studentInfo)))
      },
      deleteStudent(studentInfo) {
        this.studentData.map((item, index) => {
          if (item.studentNo === studentInfo.studentNo)
            this.studentData.splice(index, 1)
        })
        this.getCurrentPageStudents()
        this.getTotalPageCount()
      },
      downloadTemplate() {
        let link = document.createElement("a")
        link.setAttribute("download", "学生信息收集模板.xlsx")
        link.href = "template1.xlsx"
        link.style.display = "none"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      },
      loadTableData(status, newUserInfo){
        if (status === 'add') {
          this.studentData.push(newUserInfo)
        } else if (status === 'edit') {
          this.studentData.map((item, index) => {
            if (item.studentNo === newUserInfo.studentNo) {
              this.$set(this.studentData, index, newUserInfo)
            }
          })
        }
        this.getCurrentPageStudents()
        this.getTotalPageCount()
      },
      selsChange(sels) {
        this.selectedStudentId = sels.map(item => item.id)
      },
      batchDeleteClick(){
        if (this.selectedStudentId.length > 0) {
          this.$confirm('是否确认删除当前已选用户信息？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.studentData = this.studentData.filter(item => {
              return !this.selectedStudentId.includes(item.id)
            })
            this.getCurrentPageStudents()
            this.getTotalPageCount()
          }).catch(() => {
            this.$message.info('取消删除操作！')
          })
        } else {
          this.$message.info('请选择需要删除的用户信息！')
        }
      },
      prevClick(currentPage) {
        this.currentPageStudents = this.studentData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      nextClick(currentPage) {
        this.currentPageStudents = this.studentData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      currentChange(currentPage) {
        this.currentPage = currentPage
        this.currentPageStudents = this.studentData.slice((currentPage - 1) * 10, currentPage * 10);
      }
    },
    created() {
      this.getCurrentPageStudents()
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
