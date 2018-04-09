import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index.vue"
import Word from "../pages/word.vue"

Vue.use(Router)

const index = [
  {
    path: '/index',
    name: 'index',
    component: Index
  }
]

const word=[
  {
    path:"/word",
    name:"word",
    component:Word
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
  ...index,
  ...word
]


export default new Router({
  routes,
  mode:"history"
})
