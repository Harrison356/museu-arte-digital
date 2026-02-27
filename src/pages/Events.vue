<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('Todos')

const events = [
  { id: 1, title: 'Workshop Vue', category: 'Workshop' },
  { id: 2, title: 'Palestra IA', category: 'Palestra' },
  { id: 3, title: 'Oficina NFT', category: 'Workshop' }
]

const filteredEvents = computed(() =>
  selectedCategory.value === 'Todos'
    ? events
    : events.filter(e => e.category === selectedCategory.value)
)
</script>

<template>
  <div class="p-10">
    <h2 class="text-3xl font-bold mb-6">Eventos</h2>

    <!-- Filtro -->
    <div class="mb-6 space-x-4">
      <button @click="selectedCategory='Todos'" class="px-4 py-2 bg-gray-300 rounded">Todos</button>
      <button @click="selectedCategory='Workshop'" class="px-4 py-2 bg-gray-300 rounded">Workshop</button>
      <button @click="selectedCategory='Palestra'" class="px-4 py-2 bg-gray-300 rounded">Palestra</button>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="event in filteredEvents"
        :key="event.id"
        class="bg-white dark:bg-gray-800 p-6 rounded shadow"
      >
        <h3 class="text-xl font-bold mb-2">
          {{ event.title }}
        </h3>
        <p class="text-sm text-gray-500">
          {{ event.category }}
        </p>
      </div>
    </div>
  </div>
</template>
