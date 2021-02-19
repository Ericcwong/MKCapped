export const state = () => ({
    user: null,
    isLoggedIn: false
})

export const mutations = {
   async getUser(state, payload){
        state.user = payload
    }
}

export const actions = {
   async getUserFireBase(user){
        
    },
   async createUserFirebase(email, password){
        try{
            await this.$fire.auth.createUserWithEmailAndPassword(email, password)
        }catch(error){
            console.log(error)
        }
    }
}

export const getter = {

}