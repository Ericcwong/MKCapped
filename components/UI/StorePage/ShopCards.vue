<template>
  <div class="cards">
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="storeLogo">
        <v-card-title>{{ storeName }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Link <a :href="storeURL"></a></div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <v-btn color="orange" text> Explore </v-btn>
      </v-card-actions>
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
</style>