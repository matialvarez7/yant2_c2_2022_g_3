<template>
  <div>
    <p class="mainTitulo display-1"><b>Vaporcito</b></p>

    <!-- Carousel de noticias -->

    <div
      id="mainCarousel"
      class="container carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <img src="/newsmarioparty.jpg" class="d-block w-100" alt="accion" />
          <div class="carrMainTitle carousel-caption d-none d-md-block">
            <div class="parText">
              <b
                ><u>Last DLC Mario Party:</u>new update release will include 3
                more characters, 2 amazing maps and 10 incredible games!!</b
              >
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="/newscuphead.jpg" class="d-block w-100" alt="deportes" />
          <div class="carrMainTitle carousel-caption d-none d-md-block">
            <div class="parText">
              <b
                ><u>Cuphead 2 is here:</u> the last episode of this craziest
                game is up to come.</b
              >
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="/newsfifa2022.jpg" class="d-block w-100" alt="shooter" />
          <div class="carrMainTitle carousel-caption d-none d-md-block">
            <div class="parText">
              <b
                ><u>New Messi's movie:</u>Fifa 2022 will promotion his new
                release with a Messi movie 3D</b
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel de games -->

    <p class="mainCateogry display-4"><b>Games</b></p>
    <div
      id="carouselCategory"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <router-link to="/games"
            ><img
              src="/originales/fortnit.jpg"
              class="d-block w-100"
              alt="accion"
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <router-link to="/games"
            ><img
              src="/originales/papermario.jpg"
              class="d-block w-100"
              alt="deportes"
          /></router-link>
        </div>
        <div class="carousel-item">
          <router-link to="/games"
            ><img
              src="/originales/seaofthieves.jpg"
              class="d-block w-100"
              alt="shooter"
          /></router-link>
        </div>
        <div class="carousel-item">
          <router-link to="/games"
            ><img
              src="/originales/luigismansion.jpg"
              class="d-block w-100"
              alt="shooter"
          /></router-link>
        </div>
      </div>
      <button
        class="carrBot carousel-control-prev"
        type="button"
        data-bs-target="#carouselCategory"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carrBot carousel-control-next"
        type="button"
        data-bs-target="#carouselCategory"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { myStore } from "../store";

export default {
  setup() {
    const store = myStore();
    return { store };
  },
};
</script>

<style scoped>
#mainCarousel {
  width: 900px;
  height: 500px;
  position: absolute;
  top: 240px;
  left: 460px;
}

.carrMainTitle {
  text-align: left;
  font-size: 2rem;
  position: absolute;
  bottom: 0rem;
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
  color: rgb(244, 244, 244);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.mainTitulo {
  color: rgb(255, 253, 251);
  font-family: fantasy;
  text-shadow: 1px 1px 1px red, 2px 2px 1px red;
  position: absolute;
  top: 73px;
  left: 760px;
}

/* Style Carousel Category */
#carouselCategory {
  width: 600px;
  height: 500px;
  position: absolute;
  top: 810px;
  left: 600px;
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