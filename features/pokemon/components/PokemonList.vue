<script setup lang="ts">
import { useFetchPokemons } from '../composables/pokemons'

const { pokemons, status, error } = await useFetchPokemons()
</script>

<template>
  <div v-if="status === 'pending' || status === 'idle'">
    Now Loading...
  </div>
  <div v-else-if="error !== null">
    {{ error }}
  </div>
  <div v-else-if="pokemons.length === 0">
    No Data
  </div>
  <div v-else>
    <dl
      v-for="pokemon in pokemons"
      :key="pokemon.name"
    >
      <dd id="{{ pokemon.name }}">
        {{ pokemon.name }} {{ pokemon.url }}
      </dd>
    </dl>
  </div>
</template>
