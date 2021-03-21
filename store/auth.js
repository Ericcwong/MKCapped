// import { auth } from "~/plugins/firebase"

export const state = () => ({
    user: null,
    userSignUpStatus: "",
    error:{
        errorCode: null,
        errorMessage: null
    }
})
 
export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATIONS: (state, {authUser, claims})=>{
      const {uid, email} = authUser
      state.user = {uid, email}
    },
    //Start of login user functions.
    // updateUserStatus(state){
    //     state.userSignUpStatus = "Sign up Successful!"
    //     console.log(state.userSignUpStatus)
    // },
    // getUser(state, payload){
    //     state.user = JSON.parse(JSON.stringify(payload))
    // },
    // getUserError(state, payload){
    //     console.log(payload.errorCode)
    //     console.log(payload.errorMessage)
    //     state.error.errorCode = payload.errorCode;
    //     state.error.errorMessage = payload.errorMessage;
    // },
    //End of login user functions.
    //Start of sign out user function.
    signOut(state){
      state.user = null
    }
}

export const actions = {
    //Start of login user functions
    async getUserByEmail({commit}, payload){
            try {
              await this.$fire.auth
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                  console.log(response)
                  // commit("getUser", response.user)
                  this.$router.push("/")
                })
            } catch (error) {
              let errorCode = error.code
              let errorMessage = error.message
              commit("getUserError", {errorCode, errorMessage})

            }
    },
    //End of login user functions
    
    //Start of register user functions
    async createUserFirebase({commit}, payload) {
        try {
          await this.$fire.auth
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then((res) => {
                console.log(res.user)
              if (res.additionalUserInfo.isNewUser === true) {
                const user = this.$fire.auth.currentUser;
                commit("updateUserStatus")
                this.$router.push("/user/login")
                return user.updateProfile({
                  displayName: payload.name
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
    async signOutUser({commit}){
      try{
        await this.$fire.auth.signOut().then(()=>{
          alert("Sign out success, see you next time!")
          commit("signOut")
        })
      }catch(error){
        console.log(error)
      }
    }
}

export const getters = {
    userState(state){
        return state.user
    }

}
