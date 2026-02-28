<script setup>
import { computed, ref } from 'vue'
import Second from './Second.vue'

let prenom = 'Adem'
//let txtColor = "blue";
let cache = false

function clickHandler() {
  console.log("J'ai été cliqué")
}

let contenu = "<p style='color: red'> Contenu HTLM</p>"

let url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1AvoJXu1NMIvNfwIWMLEX0xp7ZyQ11RjoQ&s'
let alternatif = 'Logo de Vue JS'

let infos = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1AvoJXu1NMIvNfwIWMLEX0xp7ZyQ11RjoQ&s',
  alt: 'Logo de Vue JS',
  width: '20px',
  heigth: '20 px',
}

function afficherMessage(msg) {
  console.log(msg)
}

let message = ref('Message First')
let year = ref(2026)

let m1 = computed(() => {
  return `Annee --- ${year.value}`
})
</script>

<template>
  <h4>Je suis le First Component</h4>

  <hr />
  <p>{{ message }}</p>
  <p>{{ year }}</p>
  <hr />
  <p>{{ m1 }}</p>

  <button @click="year.value++" class="btn btn-danger">Change Year</button>

  <Second @eventToFirst="afficherMessage($event)" :prenom="prenom" :annee="'2026'"></Second>

  <hr />

  <div v-html="contenu"></div>
  <!-- A ne pas faire -->
  <div>{{ contenu }}</div>
  <div>{{ 3 + 4 }}</div>

  <p>Interpolation</p>
  <h6>By {{ prenom }}</h6>
  <p>Property Binding</p>
  <h6 :hidden="cache">By {{ prenom }}</h6>
  <!-- Autre syntaxe -->
  <h6 v-bind:hidden="false">By {{ prenom }} V2</h6>

  <hr />
  <img :src="url" :alt="alternatif" />
  <hr />
  <img :="infos" />

  <p>Event Binding</p>
  <button @click="clickHandler">Click me</button>
  <button v-on:click="clickHandler()">Click me V2</button>
  <button v-on:click="console.log('Hello from Adem')">Click me V3</button>

  <input @keyup.space="console.log('touche tapée')" type="text" class="form-control" />
</template>

<style></style>
