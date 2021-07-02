<template>
  <el-dialog
      title="新增学生信息"
      :visible.sync="dialogVisible"
      width="38%"
      :before-close="handleClose">
    <el-form ref="userModalForm" :model="form" :rules="rules" :inline="true">
      <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender" :label-width="formLabelWidth">
        <el-input v-model="form.gender" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年级" prop="grade" :label-width="formLabelWidth">
        <el-input v-model="form.grade" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学号" prop="studentNo" :label-width="formLabelWidth">
        <el-input v-model="form.studentNo" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="major" :label-width="formLabelWidth">
        <el-input v-model="form.major" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="籍贯" prop="address" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="签约公司" prop="signCompany" :label-width="formLabelWidth">
        <el-input v-model="form.signCompany" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="签约岗位" prop="signJob" :label-width="formLabelWidth">
        <el-input v-model="form.signJob" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="就业城市" prop="jobCity" :label-width="formLabelWidth">
        <el-input v-model="form.jobCity" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="cancelSubmit">取 消</el-button>
      <el-button type="primary" size="small" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "StudentManageModal",
    data() {
      return {
        dialogVisible: false,
        formLabelWidth: '90px',
        addOrEdit: '',
        form: {
          id: 0,
          name: '',
          gender: '',
          grade: '',
          studentNo: '',
          major: '',
          address: '',
          signCompany: '',
          signJob: '',
          jobCity: '',
          phone: ''
        },
        rules: {
          name: [{required: true, message: '请输入学生姓名', trigger: 'blur'}],
          gender: [{required: true, message: '请输入学生性别', trigger: 'blur'}],
          grade: [{required: true, message: '请输入学生年级', trigger: 'blur'}],
          studentNo: [{required: true, message: '请输入学生学号', trigger: 'blur'}],
          major: [{required: true, message: '请输入专业名称', trigger: 'blur'}],
          address: [{required: true, message: '请输入学生籍贯', trigger: 'blur'}],
          signCompany: [{required: true, message: '尚未签约就业的学生填写：无', trigger: 'blur'}],
          signJob: [{required: true, message: '尚未签约就业的学生填写：无', trigger: 'blur'}],
          jobCity: [{required: true, message: '尚未签约就业的学生填写：无', trigger: 'blur'}],
          phone: [{required: true, message: '请输入学生电话', trigger: 'blur'}]
        }
      }
    },
    methods: {
      setDialogVisible(state, status, idOrStuInfo) {
        this.dialogVisible = state
        this.addOrEdit = status
        if (status === 'add') {
          this.form.id = idOrStuInfo + 1
        } else if (status === 'edit') {
          // form 挂载前赋值，后面调用 resetFields() 方法将不生效
          this.$nextTick(() => {
            this.form = idOrStuInfo
          })
        }
      },
      handleClose(done) {
        // this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {})
        if (this.addOrEdit === 'edit') this.$refs.userModalForm.resetFields()
        done()
      },
      cancelSubmit() {
        this.dialogVisible = false
        if (this.addOrEdit === 'edit') this.$refs.userModalForm.resetFields()
      },
      onSubmit() {
        this.$refs.userModalForm.validate((valid) => {
          if (valid) {
            this.$emit('loadTableData', this.addOrEdit, JSON.parse(JSON.stringify(this.form)))
            if (this.addOrEdit === 'edit') this.$refs.userModalForm.resetFields()

            this.dialogVisible = false
            this.$message.success('操作成功~')
            this.$refs.userModalForm.resetFields()
          } else {
            this.$message.error('请按提示输入完整的学生信息~')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
 ::v-deep .el-dialog {

   .el-dialog__header {
     border-bottom: 1px solid #DCDFE6;
   }

   .el-dialog__body {
     padding: 20px 40px 10px;
   }

   .el-dialog__footer {
     border-top: 1px solid #DCDFE6;
   }
 }
</style>
