<template>
  <v-app id="inspire">
    <v-carousel cycle height="500" hide-delimiter-background>
      <v-carousel-item v-for="(item, i) in items" :src="item.src" :key="i">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ item.title }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      items: [
        {
          title: `Welcome to Mkcapped`,
          src: "/home-background.png",
        },
        {
          title: "Discover Stores",
          src: "/keyboardHome.png",
        },
        {
          title: "Learn Resources",
          src: "/keyboardHome.png",
        },
        {
          title: "Community!",
          src: "/keyboardHome.png",
        },
      ],
    }
  },
}
</script>

<style scoped>
.display-3 {
  background: black;
}
</style>