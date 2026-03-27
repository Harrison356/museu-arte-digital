<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

// ID REATIVO (IMPORTANTE)
const id = computed(() => route.params.id)

// ORDEM DOS PREFEITOS
const ordem = [
  'agnello-bittencourt',
  'alexandre-carvalho-leal',
  'alfredo-nascimento',
  'aluysio-marques-brasil',
  'amazonino-mendes',
  'antonio-botelho-maia',
  'antovila-vieira',
  'arthur-cezar-moreira-araujo',
  'arthur-virgilio-neto',
  'brasilio-torreao-franco-sa',
  'carlos-eduardo-braga',
  'coriolano-durand',
  'dorval-pires-porto',
  'emanuel-almeida-moraes',
  'francisco-chagas-aguiar',
  'frank-abrahim-lima',
  'gentil-augusto-bittencourt',
  'gilberto-mestrinho',
  'henrique-ferreira-azevedo',
  'hugo-ribeiro-carneiro',
  'joao-mendonca-furtado',

  'joaquim-augusto-tanajura',
  'joaquim-jose-sarmento',
  'jorge-moraes',
  'jorge-teixeira-oliveira',
  'jose-costa-tapajos',
  'jose-francisco-araujo-lima',
  'jose-oliveira-fernandes',
  'josue-claudio-souza',
  'lauro-batista-bittencourt',
  'luiz-alberto-carijo',
  'luis-caetano-cabral',
  'manoel-henrique-ribeiro',
  'marciano-armond',
  'paulo-grana-marinho',
  'pedro-severiano-nunes',
  'raimundo-chaves-ribeiro',
  'serafim-correa',
  'stenio-neves',
  'vivaldo-palma-lima',
  'walter-scott-rayol'
]

