<template>
     <div class="inforitem">
         <li class="item-main" v-for="info in infos" :key="info.SRC_CONT_ID">
                <a href="">
                    <div class="new-con clearfix">
                        <div class="pull-left news-name font-14 grey">{{info.name}}</div>
                        <div class="pull-right news-pic">
                            <img :src="'http://movie.miguvideo.com'+info.imgSrcH" alt="">
                        </div>
                    </div>
                </a>
                <div class="news-origin clearfix">
                    <div class="pull-left font-12 light-grey">来源:时光网</div>
                    <div class="pull-right clearfix Fabulous">
                        <img src="@/assets/up.png" alt="" class="thumbs-up pull-left">
                        <span class="font-14 high-grey pull-right">0</span>
                    </div>
                </div>
            </li>
    </div>
</template>

<script>
export default {
    props:["index"],
    data(){
        return{
            infos:[]
        }
    },
    created(){//Vue.prototype
        this.$http.get("/api/migu/find/list",{
          
           params:{
               
            }
        }).then(res=>{
            
            for(var i =0;i<9;i++){
                let itemindex=i;
                if(this.index === itemindex){
                    this.infos=res.data.data.object_list[3].list[i].picList[0].list
                }
                //  this.infos[i]=res.data.data.object_list[3].list[i].picList[0].list
                // console.log(res.data.data.object_list[3].list[i].picList[0].list)
            }
           
            // this.infos = res.data.data.object_list[3].list.picList.list;
            
        })
    },
}
</script>

<style lang="scss">
.item-main{
    border-bottom:1px solid #ccc;
    padding-top:6px;
    padding-bottom:5px;
    background:#fff;
}
.new-con{
        width: 100%;
        .news-name{
            width: 66%;
        }
        .pull-left{
            float: left;   
        }
        .news-pic{
            width: 32%;
            img{
                width:100%;
            }
        }
        .pull-right{
        float: right;
    }
     }
     .thumbs-up{
         width: 22px;
         margin-right: 8px;
         margin-bottom: -2px;
     }
     .font-14{
         font-size: 14px !important;
     }
     .pull-left{
         float: left;
     }
     .pull-right{
         float: right;
     }
</style>
