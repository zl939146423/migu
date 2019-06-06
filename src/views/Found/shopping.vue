<template>
    <div class="shopping clear">
        <router-link class="title" tag="div" to="">
            <span>商城</span>
            <i class="fa fa-chevron-right"></i>
        </router-link>
        <div class="box">
        <router-link 
        class="container" 
        tag="div" 
        to=""
        v-for="movieCard in movieCards.slice(0,2)"
        :key="movieCard._id"
        >
        <div class="t"><img :src="'http://movie.miguvideo.com/publish/i_www'+movieCard.imgSrc" alt=""></div>
        <div class="b">
        <p>{{movieCard.name}}</p>
        <span>￥{{movieCard.movie_price}}</span>
        </div>
        </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            movieCards:[]
        }
    },
    created(){//Vue.prototype
        this.$http.get("/api/migu/find/list",{
          
           params:{
               
            }
        }).then(res=>{
            
            this.movieCards = res.data.data.object_list[2].list;
            
        })
    }
}
</script>

<style lang="scss" scoped>
.shopping{
    
    margin-top:7px;
   
    background: #fff;
    .title{
       display:flex;
        justify-content: space-between;
        span{
             margin-top:10px;
            padding-left: 8px;
            font-size: 16px !important;
            height:25px;
            line-height: 25px;
            color: #666;
            border-left:3px solid red
        }
        i{
            margin-top:15px;
            margin-right:10px;
        }
    }
    .box{
        margin-top:10px;
        width:100%;
        .container{
            width:50%;
            float:left;
            padding-bottom: 5px;
            background: #fff;
            height:1.5rem;
            .t img{
                width:100%;
            }
            .b {
                
                span{
                    color:#F74444;
                    margin-top:10px;
                    margin-left: 11px;
            }
                p{
                    margin-left: 11px;
                }
            }
        }
        }

}
</style>
