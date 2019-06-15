<template>
    <div class="found" style="padding-top:60px;">
       
         <Tabbar></Tabbar>
         <FoundBanner></FoundBanner>
         <Nav></Nav>
         <Shopping></Shopping>
         <infobox></infobox>

    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import FoundBanner from "./found.vue"
import Nav from "./nav"
import Shopping from "./shopping"
import infobox from "./infobox"
import Infor from "./Infor"
import Topic from "./Topic"
import Mall from "./Mall"
export default {
    name:"found",
     components:{
        Tabbar,FoundBanner,Nav,Shopping,infobox, Infor,Topic,Mall
    }
}
</script>
<style lang="scss" scoped>

</style>
