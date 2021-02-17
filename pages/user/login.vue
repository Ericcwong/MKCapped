<template>
  <div class="login">
    <div class="loginForm">
      <LoginForm />
    </div>
    <div class="image"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: space-between;
}
.loginForm {
  flex: 0 1 auto;
  background-color: white;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #42e3ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%235de7ff' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%2378ebff' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%2393efff' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23aef3ff' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23c9f7ff' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23e4fbff' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23ffffff' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

.image {
  width: 100%;
  background: url("/test.jpg");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.buttonGroup {
  display: flex;
}
@media only screen and (max-width: 1100px) {
  .login {
    background-size: cover;
  }
}
</style>