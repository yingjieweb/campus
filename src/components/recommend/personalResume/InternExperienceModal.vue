<template>
  <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="internForm" :label-width="formLabelWidth">
      <el-form-item label="公司" prop="company">
        <el-input v-model="form.company" autocomplete="off"></el-input>
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
      <el-form-item label="岗位">
        <el-input v-model="form.position" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述">
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
    name: "InternExperienceModal",
    data(){
      return {
        title: '',
        type: '',
        editItemIndex: '',
        dialogVisible: false,
        form: {
          company: '',
          period: '',
          position: '',
          describe: ''
        },
        formLabelWidth: '80px',
        rules: {}
      }
    },
    methods: {
      setDialogVisible(title, state, oldInternExp, type, index) {
        this.title = title;
        this.dialogVisible = state;
        this.type = type;

        if (type === 'edit') {
          this.editItemIndex = index;
          this.form.company = oldInternExp ? oldInternExp.company[1] : '';
          this.form.period = oldInternExp ? oldInternExp.period[1] : '';
          this.form.position = oldInternExp ? oldInternExp.position[1] : '';
          this.form.describe = oldInternExp ? oldInternExp.describe[1] : '';

        } else {
          this.form.company = '';
          this.form.period = '';
          this.form.position = '';
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

            this.$emit('updateInternExp', this.form, this.type, this.editItemIndex);
            this.$message({message: '实习经历更新成功！', type: 'success'});
            this.dialogVisible = false;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
