<script setup>
import { RouterLink } from 'vue-router'
import { idioma } from '../composables/useIdioma'

const textos = {
  pt: { titulo: 'Exposições' },
  en: { titulo: 'Exhibitions' }
}

const exposicoes = [
  {
    titulo: { pt: "Afluente dos Tempos", en: "Tributary of Times" },
    imagem: "https://www.amazonasemais.com.br/wp-content/uploads/2019/04/museu-cidade-9.jpg",
    descricao: { pt: "História e identidade cultural.", en: "History and cultural identity." },
    rota: "/afluente"
  },
  {
    titulo: { pt: "Casas - Cabeças", en: "Houses - Heads" },
    imagem: "https://veja.abril.com.br/wp-content/uploads/2018/10/whatsapp-image-2018-10-23-at-23-40-32-1.jpeg?crop=1&resize=1212,909",
    descricao: { pt: "Expressões modernas da Amazônia.", en: "Modern expressions of the Amazon." },
    rota: "/cabecas"
  },
  {
    titulo: { pt: "Banho de Origens", en: "Bath of Origins" },
    imagem: "https://www.amazonasemais.com.br/wp-content/uploads/2019/04/museu-cidade-8.jpg",
    descricao: { pt: "Tradições vivas.", en: "Living traditions." },
    rota: "/banho"
  },
  {
    titulo: { pt: "Sala dos Prefeitos", en: "Mayors' Room" },
    imagem: "https://www.amazonasemais.com.br/wp-content/uploads/2019/04/museu-cidade-7.jpg",
    descricao: { pt: "História política da cidade.", en: "Political history of the city." },
    rota: "/Prefeitos"
  },
  {
    titulo: { pt: "Anéis de Crescimento", en: "Growth Rings" },
    imagem: "https://www.amazonasemais.com.br/wp-content/uploads/2019/04/museu-da-cidade-5.jpg",
    descricao: { pt: "Evolução urbana de Manaus.", en: "Urban evolution of Manaus." },
    rota: "/aneis"
  },
  {
    titulo: { pt: "Mercado", en: "Market" },
    imagem: "https://casadedoda.com/wp-content/uploads/2019/09/museu-da-cidade-manaus-4-1024x577.jpg",
    descricao: { pt: "Cultura e comércio tradicional.", en: "Traditional culture and trade." }
  },
  {
    titulo: { pt: "Rios Voadores", en: "Flying Rivers" },
    imagem: "https://casadedoda.com/wp-content/uploads/2019/09/museu-da-cidade-manaus-10-1024x577.jpg",
    descricao: { pt: "Fenômenos naturais da Amazônia.", en: "Natural phenomena of the Amazon." },
    rota: "/rios"
  },
  {
    titulo: { pt: "Arqueologia", en: "Archaeology" },
    imagem: "https://casadedoda.com/wp-content/uploads/2019/09/museu-da-cidade-manaus-11-1024x577.jpg",
    descricao: { pt: "Vestígios históricos e descobertas.", en: "Historical remains and discoveries." },
    rota: "/arqueologia"
  }
]
</script>

<template>
  <section class="expo">
    <h1>{{ textos[idioma].titulo }}</h1>

    <div class="grid">
      <div v-for="expo in exposicoes" :key="expo.titulo.pt">

        <!-- Se tiver rota → vira link -->
        <RouterLink
          v-if="expo.rota"
          :to="expo.rota"
          class="card"
        >
          <img :src="expo.imagem" />
          <div class="info">
            <h3>{{ expo.titulo[idioma] }}</h3>
            <p>{{ expo.descricao[idioma] }}</p>
          </div>
        </RouterLink>

        <!-- Se não tiver rota → card normal -->
        <div v-else class="card">
          <img :src="expo.imagem" />
          <div class="info">
            <h3>{{ expo.titulo[idioma] }}</h3>
            <p>{{ expo.descricao[idioma] }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.expo {
  padding: 140px 10%;
  background-image: linear-gradient(#ffffff, #bbf7fa);
}

h1 {
  text-align: center;
  margin-bottom: 60px;
  font-size: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  gap: 40px;
}

.card {
  display: block;
  background: white;
  overflow: hidden;
  transition: 0.4s ease;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.info {
  padding: 25px;
}
</style>