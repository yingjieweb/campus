<template>
  <div class="internExp">
    <ResumeViewTitle title="实习经历"></ResumeViewTitle>
    <div class="hasIntern">
      <el-checkbox v-model="hasIntern">我没有实习经历</el-checkbox>
      <div class="switchState" @click="switchState"></div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script lang="js">
  import ResumeViewTitle from "@/components/recommend/personalResume/ResumeViewTitle"

  export default {
    name: "InternExperience",
    components: {
      ResumeViewTitle
    },
    data(){
      return {
        hasIntern: false
      }
    },
    methods: {
      switchState(){
        this.hasIntern = !this.hasIntern;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .internExp {

    >.hasIntern {
      display: flex;
      padding: 8px 0;
      cursor: pointer;
      margin-bottom: -12px;

      > .switchState {
        flex-grow: 1;
      }
    }
  }
</style>
