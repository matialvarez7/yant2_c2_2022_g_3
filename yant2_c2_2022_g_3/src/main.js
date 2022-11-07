import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/main.css'
import Banner from './components/Banner.vue';
import Login from './components/Login.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"



const routes = [
  {path: "/banner", component: Banner},
  {path: "/login", component: Login}
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  router,
  routes,
  render: (h) => h(App)
}).$mount('#app')
