import { auth } from "~/plugins/firebase";

export default (context) => {
    const { store } = context

    return new Promise((resolve, reject) =>{
        auth.onAuthStateChanged((user) =>{
            if(user){
                console.log(user)
                return resolve(store.commit("auth/setUser", user))
            }
            return resolve()
        })
    })
}