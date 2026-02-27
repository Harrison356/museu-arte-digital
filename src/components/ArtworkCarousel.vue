<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const selected = ref(null)

const artworks = [
  { id: 1, title: 'Arte Neon', img: '/art1.jpg' },
  { id: 2, title: 'Pixel Art', img: '/art2.jpg' }
]
</script>

<template>
  <Swiper slides-per-view="3" space-between="20">
    <SwiperSlide
      v-for="art in artworks"
      :key="art.id"
      @click="selected = art"
      class="cursor-pointer"
    >
      <img :src="art.img"
           class="transition-transform duration-300 hover:scale-110 rounded-lg"/>
    </SwiperSlide>
  </Swiper>

  <div v-if="selected"
       class="fixed inset-0 bg-black/70 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg">
      <h2 class="text-xl font-bold">{{ selected.title }}</h2>
      <button @click="selected = null" class="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Fechar
      </button>
    </div>
  </div>
</template>
