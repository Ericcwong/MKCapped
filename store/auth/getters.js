const getters = {
    isAdmin: (state) => {
        console.log(state.user)
        return state.user
    }
}

export default getters