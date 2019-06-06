<template>
    <div class="moviedetail">
        <div class="loading" v-if="!movie"></div>
        <div v-else>
            <mt-header :title="movie.name">
                <router-link to="/" slot="left">
                    <mt-button icon="back">back</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class="img-box">
                <img width="100%" height="300" :src="'http://movie.miguvideo.com/'+movie.imgSrc1" alt="">
            </div>
            <p class="title">{{movie.name}}</p>
             <div style="font-size:16px;text-indent:30px; margin-bottom:10px">{{movie.describe}}</div> 
            <p style="font-size:20px;color:#666">演员：</p>
            <div class="actor">
                <div v-for="cast in movie.personnel"
                :key="cast.starid"
            > 
            <img height='100' width="100" :src="'http://movie.miguvideo.com/'+cast.imgSrc" alt="">
            <p class="name">{{cast.name}}</p>
            </div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            movie:null
        }
    },
    methods:{
        getMovie(){
            this.$http.get("/api/migu/detail/" + this.$route.params.contId).then(res=>{
                this.movie = res.data
            })
        }
    },
    created(){
        this.getMovie()
    }
}
</script>
<style lang="scss" scoped>
.title{
    font-size: 20px;
    text-align: center;
    color:orangered;
}
p{
    font-size: 16px;
}
    .actor{
       overflow: hidden;
        div{
            float: left;
             margin-left:5px;
             margin-bottom:5px;   
        }
        .name{
            padding-left:20px;
            width:80px ;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .mint-header{
        background:rgba(0,0,0,.6)
    }
</style>

