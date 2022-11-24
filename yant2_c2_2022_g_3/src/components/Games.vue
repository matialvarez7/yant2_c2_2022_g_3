<template>
  <div class="container-fluid">
    <div class="tarjetitas"><h2>Games</h2></div>
    <br /><br />
    <div class="tarjetitas row row-cols-1 row-cols-md-3 g-4">
      <div v-for="game in store.games" :key="game.id" class="col">
        <div class="card">
          <img :src="game.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ game.title }}</h5>
            <button
              class="login btn btn-success"
              @click="verifyPurchase(game)"
              style="cursor: pointer"
              v-if="!checkUserGame(game)"
            >
              Comprar
            </button>
            <button
              type="button"
              class="login btn btn-outline-success"
              disabled
              v-else
            >
              ¡Comprado!
            </button>

            <hr />
            <h6 class="card-title">Puntaje: {{ game.raiting }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: proximanova, arial, sans-serif;
  color: antiquewhite;
}

.tarjetitas {
  position: relative;
  left: 400px;
   
}
</style>

<script>
import { myStore } from "../store";
export default {
  setup() {
    const store = myStore();
    return { store };
  },
  data() {
    return {
      // games: [],
    };
  },
  methods: {
    verifyPurchase(game) {
      if (!this.store.logued) {
        this.$swal(
          "User not logued",
          "You must to login in order to buy",
          "warning"
        );
        this.$router.push(`/login`);
      }
    },
    checkUserGame(game) {
      let gameFound = null;
      if (this.store.userLogued) {
        const userGames = this.store.userLogued.juegos;
        gameFound = userGames.find((g) => g.id === game.id);
      }
      return gameFound;
    },
  },
  // created(){
  //   this.games = [
  //     {id:1,image:"/counter.jpg",title:"Counter",desc:"amazing game of all times",category:"action",raiting:8.8},
  //     {id:2,image:"/cuphead.jpg",title:"Cuphead",desc:"el hermoso juego viejo",category:"sports",raiting:7},
  //     {id:3,image:"/fortnite.jpg",title:"Fortnite",desc:"juego de tiros battleRoyal",category:"shooter",raiting:6},
  //     {id:4,image:"/cuphead.jpg",title:"Cup2",desc:"el hermoso juego viejo",category:"sports",raiting:9.2},
  //     {id:5,image:"/counter.jpg",title:"CounterCopia",desc:"juego de tiros",category:"shooter",raiting:7.6},
  //     {id:6,image:"/cuphead.jpg",title:"Cup3",desc:"el hermoso juego viejo",category:"shooter",raiting:5.8},
  //     {id:7,image:"/fortnite.jpg",title:"Fortnite2",desc:"nada nada nada nada",category:"action",raiting:4.8},
  //   ];
  // },
};
</script>
