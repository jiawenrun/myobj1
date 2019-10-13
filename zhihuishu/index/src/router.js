import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Micspe from './views/Micspe.vue'
import Pshar from './views/Pshar.vue'
import Appdown from './views/Appdown.vue'
import ban from './views/ban.vue'
import curriculum from './views/curriculum.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import Sno from './views/Sno.vue'
import SearchBar from './views/SearchBar.vue'
import Self from './views/Self.vue'
import Selfhome from './views/Selfhome.vue'
import Xuanke from './views/Xuanke.vue'
import Findmore from './views/Findmore.vue'
import baoming from './views/baoming.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/baoming',
      name: 'baoming',
      component: baoming
    },
    {
      path: '/SearchBar',
      name: 'SearchBar',
      component: SearchBar
    },
    {
      path: '/Pshar',
      name: 'Pshar',
      component: Pshar
    },
    {
      path: '/Sno',
      name: 'Sno',
      component: Sno
    },
    {
      path: '/Micspe',
      name: 'Micspe',
      component: Micspe
    },
    {
      path: '/Selfhome',
      name: 'Selfhome',
      component: Selfhome
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Xuanke',
      name: 'Xuanke',
      component: Xuanke
    },
    {
      path: '/Appdown',
      name: 'Appdown',
      component: Appdown
    },
    {
      path: '/Findmore',
      name: 'Findmore',
      component: Findmore
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: curriculum
    },
    {
      path: '/ban',
      name: 'ban',
      component: ban
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Self',
      name: 'Self',
      component: Self
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
