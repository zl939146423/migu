<template>
    <div class="tabitem" @click="change">
        <span v-if="!flag"><slot name="normalImg"></slot></span>
        <span v-else><slot name="activeImg"></slot></span>
        <span  :class="{active:flag}">{{txt}}</span>
    </div>
</template>
<script>
export default {
    props:["txt","mark","sel","changeSelected"],
    computed:{
        flag(){
            if(this.mark === this.sel){
                return true;
            }
            return false
        }
    },
    methods:{
        change(){
            //让父组件去更改自身sel值
           /*  this.changeSelected(this.mark); */
        //    this.$emit("changeSelected",this.mark)
           this.$router.push('/'+ this.mark)
        }
    }
}
</script>
<style lang="scss" scoped>
.tabitem{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width:24px;
        height: 24px;
    }
    .active{
        color:#F74444;
    }
}
</style>
