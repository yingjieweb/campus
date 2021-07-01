<template>
  <Block title="个人能力达成度">
    <div slot="content" class="container">
      <div class="left">
        <div class="indexOptions">
          <div class="index">
            <el-form ref="form" :model="form" label-width="140px">
              <el-form-item label="学科基础课平均成绩">
                <el-select v-model="form.basicAverageScore">
                  <el-option label="90-100" value="90-100"></el-option>
                  <el-option label="80-90" value="80-90"></el-option>
                  <el-option label="70-80" value="70-80"></el-option>
                  <el-option label="60-70" value="60-70"></el-option>
                  <el-option label="<60" value="<60"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="专业课平均成绩">
                <el-select v-model="form.majorAverageScore">
                  <el-option label="90-100" value="90-100"></el-option>
                  <el-option label="80-90" value="80-90"></el-option>
                  <el-option label="70-80" value="70-80"></el-option>
                  <el-option label="60-70" value="60-70"></el-option>
                  <el-option label="<60" value="<60"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="毕业设计评级">
                <el-select v-model="form.graduationDesignRank">
                  <el-option label="优" value="优"></el-option>
                  <el-option label="良" value="良"></el-option>
                  <el-option label="中" value="中"></el-option>
                  <el-option label="及格" value="及格"></el-option>
                  <el-option label="不及格" value="不及格"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="毕业论文评级">
                <el-select v-model="form.graduationPaperRank">
                  <el-option label="优" value="优"></el-option>
                  <el-option label="良" value="良"></el-option>
                  <el-option label="中" value="中"></el-option>
                  <el-option label="差" value="差"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="通识课平均成绩">
                <el-select v-model="form.commenSenceAverageScore">
                  <el-option label="90-100" value="90-100"></el-option>
                  <el-option label="80-90" value="80-90"></el-option>
                  <el-option label="70-80" value="70-80"></el-option>
                  <el-option label="60-70" value="60-70"></el-option>
                  <el-option label="<60" value="<60"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="index">
            <el-form ref="form" :model="form" label-width="140px">
              <el-form-item label="四六级成绩">
                <el-select v-model="form.CETScoreRank">
                  <el-option label=">550" value=">550"></el-option>
                  <el-option label="425-550" value="425-550"></el-option>
                  <el-option label="<425" value="<425"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="每周阅读核心文献量">
                <el-select v-model="form.PaperCount">
                  <el-option label=">=3" value=">=3"></el-option>
                  <el-option label="2" value="2"></el-option>
                  <el-option label="1" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="个人技能掌握">
                <el-select v-model="form.personalSkills">
                  <el-option label="熟练运用" value="熟练运用"></el-option>
                  <el-option label="掌握" value="掌握"></el-option>
                  <el-option label="了解" value="了解"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="实践类课程平均成绩">
                <el-select v-model="form.practiceAverageScore">
                  <el-option label="90-100" value="90-100"></el-option>
                  <el-option label="80-90" value="80-90"></el-option>
                  <el-option label="70-80" value="70-80"></el-option>
                  <el-option label="60-70" value="60-70"></el-option>
                  <el-option label="<60" value="<60"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="实训评级">
                <el-select v-model="form.trainingRank">
                  <el-option label="A" value="A"></el-option>
                  <el-option label="B" value="B"></el-option>
                  <el-option label="C" value="C"></el-option>
                  <el-option label="D" value="D"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="index">
            <el-form ref="form" :model="form" label-width="130px">
              <el-form-item label="创新奖励">
                <el-select v-model="form.innovationAward">
                  <el-option label="国际级" value="国际级"></el-option>
                  <el-option label="国家级" value="国家级"></el-option>
                  <el-option label="省部级" value="省部级"></el-option>
                  <el-option label="校级" value="校级"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="创新成果情况">
                <el-select v-model="form.innovationAchievement">
                  <el-option label="国际级" value="国际级"></el-option>
                  <el-option label="国家级" value="国家级"></el-option>
                  <el-option label="省部级" value="省部级"></el-option>
                  <el-option label="校级" value="校级"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="创新创业教育成绩">
                <el-select v-model="form.innovationEducationScore">
                  <el-option label="90-100" value="90-100"></el-option>
                  <el-option label="80-90" value="80-90"></el-option>
                  <el-option label="70-80" value="70-80"></el-option>
                  <el-option label="60-70" value="60-70"></el-option>
                  <el-option label="<60" value="<60"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="参与项目">
                <el-select v-model="form.participateProjects">
                  <el-option label="国际级" value="国际级"></el-option>
                  <el-option label="国家级" value="国家级"></el-option>
                  <el-option label="省部级" value="省部级"></el-option>
                  <el-option label="校级" value="校级"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="担任职务">
                <el-select v-model="form.position">
                  <el-option label="校级" value="校级"></el-option>
                  <el-option label="院级" value="院级"></el-option>
                  <el-option label="班级" value="班级"></el-option>
                  <el-option label="无" value="无"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="evaluate">
          <el-button type="primary">能力评价</el-button>
        </div>

        <div class="lineChart">
          <LineChart :option="lineOption"></LineChart>
        </div>
      </div>
      <div class="right">
        <div class="radarChart">
          <radarChart :option="radarOption"></radarChart>
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
        lineOption: {
          title: {
            text: '个人能力曲线'
          },
          legend: {
            data: ['专业知识能力', '学习能力', '实践能力', '创新能力']
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['第一学年', '第二学年', '第三学年', '第四学年']
          },
          yAxis: [{
            max: 10,
            min: 0,
            type: 'value',
            name: '能力值（分）',
            interval: 2
          }],
          series: [
            {
              name: '专业知识能力',
              type: 'line',
              data: [3.2, 5.2, 7.1, 9.4]
            },
            {
              name: '学习能力',
              type: 'line',
              data: [3.0, 3.2, 7.8, 8.4]
            },
            {
              name: '实践能力',
              type: 'line',
              data: [3.3, 6.2, 8.1, 9.7]
            },
            {
              name: '创新能力',
              type: 'line',
              data: [2.5, 5.6, 7.6, 8.9]
            }
          ]
        },
        radarOption: {
          title: {
            text: '全方位能力分析'
          },
          tooltip: {},
          legend: {
            x: '150px',
            data: ['第一学年', '第二学年', '第三学年', '第四学年']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 20,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: '专业知识能力', max: 10},
              { name: '学习能力', max: 10},
              { name: '实践能力', max: 10},
              { name: '创新能力', max: 10}
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            nameTextStyle: {
              padding: [0, 0, 0, 10]    // 四个数字分别为上右下左与原位置距离
            },
            type: 'radar',
            data: [
              {
                value: [3.2, 3.0, 3.3, 2.5],
                name: '第一学年'
              },
              {
                value: [5.2, 3.2, 6.2, 5.6],
                name: '第二学年'
              },
              {
                value: [7.1, 7.8, 8.1, 7.6],
                name: '第三学年'
              },
              {
                value: [9.4, 8.4, 8.6, 8.9],
                name: '第四学年'
              }
            ]
          }]
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

      .evaluate {
        margin-right: 3px;
        display: flex;
        justify-content: center;

        ::v-deep .el-button {
          width: 20%;
          padding: 6px 20px;
          margin: 2px;
        }
      }

      .lineChart {
        height: 350px;
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
