const mutations = {
  LOAD_SHOPS(state, payload) {
    state.shops = payload
  },
  LOAD_SHOP_BY_ID(state, payload) {
    state.shop = payload
  },
  CLEAR_SHOP(state){
    state.shop = null
  }
}

export default mutations
