<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="muted">
      <b-navbar-brand class="logo" to="/">Mkcapped</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" v-model="showCollapse" is-nav>
        <b-navbar-nav>
          <nuxt-link class="nav-items" to="/stores">Stores</nuxt-link>
          <nuxt-link class="nav-items" to="/resources">Resources</nuxt-link>
          <nuxt-link class="nav-items" to="/community">Community</nuxt-link>
          <nuxt-link class="nav-items" to="/about">About us</nuxt-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <nuxt-link class="nav-items" to="/user/login">Login</nuxt-link>
          <nuxt-link class="nav-items" to="/user/register">Register</nuxt-link>
          <nuxt-link class="nav-items" v-if="status" to="/">Logout</nuxt-link>

          <!-- Discord -->
          <a
            class="nav-items"
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
      showCollapse: false,
    }
  },
  // Mobile navigation: The drop down will close when a user changes to a different page
  watch: {
    $route() {
      this.showCollapse = false
    },
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
.nav-items {
  margin: 0 10px 0 10px;
  color: white;
  position: relative;
  text-decoration: none;
}
.nav-items::before {
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
.nav-items:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
small {
  font-size: x-small;
}
#discord {
  color: #758afa;
}
@media only screen and (max-width: 990px) {
  #nav-collapse {
    font-size: 1.4rem;
  }
  .nav-items {
    border-bottom: 0.5px solid lightgray;
  }
}
</style>
