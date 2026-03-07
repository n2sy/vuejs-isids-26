<script setup>
import { computed, reactive } from 'vue'
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

function deleteAccount(acc) {
  let i = allAccounts.indexOf(acc)
  allAccounts.splice(i, 1)
}

let addAccount = function (newAcc) {
  console.log(newAcc)

  allAccounts.push(newAcc)
}

let totalActifs = computed(() => {
  let total = 0
  for (const account of allAccounts) {
    if (account.status == 'active') total += account.solde
  }
  return total
})
let totalInactifs = computed(() => {
  let total = 0
  for (const account of allAccounts) {
    if (account.status == 'inactive' || account.status == 'unknown') total += account.solde
  }
  return total
})
</script>
<template>
  <AddAccount @sendAccToHome="addAccount($event)"></AddAccount>
  <hr />
  <p>Total des comptes actifs : {{ totalActifs }}</p>
  <hr />
  <p>Total des comptes inactifs : {{ totalInactifs }}</p>

  <ItemAccount
    v-for="acc in allAccounts"
    :account="acc"
    :key="acc.name"
    @send-cand-to-delete="deleteAccount($event)"
  ></ItemAccount>
</template>
