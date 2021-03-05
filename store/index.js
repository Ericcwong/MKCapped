const state = () => ({
    counter: 0
})

const mutations = {
    INCREMENT(state){
        state.counter += 1
        console.log(state.counter)
    }
}

const actions = {

}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}