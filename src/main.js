import Vue from 'vue'
import App from './App.vue'
import './assets/statics/site/css/style.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from './components/find.vue'
import detail from './components/detail.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
const routes=[
  {path:'/index',component:index},
  {path:'/detail/:id',component:detail}
]
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
