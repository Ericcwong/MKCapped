<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">Mkcapped</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>Stores</b-nav-item>
          <b-nav-item href="#">Resources</b-nav-item>
          <b-nav-item>Community</b-nav-item>
          <b-nav-item>About us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>Sign in</b-nav-item>
          <b-nav-item href="https://discord.gg/NJDjGQb2fK">Discord</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style>
small {
  font-size: x-small;
}
</style>