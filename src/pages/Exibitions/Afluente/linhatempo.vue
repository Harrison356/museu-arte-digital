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
      ano: "1616",
      texto:
        "Grande expedição portuguesa ao rio Amazonas, com a finalidade de expulsar ingleses e holandeses ali fixados. É construído o Forte do Presépio, origem da cidade de Belém. Em 1621, ao criar o Estado Colonial do Maranhão com duas Capitanias, governado por generais portugueses, a União Ibérica cria bases para implantar o modelo de ocupação de seu latifúndio amazônico sob o regime cruel da escravidão indígena."
    },
    en: {
      ano: "1616",
      texto:
        "A large Portuguese expedition to the Amazon River, with the purpose of expelling the English and Dutch who had settled there. The Forte do Presépio (Fort of the Nativity) was built, the origin of the city of Belém. In 1621, when creating the Colonial State of Maranhão with two Captaincies, governed by Portuguese generals, the Iberian Union created the basis for implementing the occupation model of its Amazonian latifundium under the cruel regime of indigenous slavery."
    }
  },
  {
    id: 6,
    video: false,
    pt: {
      ano: "1669",
      texto:
        "Construção do Forte de São José do Rio Negro, um marco na fundação da futura cidade de Manaus. A região era habitada, principalmente, pelos Tarumãs, assim como pelos Barés, Passés, Banibas, Muras, Manaus, entre outros. Os Manaus, assim como os Muras, resistiram bravamente à invasão portuguesa, como comprovam as batalhas travadas no século seguinte pelo lendário guerreiro Ajuricaba."
    },
    en: {
      ano: "1669",
      texto:
        "Construction of the Fort of São José do Rio Negro, a landmark in the founding of the future city of Manaus. The region was inhabited, mostly, by the Tarumãs, as well as by the Barés, Passés, Banibas, Muras, Manaus, among others. The Manaus, like the Muras, bravely resisted the Portuguese invasion, as evidenced by the battles fought in the following century by the legendary warrior Ajuricaba."
    }
  },
  {
    id: 7,
    video: false,
    pt: {
      ano: "1669",
      texto:
        "Na colina acima do forte, os viajantes estrangeiros que passavam pela região amazônica no século XIX observavam as urnas que emergiam do antigo cemitério indígena e que ainda hoje permanecem sob as atuais praças Dom Pedro II e Nove de Novembro. No local do antigo forte, hoje se ergue o Palacete do Tesouro, na zona portuária da cidade."
    },
    en: {
      ano: "1669",
      texto:
        "On the hill above the fort, foreign travelers, who passed through the Amazon region in the 19th century, observed the urns that emerged from the old indigenous cemetery and that still remain today under the current Dom Pedro II and Nove de Novembro squares. On the site of the old fort, today stands the Palacete do Tesouro (Treasury Palace), in the port area of ​​the city."
    }
  },
  {
    id: 8,
    video: false,
    pt: {
      ano: "1755-1758",
      texto:
        "Criação da Capitania de São José do Rio Negro, berço político do futuro estado do Amazonas, por D. José I, Rei de Portugal, por meio de carta régia expedida em 3 de março de 1755. Em 1758, a Capitania de São José do Rio Negro foi instituída em Barcelos (vila Mariuá) pelo Governador-Geral do Maranhão e Grão-Pará, Francisco Xavier de Mendonça Furtado."
    },
    en: {
      ano: "1755-1758",
      texto:
        "Creation of the Captaincy of São José do Rio Negro, the political cradle of the future state of Amazonas, by D. José I, King of Portugal, by means of a royal charter issued on March 3, 1755. In 1758, the Captaincy of São José do Rio Negro was established in Barcelos (Mariuá village) by the Governor-General of Maranhão and Grão-Pará, Francisco Xavier de Mendonça Furtado."
    }
  },
  {
    id: 9,
    video: false,
    pt: {
      ano: "1791-1798",
      texto:
        "Manuel da Gama Lobo D'Almada, governador da capitania de São José do Rio Negro, escolheu o local chamado Barra, a futura Manaus, como capital da capitania, devido à sua localização estratégica para a navegação e o comércio. Durante seu governo, o povoado, com cerca de 300 habitantes, apresentou alguns sinais de progresso, como a instalação de pequenas fábricas, uma olaria e um estaleiro."
    },
    en: {
      ano: "1791-1798",
      texto:
        "Manuel da Gama Lobo D'Almada, governor of the captaincy of São José do Rio Negro, chose the place called Barra, the future Manaus, as the capital of the captaincy, due to its strategic location for navigation and trade. During his government, the settlement with about 300 inhabitants experienced some signs of progress, such as the installation of small factories, a pottery and a shipyard."
    }
  },
  {
    id: 10,
    video: true,
    pt: {
      ano: "1833",
      texto:
        "A antiga Capitania de São José do Rio Negro, que em 1825 havia se subordinado à Província do Pará, tornou-se, em 1833, um dos distritos daquela Província, sob o nome de Distrito do Alto Amazonas. O Lugar de Barra foi elevado à categoria de Cidade e sede do novo distrito, recebendo o nome de Cidade de Manaus, em homenagem ao povo Manau, que vivia às margens do Rio Negro."
    },
    en: {
      ano: "1833",
      texto:
        "The former Captaincy of São José do Rio Negro which, in 1825, had become subordinate to the Province of Pará, became, in 1833, one of the districts of that Province, under the name of the District of Alto Amazonas. The Place of Barra was elevated to the category of Town and seat of the new district and received the name of Town of Manaus, in homage to the Manau people, who lived along the Rio Negro."
    }
  },
  {
    id: 11,
    video: false,
    pt: {
      ano: "1848",
      texto:
        "O povoado de Manaus foi elevado à categoria de cidade sob o nome de Cidade de Barra do Rio Negro. Somente em 1856, a cidade de Barra do Rio Negro passou a ser chamada de Cidade de Manaus, quando já havia se tornado a capital do Estado do Amazonas, criado em 1850."
    },
    en: {
      ano: "1848",
      texto:
        "The village of Manaus is elevated to the category of City under the name of City of Barra do Rio Negro. Only in 1856, the city of Barra do Rio Negro came to be called City of Manaus, when it had already become the capital of the Province of Amazonas, established in 1850."
    }
  },
  {
    id: 12,
    video: false,
    pt: {
      ano: "1850-1860",
      texto:
        "Em 1850, sob pressão internacional, o governo imperial autorizou a navegação comercial a vapor no rio Amazonas exclusivamente para navios brasileiros e, por meio de acordos bilaterais, para outros países amazônicos. Ao mesmo tempo, para garantir seu domínio sobre a Amazônia Ocidental, Dom Pedro II criou a Província do Amazonas e estabeleceu a cidade de Manaus como sua capital política."
    },
    en: {
      ano: "1850-1860",
      texto:
        "In 1850, under international pressure, the imperial government authorized commercial steam navigation on the Amazon River exclusively to Brazilian ships and, through bilateral agreements, to other Amazonian countries. At the same time, in order to guarantee his dominion over western Amazonia, Dom Pedro II created the Province of Amazonas and established the city of Manaus as its political capital."
    }
  },
  {
    id: 13,
    video: false,
    pt: {
      ano: "1850-1860",
      texto:
        "A navegação a vapor foi, de fato, implementada em 1853. A Companhia de Navegação e Comércio da Amazônia, de propriedade do Barão Mauá, foi a primeira a operar no setor. Com a introdução da navegação comercial a vapor nos rios amazônicos, a economia regional cresceu consideravelmente. Nesse mesmo ano, a borracha passou a figurar nas estatísticas de exportação do estado do Amazonas."
    },
    en: {
      ano: "1850-1860",
      texto:
        "Steam navigation was, in fact, implemented in 1853. The Amazon Navigation and Commerce Company, owned by Baron Mauá, was the first to operate in the sector. With the introduction of commercial steam navigation on the Amazonian rivers, the regional economy grew considerably. In that same year, rubber appeared in the export statistics of the Province of Amazonas."
    }
  },
  {
    id: 14,
    video: true,
    pt: {
      ano: "1870-1880",
      texto:
        "Em 1874, oito anos após a abertura dos portos do rio Amazonas a todas as bandeiras, foi inaugurado o primeiro serviço internacional de navegação a vapor no rio Amazonas, a linha Liverpool-Manaus-Liverpool, pela Liverpool and Amazon Royal Mail Steam Ship Co. Ltd., incorporada na Inglaterra pelo português Alexandre Amorim, que impulsionou grandes investimentos comerciais em Manaus, especialmente no promissor negócio da borracha."
    },
    en: {
      ano: "1870-1880",
      texto:
        "In 1874, eight years after the opening of the ports of the Amazon River to all flags, the first international steam navigation service on the Amazon River was inaugurated, the Liverpool-Manaus-Liverpool line, by the Liverpool and Amazon Royal Mail Steam Ship Co. Ltd., incorporated in England by the Portuguese Alexandre Amorim, which boosted large commercial investments in Manaus, especially in the promising rubber business."
    }
  },
  {
    id: 15,
    video: false,
    pt: {
      ano: "1870-1880",
      texto:
        "Devido à terrível seca no Nordeste brasileiro entre 1877 e 1879, iniciou-se um intenso processo migratório de nordestinos para a Amazônia, em busca de trabalho nos seringueiros. Imigrantes de todas as partes do mundo chegavam a Manaus, atraídos pelas promessas de rápido enriquecimento com o negócio da borracha e outros ramos de atividade no setor de comércio e serviços."
    },
    en: {
      ano: "1870-1880",
      texto:
        "Due to the terrible drought in the Brazilian Northeast between 1877 and 1879, an intense migratory process of Northeasterners to the Amazon began, in search of work in the rubber plantations. Immigrants from all parts of the world arrived in Manaus, attracted by the promises of quick enrichment with the rubber business and other branches of activity in the trade and services sector."
    }
  },
  {
    id: 16,
    video: false,
    pt: {
      ano: "1870-1880",
      texto:
        "A paisagem da cidade começa a mudar com novos edifícios. O Palácio Municipal (atual Paço da Liberdade), o Palácio Provincial e a Igreja Paroquial de Nossa Senhora da Conceição são inaugurados, ainda na década de 1870. O primeiro pavilhão do emblemático Mercado Municipal de Manaus (na época, Mercado Novo) é inaugurado em 1883."
    },
    en: {
      ano: "1870-1880",
      texto:
        "The city's landscape begins to change with new buildings. The Municipal Palace (now the Paço da Liberdade), the Provincial Palace, and the Parish Church of Our Lady of the Conception are inaugurated, still in the 1870s. The first pavilion of the emblematic Municipal Market of Manaus (the then New Market) is inaugurated in 1883."
    }
  },
  {
    id: 17,
    video: true,
    pt: {
      ano: "1890-1912",
      texto:
        "A demanda internacional por borracha, matéria-prima utilizada na fabricação de produtos como pneus, seringas, luvas cirúrgicas, cabos elétricos, etc., cresceu significativamente no final do século XIX. Nesse cenário, Manaus emergiu como o principal centro de comércio de borracha no interior da Amazônia e, em 1900, passou a controlar o tráfego de produtos de exportação do Amazonas."
    },
    en: {
      ano: "1890-1912",
      texto:
        "International demand for rubber, a raw material used in the manufacture of products such as tires, syringes, surgical gloves, electrical cables, etc., grew significantly at the end of the 19th century. In this scenario, Manaus emerged as the main center for rubber trade in the interior Amazon and, in 1900, came to control the trafficking of export products from Amazonas."
    }
  },
  {
    id: 18,
    video: true,
    pt: {
      ano: "1890-1912",
      texto:
        "Manaus vive sua belle époque e passa por grandes transformações urbanas, sociais e culturais. Entre 1892 e 1896, o então governador, Eduardo Ribeiro, realiza um ambicioso projeto de planejamento urbano: constrói pontes de ferro sobre riachos, abre ruas e avenidas, retoma a construção do Teatro Amazonas, inicia a construção do Palácio da Justiça, entre outras obras."
    },
    en: {
      ano: "1890-1912",
      texto:
        "Manaus enjoys its belle époque and undergoes major urban, social, and cultural transformations. Between 1892 and 1896, the then governor, Eduardo Ribeiro, carries out an ambitious urban planning project: he builds iron bridges over streams, opens streets and avenues, resumes the construction of the Amazonas Theater, begins the construction of the Palace of Justice, among other works."
    }
  },
  {
    id: 19,
    video: true,
    pt: {
      ano: "1890-1912",
      texto:
        "Na virada do século e nos primeiros anos do século XX, destaca-se a participação de empresas inglesas em grandes projetos de infraestrutura – como a construção do porto flutuante de Manaus pela empresa Manaos Harbor, iniciada em 1902 – e em serviços como comunicação, eletricidade, transporte público, saneamento básico, entre outros."
    },
    en: {
      ano: "1890-1912",
      texto:
        "At the turn of the century and in the early years of the 20th century, the participation of English companies in major infrastructure projects stands out - such as the construction of the floating port of Manaus by the Manaos Harbor company, begun in 1902 - and in services such as communication, electricity, public transport, basic sanitation, among others."
    }
  },
  {
    id: 20,
    video: true,
    pt: {
      ano: "1890-1912",
      texto:
        "Na década de 1890, Manaus começou a ter uma cena cultural significativa. Temporadas de ópera e a estreia de Hamlet no Eden-Teatro, na Praça Dom Pedro II, espetáculos de ilusionismo e a inauguração do monumental Teatro Amazonas são alguns dos seus destaques. Em 1907, surgiu o primeiro cinema de rua da capital, o Cassino Teatro Julieta (futuro Cine Alcázar e Cine Guarany)."
    },
    en: {
      ano: "1890-1912",
      texto:
        "In the 1890s, Manaus began to have a significant cultural scene. Opera seasons and the premiere of Hamlet at the Eden-Teatro, in Praça Dom Pedro II, illusionist shows and the inauguration of the monumental Teatro Amazonas are some of its highlights. In 1907, the first street cinema in the capital appeared, the Cassino Teatro Julieta (future Cine Alcazar and Cine Guarany)."
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
  margin-top: auto;
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
  align-items: stretch;
}

/* CARD */
.card {
  height: 100%;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(8px);
  padding: 40px;
  border-radius: 12px;
  
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  
}

.card p {
  line-height: 1.4;
  margin-top: 10px;
  text-align: justify;
  
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
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.4s ease;
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

</style>