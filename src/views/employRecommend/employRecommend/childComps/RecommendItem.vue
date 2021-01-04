<template>
  <div class="recommendItem">
    <div class="recruitInfo">
      <div class="jobs">{{recommendItem.jobs}}</div>
      <div class="salary">{{recommendItem.salary}}</div>
    </div>
    <div class="direction">
      <div class="experience">{{recommendItem.experience}}</div>
      <span class="label" v-for="item in recommendItem.label">{{item}}</span>
    </div>
    <div class="companyInfo">
      <div class="company">{{recommendItem.company}}</div>
      <div class="introduce">{{recommendItem.introduce}}</div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "RecommendItem",
    props: {
      recommendItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recommendItem {
    width: 32.8%;
    margin: 4px;
    padding: 18px 18px 10px 18px;
    border: 1px solid gainsboro;
    border-radius: 3px;
    cursor: pointer;

    &:hover {box-shadow: 5px 5px 20px rgba(0,0,0,.05);}

    > .recruitInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .jobs {font-size: 1.5em;}
      > .salary {font-size: 1.5em; color: red;}
    }

    > .direction {
      padding-bottom: 18px;
      border-bottom: 1px dashed gainsboro;

      > .experience {margin: 8px 0;}
      > .label {
        border: 1px solid gainsboro;
        margin-right: 5px;
        padding: 2px;
      }
    }

    > .companyInfo {
      > .company {margin: 5px 0;}
      > .introduce {margin: 5px 0;}
    }
  }
</style>
