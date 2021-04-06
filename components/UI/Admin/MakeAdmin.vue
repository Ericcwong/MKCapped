<template>
  <div>
    <v-card elevation="2" outlined>
      <v-card-title>Make an Admin</v-card-title>
      <v-card-text
        >Enter the email address you want admin
        <input type="email" placeholder="Email" v-model="adminEmail" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="addAdmin">
          Make Admin
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminEmail: "",
    }
  },
  methods: {
    addAdmin() {
      const adminForm = this.adminEmail
      const addAdminRole = this.$fire.functions.httpsCallable("addAdminRole")
      addAdminRole({ email: adminForm }).then((results) => {
        console.log(results)
      })
    },
  },
}
</script>

<style scoped>
input {
  border: 1px solid gray;
}
</style>