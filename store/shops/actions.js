
const actions = {
    async createStore(payload){
        const shopRef = this.$fire.firestore.collection('shops').doc("shops")
  try {
      console.log(
          payload,{
        storeName: payload.storeName,
        storeLogo: payload.storeLogo,
        storeURL: payload.storeURL
      })
    await shopRef.set({
      storeName: payload.storeName,
      storeLogo: payload.storeLogo,
      storeURL: payload.storeURL
    })
  } catch (e) {
  alert(e)
  return
  }
  alert('Success.')
    }
}
export default actions