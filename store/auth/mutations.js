const mutations = {
  //Global user data
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
  clearUserError(state){
    state.error.errorCode = null,
    state.error.errorMessage =null
  },
  //End of login user functions.
  //Start of sign out user function.
  ON_AUTH_STATE_CHANGED_MUTATION:(state, {authUser, claims}) =>{
    if(!authUser){
      state.user = null
    }else{
      const { email, uid } = authUser
      const admin = claims.admin
      state.user = { email, uid, admin }
      
    }
  }
}

export default mutations
