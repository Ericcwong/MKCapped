<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  <!-- <v-card height="500px" width="" class="mx-auto">
    <v-toolbar height="100%">
      <v-navigation-drawer>
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
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-btn
              class="nav-items"
              @click.prevent="loadComponent(item.title)"
              >{{ item.title }}</v-btn
            >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
  </v-card> -->
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
button {
  width: 100%;
}
</style>