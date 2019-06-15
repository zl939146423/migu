import { SYNC_UPDATE } from "./const";

export default {
    initCar(store){
        //获取购物车
        let cars = getMovies()
        store.commit(SYNC_UPDATE,cars)
    },
    addGoodInCar(store,movies){//添加商品到购物车
            let cars = getMovies();
            let isHas = cars.some(item=>{
                if(item._id === movies._id){
                    item.num++;
                    return true
                }else{
                    return false;
                }
            })
            if(!isHas){
                movies.num = 1;
                cars.push(movies);
            }

            localStorage.cars = JSON.stringify(cars)
        //前段需要mutations方法来改变state里面的cars
        store.commit(SYNC_UPDATE,cars)

    },
    reduceGoodInCar(store,movies){
        let cars = getMovies();
        cars = cars.filter(item=>{
            if(item._id === movies._id){
                item.num--;
                if(item.num <= 0){
                    return false;
                }
            }
            return true
        })

        localStorage.cars = JSON.stringify(cars)
        store.commit(SYNC_UPDATE,cars)
    }
}

//依靠localstorage模拟后台
function getMovies(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
    
}