import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Jc from '@/components/JC'
import Login from '@/components/Login'
import User from '@/components/User'
import Product from '@/components/Product'
import Buycar from '@/components/Buycar'
import Member_Address from '@/components/Member_Address'
import Car_Two from '@/components/Car_Two'
import Car_three from '@/components/Car_three'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Jc',
      name: 'Jc',
      component: Jc
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Buycar',
      name: 'Buycar',
      component: Buycar
    },
    {
      path: '/Member_Address',
      name: 'Member_Address',
      component: Member_Address
    },
    {
      path: '/Car_Two',
      name: 'Car_Two',
      component: Car_Two
    },

    {
      path: '/Car_three',
      name: 'Car_three',
      component: Car_three
    },



  ]
})
