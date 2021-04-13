
const actions = {
    async createShop({commit},payload){
        const shopRef = this.$fire.firestore.collection('shops').doc()
  try {
    await shopRef.set({
      id: shopRef.id,
      storeName: payload.storeName,
      storeLogo: payload.storeLogo,
      storeURL: payload.storeURL,
      storeOptions: payload.storeOptions,
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
          console.log(data)        
          commit("LOAD_SHOPS", data)
        })
      }catch(error){
        console.error(error)
      }
    },
  async deleteShop({commit,dispatch},payload){
     try{
       let confirmation = confirm("Are you sure you want to delete?")
       if(confirmation === true){
         this.$fire.firestore.collection('shops').doc(payload).delete()
         dispatch("shops/loadShop")
       }
       
     }catch(error){
       console.error(error)
     }
    

  } 
}
export default actions