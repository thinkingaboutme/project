import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
