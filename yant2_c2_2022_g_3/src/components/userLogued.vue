<template>
   <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
    <div  class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">{{ store.logued.firstName }}</span>
    </div>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/usergames" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Mis juegos
        </router-link>
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
  }
}
</script>