// DADOS
const dados = {
  'agnello-bittencourt': { nome: 'Agnello Bittencourt', descricao: 'Atuou na administração pública de Manaus, contribuindo para o desenvolvimento urbano da cidade.' },
  'alexandre-carvalho-leal': { nome: 'Alexandre Carvalho Leal', descricao: 'Participou da gestão municipal em período histórico relevante da cidade.' },
  'alfredo-nascimento': { nome: 'Alfredo Nascimento', descricao: 'Prefeito de Manaus com forte atuação política e administrativa.' },
  'aluysio-marques-brasil': { nome: 'Aluysio Marques Brasil', descricao: 'Administrador público com contribuição para a organização urbana.' },
  'amazonino-mendes': { nome: 'Amazonino Mendes', descricao: 'Um dos políticos mais conhecidos do Amazonas, exerceu diversos mandatos.' },
  'antonio-botelho-maia': { nome: 'Antonio Botelho Maia', descricao: 'Teve atuação administrativa relevante na história municipal.' },
  'antovila-vieira': { nome: 'Antovila Vieira', descricao: 'Participou da gestão pública municipal em Manaus.' },
  'arthur-cezar-moreira-araujo': { nome: 'Arthur Cezar Moreira de Araujo', descricao: 'Atuou na política local contribuindo para o desenvolvimento urbano.' },
  'arthur-virgilio-neto': { nome: 'Arthur Virgilio do Carmo Ribeiro Neto', descricao: 'Prefeito de Manaus em múltiplos mandatos, com forte presença política nacional.' },
  'brasilio-torreao-franco-sa': { nome: 'Brasilio Torreao Franco Sa', descricao: 'Figura histórica na administração pública de Manaus.' },
  'carlos-eduardo-braga': { nome: 'Carlos Eduardo de Souza Braga', descricao: 'Prefeito e também governador do Amazonas, com ampla carreira política.' },
  'coriolano-durand': { nome: 'Coriolano Durand', descricao: 'Associado à história política local, embora não tenha exercido o cargo oficialmente.' },
  'dorval-pires-porto': { nome: 'Dorval Pires Porto', descricao: 'Administrador que participou da gestão municipal de Manaus.' },
  'emanuel-almeida-moraes': { nome: 'Emanuel de Almeida Moraes', descricao: 'Teve participação na organização administrativa da cidade.' },
  'francisco-chagas-aguiar': { nome: 'Francisco das Chagas Aguiar', descricao: 'Atuou em período importante da administração pública municipal.' },
  'frank-abrahim-lima': { nome: 'Frank Abrahim Lima', descricao: 'Contribuiu para o desenvolvimento político e administrativo local.' },
  'gentil-augusto-bittencourt': { nome: 'Gentil Augusto Bittencourt', descricao: 'Figura relevante na história política de Manaus.' },
  'gilberto-mestrinho': { nome: 'Gilberto Mestrinho de Medeiros Raposo', descricao: 'Importante político amazonense com atuação como prefeito e governador.' },
  'henrique-ferreira-azevedo': { nome: 'Henrique Ferreira Pena de Azevedo', descricao: 'Participou da administração municipal em período histórico.' },
  'hugo-ribeiro-carneiro': { nome: 'Hugo Ribeiro Carneiro', descricao: 'Administrador público com atuação em Manaus.' },
  'joao-mendonca-furtado': { nome: 'Joao de Mendonca Furtado', descricao: 'Figura histórica associada à gestão da cidade.' },

  'joaquim-augusto-tanajura': { nome: 'Joaquim Augusto Tanajura', descricao: 'Atuou como gestor público contribuindo para a administração local.' },
  'joaquim-jose-sarmento': { nome: 'Joaquim Jose Paes da Silva Sarmento', descricao: 'Teve participação na política municipal.' },
  'jorge-moraes': { nome: 'Jorge de Moraes', descricao: 'Administrador com atuação em Manaus.' },
  'jorge-teixeira-oliveira': { nome: 'Jorge Teixeira de Oliveira', descricao: 'Figura política importante no Amazonas.' },
  'jose-costa-tapajos': { nome: 'Jose da Costa Monteiro Tapajos', descricao: 'Atuou na administração pública da cidade.' },
  'jose-francisco-araujo-lima': { nome: 'Jose Francisco de Araujo Lima', descricao: 'Representado também por peça histórica em bronze.' },
  'jose-oliveira-fernandes': { nome: 'Jose Oliveira Fernandes', descricao: 'Participou da gestão municipal de Manaus.' },
  'josue-claudio-souza': { nome: 'Josue Claudio de Souza', descricao: 'Atuou na administração pública local.' },
  'lauro-batista-bittencourt': { nome: 'Lauro Batista Bittencourt', descricao: 'Figura associada à história política, embora não tenha sido prefeito.' },
  'luiz-alberto-carijo': { nome: 'Luiz Alberto Carijo', descricao: 'Administrador com atuação relevante na cidade.' },
  'luis-caetano-cabral': { nome: 'Luis Caetano de Oliveira Cabral', descricao: 'Participou da política municipal.' },
  'manoel-henrique-ribeiro': { nome: 'Manoel Henrique Ribeiro', descricao: 'Figura histórica da administração pública.' },
  'marciano-armond': { nome: 'Marciano Pereira Armond', descricao: 'Atuou na gestão administrativa de Manaus.' },
  'paulo-grana-marinho': { nome: 'Paulo de La Cruce da Grana Marinho', descricao: 'Administrador público com participação local.' },
  'pedro-severiano-nunes': { nome: 'Pedro Severiano Nunes', descricao: 'Contribuiu para a administração municipal.' },
  'raimundo-chaves-ribeiro': { nome: 'Raimundo Chaves Ribeiro', descricao: 'Atuou na política e gestão pública.' },
  'serafim-correa': { nome: 'Serafim Correa', descricao: 'Prefeito de Manaus com atuação reconhecida.' },
  'stenio-neves': { nome: 'Stenio Neves', descricao: 'Administrador público atuante em Manaus.' },
  'vivaldo-palma-lima': { nome: 'Vivaldo Palma Lima', descricao: 'Figura importante na gestão municipal.' },
  'walter-scott-rayol': { nome: 'Walter Scott da Silva Rayol', descricao: 'Atuou na administração pública da cidade.' }
}

// PREFEITO ATUAL (REATIVO)
const prefeito = computed(() => {
  return dados[id.value] || { nome: 'Prefeito não encontrado', descricao: '' }
})

// POSIÇÃO
const indexAtual = computed(() => ordem.indexOf(id.value))

// ANTERIOR / PRÓXIMO SEGURO
const anterior = computed(() => {
  return indexAtual.value > 0 ? ordem[indexAtual.value - 1] : null
})

const proximo = computed(() => {
  return indexAtual.value < ordem.length - 1 ? ordem[indexAtual.value + 1] : null
})

// FUNÇÕES
function irAnterior() {
  if (anterior.value) router.push(`/prefeitos/${anterior.value}`)
}

function irProximo() {
  if (proximo.value) router.push(`/prefeitos/${proximo.value}`)
}
</script>

<template>
  <div class="detalhe">

    <div class="nav">
      <button v-if="anterior" @click="irAnterior">← Anterior</button>
      <button v-if="proximo" @click="irProximo">Próximo →</button>
    </div>

    <h1>{{ prefeito.nome }}</h1>

    <div class="card">
      <p>{{ prefeito.descricao }}</p>
    </div>

  </div>
</template>

<style scoped>
.detalhe {
  background: #d6c08d;
  min-height: 100vh;
  padding: 40px;
  text-align: center;
  margin-top: 50px;
}

.card {
  max-width: 800px;
  margin: auto;
  background: rgba(255,255,255,0.3);
  padding: 20px;
  border-radius: 10px;
}

.nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav button {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.3s;
}

.nav button:hover {
  background: white;
  color: #d6c08d;
}
</style>