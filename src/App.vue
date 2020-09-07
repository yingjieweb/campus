<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/helper.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
