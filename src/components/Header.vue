<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { idioma } from '../composables/useIdioma'

const scrolled = ref(false)

const textos = {
  pt: {
    inicio: 'Início',
    exposicoes: 'Exposições',
    agendamento: 'Agendamento',
    sobre: 'Sobre'
  },
  en: {
    inicio: 'Home',
    exposicoes: 'Exhibitions',
    agendamento: 'Booking',
    sobre: 'About'
  }
}

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
    <div class="menu">
      <nav class="nav">
        <RouterLink to="/">{{ textos[idioma].inicio }}</RouterLink>
        <RouterLink to="/exhibitions">{{ textos[idioma].exposicoes }}</RouterLink>
        <RouterLink to="/Agendamento">{{ textos[idioma].agendamento }}</RouterLink>
        <RouterLink to="/Sobre">{{ textos[idioma].sobre }}</RouterLink>
      </nav>

      <!-- BOTÃO IDIOMA -->
      <div class="idioma">
        <button :class="{ ativo: idioma === 'pt' }" @click="idioma = 'pt'">PT</button>
        <button :class="{ ativo: idioma === 'en' }" @click="idioma = 'en'">EN</button>
      </div>
    </div>

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

/* MENU (NAV + IDIOMA) */
.menu {
  display: flex;
  align-items: center;
  gap: 25px;
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

/* BOTÃO IDIOMA */
.idioma {
  display: flex;
  gap: 8px;
}

.idioma button {
  background: transparent;
  border: 1px solid #537bff;
  color: #537bff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.idioma button:hover {
  background: #537bff;
  color: white;
}

.idioma .ativo {
  background: #537bff;
  color: white;
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

  .menu {
    width: 100%;
    flex-direction: column;
    gap: 10px;
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

  .idioma {
    justify-content: center;
  }
}

</style>