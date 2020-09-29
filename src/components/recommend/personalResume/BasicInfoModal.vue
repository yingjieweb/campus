<template>
  <el-dialog
          title="编辑基本信息"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="basicInfoForm">
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
  let checkName = (rule, value, callback) => {
    let reg = /^[\u4e00-\u9fa5]{2,6}$/;
    if (!reg.test(value)){
      callback(new Error('请输入2~6位中文字符'));
    }else {
      callback();
    }
  }
  let checkPhone = (rule, value, callback) => {
    let reg = /^\d{11}$/;
    if (!reg.test(value)){
      callback(new Error('请输入正确格式的手机号码'));
    }else {
      callback();
    }
  }
  let checkMail = (rule, value, callback) => {
    let reg = /^\w{3,12}@\w{1,5}\.[a-z]{2,3}$/;
    if (!reg.test(value)){
      callback(new Error('请输入正确格式的邮箱'));
    }else {
      callback();
    }
  }
  let checkIdCard = (rule, value, callback) => {
    let reg = /\d{17}[\d|X]|\d{15}/;
    if (!reg.test(value)){
      callback(new Error('请输入正确格式的身份证号'));
    }else {
      callback();
    }
  }

  export default {
    name: "BasicInfoModal",
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
            { validator: checkName, trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { validator: checkPhone, trigger: 'blur'}
          ],
          mail: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { validator: checkMail, trigger: 'blur'}
          ],
          IDCard: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { validator: checkIdCard, trigger: 'blur'}
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
        this.$refs.basicInfoForm.validate((valid) => {
          if (valid){
            this.$emit('updateBasicInfo', this.form);
            this.$message({message: '基本信息更新成功！', type: 'success'});
            this.dialogVisible = false;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
