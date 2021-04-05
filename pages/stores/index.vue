<template>
  <div class="container">
    <ShopCards
      v-for="shop in shops"
      :key="shop.id"
      class="shop-cards"
      :storeName="shop.storeName"
      :storeLogo="shop.storeLogo"
      :storeURL="shop.storeURL"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ["test", "test1", "test2", "test3"],
    }
  },
  created: function () {
    this.$store.dispatch("shops/loadShops")
  },
  computed: {
    shops() {
      console.log(this.$store.state.shops)
      return this.$store.state.shops.shops
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
}
.shop-cards {
  width: 400px;
}
</style>