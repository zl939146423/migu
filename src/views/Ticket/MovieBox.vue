<template>
    <div class="box"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
    >
        <movieitem
        v-for="movie in movies"
        :key="movie._id"
        :movie="movie"
        >
        
        </movieitem>
        <router-view></router-view>
    </div>
</template>

<script>
import movieitem from "./MovieItem"
import {Toast} from "mint-ui";
import {mapActions} from "vuex"
export default {
    props:[
        "type"
    ],
    watch:{
        type(){
            this.movies = [];
            this.page = 1;
            this.hasmore = true;
            this.getMovies();
        }
    },
    data(){
        return {
            movies:[],
            limit:6,
            page:1,
            hasmore:true
        }
    },
    methods:{
        ...mapActions(["addGoodInCar"]),
        loadMore(){
            if(!this.hasmore){
                Toast({
                    message:'苏格拉到底了。。。',
                    duration:2000,
                    position:"bottom"
                })
                this.loading = true;
                return false;
            }
            this.getMovies()
        },
        getMovies(){
            let {page,limit}= this;
            this.$http.get("/api/migu/"+ this.type+"/list",{
                params:{
                    limit,
                    page
                }
            }).then(res=>{
                this.movies= this.movies.concat(res.data.data.object_list)
                if(this.limit*this.page >= res.data.total){
                    this.hasmore = false
                    return false;
                }
                this.page++
            })
        }
    },
    activated(){
        this.getMovies()
        window.addEventListener("scroll",this.listenScroll)},
    deactivated(){
        window.removeEventListener("scroll",this.listenScroll)
    },
    components:{
        movieitem
    }

}
</script>
<style lang="scss" scoped>
    .box{
        padding-bottom:60px;
    }
</style>


