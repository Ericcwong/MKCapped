<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#81D4FA" light v-bind="attrs" v-on="on">
          Forgot Password
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Forgot Password</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-col cols="12">
              <v-text-field
                label="Email*"
                v-model="email"
                required
              ></v-text-field> </v-col
            >{{ email }}
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click.prevent="forgotPassword">
            Send Email
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      dialog: false,
    }
  },
  methods: {
    forgotPassword() {
      this.$store.dispatch("auth/forgotPassword", this.email)
    },
  },
}
</script>

<style scoped>
</style>