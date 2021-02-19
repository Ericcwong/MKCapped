<template>
  <!-- <button class="navigation"> -->
  <nuxt-link class="navLink" :to="{ path: redirect }">{{ name }}</nuxt-link>
  <!-- </button> -->
</template>

<script>
export default {
  props: {
    name: String,
    redirect: String,
  },
}
</script>

<style scoped>
.navigation {
  font-size: 1.5rem;
  background: white;
  color: darkslategrey;
  border-color: lightskyblue;
}
.navigation {
  position: relative;
  text-decoration: none;
}
.navigation:hover .navLink:hover {
  color: black;
}
.navigation::before {
  content: "";
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: lightskyblue;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
.navigation:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.navLink {
  text-decoration: none;
  color: black;
}
.navLink:hover {
  color: black;
}
</style>