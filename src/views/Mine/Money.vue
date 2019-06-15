<template>
    <div class=my-header>
        <div class="page-title clear">
            <router-link to="/mine"><i class="signal fa fa-reply"></i></router-link>
            <span>我的钱包</span>
        </div>
        <div class="page-main">
            <div class="tab-wrap">
                <ul class="clear">
                     <li v-for="l in lis"
                        :key='l.id'
                        :class="[flag==l.flag?'active':'']"
                        @click='flag=l.flag'
                     >
                         <span>{{l.name}}</span>
                     </li>
                </ul>   
            </div>
            <div class="mainCon">
                <div class="tabCon" v-show="flag==1">
                    <div class="form-wrap">
                        <p class="form-info">添加新电影卡</p>
                        <div class="clear">
                            <input type="text" placeholder="请输入电影卡兑换码" class="pull-left">
                            <button type="button" class="width-20 pull-right">兑换</button>
                        </div>
                    </div>
                    <div class="main-con-wrap">
                        <div class="empty-con-movie">
                            <div class="buyMovieCard">
                                <div class="weigoumai">还未购买电影卡</div>
                                <p>购买电影卡享更多优惠</p>
                                <div class="lijigoumai">
                                    <span>立即购买</span>
                                    <img src="@/assets/bBuy.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tabCon display-none" v-show="flag==2">
                    <div class="form-wrap">
                        <p class="form-info">添加票券</p>
                        <div class="clear">
                            <input type="text" placeholder="请输入票券兑换码" class="width-75 pull-left">
                            <button type="button" class="pull-right">兑换</button>
                        </div>
                    </div>
                    <div class="couponCont">
                        <div class="empty-con">
                            <div><img src="@/assets/empty-con.png" width="105px" alt=""></div>
                            <p class="empty-tip">您还没有任何兑换券</p>
                        </div>
                    </div>
                </div>
                <div class="tabCon" v-show="flag==3">
                    <div class="form-wrap">
                        <p class="form-info">添加新的兑换券</p>
                        <div class="clear">
                            <input type="text" placeholder="请输入兑换券密码进行兑换" class="pull-left">
                            <button type="button" class="pull-right">添加</button>
                        </div>
                        <p class="form-info">
                            *部分影院的4D影厅、VIP影厅放映的影片，不可用兑换券兑换影票
                        </p>
                        <p class="form-info" style="margin-top:5px">
                            *万达兑换券不支持春节、平安夜(12.24)、情人节(2.14)等影城规定的特殊节假日场次，
                            不支持首映式、VIP厅等特殊场次；仅限同类万达兑换券同时支付一笔订单，不可与其他卡券、支付方式混合支付。
                        </p>
                    </div>
                    <div class="main-con-wrap main-con-wrap-2">
                        <ul id="main-con-wrap">
                            <div class="empty-con">
                                <div><img src="@/assets/empty-con.png" width="105px" alt=""></div>
                                <p class="empty-tip">您还没有任何兑换券</p>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="tabCon" v-show="flag==4">
                    <div class="empty-con" id="noCard">
                        <div class="card1">
                            <p>还未开通咪咕联合会员卡</p>
                            <span>开通后购票可以享受优惠价</span>
                        </div>
                        <div class="line"><img src="@/assets/hd-line.jpg" alt=""></div>
                        <div class="cards">
                            <div class="card-txt">
                                <p>本月可用优惠：9.9元购票机会一次</p>
                                <p class="clear">
                                    <span class="c1">本月在线观影卷余额：14元</span>
                                    <span class="c1-2">有效期至：2017-05-20</span>
                                </p>
                            </div>
                            <div class="card-txts">
                                <p>·每月一次9.9购票优惠</p>
                                <p class="clear">
                                    <span class="c1">·每月送30元咪咕影院在线观影券</span>
                                    <span class="c1-2">￥<b>20</b></span>
                                </p>
                            </div>
                        </div>
                        <div class="fore">更多影城卡即将上线</div>
                    </div>
                    <div class="empty-con2"></div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:1,
            lis:[
                {id:1,name:'电影卡',flag:1},
                {id:2,name:'抵值券',flag:2},
                {id:3,name:'兑换券',flag:3},
                {id:4,name:'会员卡',flag:4}
            ]
        }
    },
    methods:{
      
    }
}
</script>
<style lang="scss" scoped>
    .my-header{
        position:relative;
        background-color:#f0f0f0;
    }
    .page-title{
        text-align:center;
        color:#333;
        font-size:17px;
        padding:10px;
        background-color:#fff;
        border-bottom:1px solid #f0f0f0;
        position: relative;
    }
    .signal{
        display: inline-block;
        width:24px;
        height:24px;
        float:left;
    }
    .page-title>span{
        position: relative;
        top:3px;
    }
    .form-wrap{
        padding:10px 10px 10px;
        background-color:#fff;
    }
    .form-info{
        font-size:13px;
        color:#999;
    }
    .form-info+div{
        margin:10px 0;
    }
    .form-wrap input{
        padding:8px 12px;
        color:#999;
        font-size:14px;
        border:0 none;
        background-color:#f0f0f0;
        border-radius:3px;
    }
    .form-wrap button{
        padding:5px 0;
        font-size:17px;
        background-color:#f74444;
        border:0 none;
        border-radius: 3px;
        width:20%;
    }
    .tab-wrap>ul>li{
        width:25%;
        float:left;
        text-align: center;
        color:#1a1a1a;
    }
    .tab-wrap>ul>li>span{
        display: inline-block;
        padding:16px 0;
    }
    .active>span{
        color:#f74444;
        border-bottom:2px solid #f74444;
    }
    .pull-left{
        float:left;
    }
    .pull-right{
        float:right
    }
    .main-con-wrap{
        padding:0 10px;
        background-color:#fff;
        padding-top:10px;
        margin-top:-10px;
    }
    .empty-con-movie{
        width:100%;
        height:42vw;
    }
    .empty-con-movie .buyMovieCard{
        width:44%;
        margin:0 auto;
        text-align:center;
        padding:5% 0 3% 0;
    }
    .buyMovieCard .weigoumai{
        font-weight:bold;
        font-size:18px;
        color:#666;
    }
    .buyMovieCard>p{
        font-size:13px;
        color:#999;
        margin-top:8%;
        margin-bottom:14%;
    }
    .buyMovieCard .lijigoumai{
        position:relative;
    }
    .buyMovieCard .lijigoumai span{
        position:absolute;
        left:32%;
        top:20%;
        color:#fff;
        font-size:15px;
    }
    .buyMovieCard div img{
        width:134px;
    }
    .couponCont{
        padding:0 10px;
        background-color:#fff;
    }
    .empty-con{
        padding-top:1px;
        text-align:center;
        backgorund:#fff;
    }
    .empty-tip{
        margin-top:11px;
        font-size:13px;
        color:#999; 
    }
    .empty-con img{
        margin:0 auto;
    }
    .card1{
        width:94%;
        margin:10px auto;
        height:110px;
        background:url(../../assets/hd-wkt.png) no-repeat;
        background-size:100%;
        text-align:center;
        color:#fff;
        line-height:22px;
        padding-top:45px;
    }
    .card1 p{
        font-size:16px;
    }
    .card1 span{
        font-size:14px;
        text-align:center;
    }
    .line{
        width:94%;
        margin:0 auto;
        img{
            width:100%;
        }
    }
    .cards{
        width:94%;
        height:130px;
        background:url(../../assets/hd-card1.png);
        background-size:100%;
        margin:15px auto 5px auto;
    }
    .card-txt{
        font-size:12px;
        line-height: 20px;
        color:#fff;
        padding-top:84px;
        margin:0 2%;
        display:none;
    }
    .c1{
        float:left;
    }
    .c1-2{
        float:right;
        b{
            font-size:16px;
        }
    }
    .card-txts{
        font-size:12px;
        line-height:20px;
        color:#fff;
        padding-top:84px;
        margin:0 2%;
        text-align:left;
    }




</style>    

