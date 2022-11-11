import { defineStore} from "pinia";

export const storeUser = defineStore('stUs',{
    state: () => ({
        userAuth:true
    }),
    getters:{
        authLogin:(state) => state.userAuth,
    },
    actions:{
        changeAuthLog () {
            if(this.userAuth){
                this.userAuth = false;
            } else {
                this.userAuth = true
            }
            
        }
    }
});