<template>
  <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="basicInfoForm" :label-width="formLabelWidth">
      <el-form-item label="期望职位" prop="expectedPosition">
        <el-select v-model="form.expectedPosition" placeholder="请选择期望职位" style="width: 100%;">
          <el-option label="博士" value="博士"></el-option>
          <el-option label="硕士" value="硕士"></el-option>
          <el-option label="本科" value="本科"></el-option>
          <el-option label="大专" value="大专"></el-option>
          <el-option label="专职" value="专职"></el-option>
          <el-option label="初中" value="初中"></el-option>
          <el-option label="小学" value="小学"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="期望行业" prop="expectedIndustry">
        <el-select v-model="form.expectedIndustry" placeholder="请选择期望行业" style="width: 100%;">
          <el-option label="前 5%" value="前 5%"></el-option>
          <el-option label="前 10%" value="前 10%"></el-option>
          <el-option label="前 20%" value="前 20%"></el-option>
          <el-option label="前 30%" value="前 30%"></el-option>
          <el-option label="前 50%" value="前 50%"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作城市" prop="workCity">
        <el-select v-model="form.workCity" placeholder="请选择期望行业" style="width: 100%;">
          <el-option label="前 5%" value="前 5%"></el-option>
          <el-option label="前 10%" value="前 10%"></el-option>
          <el-option label="前 20%" value="前 20%"></el-option>
          <el-option label="前 30%" value="前 30%"></el-option>
          <el-option label="前 50%" value="前 50%"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="薪资要求" prop="salaryRank">
        <el-select v-model="form.salaryRank" placeholder="请选择期望行业" style="width: 100%;">
          <el-option label="前 5%" value="前 5%"></el-option>
          <el-option label="前 10%" value="前 10%"></el-option>
          <el-option label="前 20%" value="前 20%"></el-option>
          <el-option label="前 30%" value="前 30%"></el-option>
          <el-option label="前 50%" value="前 50%"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
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
    name: "JobIntentionModal",
    data(){
      return {
        title: '',
        dialogVisible: false,
        form: {
          expectedPosition: '',
          expectedIndustry: '',
          workCity: '',
          salaryRank: ''
        },
        formLabelWidth: '80px',
        rules: {
          expectedPosition: [
            { required: true, message: '请输入期望职位', trigger: 'blur' }
          ],
          expectedIndustry: [
            { required: true, message: '请输入期望行业', trigger: 'blur' }
          ],
          workCity: [
            { required: true, message: '请选择工作城市', trigger: 'blur' }
          ],
          salaryRank: [
            { required: true, message: '请选择薪资要求', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      setDialogVisible(title, state, oldJobIntention){
        this.title = title;
        this.dialogVisible = state;

        this.form.expectedPosition = oldJobIntention.expectedPosition[1];
        this.form.expectedIndustry = oldJobIntention.expectedIndustry[1];
        this.form.workCity = oldJobIntention.workCity[1];
        this.form.salaryRank = oldJobIntention.salaryRank[1];
      },
      handleClose(done) {
        // this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {});
        done()
      },
      onsubmit(){
        this.$refs.basicInfoForm.validate((valid) => {
          if (valid){
            this.$emit('updateJobIntention', this.form);
            this.$message({message: '求职意向更新成功！', type: 'success'});
            this.dialogVisible = false;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
