const actions = {
  //Create Shop
  async createShop({ commit }, payload) {
    const shopRef = this.$fire.firestore.collection("shops").doc()
    try {
      await shopRef.set({
        id: shopRef.id,
        shopName: payload.shopName,
        shopLogo: payload.shopLogo,
        shopURL: payload.shopURL,
        shopOptions: payload.shopOptions,
      })
    } catch (e) {
      alert(e)
      return
    }
    alert("Success.")
  },
  //Read Shop
  async loadShops({ commit }) {
    const shopRef = this.$fire.firestore.collection("shops")
    try {
      await shopRef.get().then((querySnapshot) => {
        let data = querySnapshot.docs.map((doc) => doc.data())
        commit("LOAD_SHOPS", data)
      })
    } catch (error) {
      console.error(error)
    }
  },
  //Update Shop
  async retrieveShopData({ commit }, payload) {
    const shopRef = this.$fire.firestore.collection("shops").doc(payload)
    shopRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data()
          console.log("Document data:", data)
          commit("LOAD_SHOP_BY_ID", data)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!")
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error)
      })
  },
  async updateShopData({commit}, payload){
    const shopRef = this.$fire.firestore.collection("shops").doc(payload.shopID)
    try
    {await shopRef.update({
      id: payload.shopID,
      shopName: payload.shopName,
      shopLogo: payload.shopLogo,
      shopURL: payload.shopURL,
      shopOptions: payload.shopOptions,
    })
    console.log("Page updated")
  }catch(error){
    console.error(error)
  }

  },
  //Delete shop
  async deleteShop({ commit, dispatch }, payload) {
    try {
      let confirmation = confirm("Are you sure you want to delete?")
      if (confirmation === true) {
        this.$fire.firestore.collection("shops").doc(payload).delete()
        dispatch("loadShops")
      }
    } catch (error) {
      console.error(error)
    }
  },
}
export default actions
