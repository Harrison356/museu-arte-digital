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

/* 🔥 IMAGENS DO MUSEU DE MANAUS */
const imagens = [
  'https://www.manaus.am.gov.br/wp-content/uploads/2026/03/Museu-da-Cidade.jpeg',

]

const currentSlide = ref(0)
let interval

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % imagens.length
  }, 4000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const eventos = [
  {
    img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1000&auto=format&fit=crop',
    titulo: {
      pt: 'Arquitetura Histórica',
      en: 'Historic Architecture'
    },
    desc: {
      pt: 'Conheça os detalhes históricos dos museus de Manaus.',
      en: 'Discover the historic details of Manaus museums.'
    }
  },
  {
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    titulo: {
      pt: 'Cultura Amazônica',
      en: 'Amazon Culture'
    },
    desc: {
      pt: 'Explore a riqueza cultural da Amazônia.',
      en: 'Explore the cultural richness of the Amazon.'
    }
  },
  {
    img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1000&auto=format&fit=crop',
    titulo: {
      pt: 'Memória e Patrimônio',
      en: 'Memory & Heritage'
    },
    desc: {
      pt: 'Exposições que preservam a memória histórica.',
      en: 'Exhibitions preserving historical memory.'
    }
  }
]
</script>

<style scoped>

/* BASE */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  min-height: calc(100vh - 80px);
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#ffffff, #bbf7fa);
}

.container {
  flex: 1;
  width: 92%;
  max-width: 1400px;
  margin: auto;
}

/* HEADER */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 38px;
  color: #111;
}

/* IDIOMA */

.lang {
  display: flex;
  gap: 8px;
}

.lang button {
  padding: 8px 14px;
  border: none;
  cursor: pointer;
  background: #eee;
  border-radius: 8px;
  transition: 0.3s;
}

.lang button:hover {
  background: #dcdcdc;
}

.lang .active {
  background: #000;
  color: #fff;
}

/* HERO / CARROSSEL */

.carousel {
  margin: 20px 0 40px;
}

.carousel img {
  width: 100%;
  height: 62vh;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* EVENTOS */

.eventos {
  margin-top: 20px;
  padding-bottom: 60px;
}

.eventos h2 {
  margin-bottom: 25px;
  font-size: 30px;
  color: #111;
}

/* GRID */

.grid {
  display: grid;
  gap: 24px;
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* CARD */

.card {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-6px);
}

.card img {
  width: 100%;
  height: 240px; /* 🔥 dimensão ajustada */
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  margin-bottom: 10px;
  font-size: 20px;
  color: #111;
}

.card-content p {
  color: #555;
  font-size: 15px;
  line-height: 1.6;
}

/* MOBILE */

@media (max-width: 768px) {

  .header {
    gap: 16px;
  }

  .header h1 {
    font-size: 28px;
  }

  .carousel img {
    height: 36vh;
  }

  .card img {
    height: 220px;
  }

  .eventos h2 {
    font-size: 24px;
  }
}

/* DESKTOP GRANDE */

@media (min-width: 1400px) {

  .carousel img {
    height: 70vh;
  }

  .card img {
    height: 280px;
  }
}

</style>