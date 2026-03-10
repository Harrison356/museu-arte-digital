<script setup>
import { onMounted, ref } from 'vue'


const idioma = ref('pt')

const textos = {
  pt: {
    titulo: "RIOS VOADORES",
    p1: "A Amazônia desempenha um papel crucial no funcionamento do clima da Terra. É uma das principais fontes de liberação de vapor d'água e de calor para a atmosfera global, por meio de uma complexa combinação de processos físico- químicos e biológicos que determinam o movimento e a composição da atmosfera acima de sua imensa extensão territorial. Do mesmo modo, essa interação ecossistêmica interfere significativamente no regime de chuvas do continente sul-americano, no ciclo do carbono global e na concentração de gases de efeito estufa. Nesta sala, são abordados os ciclos da água e do carbono na região amazônica, e suas implicações em escala continental e planetária.",
    p2: "Em uma bancada em que se encontram três utensílios de vidro conectados entre si, o visitante poderá observar a simulação do processo de evaporação da água, formação de nuvens e produção de chuvas sobre maquetes que representam a floresta, plantações e cidades. ",
    p3: "A tela ao fundo da bancada exibe animações sobre o complexo sistema de formação da precipitação e circulação dos chamados rios voadores amazônicos, o papel da vegetação na formação das nuvens e na fixação de carbono e, por fim, o impacto da poluição atmosférica de Manaus no clima regional.",
    videos: "VÍDEOS",
    videosDesc: "Experiência audiovisual interativa",
    linha: "RIOS VOADORES",
    linhaDesc: "A evolução histórica de Manaus"
  },
  en: {
    titulo: "FLYING RIVERS",
    p1: "The Amazon plays a crucial role in the functioning of Earth's climate. It is one of the main sources of water vapor and heat release into the global atmosphere, through a complex combination of physical, chemical, and biological processes that determine the movement and composition of the atmosphere  above its immense territorial extension. Similarly, this ecosystem interaction significantly interferes  with the rainfall regime of the South American continent, the global carbon cycle, and the concentration of greenhouse gases.  In this room, the water and carbon cycles in the Amazon region are discussed, along with their implications on a continental and planetary scale.",
    p2: "On a counter with three interconnected glass utensils,  the visitor can observe a simulation of the water evaporation process, cloud formation, and rainfall production on models representing the forest, plantations, and cities.",
    p3: "The screen at the back of the counter displays animations about the complex system of precipitation formation and circulation of the so-called Amazonian flying rivers, the role of vegetation in cloud formation and carbon sequestration, and finally, the impact of air pollution from Manaus on the regional climate.",
    videos: "VIDEOS",
    videosDesc: "Interactive audiovisual experience",
    linha: "FLYING RIVERS",
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
  background: linear-gradient(to bottom, #8ad88d, #c7f8c7);
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