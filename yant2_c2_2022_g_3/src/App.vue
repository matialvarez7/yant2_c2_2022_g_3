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
          <router-link class="nav-link active" aria-current="page" to="/" style="cursor: pointer">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="desplegable nav-link" role="button"  aria-expanded="false"  @click="goTo('games')">
            Games
          </a>
          <!-- <ul class="dropdown-menu">
            <li><a v-for="(categ) in store.category" :key="categ.id" 
            @click="goTo('games')"
            class="dropdown-item" style="cursor: pointer" >Games</a></li>
          </ul> -->
        </li>
       
      </ul>
      <router-link to='/login'>
      <button v-if="store.authLogin" type="button" class="login btn btn-primary">Login</button></router-link>
      <router-link to='/'>
      <button @click="logout()" v-if="!(store.authLogin)"  type="button" class="login btn btn-primary">Logout</button>
        </router-link>
    </div>

  </div>
    </nav>
      <br>

      <!-- <div>
      <ul>
      <li v-for="user in store.users" :key="user.id" class="desplegable" >
          {{user.firstName}}
      </li>
      </ul>
      </div>

      <div>
      <ul>
      <li v-for="game in store.games" :key="game.id" class="desplegable" >
          {{game.image}}
      </li>
      </ul>
      </div> -->
    
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
import { myStore }  from './store'
export default {
  setup() {
    const store = myStore()
    return { store } 
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
        this.store.userLogued = {},
        this.store.changeAuthLog()
        console.log(this.store.userLogued);
    },
    async initUsersGames(){
    const usersFetch = await fetch('https://www.mockachino.com/6301ff69-f7fa-4e/users');
    const gamesFetch = await fetch('https://www.mockachino.com/6301ff69-f7fa-4e/games')
    const usersData = await usersFetch.json();
    const gamesData = await gamesFetch.json();
    this.store.usersList = usersData.users;
    this.store.gamesList = gamesData.games;
    }
  },
  mounted(){
  //  this.category = this.store.category
    // this.category = [
    //   {id:1,name:"Action"},
    //   {id:2,name:"Sports"},
    //   {id:3,name:"Shooter"},
    // ];
   this.initUsersGames()
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