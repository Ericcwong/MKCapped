export default async function({store, route, redirect }){
    // console.log(user)
    if(store.state.auth.user){
        if(store.state.auth.user.admin){
            redirect("/admin")
        }
    }else{
        redirect("/")
    }

}