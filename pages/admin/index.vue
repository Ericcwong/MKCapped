<template>
  <v-container fluid>
    <NavDrawer v-on:loadComponent="getComponent($event)" />
    <div class="admin-actions">
      <MakeAdmin v-show="revealMakeAdmin" />
      <AddShop v-show="revealAddShop" />
    </div>
  </v-container>
</template>

<script>
export default {
  middleware: "router-guard",
  data() {
    return {
      revealDashboard: false,
      revealMakeAdmin: false,
      revealAddShop: true,
    }
  },
  methods: {
    getComponent(value) {
      switch (value) {
        case "Dashboard":
          ;(this.revealDashboard = true),
            (this.revealMakeAdmin = false),
            (this.revealAddShop = true)
          break
        case "Add Shop":
          ;(this.revealDashboard = false),
            (this.revealMakeAdmin = false),
            (this.revealAddShop = true)
          break
        case "Make Admin":
          ;(this.revealDashboard = false),
            (this.revealMakeAdmin = true),
            (this.revealAddShop = false)
          break
      }
    },
  },
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