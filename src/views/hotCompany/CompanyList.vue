<template>
  <div class="company-list">
    <CompanyItem v-for="(item, index) in companyList" :key="index" :company-item="item"></CompanyItem>
  </div>
</template>

<script lang="js">
  import CompanyItem from "@/views/hotCompany/CompanyItem"

  export default {
    name: "CompanyList",
    components: {
      CompanyItem
    },
    props: {
      companyList: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .company-list {
    min-width: 1662px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>
