<template>
  <v-container fluid>
    <NavDrawer v-on:loadComponent="getComponent($event)" />
    <div class="admin-actions">
      <Dashboard v-show="revealDashboard" />
      <MakeAdmin v-show="revealMakeAdmin" />
      <AddShop v-show="revealAddShop" />
    </div>
  </v-container>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    const user = store.state.auth.user
    const isAuthenticated = store.state.auth.user.admin

    if (user == null) {
      return redirect("/")
    } else if (isAuthenticated == null) {
      return redirect("/")
    }
  },
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
            (this.revealAddShop = false)
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
  justify-content: space-evenly;
  background: white;
  max-width: 100%;
  margin: 0;
}
.admin-actions {
  width: 100%;
  height: 75%;
}
</style>