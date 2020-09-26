<template>
  <div class="resumeViewTitle">
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ResumeViewTitle",
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resumeViewTitle {
    position: relative;

    > h1 {
      font-size: 20px;
      font-weight: 800;
    }

    &:after {
      position: absolute;
      bottom: -8px;
      left: 0;
      content: "";
      width: 24px;
      height: 4px;
      background-color: #3370ff;
    }
  }

</style>
