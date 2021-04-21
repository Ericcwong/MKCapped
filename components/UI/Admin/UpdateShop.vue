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
          <v-card-title>Edit shop!</v-card-title>
          <v-divider></v-divider>
          <div class="input-section">
            <div class="shopName">
              <label for="shopName">Shop Name: </label><br />
              <input v-model="shopName" type="text" id="shopName" />
            </div>
            <div class="shopLogo">
              <label for="shopLogo">shop Logo: </label><br />
              <input v-model="shopLogo" type="text" id="shopLogo" />
            </div>
            <div class="shopURL">
              <label for="shopURL">shop URL:</label><br />
              <input v-model="shopURL" type="text" id="shopURL" />
            </div>
            <div class="shopDescription">
              <label for="shopDescription">Shop Description: </label><br />
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
        :shopName="shopName"
        :shopLogo="shopLogo"
        :shopURL="shopURL"
        :shopOptions="shopOptions"
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
      shopName: "shop.shopName",
      shopLogo: "shop.shopLogo",
      shopURL: "shop.shopURL",
      shopDescription: "shop.shopDescription",
      shopOptions: "shop.shopOptions",
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
      this.$store.dispatch("shops/loadShops")
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
