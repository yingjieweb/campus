<template>
  <Layout>
    <Block title="往届毕业生去向">
      <div slot="content" class="container">
        <div class="left"></div>
        <div class="mid">
          <ChinaMap></ChinaMap>
        </div>
        <div class="right"></div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="js">
  import ChinaMap from "@/components/charts/ChinaMap"

  export default {
    name: "GraduatesDirection",
    components: {
      ChinaMap
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 750px;
    display: flex;

    > .left {
      flex: 2;
      border: 1px solid red;
    }

    > .mid {
      flex: 6;
      border: 1px solid red;
    }

    > .right {
      flex: 2;
      border: 1px solid red;
    }
  }
</style>
