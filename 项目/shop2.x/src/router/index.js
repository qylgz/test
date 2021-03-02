import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../components/home/Home.vue')
const Login = () => import('../components/login/Login.vue')
const Welcome = () => import('../components/home/Welcome.vue')
const User = () => import('../components/user/User.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: User
      }
    ]
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
})

// 路由拦截，登陆判断
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const tokenStr = window.sessionStorage.getItem("tekon")
    if (!tokenStr) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
