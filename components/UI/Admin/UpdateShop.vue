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
            <v-btn dark text @click="dialog = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <form>
          <v-card-title>Edit store!</v-card-title>
          <v-divider></v-divider>
          <div class="input-section">
            <div class="storeName">
              <label for="storeName">Shop Name: </label><br />
              <input v-model="shop.storeName" type="text" id="storeName" />
            </div>
            <div class="storeLogo">
              <label for="storeLogo">Store Logo: </label><br />
              <input v-model="shop.storeLogo" type="text" id="storeLogo" />
            </div>
            <div class="storeURL">
              <label for="storeURL">Store URL:</label><br />
              <input v-model="shop.storeURL" type="text" id="storeURL" />
            </div>
            <div class="storeDescription">
              <label for="storeDescription">Shop Description: </label><br />
              <textarea
                v-model="shop.storeDescription"
                id=""
                rows="3"
              ></textarea>
            </div>
            <ShopOptions :select="shop.storeOptions" />
          </div>
          <v-btn @click.prevent="">Update store</v-btn>
        </form>
      </v-card>
      <ShopCards
        v-if="shop.storeName || shop.storeLogo || shop.storeURL !== ''"
        class="shop-cards"
        :storeName="shop.storeName"
        :storeLogo="shop.storeLogo"
        :storeURL="shop.storeURL"
        :storeOptions="shop.storeOptions"
      />
    </v-card>
  </v-dialog>
</template>

<script>
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
    shop() {
      return this.$store.state.shops.shop
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
