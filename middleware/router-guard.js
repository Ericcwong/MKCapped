export default function ({store, redirect}){
    //If user is not admin
    console.log(store.state.user)
    if(!store.state.user){
        // return redirect("/")
    }
}