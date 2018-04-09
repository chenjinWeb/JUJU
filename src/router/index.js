import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index.vue"

Vue.use(Router)

const index = [
  {
    path: '/index',
    name: 'index',
    component: Index
  }
]

const routes = [
  {
    path:"*",
    redirect:"/index",
    component:Index
  },
  {
    path:"/",
    redirect:"/index",
    component:Index
  },
  ...index
]


export default new Router({
  routes,
  mode:"history"
})
