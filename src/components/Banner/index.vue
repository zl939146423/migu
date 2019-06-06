<template>
<!-- <div>
    <img  width="100%" src="http://movie.miguvideo.com/publish/image/70/727/552.jpg" alt="">
</div> -->
   <div class="swiper-container loading home-banner">
       <div class="swiper-wrapper">
           <div class="swiper-slide"
            v-for="banner in banners"
             :key="banner.SRC_CONT_ID">
             <p class="name">{{banner.name}}</p>
               <img width="100%" :src="'http://movie.miguvideo.com/'+banner.imgSrcH" alt="">
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
    methods:{
    },
    created(){//Vue.prototype
        this.$http.get("/api/migu/home/list",{
            params:{
                limit:6
            }
        }).then(res=>{
            this.banners = res.data.data.object_list;
            this.$nextTick(()=>{
                new Swiper(".home-banner",{
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
        height:2.4rem;
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
    .name{
        position:absolute;
        top:210px;
        color:#fff;
    }
</style>
