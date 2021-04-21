<template>
  <div class="text-center">
    <h1>Enter the email address you want admin</h1>
    <form @keyup.enter="addAdmin">
      <input type="email" placeholder="Email" v-model="adminEmail" />
    </form>
    <v-btn class="ma-2" outlined color="white" @click="addAdmin"
      >Make Admin
    </v-btn>
    <h3 class="successCode" v-if="results !== ''">{{ results }}</h3>
    <h3 class="errorCode" v-else-if="error !== null">{{ error }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminEmail: "",
      results: "",
      error: null,
    }
  },
  methods: {
    addAdmin() {
      const adminForm = this.adminEmail
      const addAdminRole = this.$fire.functions.httpsCallable("addAdminRole")
      addAdminRole({ email: adminForm }).then((res) => {
        console.log(res)
        if (res.data.message) {
          let result = res.data.message
          this.results = result
        } else if (res.data.errorInfo) {
          let error = res.data.errorInfo.message
          this.error = error
        }
      })
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
.successCode {
  color: rgb(0, 236, 0);
}
.errorCode {
  color: orangered;
}
</style>