<script setup>
import { Candidat } from '@/models/Candidat'
import Details from './Details.vue'
import Liste from './Liste.vue'
import { provide, ref } from 'vue'
import axios from 'axios'

let tabCandidats = ref([]) // []
// let tabCandidats = [
//   new Candidat(1, 'bart', 'simpson', 28, 'ingénieur', 'bart.jpeg'),
//   new Candidat(2, 'homer', 'simpson', 53, 'chef de projet', 'homer.png'),
//   new Candidat(3, 'lisa', 'simpson', 22, 'designer', 'lisa.png'),
// ]

fetch('https://backendangulartrainingvercel.vercel.app/cv/candidats')
  .then((response) => response.json())
  .then((data) => {
    tabCandidats.value = data
  })

// axios
//   .get('https://backendangulartrainingvercel.vercel.app/cv/candidats')
//   .then((res) => console.log(res.data))

let selectedCandidate = ref(null)
// let selectedCandidate

function recupererCandidat(cand) {
  //   selectedCandidate = cand
  selectedCandidate.value = cand
  console.log(selectedCandidate)
}

provide('keySelectedCandidate', selectedCandidate)
</script>

<template>
  <div class="row">
    <div class="col-5">
      <!-- <Liste @eventToCv="selectedCandidate = $event" :allCandidates="tabCandidats"></Liste> -->
      <!-- <Liste @eventToCv="recupererCandidat($event)" :allCandidates="tabCandidats"></Liste> -->
      <Liste :allCandidates="tabCandidats"></Liste>
    </div>
    <div class="col-7">
      <Details v-if="selectedCandidate" v-model="selectedCandidate"></Details>
      <!-- <Details v-if="selectedCandidate" :selCandidate="selectedCandidate"></Details> -->
      <p v-else>Veuillez cliquer sur un candidat...</p>
    </div>
  </div>
</template>
