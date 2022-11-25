<template>
  <div class="center">
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
                    <input type="text" class="form-control" />
                    <label class="form-label">Puntuacion</label>
                  <!-- <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      v-model="puntaje"
                    />
                    <label class="form-check-label" for="inlineRadio1">{{op[0]}}</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      v-model="puntaje"
                    />
                    <label class="form-check-label" for="inlineRadio2">{{op[1]}}</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      v-model="puntaje"
                    />
                    <label class="form-check-label" for="inlineRadio3"
                      >{{op[2]}}</label
                    >
                    </div>
                    <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio4"
                      v-model="puntaje"
                    />
                    <label class="form-check-label" for="inlineRadio4"
                      >{{op[3]}}</label
                    >
                    </div>
                    <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio5"
                      v-model="puntaje"
                    />
                    <label class="form-check-label" for="inlineRadio5"
                      >{{op[4]}}</label
                    >
                  </div> -->
                </div>
                <button
                  @click="rankear()"
                  
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
      op: [1, 2, 3, 4, 5],
      puntaje:0
    };
  },
  methods: {
    async rankear() {
      let userGames = this.store.logued.juegos;
      await fetch(
        `https://6380052d2f8f56e28e9a442f.mockapi.io/users/${this.store.logued.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            juegos: userGames,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    },
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