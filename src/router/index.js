import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/login/Login"
import Home from '@/views/home/Home.vue'
import UserManage from "@/views/system/userManage/UserManage";

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
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/user-manage',
    name: 'UserManage',
    component: UserManage
  }
]

const router = new VueRouter({
  routes
})

export default router
