<template>
  <section class="timeline-container">

    <!-- HEADER -->
    <div class="header">
      <h1>{{ textos[idioma].titulo }}</h1>

      <div class="lang-switch">
        <button
          :class="{ active: idioma === 'pt' }"
          @click="idioma = 'pt'"
        >PT</button>

        <button
          :class="{ active: idioma === 'en' }"
          @click="idioma = 'en'"
        >EN</button>
      </div>
    </div>

    <!-- CARROSSEL -->
    <div class="carousel-wrapper">
      <transition-group
        name="slide-fade"
        tag="div"
        class="carousel"
      >
        <div
          v-for="item in visibleCards"
          :key="item.id"
          class="card"
        >
          <h2>{{ item[idioma].ano }}</h2>
          <p>{{ item[idioma].texto }}</p>

          <button v-if="item.video" class="video-circle">
            
            {{ textos[idioma].video }}
          </button>
        </div>
      </transition-group>
    </div>

    <!-- CONTROLES -->
    <div class="controls">
      <button
        @click="prev"
        :disabled="currentIndex === 0"
      >
        ← {{ textos[idioma].voltar }}
      </button>

      <button
        @click="next"
        :disabled="currentIndex + 2 >= timeline.length"
      >
        {{ textos[idioma].proximo }} →
      </button>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from "vue"

const idioma = ref("pt")

const textos = {
  pt: {
    titulo: "AFLUENTES RIOS",
    voltar: "Voltar",
    proximo: "Próximo",
    video: "Veja o vídeo"
  },
  en: {
    titulo: "RIVER TRIBUTARIES",
    voltar: "Back",
    proximo: "Next",
    video: "Watch video"
  }
}

const timeline = ref([
  {
    id: 1,
    video: true,
    pt: {
      ano: "11.200 B.P.",
      texto:
        "A ocupação humana da Amazônia parece remontar há pelo menos 11.200 anos, segundo estudos arqueológicos realizados desde os anos 1990 no Parque Estadual de Monte Alegre, no Pará, onde se encontram diversas pinturas rupestres, entre elas, as da Caverna da Pedra Pintada."
    },
    en: {
      ano: "11,200 B.P.",
      texto:
        "Human occupation of the Amazon appears to date back at least 11,200 years, according to archaeological studies conducted since the 1990s in the Monte Alegre State Park, in Pará, where several rock paintings are found, including those in the Pedra Pintada Cave."
    }
  },
  {
    id: 2,
    video: false,
    pt: {
      ano: "9.460 B.P.",
      texto:
        "No sítio arqueológico Dona Stella, localizado no município de Iranduba, a 22 km de Manaus, foram encontrados vestígios de ocupação humana - como pontas de projétil de pedra lascada - que datam entre 9.460 e 4.500 anos antes do presente. Devido à existência de uma indústria lítica densa e diversificada, esse sítio é um caso único na Amazônia Ocidental."
      
      },
    en: {
      ano: "9,460 B.P.",
      texto:
        "At the Dona Stella archaeological site, located in the municipality of Iranduba, 22 km from Manaus, traces of human occupation were found – such as chipped stone projectile points – dating between 9,460 and 4,500 years before present. Due to the existence of a dense and diverse lithic industry, this site is a unique case in Western Amazonia."
    }
  },
  {
    id: 3,
    video: false,
    pt: {
      ano: "300 B.C. to 1.500 A.C.",
      texto:
        "Escavações arqueológicas recentes parecem atestar os relatos de Frei Gaspar de Carvajal durante a expedição pelo rio Amazonas, entre 1541 e 1542. No sítio Hatahara, em Iranduba, há fortes indícios de ocupação contínua da região por grandes populações indígenas - como terra preta de índio e cerâmicas de distintas fases - entre os anos 300 a.C a 1.500 d.C."
    },
    en: {
      ano: "300 B.C. to 1.500 A.C.",
      texto:
        "Recent archaeological excavations seem to corroborate the accounts of Friar Gaspar de Carvajal during his expedition along the Amazon River between 1541 and 1542. At the Hatahara site in Iranduba, there is strong evidence of continuous occupation of the region by large indigenous populations – such as Amazonian dark earth and ceramics from different periods – between 300 BC and 1500 AD."
    }
  },
  {
    id: 4,
    video: false,
    pt: {
      ano: "1541-1542",
      texto:
        "A emblemática expedição de Francisco de Orellana pelo rio Amazonas foi narrada por Frei Gaspar de Carvajal. A expedição partiu do Equador, alcançou o rio no Peru e percorreu-o até a sua foz. Carvajal descreve a presença de grandes aldeias indígenas ao longo do Amazonas. É a primeira vez, talvez, que o rio Negro é descrito por europeus."
    },
    en: {
      ano: "1541-1542",
      texto:
        "The emblematic expedition of Francisco de Orellana along the Amazon River was narrated by Friar Gaspar de Carvajal. The expedition departed from Ecuador, reached the river in Peru, and traveled along it to its mouth. Carvajal describes the presence of large indigenous villages along the Amazon. It is perhaps the first time that the Rio Negro is described by Europeans."
    }
  }
  ,
  {
    id: 5,
    video: true,
    pt: {
      ano: "300 B.C. to 1.500 A.C.",
      texto:
        "Escavações arqueológicas recentes parecem atestar os relatos de Frei Gaspar de Carvajal durante a expedição pelo rio Amazonas, entre 1541 e 1542. No sítio Hatahara, em Iranduba, há fortes indícios de ocupação contínua da região por grandes populações indígenas - como terra preta de índio e cerâmicas de distintas fases - entre os anos 300 a.C a 1.500 d.C."
    },
    en: {
      ano: "300 B.C. to 1.500 A.C.",
      texto:
        "Recent archaeological excavations seem to corroborate the accounts of Friar Gaspar de Carvajal during his expedition along the Amazon River between 1541 and 1542. At the Hatahara site in Iranduba, there is strong evidence of continuous occupation of the region by large indigenous populations – such as Amazonian dark earth and ceramics from different periods – between 300 BC and 1500 AD."
    }
  },
  {
    id: 6,
    video: false,
    pt: {
      ano: "1541-1543",
      texto:
        "A emblemática expedição de Francisco de Orellana pelo rio Amazonas foi narrada por Frei Gaspar de Carvajal. A expedição partiu do Equador, alcançou o rio no Peru e percorreu-o até a sua foz. Carvajal descreve a presença de grandes aldeias indígenas ao longo do Amazonas. É a primeira vez, talvez, que o rio Negro é descrito por europeus."
    },
    en: {
      ano: "1541-1542",
      texto:
        "The emblematic expedition of Francisco de Orellana along the Amazon River was narrated by Friar Gaspar de Carvajal. The expedition departed from Ecuador, reached the river in Peru, and traveled along it to its mouth. Carvajal describes the presence of large indigenous villages along the Amazon. It is perhaps the first time that the Rio Negro is described by Europeans."
    }
  }
])

