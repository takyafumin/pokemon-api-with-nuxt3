<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'My Nuxt Application',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
