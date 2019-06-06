<template>
    <div class="home">
        <router-link tag="div" :to="{name:'actor',params:{id:id}}">演职员</router-link>
        <router-view></router-view>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
export default {
    props:[""],
    data(){
        return{
        
        }
    },
    components:{
        Tabbar
    }
}
</script>
<style lang="scss" scoped>

</style>
