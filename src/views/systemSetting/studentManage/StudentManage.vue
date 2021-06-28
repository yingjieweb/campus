<template>
  <Block title="用户管理">
    <div slot="button">
      <el-button type="primary" size="small" plain icon="el-icon-circle-plus-outline" @click="addStudent">新增</el-button>
      <el-button type="danger" size="small" plain icon="el-icon-circle-close" @click="batchDeleteClick">删除</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-download" @click="downloadTemplate">下载模板</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-upload">导入学生信息</el-button>
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
        <el-table-column prop="address" label="家庭地址" show-overflow-tooltip></el-table-column>
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
        currentPageStudents: []
        // currentPageStudents: [{
        //   id: 1,
        //   name: '董梦嫣',
        //   grade: '2014级',
        //   gender: '女',
        //   studentNo: '1871123',
        //   password: '1871123',
        //   permission: 'admin',
        //   phone: '18604920086',
        //   address: '无锡新区震泽路18号软件园金牛座A栋3层',
        //   signCompany: '北京字节跳动',
        //   jobCity: '北京',
        //   scores: {
        //     '软件工程专业概论': '优',
        //     '面向对象程序设计': '94',
        //     '程序设计基础': '94',
        //     '基础编程实训': '98',
        //     '离散数学': '99',
        //     '物理概论': '98',
        //     '高等数学①（一）': '90',
        //     '高等数学①（二）': '99',
        //     '线性代数': '88',
        //     '大学英语（1）': '81',
        //     '大学英语（2）': '96',
        //     '初级日语（1）': '99'
        //   }
        // }]
      }
    },
    computed: {
      totalPageCount() {
        return Array.from(studentData).length + 1658 / 10 * 10;
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
        this.currentPageStudents.map((item, index) => {
          if (item.studentNo === studentInfo.studentNo)
            this.currentPageStudents.splice(index, 1)
        })
      },
      downloadTemplate() {
        // TODO 下载模板
        // <a href="downloadFileName" target="_blank" download="downloadFileName">下载文件</a>
        // <a :href="[srcValue]" target="_blank" :download="[srcValue]">下载文件</a>
      },
      loadListData(status, newUserInfo){
        if (status === 'add') {
          this.currentPageStudents.push(newUserInfo)
        } else if (status === 'edit') {
          this.currentPageStudents.map((item, index) => {
            if (item.studentNo === newUserInfo.studentNo) {
              this.$set(this.currentPageStudents, index, newUserInfo)
            }
          })
        }
      },
      selsChange(sels) {
        this.selectedStudentId = sels.map(item => {
          return item.id
        })
      },
      batchDeleteClick(){
        if (this.selectedStudentId.length > 0) {
          this.$confirm('是否确认删除当前已选用户信息？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.currentPageStudents = this.currentPageStudents.filter(item => {
              return !this.selectedStudentId.includes(item.id)
            })
          }).catch(() => {
            this.$message.info('取消删除操作！')
          })
        } else {
          this.$message.info('请选择需要删除的用户信息！')
        }
      },
      handleChange(value) {
        console.log(value);
      },
      prevClick(currentPage) {
        this.currentPageStudents = studentData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      nextClick(currentPage) {
        this.currentPageStudents = studentData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      currentChange(currentPage) {
        this.currentPageStudents = studentData.slice((currentPage - 1) * 10, currentPage * 10);
      }
    },
    created() {
      this.currentPageStudents = studentData.slice(0, 10);
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
