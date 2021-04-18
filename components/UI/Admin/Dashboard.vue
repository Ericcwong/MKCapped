<template>
  <v-container>
    <ShopCards
      v-for="shop in shops"
      :key="shop.id"
      :id="shop.id"
      class="shop-cards"
      :storeName="shop.storeName"
      :storeLogo="shop.storeLogo"
      :storeURL="shop.storeURL"
      :storeOptions="shop.storeOptions"
      :editStore="editStore"
      :deleteStore="deleteStore"
    />
    <UpdateShop
      :storeName="shop.storeName"
      :storeLogo="shop.storeLogo"
      :storeURL="shop.storeURL"
      :storeOptions="shop.storeOptions"
    />
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("shops/loadShops")
  },
  computed: {
    shops() {
      return this.$store.state.shops.shops
    },
    shop() {
      return this.$store.state.shops.shop
    },
  },
  methods: {
    deleteStore(id) {
      this.$store.dispatch("shops/deleteShop", id)
    },
    editStore(id) {
      this.$store.dispatch("shops/updateShop", id)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
