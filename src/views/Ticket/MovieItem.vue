<template>
    <div class="detail">
        <router-link tag="div" to="moviedelit" class="movieitem">
            <div class="left">
                <img :src="'http://movie.miguvideo.com'+movie.picAddr" alt="">
            </div>
            <div class="right">
                <h3 style="color:black;">{{movie.filmName}}</h3>
                <p>上映：{{movie.openingDate}}</p>
                <p>产地：{{movie.country}}</p>
                <p>导演：{{movie.director}}</p>
            </div>
            <div class="button">
                <mt-button type="danger" size="small" @click.stop="addGoodInCar(movie)">购票</mt-button>
                <router-link to="car" style="color:white;"><mt-button type="danger" size="small" style="font-size:12px;">购物车</mt-button></router-link>
                <router-view></router-view>
                
            </div>
        </router-link>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    props:["movie"],
    methods:{
        ...mapActions(["addGoodInCar"]),
    }
       
    
}
</script>
<style lang="scss" scoped>
    .movieitem{
        border-bottom: 1px solid #ccc;
        width:100%;
        height:130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:8px;
        background:#fff;
        .left{
            width:100px;
            height:110px;
            img{
                width:100%;
                height:100%;
            }
        }
        .right{
            
            width:1.5rem;
            margin-left:-18px;
            h3{
                margin-bottom:12px;
                font-weight: 900;
            }
            p{
                margin:4px 0;
            }
        }
        .button{
            width:0.6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .mint-button{
                margin-bottom:10px;
            }
        }
    }
</style>


