<template>
  <div class="recommend-item" @click="goDetails(recommendItem.id)">
    <div class="recruit-info">
      <div class="jobs">{{recommendItem.recruitJob}}</div>
      <div class="salary">{{recommendItem.salary}}</div>
    </div>
    <div class="direction">
      <div class="experience">{{recommendItem.requiredDegree}} - {{recommendItem.requiredMajor}}</div>
      <span class="label" v-for="item in recommendItem.label">{{item}}</span>
    </div>
    <div class="company-info">
      <img class="avatar" :src="recommendItem.companyAvatar">
      <div class="info">
        <div class="company">{{recommendItem.companyName}}</div>
        <div class="introduce">{{recommendItem.introduce}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendItem",
    props: {
      recommendItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      goDetails(id) {
        this.$router.push({
          path: '/position-details',
          query: { positionId: id },
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recommend-item {
    width: 32.8%;
    margin: 4px;
    padding: 18px 18px 10px 18px;
    border: 1px solid gainsboro;
    border-radius: 3px;
    cursor: pointer;

    &:hover {box-shadow: 5px 5px 20px rgba(0,0,0,.05);}

    .recruit-info {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .jobs {font-size: 1.5em;}
      .salary {font-size: 1.5em; color: red;}
    }

    .direction {
      padding-bottom: 18px;
      border-bottom: 1px dashed gainsboro;

      .experience {margin: 8px 0;}
      .label {
        border: 1px solid gainsboro;
        margin-right: 5px;
        padding: 2px;
      }
    }

    .company-info {
      display: flex;
      padding-top: 10px;

      .avatar {
        width: 50px;
        height: 50px;
      }

      .info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
    }
  }
</style>
