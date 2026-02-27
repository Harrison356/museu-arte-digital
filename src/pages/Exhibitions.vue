<script setup>
const exposicoes = [
  {
    titulo: "Memória Amazônica",
    imagem: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
    descricao: "História e identidade cultural."
  },
  {
    titulo: "Arte Contemporânea",
    imagem: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    descricao: "Expressões modernas da Amazônia."
  },
  {
    titulo: "Povos Indígenas",
    imagem: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    descricao: "Tradições vivas."
  }
]
</script>

<template>
  <section class="expo">
    <h1>Exposições</h1>

    <div class="grid">
      <div v-for="expo in exposicoes" :key="expo.titulo" class="card">
        <img :src="expo.imagem" />
        <div class="info">
          <h3>{{ expo.titulo }}</h3>
          <p>{{ expo.descricao }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expo {
  padding: 140px 10%;
  background: #f4f4f4;
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
  background: white;
  overflow: hidden;
  transition: 0.4s ease;
  border-radius: 8px;
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
