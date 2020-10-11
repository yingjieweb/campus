import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/login/Login"
import WorkBench from '@/views/workBench/WorkBench.vue'
import UserManage from "@/views/systemSetting/userManage/UserManage";
import CourseConstruct from "@/views/courseConstruct/CourseConstruct"
import FormativeEvaluation from "@/views/formativeEvaluation/FormativeEvaluation"
import PersonalResume from "@/views/employRecommend/PersonalResume"
import GraduatesDirection from "@/views/employRecommend/GraduatesDirection"
import EmployRecommend from "@/views/employRecommend/EmployRecommend"

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
    path: '/formative-evaluation',
    name: 'FormativeEvaluation',
    component: FormativeEvaluation
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

export default router
