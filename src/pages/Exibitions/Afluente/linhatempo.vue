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
    video: false,
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
    video: false,
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
  },
  {
    id: 21,
    video: false,
    pt: {
      ano: "1909",
      texto:
        "Um dos frutos do ciclo da borracha foi a criação, em 17 de janeiro de 1909, da Escola Universitária Livre de Manaus. A primeira universidade do país instalou-se provisoriamente no Agrupamento Escolar do Saldanha Marinho. Em 1913, a Escola Universitária Livre de Manaus passou a ser conhecida como Universidade de Manaus."
    },
    en: {
      ano: "1909",
      texto:
        "One of the fruits of the rubber boom was the creation, on January 17, 1909, of the Free University School of Manaus. The country's first university was provisionally installed in the Saldanha Marinho School Group. In 1913, the Free University School of Manaus became known as the University of Manaus."
    }
  },
  {
    id: 22,
    video: false,
    pt: {
      ano: "1913",
      texto:
        "Em 1913, devido a manobras dos proprietários do capital internacional, a produção das plantações de borracha inglesas na Ásia ultrapassou a das plantações brasileiras e assumiu a liderança no mercado internacional da borracha. As exportações de borracha da Amazônia caíram drasticamente e nunca mais se recuperaram aos níveis anteriores. A economia do Amazonas entrou em um período de forte declínio."
    },
    en: {
      ano: "1913",
      texto:
        "In 1913, due to maneuvers by the owners of international capital, the production of English rubber plantations in Asia surpassed that of Brazilian rubber plantations and gained leadership in the international rubber market. Amazonian rubber exports fell dramatically and never recovered to previous levels. The economy of Amazonas entered a period of sharp decline."
    }
  },
  {
    id: 23,
    video: false,
    pt: {
      ano: "1920-1930",
      texto:
        "Em 23 de julho de 1924, jovens oficiais do Exército depuseram o governo corrupto e nepotista de César do Rêgo Monteiro e proclamaram o tenente Alfredo Augusto Ribeiro Júnior como governador do Amazonas. Durante seu breve governo de 36 dias, ele confiscou bens e objetos de valor de origem duvidosa e, com eles, criou o imposto de resgate, pagando os salários de servidores públicos que estavam com mais de um ano de atraso."
    },
    en: {
      ano: "1920-1930",
      texto:
        "On July 23, 1924, young Army officers ousted the corrupt and nepotistic government of César do Rêgo Monteiro and proclaimed Lieutenant Alfredo Augusto Ribeiro Junior as governor of Amazonas. During his brief 36-day government, he confiscated assets and valuables of unproven origin and, with them, created the redemption tax, paying the salaries of public employees that were more than a year in arrears."
    }
  },
  {
    id: 24,
    video: true,
    pt: {
      ano: "1920-1930",
      texto:
        "Na esteira do modernismo brasileiro e das aspirações por uma identidade nacional, o filme (No Paiz das Amazona), de Silvino Santos — o primeiro registro cinematográfico da Amazônia — conquistou o público nacional e internacional após sua estreia em 1922 no Rio de Janeiro. Cópias do filme, com legendas em inglês e francês, foram produzidas para promover o Brasil no exterior."
    },
    en: {
      ano: "1920-1930",
      texto:
        "In the wake of Brazilian modernism and aspirations for national identity, the film (No Paiz das Amazonas) (In the Land of the Amazons), by Silvino Santos - the first cinematic record of the Amazon - won over national and international audiences after its premiere in 1922 in Rio de Janeiro. Copies of the film, with English and French subtitles, were produced to promote Brazil abroad."
    }
  },
  {
    id: 25,
    video: false,
    pt: {
      ano: "1930-1940",
      texto:
        "O movimento latifundiário (década de 1920), fundado pelo professor Álvaro Maia, exerceu forte influência na década seguinte sobre os alunos e professores do Ginásio Amazonense. Em 12 de agosto de 1930, a polícia do governador Dorval Porto invadiu o ginásio e prendeu os estudantes que protestavam contra o abuso de poder ocorrido no dia anterior durante a manifestação em homenagem a João Pessoa. O episódio ficou conhecido como a Revolução do Ginásio."
    },
    en: {
      ano: "1930-1940",
      texto:
        "The landowning movement (1920s), founded by Professor Álvaro Maia, exerted a strong influence in the following decade on students and teachers at the Gymnasio Amazonense. On August 12, 1930, the police of Governor Dorval Porto invaded the gymnasium and arrested the students who were protesting against the abuse of power that had occurred the previous day during the rally in honor of João Pessoa. The episode became known as the Gymnasium Revolution."
    }
  },
  {
    id: 26,
    video: false,
    pt: {
      ano: "1942-1945",
      texto:
        "Durante a Segunda Guerra Mundial, o acesso à borracha asiática foi bloqueado pelos japoneses. Em 1942, os EUA assinaram um dos Acordos de Washington com o Brasil, comprometendo-se a comprar exclusivamente o excedente da produção brasileira de borracha. A economia do Norte do país se reaqueceu brevemente e, com o fim da guerra e do capital americano, sofreu sérias perdas. Muitos soldados da borracha retornaram ao Nordeste."
    },
    en: {
      ano: "1942-1945",
      texto:
        "During World War II, access to Asian rubber was blocked by the Japanese. In 1942, the US signed one of the Washington agreements with Brazil, in which they committed to buying the surplus Brazilian rubber production exclusively. The economy of the North of the country briefly reheated and, with the end of the war and American capital, suffered serious losses. Many rubber soldiers returned to the Northeast."
    }
  },
  {
    id: 27,
    video: true,
    pt: {
      ano: "1950-1960",
      texto:
        "Empreendedores locais garantem a sobrevivência e a revitalização da economia amazônica investindo em setores industriais promissores. Em 1952, a Companhia de Petróleo da Amazônia (Copam) foi fundada pelo empresário Isaac Sabbá. A Refinaria de Petróleo da COPAM, localizada em Manaus, iniciou suas operações em 1956 e foi inaugurada em 1957."
    },
    en: {
      ano: "1950-1960",
      texto:
        "Local entrepreneurs ensure the survival and revive of the Amazonas economy by investing in promising industrial sectors. In 1952, the Companhia de Petróleo da Amazônia (Copam) was established by businessman Isaac Sabbá. The COPAM Oil Refinery, located in Manaus, began operating in 1956 and was inaugurated in 1957."
    }
  },
  {
    id: 28,
    video: true,
    pt: {
      ano: "1950-1960",
      texto:
        "Durante o mesmo período, cresceram os investimentos na produção de juta e nas indústrias de fiação e tecelagem. A empresa brasileira de fiação e tecelagem de juta, BrasilJuta, foi criada por Adalberto Vale, com sede em Manaus. A juta já estava aclimatada à região amazônica desde a década de 1930, trazida pelos primeiros imigrantes japoneses que se estabeleceram na região."
    },
    en: {
      ano: "1950-1960",
      texto:
        "During the same period, investments in jute production and spinning and weaving industries grew. The Brazilian Jute Spinning and Weaving Company, BrasilJuta, was created by Adalberto Vale, with its headquarters in Manaus. Jute had been acclimatized to the Amazon region since the 1930s by the first Japanese immigrants to settle in the region."
    }
  },
  {
    id: 29,
    video: true,
    pt: {
      ano: "1950-1960",
      texto:
        "Em 1952, Getúlio Vargas criou por decreto o Instituto Nacional de Pesquisas da Amazônia (INPA), com o objetivo de promover estudos sobre a geologia, a fauna, a antropologia e outros recursos naturais e condições de vida da região amazônica. O INPA foi fundado em Manaus em 1954 pelo cientista Olympio da Fonseca, seu primeiro diretor."
    },
    en: {
      ano: "1950-1960",
      texto:
        "In 1952, Getúlio Vargas created by decree the National Institute for Amazonian Research, INPA, with the objective of promoting studies of the geology, fauna, anthropology, and other natural resources and living conditions of the Amazon region. INPA was established in Manaus in 1954 by the scientist Olympio da Fonseca, its first director."
    }
  },
  {
    id: 30,
    video: true,
    pt: {
      ano: "1950-1960",
      texto:
        "O Clube da Meia-Noite, movimento artístico-literário formado por poetas, escritores, intelectuais e artistas de Manaus — como Jorge Tufic, Anísio Mello, Luiz Bacellar, Elson Farias e o pintor Moacir de Andrade — foi oficialmente fundado em 1954, e seu manifesto foi publicado na Revista Madrugada I em 1955. O Clube teve um impacto significativo no cenário cultural de Manaus nas décadas seguintes."
    },
    en: {
      ano: "1950-1960",
      texto:
        "The Midnight Club, an artistic-literary movement formed by poets, writers, intellectuals, and artists from Manaus—such as Jorge Tufic, Anísio Mello, Luiz Bacellar, Elson Farias, and the painter Moacir de Andrade—was officially founded in 1954, and its manifesto was published in Revista Madrugada I in 1955. The Club had a significant impact on the cultural scene of Manaus in the following decades."
    }
  },
  {
    id: 31,
    video: true,
    pt: {
      ano: "1960-1970",
      texto:
        "Em 1962, foi criada a Universidade Federal do Amazonas (UFAM). Sua fundação ocorreu em 17 de janeiro de 1965, em homenagem à data de criação, em 1909, da Universidade Livre de Manaus. A Faculdade de Direito, a Faculdade de Filosofia, Ciências e Letras e a Faculdade de Ciências Econômicas do Amazonas foram incorporadas, e foram criadas as Faculdades de Engenharia, Farmácia e Odontologia, e Medicina."
    },
    en: {
      ano: "1960-1970",
      texto:
        "In 1962, the Federal University of Amazonas (UFAM) was created. It was established on January 17, 1965, in honor of the date of the creation, in 1909, of the Free University of Manaus. The Faculty of Law, the Faculty of Philosophy, Sciences and Letters, and the Faculty of Economic Sciences of Amazonas were absorbed, and the Faculties of Engineering, Pharmacy and Dentistry, and Medicine were introduced."
    }
  },
  {
    id: 32,
    video: true,
    pt: {
      ano: "1960-1970",
      texto:
        "Em 1967, o governo federal reestruturou a Zona Franca de Manaus, criada dez anos antes, e instituiu um modelo de incentivos fiscais com o objetivo de estabelecer um polo industrial, comercial e agropecuário na Amazônia. Na década de 1970, com o fomento da indústria nacional de componentes e suprimentos, a indústria de montagem cresceu em Manaus e teve início a construção do Distrito Industrial."
    },
    en: {
      ano: "1960-1970",
      texto:
        "In 1967, the federal government restructured the Manaus Free Trade Zone, created ten years earlier, and instituted a model of tax incentives aimed at establishing an industrial, commercial, and agricultural hub in the Amazon. In the 1970s, with the promotion of the national industry of components and supplies, the assembly industry grew in Manaus and the construction of the Industrial District began."
    }
  },
  {
    id: 33,
    video: true,
    pt: {
      ano: "1960-1970",
      texto:
        "Na década de 1960, ocorreram as primeiras Feiras de Belas Artes e Festivais Culturais de Manaus, bem como eventos de vanguarda ao ar livre, como poesia murais e manifestações de arte urbana, promovidos pelo Clube da Madrugada. Um dos artistas mais proeminentes desse período foi Hahnemann Bacelar (1948-1971), grande expoente das artes visuais no Amazonas."
    },
    en: {
      ano: "1960-1970",
      texto:
        "In the 1960s, the first Fine Arts Fairs and Cultural Festivals of Manaus took place, as well as avant-garde outdoor events, such as wall poetry and street art manifestations, promoted by the Clube da Madrugada. One of the most prominent artists in this period is Hahnemann Bacelar (1948-1971), a great exponent of the visual arts in Amazonas."
    }
  },
  {
    id: 34,
    video: true,
    pt: {
      ano: "1960-1970",
      texto:
        "No campo cinematográfico, o Clube da Madrugada promoveu o 1º Festival de Cinema Amador do Amazonas em 1967, no qual o curta-metragem Carniça, de Normandy Litaiff, foi premiado. As atividades do cineclube na cidade foram impulsionadas, sobretudo, por Cosme Alves Neto, criador do 1º Festival de Cinema do Norte em 1969, marcado pela redescoberta da obra de Silvino Santos."
    },
    en: {
      ano: "1960-1970",
      texto:
        "In the cinematic field, the Clube da Madrugada promoted the 1st Amateur Film Festival of Amazonas in 1967, in which the short film Carniça by Normandy Litaiff was awarded. The film club activities in the city were boosted, above all, by Cosme Alves Neto, creator of the 1st North Film Festival in 1969, marked by the rediscovery of the work of Silvino Santos."
    }
  },
  {
    id: 35,
    video: false,
    pt: {
      ano: "1970-1990",
      texto:
        "Entre a produção literária do Amazonas, entre os anos de 1970 e 1990, destacam-se autores de forte expressão regional, como Márcio Souza, Zemaria Pinto e, particularmente, Milton Hatoum, reconhecido nacional e internacionalmente pela qualidade estética e caráter universal de seus romances. Em 1989, publicou seu primeiro romance, Relato de um certo Oriente."
    },
    en: {
      ano: "1970-1990",
      texto:
        "Among the literary production of Amazonas, between the years 1970 and 1990, stand out authors of strong regional expression, such as Márcio Souza, Zemaria Pinto and, particularly, Milton Hatoum, recognized nationally and internationally for the aesthetic quality and universal character of his novels. In 1989, he published his first novel, Relato de um certo Oriente (Report of a Certain Orient)."
    }
  },
  {
    id: 36,
    video: false,
    pt: {
      ano: "1997",
      texto:
        "Em 1997, a Orquestra Filarmônica do Amazonas foi criada pelo maestro Júlio Medaglia, juntamente com a Companhia de Dança e o Coro do Amazonas. Inicialmente, esses grupos artísticos eram compostos principalmente por artistas do Leste Europeu, e hoje também incluem membros de outras regiões. Desde então, o Festival de Ópera do Amazonas é realizado anualmente."
    },
    en: {
      ano: "1997",
      texto:
        "In 1997, the Amazonas Philharmonic Orchestra was created by conductor Júlio Medaglia, along with the Amazonas Dance Company and Choir. Initially, these artistic bodies were composed mostly of artists from Eastern Europe, and today they also include regional members. Since then, the Amazonas Opera Festival has been held annually."
    }
  },
  {
    id: 37,
    video: false,
    pt: {
      ano: "Século XXI",
      texto:
        "A Suframa continua a desempenhar um papel crucial no desenvolvimento regional, implementando políticas estratégicas que transcendem o modelo de incentivos fiscais e buscam promover o desenvolvimento de recursos humanos, a pesquisa científica e a inovação tecnológica. Em 2002, foi inaugurado o Centro de Biotecnologia da Amazônia (CBA) e, em 2003, o Centro de Ciência, Tecnologia e Inovação do Polo Industrial de Manaus (CT-PIM)."
    },
    en: {
      ano: "Século XXI",
      texto:
        "Suframa continues to play a crucial role in regional development by implementing strategic policies that transcend the model of tax incentives and seek to promote the development of human resources, scientific research, and technological innovation. In 2002, the Amazon Biotechnology Center (CBA) was inaugurated, and in 2003, the Center for Science, Technology and Innovation of the Manaus Industrial Pole (CT-PIM)."
    }
  },
  {
    id: 38,
    video: false,
    pt: {
      ano: "Século XXI",
      texto:
        "Um dos grandes desafios para o desenvolvimento regional é conciliar o crescimento econômico e a preservação ambiental, a fim de aproveitar os recursos da maior biodiversidade do planeta de forma sustentável. Algumas linhas de pesquisa em biotecnologia e agricultura desenvolvidas na Amazônia buscam combinar o conhecimento ancestral dos povos originários com o conhecimento científico."
    },
    en: {
      ano: "Século XXI",
      texto:
        "One of the great challenges for regional development is reconciling economic growth and environmental preservation, in order to take advantage of the resources of the planet's greatest biodiversity in a sustainable way. Some lines of research in biotechnology and agriculture developed in the Amazon seek to combine the ancient knowledge of the original peoples and scientific knowledge."
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
  background-color: #d8b06a;
  border: none;
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
  color: rgb(0, 0, 0);
  opacity: 0.6;
  padding: 7px 7px 7px 7px;
  border-radius: 6px;
}

.lang-switch .active {
  opacity: 1;
  border: 2px 2px 2px 2px solid rgb(0, 0, 0);
  
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