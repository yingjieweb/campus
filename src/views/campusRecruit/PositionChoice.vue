<template>
  <div class="container">
    <div class="position-sample" v-for="item in 7">
      <span class="title">技术</span>
      <span class="position-behalf">Java</span>
      <span class="position-behalf">PHP</span>
      <span class="position-behalf">区块链</span>
      <span class="arrow">></span>
      <div class="position-details">
        这就是一些items
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "PositionChoice"
  }
</script>

<style lang="scss" scoped>
  .container {
    .position-sample {
      height: 50px;
      font-size: 18px;
      line-height: 18px;
      font-weight: 500;
      padding-left: 15px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .position-behalf {
        cursor: pointer;

        &:hover {
          color: #55CBCA;
          border-bottom: 1px solid #55CBCA;
        }
      }

      .position-details {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        border: 1px solid red;
        display: none;
        background-color: #fff;
      }

      &:hover {
        box-shadow: 0 0 4px 1px rgba(0 0 0 / 9%);
        .position-details {
          display: block;
        }
      }
    }
  }
</style>
