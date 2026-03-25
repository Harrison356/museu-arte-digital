<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ active: scrolled }">

    <!-- LOGO -->
    <img src="/logo-museu.jpeg" class="logo" />

    <!-- MENU -->
    <nav class="nav">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/exhibitions">Exposições</RouterLink>
      
    </nav>

  </header>
</template>

<style scoped>

/* HEADER */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 999;
  border-bottom: 1px solid #eee;
}

/* SCROLL */
header.active {
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

/* LOGO */
.logo {
  height: 45px;
}

/* NAV DESKTOP */
.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  text-decoration: none;
  color: #111;
  font-weight: 500;
}

/* 🔥 MOBILE CORRETO */
@media (max-width: 768px) {

  header {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }

  .logo {
    margin-bottom: 5px;
  }

  .nav {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .nav a {
    font-size: 14px;
  }
}

</style>