import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import './assets/main.css'
import Games from './components/Games.vue';
import Banner from './components/Banner.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue'
import UserGames from './components/UserGames.vue'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import {PiniaVuePlugin,createPinia} from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
//SweetAlert

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
//sweetAlert

const routes = [
  {path: "/", component: Home},
  {path: "/games", component: Games},
  {path: "/banner", component: Banner},
  {path: "/login", component: Login},
  {path: "/register", component: Register},
  {path:"/usergames",component:UserGames},
  {path:'*', redirect: '/'}
]

//hay un atributo llamado "redirect", para redireccionar

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  router,
  routes,
  pinia,
  render: (h) => h(App)
}).$mount('#app')
