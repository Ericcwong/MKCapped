const mutations = {
  //Global user data
  setUser(state, payload) {
    console.log(payload)
    state.user = JSON.parse(JSON.stringify(payload))
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
