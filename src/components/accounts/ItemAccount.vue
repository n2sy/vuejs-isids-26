<script setup>
let props = defineProps(['account'])
defineEmits(['sendCandToDelete'])
function setRandomColor() {
  let cl = `#${Math.floor(Math.random() * 16777216).toString(16)}`
  return cl
}

function updateStatus(newStatus) {
  props.account.status = newStatus
}
</script>
<template>
  <div class="bordure" :style="{ backgroundColor: setRandomColor() }">
    <h4>{{ account.name }}</h4>
    <p>Solde : {{ account.solde }}</p>
    <hr />
    <p>This account is {{ account.status }}</p>
    <button
      :disabled="account.status == 'active'"
      class="btn btn-success"
      @click="updateStatus('active')"
    >
      Set to 'active'
    </button>
    <button
      :disabled="account.status == 'inactive'"
      class="btn btn-danger"
      @click="updateStatus('inactive')"
    >
      Set to 'inactive'
    </button>
    <button
      :disabled="account.status == 'unknown'"
      class="btn btn-info"
      @click="updateStatus('unknown')"
    >
      Set to 'unknown'
    </button>
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
