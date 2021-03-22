import { auth } from "~/plugins/firebase";
/*This plugin handles whenever there is a change to the authentication. Either being sign in or log out
* The data would be passed back towards Vuex via setUser  
*/
export default (context) => {
    const { store } = context

    return new Promise((resolve, reject) =>{
        auth.onAuthStateChanged((user) =>{
            if(user){
                // console.log('user logged in: ', user)
                // return resolve(store.commit("auth/setUser", user))
            }else{
                
            }
        })
    })
}