<template>
  <section class="sobre">
    <div class="container">
      <h1>{{ textos[idioma].titulo }}</h1>
      <center>
      <img
        src="https://www.manaus.am.gov.br/wp-content/uploads/2023/01/Museu-da-Cidade-de-Manaus-reabre-com-exposicao-artistica-e-visitas-monitoradas.jpg"
        :alt="textos[idioma].titulo"
        class="imagem-museu"
      />
      </center>
      <div class="conteudo">
        <h2>{{ textos[idioma].subtitulo }}</h2>

        <p>{{ textos[idioma].p1 }}</p>

        <p>{{ textos[idioma].p2 }}</p>
      </div>
      <div class="localizacao-card">
          <h3 class="titulo-localizacao">
            📍 {{ textos[idioma].localizacao }}
          </h3>
          <hr>

          <p class="endereco-texto">
            {{ textos[idioma].endereco }}
          </p>

          <a
            href="https://www.google.com/maps?q=Paço+da+Liberdade+Manaus"
            target="_blank"
            class="btn-mapa"
          >
            {{ textos[idioma].verMapa }}
          </a>
        </div>

      </div>

      <!-- MAPA EMBUTIDO -->
      <div class="mapa-wrapper">
        <iframe
          class="mapa-iframe"
          src="https://www.google.com/maps?q=Paço+da+Liberdade+Manaus&output=embed"
          allowfullscreen=""
          loading="lazy">
        </iframe>
      </div>

  </section>
</template>

<script setup>
import { idioma } from '../composables/useIdioma'

const textos = {
  pt: {
    titulo: 'Paço da Liberdade – Museu da Cidade de Manaus',
    subtitulo: 'Sobre a instituição',
    p1: 'O Museu da Cidade de Manaus - Paço da Liberdade é um Museu Histórico, Arqueológico e da Cidade de Manaus.',
    p2: 'Encontra-se no Centro Histórico dessa Capital, na Praça Dom Pedro II e próximo ao belo Rio Negro, um dos afluentes do majestoso Rio Amazonas.',
    localizacao: 'Localização',
    endereco: 'Praça Dom Pedro II, Centro Histórico Manaus - Amazonas',
    verMapa: 'Ver no Google Maps'
  },
  en: {
    titulo: 'Paço da Liberdade – Manaus City Museum',
    subtitulo: 'About the institution',
    p1: 'The Manaus City Museum - Paço da Liberdade is a Historical, Archaeological and City Museum of Manaus.',
    p2: 'It is located in the Historic Center of the capital, at Praça Dom Pedro II, near the beautiful Rio Negro, one of the tributaries of the majestic Amazon River.',
    localizacao: 'Location',
    endereco: 'Praça Dom Pedro II, Historic Center Manaus - Amazonas',
    verMapa: 'View on Google Maps'
  }
}
</script>

<style scoped>
.sobre {
  padding: 50px 20px 60px;
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
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 15px;
  color: #34495e;
}

/* CARD DE LOCALIZAÇÃO */
.localizacao-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 32px;
  text-align: left;
}

.titulo-localizacao {
  font-size: 22px;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 16px;
}

.localizacao-card hr {
  border: none;
  border-top: 1px solid #eee;
  margin-bottom: 16px;
}

.endereco-texto {
  color: #555;
  margin-bottom: 24px;
  line-height: 1.6;
}

.btn-mapa {
  display: inline-block;
  background: #537bff;
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.btn-mapa:hover {
  background: #3f63e0;
}

/* MAPA EMBUTIDO */
.mapa-wrapper {
  margin-top: 50px;
}

.mapa-iframe {
  display: block;
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* MOBILE */
@media (max-width: 768px) {
  .sobre {
    padding: 30px 16px 40px;
  }

  h1 {
    font-size: 22px;
  }

  .conteudo {
    font-size: 15px;
  }

  .localizacao-card {
    padding: 20px;
  }

  .titulo-localizacao {
    font-size: 18px;
  }

  .btn-mapa {
    width: 100%;
    text-align: center;
    padding: 14px;
  }

  .mapa-wrapper {
    margin-top: 30px;
  }

  .mapa-iframe {
    height: 260px;
  }
}
</style>