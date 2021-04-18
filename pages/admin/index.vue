<template>
  <v-container class="admin-container">
    <NavDrawer v-on:loadComponent="getComponent($event)" /><br /><br />
    <div class="admin-actions">
      <keep-alive>
        <component v-bind:is="userComponent"></component>
      </keep-alive>
    </div>
  </v-container>
</template>

<script>
//Importing components to render later
const Home = () => import("~/components/UI/Admin/Home")
const Dashboard = () => import("~/components/UI/Admin/Dashboard")
const AddShop = () => import("~/components/UI/Admin/AddShop")
const MakeAdmin = () => import("~/components/UI/Admin/MakeAdmin")
const UpdateShop = () => import("~/components/UI/Admin/UpdateShop")
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
      component: "",
    }
  },
  computed: {
    userComponent() {
      if (this.component === "") return Home
      if (this.component === "Dashboard") return Dashboard
      if (this.component === "Add Shop") return AddShop
      if (this.component === "Make Admin") return MakeAdmin
    },
  },
  methods: {
    getComponent(value) {
      this.component = value
    },
  },
}
</script>

<style scoped>
.admin-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: white;
  max-width: 100vw;
  height: 100%;
}
.admin-actions {
  width: 100%;
}
</style>
