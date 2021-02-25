<template>
  <Block title="职位搜索">
    <div slot="content">
      <div class="search">
        <input type="text" placeholder="搜索职位、公司、地点">
        <button>搜索</button>
      </div>

      <div class="condition">
        <div class="left">
          <div class="position">工作地点</div>
          <div class="experience">工作经验</div>
          <div class="degree">学历要求</div>
        </div>
        <div class="right">
          <div class="status">工作地点</div>
          <div class="scale">工作经验</div>
          <div class="degree">学历要求</div>
        </div>
      </div>

      <div class="results">
        <PositionList></PositionList>
      </div>

      <div class="pagination">
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
      </div>
    </div>
  </Block>
</template>


<script lang="js">
  import PositionList from "@/views/positionSearch/PositionList"

  export default {
    name: "PositionSearch",
    components: {
      PositionList
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

  .condition {
    display: flex;
    margin-bottom: 20px;

    .left {
      width: 50%;
      border: 1px solid red;
    }

    .right {
      width: 50%;
      border: 1px solid red;
    }
  }

  .results {
    height: 580px;
    border: 1px solid red;
  }

  .pagination {
    display: flex;
    justify-content: center;
  }
</style>
