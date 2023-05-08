import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/Index.vue'

Vue.use(VueRouter)




const routes = [
  {
    path: '/messge',
    name: '留言板',
    component: () => import('../views/Lyb.vue'),
  },
    {
      path: '/personal',
      name: '个人主页',
      component: () => import('../views/PerSonal.vue'),
      redirect:'/personal/center',    
      children: [{
        path: 'center',
        name:'个人中心',
        component: () => import('../views/CenTer.vue'),
      },
      {
        path: 'order',
        name:'订单管理',
        component: () => import('../views/OrDer.vue'),
      },
      {
        path: 'contact',
        name:'关于我们',
        component: () => import('../views/ConTact.vue'),
      },
      {
        path: 'changepass',
        name:'修改密码',
        component: () => import('../views/ChangePass.vue'),
      }]
    },
  {
    path: '/tipsdetails',
    name: '详情',
    component: () => import('../views/PetsTipsdetails.vue'),
  },
  {
    path: '/product',
    name: '商品家族',
    component: () => import('../views/splb.vue'),
  },
  {
    path: '/pre',
    name: '预约',
    component: () => import('../views/HosIntro.vue'),
  },
  {
    path: '/login',
    name: '登录',
    meta:{
      UserLogin:true
    },
    component: () => import('../views/LoginRegister.vue'),
  },
  {
    path: '/aboutus',
    name: '关于我们',
    component: () => import('../views/AboutUs.vue'),
  },
  {
    path: '/tips',
    name: '猫狗小知识',
    meta:{
      User:true
    },
    component: () => import('../views/PetsTips.vue'),
  },
  {
    path: '/',
    name: '首页',
    component: index
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
