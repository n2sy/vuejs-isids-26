<script setup>
import Item from './Item.vue'
defineProps(['allCandidates'])
defineEmits(['eventToCv'])
</script>

<template>
  <ol class="list-group">
    <Item @eventToListe="$emit('eventToCv', $event)" :oneCandidate="allCandidates[0]"></Item>
    <Item @eventToListe="$emit('eventToCv', $event)" :oneCandidate="allCandidates[1]"></Item>
    <Item @eventToListe="$emit('eventToCv', $event)" :oneCandidate="allCandidates[2]"></Item>
  </ol>
</template>
