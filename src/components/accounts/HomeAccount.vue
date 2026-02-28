<script setup>
import { reactive } from 'vue'
import AddAccount from './AddAccount.vue'
import ItemAccount from './ItemAccount.vue'

let allAccounts = reactive([
  {
    name: 'Adem Account',
    status: 'active',
    solde: 120,
  },
  {
    name: 'Issam Account',
    status: 'inactive',
    solde: 342,
  },
  {
    name: 'Siwar Account',
    status: 'active',
    solde: 120,
  },
  {
    name: 'Fatma Account',
    status: 'inactive',
    solde: 342,
  },
])

let addAccount = function (newAcc) {
  console.log(newAcc)

  allAccounts.push(newAcc)
}

function deleteAccount(acc) {
  let i = allAccounts.indexOf(acc)
  allAccounts.splice(i, 1)
}
</script>
<template>
  <AddAccount @sendAccToHome="addAccount($event)"></AddAccount>

  <ItemAccount
    v-for="acc in allAccounts"
    :account="acc"
    @send-cand-to-delete="deleteAccount($event)"
  ></ItemAccount>
</template>
