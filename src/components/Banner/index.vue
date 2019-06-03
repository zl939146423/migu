<template>
   <div class="home-banner swiper-container loading">
       <div class="swiper-wrapper">
           <div class="swiper-slide"
            v-for="banner in banners"
             :key="banner.id">
               <img width="100%" :src="getImages(banner.images.small)" alt="">
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
        // 解决403图片缓存问题
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    },
    created(){//Vue.prototype
        this.$http.get("/api/db/in_theaters",{
            params:{
                limit:6
            }
        }).then(res=>{
            this.banners = res.data.object_list;
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
</style>
