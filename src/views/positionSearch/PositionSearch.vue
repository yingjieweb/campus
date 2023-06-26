<template>
  <Block title="岗位搜索">
    <div slot="content">
      <div class="search">
        <input type="text" v-model="queryString" placeholder="搜索岗位、公司、地点" @keydown.enter="searchJobs">
        <button @click="searchJobs">搜索</button>
      </div>

      <div class="condition">
        <SearchCondition></SearchCondition>
      </div>

      <div class="results">
        <PositionList :job-data-list="currentPageJobs"></PositionList>
        <Blank v-if="!this.jobData.length"></Blank>
      </div>

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
  import SearchCondition from "@/views/positionSearch/SearchCondition"
  import PositionList from "@/views/positionSearch/PositionList"
  import jobData from "@/database/jobData"

  export default {
    name: "PositionSearch",
    components: {
      SearchCondition,
      PositionList
    },
    data() {
      return {
        jobData: jobData,
        queryString: '',
        currentPageJobs: []
      }
    },
    computed: {
      totalPageCount() {
        return Array.from(this.jobData).length / 10 * 10
      }
    },
    methods: {
      searchJobs() {
        if (this.queryString === '') {
          this.$message.error('请输入需要搜索的职位、公司或地点~')
          this.jobData = jobData
          this.currentPageJobs = this.jobData.slice(0, 10)
        } else {
          this.jobData = jobData.filter(item => {
            return item.recruitJob.indexOf(this.queryString) !== -1
          })
          this.getCurrentPageJobs()
        }
      },
      getCurrentPageJobs() {
        this.currentPageJobs = this.jobData.slice(0, 10)
      },
      handleChange(value) {console.log(value);},
      prevClick(currentPage) {
        this.currentPageJobs = this.jobData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      nextClick(currentPage) {
        this.currentPageJobs = this.jobData.slice((currentPage - 1) * 10, currentPage * 10);
      },
      currentChange(currentPage) {
        this.currentPageJobs = this.jobData.slice((currentPage - 1) * 10, currentPage * 10);
      }
    },
    created() {
      this.getCurrentPageJobs()
      if (this.$route.query.queryString) {
        this.queryString = this.$route.query.queryString
        this.searchJobs()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    justify-content: center;
    margin-bottom: 6px;

    input {
      width: 770px;
      height: 42px;
      line-height: 46px;
      padding: 12px 8px 12px 16px;
      font-size: 16px;
      border: 1px solid #e8e8e8;
      border-right: 0;
      vertical-align: top;
      outline: none;
      color: #333;
    }

    button {
      width: 140px;
      height: 42px;
      line-height: 46px;
      font-size: 18px;
      border: 1px solid #00b38a;
      background: #00b38a;
      color: #fff;
      cursor: pointer;
    }
  }

  .condition {margin-bottom: 10px;}

  .results {min-height: 560px;}

  .pagination {
    margin-top: 5px;
    display: flex;
    justify-content: center;
  }
</style>
