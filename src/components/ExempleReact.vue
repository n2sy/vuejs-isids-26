<script setup>
import { ref } from 'vue'

let prenom = ref('wael')
let age = ref(22)

let obj = ref({
  prenom: 'nidhal',
  age: 40,
  section: 'isids',
  year: 2026,
  univeristy: 'fsegt',
})

function updatePrenom() {
  prenom.value = 'oumaima'

  obj.value = {
    prenom: 'Wael',
    age: 54,
  }
}
</script>

<template>
  <h4>Je m'appelle {{ prenom }} et j'ai {{ age }} ans !</h4>

  <button class="btn btn-primary" @click="updatePrenom()">Update Prenom</button>
</template>

<style></style>

<!-- 
exemple de "reactive"
<script setup>
import { reactive } from 'vue'

let obj = reactive({
  prenom: 'nidhal',
  age: 40,
  section: 'isids',
  year: 2026,
  univeristy: 'fsegt',
})

let { prenom, age } = obj

function updatePrenom() {
  obj.prenom = 'Oumaima'
  obj.age = 22
  //   obj = {
  //     prenom: 'Wael',
  //     age: 54,
  //   }
  //   obj.section = 'isids'
}
</script>

<template>
  <h4>Je m'appelle {{ prenom }} et j'ai {{ age }} ans !</h4>
  <h4>Je m'appelle {{ obj.prenom }} et j'ai {{ obj.age }} ans ! - Section : {{ obj.section }}</h4>
  <button class="btn btn-primary" @click="updatePrenom()">Update Prenom</button>
</template>

<style></style> -->
