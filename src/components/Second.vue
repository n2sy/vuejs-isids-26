<script setup>
let props = defineProps(['prenom', 'annee'])

// console.log(props)
</script>
<template>
  <h3>Je m'apelle {{ prenom }} - Année : {{ annee }}</h3>
</template>
