import { auth } from "~/plugins/firebase"
/*This plugin handles whenever there is a change to the authentication. Either being sign in or log out
 * The data would be passed back towards Vuex via setUser
 */
export default (context) => {
  const { store } = context

  auth.onAuthStateChanged((user) => {
    if (!user) {
      //   console.log("User logged out")
      store.commit("auth/setUser", null)
    } else {
      //   console.log("user logged in: ", user)
      store.commit("auth/setUser", user)
    }
  })
}
