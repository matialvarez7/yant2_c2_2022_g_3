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
        
    }
});