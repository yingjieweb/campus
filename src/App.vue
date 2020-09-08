<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created(){
      if (localStorage.getItem('store')){
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem("store"))));
      }
      window.addEventListener('beforeunload', () => {
        localStorage.setItem('store', JSON.stringify(this.$store.state))
      })
    }
  }
</script>

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
