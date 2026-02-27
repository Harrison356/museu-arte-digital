<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const modules = [Navigation, Pagination, Autoplay]

const slides = [
  { id: 1, img: '/hero1.jpg' },
  { id: 2, img: '/hero2.jpg' },
  { id: 3, img: '/hero3.jpg' }
]
</script>

<template>
  <Swiper
    :modules="modules"
    navigation
    pagination
    :autoplay="{ delay: 3000 }"
    class="h-[80vh]"
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <img :src="slide.img" class="w-full h-full object-cover"/>
    </SwiperSlide>
  </Swiper>
</template>
