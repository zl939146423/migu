<template>
    <div class="mine" style="padding-top:50px;">
        <div class="page-head clear">
            <div class="userPhone">
                <img src="@/assets/defaultPhoto.png" alt="">
            </div>
            <router-link to="/mine/login" tag="p" class="font-16">点击登录</router-link>
            <div class="past">
                <i class="icon-small fa fa-angle-right"></i>
            </div>
        </div>
        <Content></Content>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import Content from "@/views/Mine/Content"
import Help from "@/views/Mine/Help"
import Money from "@/views/Mine/Money"
export default {
    components:{
        Tabbar,Content,Help,Money
    }
}
</script>
<style lang="scss" scoped>
    .page-head{
        padding:20px 10px;
        background-color:#fff;
        position:relative;
        .userPhone{
            width:16%;
            text-align:right;
            float:left;
            img{
                width:100%;
            }
        }
        p{
            width:49%;
            height:56px;
            line-height:56px;
            padding-left:10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            float:left;
        }
        .font-16{
            font-size:16px !important;
        }
        .past{
            width:33%;
            padding:19px 0;
            text-align:right;
            float:left;
            .icon-small{
                display: inline-block;
                width:17px;
                height:17px;
                padding-right:1px;
                color:black;
            }
        }
    }

</style>
