<template>
  <v-container>
    <form @keydown.enter="loginUser">
      <h1>Login</h1>
      <v-text-field v-model="email" label="Email" required></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn
        class="login-button"
        elevation="2"
        outlined
        raised
        @click.prevent="loginUser"
        >Login</v-btn
      >
    </form>
    <GoogleSignIn class="login-button" />

    <nuxt-link to="/user/register">
      <v-btn class="login-button" color="#E0E0E0" light small>
        Need an account? Register here!
      </v-btn>
    </nuxt-link>
  </v-container>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: mapState({
    errorCode: (state) => state.auth.error.errorCode,
  }),
  data() {
    return {
      email: "",
      password: "",
      show1: false,
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch("auth/getUserByEmail", {
        email: this.email,
        password: this.password,
      })
    },
    forgotPassword() {
      this.$store.dispatch("auth/forgotPassword")
    },
    showPassword() {
      let password = document.getElementById("password")
      if (password.type === "password") {
        password.type = "text"
      } else {
        password.type = "password"
      }
    },
  },
  watch: {
    error(newError) {
      console.log(newError)
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
</style>
