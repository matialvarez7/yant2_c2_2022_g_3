import { defineStore } from "pinia";

export const myStore = defineStore('stUs',{
    state: () => ({
        userLogued:null,
        category: [
            {id:1,name:"Action"},
            {id:2,name:"Sports"},
            {id:3,name:"Shooter"},
            ],
            usersList:[],
            gamesList:[]
    }),
    getters:{
        getCategory:(state) => state.category,
        users:(state) => state.usersList,
        games:(state) => state.gamesList,
        logued:(state) => state.userLogued,
    },
    actions:{
        changeAuthLog () {
            this.userLogued = !this.userLogued
        },
        //actualizar datos de los juegos del usuario
        async updateBase(userGames){ 
            await fetch(
                `https://6380052d2f8f56e28e9a442f.mockapi.io/users/${this.logued.id}`,
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
        //calcular y actualizar ranking de un juego
            updateRaitingGame(gameId) {
            let gameProm = 0 //variable para guardar el promedio
            let usersWithGame = 0 //cantidad de usuarios con el juego
            let totalUsersRaiting = 0 //puntaje total de todos los usuarios
            //Recorro la lista de usuarios
            this.usersList.forEach(e => {
                 let gameFound = (e.juegos).find(g => g.id === gameId) //busco si el usuario tiene el juego
                 if(gameFound){ //si lo tiene, actualizo el contador y acumulador
                    usersWithGame++
                    totalUsersRaiting += gameFound.raiting
                 }
            })
            //verifico si habia usuarios con el juego y calculo el promedio
            if(usersWithGame != 0){gameProm = totalUsersRaiting / usersWithGame} //si al menos 1 tiene el juego, hacemos el calculo
            //actualizo la lista de juegos localmente
            this.gamesList.find(e => {
                if(e.id === gameId){
                    e.raiting = gameProm    
                }
            })
            this.updateBDGame(gameId,gameProm)
        },
        async updateBDGame(gameId,gameProm){ 
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
        async registerUser(firstName,lastName,email,password) {
            
        }
    }
});