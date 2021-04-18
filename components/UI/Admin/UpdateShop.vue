<template>
  <v-container fluid>
    <v-card elevation="10">
      <form>
        <v-card-title>Edit store!</v-card-title>
        <v-divider></v-divider>
        <div class="input-section">
          <div class="storeName">
            <label for="storeName">{{ storeName }}</label>
            <input v-model="storeName" type="text" id="storeName" />
          </div>
          <div class="storeLogo">
            <label for="storeLogo">{{ storeLogo }}</label>
            <input v-model="storeLogo" type="text" id="storeLogo" />
          </div>
          <div class="storeURL">
            <label for="storeURL">{{ storeURL }}</label
            ><br />
            <input v-model="storeURL" type="text" id="storeURL" />
          </div>
          <div class="storeDescription">
            <label for="storeDescription">{{ storeDescription }}</label
            ><br />
            <textarea v-model="storeDescription" id="" rows="3"></textarea>
          </div>
        </div>
        <v-btn @click.prevent="">Update store</v-btn>
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
  props: {
    storeName: String,
    storeLogo: String,
    storeURL: String,
    storeDescription: String,
    storeOptions: Array,
  },
}
</script>

<style></style>
