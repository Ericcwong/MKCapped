/* 
    Handles protected routes.
*/
export default async function ({ store, route, redirect }) {
  if (store.state.auth.user) {
    if (store.state.auth.user.admin) {
      redirect("/admin")
    }
  } else {
    redirect("/")
  }
}
