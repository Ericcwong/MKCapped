<template>
  <v-card class="v-card" width="350px">
    <div class="v-card-header">
      <v-card-title class="title">{{ shopName }}</v-card-title>
      <a class="shopURL" :href="shopURL" target="_blank"
        ><v-card-title>Link</v-card-title></a
      >
    </div>
    <div class="v-card-body">
      <a :href="shopURL"
        ><v-img contain aspect-ratio="2" class="shopLogo" :src="shopLogo"
      /></a>
    </div>
    <div class="footer">
      <h5 class="footer-title">Shop Offers:</h5>
      <ul class="shopOptions">
        <li v-for="option in shopOptions" :key="option">{{ option }}</li>
      </ul>
      <v-card-actions>
        <v-btn text color="teal accent-4" @click="reveal = true">
          Learn More
        </v-btn>
        <v-btn v-if="updateShop" @click="updateShop(id)">Edit shop</v-btn>
        <v-btn v-if="deleteshop" @click="deleteshop(id)">Delete shop</v-btn>
      </v-card-actions>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0">
            <p class="display-1 text--primary">{{ shopName }}</p>
            <p>
              {{ description }}
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="teal accent-4" @click="reveal = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    id: String,
    shopName: String,
    shopLogo: String,
    shopURL: String,
    shopDescription: String,
    shopOptions: Array,
    updateShop: Function,
    deleteshop: Function,
  },
  data() {
    return {
      reveal: false,
    }
  },
}
</script>

<style scoped>
/* Card Header */
.v-card-header {
  display: flex;
  justify-content: space-between;
}

.shopURL {
  vertical-align: center;
  justify-content: center;
  align-content: center;
}
/* Card Body */

/* Card Footer */
.footer-title {
  border-top: 2px solid gray;
}
.footer-options {
  display: flex;
  overflow-x: auto;
}
.footer-options::-webkit-scrollbar {
  width: 8px; /* width of the entire scrollbar */
}
.footer-options::-webkit-scrollbar-thumb {
  background-color: gray; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  /* border: 3px solid skyblue; creates padding around scroll thumb */
}
.shopOptions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>