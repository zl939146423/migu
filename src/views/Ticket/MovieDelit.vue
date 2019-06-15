<template>
    <div class="detail">
        <div v-if="!movies" class="loading"></div>        
        <div v-else>
            <mt-header :title="movies[0].name">
                <router-link to="/ticket" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class="imgBox">
                <img :src="'http://movie.miguvideo.com'+movies[0].imgSrc" alt="">
            </div>
            <div class="topbox">
                <div>
                    <span class="title">{{movies[0].name}}</span>
                    <span class="green">{{movies[0].score}}分</span>
                </div>
                <p>{{movies[0].DetailType}}</p>
                <p>{{movies[0].time}}</p>
                <p>{{movies[0].region}}</p>
            </div>        
            <div class="h3"><h3>演员：</h3></div>
            <div class="bottombox">
                <router-link to="/actor"
                v-for="cast in movies[0].personnel"
                :key="cast.player"
                class="castbox"
                >
                <img class="casts" :src="'http://movie.miguvideo.com'+cast.imgSrc" alt="">
                <p>{{cast.name}}</p>
                </router-link>
            </div>
            <div class="read"><h3>剧情简介：</h3></div>
            <div class="summary">{{movies[0].describe}}</div>
        </div>    
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            movies:[]
        }
    },
    methods:{
        getMovie(){
            this.$http.get("/film.json").then(res=>{
                 this.movies = res.data;
                
            })
        },
       
    },
     created(){
        this.getMovie()
    }
}
</script>
<style lang="scss" scoped>
    .detail{
        background:#f4f4f4;
    }
    .mint-header{
        background:#474a4c;
    }
    .imgBox{
        width:100%;
        height:2.5rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .casts{
        width:70px;
        height:100px;
    }
    .topbox{
        width:100%;
        height:150px;
        padding:12px 15px 15px;
        display:flex;
        background:#fff;
        margin-bottom:10px;
        flex-direction: column;
        div{
            display:flex;
            justify-content:space-between;
            .title{
                font-size:18px;font-weight:900;
                color:#000;
            }
            .green{
                font-size:18px;
                color:#ffb232;
            }
        }
        p{
            margin:5px 0;
        }

    }
    .h3{
        background:#fff;
        padding-bottom:10px;
    }
    .bottombox{
        width:100%;
        height:1.4rem;
        display:flex;
        background:#fff;
        justify-content: space-around;
        align-items: center;
        align-items: center;
        .castbox{
            display: flex;
            flex-direction: column;
           img{
               margin-bottom:5px;
           }
           p{
               text-align: center;
           }
        }
    }
    .read{
        padding:5px 0;
        background: #fff;
    }
    .summary{
        background:#fff;
        width:100%;
        padding:5px 10px;
        height:2rem;
        font-size:16px;
        line-height:20px;
        text-indent: 2em;
    }
</style>
