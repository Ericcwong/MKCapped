<template>
  <nav>
    <v-toolbar dark dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> Admin Control Panel</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      clipped-left
      class="gray accent-4"
      dark
      bottom
      temporary
      absolute
    >
      <v-list-item>
        <v-list-item-content>
          <v-btn
            ><v-list-item-title
              class="title"
              @click.prevent="loadComponent('')"
            >
              Admin Panel
            </v-list-item-title></v-btn
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item
              class="nav-items"
              @click.prevent="loadComponent(item.title)"
              >{{ item.title }}
            </v-list-item>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Add Shop", icon: "mdi-account-box" },
        { title: "Make Admin", icon: "mdi-gavel" },
      ],
      drawer: false,
    }
  },
  methods: {
    loadComponent(value) {
      console.log(value)
      this.$emit("loadComponent", value)
    },
  },
}
</script>

<style scoped>
nav {
  width: 100%;
  height: 0%;
}
</style>