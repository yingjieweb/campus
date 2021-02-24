<template>
  <Block title="热门公司">
    <div slot="content" class="container">
      <CompanyList :company-list="currentPageCompany"></CompanyList>

      <div class="pagination">
        <el-pagination
                background
                layout="prev, pager, next"
                @prev-click="prevClick"
                @next-click="nextClick"
                @current-change="currentChange"
                :total="totalPageCount">
        </el-pagination>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import CompanyList from "@/views/hotCompany/CompanyList"
  import jobData from "@/database/jobData"

  export default {
    name: "HotCompany",
    components: {
      CompanyList
    },
    data() {
      return {
        currentPage: 1,
        currentPageCompany: [],
      }
    },
    computed: {
      totalPageCount() {
        return Array.from(jobData).length / 18 * 10;
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      prevClick(currentPage) {
        this.currentPageCompany = jobData.slice((currentPage - 1) * 18, currentPage * 18);
      },
      nextClick(currentPage) {
        this.currentPageCompany = jobData.slice((currentPage - 1) * 18, currentPage * 18);
      },
      currentChange(currentPage) {
        this.currentPageCompany = jobData.slice((currentPage - 1) * 18, currentPage * 18);
      }
    },
    created() {
      this.currentPageCompany = jobData.slice(0,18);
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    .pagination {
      display: flex;
      justify-content: center;
    }
  }
</style>
