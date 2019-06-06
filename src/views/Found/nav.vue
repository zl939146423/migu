<template>
    <div class="nav">
        <router-link 
        tag="div"
        to=""
        class="container" 
        v-for="nav in navs"
        :key="nav.enter_id"
        >
         <i :class="['fa','fa-'+nav.icon]"><img :src="'http://movie.miguvideo.com/publish/i_www'+nav.imgSrc" alt=""></i>
         <p>{{nav.name}}</p>
        </router-link>
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
    display:flex;
    background: #fff;
    flex:1;
    justify-content: space-around;
    .container{
       i{

           margin-left: 6px;
           margin-top:5px;
           margin-bottom: 4px;
           img{
              width: 30px;
              height: 30px;
           }
       }
       p{
           margin-left:5px;
       }
    }
}
</style>
