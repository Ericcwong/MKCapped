<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card class="container">
      <v-card elevation="10">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="updateShopData"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <form>
          <v-card-title>Edit store!</v-card-title>
          <v-divider></v-divider>
          <div class="input-section">
            <div class="storeName">
              <label for="storeName">Shop Name: </label><br />
              <input v-model="shopName" type="text" id="storeName" />
            </div>
            <div class="storeLogo">
              <label for="storeLogo">Store Logo: </label><br />
              <input v-model="shopLogo" type="text" id="storeLogo" />
            </div>
            <div class="storeURL">
              <label for="storeURL">Store URL:</label><br />
              <input v-model="shopURL" type="text" id="storeURL" />
            </div>
            <div class="storeDescription">
              <label for="storeDescription">Shop Description: </label><br />
              <textarea v-model="shopDescription" id="" rows="3"></textarea>
            </div>
            <ShopOptions
              v-on:selectedData="getData($event)"
              :select="shopOptions"
            />
          </div>
        </form>
      </v-card>
      <ShopCards
        v-if="shopName || shopLogo || shopURL !== ''"
        class="shop-cards"
        :storeName="shopName"
        :storeLogo="shopLogo"
        :storeURL="shopURL"
        :storeOptions="shopOptions"
      />
    </v-card>
  </v-dialog>
</template>

<script>
//vuex-map-fields help eliminate the set and get function. Reducing the lines of codes needed
import { createHelpers } from "vuex-map-fields"
const { mapFields } = createHelpers({
  getterType: "shops/getField",
  mutationType: "shops/updateField",
})
export default {
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: false,
      widgets: false,
    }
  },
  computed: {
    //Renaming objects
    ...mapFields({
      shopID: "shop.id",
      shopName: "shop.storeName",
      shopLogo: "shop.storeLogo",
      shopURL: "shop.storeURL",
      shopDescription: "shop.storeDescription",
      shopOptions: "shop.storeOptions",
    }),
  },
  methods: {
    updateShopData() {
      this.$store.dispatch("shops/updateShopData", {
        shopID: this.shopID,
        shopName: this.shopName,
        shopLogo: this.shopLogo,
        shopURL: this.shopURL,
        shopDescription: this.shopDescription,
        shopOptions: this.shopOptions,
      })
      this.$store.commit("shops/CLEAR_SHOP")
    },
    getData(value) {
      this.shopOptions = value
    },
  },
}
</script>

<style scoped>
.container {
  display: grid;
  gap: 4rem;
}
.input-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
}
form {
  display: inline;
  margin: 0 auto;
}
input[type="text"] {
  border: 1px gray solid;
  width: 85%;
  color: black;
}

textarea {
  width: 85%;
  border: 1px gray solid;
}
</style>
