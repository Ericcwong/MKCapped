<template>
  <v-app id="inspire">
    <v-carousel cycle height="500" hide-delimiter-background>
      <v-carousel-item v-for="(item, i) in items" :src="item.src" :key="i">
        <v-row class="fill-height">
          <div class="display-3">
            <div class="display-3-text">{{ item.title }}</div>
          </div>
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
.fill-height {
  position: relative;
  width: 100%;
  height: 100%;
}
.display-3 {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 30px;
  background: rgba(65, 65, 65, 0.767);
  font-size: 3rem !important;
}
@media only screen and (max-width: 400px) {
  .display-3 {
    font-size: 2rem !important;
  }
}
</style>
