<template>
  <div class="home">
    <div class="home-context">
      <h1 class="home-title">Mkcapped</h1>
      <p>
        Welcome to Mkcapped, a keyboard community for new comers and
        enthusiasts!
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  height: 100%;
}
.home-context {
  color: white;
  position: absolute;
  /* margin-top: 160px; */
  margin-top: 8.5%;
}
@media only screen and (max-width: 1460px) {
  .home {
    background-image: url("/homeBackground.jpg");
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
</style>
