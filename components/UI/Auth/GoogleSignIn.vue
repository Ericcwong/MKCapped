<template>
  <div class="googleAccount">
    <button @click.prevent="googleSignup">
      <GoogleIcon /> Continue with Google
    </button>
  </div>
</template>


<script>
export default {
  methods: {
    googleSignup() {
      this.$fire.auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          this.$store.commit("auth/getUser", result.user)
          var credential = result.credential

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken
          console.log(token)
          // The signed-in user info.
          var user = result.user
          console.log(user)
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
button {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
}
</style>