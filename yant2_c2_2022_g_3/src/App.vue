<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <div id="app">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <router-link to = "/banner">Banner </router-link>
      
        </div>
        <div class="col">
          Column
        </div>
        <div class="col">
          <router-link to = "/login">Login</router-link>
        </div>
      </div>
    </div>
    <br>
    <br>
    <router-view></router-view> 
  </div>
 
</template>

