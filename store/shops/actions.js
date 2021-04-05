
const actions = {
    async createShop({commit},payload){
        const shopRef = this.$fire.firestore.collection('shops').doc()
  try {
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
    },

  async loadShops({commit}){
      const shopRef = this.$fire.firestore.collection('shops')
      try{
          await shopRef.get().then((querySnapshot) =>{
          let data = querySnapshot.docs.map(doc => doc.data());        
          commit("LOAD_SHOPS", data)
        })
      }catch(error){
        console.error(error)
      }
    }
}
export default actions