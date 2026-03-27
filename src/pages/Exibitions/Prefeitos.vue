<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const idioma = ref('pt')

const textos = {
  pt: {
    titulo: "SALA DOS PREFEITOS"
  },
  en: {
    titulo: "MAYORS ROOM"
  }
}

const prefeitos = [
  { id: 'agnello-bittencourt', nome: 'Agnello Bittencourt' },
  { id: 'alexandre-carvalho-leal', nome: 'Alexandre Carvalho Leal' },
  { id: 'alfredo-nascimento', nome: 'Alfredo Nascimento' },
  { id: 'aluysio-marques-brasil', nome: 'Aluysio Marques Brasil' },
  { id: 'amazonino-mendes', nome: 'Amazonino Mendes' },
  { id: 'antonio-botelho-maia', nome: 'Antônio Botelho Maia' },
  { id: 'antovila-vieira', nome: 'Antóvila Vieira' },
  { id: 'arthur-cezar-moreira-araujo', nome: 'Arthur Cézar Moreira de Araújo' },
  { id: 'arthur-virgilio-neto', nome: 'Arthur Virgílio do Carmo Ribeiro Neto' },
  { id: 'brasilio-torreao-franco-sa', nome: 'Brasílio Torrêão Franco Sá' },
  { id: 'carlos-eduardo-braga', nome: 'Carlos Eduardo de Souza Braga' },
  { id: 'coriolano-durand', nome: 'Coriolano Durand (Não Foi Prefeito)' },
  { id: 'dorval-pires-porto', nome: 'Dorval Pires Porto' },
  { id: 'emanuel-almeida-moraes', nome: 'Emanuel de Almeida Moraes' },
  { id: 'francisco-chagas-aguiar', nome: 'Francisco das Chagas Aguiar' },
  { id: 'frank-abrahim-lima', nome: 'Frank Abrahim Lima' },
  { id: 'gentil-augusto-bittencourt', nome: 'Gentil Augusto Bittencourt' },
  { id: 'gilberto-mestrinho', nome: 'Gilberto Mestrinho de Medeiros Raposo' },
  { id: 'henrique-ferreira-azevedo', nome: 'Henrique Ferreira Pena de Azevedo' },
  { id: 'hugo-ribeiro-carneiro', nome: 'Hugo Ribeiro Carneiro' },
  { id: 'joao-mendonca-furtado', nome: 'João de Mendonça Furtado' },

  { id: 'joaquim-augusto-tanajura', nome: 'Joaquim Augusto Tanajura' },
  { id: 'joaquim-jose-sarmento', nome: 'Joaquim José Paes da Silva Sarmento' },
  { id: 'jorge-moraes', nome: 'Jorge de Moraes' },
  { id: 'jorge-teixeira-oliveira', nome: 'Jorge Teixeira de Oliveira' },
  { id: 'jose-costa-tapajos', nome: 'José da Costa Monteiro Tapajós' },
  { id: 'jose-francisco-araujo-lima', nome: 'José Francisco de Araújo Lima (Peça em Bronze)' },
  { id: 'jose-oliveira-fernandes', nome: 'José Oliveira Fernandes' },
  { id: 'josue-claudio-souza', nome: 'Josué Claudio de Souza' },
  { id: 'lauro-batista-bittencourt', nome: 'Lauro Batista Bittencourt (Não Foi Prefeito)' },
  { id: 'luiz-alberto-carijo', nome: 'Luiz Alberto Carijó' },
  { id: 'luis-caetano-cabral', nome: 'Luís Caetano de Oliveira Cabral' },
  { id: 'manoel-henrique-ribeiro', nome: 'Manoel Henrique Ribeiro' },
  { id: 'marciano-armond', nome: 'Marciano Pereira Armond' },
  { id: 'paulo-grana-marinho', nome: 'Paulo de La Cruce da Grana Marinho' },
  { id: 'pedro-severiano-nunes', nome: 'Pedro Severiano Nunes' },
  { id: 'raimundo-chaves-ribeiro', nome: 'Raimundo Chaves Ribeiro' },
  { id: 'serafim-correa', nome: 'Serafim Correa' },
  { id: 'stenio-neves', nome: 'Stênio Neves' },
  { id: 'vivaldo-palma-lima', nome: 'Vivaldo Palma Lima' },
  { id: 'walter-scott-rayol', nome: 'Walter Scott da Silva Rayol' }
]

