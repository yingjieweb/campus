<template>
  <Block title="热门公司" style="height: 1200px;">
    <div slot="content" class="container">
      <div class="worth-recommend">
        什么值的投
      </div>
      <div class="company-list">
        <div class="company-item">
          美团
        </div>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  export default {
    name: "HotCompany"
  }
</script>

<style lang="scss" scoped>
  .container {
    .worth-recommend {
      border: 1px solid red;
    }

    .company-list {
      border: 1px solid red;
    }
  }
</style>
