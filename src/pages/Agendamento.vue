<template>
  <section class="agendamento">
    
    <h1>Agendar Visita</h1>

    <form @submit.prevent="enviarFormulario">

      <input v-model="form.instituicao" type="text" placeholder="Nome da Instituição" required />
      <input v-model="form.cnpj" type="text" placeholder="CNPJ" required />
      <input v-model="form.responsavel" type="text" placeholder="Responsável" required />
      <input v-model="form.telefone" type="tel" placeholder="Telefone" required />
      <input v-model="form.email" type="email" placeholder="Email" required />

      <input v-model="form.alunos" type="number" placeholder="Qtd. de Alunos" required />
      <input v-model="form.professores" type="number" placeholder="Qtd. de Professores" required />

      <input v-model="form.data" type="date" required />

      <select v-model="form.horario" required>
        <option disabled value="">Selecione o horário</option>
        <option value="08:00">08:00</option>
        <option value="10:00">10:00</option>
        <option value="14:00">14:00</option>
      </select>

      <select v-model="form.tipoVisita" required>
        <option disabled value="">Tipo de visita</option>
        <option value="Visita Guiada">Visita Guiada</option>
        <option value="Visita Livre">Visita Livre</option>
        <option value="Oficina Educativa">Oficina Educativa</option>
      </select>

      <textarea v-model="form.observacoes" placeholder="Observações"></textarea>

      <button type="submit" :disabled="loading">
        {{ loading ? "Enviando..." : "Enviar Solicitação" }}
      </button>
    </form>

    <p v-if="mensagem" class="mensagem">
      {{ mensagem }}
    </p>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue"
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore"
import { db } from "../services/firebase"
import emailjs from "@emailjs/browser"

const mensagem = ref("")
const loading = ref(false)

const form = reactive({
  instituicao: "",
  cnpj: "",
  responsavel: "",
  telefone: "",
  email: "",
  alunos: "",
  professores: "",
  data: "",
  horario: "",
  tipoVisita: "",
  observacoes: ""
})

async function verificarDisponibilidade() {
  const q = query(
    collection(db, "agendamentos"),
    where("data", "==", form.data),
    where("horario", "==", form.horario),
    where("status", "in", ["pendente", "confirmado"])
  )

  const snapshot = await getDocs(q)
  return snapshot.empty
}

async function enviarFormulario() {
  mensagem.value = ""
  loading.value = true

  try {
    // 🔥 1️⃣ Verifica se já existe reserva
    const disponivel = await verificarDisponibilidade()

    if (!disponivel) {
      mensagem.value = "Data e horário já estão reservados."
      loading.value = false
      return
    }

    // 🔥 2️⃣ Salva no Firestore
    await addDoc(collection(db, "agendamentos"), {
      ...form,
      status: "pendente",
      createdAt: serverTimestamp()
    })

    // 🔥 3️⃣ Envia email (SUBSTITUA pelas suas chaves)
    await emailjs.send(
      "service_gp0sxwq",
      "template_t2fs9sd",
      {
        instituicao: form.instituicao,
        responsavel: form.responsavel,
        email: form.email,
        data: form.data,
        horario: form.horario,
        alunos: form.alunos
      },
      "oN2rgcDHercgp6D7g"
    )

    mensagem.value = "Solicitação enviada com sucesso!"
    
    // 🔥 4️⃣ Limpa formulário
    Object.keys(form).forEach(key => form[key] = "")

  } catch (error) {
    console.error("Erro:", error)
    mensagem.value = "Erro ao enviar solicitação."
  }

  loading.value = false
}
</script>

<style scoped>
.agendamento {
  max-width: 600px;
  margin: auto;
  padding: 2rem;

}

h1 {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 2px solid #333;
  border: #1e3a5f;
}

input, select, textarea {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

textarea {
  resize: none;
  min-height: 80px;
}

button {
  padding: 12px;
  background-color: #1e3a5f;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.mensagem {
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
}
</style>