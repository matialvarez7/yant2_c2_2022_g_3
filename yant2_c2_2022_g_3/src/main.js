import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import bootstrap from "./bootstrap/css/bootstrap.css";

import './assets/main.css'

const routes = [
  {}
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
