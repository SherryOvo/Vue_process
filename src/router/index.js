import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Index from '../views/Index.vue'
import BusinessList from '../views/BusinessList.vue'
import BusinessInfo from '../views/BusinessInfo.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/BusinessList',
    name: 'BusinessList',
    component: BusinessList
  },
  {
    path: '/BusinessInfo',
    name: 'BusinessInfo',
    component: BusinessInfo
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

// 解决重复路由报异常问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location){
	return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
