<template>
  <Block title="个人能力达成度">
    <div slot="content" class="container">
      <div class="left">
        <div class="indexOptions">
          <div class="index">
            <el-form ref="form" :model="form" label-width="140px">
              <el-form-item label="学科基础课平均成绩">
                <el-select v-model="form.basicAverageScore">
                  <el-option label="90-100" value="90"></el-option>
                  <el-option label="80-90" value="80"></el-option>
                  <el-option label="70-80" value="70"></el-option>
                  <el-option label="60-70" value="60"></el-option>
                  <el-option label="<60" value="50"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="专业课平均成绩">
                <el-select v-model="form.majorAverageScore">
                  <el-option label="90-100" value="90"></el-option>
                  <el-option label="80-90" value="80"></el-option>
                  <el-option label="70-80" value="70"></el-option>
                  <el-option label="60-70" value="60"></el-option>
                  <el-option label="<60" value="50"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="毕业设计评级">
                <el-select v-model="form.graduationDesignRank">
                  <el-option label="优" value="90"></el-option>
                  <el-option label="良" value="80"></el-option>
                  <el-option label="中" value="70"></el-option>
                  <el-option label="及格" value="60"></el-option>
                  <el-option label="不及格" value="50"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="毕业论文评级">
                <el-select v-model="form.graduationPaperRank">
                  <el-option label="优" value="90"></el-option>
                  <el-option label="良" value="80"></el-option>
                  <el-option label="中" value="70"></el-option>
                  <el-option label="差" value="60"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="通识课平均成绩">
                <el-select v-model="form.commenSenceAverageScore">
                  <el-option label="90-100" value="90"></el-option>
                  <el-option label="80-90" value="80"></el-option>
                  <el-option label="70-80" value="70"></el-option>
                  <el-option label="60-70" value="60"></el-option>
                  <el-option label="<60" value="50"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="index">
            <el-form ref="form" :model="form" label-width="140px">
              <el-form-item label="四六级成绩">
                <el-select v-model="form.CETScoreRank">
                  <el-option label=">550" value="shanghai"></el-option>
                  <el-option label="425-550" value="beijing"></el-option>
                  <el-option label="<425" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="每周阅读核心文献量">
                <el-select v-model="form.PaperCount">
                  <el-option label=">=3" value="shanghai"></el-option>
                  <el-option label="2" value="shanghai"></el-option>
                  <el-option label="1" value="shanghai"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="个人技能掌握">
                <el-select v-model="form.personalSkills">
                  <el-option label="熟练运用" value="shanghai"></el-option>
                  <el-option label="掌握" value="beijing"></el-option>
                  <el-option label="了解" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="实践类课程平均成绩">
                <el-select v-model="form.practiceAverageScore">
                  <el-option label="90-100" value="90"></el-option>
                  <el-option label="80-90" value="80"></el-option>
                  <el-option label="70-80" value="70"></el-option>
                  <el-option label="60-70" value="60"></el-option>
                  <el-option label="<60" value="50"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="实训评级">
                <el-select v-model="form.trainingRank">
                  <el-option label="A" value="shanghai"></el-option>
                  <el-option label="B" value="shanghai"></el-option>
                  <el-option label="C" value="shanghai"></el-option>
                  <el-option label="D" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="index">
            <el-form ref="form" :model="form" label-width="130px">
              <el-form-item label="创新奖励">
                <el-select v-model="form.innovationAward">
                  <el-option label="国际级" value="shanghai"></el-option>
                  <el-option label="国家级" value="beijing"></el-option>
                  <el-option label="省部级" value="beijing"></el-option>
                  <el-option label="校级" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="创新成果情况">
                <el-select v-model="form.innovationAchievement">
                  <el-option label="国际级" value="shanghai"></el-option>
                  <el-option label="国家级" value="beijing"></el-option>
                  <el-option label="省部级" value="beijing"></el-option>
                  <el-option label="校级" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="创新创业教育成绩">
                <el-select v-model="form.innovationEducationScore">
                  <el-option label="90-100" value="90"></el-option>
                  <el-option label="80-90" value="80"></el-option>
                  <el-option label="70-80" value="70"></el-option>
                  <el-option label="60-70" value="60"></el-option>
                  <el-option label="<60" value="50"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="参与项目">
                <el-select v-model="form.participateProjects">
                  <el-option label="国际级" value="shanghai"></el-option>
                  <el-option label="国家级" value="beijing"></el-option>
                  <el-option label="省部级" value="beijing"></el-option>
                  <el-option label="校级" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="担任职务">
                <el-select v-model="form.position">
                  <el-option label="校级" value="beijing"></el-option>
                  <el-option label="院级" value="beijing"></el-option>
                  <el-option label="班级" value="beijing"></el-option>
                  <el-option label="无" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="lineChart">
          <LineChart :option="option"></LineChart>
        </div>
      </div>
      <div class="right">
        <div class="radarChart">
          <radarChart></radarChart>
        </div>
      </div>
    </div>
  </Block>
</template>

<script lang="js">
  import LineChart from "@/components/charts/LineChart"
  import RadarChart from "@/components/charts/RadarChart"

  export default {
    name: "AbilityDegree",
    components: {
      LineChart,
      RadarChart
    },
    data() {
      return {
        option: {
          title: {
            text: '个人能力曲线'
          },
          legend: {
            data: ['专业能力', '学习能力', '协作能力', '管理能力']
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['第一学年', '第二学年', '第三学年', '第四学年']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '专业能力',
              type: 'line',
              stack: '总量',
              data: [162, 182, 191, 234]
            },
            {
              name: '学习能力',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154]
            },
            {
              name: '协作能力',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334]
            },
            {
              name: '管理能力',
              type: 'line',
              stack: '总量',
              data: [225, 486, 301, 534]
            }
          ]
        },
        form: {
          basicAverageScore: '',
          majorAverageScore: '',
          graduationDesignRank: '',
          graduationPaperRank: '',
          commenSenceAverageScore: '',
          CETScoreRank: '',
          PaperCount: '',
          personalSkills: '',
          practiceAverageScore: '',
          trainingRank: '',
          innovationAward: '',
          innovationAchievement: '',
          innovationEducationScore: '',
          participateProjects: '',
          position: '',
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;

    .left {
      flex: 7;

      .indexOptions {
        display: flex;

        .index {
          flex: 1;
          margin-right: 3px;
          padding: 5px 5px 0 0;
          border: 1px solid gainsboro;
        }
      }

      .lineChart {
        flex: 1;
        height: 350px;
        margin-top: 5px;
        margin-right: 3px;
        border: 1px solid gainsboro;
      }
    }

    .right {
      flex: 4;

      .radarChart {
        height: 100%;
        border: 1px solid gainsboro;
      }
    }
  }
</style>
