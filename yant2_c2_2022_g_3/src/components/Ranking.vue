<template>
   <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Top games</span>
    </a>
    <hr>
    <ul v-for="game in topFive" :key="game.id" class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        {{game.title}}: {{game.raiting}}
      </li>
    </ul>
  </div>
</template>

<style scoped>

    /* h1 {
        color: antiquewhite;
    } */
</style>

<script>
import { myStore } from '../store'
export default {
  setup () {
    const store = myStore();
    return { store };
  },
  data() {
    return {
        topFive:[]
    }
  },
  methods: {
    getTopFive () {
        let orderList = this.store.games.sort((a,b) => b.raiting - a.raiting)
        this.topFive = orderList.filter((e,i) => i < 5)
    }
  },
}
</script>