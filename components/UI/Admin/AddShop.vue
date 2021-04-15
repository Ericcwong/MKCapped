<template>
  <div>
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
        </div>
        <div class="storeDescription">
          <label for="storeDescription">Store Description:</label><br />
          <textarea
            name="storeDescription"
            id=""
            cols="30"
            rows="10"
          ></textarea>
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
  </div>
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
  justify-content: space-between;
  gap: 3rem;
  width: 100%;
}
.v-card {
  width: 50%;
}
form {
  display: inline;
  margin: 0 auto;
}
input[type="text"] {
  border: 1px solid gray;
  width: 100%;
  color: black;
}
.storeDescription * {
  vertical-align: top;
}
textarea {
  width: 100%;
}
.shop-cards {
  height: 50%;
}

@media only screen and (max-width: 1345px) {
  .test {
    display: inline;
  }
  .v-card {
    margin-top: 1rem;
    width: 100%;
  }
}
</style>