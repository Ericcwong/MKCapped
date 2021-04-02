<template>
  <div class="container"><MakeAdmin /></div>
</template>

<script>
export default {
  middleware: "router-guard",
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.container {
  background: white;
  height: 100vh;
}
button {
  border: 1px black solid;
}
</style>