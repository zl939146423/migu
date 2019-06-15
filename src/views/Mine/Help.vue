<template>
    <div class="app">
        <div class="index">
            <div class="main">
                <div style="touch-action:none;user-select:none;color:rgba(0,0,0,0)">
                    <div class="header" style="background:rgba(255,255,255);">
                        <router-link to="/mine"><i class="left_icon fa fa-angle-left"></i></router-link>
                        <p class="title_text">帮助与客服</p>
                        <i class="tel_icon fa fa-phone"></i>
                    </div>
                    <img width="100%" src="http://kf.migu.cn:80/png/2018-09/goodAfternoon1536852748265.png" alt="">
                   
                </div>   
                <div class="content">
                    <ul>
                        <li class="item">
                            <div class="item_list">
                                <ul class="top_list">
                                    <li class="title">如何登录咪咕影院？</li>
                                    <li class="title">怎么退出账号？</li>
                                </ul>
                                <ul class="more_list" style="display: none;">
                                    <li class="item_title_down">可以注销咪咕影院账号吗？</li>
                                    <li class="item_title_down">如何修改密码？</li>
                                    <li class="item_title_down">收不到咪咕影院发送的验证码怎么办？</li>
                                </ul>
                                <div class="left_more">
                                    <i class="sign fa fa-sliders"></i>
                                    <i class="hot">登录、注册</i>
                                    <i class="fa fa-angle-down" @click="toggle()"></i>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item_list">
                                <ul class="top_list">
                                    <li class="title">播放器有哪些功能？</li>
                                    <li class="title">点播的影片有有效期吗？</li>
                                </ul>
                                <ul class="more_list"></ul>
                                <div class="left_more">
                                    <i class="sign fa fa-globe"></i>
                                    <i class="hot">节目播放</i>
                                    <i class="fa fa-angle-down" @click="toggle()"></i>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <ul class="top_list">
                                <li class="title">购买正片怎么收费</li>
                                <li class="title">可以通过哪些支付方式购买正片？</li>
                            </ul>
                            <ul class="more_list"></ul>
                            <div class="left_more">
                                <i class="sign fa fa-bookmark-o"></i>
                                <i class="hot">特色功能</i>
                                <i class="fa fa-angle-down" @click="toggle()"></i>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item_list">
                                <ul class="top_list">
                                    <li class="title">咪咕影院的万达通兑券有几种？</li>
                                    <li class="title">咪咕影院万达2D/3D/IMAX通兑券使用规则是什么？</li>
                                </ul>
                                <ul class="more_list" style="display: none;">
                                    <li class="item_title_down">如何购买电影票？</li>
                                    <li class="item_title_down">咪咕影院万达2D/3D/IMAX通兑券使用规则是什么？</li>
                                    <li class="item_title_down">怎么查询已订购的电影票？</li>
                                </ul>
                                <div class="left_more">
                                    <i class="sign fa fa-map-o"></i>
                                    <i class="hot">购买电影票</i>
                                    <i class="fa fa-angle-down" @click="toggle()"></i>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item_list">
                                <ul class="top_list">
                                    <li class="title">怎么购买电影卡？</li>
                                    <li class="title">电影卡有效期是多久？</li>
                                </ul>
                                <ul class="more_list" style="display: none;">
                                    <li class="item_title_down">同一账户拥有多张卡券时应如何使用？</li>
                                    <li class="item_title_down">同一卡券是否能绑定多个账户？</li>
                                    <li class="item_title_down">电影卡余额能转增、提现吗？</li>
                                </ul>
                                <div class="left_more">
                                    <i class="sign fa fa-address-card-o"></i>
                                    <i class="hot">电影卡</i>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item_list">
                                <ul class="top_list">
                                    <li class="title">怎么下载影片？</li>
                                </ul>
                                <ul class="more_list" style="display: none;">
                                </ul>
                                <div class="left_more6">
                                    <i class="sign fa fa-cart-arrow-down"></i>
                                    <i class="hot">离线缓存</i>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item_list">
                                <ul class="top_list">
                                    <li class="title">如何进行评论？</li>
                                    <li class="title">可以点赞吗？</li>
                                </ul>
                                <ul class="more_list" style="display: none;">
                                </ul>
                                <div class="left_more">
                                    <i class="sign fa fa-users"></i>
                                    <i class="hot">评论点赞</i>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item_list">
                                <ul class="top_list">
                                    <li class="title">在咪咕影院在线观看影片收取流量费吗？</li>
                                </ul>
                                <ul class="more_list" style="display: none;">
                                </ul>
                                <div class="left_more8">
                                    <i class="sign fa fa-wifi"></i>
                                    <i class="hot">关于流量</i>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item_list">
                                <ul class="top_list">
                                    <li class="title">怎么查询咪咕影院衍生品？</li>
                                    <li class="title">购买咪咕影院衍生品通过什么方式支付？</li>
                                </ul>
                                <ul class="more_list" style="display: none;">
                                    <li class="item_title_down">怎么查询购买订单？？</li>
                                    <li class="item_title_down">商品到货后签收有什么要求？</li>
                                    <li class="item_title_down">购买的商品什么时候发货？</li>
                                </ul>
                                <div class="left_more">
                                    <i class="sign fa fa-gift"></i>
                                    <i class="hot">商城</i>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="connect-bt" style="rgba(255,82,102);">
                    <span class="text oneText" style="color:rgba(255,82,102);">联系客服</span>
                </div>
            </div>
        </div>
        
    </div>
   
