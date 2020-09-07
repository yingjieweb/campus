<template>
  <div class="search">
    <el-input class="search" :placeholder="placeholder" v-model="queryString"></el-input>
    <el-button type="primary" size="small" plain @click="$emit('search', {'queryString': queryString})">搜索</el-button>
  </div>
</template>

<script>
  export default {
    name: "Search",
    props: {
      placeholder: {
        type: String,
        default: ''
      }
    },
    data(){
      return {
        queryString: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    width: 180px;
    margin-right: 10px;
  }
</style>
