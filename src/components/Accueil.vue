<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToCv() {
  router.push({ name: 'candidats' })
}
function goToCv2() {
  //   router.push({ path: '/cv' })
  router.push('/cv')
}
</script>

<template>
  <h3>Bienvenue à notre application VUe JS</h3>

  <p>Navigation côté Template</p>
  <RouterLink to="" class="btn btn-primary">Go To Cv</RouterLink>
  <RouterLink :to="{ name: 'candidats' }" class="btn btn-success">Go To Cv</RouterLink>
  <p>Navigation côté Script</p>
  <RouterLink @click="goToCv()" class="btn btn-primary">Go To Cv</RouterLink>
  <RouterLink @click="goToCv2()" class="btn btn-success">Go To Cv</RouterLink>
</template>
