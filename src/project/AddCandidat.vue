<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

let router = useRouter()

let firstName = ref('')
let lastName = ref('')
let age = ref('')
let profession = ref('')
let avatar = ref(null)

function submitHandler() {
  let newCandidate = {
    prenom: firstName.value,
    nom: lastName.value,
    age: age.value,
    profession: profession.value,
    avatar: avatar.value,
  }

  let token = localStorage.getItem('access_token')
  if (token)
    axios
      .post('https://backendangulartrainingvercel.vercel.app/cv/candidats', newCandidate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert(`Le candidat d'id ${res.data['id']} a bien été créé`)
      })
  else {
    alert("Vous n'avez pas les autorisations nécessaires pour ajouter un candidat.")
    router.push('/cv')
  }
}
</script>
<template>
  <form @submit.prevent="submitHandler">
    <label>Prénom</label>
    <input class="form-control" type="text" v-model="firstName" />
    <label>Nom</label>
    <input class="form-control" type="text" v-model="lastName" />
    <label>Age</label>
    <input class="form-control" type="text" v-model="age" />
    <label>Profession</label>
    <input class="form-control" type="text" v-model="profession" />
    <label>Avatar</label>
    <input class="form-control" type="url" v-model="avatar" />
    <br />
    <center>
      <button class="btn btn-primary" type="submit">Ajouter Candidat</button>
    </center>
  </form>
</template>
