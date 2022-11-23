import { defineStore } from "pinia";

export const myStore = defineStore('stUs',{
    state: () => ({
        userAuth:true,
        category: [
            {id:1,name:"Action"},
            {id:2,name:"Sports"},
            {id:3,name:"Shooter"},
            ],
            usersList:[]
    }),
    getters:{
        authLogin:(state) => state.userAuth,
        getCategory:(state) => state.category,
        users:(state) => state.usersList,
    },
    actions:{
        changeAuthLog () {
            this.userAuth = !this.userAuth
        }
    }
});