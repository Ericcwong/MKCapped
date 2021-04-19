<template>
  <v-card class="v-card">
    <div class="v-card-header">
      <v-card-title class="title">{{ storeName }}</v-card-title>
      <a class="storeURL" :href="storeURL" target="_blank"
        ><v-card-title>Link</v-card-title></a
      >
    </div>
    <div class="v-card-body">
      <a :href="storeURL"><v-img class="storeLogo" :src="storeLogo" /></a>
    </div>
    <div class="footer">
      <h5 class="footer-title">Store Offers:</h5>
      <ul class="storeOptions">
        <li v-for="option in storeOptions" :key="option">{{ option }}</li>
      </ul>
      <!-- <v-chip-group column active-class="primary--text">
        <v-card-actions v-for="option in storeOptions" :key="option">
          <v-chip>{{ option }}</v-chip>
        </v-card-actions>
      </v-chip-group> -->
      <v-card-actions>
        <v-btn text color="teal accent-4" @click="reveal = true">
          Learn More
        </v-btn>
        <v-btn v-if="updateShop" @click="updateShop(id)">Edit Store</v-btn>
        <v-btn v-if="deleteStore" @click="deleteStore(id)">Delete Store</v-btn>
      </v-card-actions>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0">
            <p class="display-1 text--primary">{{ storeName }}</p>
            <p>
              late 16th century (as a noun denoting a place where alms were
              distributed): from medieval Latin eleemosynarius, from late Latin
              eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
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
    storeName: String,
    storeLogo: String,
    storeURL: String,
    storeOptions: Array,
    updateShop: Function,
    deleteStore: Function,
  },
  data() {
    return {
      reveal: false,
    }
  },
}
</script>

<style scoped>
.v-card {
  width: 400px;
}
/* Card Header */
.v-card-header {
  display: flex;
  justify-content: space-between;
}
.storeURL {
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
.storeOptions {
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