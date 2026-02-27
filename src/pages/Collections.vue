<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const selected = ref(null)

const artworks = [
  { id: 1, title: 'Neon Future', img: 'https://picsum.photos/400/400?1' },
  { id: 2, title: 'Cyber Dream', img: 'https://picsum.photos/400/400?2' },
  { id: 3, title: 'Pixel Revolution', img: 'https://picsum.photos/400/400?3' }
]
</script>

<template>
  <div class="p-10">
    <h2 class="text-3xl font-bold mb-6">Coleções</h2>

    <Swiper :slides-per-view="1"
            :breakpoints="{768:{slidesPerView:3}}"
            space-between="20">

      <SwiperSlide v-for="art in artworks"
                   :key="art.id"
                   @click="selected = art"
                   class="cursor-pointer">

        <img :src="art.img"
             class="rounded-lg transition-transform duration-300 hover:scale-110"/>
      </SwiperSlide>
    </Swiper>

    <!-- MODAL -->
    <div v-if="selected"
         class="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg">
        <h3 class="text-2xl font-bold mb-4">{{ selected.title }}</h3>

        <button
          @click="selected = null"
          class="bg-purple-600 text-white px-4 py-2 rounded">
          Fechar
        </button>
      </div>
    </div>
  </div>
</template>
