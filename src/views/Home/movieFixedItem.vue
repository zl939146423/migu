<template>
    <div class="module-con">
        <ul class="vertical-pic" >
                <router-link  v-for="movie in movies" :key="movie.SRC_CONT_ID"
                    tag="li"
                 :to="{name:'moviedetail',params:{contId:movie.SRC_CONT_ID}}"> 
                    <div class="content-pic">
                        <img class="lazy" :src="'http://movie.miguvideo.com/'+movie.imgSrcH" alt="">
                         <span class="bottom-tag ">{{movie.miguScore}}</span>
                    </div>
                    <div class="content-intro">
                        <p class="font-14">{{movie.name}}</p>
                        <p class="font-13">{{movie.Detail}}</p>
                    </div>
                </router-link>
        </ul>
    </div>
</template>

<script>
export default {
     props:['txt','limit'],
    data(){
        return {
            movies:[]
            
        }
    },
    methods:{
    },
    created(){//Vue.prototype
    console.log(this.limit)
        this.$http.get("/api/migu/index",{
            params:{
                limit:this.limit,
                page:this.txt
            }
        }).then(res=>{
            this.movies = res.data.data.object_list;
        })
    }
}
</script>

<style lang="scss" scoped>
 .module-con{
     width:100%;
     height: auto;
     }
    .vertical-pic{
        overflow: hidden;
        list-style:none;
        li{
            width:32%;
            float: left;
            padding-bottom: 5px;
            margin-right:3px;
            .content-pic{
                position: relative;
                .bottom-tag{
                    position: absolute;
                    right:0px;
                    bottom:5px;
                    background: rgba(1,1,5,.5);
                    text-align: right;
                    padding: 0px 8px;
                    color:red;
                    font-size:16px;
                }
                img{
                    border-left:1px solid #e7e7e7;
                    width:100%;
                    height: 175px;
                }
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
        }
    }
</style>

