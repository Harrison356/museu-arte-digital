
<template>
  <div class="videos">

    <!-- TÍTULO -->
    <div class="titulo">

      <div class="linha"></div>

      <div class="titulo-centro">
        <h1>{{ textos[idioma].titulo }}</h1>
        <h2>{{ textos[idioma].subtitulo }}</h2>
      </div>

      <div class="linha"></div>

      <!-- Idioma -->
      <div class="idioma">
        <button 
          :class="{ ativo: idioma === 'pt' }"
          @click="idioma = 'pt'"
        >
          PT
        </button>

        <button 
          :class="{ ativo: idioma === 'en' }"
          @click="idioma = 'en'"
        >
          EN
        </button>
      </div>

    </div>

    <!-- GRID DE VIDEOS -->
    <div class="grid-videos">
      <div 
        v-for="video in videos" 
        :key="video.id"
        class="card-video"
        @click="abrirVideo(video.id)"
      >
        <img 
          :src="`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`" 
          alt="thumbnail"
        />
        <p>{{ video.titulo[idioma] }}</p>
      </div>
    </div>

    <!-- MODAL -->
    <div v-if="videoAtivo" class="modal" @click.self="fecharVideo">
      <div class="modal-conteudo">
        <iframe
          :src="`https://www.youtube.com/embed/${videoAtivo}?autoplay=1`"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>

        <button class="fechar" @click="fecharVideo">X</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const idioma = ref('pt')
const videoAtivo = ref(null)

const textos = {
  pt: {
    titulo: "VÍDEOS",
    subtitulo: "Acervo audiovisual do museu"
  },
  en: {
    titulo: "VIDEOS",
    subtitulo: "Museum audiovisual collection"
  }
}

const videos = [
  {
    id: "dQw4w9WgXcQ",
    titulo: {
      pt: "História de Manaus",
      en: "History of Manaus"
    }
  },
  {
    id: "3tmd-ClpJxA",
    titulo: {
      pt: "Ciclo da Borracha",
      en: "Rubber Cycle"
    }
  },
  {
    id: "L_jWHffIx5E",
    titulo: {
      pt: "Teatro Amazonas",
      en: "Amazonas Theater"
    }
  }
]

function abrirVideo(id) {
  videoAtivo.value = id
}

function fecharVideo() {
  videoAtivo.value = null
}
</script>

<style scoped>

.videos {
  padding: 80px 10%;
  background-color: #d6b676;
  min-height: 100vh;
}

/* TITULO */
.titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  margin-bottom: 80px;
}

.titulo-centro {
  text-align: center;
}

.titulo h1 {
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 6px;
  color: white;
}

.titulo h2 {
  margin-top: 10px;
  font-size: 18px;
  color: white;
  opacity: 0.9;
}

.linha {
  width: 150px;
  height: 2px;
  background: white;
}

/* Idioma */
.idioma {
  position: absolute;
  right: 0;
  display: flex;
  gap: 10px;
}

.idioma button {
  background: transparent;
  border: 1px solid white;
  padding: 6px 12px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.idioma button:hover {
  background: white;
  color: #5e4a2e;
}

.idioma .ativo {
  background: white;
  color: #5e4a2e;
}

/* GRID */
.grid-videos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

.card-video {
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
}

.card-video img {
  width: 100%;
  border-radius: 8px;
}

.card-video:hover {
  transform: scale(1.05);
}

.card-video p {
  margin-top: 15px;
  font-size: 18px;
  color: white;
}

/* MODAL */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-conteudo {
  position: relative;
  width: 80%;
  max-width: 900px;
}

.modal iframe {
  width: 100%;
  height: 500px;
  border-radius: 8px;
}

.fechar {
  position: absolute;
  top: -40px;
  right: 0;
  background: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

</style>