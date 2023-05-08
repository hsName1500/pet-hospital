import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';
import VueAxios from 'vue-axios';
axios.defaults.baseURL='http://localhost:4021/v1'
Vue.use(VueAxios,axios)


// 注入swiper 安装命令:npm i swiper@5.* vue-awesome-swiper@4.*
import VAS from 'vue-awesome-swiper'
Vue.use(VAS)
// 全局加载swiper的css文件
import 'swiper/css/swiper.css'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
