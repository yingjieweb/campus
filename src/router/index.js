import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

import Login from "@/views/login/Login"
import WorkBench from '@/views/workBench/WorkBench.vue'
import UserManage from "@/views/systemSetting/userManage/UserManage"
import CourseConstruct from "@/views/courseConstruct/CourseConstruct"
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.isLogin) {
    next({name: 'Login'})
    Vue.prototype.$message({message: '如要手动执行路由跳转，需先登录用户信息！', type: 'error'})
  } else {
    next()
  }

  if (to.name === 'Login') {
    store.commit('changeNavShowState', false)
  }
  if (from.name === 'Login' && to.name !== 'Login') {
    store.commit('changeNavShowState', true)
  }
})

export default router
