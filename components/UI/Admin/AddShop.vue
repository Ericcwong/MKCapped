<template>
  <v-container fluid>
    <v-card elevation="10">
      <form>
        <v-card-title>Add a shop!</v-card-title>
        <v-divider></v-divider>
        <div class="input-section">
          <div class="shopName">
            <label for="shopName">shop Name:</label>
            <input v-model="shopName" type="text" id="shopName" />
          </div>
          <div class="shopLogo">
            <label for="shopLogo">shop Logo:</label>
            <input v-model="shopLogo" type="text" id="shopLogo" />
          </div>
          <div class="shopURL">
            <label for="shopURL">shop Url:</label><br />
            <input v-model="shopURL" type="text" id="shopURL" />
          </div>
          <div class="shopDescription">
            <label for="shopDescription">shop Description:</label><br />
            <textarea v-model="shopDescription" id="" rows="3"></textarea>
          </div>
        </div>
        <ShopOptions v-on:selectedData="getData($event)" />
        <v-btn @click.prevent="createShop">Create shop</v-btn>
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      shopName: "",
      shopLogo: "",
      shopURL: "",
      shopDescription: "",
      shopOptions: null,
    }
  },
  methods: {
    getData(value) {
      this.shopOptions = value
    },
    createShop() {
      console.log(this.shopName, this.shopLogo, this.shopURL)
      console.log(this.shopOptions)
      this.$store.dispatch("shops/createShop", {
        shopName: this.shopName,
        shopLogo: this.shopLogo,
        shopURL: this.shopURL,
        shopDescription: this.shopDescription,
        shopOptions: this.shopOptions,
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