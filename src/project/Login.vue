<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let emailValue = ref('')
let passwordValue = ref('')
let router = useRouter()

function submitHandler() {
    // e.preventDefault()
    //console.log("submitted")
    fetch("https://backendangulartrainingvercel.vercel.app/auth/login", {
        method : "POST",
        body : JSON.stringify({
          "email": emailValue.value,
          "password": passwordValue.value
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(data => {
        alert(data["message"])
        localStorage.setItem("access_token", data["token"])
        router.push('/cv')
    })
    .catch(err => console.log("Erreur d'authentification"))
    
   
    
    
   
}

</script>
<template>

<form @submit.prevent = "submitHandler">
    <label>Login</label>
    <input class="form-control" type="text" v-model="emailValue"  />
    <label>Mot de passe</label>
    <input class="form-control" type="text" v-model="passwordValue" />
    <br>
    </br>
    <center>
    <button class="btn btn-outline-info" type="submit">Login</button>
        
    </center>
</form>
</template>
