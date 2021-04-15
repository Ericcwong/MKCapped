<template>
  <v-container>
    <NavDrawer v-on:loadComponent="getComponent($event)" />
    <div class="admin-actions">
      <keep-alive>
        <component :is="userComponent"></component>
      </keep-alive>
    </div>
  </v-container>
</template>

<script>
// import Dashboard from "~/components/UI/Admin/Dashboard"
const Home = () => import("~/components/UI/Admin/Home")
const Dashboard = () => import("~/components/UI/Admin/Dashboard")
const AddShop = () => import("~/components/UI/Admin/AddShop")
const MakeAdmin = () => import("~/components/UI/Admin/MakeAdmin")
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