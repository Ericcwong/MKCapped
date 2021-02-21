<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="light" variant="muted">
      <b-navbar-brand class="logo" to="/">Mkcapped</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link class="navItems" to="/stores">Stores</nuxt-link>
          <nuxt-link class="navItems" to="/resources">Resources</nuxt-link>
          <nuxt-link class="navItems" to="/community">Community</nuxt-link>
          <nuxt-link class="navItems" to="/about">About us</nuxt-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <nuxt-link class="navItems" to="/user/login">Login</nuxt-link>
          <nuxt-link class="navItems" to="/user/register">Register</nuxt-link>
          <nuxt-link class="navItems" v-if="status" to="/">Logout</nuxt-link>

          <!-- Discord -->
          <a
            class="navItems"
            target="_blank"
            href="https://discord.gg/NJDjGQb2fK"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-24.png"
            /><span id="discord">Discord</span>
          </a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    }
  },
  methods: {
    getUser() {
      let status = this.$store.state.user.isLoggedIn
      this.status = status
    },
  },
}
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.8);
}
.logo {
  font-size: 2rem;
  color: white;
}
.logo:hover {
  color: white;
}
.navItems {
  margin: 0 10px 0 10px;
  color: white;
  position: relative;
  text-decoration: none;
}
.navItems::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: lightskyblue;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
.navItems:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
small {
  font-size: x-small;
}
#discord {
  color: #758afa;
}
</style>
