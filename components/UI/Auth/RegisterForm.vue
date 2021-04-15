<template>
  <v-container>
    <form @keydown.enter="registerUser">
      <h1>Register</h1>
      <v-text-field
        id="fname"
        v-model="firstName"
        label="First Name"
        required
      ></v-text-field>
      <v-text-field v-model="email" label="Email" required></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-text-field
        v-model="reEnterPassword"
        label="Reenter password"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-1"
        @click:append="show2 = !show2"
      ></v-text-field>
      <div class="error">{{ error }}</div>
      <div class="error">{{ registerError }}</div>
      <v-btn
        class="login-button"
        elevation="2"
        outlined
        raised
        @click.prevent="registerUser"
        >Register</v-btn
      >
    </form>
    <GoogleSignIn class="login-button" />

    <nuxt-link to="/user/login">
      <v-btn class="login-button" color="#E0E0E0" light small>
        Have an account? Login here!
      </v-btn>
    </nuxt-link>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      email: "",
      password: "",
      reEnterPassword: "",
      error: "",
      show1: false,
      show2: false,
    }
  },
  computed: {
    registerError() {
      return this.$store.state.auth.error.errorMessage
    },
  },
  mounted() {
    const clearError = this.$store.commit("auth/clearUserError")
    clearError
  },
  methods: {
    registerUser() {
      if (this.password === this.reEnterPassword) {
        this.error = ""
        this.$store.dispatch("auth/createUserFirebase", {
          firstName: this.firstName,
          email: this.email,
          password: this.password,
        })
      } else {
        this.error = "Passwords do not match."
      }
    },
  },
}
</script>
<style scoped>
.container {
  width: 100%;
  padding: 10%;
  background-color: white;
}

.errors {
  color: red;
}
.login-button {
  margin-top: 10px;
  margin-bottom: 10px;
}
.error {
  color: red;
}
</style>
