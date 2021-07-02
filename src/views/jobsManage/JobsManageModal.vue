<template>
  <el-dialog
      title="新增岗位信息"
      :visible.sync="dialogVisible"
      width="56%"
      :before-close="handleClose">
    <el-form ref="jobModalForm" :model="form" :rules="rules" :inline="true">
      <el-form-item label="公司名称" prop="companyName" :label-width="formLabelWidth">
        <el-input v-model="form.companyName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司城市" prop="companyCity" :label-width="formLabelWidth">
        <el-input v-model="form.companyCity" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" prop="companyAddress" :label-width="formLabelWidth">
        <el-input v-model="form.companyAddress" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司规模" prop="companyScale" :label-width="formLabelWidth">
        <el-input v-model="form.companyScale" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司性质" prop="companyType" :label-width="formLabelWidth">
        <el-input v-model="form.companyType" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司福利" prop="companyWelfare" :label-width="formLabelWidth">
        <el-input v-model="form.companyWelfare" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="招聘岗位" prop="recruitJob" :label-width="formLabelWidth">
        <el-input v-model="form.recruitJob" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="招聘数量" prop="recruitCount" :label-width="formLabelWidth">
        <el-input v-model="form.recruitCount" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="要求学历" prop="requiredDegree" :label-width="formLabelWidth">
        <el-input v-model="form.requiredDegree" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="要求专业" prop="requiredMajor" :label-width="formLabelWidth">
        <el-input v-model="form.requiredMajor" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="要求经验" prop="requiredExp" :label-width="formLabelWidth">
        <el-input v-model="form.requiredExp" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="岗位薪资" prop="salary" :label-width="formLabelWidth">
        <el-input v-model="form.salary" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" prop="publishTime" :label-width="formLabelWidth">
        <el-input v-model="form.publishTime" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="岗位标签" prop="label" :label-width="formLabelWidth">
        <el-input v-model="form.label" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="关键字" prop="introduce" :label-width="formLabelWidth">
        <el-input v-model="form.introduce" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司 Logo" prop="companyAvatar" :label-width="formLabelWidth">
        <el-input v-model="form.companyAvatar" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司宣传图片" prop="companyPropaPic" :label-width="formLabelWidth">
        <el-input v-model="form.companyPropaPic" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司主页" prop="companyHomePage" :label-width="formLabelWidth">
        <el-input v-model="form.companyHomePage" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="工作职责" prop="jobDutyDetails" :label-width="formLabelWidth">
        <el-input v-model="form.jobDutyDetails" type="textarea" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="任职要求" prop="requiredSkillDesc" :label-width="formLabelWidth">
        <el-input v-model="form.requiredSkillDesc" type="textarea" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司简介" prop="abstract" :label-width="formLabelWidth">
        <el-input v-model="form.abstract" type="textarea" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="cancelSubmit">取 消</el-button>
      <el-button type="primary" size="small" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script lang="js">
export default {
  name: "JobsManageModal",
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: '108px',
      addOrEdit: '',
      form: {
        id: 0,
        companyName: '',
        companyCity: '',
        companyAddress: '',
        companyScale: '',
        companyType: '',
        companyWelfare: '',
        recruitJob: '',
        recruitCount: '',
        requiredDegree: '',
        requiredExp: '',
        requiredMajor: '',
        jobDutyDetails: '',
        requiredSkillDesc: '',
        salary: '',
        publishTime: '',
        label: '',
        introduce: '',
        companyAvatar: '',
        companyPropaPic: '',
        companyHomePage: '',
        abstract: ''
      },
      rules: {
        companyName: [{required: true, message: '请输入公司名称', trigger: 'blur'}],
        companyCity: [{required: true, message: '请输入公司城市', trigger: 'blur'}],
        companyAddress: [{required: true, message: '请输入公司地址', trigger: 'blur'}],
        companyScale: [{required: true, message: '请输入公司规模', trigger: 'blur'}],
        companyType: [{required: true, message: '请输入公司性质', trigger: 'blur'}],
        companyWelfare: [{required: true, message: '请输入公司福利', trigger: 'blur'}],
        recruitJob: [{required: true, message: '请输入招聘岗位', trigger: 'blur'}],
        recruitCount: [{required: true, message: '请输入招聘数量', trigger: 'blur'}],
        requiredDegree: [{required: true, message: '请输入要求学历', trigger: 'blur'}],
        requiredExp: [{required: true, message: '请输入要求经验', trigger: 'blur'}],
        requiredMajor: [{required: true, message: '请输入要求专业', trigger: 'blur'}],
        salary: [{required: true, message: '请输入岗位薪资', trigger: 'blur'}],
        publishTime: [{required: true, message: '请输入发布时间', trigger: 'blur'}],
        label: [{required: true, message: '请输入岗位标签', trigger: 'blur'}],
        introduce: [{required: true, message: '请输入岗位关键字', trigger: 'blur'}],
        companyAvatar: [{required: true, message: '请输入公司 Logo', trigger: 'blur'}],
        companyPropaPic: [{required: true, message: '请输入公司宣传照', trigger: 'blur'}],
        companyHomePage: [{required: true, message: '请输入公司主页网址', trigger: 'blur'}],
        jobDutyDetails: [{required: true, message: '请输入工作职责', trigger: 'blur'}],
        requiredSkillDesc: [{required: true, message: '请输入任职要求', trigger: 'blur'}],
        abstract: [{required: true, message: '请输入公司简介', trigger: 'blur'}]
      }
    }
  },
  methods: {
    setDialogVisible(state, status, idOrJobInfo) {
      this.dialogVisible = state
      this.addOrEdit = status
      if (status === 'add') {
        this.form.id = idOrJobInfo + 1
      } else if (status === 'edit') {
        // form 挂载前赋值，后面调用 resetFields() 方法将不生效
        this.$nextTick(() => {
          this.form = idOrJobInfo
        })
      }
    },
    handleClose(done) {
      // this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {})
      if (this.addOrEdit === 'edit') this.$refs.jobModalForm.resetFields()
      done()
    },
    cancelSubmit() {
      this.dialogVisible = false
      if (this.addOrEdit === 'edit') this.$refs.jobModalForm.resetFields()
    },
    onSubmit() {
      this.$refs.jobModalForm.validate((valid) => {
        if (valid) {
          this.$emit('loadTableData', this.addOrEdit, JSON.parse(JSON.stringify(this.form)))
          if (this.addOrEdit === 'edit') this.$refs.jobModalForm.resetFields()

          this.dialogVisible = false
          this.$message.success('操作成功~')
          this.$refs.jobModalForm.resetFields()
        } else {
          this.$message.error('请按提示输入完整的岗位信息~')
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

    .el-textarea__inner {
      width: 202px;
    }
  }

  .el-dialog__footer {
    border-top: 1px solid #DCDFE6;
  }
}
</style>