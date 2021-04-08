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
      <v-chip-group multiple active-class="primary--text">
        <v-card-actions v-for="option in storeOptions" :key="option">
          <v-chip>{{ option }}</v-chip>
        </v-card-actions>
      </v-chip-group>
      <v-card-actions>
        <v-btn text color="teal accent-4" @click="reveal = true">
          Learn More
        </v-btn>
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
    storeName: String,
    storeLogo: String,
    storeURL: String,
    storeOptions: Array,
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
  width: 600px;
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
.storeLogo {
  max-width: 100%;
}
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
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>