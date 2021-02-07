import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: Home,
    meta: {
      title: 'CNKI百行知识创新服务平台'
    }
  },
  {
    path: '/protocol',
    name: 'protocol',
    component: () => import( /* webpackChunkName: "about" */ '../views/RegiProtocol.vue'),
    meta: {
      title: '中国知网使用协议 & 中国知网隐私政策'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( /* webpackChunkName: "about" */ '../views/ContactUs.vue'),
    meta: {
      title: '中国知网-CNKI汇智平台_知识管理_团队协作_知识管理专家'
    }
  },
  {
    path: '/success',
    name: 'success',
    component: () => import( /* webpackChunkName: "about" */ '../views/Success.vue'),
    meta: {
      title: '登录成功'
    }
  },
  {
    path: '/offline',
    name: 'offline',
    component: () => import( /* webpackChunkName: "about" */ '../views/Offline.vue'),
    meta: {
      title: '消息提示'
    }
  },
]

const router = new VueRouter({
  routes
})

export default router