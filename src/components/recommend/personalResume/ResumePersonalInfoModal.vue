<template>
  <el-dialog
          title="编辑基本信息"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules">
      <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" :label-width="formLabelWidth" prop="phone">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth" prop="mail">
        <el-input v-model="form.mail" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="个人证件" :label-width="formLabelWidth" prop="IDCard">
        <el-input v-model="form.IDCard" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="意向地点" :label-width="formLabelWidth" prop="intentionCity">
        <el-input v-model="form.intentionCity" autocomplete="off" placeholder="请输入意向城市，以、分隔"></el-input>
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
        formLabelWidth: '80px',
        rules: {
          name: [
            { required: true, message: '请输入学生姓名', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ],
          IDCard: [
            { required: true, message: '请输入身份证号', trigger: 'blur' }
          ],
          intentionCity: [
            { required: true, message: '请输入意向城市，以、分隔', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      setDialogVisible(state, oldBasicInfo){
        this.dialogVisible = state;
        this.form.name = oldBasicInfo.name[1];
        this.form.phone = oldBasicInfo.phone[1];
        this.form.mail = oldBasicInfo.mail[1];
        this.form.IDCard = oldBasicInfo.IDCard[1];
        this.form.intentionCity = oldBasicInfo.intentionCity[1];
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