</template>
<script>
export default {
    //  data:{
    //     isShow:false,
    // },
    // methods:{
    //     toggle:function(){
    //         this.isShow = !this.isShow;
    //     }
    // }
}
</script>
<style lang="scss" scoped>
    .app{
        width:3.75rem;
        position:relative;
        margin:auto;
        background:#f2f5f5;
    }
    .index{
        width:100%;
        height:100%;
    }
    .main{
        position: relative;
        box-sizing: border-box;
        height:100%;
        background:#f2f5f5;
        border-bottom:1px solid transparent;
        img{
            margin-bottom:20px;
            z-index:12;
            // position:fixed;
        }
    }
    .header{
        padding:25px 0;
        width:100%;
        height:15px;
        border-bottom:1px solid #dfdfdf;
        background:rgb(255, 255, 255);
        box-sizing:border-box;
        position:relative;
    }
    
    .header .left_icon{
        width:.277778rem;
        height:25px;
        position:absolute;
        left:20px;
        top:50%;
        transform:translateY(-50%);
        color:black;
        font-size:25px;
    }
    .header .title_text{
        display:inline-block;
        text-align:center;
        font-size:15px;
        color:#424242;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
    .header .tel_icon{
        width:35px;
        height:18px;
        position:absolute;
        right:5px;
        top:50%;
        transform:translateY(-50%);
        color:black;
        font-size:23px;

    }
    .main .content{
        width:100%;
        top:223px;
        position:absolute;
        left:0;
        overflow: auto;
    }
    .content .item{
        position:relative;
        margin-top:8px;
        background-color:#fff;
    }
    .item:last-child :after{
        content:"";
        height:20px;
        display:block;
    }
    .item_list{
        background:#fff;
    }
    .top_list li{
        border-bottom:1px solid #ececec;
    }
    .top_list .title{
        width:200px;
        height:20px;
        display: block;
        color:#4a4a4a;
        font-size:15px;
        padding-top:25px;
        padding-bottom:40px;
        margin-left:120px;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
    }
    .more_list li{
        border-bottom:.013889rem solid #ececec
    }
    .left_more{
        position:absolute;
        width:70px;
        height:30px;
        top:35px;
        left:15px;
        text-align: center;
    }
    .left_more .sign{
        text-align:center;
        font-size:25px;
    }
    .left_more .hot{
        padding-top:4px;
        display:block;
        color:#4a4a4a;
        font-size:14px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    
    .connect-bt{
        position:fixed;
        left:0;
        bottom:0;
        height:52px;
        border-top:1px solid #dfdfdf;
        background:#fff;
        width:100%;
        text-align:center;
        font-size:14px;
        .text{
            display:inline-block;
            line-height:1;
            position:absolute;
            width:85%;
            top:50%;
            left:0;
            transform:translateY(-50%);
        }
    }

    .left_more6{
        position:absolute;
        width:70px;
        height:30px;
        top:0;
        left:15px;
        text-align: center;
        .sign{
            text-align:center;
            font-size:25px;
        }
        .hot{
            padding-top:4px;
            display:block;
            color:#4a4a4a;
            font-size:14px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
    }
    .left_more8{
        position:absolute;
        width:70px;
        height:30px;
        top:0;
        left:15px;
        text-align: center;
        .sign{
            text-align:center;
            font-size:25px;
        }
        .hot{
            padding-top:4px;
            display:block;
            color:#4a4a4a;
            font-size:14px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
    }
</style>
