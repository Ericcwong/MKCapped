const mutations = {
  //Global user data
  setUser(state, payload) {
    console.log(payload)
    const email = payload.email
    const uid = payload.uid
    const admin = payload.admin
    state.user = {email, uid, admin}
    // if(payload.admin){
      // state.user.admin === payload.admin
    // }else{
      // return
    // }
  },
  clearUser(state){
    state.user = null
  },
  //Start of login user functions.
  updateUserStatus(state) {
    state.userSignUpStatus = "Sign up Successful!"
    console.log(state.userSignUpStatus)
  },
  getUserError(state, payload) {
    console.log(payload.errorCode)
    console.log(payload.errorMessage)
    state.error.errorCode = payload.errorCode
    state.error.errorMessage = payload.errorMessage
  },
  //End of login user functions.
  //Start of sign out user function.
}

export default mutations
