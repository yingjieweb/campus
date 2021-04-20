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
    <div class="educationExperience" v-if="personalInfo.eduExp.length">
      <div class="title">教育经历</div>
      <div class="eduExpItems" v-for="(eduExpItem, index) in personalInfo.eduExp" :key="index">
        <div class="school_period">
          <strong class="school">{{eduExpItem.school[1]}}</strong>
          <span>{{eduExpItem.period[1]}}</span>
        </div>
        <div class="major_scoreRank">
          <span class="major">{{eduExpItem.major[1]}} - {{eduExpItem.record[1]}}</span>
          <span>成绩排名：{{eduExpItem.scoreRank[1]}}</span>
        </div>
      </div>
    </div>
    <div class="internExperience" v-if="personalInfo.internExp.length && !personalInfo.hasIntern">
      <div class="title">实习经历</div>
      <div class="internExpItems" v-for="(internExpItem, index) in personalInfo.internExp" :key="index">
        <div class="company_period">
          <strong class="company">{{internExpItem.company[1]}} - {{internExpItem.position[1]}}</strong>
          <span>{{internExpItem.period[1]}}</span>
        </div>
        <div class="describe">描述：<br>
          <span style="display: inline-block; width: 30px;"></span>
          {{internExpItem.describe[1]}}
        </div>
      </div>
    </div>
    <div class="projectExperience" v-if="personalInfo.projectExp.length">
      <div class="title">项目经验</div>
      <div class="projectExpItems" v-for="(projectExpItem, index) in personalInfo.projectExp" :key="index">
        <div class="projectInfo">
          <strong class="projectName">{{projectExpItem.projectName[1]}} - {{projectExpItem.projectRole[1]}}</strong>
          <span>{{projectExpItem.period[1]}}</span>
        </div>
        <div class="projectURL" v-if="projectExpItem.describe[1].indexOf('军方') < 0">
          项目链接： {{projectExpItem.projectURL[1]}}
        </div>
        <div class="describe">项目描述：<br>
          <span style="display: inline-block; width: 30px;"></span>
          {{projectExpItem.describe[1]}}
        </div>
      </div>
    </div>
    <div class="languageAbility" v-if="personalInfo.langKind.length">
      <div class="title">语言能力</div>
      <div class="langKindItems" v-for="(langKindItem, index) in personalInfo.langKind" :key="index">
        <div class="langAbilityInfo">
          <strong class="lang">语言：{{langKindItem.lang[1]}}</strong>
          <strong class="proficient">掌握程度：{{langKindItem.proficient[1]}}</strong>
        </div>
      </div>
    </div>
    <div class="selfAssess">
      <div class="title">自我评价</div>
      <span style="display: inline-block; width: 30px;"></span>
      <span class="selfDetails">{{personalInfo.selfAssess}}</span>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "ResumePreview",
    mounted() {
      this.$EventBus.$on('updateResumeBasicInfo', (newBasicInfo) => {
        this.personalInfo.basicInfo = newBasicInfo
      })
      this.$EventBus.$on('updateResumeEduExp', (newEduExp) => {
        this.personalInfo.eduExp = newEduExp
      })
      this.$EventBus.$on('updateResumeInternExp', (hasIntern, newInternExp) => {
        this.personalInfo.hasIntern = hasIntern
        this.personalInfo.internExp = newInternExp
      })
      this.$EventBus.$on('updateResumeProjectExp', (newProjectExp) => {
        this.personalInfo.projectExp = newProjectExp
      })
      this.$EventBus.$on('updateResumeLangAbility', (newLangKind) => {
        this.personalInfo.langKind = newLangKind
      })
      this.$EventBus.$on('updateResumeSelfAccess', (newSelfAccess) => {
        this.personalInfo.selfAssess = newSelfAccess
      })
    },
    data() {
      return {
        personalInfo: {
          basicInfo: {
            name: ['姓名', '张钰鹏'],
            phone: ['手机号码', '18850888958'],
            mail: ['邮箱', '1188061078@qq.com'],
            IDCard: ['个人证件', '370888189509095574'],
            currentState: ['当前状态', '2021应届生'],
            expectedPosition: ['求职意向', '图像识别工程师']
          },
          eduExp: [{
            school: ['学校', '东北大学'],
            major: ['专业', '软件工程'],
            period: ['起止时间', '2018.09.07 ~ 2021.07.01'],
            record: ['学历', '硕士'],
            scoreRank: ['成绩排名', '50%'],
            studyType: ['学历类型', '统招全日制']
          }],
          hasIntern: false,
          internExp: [{
            company: ['公司', '京东'],
            period: ['时间', '2020.08.01~2020.05.01'],
            position: ['岗位', '图像识别实习生'],
            describe: ['描述', '针对表格检测问题，对比了各种主流方法，确定了使用基于语义分割的模型TableNet—一只需输入一张图片，将表格检测和表格列识别任务协同训练，两者共享一个编码器，各独立训练一个解码器，在预测时可逐像素预测表格和表格中的列；随后使用Pytorch复现了该论文，并基于甲方的金融表格数据集进行处理，并输入该端到端的网络进行训练，算法预测评估指标达到预期结果，其中表检测结果的F1分数达到0.9486，表结构识别的F1分数达到0.8933']
          }],
          projectExp: [{
            projectName: ['项目名称', '军方综合管控系统'],
            projectRole: ['项目角色', '模块负责人'],
            period: ['起止时间', '2018.09 ~ 2021.07'],
            projectURL: ['项目链接', 'https://github.com/yingjieweb'],
            describe: ['项目描述', '该军方综合管控系统是由为框架编写的，前端使用vue.js框架。本人主要协助测试对系统功能进行测试：协助开发修改后端bug：协助需求工程师与用户对接系统功能需求；协助需求工程师完成需求大纲、详细设计大纲的编写：协助测试工程师完成测试大纲的编写。']
          }],
          langKind: [{
            lang: ['语言', '英语'],
            proficient: ['掌握程度', '日常会话']
          }],
          selfAssess: '作为一位职场新人，一定能够以积极主动的工作态度来迎接工作中的每一个挑战；团队配合能力：善于沟通，' +
              '有一定团队协作经验，具备活动策划和组织协调能力；工作态度评价：良好的责任感，吃苦耐劳，擅于管理时间，勇于面对变化和挑战。'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resumePreview {
    color: gray;
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

    .educationExperience {
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

          .major {
            margin-left: -60px
          }
        }
      }
    }

    .internExperience {
      margin-bottom: 8px;

      .title {
        font-weight: bold;
        margin-bottom: 8px;
        border-bottom: 1px solid #909399;
      }

      .internExpItems {
        &:hover {
          background-color: #F9FBFF;
        }

        .company_period {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .projectExperience {
      margin-bottom: 8px;

      .title {
        font-weight: bold;
        margin-bottom: 8px;
        border-bottom: 1px solid #909399;
      }

      .projectExpItems {
        &:hover {
          background-color: #F9FBFF;
        }

        .projectInfo {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .languageAbility {
      margin-bottom: 8px;

      .title {
        font-weight: bold;
        margin-bottom: 8px;
        border-bottom: 1px solid #909399;
      }

      .langKindItems {
        &:hover {
          background-color: #F9FBFF;
        }

        .langAbilityInfo {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .selfAssess {
      margin-bottom: 8px;

      .title {
        font-weight: bold;
        margin-bottom: 8px;
        border-bottom: 1px solid #909399;
      }

    }
  }
</style>
