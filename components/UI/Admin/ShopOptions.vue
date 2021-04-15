<template>
  <v-container fluid>
    <div v-for="option in options" :key="option">
      <v-checkbox
        @click.prevent="selectedData"
        v-model="selected"
        :label="option"
        :value="option"
      ></v-checkbox>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      options: [
        "Keyboards",
        "Switches",
        "Keycaps",
        "Lube",
        "Group Buy",
        "Desk Mats",
        "Accessories",
        "Artisans",
      ],
    }
  },
  methods: {
    selectedData() {
      this.$emit("selectedData", this.selected)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>