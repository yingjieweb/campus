<template>
  <div class="basicInfo">
    <ResumeViewTitle title="基本信息"></ResumeViewTitle>
    <div class="infoItems">
      <div class="infoItem" v-for="(item, index) in basicInfo" :key="index">
        <div class="infoItemKey">{{item[0]}}</div>
        <div class="infoItemValue">{{item[1]}}</div>
      </div>
    </div>
    <el-button @click="editBasicInfo">编辑</el-button>
    <el-button @click="goNextItem">下一项</el-button>

    <BasicInfoModal ref="ResumePersonalInfoModal" @updateBasicInfo="updateBasicInfo"></BasicInfoModal>
  </div>
</template>

<script lang="ts">
  import ResumeViewTitle from "./ResumeViewTitle.vue";
  import BasicInfoModal from "./BasicInfoModal.vue";

  export default {
    name: "BasicInfo",
    components: {
      ResumeViewTitle,
      BasicInfoModal
    },
    data() {
      return {
        basicInfo: {
          name: ['姓名', '张**'],
          phone: ['手机号码', '188********'],
          mail: ['邮箱', '118806****@qq.com'],
          IDCard: ['个人证件', '******************'],
          currentState: ['当前状态', '2021应届生'],
          expectedPosition: ['求职意向', '图像识别工程师']
        }
      }
    },
    methods: {
      editBasicInfo() {
        this.$refs.ResumePersonalInfoModal.setDialogVisible('编辑基本信息', true, this.basicInfo);
      },
      updateBasicInfo(form) {
        this.basicInfo.name = ['姓名', form.name];
        this.basicInfo.phone = ['手机号码', form.phone];
        this.basicInfo.mail = ['邮箱', form.mail];
        this.basicInfo.IDCard = ['个人证件', form.IDCard];
        this.basicInfo.currentState = ['当前状态', form.currentState];
        this.basicInfo.expectedPosition = ['求职意向', form.expectedPosition];

        this.$EventBus.$emit('updateResumeBasicInfo', this.basicInfo);
      },
      goNextItem() {
        this.$emit('goNextItem', 'second');
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
