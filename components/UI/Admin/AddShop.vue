<template>
  <v-container fluid>
    <v-card elevation="10">
      <form>
        <v-card-title>Add a store!</v-card-title>
        <v-divider></v-divider>
        <div class="input-section">
          <div class="storeName">
            <label for="storeName">Store Name:</label>
            <input v-model="storeName" type="text" id="storeName" />
          </div>
          <div class="storeLogo">
            <label for="storeLogo">Store Logo:</label>
            <input v-model="storeLogo" type="text" id="storeLogo" />
          </div>
          <div class="storeURL">
            <label for="storeURL">Store Url:</label><br />
            <input v-model="storeURL" type="text" id="storeURL" />
          </div>
          <div class="storeDescription">
            <label for="storeDescription">Store Description:</label><br />
            <textarea v-model="storeDescription" id="" rows="3"></textarea>
          </div>
        </div>
        <ShopOptions v-on:selectedData="getData($event)" />
        <v-btn @click.prevent="createShop">Create store</v-btn>
      </form>
    </v-card>
    <ShopCards
      v-if="storeName || storeLogo || storeURL !== ''"
      class="shop-cards"
      :storeName="storeName"
      :storeLogo="storeLogo"
      :storeURL="storeURL"
      :storeOptions="storeOptions"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      storeName: "",
      storeLogo: "",
      storeURL: "",
      storeOptions: null,
    }
  },
  methods: {
    getData(value) {
      this.storeOptions = value
    },
    createShop() {
      console.log(this.storeName, this.storeLogo, this.storeURL)
      console.log(this.storeOptions)
      this.$store.dispatch("shops/createShop", {
        storeName: this.storeName,
        storeLogo: this.storeLogo,
        storeURL: this.storeURL,
        storeOptions: this.storeOptions,
      })
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 3rem;
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

@media only screen and (max-width: 1345px) {
  .container {
    display: inline;
  }
  .v-card {
    margin-top: 1rem;
    width: 100%;
  }
}
</style>