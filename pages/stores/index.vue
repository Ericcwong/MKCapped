<template>
  <div class="container">
    <ShopCards
      v-for="shop in shops"
      :key="shop.id"
      class="shop-cards"
      :shopName="shop.shopName"
      :shopLogo="shop.shopLogo"
      :shopURL="shop.shopURL"
      :shopOptions="shop.shopOptions"
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
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>