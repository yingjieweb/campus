<template>
  <div class="resumePreview">
    <div class="basicInfo">
      <div class="name">{{personalInfo.basicInfo.name[1]}}</div>
      <div class="contact">
        <span>电话：{{personalInfo.basicInfo.phone[1]}}</span> |
        <span>邮箱：{{personalInfo.basicInfo.phone[1]}}</span>
      </div>
      <div class="state">
        <span>当前状态：{{personalInfo.basicInfo.currentState[1]}}</span> |
        <span>求职意向：{{personalInfo.basicInfo.expectedPosition[1]}}</span>
      </div>
    </div>
    <div class="EducationExperience" v-if="personalInfo.eduExp.length">
      <div class="title">教育经历</div>
      <div class="eduExpItems" v-for="(eduExpItem, index) in personalInfo.eduExp" :key="index">
        <div class="school_period">
          <span class="school">{{eduExpItem.school[1]}}</span>
          <span>{{eduExpItem.period[1]}}</span>
        </div>
        <div class="major_scoreRank">
          <span class="major">{{eduExpItem.major[1]}} - {{eduExpItem.record[1]}}</span>
          <span>成绩排名：{{eduExpItem.scoreRank[1]}}</span>
        </div>
      </div>
    </div>
    <div class="InternExperience">实习经历</div>
    <div class="ProjectExperience">项目经验</div>
    <div class="LanguageAbility">语言能力</div>
    <div class="SelfAssess">自我评价</div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ResumePreview",
    mounted(){
      this.$EventBus.$on('updateResumeBasicInfo', (newBasicInfo)=>{
        this.personalInfo.basicInfo = newBasicInfo;
      })
      this.$EventBus.$on('updateResumeEduExp', (newEduExp)=>{
        this.personalInfo.eduExp = newEduExp;
      })
    },
    data(){
      return {
        personalInfo: {
          basicInfo: {
            name: ['姓名','张三'],
            phone: ['手机号码','18850888958'],
            mail: ['邮箱','1188061078@qq.com'],
            IDCard: ['个人证件','370888189509095574'],
            currentState: ['当前状态','2021应届生'],
            expectedPosition: ['求职意向','大数据开发工程师']
          },
          eduExp: [{
            school: ['学校','东北大学'],
            major: ['专业','软件工程'],
            period: ['起止时间','2018.09.07 ~ 2021.07.01'],
            record: ['学历','硕士'],
            scoreRank: ['成绩排名','50%'],
            studyType: ['学历类型', '统招全日制']
          }]
        }
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .resumePreview {
    color: gray;
    flex-grow: 3;
    padding: 0 12px;
    /*border: 1px solid salmon;*/

    .basicInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 8px;

      .name {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .EducationExperience {
      margin-bottom: 8px;

      .title {
        font-weight: bold;
        margin-bottom: 8px;
        border-bottom: 1px solid #909399;
      }
      .eduExpItems {
        &:hover {
          background-color: #F9FBFF;
        }
        .school_period {
          display: flex;
          justify-content: space-between;
        }
        .major_scoreRank {
          display: flex;
          justify-content: space-around;

          .major {margin-left: -60px}
        }
      }
    }
  }
</style>
