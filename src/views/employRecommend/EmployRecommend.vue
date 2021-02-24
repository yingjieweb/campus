<template>
  <Block title="应届生就业推荐">
    <div slot="content">
      <div class="search">
        <input type="text" placeholder="搜索职位、公司、地点">
        <button>搜索</button>
      </div>

      <RecommendList :recommend-list="currentPageJobs"></RecommendList>

      <div class="pagination">
        <el-pagination
                background
                layout="prev, pager, next"
                @prev-click="prevClick"
                @next-click="nextClick"
                @current-change="currentChange"
                :total="totalPageCount">
        </el-pagination>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import RecommendList from "./RecommendList.vue";
  import jobData from "../../database/jobData";

  export default {
    name: "EmployRecommend",
    components: {
      RecommendList
    },
    data() {
      return {
        currentPage: 1,
        currentPageJobs: [],
        value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      }
    },
    computed: {
      totalPageCount() {
        return Array.from(jobData).length / 9 * 10;
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      prevClick(currentPage) {
        this.currentPageJobs = jobData.slice((currentPage - 1) * 9, currentPage * 9);
      },
      nextClick(currentPage) {
        this.currentPageJobs = jobData.slice((currentPage - 1) * 9, currentPage * 9);
      },
      currentChange(currentPage) {
        this.currentPageJobs = jobData.slice((currentPage - 1) * 9, currentPage * 9);
      }
    },
    created() {
      this.currentPageJobs = jobData.slice(0,9);
    },
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

  .pagination {
    display: flex;
    justify-content: center;
  }
</style>
