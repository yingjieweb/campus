<template>
  <div class="container">
    <div style="display: flex;">
      <Block title="培养方案 - 上传列表" style="flex: 1;">
        <div slot="content">
          <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  border>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="资源名称"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
            <el-table-column prop="operate" label="操作" show-overflow-tooltip></el-table-column>
          </el-table>
        </div>
      </Block>

      <Block title="培养方案 - 分发列表" style="flex: 1;">
        <div slot="content">
          <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  border>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="sourceName" label="资源名称"></el-table-column>
            <el-table-column prop="teacherName" label="教师性名"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
            <el-table-column prop="operate" label="操作" show-overflow-tooltip></el-table-column>
          </el-table>
        </div>
      </Block>
    </div>

    <Block title="审核列表">
      <div slot="content">
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                border>
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="sourceName" label="姓名"></el-table-column>
          <el-table-column prop="sourceName" label="登录名"></el-table-column>
          <el-table-column prop="teacherName" label="课程目标评价报告"></el-table-column>
          <el-table-column prop="state" label="课程目标达成度"></el-table-column>
          <el-table-column prop="operate" label="操作" show-overflow-tooltip></el-table-column>
        </el-table>
      </div>
    </Block>
  </div>
</template>

<script>
  export default {
    name: 'WorkBench',
    data() {
      return {
        tableData: [{
          name: '教学大纲',
          state: '未提交',
          operate: '待上传'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
