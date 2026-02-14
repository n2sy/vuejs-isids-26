<script setup>
defineProps(['oneCandidate'])
defineEmits(['eventToListe'])
</script>

<template>
  <li @click="$emit('eventToListe', oneCandidate)" class="list-group-item">
    <img :src="oneCandidate.avatar" />
    {{ oneCandidate.prenom }} {{ oneCandidate.nom }}
  </li>
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
