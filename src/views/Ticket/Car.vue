<template>
    <div class="car">
        <mt-header title="购物车">
		  <router-link to="/ticket" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
        <p v-if="cars.length === 0">没有商品了哦，请前往选购吧。。。</p>
        <div v-else>
            <mt-cell :title="movie.filmName" 
                :label="'演员：'+ movie.actor"
                :key="movie._id"
                v-for="movie in cars" >
                <mt-button @click="addGoodInCar(movie)" type="danger" size="small">+</mt-button>
                <div class="num">{{movie.num}}</div>
                <mt-button @click="reduceGoodInCar(movie)" type="danger" size="small">-</mt-button>
                <img slot="icon"  :src="'http://movie.miguvideo.com'+movie.picAddr" alt="">
            </mt-cell>
        </div>
        <mt-tabbar class="tabbar">
            <div class="add">合计：{{computeTotal.num}}</div>
            <div class="give">结算</div>
        </mt-tabbar>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState({
            cars:state=>state.myCar.cars
        }),
        ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"])
    }
}
</script>
<style lang="scss" >
    .mint-header{
        background:#656c71;
    }
    img{
        width:80px;
        height:100px;
    }
    .mint-cell-label{
        font-size: 12px;
        color:#999;
        // overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
    }
    .mint-cell{
        margin-top:3px;
        img{
            float:left;
            margin-right:10px;
        }
        .mint-cell-text{
        color:#000;
        font-size:16px;
        margin-top:4px;
        }
    }
    .num{
        width:20px;
        height:30px;
        line-height:30px;
        text-align: center;
        color:chocolate;
    }
    .car{
        padding-bottom:54px;
    }
    .tabbar{
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        height:50px;
        background:gold;
        z-index:10;
        .add{
            float:left;
            width:70%;
            height:50px;
            background:#ccc;
            text-align: center;
            line-height: 50px;
            color:#333;
            font-size:22px;
        }
        .give{
            float:left;
            width:30%;
            height:50px;
            background:red;
            text-align: center;
            line-height: 50px;
            color:#fff;
            font-size:18px;
        }
    }
    
</style>


