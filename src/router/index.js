import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import fastClick from 'fastclick'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'

Vue.config.productionTip = false
Vue.use(Router)
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
