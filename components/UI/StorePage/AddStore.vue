<template>
  <div class="addStore">
    <form>
      <h2>Add a store!</h2>
      <div class="storeName">
        <label for="storeName">Store Name:</label>
        <input v-model="storeName" type="text" id="storeName" />
        {{ storeName }}
      </div>
      <div class="storeLogo">
        <label for="storeLogo">Store Logo:</label>
        <input v-model="storeLogo" type="text" id="storeLogo" />
        {{ storeLogo }}
      </div>
      <div class="storeURL">
        <label for="storeURL">Store Url:</label>
        <input v-model="storeURL" type="text" id="storeURL" />
        {{ storeURL }}
      </div>
    </form>
  </div>
</template>

<script>
</script>

<style>
.addStore {
  max-width: 600px;
  padding: 25px;
  background-color: #f5f5f5;
  display: flex;
  margin: 0 auto;
}
form {
  display: inline;
  margin: 0 auto;
}
input[type="text"] {
  width: 100%;
  color: black;
}
</style>