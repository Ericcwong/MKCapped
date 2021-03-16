import { auth } from "~/plugins/firebase"

export const state = () => ({
    user: {},
    userSignUpStatus: "",
    error:{
        errorCode: null,
        errorMessage: null
    }
})
 
export const mutations = {
    updateUserStatus(state){
        state.userSignUpStatus = "Sign up Successful!"
        console.log(state.userSignUpStatus)
    },
    getUser(state, payload){
        state.user = JSON.parse(JSON.stringify(payload))
    },
    getUserError(state, payload){
        console.log(payload.errorCode)
        console.log(payload.errorMessage)
        state.error.errorCode = payload.errorCode;
        state.error.errorMessage = payload.errorMessage;
    }

}

export const actions = {
    async getUserByEmail({commit}, payload){
            try {
              await auth
                .signInWithEmailAndPassword(payload[0],payload[1])
                .then((response) => {
                  commit("getUser", response.user)
                })
            } catch (error) {
              let errorCode = error.code
              let errorMessage = error.message
              commit("getUserError", {errorCode, errorMessage})

            }
    }

}

export const getters = {

}
