<template>
  <v-container>
    <ErrorIcon class="svg" />
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <h2>
      Return to <NuxtLink style="font-size: 2rem" to="/">Home page</NuxtLink>
    </h2>
  </v-container>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
}
</script>
<style scoped>
.container {
  text-align: center;
  width: 100%;
}
.svg {
  width: 100%;
  height: auto;
}
</style>