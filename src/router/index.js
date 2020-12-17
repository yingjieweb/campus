import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

import Login from "@/views/login/Login"
import WorkBench from '@/views/workBench/WorkBench.vue'
import UserManage from "@/views/systemSetting/userManage/UserManage"
import CourseConstruct from "@/views/courseConstruct/CourseConstruct"
import ScoreEnquiry from "@/views/dataCenter/ScoreEnquiry"
import AbilityDegree from "@/views/formativeEvaluation/abilityDegree/AbilityDegree"
import AbilityAnalysis from "@/views/formativeEvaluation/abilityAnalysis/AbilityAnalysis"
import PersonalResume from "@/views/employRecommend/personalResume/PersonalResume"
import GraduatesDirection from "@/views/employRecommend/graduatesDirection/GraduatesDirection"
import EmployRecommend from "@/views/employRecommend/employRecommend/EmployRecommend"
import Forbidden from  "@/views/statusCode/403.vue"
import NotFound from "@/views/statusCode/404.vue"

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
    path: '/work-bench',
    name: 'WorkBench',
    component: WorkBench,
    meta: { title: '系统首页' }
  },
  {
    path: '/course-construct',
    name: 'CourseConstruct',
    component: CourseConstruct,
    meta: { title: '课程建设' }
  },
  {
    path: '/score-enquiry',
    name: 'ScoreEnquiry',
    component: ScoreEnquiry,
    meta: { title: '成绩查询' }
  },
  {
    path: '/user-manage',
    name: 'UserManage',
    component: UserManage,
    meta: { title: '用户管理' }
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
    meta: { title: '个人信息及简历' }
  },
  {
    path: '/graduates-direction',
    name: 'GraduatesDirection',
    component: GraduatesDirection,
    meta: { title: '往届毕业生去向' }
  },
  {
    path: '/employ-recommend',
    name: 'EmployRecommend',
    component: EmployRecommend,
    meta: { title: '就业岗位去向' }
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
