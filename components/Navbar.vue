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
          <!-- Discord -->
          <b-nav-item href="https://discord.gg/NJDjGQb2fK" target="_blank">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-24.png"
            /><span id="discord">Discord</span>
          </b-nav-item>
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
#discord {
  color: #758afa;
}
</style>