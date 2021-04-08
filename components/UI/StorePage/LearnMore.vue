<template>
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
</template>

<script>
export default {}
</script>

<style>
</style>