<template>
  <form>
    {{ this.$store.state.auth.userSignUpStatus }}
    <b-form-group class="title" label="Login:" label-for="input-1">
      <b-form-input
        id="email"
        v-model="email"
        type="email"
        placeholder="email"
        required
      ></b-form-input>
      <b-form-input
        id="password"
        v-model="password"
        type="password"
        placeholder="password"
        required
      ></b-form-input>
      <div class="forgot-password">
        <input type="checkbox" @click.prevent="showPassword" />show password
      </div>
    </b-form-group>
    <div class="errors">{{ errorCode }}</div>

    <div class="login-buttons">
      <div class="sign-in-options">
        <v-btn
          class="login-button"
          color="#81D4FA"
          light
          @click.prevent="loginUser"
          >Login</v-btn
        >
        <div class="forgot-password">
          <v-app class="login-button" style="height: 20px"
            ><ForgotPassword
          /></v-app>
        </div>
      </div>

      <GoogleSignIn />
      <br />
      <br />

      <nuxt-link to="/user/register"
        ><v-btn class="nav-button" color="#E0E0E0" light small
          >Need an account? Register here!</v-btn
        ></nuxt-link
      >
    </div>
  </form>
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
form {
  width: 100%;
  padding: 15%;
  background-color: white;
}
.title {
  font-size: 1.75rem;
}
input {
  height: 3rem;
  margin-bottom: 15px;
}
.login-buttons {
  margin-bottom: 10px;
}

.errors {
  color: red;
}
.forgot-password {
  height: 5vh;
  margin-left: 11px;
  margin-top: 12px;
}
.sign-in-options {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
}

.v-btn__content {
  font-size: 1rem;
  color: black;
}
.nav-button {
  width: 100%;
}
</style>
