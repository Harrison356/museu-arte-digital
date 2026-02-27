<script setup>
import { ref, onMounted } from 'vue'

const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 60
  })
})
</script>

<template>
  <header :class="{ active: scrolled }">
    <img src="/logo-museu.jpeg" class="logo" />
    <nav>
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/exhibitions">Exposições</RouterLink>
      <RouterLink to="/collections">Coleções</RouterLink>
      <RouterLink to="/contato">Contato</RouterLink>
      <RouterLink to="/admin" class="admin-btn">Admin</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s ease;
  z-index: 999;
}

header.active {
  background: white;
  box-shadow: 0 5px 25px rgba(0,0,0,0.08);
  padding: 15px 60px;
}

.logo {
  height: 55px;
}

nav a {
  margin-left: 30px;
  text-decoration: none;
  color: #111;
  font-weight: 500;
  transition: 0.3s;
}

nav a:hover {
  color: #0b3d5c;
}

.admin-btn {
  background: #0b3d5c;
  color: white;
  padding: 8px 18px;
  border-radius: 20px;
}
</style>
