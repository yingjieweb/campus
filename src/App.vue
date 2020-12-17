<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
  import Layout from "@/components/layout/Layout"

  export default {
    name: 'App',
    components: {
      Layout
    },
    created() {
      if (localStorage.getItem('store')) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem("store"))))
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
    display: flex;
  }
</style>
