<template>
  <section class="sobre">
    <div class="container">
      <h1>Paço da Liberdade – Museu da Cidade de Manaus</h1>
      <center>
      <img 
        src="https://www.manaus.am.gov.br/wp-content/uploads/2023/01/Museu-da-Cidade-de-Manaus-reabre-com-exposicao-artistica-e-visitas-monitoradas.jpg" 
        alt="Paço da Liberdade – Museu da Cidade de Manaus"
        class="imagem-museu"
      />
      </center>
      <div class="conteudo">
        <h2>Sobre a instituição</h2>

        <p>
          O Museu da Cidade de Manaus - Paço da Liberdade é um Museu Histórico,
          Arqueológico e da Cidade de Manaus.
        </p>

        <p>
          Encontra-se no Centro Histórico dessa Capital, na Praça Dom Pedro II
          e próximo ao belo Rio Negro, um dos afluentes do majestoso Rio Amazonas.
        </p>
      </div>
      <div class="bg-white rounded-2xl shadow-xl p-8">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            📍 Localização
          </h3>
          <hr>
          <br>

          <p class="text-gray-600 mb-6">
            Praça Dom Pedro II, Centro Histórico  
            Manaus - Amazonas
          </p>

          <a
            href="https://www.google.com/maps?q=Paço+da+Liberdade+Manaus"
            target="_blank"
            class="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Ver no Google Maps
          </a>
        </div>

      </div>

      <!-- MAPA EMBUTIDO -->
       
      <div class="mt-16">
        <center>
        <iframe
          class="w-full h-[400px] rounded-2xl shadow-lg"
          src="https://www.google.com/maps?q=Paço+da+Liberdade+Manaus&output=embed"
          allowfullscreen=""
          loading="lazy">
        </iframe>
        </center>
      </div>
    
  </section>
</template>

<script setup>
// Página institucional - sem lógica por enquanto
</script>

<style scoped>
.sobre {
  padding: 40px 20px;
  background-image: linear-gradient(#ffffff, #bbf7fa);
  min-height: 100vh;
}

.container {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

h1 {
  margin-bottom: 25px;
  font-size: 28px;
  color: #2c3e50;
}

.imagem-museu {
  width: 100%;
  max-width: 700px;
  border-radius: 10px;
  margin-bottom: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.conteudo {
  text-align: justify;
  font-size: 18px;
  line-height: 1.6;
  color: #333;
}

h2 {
  margin-bottom: 15px;
  color: #34495e;
}
</style>