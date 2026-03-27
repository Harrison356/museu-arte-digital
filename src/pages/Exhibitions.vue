<script setup>
import { RouterLink } from 'vue-router'

const exposicoes = [
  {
    titulo: "Afluente dos Tempos",
    imagem: "https://www.amazonasemais.com.br/wp-content/uploads/2019/04/museu-cidade-9.jpg",
    descricao: "História e identidade cultural.",
    rota: "/afluente"
  },
  {
    titulo: "Casas - Cabeças",
    imagem: "https://veja.abril.com.br/wp-content/uploads/2018/10/whatsapp-image-2018-10-23-at-23-40-32-1.jpeg?crop=1&resize=1212,909",
    descricao: "Expressões modernas da Amazônia.",
    rota: "/cabecas"
  },
  {
    titulo: "Banho de Origens",
    imagem: "https://www.amazonasemais.com.br/wp-content/uploads/2019/04/museu-cidade-8.jpg",
    descricao: "Tradições vivas."
  },
  {
    titulo: "Sala dos Prefeitos",
    imagem: "https://www.amazonasemais.com.br/wp-content/uploads/2019/04/museu-cidade-7.jpg",
    descricao: "História política da cidade."
  },
  {
    titulo: "Anéis de Crescimento",
    imagem: "https://www.amazonasemais.com.br/wp-content/uploads/2019/04/museu-da-cidade-5.jpg",
    descricao: "Evolução urbana de Manaus.",
    rota: "/aneis"
  },
  {
    titulo: "Mercado",
    imagem: "https://casadedoda.com/wp-content/uploads/2019/09/museu-da-cidade-manaus-4-1024x577.jpg",
    descricao: "Cultura e comércio tradicional."
  },
  {
    titulo: "Rios Voadores",
    imagem: "https://casadedoda.com/wp-content/uploads/2019/09/museu-da-cidade-manaus-10-1024x577.jpg",
    descricao: "Fenômenos naturais da Amazônia.",
    rota: "/rios"
  },
  {
    titulo: "Arqueologia",
    imagem: "https://casadedoda.com/wp-content/uploads/2019/09/museu-da-cidade-manaus-11-1024x577.jpg",
    descricao: "Vestígios históricos e descobertas.",
    rota: "/arqueologia"
  }
]
</script>

<template>
  <section class="expo">
    <h1>Exposições</h1>

    <div class="grid">
      <div v-for="expo in exposicoes" :key="expo.titulo">
        
        <!-- Se tiver rota → vira link -->
        <RouterLink 
          v-if="expo.rota" 
          :to="expo.rota" 
          class="card"
        >
          <img :src="expo.imagem" />
          <div class="info">
            <h3>{{ expo.titulo }}</h3>
            <p>{{ expo.descricao }}</p>
          </div>
        </RouterLink>

        <!-- Se não tiver rota → card normal -->
        <div v-else class="card">
          <img :src="expo.imagem" />
          <div class="info">
            <h3>{{ expo.titulo }}</h3>
            <p>{{ expo.descricao }}</p>
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