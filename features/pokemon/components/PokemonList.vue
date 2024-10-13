<script setup lang="ts">
import { VCard, VCardTitle, VCardText, VContainer, VRow, VCol, VProgressCircular } from 'vuetify/components'
import { useFetchPokemons } from '../composables/pokemons'

const { pokemons, status, error } = await useFetchPokemons()
</script>

<template>
  <VContainer>
    <div v-if="status === 'pending' || status === 'idle'">
      <VProgressCircular
        indeterminate
        color="primary"
      >
        Now Loading...
      </VProgressCircular>
    </div>
    <div v-else-if="error !== null">
      {{ error }}
    </div>
    <div v-else-if="pokemons.length === 0">
      No Data
    </div>
    <div v-else>
      <VRow>
        <VCol
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          cols="12"
        >
          <VCard>
            <VCardTitle>{{ pokemon.name }}</VCardTitle>
            <VCardText>{{ pokemon.url }}</VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<style scoped>
/* 必要に応じてスタイルを調整してください */
</style>
