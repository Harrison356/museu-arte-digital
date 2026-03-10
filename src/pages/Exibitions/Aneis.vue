<script setup>
import { onMounted, ref } from 'vue'


const idioma = ref('pt')

const textos = {
  pt: {
    titulo: "ANÉIS DE CRESCIMENTO",
    p1: "Manaus é uma cidade que cresce cada vez mais. Atualmente, sua malha urbana ocupa um pouco mais de 11.000 km 2 e sua população é estimada em mais de 2 milhões de habitantes, ocupando a sétima posição entre as capitais brasileiras em relação ao índice demográfico nacional. Situada em meio à floresta amazônica, a maior biodiversidade do planeta, a relação entre meio ambiente e crescimento urbano é um fator essencial a ser levado em conta ao se pensar no futuro da região.",
    p2: "Nesta sala, o visitante, por meio de uma instalação interativa projetada em dois troncos de árvores, terá acesso a dados que revelam a relação entre crescimento urbano e desmatamento, desde o momento em que Manaus é alçada à categoria de cidade (em 1848) até os dias atuais. Acionados por toque, os anéis de crescimento de um dos troncos exibem uma sequência em timelapse de mapas, imagens aéreas e satélite, o que permite ao público visualizar, ao mesmo tempo, o crescimento da malha urbana ao longo do tempo e a retração de áreas verdes presentes na cidade. ",
    p3: "Simultaneamente, em um segundo tronco, são apresentadas imagens panorâmicas e planos gerais da cidade, os quais dialogam com as imagens e informações vistas no primeiro tronco.",
    videos: "VÍDEOS",
    videosDesc: "Experiência audiovisual interativa",
    linha: "ANÉIS DE CRESCIMENTO",
    linhaDesc: "A evolução histórica de Manaus"
  },
  en: {
    titulo: "GROWTH RINGS",
    p1: "Manaus is a city that is growing more and more. Currently, its urban area occupies a little over 11,000 km2 and its population is estimated at more than 2 million inhabitants, occupying the seventh position among Brazilian capitals in relation to the national demographic index. Located in the middle of the Amazon rainforest, the greatest biodiversity on the planet, the relationship between the environment and urban growth is an essential factor to be taken into account when thinking about the future of the region.",
    p2: "In this room, the visitor, through an interactive installation projected onto two tree trunks, will have access to data that reveal the relationship between urban growth and deforestation, from the moment Manaus was elevated to the category of city (in 1848) to the present day. Activated by touch, the growth rings of one of the tree trunks display a timelapse sequence of maps, aerial and satellite images, allowing the public to visualize, at the same time, the growth of the urban fabric over time and the shrinking of green areas in the city.",
    p3: "Simultaneously, on a second trunk, panoramic images and general plans of the city are presented, which interact with the images and information seen on the first trunk.",
    videos: "VIDEOS",
    videosDesc: "Interactive audiovisual experience",
    linha: "GROWTH RINGS",
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
  <section class="afluente">

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

  <router-link to="/" class="card">
    <img src="/src/assets/arqueologia.png" alt="">
    <div class="overlay">
      <h3>{{ textos[idioma].videos }}</h3>
      <span>{{ textos[idioma].videosDesc }}</span>
    </div>
  </router-link>


</div>

        </div>

      </div>
    

  </section>
</template>

<style scoped>
.afluente {
  background: linear-gradient(to bottom, #f8a443, #ffddaa);
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