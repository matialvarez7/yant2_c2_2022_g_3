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
        // changeAuthLog () {
        //     this.userAuth = !this.userAuth
        // }
    }
});