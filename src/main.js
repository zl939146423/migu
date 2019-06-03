import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入main.scss文件
import "./stylesheets/main.scss"
//引入rem。js文件
import "./modules/rem"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
