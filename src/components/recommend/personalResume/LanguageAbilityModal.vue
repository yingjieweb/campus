<template>
  <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="langAbilityForm" :label-width="formLabelWidth">
      <el-form-item label="语言" prop="lang">
        <el-select v-model="form.lang" placeholder="请选择语言" style="width: 100%;">
          <el-option
                  v-for="item in langOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="掌握程度" prop="proficient">
        <el-select v-model="form.proficient" placeholder="请选择掌握程度" style="width: 100%;">
          <el-option
                  v-for="item in proficientOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
          </el-option>
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
    name: "LanguageAbilityModal",
    data(){
      return {
        title: '',
        type: '',
        editItemIndex: '',
        dialogVisible: false,
        form: {
          lang: '',
          proficient: ''
        },
        langOptions: [
          {value: '英语', label: '英语'},
          {value: '法语', label: '法语'},
          {value: '日语', label: '日语'},
          {value: '韩语', label: '韩语'},
          {value: '俄语', label: '俄语'},
          {value: '西班牙语', label: '西班牙语'},
          {value: '葡萄牙语', label: '葡萄牙语'},
          {value: '阿拉伯语', label: '阿拉伯语'},
          {value: '印度语', label: '印度语'},
          {value: '孟加拉语', label: '孟加拉语'},
          {value: '波斯语', label: '波斯语'},
          {value: '意大利语', label: '意大利语'},
          {value: '土耳其语', label: '土耳其语'},
          {value: '越南语', label: '越南语'},
          {value: '粤语', label: '粤语'},
          {value: '普通话', label: '普通话'}
        ],
        proficientOptions: [
          {value: '入门', label: '入门'},
          {value: '日常会话', label: '日常会话'},
          {value: '商务会话', label: '商务会话'},
          {value: '无障碍沟通', label: '无障碍沟通'},
          {value: '母语', label: '母语'}
        ],
        formLabelWidth: '80px',
        rules: {
          lang: [
            { required: true, message: '请输入语言', trigger: 'blur' },
          ],
          proficient: [
            { required: true, message: '请输入掌握程度', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      setDialogVisible(title, state, oldLangAbility, type, index){
        this.title = title;
        this.dialogVisible = state;
        this.type = type;

        if (type === 'edit'){
          this.editItemIndex = index
          this.form.lang = oldLangAbility ? oldLangAbility.lang[1] : '';
          this.form.proficient = oldLangAbility ? oldLangAbility.proficient[1] : '';
        }else {
          this.form.lang = '';
          this.form.proficient = '';
        }
      },
      handleClose(done) {
        // this.$confirm('确认关闭？').then(_ => {done();}).catch(_ => {});
        done()
      },
      onsubmit(){
        this.$refs.langAbilityForm.validate((valid) => {
          if (valid){
            this.$emit('updateLangKind', this.form, this.type, this.editItemIndex);
            this.$message({message: '语言能力更新成功！', type: 'success'});
            this.dialogVisible = false;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
