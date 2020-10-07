<template>
  <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="selfAssessForm" :label-width="formLabelWidth">
      <el-form-item label="自我评价" prop="selfAssess">
        <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 7}"
                placeholder="请输入内容"
                v-model="form.selfAssess">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" size="small" @click="onsubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script lang="js">
  export default {
    name: "SelfAssessModal",
    data() {
      return {
        title: '',
        dialogVisible: false,
        form: {
          selfAssess: ''
        },
        formLabelWidth: '80px',
        rules: {
          selfAssess: [
            { required: true, message: '请输入学生姓名', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      setDialogVisible(title, state, oldSelfAssess){
        this.title = title;
        this.dialogVisible = state;

        this.form.selfAssess = oldSelfAssess;
      },
      handleClose(done) {
        // this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {});
        done()
      },
      onsubmit(){
        this.$refs.selfAssessForm.validate((valid) => {
          if (valid){
            this.$emit('updateSelfAssess', this.form);
            this.$message({message: '自我评价更新成功！', type: 'success'});
            this.dialogVisible = false;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
