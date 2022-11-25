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
      } else {
        this.saveGame(game);
        this.$swal(
          "Successful purchase!!",
          "Thank you!!",
          "success"
        );
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
    async saveGame(game) {
      let uGame = {...game} //creamos la copia del juego original
      uGame.raiting = 0 //seteamos el ranking en 0
      let userGames = this.store.logued.juegos //nos traemos los juegos del ususario
      userGames.push(uGame)  //guardamos el nuevo juego
      await this.store.updateBase(userGames) //actualizamos la base
    },
  },
};
</script>
