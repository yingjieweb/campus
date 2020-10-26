<template>
  <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="basicInfoForm" :label-width="formLabelWidth">
      <el-form-item label="期望职位" prop="expectedPosition">
        <el-cascader
          v-model="expectedPosition"
          :options="expectedPositionData"
          :props="{ expandTrigger: 'hover' }"
          :show-all-levels="false"
          style="width: 100%;"></el-cascader>
      </el-form-item>
      <el-form-item label="期望行业" prop="expectedIndustry">
        <el-select v-model="form.expectedIndustry" placeholder="请选择期望行业" style="width: 100%;">
          <el-option label="前 10%" value="前 10%"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作城市" prop="workCity">
        <el-select v-model="form.workCity" placeholder="请选择期望行业" style="width: 100%;">
          <el-option label="前 10%" value="前 10%"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="薪资要求" prop="salaryRank">
        <el-select v-model="form.salaryRank" placeholder="请选择期望行业" style="width: 100%;">
          <el-option label="前 10%" value="前 10%"></el-option>
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
  import expectedPositionData from "@/database/expectedPositionData"

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
        },
        expectedPosition: '',
        expectedPositionData: expectedPositionData
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
