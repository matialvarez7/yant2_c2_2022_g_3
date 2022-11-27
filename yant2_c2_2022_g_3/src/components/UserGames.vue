<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8"></div>
      <div v-if="!emptyGames()">
        <div v-for="game in store.logued.juegos" :key="game.id">
          <div class="card mb-3" style="max-width: 980px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  :src="game.image"
                  class="img-fluid rounded-start"
                  alt="error"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ game.title }}</h5>
                  <p class="card-text">
                    {{ game.description }}
                  </p>
                  <!-- <p class="card-text"></p> -->
                  <div v-if="game.raiting === 0" class="row">
                    <div class="col-sm-3">
                      <h6>Rate game:</h6>
                    </div>
                    <div class="col-sm-6">
                      <select v-model="puntaje[game.id]">
                        <option disabled value="">Please select one</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <button
                      @click="rankear(game, game.id)"
                      class="col-sm-2 btn btn-success btn-block"
                    >
                      Rate
                    </button>
                  </div>
                  <div v-if="game.raiting > 0" class="row">
                    <div class="col-sm-3">
                      <h6>Raiting: {{ game.raiting }}</h6>
                    </div>
                    <div class="col-sm-6"></div>
                    <button
                      @click="rateAgain(game)"
                      class="col-sm-2 btn btn-primary btn-block"
                    >
                      Modify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else style="color: white">
        <h1>You don't have games in your account</h1>
      </div>
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
  data() {
    return {
      opciones: [1, 2, 3, 4, 5],
      puntaje: [],
    };
  },
  methods: {
    rateAgain(game) {
      game.raiting = 0;
    },
    async rankear(game, id) {
      game.raiting = parseInt(this.puntaje[id], 10);
      let userGames = this.store.logued.juegos;
      this.$swal("Thanks!!!", "Keep buying games!!", "success");
      this.store.updateBase(userGames);
      this.updateRaitingGame(game.id);
      this.store.getTopFive();
    },
    emptyGames() {
      return this.store.logued.juegos.length === 0;
    },

    //calcular y actualizar ranking de un juego
    async updateRaitingGame(gameId) {
      let gameProm = 0; //variable para guardar el promedio
      let usersWithGame = 0; //cantidad de usuarios con el juego
      let totalUsersRaiting = 0; //puntaje total de todos los usuarios
      //Recorro la lista de usuarios
      this.store.users.forEach((e) => {
        let gameFound = e.juegos.find((g) => g.id === gameId && g.raiting > 0); //busco si el usuario tiene el juego, si no lo rankeo, no lo cuenta
        if (gameFound) {
          //si lo tiene, actualizo el contador y acumulador
          usersWithGame++;
          totalUsersRaiting += gameFound.raiting;
        }
      });
      //verifico si habia usuarios con el juego y calculo el promedio
      if (usersWithGame != 0) {
        gameProm = totalUsersRaiting / usersWithGame;
      } //si al menos 1 tiene el juego, hacemos el calculo
      //actualizo la lista de juegos localmente
      this.store.games.find((e) => {
        if (e.id === gameId) {
          e.raiting = gameProm.toFixed(2);
        }
      });
      await this.updateBDGame(gameId, gameProm);
    },
    async updateBDGame(gameId, gameProm) {
      await fetch(
        `https://6380052d2f8f56e28e9a442f.mockapi.io/games/${gameId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            raiting: gameProm,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    },

    /*   Final de methods         */
  },
};
</script>
