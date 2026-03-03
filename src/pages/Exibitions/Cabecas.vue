<script setup>
import { onMounted, ref } from 'vue'


const idioma = ref('pt')

const textos = {
  pt: {
    titulo: "CASAS - CABEÇAS",
    subtitulo: "A história que flui como um rio",
    p1: "A história da cidade de Manaus está diretamente relacionada à singularidade de sua localização geográfica que, desde tempos pré-coloniais, lhe confere uma condição privilegiada no processo de ocupação da região.",
    p2: "Ela é a única cidade no mundo circunscrita em meio à maior biodiversidade do planeta e na confluência de dois gigantescos rios – o Negro e o Solimões.",
    p3: "A proposta deste espaço é proporcionar uma experiência sensorial e cognitiva do fluxo temporal, revelando a história da cidade desde os primeiros indícios de ocupação humana até os dias atuais.",
    videos: "VÍDEOS",
    videosDesc: "Experiência audiovisual interativa",
    linha: "LINHA DO TEMPO",
    linhaDesc: "A evolução histórica de Manaus"
  },
  en: {
    titulo: "TRIBUTARY RIVERS",
    subtitulo: "History that flows like a river",
    p1: "The history of the city of Manaus is directly related to the uniqueness of its geographical location which, since pre-colonial times, has given it a privileged condition in the occupation process of the region.",
    p2: "It is the only city in the world surrounded by the greatest biodiversity on the planet and located at the confluence of two gigantic rivers – Negro and Solimões.",
    p3: "The purpose of this space is to provide a sensory and cognitive experience of temporal flow, revealing the history of the city from the first signs of human occupation to the present day.",
    videos: "VIDEOS",
    videosDesc: "Interactive audiovisual experience",
    linha: "TIMELINE",
    linhaDesc: "The historical evolution of Manaus"
  }
}

onMounted(() => {
  const elements = document.querySelectorAll('.fade-in')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    { threshold: 0.2 }
  )

  elements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <section class="cabecas">

    <div class="container">

      <!-- TÍTULO -->
      <div class="titulo fade-in">
        <div class="linha"></div>

        <h1>{{ textos[idioma].titulo }}</h1>

        <div class="linha"></div>

        <!-- BOTÃO IDIOMA -->
        <div class="idioma">
          <button @click="idioma='pt'">PT</button>
          <button @click="idioma='en'">EN</button>
        </div>
      </div>

      <!-- CONTEÚDO -->
      <div class="conteudo">

        <!-- TEXTO -->
        <div class="texto fade-in">
          <h2>{{ textos[idioma].subtitulo }}</h2>

          <p>{{ textos[idioma].p1 }}</p>
          <p>{{ textos[idioma].p2 }}</p>
          <p>{{ textos[idioma].p3 }}</p>
        </div>

        <!-- IMAGENS -->
        <div class="imagens fade-in">

  <router-link to="/banho-de-origens" class="card">
    <img src="/src/assets/mapa-antigo.png" alt="">
    <div class="overlay">
      <h3>{{ textos[idioma].videos }}</h3>
      <span>{{ textos[idioma].videosDesc }}</span>
    </div>
  </router-link>

  <router-link to="/casas-cabecas" class="card">
    <img src="/src/assets/linha-tempo.png" alt="">
    <div class="overlay">
      <h3>{{ textos[idioma].linha }}</h3>
      <span>{{ textos[idioma].linhaDesc }}</span>
    </div>
  </router-link>
  

</div>

        </div>

      </div>
    

  </section>
</template>

<style scoped>
.cabecas {
  background: linear-gradient(to bottom, #39b2c7, #64f0e9);
  padding: 120px 0;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

/* TÍTULO */
.titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.titulo.show {
  opacity: 1;
  transform: translateY(0);
}

.titulo h1 {
  font-size: 42px;
  font-weight: 300;
  letter-spacing: 6px;
  color: white;
}

.linha {
  height: 2px;
  width: 80px;
  background: white;
}

/* CONTEÚDO */
.conteudo {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: start;
}

/* TEXTO */
.texto {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.texto.show {
  opacity: 1;
  transform: translateY(0);
}

.texto h2 {
  margin-bottom: 25px;
  font-size: 24px;
  color: #000000;
}

.texto p {
  margin-bottom: 20px;
  line-height: 1.7;
  font-size: 17px;
  color: #000000;
}

/* IMAGENS */
.imagens {
  display: flex;
  flex-direction: column;
  gap: 40px;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.imagens.show {
  opacity: 1;
  transform: translateY(0);
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: 0.6s ease;
}

.card:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 25px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: white;
}

.overlay h3 {
  margin-bottom: 5px;
  font-size: 18px;
  letter-spacing: 2px;
}

.overlay span {
  font-size: 14px;
  opacity: 0.85;
}
.idioma{
  position:absolute; 
  right:0; 
  display:flex; 
  gap:10px;
  
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
/* RESPONSIVO */
@media (max-width: 900px) {
  .conteudo {
    grid-template-columns: 1fr;
  }
}
</style>