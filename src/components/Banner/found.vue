<template>
   <div class="found-banner swiper-container loading">
       <div class="swiper-wrapper">
           <div class="swiper-slide"
            v-for="banner in banners"
             :key="banner._id">
               <img width="100%" :src="'http://movie.miguvideo.com/publish/i_www'+banner.imgSrc" alt="">
           </div>
       </div>
             <div class="swiper-pagination"></div>
       </div> 
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
        }
    },

    created(){//Vue.prototype
        this.$http.get("/api/migu/find/list",{
          
           params:{
                limit:2
            }
        }).then(res=>{
            // console.log(res.data.data.object_list[0].list)
            this.banners = res.data.data.object_list[0].list;
            this.$nextTick(()=>{
                new Swiper(".found-banner",{
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    }
                })
            
            })
        })
    }
}
</script>
<style lang="scss" scoped>
    .swiper-container{
        height:1.4rem;
        img{
            width:100%;
            height:100%;
        }
        .swiper-pagination{
            left: auto;
            width: auto;
            right: 10px;
        }
    }
    .swiper-pagination-bullet-active{
        background: #8ca7c4!important;
    }
</style>
