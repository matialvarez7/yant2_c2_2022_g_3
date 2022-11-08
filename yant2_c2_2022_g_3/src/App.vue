<template>
  <!-- Background image -->
  <div
  class="bg-size"
  style="
    background-image: url('public/fondo2.jpg');
    height: 150vh; background-size:100% 100%;
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
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Juegos</a>
        </li> -->
        <li class="nav-item dropdown">
          <a class="desplegable nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Games
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Sports</a></li>
            <li><a class="dropdown-item" href="#">Shooter</a></li>
          </ul>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
      </ul>
      <router-link to='/login'><button type="button" class="login btn btn-primary">
      Login    
      </button></router-link>  
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>

  </div>
    </nav>
      <br>
  <p class="mainTitulo text-center display-2"><b> Vaporcito Games</b></p> 
  <div class="row">
  <div class="col-sm-2"></div>
  <div class="col-sm-6">
    <div  id="carouselExampleDark" class="container carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
         <img src="/fortnite.jpg" class="d-block w-100" alt="accion">
          <div class="carTitle carousel-caption d-none d-md-block">
            <div class="parText"><u>Fortnite:</u> new update release will include two skins and two more weapons.</div>
          </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="/cuphead.jpg" class="d-block w-100" alt="deportes">
      <div class="carTitle carousel-caption d-none d-md-block">
        <div class="parText"><u>Cuphead 2 is here:</u> the last episode of this craziest game is up to come.</div>
        <!-- <p>Soccer, tennis , football and more</p> -->
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="counter.jpg" class="d-block w-100" alt="shooter">
      <div class="carTitle carousel-caption d-none d-md-block">
        <div class="parText"><u>Summer tournament:</u>the new tournament of cs-go starts next week, with five new teams!</div>
        <!-- <p>Best first person shooter games</p> -->
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-sm-4"></div>
</div>

  <router-view></router-view>
  <br>

  </div>
  </div>
</template>


<style scoped>
.carousel {
  width:100%;
  height:100%;
  margin-left: 8rem;
}

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
</style>