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

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/work-bench',
    name: 'WorkBench',
    component: WorkBench
  },
  {
    path: '/course-construct',
    name: 'CourseConstruct',
    component: CourseConstruct
  },
  {
    path: '/score-enquiry',
    name: 'ScoreEnquiry',
    component: ScoreEnquiry
  },
  {
    path: '/user-manage',
    name: 'UserManage',
    component: UserManage
  },
  {
    path: '/ability-degree',
    name: 'AbilityDegree',
    component: AbilityDegree
  },
  {
    path: '/ability-analysis',
    name: 'AbilityAnalysis',
    component: AbilityAnalysis
  },
  {
    path: '/personal-resume',
    name: 'PersonalResume',
    component: PersonalResume
  },
  {
    path: '/graduates-direction',
    name: 'GraduatesDirection',
    component: GraduatesDirection
  },
  {
    path: '/employ-recommend',
    name: 'EmployRecommend',
    component: EmployRecommend
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
