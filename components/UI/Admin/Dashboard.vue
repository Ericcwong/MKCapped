<template>
  <v-container>
    <ShopCards
      v-for="shop in shops"
      :key="shop.id"
      :id="shop.id"
      class="shop-cards"
      :shopName="shop.shopName"
      :shopLogo="shop.shopLogo"
      :shopURL="shop.shopURL"
      :shopOptions="shop.shopOptions"
      :updateShop="updateShop"
      :deleteshop="deleteshop"
    />

    <component :is="updateComponent"></component>
  </v-container>
</template>

<script>
const UpdateShop = () => import("~/components/UI/Admin/UpdateShop")
export default {
  created() {
    this.$store.dispatch("shops/loadShops")
  },
  computed: {
    shops() {
      return this.$store.state.shops.shops
    },
    updateComponent() {
      const shop = this.$store.state.shops.shop
      if (shop !== null) return UpdateShop
    },
  },
  methods: {
    deleteshop(id) {
      this.$store.dispatch("shops/deleteShop", id)
      this.$store.dispatch("shops/loadShops")
    },
    updateShop(id) {
      this.$store.commit("shops/CLEAR_SHOP")
      this.$store.dispatch("shops/retrieveShopData", id)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
}
</style>
