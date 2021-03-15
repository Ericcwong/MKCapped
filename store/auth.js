import { auth } from "~/plugins/firebase"

export const state = () => ({
    user: {},
    userSignUpStatus: ""
})
 
export const mutations = {
    updateUserStatus(state){
        state.userSignUpStatus = "Sign up Successful!"
        console.log(state.userSignUpStatus)
    },
    getUser(state, payload){
        console.log(payload)
        state.user = payload
    }
}

export const actions = {
    async getUserByEmail({commit}, payload){
            try {
                console.log(payload)
              await auth
                .signInWithEmailAndPassword(payload[0],payload[1])
                .then((response) => {
                  console.log(response)
                })
            } catch (error) {
                console.log(error)
              let errorCode = error.code
              let errorMessage = error.message
            }
    }

}

export const getters = {

}
