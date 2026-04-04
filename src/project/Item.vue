<script setup>
import { inject } from 'vue'

defineProps(['oneCandidate'])
defineEmits(['eventToListe'])

let vHighlight = (el) => {
  el.addEventListener('mouseenter', () => {
    ;((el.style.backgroundColor = 'grey'), (el.style.color = 'white'))
  })
  el.addEventListener('mouseleave', () => {
    ;((el.style.backgroundColor = 'aqua'), (el.style.color = 'pink'))
  })
}

let selCand = inject('keySelectedCandidate')
</script>

<template>
  <li v-highlight @click="selCand = oneCandidate" class="list-group-item">
    <img :src="oneCandidate.avatar" />
    {{ oneCandidate.prenom }} {{ oneCandidate.nom }}
  </li>
  <!-- <li v-highlight @click="$emit('eventToListe', oneCandidate)" class="list-group-item">
    <img :src="oneCandidate.avatar" />
    {{ oneCandidate.prenom }} {{ oneCandidate.nom }}
  </li> -->
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
