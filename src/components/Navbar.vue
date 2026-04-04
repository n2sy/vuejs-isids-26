<script setup></script>

<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <RouterLink to="/" class="nav-link" active-class="active">Accueil</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/cv" class="nav-link" active-class="active">Candidats</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/accounts" class="nav-link" active-class="active">Accounts</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/login" class="nav-link" active-class="active">Login</RouterLink>
    </li>
  </ul>
</template>
