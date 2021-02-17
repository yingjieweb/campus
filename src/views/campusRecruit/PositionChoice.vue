<template>
  <div class="container">
    <div class="position-type"
         v-for="item in 7"
         @mouseenter="focusPositionChoice"
         @mouseleave="unfocusPositionChoice">
      <span class="title">技术</span>
      <span class="type-behalf">Java</span>
      <span class="type-behalf">PHP</span>
      <span class="type-behalf">区块链</span>
      <span class="arrow">></span>
      <div class="type-items" :class="{'visible': typeItemsVisible}">
        这就是一些items
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "PositionChoice",
    data() {
      return {
        typeItemsVisible: false
      }
    },
    methods: {
      focusPositionChoice() {
        this.focusPositionChoice = true
      },
      unfocusPositionChoice() {
        this.focusPositionChoice = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    .position-type {
      height: 50px;
      font-size: 18px;
      line-height: 50px;
      font-weight: 500;
      padding-left: 15px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border: 1px solid red;

      .type-behalf, .arrow {
        cursor: pointer;
      }

      .type-items {
        position: absolute;
        display: none;
      }

      .visible {
        display: block;
      }
    }
  }
</style>
