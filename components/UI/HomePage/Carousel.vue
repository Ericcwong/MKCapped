<template>
  <v-app id="inspire">
    <v-carousel cycle height="400" hide-delimiter-background>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      colors: ["indigo", "warning", "pink darken-2"],
      slides: ["Discover Stores", "How to: Resources", "Community"],
    }
  },
}
</script>

<style scoped>
</style>