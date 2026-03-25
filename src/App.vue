<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="app">

    <!-- HEADER GLOBAL -->
    <Header />

    <!-- ROTAS -->
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>

  </div>
</template>

<style>

/* RESET GLOBAL */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* BASE */
body {
  font-family: 'Inter', sans-serif;
  background: #ffffff;
}

/* APP */
.app {
  min-height: 100vh;
}

/* TRANSIÇÃO ENTRE PÁGINAS */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

</style>