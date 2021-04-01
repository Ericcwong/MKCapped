export default async function({store, route, redirect }){
    console.log(store.state.auth)
    // console.log(user)
    if(!store.state.auth.user.admin){
        return redirect("/")
    }

}