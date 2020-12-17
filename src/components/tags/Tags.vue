<template>
  <div class="container" v-if="showTags">
    <ul class="tags">
      <li class="tagsItem" v-for="(item, index) in tagsList" :key="item.title">
        <router-link :to="item.path" class="tags-li-title">{{item.title}} </router-link>
        <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
      </li>
    </ul>
  </div>
</template>

<script lang="js">
  export default {
    name: "Tags",
    data() {
      return {
        tagsList: []
      }
    },
    methods: {
      setTags(route) {
        const isExist = this.tagsList.some(item => {
          return item.path === route.fullPath
        })
        if (!isExist) {
          if (this.tagsList.length >= 8) {
            this.tagsList.shift()
          }
          this.tagsList.push({
            title: route.meta.title,
            path: route.fullPath
          })
        }
      },
      closeTags() {
      }
    },
    computed: {
      showTags() {
        return this.tagsList.length > 0
      }
    },
    watch: {
      $route(newValue, oldValue) {
        this.setTags(newValue)
        console.log(111)
      }
    },
    created() {
      this.setTags(this.$route)
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    display: flex;
    margin: 0 3px;

    .tagsItem {
      display: inline-block;
      border-radius: 4px;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      padding: 2px 4px;

      &:hover {
        cursor: pointer;
        background-color: #C0C4CC;
      }
    }
  }
</style>
