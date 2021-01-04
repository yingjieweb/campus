<template>
  <div class="container" v-if="showTags">
    <ul class="tags">
      <li class="tagsItem" v-for="(item, index) in tagsList" :key="item.title" :class="{'active': isActive(item.path)}">
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
      isActive(path) {
        return path === this.$route.fullPath;
      },
      setTags(route) {
        if (!route.name) return // 清除重定向的路由信息
        const isExist = this.tagsList.some(item => {
          return item.path === route.fullPath
        })
        if (!isExist) {
          if (this.tagsList.length >= 10) {
            this.tagsList.shift()
          }
          this.tagsList.push({
            title: route.meta.title,
            path: route.fullPath
          })
        }
      },
      closeTags(index) {
        const delItem = this.tagsList.splice(index, 1)[0];
        const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
        if (item) {
          delItem.path === this.$route.fullPath && this.$router.push(item.path);
        }else{
          this.tagsList = [{
            path: "/work-bench",
            title: "系统首页"
          }]
        }
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
    margin: 2px 3px 0 2px;

    .tagsItem {
      color: dimgrey;
      padding: 2px 4px;
      margin: 0 2px;
      font-size: 16px;
      line-height: 16px;
      white-space: nowrap;
      border: 1px solid #d3d4d6;
      border-radius: 4px;
      background-color: #fff;
      cursor: pointer;

      &:not(.active):hover {
        background: #f8f8f8;
      }
    }

    .active {
      border: 1px solid #b3d8ff;
      background-color: #ecf5ff;
      color: #409EFF;
    }
  }
</style>
