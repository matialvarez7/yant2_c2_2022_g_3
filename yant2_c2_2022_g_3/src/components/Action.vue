<template>

    <div class="container-fluid">
        <h2>Action games</h2> <br><br>
    <div class="tarjetitas row row-cols-1 row-cols-md-3 g-4">
  <div v-for="(game) in games" :key="game.id" class="col">
    <div class="card">
      <img :src="game.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{game.title}}</h5>
       <a @click="goTo(game.id)">Comprar</a>
      </div>
    </div>
  </div>
  </div> 
</div>
 
</template>

<style scoped>
    h2 {
      font-family:proximanova,arial,sans-serif;
      color: antiquewhite;
    }

  .tarjetitas{
  position: relative;
  left: 600px
}

</style>

<script>
export default {
  data () {
      return {
      games: [],
    }
  },
  methods: {
    goTo(id){
      this.$router.push(`/actionbuy`)
    }
  },
  created(){
    this.games = [
      {id:1,image:"https://as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal_recorte1.jpg",title:"Action",desc:"sebastian pete"},
      {id:2,image:"/cuphead.jpg",title:"Pepe",desc:"el hermoso juego viejo"},
      {id:3,image:"/fortnite.jpg",title:"Sasa",desc:"juego de tiros battleRoyal"},
      {id:4,image:"/cuphead.jpg",title:"Pepe",desc:"el hermoso juego viejo"},
      {id:5,image:"/counter.jpg",title:"Sasa",desc:"juego de tiros"},
      {id:6,image:"/cuphead.jpg",title:"Pepe",desc:"el hermoso juego viejo"},
      {id:7,image:"",title:"Sasa",desc:"nada nada nada nada"},
    ];
  },
};
</script>
