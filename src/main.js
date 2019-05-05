import Vue from 'vue'
import App from './App.vue'
import './assets/statics/site/css/style.css'
// import router from './components/router'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from './components/find.vue'
import detail from './components/detail.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import userContainer from './components/userContainer.vue'
import userDetail from './components/userDetail.vue'
import userIndex from './components/userIndex.vue'
import userOrder from './components/userOrder.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://111.230.232.110:8899';


Vue.prototype.$axios=axios
Vue.use(ElementUI);
const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/detail/:id',
    component: detail
  },
  {
    path: '/user',
    component: userContainer,
    children:[
      {path:'Detail',component:userDetail},
      {path:'Index',component:userIndex},
      {path:'order',component:userOrder},
    ]
  
  }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
