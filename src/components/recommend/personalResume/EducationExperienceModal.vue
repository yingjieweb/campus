<template>
  <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="basicInfoForm" :label-width="formLabelWidth">
      <el-form-item label="学校" prop="school">
        <el-input v-model="form.school" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="major">
        <el-input v-model="form.major" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="起止日期" prop="period">
        <el-date-picker
                v-model="form.period"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%;">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="学历" prop="record">
        <el-select v-model="form.record" placeholder="请选择学历" style="width: 100%;">
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
      <el-form-item label="成绩排名" prop="scoreRank">
        <el-select v-model="form.scoreRank" placeholder="请选择成绩排名" style="width: 100%;">
          <el-option label="前 5%" value="前 5%"></el-option>
          <el-option label="前 10%" value="前 10%"></el-option>
          <el-option label="前 20%" value="前 20%"></el-option>
          <el-option label="前 30%" value="前 30%"></el-option>
          <el-option label="前 50%" value="前 50%"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学历类型" prop="studyType">
        <el-select v-model="form.studyType" placeholder="请选择学历" style="width: 100%;">
          <el-option label="统招全日制" value="统招全日制"></el-option>
          <el-option label="统招非全日制" value="统招非全日制"></el-option>
          <el-option label="自考" value="自考"></el-option>
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
  import {dateFormat} from '@/utils/dateFormat'

  let checkSchoolName = (rule, value, callback) => {
    let reg = /^[\u4e00-\u9fa5]{4,10}$/;
    if (!reg.test(value)){
      callback(new Error('请输入正确的学校名称'));
    }else {
      callback();
    }
  }
  let checkMajor = (rule, value, callback) => {
    let reg = /^[\u4e00-\u9fa5]{4,10}$/;
    if (!reg.test(value)){
      callback(new Error('请输入正确的专业名称'));
    }else {
      callback();
    }
  }

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
        rules: {
          school: [
            { required: true, message: '请输入学校名称', trigger: 'blur' },
            { validator: checkSchoolName, trigger: 'blur' }
          ],
          major: [
            { required: true, message: '请输入专业名称', trigger: 'blur' },
            { validator: checkMajor, trigger: 'blur' }
          ],
          period: [
            { required: true, message: '请选择起止日期', trigger: 'blur' },
          ],
          record: [
            { required: true, message: '请选择学历', trigger: 'blur' },
          ],
          scoreRank: [
            { required: true, message: '请选择成绩排名', trigger: 'blur' }
          ],
          studyType: [
            { required: true, message: '请选择学历类型', trigger: 'blur' }
          ]
        }
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
            let preTime = dateFormat(this.form.period[0]);
            let nextTime = dateFormat(this.form.period[1]);
            this.form.period = `${preTime} ~ ${nextTime}`;

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
