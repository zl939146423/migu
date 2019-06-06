<template>
<div class="moviefixed">
 <MovieSlidingItem :txt="txt" :limit="limit" :nameclass="nameclass"></MovieSlidingItem>
    </div>
</template>

<script>
import MovieSlidingItem from "./movieSlidingItem"
export default {
     props:['txt','limit','nameclass'],
    components:{
        MovieSlidingItem
    }
}
</script>

<style>
.movie{
    width:100%;
    height: auto;
}
.module-name{
    height: 45px;
    line-height: 45px;
    background: url(http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png) no-repeat 0 11px;
    background-size:3px 23px;
    padding-left:8px;
    padding-right:12px;
    color:#666;
    font-size:16px;
}
</style>

