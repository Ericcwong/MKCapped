<template>
  <div>
    <div v-for="option in options" :key="option">
      <v-checkbox
        @click.prevent="selectedData"
        multiple
        v-model="selected"
        :label="option"
        :value="option"
      ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: this.select,
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
  props: {
    select: Array,
  },
}
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>