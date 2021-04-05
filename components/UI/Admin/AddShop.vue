<template>
  <v-card>
    <form>
      <v-card-title>Add a store!</v-card-title>
      <div class="storeName">
        <label for="storeName">Store Name:</label>
        <input v-model="storeName" type="text" id="storeName" />
      </div>
      <div class="storeLogo">
        <label for="storeLogo">Store Logo:</label>
        <input v-model="storeLogo" type="text" id="storeLogo" />
      </div>
      <div class="storeURL">
        <label for="storeURL">Store Url:</label>
        <input v-model="storeURL" type="text" id="storeURL" />
        {{ storeName }}
      </div>
      <v-btn @click.prevent="createShop">Create store</v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      storeName: "",
      storeLogo: "",
      storeURL: "",
    }
  },
  methods: {
    createShop() {
      console.log(this.storeName, this.storeLogo, this.storeURL)
      this.$store.dispatch("shops/createShop", {
        storeName: this.storeName,
        storeLogo: this.storeLogo,
        storeURL: this.storeURL,
      })
    },
  },
}
</script>

<style>
form {
  display: inline;
  margin: 0 auto;
}
input[type="text"] {
  border: 1px solid gray;
  width: 100%;
  color: black;
}
</style>