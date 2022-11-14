<template>
 
 <!-- <div class="row">
  <div class="col-2"></div>
  <div class="col-4"> -->
    <div>
    <p class="mainTitulo display-2"><b>Vaporcito Games</b></p>
    <div id="mainCarousel" class="container carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
         <img src="/fortnite.jpg" class="d-block w-100" alt="accion">
          <div class="carrMainTitle carousel-caption d-none d-md-block">
            <div class="parText"><u>Fortnite:</u> new update release will include two skins and two more weapons.</div>
          </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="/cuphead.jpg" class="d-block w-100" alt="deportes">
      <div class="carrMainTitle carousel-caption d-none d-md-block">
        <div class="parText"><u>Cuphead 2 is here:</u> the last episode of this craziest game is up to come.</div>
        <!-- <p>Soccer, tennis , football and more</p> -->
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="counter.jpg" class="d-block w-100" alt="shooter">
      <div class="carrMainTitle carousel-caption d-none d-md-block">
        <div class="parText"><u>Summer tournament:</u>the new tournament of cs-go starts next week, with five new teams!</div>
        <!-- <p>Best first person shooter games</p> -->
      </div>
    </div>
  </div>
</div>
<!-- </div> -->
<!-- <div class="col-6"></div><br><br> -->


  
  <!-- <div class="col-sm-2"></div>
  <div class="col-sm-4"><br> -->
    <p class="mainCateogry display-4"><b>Category</b></p>
    <div id="carouselCategory" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carrInd carousel-indicators">
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="/carrAcc.jpg" class="d-block w-100" alt="accion">
      <div class="carTitle carousel-caption d-none d-md-block">
        <a @click="goTo('action')">Action games</a>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/carrDep.jpg" class="d-block w-100" alt="deportes">
      <div class="carTitle carousel-caption d-none d-md-block">
         <a @click="goTo('sports')">Sports games</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src="carrShooter.jpg" class="d-block w-100" alt="shooter">
      <div class="carTitle carousel-caption d-none d-md-block" >
        <a @click="goTo('shooter')">Shooter games</a>
      </div>
    </div>
  </div>
  <button class="carrBot carousel-control-prev" type="button" data-bs-target="#carouselCategory" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carrBot carousel-control-next" type="button" data-bs-target="#carouselCategory" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<!-- <div class="col-sm-6"></div> -->
<!-- </div> -->
</template>

<script>
export default {
 data (){
    return {
      
    }
  },
  methods: {
    goTo (category){
      this.$router.push(`/${category}`)
    }
  },
}
</script>

<style scoped> 

 #mainCarousel {
  width:900px;
  height:500px;
  position: absolute;
  top: 190px;
  left: 460px;
} 


.carrMainTitle {
  text-align: left;
  font-size: 2rem;
  position: absolute;
  bottom: 17rem;
  left: 1rem;
}

.mainCateogry {
  color: rgb(255, 253, 251);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: absolute;
  top: 44rem;
  left: 50rem;
}

.parText {
color:rgb(43, 93, 186);
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.mainTitulo {
  color: rgb(255, 253, 251);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: absolute;
  top: 70px;
  left: 600px;
}

/* Style Carousel Category */
  #carouselCategory {
  width:600px;
  height:500px;
  position: absolute;
  top: 810px;
  left: 600px;
}

.carTitle {
  font-size: 50px;
  font-family: optima, sans-serif;
  text-align: center;
  color:rgb(217, 215, 215);
  position: absolute;
  bottom: 110px;
  cursor: pointer
}

.carrBot {
  position: absolute;
  bottom: 150px;
}

.carrInd {
position: absolute;
bottom: 180px;
}
</style>