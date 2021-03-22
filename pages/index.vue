<template>
  <div class="home">
    <div class="home-context">
      <p>
        Welcome to Mkcapped, a keyboard community for new comers and
        enthusiasts!
      </p>
      <!-- <small
        >A place to discover new stores, share images, and connect with one
        another</small
      > -->
      <Carousel />
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
}
.home-context {
  color: black;
  margin-top: 1.25rem;
  text-align: center;
  vertical-align: middle;
  font-size: 2rem;
  width: 100%;
  height: 10%;
}
</style>
