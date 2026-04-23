<script setup>
// let props = defineProps(['selCandidate'])
// console.log(props)
import { useRouter } from 'vue-router'

const selCandidate = defineModel({
  required: true,
})

let router = useRouter()

console.log(selCandidate.value)
function deleteCandidate() {
  if (confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
    fetch(`https://backendangulartrainingvercel.vercel.app/cv/candidats/${selCandidate._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        alert('Candidat supprimé avec succés')
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
        alert("Vous n'avez pas les autorisations nécessaires pour ajouter un candidat.")
        router.push('/')
      })
  }
}
</script>

<template>
  <div class="card-container">
    <div class="card">
      <div class="front">
        <div class="cover">
          <img src="../../public/rotating_card_thumb2.png" />
        </div>
        <div class="user">
          <img class="img-circle" :src="selCandidate?.avatar" />
        </div>
        <div class="content">
          <div class="main">
            <h3 class="name">{{ selCandidate?.prenom }} {{ selCandidate?.nom }}</h3>
            <p class="profession">{{ selCandidate?.age }} ans</p>

            <p class="text-center">
              {{ selCandidate?.profession }}
            </p>
          </div>
          <div class="footer">
            <div class="rating"><i class="fa fa-mail-forward"></i> Auto Rotation</div>
          </div>
        </div>
      </div>
      <!-- end front panel -->
      <div class="back">
        <div class="header">
          <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
        </div>
        <div class="content">
          <div class="main">
            <h4 class="text-center">Job Description</h4>
            <p class="text-center">
              Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...
            </p>

            <div class="stats-container">
              <div class="stats">
                <h4>235</h4>
                <p>Followers</p>
              </div>
              <div class="stats">
                <h4>114</h4>
                <p>Following</p>
              </div>
              <div class="stats">
                <h4>35</h4>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <button class="btn btn-danger" @click="deleteCandidate()">Supprimer</button>
        </div>
      </div>
      <!-- end back panel -->
    </div>
    <!-- end card -->
  </div>
  <!-- end card-container -->
</template>

<style scoped>
@import url('../../public/rotating-card.css');
</style>
