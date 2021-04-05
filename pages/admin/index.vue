<template>
  <div class="container">
    <div class="admin-actions">
      <MakeAdmin />
    </div>
    <div class="admin-actions">
      <AddShop />
    </div>
  </div>
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
  display: flex;
  background: white;
  height: 100vh;
}
.admin-actions {
  width: 100%;
}
</style>