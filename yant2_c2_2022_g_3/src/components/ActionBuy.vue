<template>
        <div class="center">
            <div class="row align-items-start">
                <div class="imagenJuego col">
                  <img class="" src='/fondo1.jpg'><br><br>
                    </div>
            </div>
         <div class="row align-items-center">   
            <div class="col">
        <h1 class="titulo">Titulo de juego</h1><br><br>
        <h3 class="titulo">Descripcion de juego</h3><br><br>
        <button class="titulo">Comprar</button>
        </div>
        <!-- Juego: {{$route.params.id}} -->
    </div>
    </div>
</template>

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