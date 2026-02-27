<script setup>
import { ref } from 'vue'

const nome = ref('')
const data = ref('')
const pessoas = ref(1)
const mensagem = ref('')

function enviar() {
  mensagem.value = "Agendamento enviado com sucesso!"
}
</script>

<template>
  <section class="contato">
    <h1>Agende sua Visita</h1>

    <form @submit.prevent="enviar">
      <input v-model="nome" placeholder="Nome" required />
      <input type="date" v-model="data" required />
      <input type="number" v-model="pessoas" min="1" />
      <button type="submit">Agendar</button>
    </form>

    <p v-if="mensagem" class="sucesso">{{ mensagem }}</p>
  </section>
</template>

<style scoped>
.contato {
  padding: 140px 10%;
  text-align: center;
}

form {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, button {
  padding: 12px;
}

button {
  background: #0b3d5c;
  color: white;
  border: none;
}
</style>
