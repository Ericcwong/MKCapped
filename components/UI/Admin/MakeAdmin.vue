<template>
  <div class="text-center">
    <h1>Enter the email address you want admin</h1>
    <form @keyup.enter="addAdmin">
      <input type="email" placeholder="Email" v-model="adminEmail" />
    </form>
    <v-btn class="ma-2" outlined color="white" @click="addAdmin"
      >Make Admin
    </v-btn>
    <h3 v-if="results !== ''">{{ results }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminEmail: "",
      results: "",
    }
  },
  methods: {
    addAdmin() {
      const adminForm = this.adminEmail
      const addAdminRole = this.$fire.functions.httpsCallable("addAdminRole")
      try {
        addAdminRole({ email: adminForm })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
div {
  font-size: 2rem;
  width: 100%;
}
input {
  border: 1px solid gray;
  color: white;
}
</style>