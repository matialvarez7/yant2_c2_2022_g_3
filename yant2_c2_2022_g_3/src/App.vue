<template>
  <!-- Background image -->
  <!-- <div
  class="bg-size"
  style="
    background-image: url('/fondo4.png');
    height: 140vh; background-size:100% 100%;
    background-repeat: repeat;
  "
> -->

  <div id="app">
    <div class="background">
    <nav class="container navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
    <!-- <div class="textoNav">Vaporcito</div> -->
    <img class="imgLogo" src="/logo.jpg" alt="">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/" style="cursor: pointer">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="desplegable nav-link" role="button"  aria-expanded="false"  @click="goTo('games')">
            Games
          </a>
        </li>
       
      </ul>
      <router-link to='/login'>
      <button v-if="!(store.logued)" type="button" class="login btn btn-primary">Login</button></router-link>
      <router-link to='/'>
      <button @click="logout()" v-if="(store.logued)"  type="button" class="login btn btn-primary">Logout</button>
        </router-link>
    </div>

  </div>
    </nav>
      <br>

   <!-- SideBar Ranking    -->
   <div class="sidebarRanking d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
    <div  class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Ranking</span>
    </div>
    <hr>
    <ul v-for="(game, index) in this.store.topFive" :key="index" class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
      <h5>{{index+1}} {{game.title}} {{game.raiting}}</h5>
      </li>
    </ul>
</div>

<!-- SideBar Ranking    -->
   <div class="container-fluid"> 
    <div class="row"> 
  <div class="sidebar col-3" v-if="(store.logued)"><app-userLogued></app-userLogued></div>
  
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
    //  topFive: [],
    }
  },
  methods: {
    // getTopFive () {
    //     let orderList = this.store.games.sort((a,b) => b.raiting - a.raiting)
    //     this.topFive = orderList.filter((e,i) => i < 5)
    // },
    goTo(categoryName){    
      this.$router.push(`/${categoryName}`)
    },
    logout(){
        this.$router.push(`/`)
        this.store.changeAuthLog()
    },
    async initUsersGames(){
    const usersFetch = await fetch('https://6380052d2f8f56e28e9a442f.mockapi.io/users');
    const gamesFetch = await fetch('https://6380052d2f8f56e28e9a442f.mockapi.io/games')
    const usersData = await usersFetch.json();
    const gamesData = await gamesFetch.json();
    this.store.usersList = usersData;
    this.store.gamesList = gamesData;
    this.store.getTopFive()
    }
  },
  async mounted(){
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

.background {
  background-image: url('/fondo6.jpg');
  background-size: cover;

/* Set rules to fill background */
  min-height: 100%;
  max-height: 200vh;
  min-width: 1080px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: 150vh;
}



.imgLogo {
  width: 100px;
}

.sidebarRanking {
  position: absolute;
  left: 98rem;
}

/* NavBar style */

.textoNav {
  margin-right: 1rem;
  /* font-size:2rem;
  color:rgb(248, 248, 248); */
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
  top: 1330px;
}

a.textFoot {
  color: rgb(255, 253, 251)!important;
}

p.textFoot {
  color: rgb(255, 253, 251)!important;
}

</style>