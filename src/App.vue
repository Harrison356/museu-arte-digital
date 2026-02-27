<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="app">

    <!-- HEADER -->
    <header class="header">
      <div class="logo-area">
        <img src="/logo-museu.jpeg" class="logo" />
      </div>

      <nav class="nav">
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/exhibitions">Exposições</RouterLink>
        <RouterLink to="/sobre">Sobre</RouterLink>
        <RouterLink to="/contato">Contato</RouterLink>
      </nav>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-image"></div>

      <div class="hero-content">
        <h4>MUSEU DA CIDADE DE MANAUS</h4>

        <h1>
          ARTE, HISTÓRIA E  
          IDENTIDADE AMAZÔNICA
        </h1>

        <p>
          Explore exposições, cultura e memória no coração da Amazônia.
        </p>

        <div class="buttons">
          <RouterLink to="/exhibitions" class="primary">
            Ver Exposições →
          </RouterLink>

          <RouterLink to="/contato" class="outline">
            Agendar Visita →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- TRANSIÇÃO ENTRE PÁGINAS -->
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>

  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #ffffff;
}

/* HEADER */

.header {
  position: fixed;
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid #eee;
}

.logo {
  height: 55px;
}

.nav a {
  margin-left: 35px;
  text-decoration: none;
  color: #111;
  font-weight: 500;
  transition: 0.3s ease;
}

.nav a:hover {
  color: #0b3d5c;
}

/* HERO */

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  margin-top: 90px;
}

.hero-image {
  background: url('https://images.unsplash.com/photo-1549887534-4b54a7d9d6f6?q=80&w=1600&auto=format') center/cover no-repeat;
}

.hero-content {
  background: #0b3d5c;
  color: white;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: slideUp 1.2s ease;
}

.hero-content h4 {
  letter-spacing: 3px;
  font-weight: 300;
  margin-bottom: 15px;
}

.hero-content h1 {
  font-size: 52px;
  line-height: 1.1;
  margin-bottom: 25px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 500px;
}

/* BUTTONS */

.buttons {
  display: flex;
  gap: 20px;
}

.primary {
  background: white;
  color: #0b3d5c;
  padding: 15px 35px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.primary:hover {
  transform: translateY(-3px);
  opacity: 0.9;
}

.outline {
  border: 2px solid white;
  color: white;
  padding: 15px 35px;
  text-decoration: none;
  transition: 0.3s;
}

.outline:hover {
  background: white;
  color: #0b3d5c;
}

/* ANIMAÇÃO HERO */

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* TRANSIÇÃO DE PÁGINA */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* RESPONSIVO */

@media (max-width: 900px) {

  .hero {
    grid-template-columns: 1fr;
  }

  .hero-image {
    height: 50vh;
  }

  .hero-content {
    padding: 50px 30px;
  }

  .hero-content h1 {
    font-size: 36px;
  }

  .header {
    padding: 15px 25px;
  }

  .nav a {
    margin-left: 20px;
  }

}
</style>
