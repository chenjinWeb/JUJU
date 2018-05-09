import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index.vue"
import Word from "../pages/word.vue"
import Mine from "../pages/mine.vue"
import List from "../pages/list.vue"
import Type from "../pages/type.vue"

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
const mine=[
  {
    path:"/mine",
    name:'mine',
    component:Mine,
    children:[

    ]
  },
  {
    path:'/type',
    name:'type',
    component:Type,
    children:[
      {
        path:'list',
        name:'list',
        component:List
      },
    ]
  },
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
  ...word,
  ...mine
]


export default new Router({
  routes,
  mode:"history"
})
