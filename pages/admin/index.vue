<template>
  <div class="container">
    <form>
      <input type="email" placeholder="User email" v-model="adminEmail" />
      <button @click.prevent="addAdmin">Add Admin</button>
    </form>
    <button @click="addCounter">add 1</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import { functions } from "~/plugins/firebase"
export default {
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
    async addCounter() {
      await this.$store.commit("INCREMENT")
    },
  },
}
</script>

<style scoped>
.container {
  background: white;
  height: 100vh;
}
</style>