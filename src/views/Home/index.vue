<template>
    <div class="home">
        <div style="padding-top:60px;">
             <Banner ></Banner>
             <div class="recommend" >
                 <div class="module-name">热门推荐(免费)</div>
                 <MovieFixedBox  txt="1" limit="6"></MovieFixedBox> 
             </div>
                <div class="recommend" >
                    <div class="module-name">票房过亿的电影</div>
                        <MovieSlidingBox txt="1" limit="10" nameclass="movie"></MovieSlidingBox>     
                </div> 
                <div class="recommend" >
                 <div class="module-name">分分钟赏片</div>
                 <MovieFixedBox txt="2" limit="6"></MovieFixedBox> 
             </div> 
                <div class="recommend" >
                    <div class="module-name">豆瓣评分8.0+的电影</div>
                    <MovieSlidingBox txt="2" limit="10" nameclass="movie2"></MovieSlidingBox>
                </div>
                <div class="recommend" >
                    <div class="module-name">咪咕独播</div>
                    <MovieSlidingBox txt="3" limit="8" nameclass="movie3"></MovieSlidingBox>
                </div>
                <div class="movieietm" >
                    <div class="module-name">好莱坞大片</div>
                    <div class="content-pic">
                            <img class="lazy" src="http://movie.miguvideo.com//publish/i_www/image/70/740/426.jpg" alt="">
                    </div>
                    <div class="content-intro">
                        <p class="font-14">环太平洋2</p>
                        <p class="font-13">燃爆！进化怪兽军团再度来袭</p>
                    </div>
                </div>
             <div class="recommend" >
                 <MovieFixedBox txt="3" limit="3"></MovieFixedBox> 
             </div>
             <div class="movieietm" >
                    <div class="module-name">内地最强</div>
                    <div class="content-pic">
                            <img class="lazy" src="http://movie.miguvideo.com/publish/i_www/image/70/664/538.jpg" alt="">
                    </div>
                    <div class="content-intro">
                        <p class="font-14">反贪风暴</p>
                        <p class="font-13">古天乐率众大咖回归</p>
                    </div>
                </div>
             <div class="recommend" >
                 <MovieFixedBox txt="4" limit="3"></MovieFixedBox> 
             </div>
             <div class="recommend" >
                    <div class="module-name">风情日韩的电音</div>
                    <MovieSlidingBox txt="1" limit="10" nameclass="movie4"></MovieSlidingBox>
                </div>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import Banner from "@/components/Banner"
import MovieSlidingBox from "./movieSlidingBox"
import MovieFixedBox from "./movieFixedBox"
export default {
    props:[""],
    data(){
        return{
        
        }
    },
    components:{
        Tabbar,Banner,MovieSlidingBox,MovieFixedBox
    }
}
</script>
<style lang="scss" scoped>
.home{
    margin-bottom:55px;
}
.recommend{
    width:100%;
    height: auto;
}
.module-name{
    height: 45px;
    line-height: 45px;
    background: url(http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png) no-repeat 0 11px;
    background-size:3px 23px;
    padding-left:8px;
    padding-right:12px;
    color:#666;
    font-size:16px;
}
.movieietm{
    width:100%;
    height: auto;
    .content-pic{
        position: relative;
        img{
            border-left:1px solid #e7e7e7;
            width:100%;
            height: 175px;
        }
    }
    .content-intro{
        p{
            line-height: 1.7em;
            padding-left:12px;
            padding-right:12px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #666;
        }
        .font-14{
            font-size: 14px;
            color:#000;
        }
        .font-13{
            font-size: 13px;
        }
     }
}
.module-name{
    height: 45px;
    line-height: 45px;
    background: url(http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png) no-repeat 0 11px;
    background-size:3px 23px;
    padding-left:8px;
    padding-right:12px;
    color:#666;
    font-size:16px;
}
</style>
