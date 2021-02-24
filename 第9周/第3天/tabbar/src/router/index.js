import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const ShopCart = () => import('../views/shopcart/ShopCart')

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/shopCart',
      component: ShopCart
    }
  ]
})
