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
    </b-form-group>
    <div class="login-buttons">
      <button class="u-button" @click.prevent="loginUser">Login</button>
      <br />
      <br />
      <GoogleSignIn />
      <br />
      <br />
      <NavButton
        redirect=""
        name="Forgot password?"
        style="font-size: 0.75rem"
      />
      <br />
      <br />
      <NavButton
        style="font-size: 0.75rem"
        redirect="/user/register"
        name="Dont have an account? Register here!"
      />
    </div>
  </form>
</template>

<script>
import { auth } from "~/plugins/firebase"
export default {
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
  },
}
</script>

<style scoped>
form {
  width: 100%;
  padding: 20%;
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
</style>