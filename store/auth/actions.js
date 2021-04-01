const actions = {
  //Start of login user functions
  async getUserByEmail({ commit }, payload) {
    try {
      await this.$fire.auth
        .signInWithEmailAndPassword(payload.email, payload.password)
    } catch (error) {
      let errorCode = error.code
      let errorMessage = error.message
      commit("getUserError", { errorCode, errorMessage })
    }
  },
  //End of login user functions

  //Start of register user functions
  async createUserFirebase({ commit }, payload) {
    try {
      await this.$fire.auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          console.log(res.user)
          if (res.additionalUserInfo.isNewUser === true) {
            const user = auth.currentUser
            commit("updateUserStatus")
            this.$router.push("/user/login")
            return user.updateProfile({
              displayName: payload.name,
            })
          }
        })
    } catch (error) {
      this.error = error.message
      console.log(error)
    }
  },
  //End of register user functions

  //Start of sign out user functions
  async signOutUser({commit}) {
    try {
      console.log("signed out")
      await this.$fire.auth.signOut()
    } catch (error) {
      console.log(error)
    }
  },
  //End of sign out user functions

  //Start of Forgot password
  async forgotPassword({commit},payload){
    let email = payload
    this.$fire.auth.sendPasswordResetEmail(email).then(()=>{
      console.log("password reset sent")
    })
  }
}

export default actions
