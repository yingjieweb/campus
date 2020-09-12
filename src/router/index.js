import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/login/Login"
import WorkBench from '@/views/workBench/WorkBench.vue'
import UserManage from "@/views/systemSetting/userManage/UserManage";
import CourseConstruct from "@/views/courseConstruct/CourseConstruct"
import FormativeEvaluation from "@/views/formativeEvaluation/FormativeEvaluation"
import EmployRecommend from "@/views/employRecommend/EmployRecommend"

Vue.use(VueRouter)

const routes = [
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
    path: '/formative-evaluation',
    name: 'FormativeEvaluation',
    component: FormativeEvaluation
  },
  {
    path: '/employ-recommend',
    name: 'EmployRecommend',
    component: EmployRecommend
  }
]

const router = new VueRouter({
  routes
})

export default router
