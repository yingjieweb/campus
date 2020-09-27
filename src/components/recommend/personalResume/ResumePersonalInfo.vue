<template>
  <div class="basicInfo">
    <ResumeViewTitle title="基本信息"></ResumeViewTitle>
    <div class="infoItems">
      <div class="infoItem" v-for="(item, index) in basicInfo" :key="index">
        <div class="infoItemKey">{{item[0]}}</div>
        <div class="infoItemValue">{{item[1]}}</div>
      </div>
    </div>
    <el-button>编辑</el-button>
  </div>
</template>

<script lang="ts">
  import ResumeViewTitle from "./ResumeViewTitle.vue";

  export default {
    name: "ResumePersonalInfo",
    components: {
      ResumeViewTitle
    },
    data(){
      return {
        basicInfo: {
          name: ['姓名','张三'],
          phone: ['手机号码','18850888958'],
          mail: ['邮箱','1188061078@qq.com'],
          IDCard: ['个人证件','370888189509095574'],
          intentionCity: ['意向地点','南京、上海、北京']
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .basicInfo {
    height: 750px;
    margin-right: 8px;

    > .infoItems {
      display: flex;
      flex-wrap: wrap;

      > .infoItem {
        width: 50%;
        margin-bottom: 16px;

        > .infoItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .infoItemValue {
          margin-bottom: 4px;
        }
      }
    }
  }
</style>
