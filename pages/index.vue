<template>
  <div class="home">
    <div class="home-context">
      <Carousel />
    </div>
    <div class="container description">
      <p class="title">What is Mkcapped?</p>
      <p>
        Mkcapped is a one stop place to find new stores, share techniques for
        building keyboards, and soon to come share images of your keyboards.
      </p>
      <p>
        As a keyboard builder, I found myself only shopping in a handful of
        stores that I remember or saved. Occassionally I would stuble a new
        store through Reddit or a video off Youtube. I would browse the store
        but would forget about it later. I wanted to have a central place that
        houses stores that sells keyboard items thus Mkcapped was created.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home-context {
  color: black;
  text-align: center;
  vertical-align: middle;
  font-size: 2rem;
  width: 100%;
  height: 10%;
}
.container {
  font-size: 1.5rem;
}
.description .title {
  font-size: 2.5rem;
}
</style>