// divide automaticamente
const metade = computed(() => Math.ceil(prefeitos.length / 2))
const coluna1 = computed(() => prefeitos.slice(0, metade.value))
const coluna2 = computed(() => prefeitos.slice(metade.value))

function irParaPrefeito(id) {
  router.push(`/prefeitos/${id}`) // 🔥 corrigido (singular)
}
</script>

<template>
  <div class="pagina">

    <!-- HEADER -->
    <header class="topo">
      <div class="logo">MUSEU DE MANAUS</div>
    </header>

    <!-- TÍTULO -->
    <div class="header-titulo">
      <div class="linha"></div>

      <h1>{{ textos[idioma].titulo }}</h1>

      <div class="linha"></div>

      <!-- IDIOMA -->
      <div class="idiomas-box">
        <button @click="idioma = 'pt'" :class="{ ativo: idioma === 'pt' }">PT</button>
        <button @click="idioma = 'en'" :class="{ ativo: idioma === 'en' }">EN</button>
      </div>
    </div>

    <!-- LISTA -->
    <div class="lista">

      <div class="coluna">
        <p
          v-for="p in coluna1"
          :key="p.id"
          @click="irParaPrefeito(p.id)"
        >
          {{ p.nome }}
        </p>
      </div>

      <div class="coluna">
        <p
          v-for="p in coluna2"
          :key="p.id"
          @click="irParaPrefeito(p.id)"
        >
          {{ p.nome }}
        </p>
      </div>

    </div>

  </div>
</template>

<style scoped>
.pagina {
  background: #d6c08d;
  min-height: 100vh;
  padding: 20px;
}

.topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 60px 0;
  position: relative;
}

.header-titulo h1 {
  font-size: 42px;
  font-weight: 300;
  letter-spacing: 6px;
  color: white;
  white-space: nowrap;
}

.linha {
  width: 80px;
  height: 2px;
  background: white;
}

.idiomas-box {
  position: absolute;
  right: 0;
  display: flex;
  gap: 8px;
}

.idiomas-box button {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.idiomas-box button:hover {
  background: white;
  color: #d6c08d;
}

.idiomas-box .ativo {
  background: white;
  color: #d6c08d;
}

.lista {
  display: flex;
  justify-content: center;
  gap: 80px;
}

.coluna p {
  margin: 8px 0;
  cursor: pointer;
  transition: 0.2s;
}

.coluna p:hover {
  color: white;
  transform: translateX(5px);
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .header-titulo {
    flex-direction: column;
    gap: 10px;
  }

  .idiomas-box {
    position: static;
    margin-top: 10px;
  }

  .linha {
    width: 50px;
  }

  .header-titulo h1 {
    font-size: 28px;
    text-align: center;
  }

  .lista {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
/* ===== MOBILE ===== */
@media (max-width: 768px) {

  .pagina {
    padding: 15px;
  }

  /* TÍTULO */
  .header-titulo {
    flex-direction: column;
    gap: 10px;
    margin: 30px 0;
  }

  .header-titulo h1 {
    font-size: 26px;
    letter-spacing: 3px;
    text-align: center;
    white-space: normal; /* 🔥 resolve corte */
  }

  .linha {
    width: 50px;
  }

  /* BOTÕES PT EN */
  .idiomas-box {
    position: static; /* 🔥 remove bug de sobreposição */
    margin-top: 10px;
    justify-content: center;
  }

  .idiomas-box button {
    font-size: 11px;
    padding: 4px 8px;
  }

  /* LISTA */
  .lista {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .coluna {
    width: 100%;
    text-align: center;
  }

  .coluna p {
    font-size: 14px;
    padding: 6px 0;
  }

}
</style>