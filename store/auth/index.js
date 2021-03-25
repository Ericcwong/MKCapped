import { auth } from "~/plugins/firebase"
export const state = () => ({
    user: null,
    userSignUpStatus: "",
    error:{
        errorCode: null,
        errorMessage: null
    }
})
 


export const getters = {
    isAdmin(state) {
        return state.user
    }
}

