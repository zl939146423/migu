<template>
    <div class="found">
       
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
export default {
    name:"found",
   
   
     components:{
        Tabbar,FoundBanner,Nav,Shopping,infobox
    }
}
</script>
<style lang="scss" scoped>

</style>
