<template>
    <div class="app-header" v-if="isShow">
       <div class="left">
            <i :class="['fa', 'fa-'+icon]"></i>
           <span class="title">{{title}}</span>
       </div>
       <div class="right">
           <i class="fa fa-clock-o"></i>
            <i class="fa fa-search"></i>
       </div>
    </div>
</template>
<style lang="scss" scoped>
   .app-header{
        width:3.75rem;
        height:50px;
        line-height: 50px;
        color:#000;
        background:#fff;
        display: flex;
        justify-content: space-between;
        padding:0 .2rem;
        opacity: 0.6;
        position: fixed;
        z-index:10;
         i{
            font-size: 1.6em;
            padding-right:0.1rem;
        }
        .title{
            margin-left: 100px;
            font-size:16px;
            margin-top:-50px;
        }
        .right{
            i{
                width: 24px;
                height: 24px;
                font-size:24px;
                margin-right:10px;
                -webkit-text-stroke: 0.1px gray;
                color: #000;
            }
        }
    }
</style>
<script>
import router from "@/router"
export default{
data(){
    return{
        title:"咪咕首页",
        icon:"home",
        isShow:true
    }
},
 watch:{
    $route(val){
         switch (val.name) {
                case "home":
                    this.title = "咪咕首页"
                    this.icon="home"
                    this.isShow = true
                    break;
                case "ticket":
                    this.title = "购票"
                    this.icon="ticket"
                    this.isShow = true
                    break;
                case "found":
                    this.title = "发现"
                    this.icon="ravelry"
                    this.isShow = true
                    break;
                case "mine":
                    this.title = "我的"
                    this.icon="cog"
                    this.isShow = true
                    break;
                default:
                    this.isShow = false
                    break;
         }
    }
},
created(){  
    router.beforeEach((to,from,next)=>{
         switch (to.name) {
                case "home":
                    this.title = "咪咕首页"
                    this.icon="home"
                    this.isShow = true
                    break;
                case "ticket":
                    this.title = "购票"
                    this.icon="ticket"
                    this.isShow = true
                    break;
                case "found":
                    this.title = "发现"
                    this.icon="ravelry"
                    this.isShow = true
                    break;
                case "mine":
                    this.title = "我的"
                    this.icon="cog"
                    this.isShow = true
                    break;
                default:
                    this.isShow = false
                    break;
            }
        next()
    })
    }
}
</script>
