<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
// console.log(route.params)
let candId = route.params.id
</script>

<template>
  <p>Infos d'un candidat d'id {{ candId }}</p>
</template>
