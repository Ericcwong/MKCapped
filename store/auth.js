export const state = () => ({
    user: {},
    userSignUpStatus: ""
})
 
export const mutations = {
    updateUserStatus(state){
        state.userSignUpStatus = "Sign up Successful!"
        console.log(state.userSignUpStatus)
    }
}

export const actions = {

}

export const getters = {

}