const currentIndex = ref(0)

const visibleCards = computed(() =>
  timeline.value.slice(currentIndex.value, currentIndex.value + 2)
)

function next() {
  if (currentIndex.value + 2 < timeline.value.length) {
    currentIndex.value += 2
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 2
  }
}
</script>

<style scoped>

/* ===== FUNDO TEXTURIZADO ===== */
.timeline-container {
  min-height: 100vh;
  padding: 60px 20px;
  background-color: #d8b06a;
  background-image: url('/src/assets/textura-mapa.png'); /* coloque sua textura aqui */
  background-size: cover;
  background-blend-mode: multiply;
}
.timeline-container video{
  background: transparent;
}

/* HEADER */
.header {
  text-align: center;
  position: relative;
  margin-bottom: 60px;
  border-radius: 10px;
}

.header h1 {
  font-size: 48px;
  letter-spacing: 8px;
  color: rgb(0, 0, 0);
  font-weight: 300;
}

/* Idioma */
.lang-switch {
  position: absolute;
  top: 0;
  right: 20px;
}

.lang-switch button {
  background: transparent;
  border: none;
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
  color: rgb(0, 0, 0);
  opacity: 0.6;
}

.lang-switch .active {
  opacity: 1;
  border-bottom: 2px solid rgb(255, 164, 164);
}
.video-circle {
  
  width: 125px;
  height: 30px;
  border-radius: 10%;
  background: rgba(255,255,255,0.8);
  border: none;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.video-circle:hover {
  transform: scale(1.1);
  background: white;
}

/* CARROSSEL */
.carousel-wrapper {
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}

.carousel {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

/* CARD */
.card {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(8px);
  padding: 40px;
  border-radius: 12px;
  
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  
}

.card p {
  line-height: 1.4;
  margin-top: 10px;
  margin-bottom: 100px;
}

/* CONTROLES */
.controls {
  margin-top: 60px;
  text-align: center;
}

.controls button {
  margin: 0 15px;
  padding: 12px 30px;
  background: rgba(255,255,255,0.6);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.controls button:hover {
  background: white;
}

.controls button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* ===== ANIMAÇÃO CARROSSEL ===== */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(80px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}

</style>