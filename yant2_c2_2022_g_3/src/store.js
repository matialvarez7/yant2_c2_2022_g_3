import { defineStore} from "pinia";

export const storeUser = defineStore('stUs',{
    state: () => ({
        userAuth:true,
        category: [
            {id:1,name:"Action"},
            {id:2,name:"Sports"},
            {id:3,name:"Shooter"},
            ],
            users: []
    }),
    getters:{
        authLogin:(state) => state.userAuth,
        getCategory:(state) => state.category,
        allUsers:(state) => state.users
    },
    actions:{
        changeAuthLog () {
            this.userAuth = !this.userAuth
        },
        initUsers: async () => {
            const usersFetch = await fetch('https://www.mockachino.com/5845c627-4a5c-41/users')
            state.users = usersFetch.users
        }
    }
});