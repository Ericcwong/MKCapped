export const actions = {
  async nuxtServerInit({ dispatch, commit, redirect }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user
      commit("auth/ON_AUTH_STATE_CHANGED_MUTATION", { authUser, claims, token })
    }
  },
}
