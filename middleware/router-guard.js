/* 
    Handles protected routes.
*/
// export default async function ({ store, route, redirect }) {
//   if (store.state.auth.user) {
//     if (store.state.auth.user.admin) {
//       redirect("/admin")
//     }
//     else{
//       redirect("/")
//     }
//   } else {
//     redirect("/")
//   }
// }
// export default function ({ store, app }) {

//   app.router.beforeResolve((to, from, next) => {
//     console.log(store.state.auth.user.admin)
//       if (store.state.auth.user.admin) {
//           next("admin")
//       } else {
//           next();
//       }
//   });

// }