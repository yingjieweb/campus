<template>
  <div class="langAbility">
    <ResumeViewTitle title="语言能力"></ResumeViewTitle>
    <div class="langItems" v-for="(langKindItem,index) in langKind">
      <div class="langItem" v-for="(item, index) in langKindItem" :key="index">
        <div class="langItemKey">{{item[0]}}</div>
        <div class="langItemValue">{{item[1]}}</div>
      </div>
      <el-button @click="editLangKind(index)">编辑</el-button>
      <el-button @click="deleteLangKind(index)">删除</el-button>
      <el-button @click="addLangKind" v-if="index === langKind.length-1">添加</el-button>
      <el-button @click="goNextItem" v-if="index === langKind.length-1">下一项</el-button>
    </div>
    <el-button @click="addLangKind" v-if="langKind.length === 0">添加</el-button>
    <el-button @click="goNextItem" v-if="langKind.length === 0">下一项</el-button>

    <LanguageAbilityModal ref="LanguageAbilityModal" @updateLangKind="updateLangKind"></LanguageAbilityModal>
  </div>
</template>

<script lang="js">
  import ResumeViewTitle from "@/components/recommend/personalResume/ResumeViewTitle"
  import LanguageAbilityModal from "@/components/recommend/personalResume/LanguageAbilityModal"

  export default {
    name: "LanguageAbility",
    components: {
      ResumeViewTitle,
      LanguageAbilityModal
    },
    data(){
      return {
        langKind: [{
          lang: ['语言','英语'],
          proficient: ['掌握程度','日常会话']
        }]
      }
    },
    methods: {
      addLangKind(){
        this.$refs.LanguageAbilityModal.setDialogVisible('新增语言能力', true, '', 'add');
      },
      editLangKind(index){
        this.$refs.LanguageAbilityModal.setDialogVisible('编辑语言能力', true, this.langKind[index], 'edit', index);
      },
      deleteLangKind(deleteIndex){
        this.langKind = this.langKind.filter((item, index) => {
          return index !== deleteIndex;
        })
      },
      updateLangKind(form, type, editItemIndex){
        if (type === 'add'){
          let newLangKindItem = {};
          newLangKindItem.lang = ['语言',form.lang];
          newLangKindItem.proficient = ['掌握程度',form.proficient];
          this.langKind.push(newLangKindItem);
        }else {
          this.langKind[editItemIndex].lang = ['语言',form.lang];
          this.langKind[editItemIndex].proficient = ['掌握程度',form.proficient];
        }
      },
      goNextItem(){
        this.$emit('goNextItem', 'sixth');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .langAbility {
    height: 750px;
    margin-right: 8px;
    overflow-y: auto;

    > .langItems {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 12px;
      &:hover {
        background-color: #F9FBFF;
      }

      > .langItem {
        width: 50%;
        margin-bottom: 16px;

        > .langItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .langItemValue {
          margin-bottom: 4px;
        }
      }
    }
  }
</style>
