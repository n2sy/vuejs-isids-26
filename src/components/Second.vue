<script setup>
let props = defineProps(['prenom', 'annee'])

// let emit = defineEmits(['eventToFirst'])
defineEmits(['eventToFirst'])

// console.log(props)
</script>
<template>
  <h3>Je m'apelle {{ prenom }} - Année : {{ annee }}</h3>
  <!-- <button @click="emit('eventToFirst', 'Message de la part du Second')" class="btn btn-primary">
    Send Event
  </button> -->
  <button @click="$emit('eventToFirst', 'Message de la part du Second')" class="btn btn-primary">
    Send Event
  </button>
</template>
