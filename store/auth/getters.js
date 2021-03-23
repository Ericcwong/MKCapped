const getters = {
    isAdmin(state){
        console.log(state.user.admin)
        return state.user.admin
    }
}
export default getters