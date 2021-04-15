<template>
  <div>
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
  </div>
</template>

<script>
export default {
  created: function () {
    this.$store.dispatch("shops/loadShops")
  },
  computed: {
    shops() {
      return this.$store.state.shops.shops
    },
  },
  methods: {
    deleteStore(id) {
      this.$store.dispatch("shops/deleteShop", id)
    },
    editStore(id) {
      console.log(id, "Edit function")
    },
  },
}
</script>

<style>
</style>