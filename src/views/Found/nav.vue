<template>
    <div class="nav">
        <div class="content">
            <router-link 
                tag="div"
                to=""
                class="container" 
                v-for="nav in navs"
                :key="nav.enter_id"
                >
                <i :class="['fa','fa-'+nav.icon]"><img :src="'http://movie.miguvideo.com/publish/i_www'+nav.imgSrc" alt=""></i>
            </router-link>
        </div>
            <div class="pas">
                <router-link tag="p" class="a" to="/found/infor"> 资讯</router-link>
        <router-link tag="p" class="a"  to="/found/topic">话题</router-link>
        <router-link tag="p" class="a"  to="/found/mall">商城</router-link>
        <router-link tag="p" class="a"  to="/ticket">约票</router-link>
         <router-link tag="p" class="a"  to="/found/activity">活动</router-link>
            </div>
         
    </div>
</template>

<script>
export default {
    data(){
        return{
            navs:[
                // {id:1,title:"资讯",img:"/image/70/175/960.png"},
                // {id:2,title:"话题",img:"/image/70/175/961.png"},
                // {id:3,title:"约票",img:"/image/70/175/949.png"},
                // {id:4,title:"商城",img:"/image/70/175/962.png"},
                // {id:5,title:"活动",img:"/image/70/175/966.png"}
            ]
        }
    },
    created(){//Vue.prototype
        this.$http.get("/api/migu/find/list",{
          
           params:{
               
            }
        }).then(res=>{
            // console.log(res.data.data.object_list[0].list)
            this.navs = res.data.data.object_list[1].list;
            // this.$nextTick(()=>{
            //     new Swiper(".found-banner",{
            //         loop:true,
            //         pagination:{
            //             el:".swiper-pagination"
            //         }
            //     })
            
            // })
        })
    }
}
</script>

<style lang="scss" scoped>
.nav{
    background: #fff;
    width: 100%;
    height: 80px;
    .content{
        width:3.75rem;
        height: 40px;
    }
    .container{
        float: left;
        width:20%;
        height: 35px;
       i{
           margin-left: 23px;
           margin-top:5px;
           margin-bottom: 4px;
           img{
              width: 30px;
              height: 30px;
           }
       }
           
       
       
    }
}
.pas{
    width: 100%;
}
.a{
    width:20%;
    height: 40px;
    float: left;
    text-align: center;
  }
</style>
