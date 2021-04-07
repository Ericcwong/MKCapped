<template>
  <v-card width="600px">
    <div class="v-card-header">
      <v-card-title class="title">{{ storeName }}</v-card-title>
      <a class="storeURL" :href="storeURL"><v-card-title>Link</v-card-title></a>
    </div>
    <div class="v-card-body">
      <a :href="storeURL"><v-img class="storeLogo" :src="storeLogo" /></a>
    </div>
    <div class="footer">
      <h5 class="footer-title">Store Options:</h5>
      <v-chip-group multiple active-class="primary--text">
        <v-card-actions v-for="option in storeOptions" :key="option">
          <v-chip color="blue">{{ option }}</v-chip>
        </v-card-actions>
      </v-chip-group>
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
}
</script>

<style scoped>
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
</style>