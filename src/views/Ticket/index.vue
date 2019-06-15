<template>
    <div class="ticket">
        <div class="navbar" :class="{fiexdTop:isfiexd}">
            <span
            v-for="nav in navs"
            :key="nav.id"
            :class="{'active':type === nav.type}"
            @click="type=nav.type"
            >{{nav.title}}</span>
        </div>
        <moviebox :type="type" :class="{fiexdbox:isfiexd}"></moviebox>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import moviebox from "./MovieBox.vue"
import {mapActions} from "vuex"
export default {
    data(){
        return {
            type:"coming",
            isfiexd:false,
            iscrollTop:0,
            navs:[
                {id:1,title:"正在热映",type:"coming"},
                {id:2,title:"即将上映",type:"theater"}
            ],
        }
    },
    beforeRouteLeave(to,from,next){
        this.iscrollTop = document.documentElement.scrollTop;
        next();
    },
    methods:{
        listenScroll(e){
            let iTop= document.documentElement.scrollTop || document.body.scrollTop;
            if(iTop >= 100){
                this.isfiexd = true
            }else{
                this.isfiexd = false
            }
        },
    },
    activated(){
      
        window.addEventListener("scroll",this.listenScroll)
        document.documentElement.scrollTop = this.iscrollTop;
    },
    deactivated(){
     
        window.removeEventListener("scroll",this.listenScroll)
        this.isfiexd = false
    },
    components:{
        Tabbar,moviebox
    }
}
</script>
<style lang="scss" scoped>
    .navbar{
        position: relative;
        height:50px;
        display: flex;
        justify-content:space-around;
        align-items: center;
        z-index: 10;
        background: #fff;
        &.fiexdTop{
            position:fixed;
            top: 0;
            left:0;
            width:100%;
        }
        .active{
            color:orangered;
            transition: all 2s;
            position: relative;
            &:after{
                content:"";
                width:50px;
                height:3px;
                background:orangered;
                position:absolute;
                left:50%;
                margin-left:-25px;
                bottom:-5px;
            }
        }
    }
</style>
