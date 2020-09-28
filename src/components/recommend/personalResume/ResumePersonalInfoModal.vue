<template>
  <el-dialog
          title="编辑基本信息"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.mail" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="个人证件" :label-width="formLabelWidth">
        <el-input v-model="form.IDCard" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="意向地点" :label-width="formLabelWidth">
        <el-input v-model="form.intentionCity" autocomplete="off"></el-input>
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
    name: "ResumePersonalInfoModal",
    data() {
      return {
        dialogVisible: false,
        form: {
          name: '',
          phone: '',
          mail: '',
          IDCard: '',
          intentionCity: ''
        },
        formLabelWidth: '68px'
      }
    },
    methods: {
      setDialogVisible(state){
        this.dialogVisible = state;
      },
      handleClose(done) {
        // this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {});
        done()
      },
      onsubmit(){
        this.$emit('editBasicInfo', this.form);
        this.$message({message: '基本信息更新成功！', type: 'success'});
        this.dialogVisible = false;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
