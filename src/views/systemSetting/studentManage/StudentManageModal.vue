<template>
  <el-dialog
          title="添加用户"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="userModalForm">
      <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年级" prop="grade" :label-width="formLabelWidth">
        <el-input v-model="form.grade" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学号" prop="studentId" :label-width="formLabelWidth">
        <el-input v-model="form.studentId" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender" :label-width="formLabelWidth">
        <el-input v-model="form.gender" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="家庭地址" prop="address" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" size="small" @click="onsubmit">确 定</el-button>
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
        form: {
          name: '',
          grade: '',
          studentId: '',
          gender: '',
          phone: '',
          address: ''
        },
        rules: {
          name: [{required: true, message: '请输入学生姓名', trigger: 'blur'}],
          grade: [{required: true, message: '请输入学生年级', trigger: 'blur'}],
          studentId: [{required: true, message: '请输入学生学号', trigger: 'blur'}],
          gender: [{required: true, message: '请输入学生年龄', trigger: 'blur'}],
          phone: [{required: true, message: '请输入学生电话', trigger: 'blur'}],
          address: [{required: true, message: '请输入学生家庭地址', trigger: 'blur'}]
        }
      }
    },
    methods: {
      setDialogVisible(state) {
        this.dialogVisible = state;
      },
      handleClose(done) {
        // this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {});
        done()
      },
      onsubmit() {
        this.$refs.userModalForm.validate((valid) => {
          if (valid) {
            this.$emit('addUserInfo', JSON.parse(JSON.stringify(this.form)));
            this.$message({message: '添加成功！', type: 'success'});
            this.dialogVisible = false;

            this.$refs.userModalForm.resetFields();
          } else {
            this.$message.error('请按提示输入完整的学生信息~')
          }
        });
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
