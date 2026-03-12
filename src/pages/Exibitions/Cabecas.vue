<script setup>
import { onMounted, ref } from 'vue'


const idioma = ref('pt')

const textos = {
  pt: {
    titulo: "CASAS - CABEÇAS",
    p1: "A estrutura extremamente diversificada da sociedade manauara é um dos traços peculiares e enriquecedores da cidade. Manaus é formada tanto por povos originários da Amazônia quanto por imigrantes de todas as partes do mundo e do Brasil, que se dirigiram para a região em distintos processos migratórios. Um dos mais significativos entre eles ocorreu durante o período da borracha, a partir dos anos 1870, quando chega à cidade um grande número de trabalhadores - sobretudo do Nordeste do país - e investidores estrangeiros, atraídos pela promissora economia gomífera.",
    p2: "Portugueses, ingleses, franceses, alemães, italianos, búlgaros, russos, japoneses, libaneses, judeus sefarditas, brasileiros de todos os cantos e diversos povos indígenas amazônicos contribuíram para formar o grande caldeirão multicultural que Manaus representa hoje. No espaço Casas- Cabeças, o público é convidado a interagir com um aplicativo constituído por ambientes internos de casas de moradores de Manaus. Esses ambientes e seus detalhes revelam alguns dos tantos traços culturais de seus habitantes. ",
    p3: " Em Banho de Origens, depoimentos de oito moradores da cidade, de distintas origens, se misturam nas águas do Rio Negro. Eles refletem sobre suas raízes, suas experiências pessoais com a cidade e sobre o grande rio que os rodeia.",
    videos: "CASAS - CABEÇAS",
    videosDesc: "Experiência audiovisual interativa",
    linha: "ARQUITETURA",
    linhaDesc: "A evolução histórica de Manaus"
  },
  en: {
    titulo: "HOUSES - HEADS",
    p1: "The extremely diverse structure of Manaus society is one of the city's peculiar and enriching traits. Manaus is formed by both peoples originating from the Amazon and by immigrants from all parts of the world and Brazil, who went to the region in different migratory processes. One of the most significant among them occurred during the rubber boom, starting in the 1870s, when a large number of workers arrived in the city - especially from the Northeast of the country - and foreign investors, attracted by the promising rubber economy.",
    p2: "Portuguese, English, French, Germans, Italians, Bulgarians, Russians, Japanese, Lebanese, Sephardic Jews, Brazilians from all corners and various Amazonian indigenous peoples contributed to forming the great multicultural melting pot that Manaus represents today. In the Casas-Cabeças space, the public is invited to interact with an application consisting of interior environments of houses of Manaus residents. These environments and their details reveal some of the many cultural traits of their inhabitants.",
    p3: "In A Bath of Origins, testimonies from eight city residents, of diverse origins, mingle in the waters of the Rio Negro. They reflect on their roots, their personal experiences with the city, and on the great river that surrounds them.",
    videos: "HOUSES - HEADS",
    videosDesc: "Interactive audiovisual experience",
    linha: "ARCHITECTURE",
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

  <router-link to="/galeria" class="card">
    <img src="/src/assets/casas-cabecas.png" alt="">
    <div class="overlay">
      <h3>{{ textos[idioma].videos }}</h3>
      <span>{{ textos[idioma].videosDesc }}</span>
    </div>
  </router-link>

  <router-link to="/arquitetura" class="card">
    <img src="/src/assets/arquitetura.png" alt="">
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
  background: linear-gradient(to bottom, #247d8d, #64f0e9);
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