<template>
  <div class="internExp">
    <ResumeViewTitle title="实习经历"></ResumeViewTitle>
    <div class="hasIntern">
      <el-checkbox v-model="hasIntern">我没有实习经历</el-checkbox>
      <div class="switchState" @click="switchState"></div>
    </div>
    <el-divider></el-divider>
    <div v-if="!hasIntern">
      <div class="internItems" v-for="(internExpItem,index) in internExp">
        <div
            :class="index === 'describe' ? 'growWidth' : 'internItem'"
            v-for="(item, index) in internExpItem"
            :key="index">
          <div class="internItemKey">{{item[0]}}</div>
          <div class="internItemValue"><pre>{{item[1]}}</pre></div>
        </div>
        <el-button @click="editInternExp(index)">编辑</el-button>
        <el-button @click="deleteInternExp(index)">删除</el-button>
        <el-button @click="addInternExp" v-if="index === internExp.length-1">添加</el-button>
        <el-button @click="goNextItem" v-if="index === internExp.length-1">下一项</el-button>
      </div>
      <el-button @click="addInternExp" v-if="internExp.length === 0">添加</el-button>
      <el-button @click="goNextItem" v-if="internExp.length === 0">下一项</el-button>
    </div>

    <InternExperienceModal ref="InternExperienceModal" @updateInternExp="updateInternExp"></InternExperienceModal>
  </div>
</template>

<script lang="js">
  import ResumeViewTitle from "@/views/personalResume/childComps/ResumeViewTitle"
  import InternExperienceModal from "@/views/personalResume/childComps/InternExperienceModal"

  export default {
    name: "InternExperience",
    components: {
      ResumeViewTitle,
      InternExperienceModal
    },
    data(){
      return {
        hasIntern: false,
        internExp: [{
          company: ['公司', '京东'],
          period: ['时间', '2020.08.01~2020.05.01'],
          position: ['岗位', '图像识别实习生'],
          describe: ['描述', '针对表格检测问题，对比了各种主流方法，确定了使用基于语义分割的模型TableNet—一只需输入一张图片，将表格检测和表格列识别任务协同训练，两者共享一个编码器，各独立训练一个解码器，在预测时可逐像素预测表格和表格中的列；随后使用Pytorch复现了该论文，并基于甲方的金融表格数据集进行处理，并输入该端到端的网络进行训练，算法预测评估指标达到预期结果，其中表检测结果的F1分数达到0.9486，表结构识别的F1分数达到0.8933']
        }]
      }
    },
    watch: {
      hasIntern(){
        this.$EventBus.$emit('updateResumeInternExp', this.hasIntern, this.internExp);
      }
    },
    methods: {
      switchState(){
        this.hasIntern = !this.hasIntern;
      },
      addInternExp(){
        this.$refs.InternExperienceModal.setDialogVisible('新增实习经历', true, '', 'add');
      },
      editInternExp(index){
        this.$refs.InternExperienceModal.setDialogVisible('编辑实习经历', true, this.internExp[index], 'edit', index);
      },
      deleteInternExp(deleteIndex){
        this.internExp = this.internExp.filter((item, index) => {
          return index !== deleteIndex;
        })

        this.$EventBus.$emit('updateResumeInternExp', this.hasIntern, this.internExp);
      },
      updateInternExp(form, type, editItemIndex){
        if (type === 'add'){
          let newInternExpItem = {};
          newInternExpItem.company = ['公司',form.company];
          newInternExpItem.period = ['时间',form.period];
          newInternExpItem.position = ['岗位',form.position];
          newInternExpItem.describe = ['描述',form.describe];
          this.internExp.push(newInternExpItem);
        }else {
          this.internExp[editItemIndex].company = ['公司',form.company];
          this.internExp[editItemIndex].period = ['时间',form.period];
          this.internExp[editItemIndex].position = ['岗位',form.position];
          this.internExp[editItemIndex].describe = ['描述',form.describe];
        }

        this.$EventBus.$emit('updateResumeInternExp', this.hasIntern, this.internExp);
      },
      goNextItem(){
        this.$emit('goNextItem', 'fourth');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .internExp {
    height: 750px;
    margin-right: 8px;
    overflow-y: auto;

    >.hasIntern {
      display: flex;
      padding: 8px 0;
      cursor: pointer;
      margin-bottom: -12px;

      > .switchState {
        flex-grow: 1;
      }
    }

    .internItems {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 12px;
      &:hover {
        background-color: #F9FBFF;
      }

      > .internItem {
        width: 50%;
        margin-bottom: 16px;

        > .internItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .internItemValue {
          margin-bottom: 4px;
        }
      }

      > .growWidth {
        width: 100%;
        margin-bottom: 16px;

        > .internItemKey {
          color: gray;
          margin-bottom: 8px;
        }

        > .internItemValue {
          margin-bottom: 4px;
        }
      }
    }
  }
</style>
