<script setup>
import { ref } from 'vue'

let allStatus = ['', 'active', 'inactive', 'unknown']

defineEmits(['sendAccToHome'])

let nameRef = ref('')
let soldeRef = ref(0)
let statusRef = ref('')
</script>
<template>
  <label for="">Account Name</label>
  <input type="text" class="form-control" @input="nameRef = $event.target.value" />
  <label for="">Account Solde</label>
  <input type="number" class="form-control" @input="soldeRef = $event.target.value" />
  <label for="">Account Status</label>
  <select class="form-control" @change="statusRef = $event.target.value">
    <option v-for="st in allStatus" :value="st">{{ st }}</option>
  </select>

  <button
    @click="
      $emit('sendAccToHome', {
        name: nameRef,
        solde: soldeRef,
        status: statusRef,
      })
    "
    class="btn btn-primary"
  >
    Add Account
  </button>
</template>
