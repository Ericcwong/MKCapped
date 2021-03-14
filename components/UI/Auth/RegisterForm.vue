<template>
  <!-- Registering a user for email and password registration. -->
  <div class="registration-component">
    <form>
      <b-form-group class="title" label="Register:" label-for="input-1">
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          placeholder="email"
        ></b-form-input>
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          placeholder="password"
          autocomplete="off"
        ></b-form-input>
      </b-form-group>
      <button class="u-button" @click.prevent="createUserFirebase">
        Register
      </button>
      <br />
      <br />
    </form>
    <!-- Google Sign in option -->
    <GoogleSignIn />
    <!-- Error message if user runs in an issue -->
    <span class="error" v-if="error !== ''">{{ error }}</span>
    <br />
    <br />
    <!-- Button redirect to login page -->
    <NavButton
      style="font-size: 0.75rem"
      redirect="/user/login"
      name="Have an account? Login here!"
    />
  </div>
</template>

<script>
import { auth, provider } from "~/plugins/firebase"
import GoogleSignIn from "./GoogleSignIn.vue"
export default {
  components: { GoogleSignIn },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  methods: {
    //Through email and password
    async createUserFirebase() {
      try {
        await auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((res) => {
            if (res.additionalUserInfo.isNewUser === true) {
              this.$store.commit("auth/updateUserStatus")
              this.$router.push("/user/login")
            }
          })
      } catch (error) {
        this.error = error.message
        console.log(error)
      }
    },
  },
}
</script>
<style scoped>
.registration-component {
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
.error {
  color: red;
}
</style>
