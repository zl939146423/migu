<template>
    <div class="module-con">
        <div :class="['swiper-container', nameclass]">
                <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1110px, 0px, 0px);"
                >
                 <router-link class="swiper-slide"
                  v-for="movie in movies" :key="movie.SRC_CONT_ID"
                    tag="div"
                 :to="{name:'moviedetail',params:{contId:movie.SRC_CONT_ID}}">
                      <div class="content-pic">
                        <img class="lazy" :src="'http://movie.miguvideo.com/'+movie.imgSrcH" alt="">
                        </div>
                        <div class="content">
                            <p class="font-14">{{movie.name}}</p>
                            <p class="font-13">{{movie.Detail}}</p>
                        </div> 
                 </router-link>
                   
                </div>
            
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
     props:{
         txt:{default:'txt'},
         limit:{default:'limit'},
     nameclass:{ default:'movie-item'
     }
     },
    data(){
        return {
            movies:[]
        }
    },
    methods:{
    },
    created(){//Vue.prototype
        this.$http.get("/api/migu/index",{
            params:{
                limit:this.limit,
                page:this.txt
            }
        }).then(res=>{
            this.movies = res.data.data.object_list;
            this.$nextTick(()=>{
                new Swiper("."+this.nameclass,{
                    loop:true,
                })
            
            })
        })
    }
}
</script>

<style lang="scss" scoped>
 .module-con{
     width:100%;
     height: auto;
     .swiper-container{
         width:100%;
         height: 100%;
         margin: 0 auto;
         position: relative;
         overflow: hidden;
         list-style: none;
         padding: 0;
         z-index: 1;
          .swiper-wrapper{
              position: relative;
            width:100%;
            height: 100%;
            z-index: 1;
            float: left;
            padding-bottom: 5px;
            margin-right:5px;
            display: flex;
            box-sizing: content-box;
            .swiper-slide{
                width:32% !important;
            .content-pic{
                position: relative;
                width:100%;
                img{
                    border-left:1px solid #e7e7e7;
                    width:100%;
                    height: 175px;
                }
                
                 }
                 .content{
                     padding: 0;
                     margin:0;
                     p{
                         line-height:1.7em;
                         padding-left:12px;
                         padding-right:12px;
                         text-overflow: ellipsis;
                         white-space: nowrap;
                         overflow: hidden;
                         color:#666;
                        
                     }
                    .font-14{
                        font-size:14px;
                    }
                    .font-13{
                        font-size:13px;
                        padding-left:25px;
                    }
                 }
            }
            
        }
        
     }
    }
       
</style>


