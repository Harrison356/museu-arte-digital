<script setup>
import { onMounted, ref } from 'vue'


const idioma = ref('pt')

const textos = {
  pt: {
    titulo: "ARQUEOLOGIA",
    p1: "Pesquisas arqueológicas recentes na Amazônia têm apontado para novas possibilidades de compreensão da história antiga dos povos indígenas que habitavam a região há pelo menos 11.000 anos. Nos arredores de Manaus, próximo ao encontro das águas, vestígios subterrâneos atestam milênios de ocupação desses locais por grandes populações durante distintos e longos períodos. Práticas sustentáveis milenares, como a domesticação de plantas e o manejo dos recursos naturais, evidenciam a enorme contribuição dos povos originários para a promoção da biodiversidade da floresta amazônica.",
    p2: "sala, no Paço da Liberdade, e na praça diante da entrada deste edifício (Praça D. Pedro II), encontra-se um extenso sítio arqueológico. Durante escavações realizadas em 2003, nele foram encontradas urnas funerárias - como a que se vê sob este piso - datadas entre os séculos VII a XII d.C (cultura Paredão).",
    p3: "Ao interagir com o aplicativo de realidade virtual desenvolvido para este espaço, visitante fará uma imersão em sítios arqueológicos da região de Manaus, guiado pelo arqueólogo Eduardo Góes Neves. Explorando artefatos cerâmicos, objetos líticos, esqueletos humanos, reconstituídos em 3D, irá se deparar com as revelações mais surpreendentes que emergem dos subsolos locais.",
    videos: "VÍDEOS",
    videosDesc: "Experiência audiovisual interativa",
    linha: "ARQUEOLOGIA",
    linhaDesc: "A evolução histórica de Manaus"
  },
  en: {
    titulo: "ARCHEOLOGY",
    p1: " Recent archaeological research in the Amazon has pointed to new possibilities for understanding the ancient history of the indigenous peoples who inhabited the region at least 11,000 years ago. In the surroundings of Manaus, near the meeting of the waters, underground remains attest to millennia of occupation of these places by large populations during distinct and long periods. Millennial sustainable practices, such as the domestication of plants and the management of natural resources, demonstrate the enormous contribution of the original peoples to the promotion of the biodiversity of the Amazon rainforest.",
    p2: " Under this room, in the Paço da Liberdade, and in the square in front of the entrance to this building (Praça D. Pedro II), lies an extensive archaeological site. During excavations carried out in 2003, funerary urns were found there - such as the one seen under this floor - dating from between the 7th and 12th centuries AD (Paredão culture).",
    p3: "By interacting with the virtual reality application developed for this space, the visitor will be immersed in archaeological sites in the Manaus region, guided by archaeologist Eduardo Góes Neves. Exploring ceramic artifacts, lithic objects, and human skeletons, reconstructed in 3D, they will encounter the most surprising revelations that emerge from the local subsoil.",
    videos: "VIDEOS",
    videosDesc: "Interactive audiovisual experience",
    linha: "ARCHEOLOGY",
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
  <section class="arqueologia">

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
.arqueologia {
  background: linear-gradient(to bottom, #d3b0c8, #f8c7f6);
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
/* ================= MOBILE AJUSTADO ================= */
@media (max-width: 900px) {

  .arqueologia {
    padding: 80px 0; /* reduz espaço gigante */
  }

  .titulo {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
  }

  .titulo h1 {
    font-size: 26px;
    letter-spacing: 3px;
  }

  .linha {
    width: 50px;
  }

  /* BOTÃO IDIOMA CORRIGIDO */
  .idioma {
    position: static; /* remove absolute bugado */
    margin-top: 10px;
    justify-content: center;
  }

  /* GRID VIRA COLUNA */
  .conteudo {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  /* TEXTO */
  .texto h2 {
    font-size: 20px;
  }

  .texto p {
    font-size: 15px;
    line-height: 1.6;
  }

  /* IMAGENS */
  .imagens {
    gap: 25px;
  }

  .card img {
    height: 200px; /* menor no mobile */
  }

  .overlay {
    padding: 18px;
  }

  .overlay h3 {
    font-size: 16px;
  }

  .overlay span {
    font-size: 13px;
  }
}

/* ================= MOBILE PEQUENO ================= */
@media (max-width: 480px) {

  .afluente {
    padding: 60px 0;
  }

  .titulo h1 {
    font-size: 22px;
  }

  .texto p {
    font-size: 14px;
  }

  .card img {
    height: 180px;
  }
}
</style>