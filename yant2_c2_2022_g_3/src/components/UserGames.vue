<template>
  <div class="center">
    <div v-if="!(emptyGames())">
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
              <div class="row">
                <div class="col-sm-3">
                  <h6>Puntuar juego:</h6>
                </div>
                <div class="col-sm-6">
                  <!-- <input v-model="puntaje[game.id]" type="text"/>
                    <button @click="rankear(game,game.id)" class="col-sm-2 btn btn-success btn-block">Ok</button> -->

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
                  Puntuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else style="color:white">
    <h1>You haven't games in your account</h1>
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
    async rankear(game, id) {
      game.raiting = parseInt(this.puntaje[id], 10);
      let userGames = this.store.logued.juegos;
      this.store.updateBase(userGames)
    },
    emptyGames () {
      return (this.store.logued.juegos).length === 0
    }
  },
};
</script>

<!-- 
<style scoped>
    .titulo {
        color: rgb(213, 213, 213);
    }

    .center {
        position: relative;
        left: 500px;
    }

    .imagenJuego {
        position: relative;
        right: 100px;
    }
    

</style>  
 -->