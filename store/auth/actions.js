import { auth } from "~/plugins/firebase"
const actions = {
  //Start of login user functions
  async getUserByEmail({ commit }, payload) {
    try {
      await auth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          console.log(response)
          commit("setUser", response.user)
          this.$router.push("/")
        })
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
      await auth
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
  async signOutUser() {
    try {
      console.log("signed out")
      await auth.signOut()
    } catch (error) {
      console.log(error)
    }
  },
}

export default actions
