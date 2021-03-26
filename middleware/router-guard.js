export default async function (context){
    const {store, route, redirect } = context
    const user = store.state.auth.user
    console.log(user)
    const blockedRoute = /\/admin\/*/g;
    // console.log(context)
    // if(!user && route.path.match(blockedRoute)){
    //     redirect("/")
    // }
}