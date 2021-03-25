import { auth } from "~/plugins/firebase"
/*This plugin handles whenever there is a change to the authentication. Either being sign in or log out
 * The data would be passed back towards Vuex via setUser
 */
export default (context) => {
  const { store } = context

  auth.onAuthStateChanged((user) => {
    if (user) {
      user.getIdTokenResult().then(idTokenResult =>{
        user.admin = idTokenResult.claims.admin
        store.commit("auth/setUser", user)
      })
      
    } else {
      //   console.log("user logged in: ", user)
      store.commit("auth/setUser", null)
    }
  })
}
