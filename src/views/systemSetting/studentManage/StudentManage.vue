<template>
  <Block title="用户管理">
    <div slot="button">
      <el-button type="primary" size="small" plain icon="el-icon-circle-plus-outline" @click="addStudent">新增</el-button>
      <el-button type="danger" size="small" plain icon="el-icon-circle-close" @click="batchDeleteClick">删除</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-download">下载模板</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-upload">导入学生信息</el-button>
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
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="grade" label="年级"></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="studentId" label="学号"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="address" label="家庭地址" show-overflow-tooltip></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editStudent(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteStudent(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>

      <StudentManageModal ref="StudentManageModal" @loadListData="loadListData"></StudentManageModal>
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
        isShowDialog: false,
        selectedStudentId: [],
        tableData: studentData
        // tableData: [{
        //   name: '张磊',
        //   grade: '2014级',
        //   studentId: '2014416659',
        //   gender: '男',
        //   phone: '18860628958',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }]
      }
    },
    methods: {
      addStudent(){
        this.$refs.StudentManageModal.setDialogVisible(true, 'add')
      },
      editStudent(studentInfo) {
        this.$refs.StudentManageModal.setDialogVisible(true, 'edit', JSON.parse(JSON.stringify(studentInfo)))
      },
      deleteStudent(studentInfo) {
        this.tableData.map((item, index) => {
          if (item.studentId === studentInfo.studentId)
            this.tableData.splice(index, 1)
        })
      },
      loadListData(status, newUserInfo){
        if (status === 'add') {
          this.tableData.push(newUserInfo)
        } else if (status === 'edit') {
          this.tableData.map((item, index) => {
            if (item.studentId === newUserInfo.studentId) {
              this.$set(this.tableData, index, newUserInfo)
            }
          })
        }
      },
      selsChange(sels) {
        this.selectedStudentId = sels.map(item => {
          return item.studentId
        })
      },
      batchDeleteClick(){
        if (this.selectedStudentId.length > 0) {
          this.$confirm('是否确认删除当前已选用户信息？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.tableData = this.tableData.filter(item => {
              return !this.selectedStudentId.includes(item.studentId)
            })
          }).catch(() => {
            this.$message.info('取消删除操作！')
          })
        } else {
          this.$message.info('请选择需要删除的用户信息！')
        }
      },
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
