<template>
  <div class="container">
    <form>
      <input type="email" placeholder="User email" v-model="adminEmail" />
      <button @click.prevent="addAdmin">Add Admin</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import { functions } from "~/plugins/firebase"
export default {
  middleware: "router-guard",
  data() {
    return {
      adminEmail: "",
    }
  },
  methods: {
    addAdmin() {
      const adminForm = this.adminEmail
      const addAdminRole = functions.httpsCallable("addAdminRole")
      addAdminRole({ email: adminForm }).then((results) => {
        console.log(results)
      })
    },
  },
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