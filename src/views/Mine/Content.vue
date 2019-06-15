<template>
    <div class="page-body">
        <div class="tab-wrap" id="wrap" style="display:none">
            <ul class="tab-list clear">
                <li>
                    <img width="30%" src="@/assets/colle.png" alt="">
                    <p class="margin-top-5">收藏</p>
                </li>
                <li>
                    <img width="30%" src="@/assets/mov-com.png" alt="">
                    <p class="margin-top-5">影评</p>
                </li>
                <li>
                    <img width="30%" src="@/assets/play-his.png" alt="">
                    <p class="margin-top-5">播放历史</p>
                </li>
            </ul>
        </div>
        <div class="list-wrap" id="userOrderPurse">
            <ul>
                <li>
                    <div class="my-list clear">
                        <span class="pull-left">
                            <img width="16px" src="@/assets/order.png" alt="">
                            <span class="margin-left-5">我的订单</span>
                        </span>
                        <span class="pull-right">
                            <i class="icon-small fa fa-angle-right"></i>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="my-list clear">
                        <span class="pull-left">
                            <img width="16px" src="@/assets/wallet.png" alt="">
                            <router-link tag="span" to="/mine/money"><span class="margin-left-5">我的钱包</span></router-link>
                        </span>
                        <span class="pull-right">
                            <span class="type-all">电影卡 票券 权益 积分 </span>
                            <i class="icon-small fa fa-angle-right"></i>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="list-wrap" id="helpCenter">
            <ul>
                <li>
                    <div class="my-list clear">
                        <span class="pull-left">
                            <img width="16px" src="@/assets/question.png" alt="">
                            <router-link tag="span" to="/mine/help"><span class="margin-left-5">常见问题</span></router-link>
                        </span>
                        <span class="pull-right">
                            <i class="icon-small fa fa-angle-right"></i>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="my-list no-border clear">
                        <span class="pull-left">
                            <img width="16px" src="@/assets/serv-online.png" alt="">
                            <span class="margin-left-5">在线客服</span>
                        </span>
                        <span class="pull-right">
                            <i class="icon-small fa fa-angle-right"></i>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="list-wrap">
            <ul>
                <li>
                    <div class="my-list clear">
                        <span class="pull-left">
                            <img width="16px" src="@/assets/shopping.png" alt="">
                            <span class="margin-left-5">商城</span>
                        </span>
                        <span class="pull-right">
                            <i class="icon-small fa fa-angle-right"></i>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import Help from "./Help"
export default {
    components:{
        Tabbar,Help
    },
   
}
</script>
<style lang="scss" scoped>
    .tab-wrap{
        margin-top:10px;
        padding:18px 0 13px;
        border-bottom:1px solid #f0f0f0;
        font-size:15px;
        background-color:#fff;
    }
    .tab-wrap>ul>li{
        width:33.33%;
        float:left;
        text-align:center;
        color:#1a1a1a;
    }
    .tab-list img{
        max-width:100%;
    }
    .margin-top-5{
        margin-top:5px;
    }
    .list-wrap{
        margin-top:10px;
        background-color:#fff;
        color:#1a1a1a;
        font-size:15px;
        
    }
    .my-list{
        padding:10px 0;
        border-bottom:1px solid #ccc;
    }
    .list-wrap>ul>li{
        padding:0 12px;
    }
    .pull-left{
        float:left;
        display:flex;
    }
    .pull-right{
        float:right;
    }
    .icon-small{
        display: inline-block;
        width:17px;
        height:17px;
        padding-right:1px;
        top:2px;
        position: relative;
    }
    img{
        border:0;
        height:16px;
    }
    .type-all{
        font-size:13px;
        color:#999;
    }
    .margin-left-5{
        margin-left:5px;
    }
</style>
