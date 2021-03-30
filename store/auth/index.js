import { auth } from "~/plugins/firebase"

export const state = () => ({
    user: null,
    userSignUpStatus: "",
    error:{
        errorCode: null,
        errorMessage: null
    }
})

