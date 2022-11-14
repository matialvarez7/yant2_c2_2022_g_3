<template>
  <!-- Background image -->
  <div
  class="bg-size"
  style="
    background-image: url('/fondo2.jpg');
    height: 150vh; background-size:100% 100%;
    background-repeat: repeat;
  "
>

  <div id="app">
    <nav class="container navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
    <div class="textoNav">Vaporcito</div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="desplegable nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Games
          </a>
          <ul class="dropdown-menu">
            <li><a v-for="(categ) in category" :key="categ.id" 
            @click="goTo(categ.name)"
            class="dropdown-item" style="cursor: pointer" >{{categ.name}}</a></li>
          </ul>
        </li>
       
      </ul>
      <router-link to='/login'>
      <button v-if="store.authLogin" type="button" class="login btn btn-primary">Login</button></router-link>
      <router-link to='/'>
      <a @click="goTo(game.id)"><button @click="logout()" v-if="!(store.authLogin)"  type="button" class="login btn btn-primary">Logout</button></a>
        </router-link>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>

  </div>
    </nav>
      <br>

   <div class="container-fluid"> 
    <div class="row"> 
  <div class="sidebar col-3" v-if="!(store.authLogin)"><app-userLogued></app-userLogued></div>
  
  <div class="col-6"><router-view></router-view></div>
  </div>
  <br>
  </div>
  <div class="footPers container">

  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="textFoot col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto ">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">      
      <li class="nav-item"><a href="#" class="textFoot nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="textFoot nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="textFoot nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="textFoot nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="textFoot nav-link px-2 text-muted">About</a></li>
    </ul>
  </footer>
</div>
  </div>
  </div>
</template>

<script>
import userLogued from './components/userLogued.vue';
import { storeUser } from './store'
export default {
  setup() {
    const store = storeUser()
    return {store} 
  },
  components: {
      'app-userLogued': userLogued
  },
  data () {
    return {
      category: [],
    }
  },
  methods: {
    goTo(categoryName){    
      this.$router.push(`/${categoryName}`)
    },
    logout(){
        this.store.changeAuthLog()
    }
  },
  created(){
    this.category = [
      {id:1,name:"Action"},
      {id:2,name:"Sports"},
      {id:3,name:"Shooter"},
    ];
  },
};
</script>


<style scoped>
/* SideBar 
.sidebar {
   position: absolute;
  top: 200px; 
} */

/* NavBar style */

.textoNav {
  margin-right: 1rem;
  font-size:2rem;
  color:rgb(248, 248, 248);
}

.desplegable {
  color:rgb(248, 248, 248);
}

.login {
  margin-right: 2rem;
}

.navbar-nav .nav-link.active {
  color:rgb(248, 248, 248);
}

.nav-link:hover, .nav-link:focus {
 color: rgb(244, 28, 28);
}

/* Carousel style */

/* .carousel {
  width:100%;
  height:100%; 
  margin-left: 8rem;
} */

.carTitle {
  text-align: left;
  font-size: 2rem;
  position: absolute;
  bottom: 17rem;
  left: 1rem;
}

.parText {
color:rgb(43, 93, 186);
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.mainTitulo {
  color: rgb(196, 124, 41);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}


/* Footer style */

.footPers {
  position: absolute;
  left: 13rem;
  top: 80rem;
}

a.textFoot {
  color: rgb(255, 253, 251)!important;
}

p.textFoot {
  color: rgb(255, 253, 251)!important;
}

</style>