import { defineStore} from "pinia";

export const storeUser = defineStore('stUs',{
    state: () => ({
        userAuth:true,
        category: [
            {id:1,name:"Action"},
            {id:2,name:"Sports"},
            {id:3,name:"Shooter"},
            ]
    }),
    getters:{
        authLogin:(state) => state.userAuth,
        getCategory:(state) => state.category
    },
    actions:{
        changeAuthLog () {
            this.userAuth = !this.userAuth
        }
    }
});