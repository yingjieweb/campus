<template>
  <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="internForm" :label-width="formLabelWidth">
      <el-form-item label="项目名称" prop="projectName">
        <el-input v-model="form.projectName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="项目角色" prop="projectRole">
        <el-input v-model="form.projectRole" autocomplete="off"></el-input>
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
      <el-form-item label="项目链接" prop="projectURL">
        <el-input v-model="form.projectURL" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="项目描述" prop="describe">
        <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 7}"
                placeholder="请输入内容"
                v-model="form.describe">
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
  import {dateFormat} from "@/utils/dateFormat"

  export default {
    name: "ProjectExperienceModal",
    data(){
      return {
        title: '',
        type: '',
        editItemIndex: '',
        dialogVisible: false,
        form: {
          projectName: '',
          projectRole: '',
          period: '',
          projectURL: '',
          describe: ''
        },
        formLabelWidth: '80px',
        rules: {
          projectName: [
            { required: true, message: '请输入项目名称', trigger: 'blur' }
          ],
          projectRole: [
            { required: true, message: '请输入公司角色', trigger: 'blur' }
          ],
          period: [
            { required: true, message: '请选择起止日期', trigger: 'blur' }
          ],
          projectURL: [
            { required: true, message: '请输入项目链接', trigger: 'blur' }
          ],
          describe: [
            { required: true, message: '请输入项目描述', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      setDialogVisible(title, state, oldProjectExp, type, index) {
        this.title = title;
        this.dialogVisible = state;
        this.type = type;

        if (type === 'edit') {
          this.editItemIndex = index;
          this.form.projectName = oldProjectExp ? oldProjectExp.projectName[1] : '';
          this.form.projectRole = oldProjectExp ? oldProjectExp.projectRole[1] : '';
          this.form.period = oldProjectExp ? oldProjectExp.period[1] : '';
          this.form.projectURL = oldProjectExp ? oldProjectExp.projectURL[1] : '';
          this.form.describe = oldProjectExp ? oldProjectExp.describe[1] : '';
        } else {
          this.form.projectName = '';
          this.form.projectRole = '';
          this.form.period = '';
          this.form.projectURL = '';
          this.form.describe = '';
        }
      },
      handleClose(done) {
        // this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {});
        done()
      },
      onsubmit() {
        this.$refs.internForm.validate((valid) => {
          if (valid) {
            let preTime = dateFormat(this.form.period[0]);
            let nextTime = dateFormat(this.form.period[1]);
            this.form.period = `${preTime} ~ ${nextTime}`;

            this.$emit('updateProjectExp', this.form, this.type, this.editItemIndex);
            this.$message({message: '项目经验更新成功！', type: 'success'});
            this.dialogVisible = false;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
