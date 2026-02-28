<script setup>
defineProps(['account'])
defineEmits(['sendCandToDelete'])
function setRandomColor() {
  let cl = `#${Math.floor(Math.random() * 16777216).toString(16)}`
  return cl
}
</script>
<template>
  <div class="bordure" :style="{ backgroundColor: setRandomColor() }">
    <h4>{{ account.name }}</h4>
    <p>Solde : {{ account.solde }}</p>
    <hr />
    <p>This account is {{ account.status }}</p>
    <button class="btn btn-success">Set to 'active'</button>
    <button class="btn btn-danger">Set to 'inactive'</button>
    <button class="btn btn-info">Set to 'unknown'</button>
    <button @click="$emit('sendCandToDelete', account)" class="btn btn-dark">Delete account</button>
  </div>
</template>

<style scoped>
.bordure {
  border: 1px grey solid;
  padding: 10px;
  margin: 10px;
}
</style>
