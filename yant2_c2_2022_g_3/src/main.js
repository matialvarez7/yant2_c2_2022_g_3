import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import './assets/main.css'
import Banner from './components/Banner.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"

const routes = [
  {path: "/", component: Home},
  {path: "/banner", component: Banner},
  {path: "/login", component: Login},
  {path: "/register", component: Register}
]
//hay un atributo llamado "redirect", para redireccionar

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  router,
  routes,
  render: (h) => h(App)
}).$mount('#app')
