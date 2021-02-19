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
    <button @click.prevent="createUser">Register</button>
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
import { mapActions } from "vuex"
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  created() {
    // console.log(this.$store)
    // console.log(mapActions)
  },
  methods: {
    createUser(email, password) {
      this.$store.dispatch("createUserFirebase")
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
</style>