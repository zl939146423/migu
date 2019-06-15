export default {
    computeTotal(state){
         let cars = state.cars;
         let total = { num: 0 }
         cars.forEach(item=>{
             total.num += item.num
         })
         return total
    }
 }