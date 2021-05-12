import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

import Login from "@/views/login/Login"
import StudentManage from "@/views/systemSetting/studentManage/StudentManage"
import JobsManage from "@/views/systemSetting/jobsManage/JobsManage"
import ScoreEnquiry from "@/views/dataCenter/ScoreEnquiry"
import AbilityDegree from "@/views/formativeEvaluation/abilityDegree/AbilityDegree"
import AbilityAnalysis from "@/views/formativeEvaluation/abilityAnalysis/AbilityAnalysis"
import PersonalResume from "@/views/personalResume/PersonalResume"
import PositionSearch from "@/views/positionSearch/PositionSearch"
import EmployRecommend from "@/views/employRecommend/EmployRecommend"
import CampusRecruit from "@/views/campusRecruit/CampusRecruit"
import HotCompany from "@/views/hotCompany/HotCompany"
import CompanyDetails from "@/views/companyDetails/CompanyDetails"
import PositionDetails from "@/views/positionDetails/PositionDetails"
import GraduatesDirection from "@/views/graduatesDirection/GraduatesDirection"
import Forbidden from  "@/views/statusCode/403.vue"
import NotFound from "@/views/statusCode/404.vue"

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: '登录' }
  },
  {
    path: '/score-enquiry',
    name: 'ScoreEnquiry',
    component: ScoreEnquiry,
    meta: { title: '成绩查询' }
  },
  {
    path: '/student-manage',
    name: 'StudentManage',
    component: StudentManage,
    meta: { title: '学生管理' }
  },
  {
    path: '/jobs-manage',
    name: 'JobsManage',
    component: JobsManage,
    meta: { title: '岗位管理' }
  },
  {
    path: '/ability-degree',
    name: 'AbilityDegree',
    component: AbilityDegree,
    meta: { title: '个人能力达成度' }
  },
  {
    path: '/ability-analysis',
    name: 'AbilityAnalysis',
    component: AbilityAnalysis,
    meta: { title: '能力对比分析' }
  },
  {
    path: '/personal-resume',
    name: 'PersonalResume',
    component: PersonalResume,
    meta: { title: '我的简历' }
  },
  {
    path: '/position-search',
    name: 'PositionSearch',
    component: PositionSearch,
    meta: { title: '岗位搜索' }
  },
  {
    path: '/campus-recruit',
    name: 'CampusRecruit',
    component: CampusRecruit,
    meta: { title: '校园招聘' }
  },
  {
    path: '/hot-company',
    name: 'HotCompany',
    component: HotCompany,
    meta: { title: '热门公司' }
  },
  {
    path: '/employ-recommend',
    name: 'EmployRecommend',
    component: EmployRecommend,
    meta: { title: '就业岗位推荐' }
  },
  {
    path: '/company-details',
    name: 'CompanyDetails',
    component: CompanyDetails,
    meta: { title: '公司详情' }
  },
  {
    path: '/position-details',
    name: 'PositionDetails',
    component: PositionDetails,
    meta: { title: '岗位详情' }
  },
  {
    path: '/graduates-direction',
    name: 'GraduatesDirection',
    component: GraduatesDirection,
    meta: { title: '往届毕业生去向' }
  },
  {
    path: '/403',
    name: 'Forbidden',
    component: Forbidden,
    meta: { title: 'Forbidden' }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'NotFound' }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const asyncRoutes = []

const router = new VueRouter({
  routes: constantRoutes
})

// 路由跳转 -> 用户登录信息校验
router.beforeEach((to, from, next) => {
  // console.log(store.state.isLogin)  //false
  Vue.prototype.$nextTick(() => { // 解决刷新页面 store.state.isLogin 还没及时从 localStorage 中更新出来的问题
    // console.log(store.state.isLogin)  // true
    if (to.name !== 'Login' && !store.state.isLogin) {  // 即将要跳转的页面不是登录页，并且用户没有登录
      next({name: 'Login'})
      Vue.prototype.$message({message: '如要手动执行路由跳转，需先登录用户信息！', type: 'error'})
    } else {
      next()
    }
  })
})

export default router
