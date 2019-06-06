<template>
    <div class="inforbox">
         <!-- 请求数据的时候有个显示 -->
        <div class="loading" v-if="!dates"></div>
        <div v-else class='dates' v-for="(date,index) in dates" :key="index">
            <div class="date"><p>{{date.name}}</p></div>

         <router-link class="title" tag="div" to="">
            <span>资讯</span>
            <i class="fa fa-chevron-right"></i>
        </router-link>
            <infoitem :index="index"></infoitem>
        </div>
        
    
         <!-- 请求数据的时候有个显示 -->
        <!-- <div class="loading" v-if="!infos"></div> -->
        <!-- <infoitem
            v-for="info in infos"
            :key="info.id"
            :info="info"
        ></infoitem> -->
    </div>
</template>

<script>
import infoitem from "./infoitem"
//引入弹出框组件
import {Toast} from 'mint-ui';
export default {
    data(){
        return{
            dates:[],
         
        }
    },
     created(){//Vue.prototype
        this.$http.get("/api/migu/find/list",{
          
           params:{
               
            }
        }).then(res=>{
            
            this.dates = res.data.data.object_list[3].list;
            
        })
    },

    components:{
        infoitem
    }
}
</script>

<style lang="scss" scoped>

    .date{
        
        background:#efefef;
        height: 35px;
        line-height: 35px;
        padding: 0 12px;
        p{
            font-size: 19px;
        }
    }
     .title{
       display:flex;
        justify-content: space-between;
        background: #fff;
        border-bottom: 1px solid #ccc;
        span{
             margin-top:10px;
             margin-bottom:10px;
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
</style>
