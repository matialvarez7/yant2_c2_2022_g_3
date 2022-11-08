<template>
<div class="row">
  <div class="col-sm-2"></div>
  <div class="col-sm-4">
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carrInd carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="/carrAcc.jpg" class="d-block w-100" alt="accion">
      <div class="carTitle carousel-caption d-none d-md-block">
       <p>Action games</p>
        <!-- <p>Games that you are going to play long time</p> -->
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/carrDep.jpg" class="d-block w-100" alt="deportes">
      <div class="carTitle carousel-caption d-none d-md-block">
        <p>Sports games</p>
        <!-- <p>Soccer, tennis , football and more</p> -->
      </div>
    </div>
    <div class="carousel-item">
      <img src="carrShooter.jpg" class="d-block w-100" alt="shooter">
      <div class="carTitle carousel-caption d-none d-md-block">
        <p>Shooter games</p>
        <!-- <p>Best first person shooter games</p> -->
      </div>
    </div>
  </div>
  <button class="carrBot carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carrBot carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div class="col-sm-6"></div>
</div>
</template>

<style scoped>
  .carousel {
  width:600px;
  height:500px;
  position: absolute;
  top: 710px;
  left: 600px;
}

.carTitle {
  font-size: 50px;
  font-family: optima, sans-serif;
  text-align: center;
  color:rgb(217, 215, 215);
  position: absolute;
  bottom: 110px;
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