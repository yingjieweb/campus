<template>
  <Block title="学生管理">
    <div slot="button" class="buttons">
      <el-button type="primary" size="small" plain icon="el-icon-circle-plus-outline" @click="addStudent">新增</el-button>
      <el-button type="danger" size="small" plain icon="el-icon-circle-close" @click="batchDeleteClick">删除</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-download" @click="downloadTemplate">下载模板</el-button>
      <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :before-upload="beforeUpload"
          :on-success="uploadSuccess"
          :show-file-list="false">
        <el-button type="primary" size="small" plain icon="el-icon-upload">导入学生信息</el-button>
      </el-upload>
    </div>
    <div slot="operation">
      <Search placeholder="请输入学生姓名" @searchData="searchStudent"></Search>
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
import StudentManageModal from "@/views/studentManage/StudentManageModal"
import studentData from "@/database/studentData"

export default {
  name: "StudentManage",
  components: {
    Search,
    StudentManageModal
    },
    data() {
      return {
        studentData: studentData.slice(1),
        totalPageCount: '',
        currentPage: 1,
        currentPageStudents: [],
        selectedStudentId: []
      }
    },
    methods: {
      getCurrentPageStudents() {
        this.currentPageStudents = this.studentData.slice((this.currentPage - 1) * 10, this.currentPage * 10)
        if (this.currentPageStudents.length === 0 && this.studentData.length !== 0) {
          this.currentPageStudents = this.studentData.slice((this.currentPage - 2) * 10, this.currentPage * 10)
        }
      },
      getTotalPageCount() {
        this.totalPageCount = this.studentData.length / 10 * 10
      },
      addStudent(){
        this.$refs.StudentManageModal.setDialogVisible(true, 'add', this.studentData.length)
      },
      editStudent(studentInfo) {
        this.$refs.StudentManageModal.setDialogVisible(true, 'edit', JSON.parse(JSON.stringify(studentInfo)))
      },
      deleteStudent(studentInfo) {
        this.studentData.map((item, index) => {
          if (item.id === studentInfo.id)
            this.studentData.splice(index, 1)
        })
        this.getCurrentPageStudents()
        this.getTotalPageCount()
      },
      loadTableData(status, newUserInfo){
        if (status === 'add') {
          this.studentData.push(newUserInfo)
        } else if (status === 'edit') {
          this.studentData.map((item, index) => {
            if (item.id === newUserInfo.id) {
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
      downloadTemplate() {
        let link = document.createElement("a")
        link.setAttribute("download", "学生信息收集模板.csv")
        link.href = "stu_info_template.csv"
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

        let newStuInfo = []
        dataBody.map(item => {
          let itemArr = item.split(',')
          newStuInfo.push({
            id: this.studentData.length + 1,
            name: itemArr[0],
            gender: itemArr[1],
            grade: itemArr[2],
            studentNo: itemArr[3],
            password: itemArr[3],
            permission: 'student',
            major: itemArr[4],
            address: itemArr[5],
            signCompany: itemArr[6],
            signJob: itemArr[7],
            jobCity: itemArr[8],
            phone: itemArr[9],
            scores: {
              '软件工程专业概论': itemArr[10],
              '面向对象程序设计': itemArr[11],
              '程序设计基础': itemArr[12],
              '基础编程实训': itemArr[13],
              '离散数学': itemArr[14],
              '物理概论': itemArr[15],
              '高等数学①（一）': itemArr[16],
              '高等数学①（二）': itemArr[17],
              '线性代数': itemArr[18],
              '大学英语（1）': itemArr[19],
              '大学英语（2）': itemArr[20],
              '初级日语（1）': itemArr[21]
            }
          })
        })
        this.studentData = this.studentData.concat(newStuInfo)

        this.$message.success('学生信息导入成功！')
        this.getCurrentPageStudents()
        this.getTotalPageCount()
      },
      searchStudent(queryString) {
        if (queryString === '') {
          this.studentData = studentData.slice(1)
        } else {
          this.studentData = studentData.slice(1).filter(item => {
            return item.name.includes(queryString)
          })
        }
        this.getCurrentPageStudents()
        this.getTotalPageCount()
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
