import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import home from "./home"
import found from "./found"
import mine from "./mine"
import ticket from "./ticket"
import MovieDetail from "./moviedetail"
import actor from "./actor"
import help from "./help"
import money from "./money"
import login from "./login"
import infor from "./infor"
import activity from "./activity"
import mall from "./mall"
import topic from "./topic"
import car from "./car"
import moviedelit from "./moviedelit"

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    home,found,mine,ticket,MovieDetail,actor,help,money,login,infor,activity,mall,topic,car,moviedelit,
    {path:"/notfound",component:()=>import("@/views/Notfound")},
    {path:"*",redirect:"/notfound"}
  ]
})
