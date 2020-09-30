<template>
  <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="basicInfoForm">
      <el-form-item label="学校" :label-width="formLabelWidth" prop="school">
        <el-input v-model="form.school" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="专业" :label-width="formLabelWidth" prop="major">
        <el-input v-model="form.major" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="起止日期" :label-width="formLabelWidth" prop="period">
        <el-input v-model="form.period" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学历" :label-width="formLabelWidth" prop="record">
        <el-input v-model="form.record" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="成绩排名" :label-width="formLabelWidth" prop="scoreRank">
        <el-input v-model="form.scoreRank" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学历类型" :label-width="formLabelWidth" prop="studyType">
        <el-input v-model="form.studyType" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" size="small" @click="onsubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
  export default {
    name: "EducationExperienceModal",
    data(){
      return {
        title: '',
        type: '',
        editItemIndex: '',
        dialogVisible: false,
        form: {
          school: '',
          major: '',
          period: '',
          record: '',
          scoreRank: '',
          studyType: ''
        },
        formLabelWidth: '80px',
        rules: {}
      }
    },
    methods: {
      setDialogVisible(title, state, oldEduExp, type, index){
        this.title = title;
        this.dialogVisible = state;
        this.type = type;

        if (type === 'edit'){
          this.editItemIndex = index
          this.form.school = oldEduExp ? oldEduExp.school[1] : '';
          this.form.major = oldEduExp ? oldEduExp.major[1] : '';
          this.form.period = oldEduExp ? oldEduExp.period[1] : '';
          this.form.record = oldEduExp ? oldEduExp.record[1] : '';
          this.form.scoreRank = oldEduExp ? oldEduExp.scoreRank[1] : '';
          this.form.studyType = oldEduExp ? oldEduExp.studyType[1] : '';
        }else {
          this.form.school = '';
          this.form.major = '';
          this.form.period = '';
          this.form.record = '';
          this.form.scoreRank = '';
          this.form.studyType = '';
        }
      },
      handleClose(done) {
        // this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {});
        done()
      },
      onsubmit(){
        this.$refs.basicInfoForm.validate((valid) => {
          if (valid){
            this.$emit('updateEduExp', this.form, this.type, this.editItemIndex);
            this.$message({message: '教育经历更新成功！', type: 'success'});
            this.dialogVisible = false;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
