<template>
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
    <button @click.prevent="createUserFirebase">Register</button> <br />
    <button @click.prevent="googleSignup">google</button>
    <span class="error" v-if="error !== ''">{{ error }}</span>
    <br />
    <br />
    <Button
      style="font-size: 0.75rem"
      redirect="/user/login"
      name="Have an account? Login here!"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  created() {
    // console.log(this.$store)
    // console.log(mapActions)
  },
  methods: {
    //Through email and password
    async createUserFirebase() {
      try {
        await this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(console.log("User created"))
      } catch (error) {
        this.error = error
        console.log(error)
      }
    },
    googleSignup() {
      const provider = new auth.GoogleAuthProvider()
      auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken
          // The signed-in user info.
          var user = result.user
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          // ...
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
.error {
  color: red;
}
</style>