import { defineStore } from "pinia";

export const myStore = defineStore('stUs',{
    state: () => ({
        userAuth:true,
        userLogued:{},
        category: [
            {id:1,name:"Action"},
            {id:2,name:"Sports"},
            {id:3,name:"Shooter"},
            ],
            usersList:[],
            gamesList:[]
    }),
    getters:{
        authLogin:(state) => state.userAuth,
        getCategory:(state) => state.category,
        users:(state) => state.usersList,
        games:(state) => state.gamesList,
        logued:(state) => state.userLogued,
    },
    actions:{
        changeAuthLog () {
            this.userAuth = !this.userAuth
        }
    }
});