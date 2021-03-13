import createPersistedState from "vuex-persistedstate";
//Controls vuex's state. When user refreshes the state remains until removed otherwise.
export default ({store}) => {
    createPersistedState({
        paths:["auth.userSignUpStatus"]
    })(store)
}