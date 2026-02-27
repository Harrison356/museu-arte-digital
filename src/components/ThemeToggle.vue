<script setup>
import { ref, watch } from 'vue'

const dark = ref(false)

watch(dark, val => {
  document.documentElement.classList.toggle('dark', val)
})
</script>

<template>
  <button @click="dark = !dark"
          class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
    {{ dark ? 'Claro' : 'Escuro' }}
  </button>
</template>
