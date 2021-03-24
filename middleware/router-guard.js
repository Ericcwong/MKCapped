export default function ({store, redirect}){
    
    //If user is not admin
    if(store.getters["auth/isAdmin"]){
        // return redirect("/")
    }
}