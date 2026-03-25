<template>
  <section class="home">

    <div class="container">

      <!-- HEADER -->
      <header class="header">
        <h1>{{ textos[idioma].titulo }}</h1>

        <div class="lang">
          <button :class="{ active: idioma === 'pt' }" @click="idioma = 'pt'">PT</button>
          <button :class="{ active: idioma === 'en' }" @click="idioma = 'en'">EN</button>
        </div>
      </header>

      <!-- HERO / CARROSSEL -->
      <div class="carousel">
        <img :src="imagens[currentSlide]" alt="slide" />
      </div>

      <!-- EVENTOS -->
      <section class="eventos">
        <h2>{{ textos[idioma].eventos }}</h2>

        <div class="grid grid-3">
          <div class="card" v-for="(evento, index) in eventos" :key="index">
            <img :src="evento.img" />

            <div class="card-content">
              <h3>{{ evento.titulo[idioma] }}</h3>
              <p>{{ evento.desc[idioma] }}</p>
            </div>
          </div>
        </div>
      </section>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const idioma = ref('pt')

const textos = {
  pt: {
    titulo: 'Museu Digital',
    eventos: 'Eventos em Destaque'
  },
  en: {
    titulo: 'Digital Museum',
    eventos: 'Featured Events'
  }
}

const imagens = [
  'https://picsum.photos/1200/500?1',
  'https://picsum.photos/1200/500?2',
  'https://picsum.photos/1200/500?3'
]

const currentSlide = ref(0)
let interval

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % imagens.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const eventos = [
  {
    img: 'https://picsum.photos/300/200?4',
    titulo: { pt: 'Exposição de Arte Moderna', en: 'Modern Art Exhibition' },
    desc: { pt: 'Explore obras contemporâneas incríveis.', en: 'Explore amazing contemporary artworks.' }
  },
  {
    img: 'https://picsum.photos/300/200?5',
    titulo: { pt: 'História Amazônica', en: 'Amazon History' },
    desc: { pt: 'Conheça a cultura e história da região.', en: 'Discover the culture and history of the region.' }
  },
  {
    img: 'https://picsum.photos/300/200?6',
    titulo: { pt: 'Tecnologia e Futuro', en: 'Technology & Future' },
    desc: { pt: 'Veja inovações que estão mudando o mundo.', en: 'See innovations shaping the future.' }
  }
]
</script>

<style scoped>

/* 🔥 CORREÇÃO PRINCIPAL */
.home {
  min-height: calc(100vh - 80px); /* desconta header */
  padding-top: 80px;
  display: flex;
  flex-direction: column;
   background-image: linear-gradient(#ffffff, #bbf7fa);
}

/* 🔥 FAZ O CONTEÚDO OCUPAR A TELA */
.container {
  flex: 1;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* IDIOMA */
.lang {
  display: flex;
  gap: 8px;
}

.lang button {
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background: #eee;
  border-radius: 6px;
}

.lang .active {
  background: #000;
  color: #fff;
}

/* HERO / CARROSSEL */
.carousel {
  margin: 20px 0;
}

.carousel img {
  width: 100%;
  height: 55vh; /* 🔥 altura equilibrada */
  object-fit: cover;
  border-radius: 12px;
}

/* MOBILE */
@media (max-width: 768px) {
  .carousel img {
    height: 45vh;
  }
}

/* TABLET */
@media (min-width: 768px) {
  .carousel img {
    height: 50vh;
  }
}

/* DESKTOP */
@media (min-width: 1024px) {
  .carousel img {
    height: 60vh;
  }
}

/* EVENTOS */
.eventos {
  margin-top: 30px;
}

.eventos h2 {
  margin-bottom: 20px;
}

/* CARD */
.card img {
  height: 180px;
  object-fit: cover;
}

.card-content h3 {
  margin-bottom: 8px;
  font-size: 18px;
}

.card-content p {
  color: #555;
  font-size: 14px;
}

</style>