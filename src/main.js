import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入main.scss文件
import "./stylesheets/main.scss"
//引入rem。js文件
import "./modules/rem"
//引入swiper.min.css文件
import "swiper/dist/css/swiper.min.css"
//引进来之后绑定在vue的prototype上
import axios from "axios"
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
