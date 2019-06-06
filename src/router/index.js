import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import home from "./home"
import found from "./found"
import mine from "./mine"
import ticket from "./ticket"
<<<<<<< HEAD
import MovieDetail from "./moviedetail"
export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    home,found,mine,ticket,MovieDetail,
    {path:"/notfound",component:()=>import("@/views/Notfound")},
    {path:"*",redirect:"/notfound"}
=======
import actor from "./actor"
export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    home,found,mine,ticket,actor
    // {path:"/notfound",component:()=>import("@/views/Notfound")},
    // {path:"*",redirect:"/notfound"}
>>>>>>> 887bf868cf30d149d7649e8d87422961abd9614e
  ]
})
