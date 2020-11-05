<template>
  <Layout>
    <Block title="个人能力达成度">
      <div slot="content" class="container">
        <div class="scoreInfo">
          <ScoreEnquiry></ScoreEnquiry>
        </div>

        <div class="indexInfo">
          <div class="indexTable">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="ability" label="能力（单项满分为10分）" width="200"></el-table-column>
              <el-table-column prop="classRank" label="班级内排名" width="180"></el-table-column>
              <el-table-column prop="majorRank" label="专业排名" width="180"></el-table-column>
              <el-table-column prop="gradeRank" label="年级内排名"></el-table-column>
            </el-table>
          </div>
          <div class="indexChart">
            <div class="lineChart">
              <LineChart></LineChart>
            </div>
            <div class="pieChart">
              <PieChart></PieChart>
            </div>
          </div>
        </div>
      </div>
    </Block>
  </Layout>
</template>

<script lang="js">
  import PieChart from "@/components/charts/PieChart"
  import LineChart from "@/components/charts/LineChart"
  import RadarChart from "@/components/charts/RadarChart"
  import ScoreEnquiry from "@/views/formativeEvaluation/abilityDegree/childComps/ScoreEnquiry"

  export default {
    name: "AbilityDegree",
    components: {
      PieChart,
      LineChart,
      RadarChart,
      ScoreEnquiry
    },
    data(){
      return {
        tableData: [{
          ability: '专业能力',
          classRank: '05-04',
          majorRank: '56',
          gradeRank: '517'
        }, {
          ability: '学习能力',
          classRank: '05-04',
          majorRank: '16',
          gradeRank: '569'
        }, {
          ability: '协作能力',
          classRank: '05-01',
          majorRank: '55',
          gradeRank: '519'
        }, {
          ability: '管理能力',
          classRank: '05-03',
          majorRank: '48',
          gradeRank: '116'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display:flex;
    justify-content: space-around;

    .scoreInfo {
      flex: 1;
    }
    .indexInfo {
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 5px;

      .indexTable {
        margin-bottom: 5px;
      }

      .indexChart {
        display: flex;

        .lineChart, .pieChart {
          flex: 1;
          width: 500px;
          height: 400px;
          border: 1px solid gainsboro;
        }
        .lineChart {flex: 3;}
        .pieChart {flex: 2; margin-left: 5px;}
      }
    }
  }
</style>
