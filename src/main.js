// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
import 'swiper/dist/css/swiper.min.css'
import BootstrapVue from 'bootstrap-vue'



import router from './router'
import './bus'
import currencyFilter from './filters/currency'
import timeFilter from './filters/time'

Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.use(BootstrapVue)
VeeValidate.Validator.localize('zh_TW',zhTWValidate)

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.component('Loading',Loading)
Vue.filter('currency',currencyFilter)
Vue.filter('time',timeFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

router.beforeEach((to,from,next)=>{
  console.log(to,from,next)
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next()
      }else{
        next({
          path:'/login'
        })
      }
    });
  }else{
    next()
  }
})
