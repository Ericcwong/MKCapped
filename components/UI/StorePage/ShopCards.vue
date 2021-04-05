<template>
  <div class="cards">
    <v-card>
      <v-img height="200px" :src="storeLogo">
        <v-card-title class="title">{{ storeName }}</v-card-title>
      </v-img>
      <v-card-text class="text--primary">
        <a :href="storeURL">Link</a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    storeName: String,
    storeLogo: String,
    storeURL: String,
  },
}
</script>

<style scoped>
.title {
  text-align: center;
}
</style>