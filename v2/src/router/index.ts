import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/',
    redirect:"/home",
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,  

    children:[{
      path: 'radio',
      name: 'Radio',
      component: () => import(/* webpackChunkName: "about" */ '../views/Radio.vue'),
    },{
      path: 'checkbox',
      name: 'Checkbox',
      component: () => import(/* webpackChunkName: "about" */ '../views/Checkbox.vue'),
    }],
  }
]

const router = new VueRouter({
  routes
})

export default router
