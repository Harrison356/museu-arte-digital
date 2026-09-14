<template>
  <section class="agendamento">

    <h1>{{ textos[idioma].titulo }}</h1>

    <form @submit.prevent="enviarFormulario">

      <input
        v-model="form.instituicao"
        type="text"
        :placeholder="textos[idioma].instituicao"
        required
      />

      <input
        v-model="form.cnpj"
        type="text"
        placeholder="CNPJ"
        required
      />

      <input
        v-model="form.responsavel"
        type="text"
        :placeholder="textos[idioma].responsavel"
        required
      />

      <input
        v-model="form.telefone"
        type="tel"
        :placeholder="textos[idioma].telefone"
        required
      />

      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        required
      />

      <input
        v-model="form.alunos"
        type="number"
        :placeholder="textos[idioma].alunos"
        required
      />

      <input
        v-model="form.professores"
        type="number"
        :placeholder="textos[idioma].professores"
        required
      />

      <input
        v-model="form.data"
        type="date"
        required
      />

      <select v-model="form.horario" required>
        <option disabled value="">{{ textos[idioma].selecioneHorario }}</option>
        <option value="08:00">08:00</option>
        <option value="10:00">10:00</option>
        <option value="14:00">14:00</option>
      </select>

      <select v-model="form.tipoVisita" required>
        <option disabled value="">{{ textos[idioma].tipoVisita }}</option>
        <option value="Visita Guiada">{{ textos[idioma].visitaGuiada }}</option>
        <option value="Visita Livre">{{ textos[idioma].visitaLivre }}</option>
        <option value="Oficina Educativa">{{ textos[idioma].oficinaEducativa }}</option>
      </select>

      <textarea
        v-model="form.observacoes"
        :placeholder="textos[idioma].observacoes">
      </textarea>

      <button type="submit" :disabled="loading">
        {{ loading ? textos[idioma].enviando : textos[idioma].enviarSolicitacao }}
      </button>

    </form>

    <p v-if="mensagem" class="mensagem">
      {{ mensagem }}
    </p>

    <!-- 🔥 LISTA DE AGENDAMENTOS -->
    <div class="lista-agendamentos">
      <h2>{{ textos[idioma].datasJaSolicitadas }}</h2>

      <div
        v-if="agendamentos.length === 0"
        class="vazio">
        {{ textos[idioma].nenhumAgendamento }}
      </div>

      <div 
        v-for="item in agendamentos" 
        :key="item.id"
        class="card-agendamento">

        <div>
          <strong>📅 {{ textos[idioma].data }}</strong>
          {{ item.data }}
        </div>

        <div>
          <strong>⏰ {{ textos[idioma].horario }}</strong>
          {{ item.horario }}
        </div>


        <div>
          <strong>{{ textos[idioma].status }}</strong>

          <span
            :class="[
              'status',
              item.status === 'confirmado'
                ? 'confirmado'
                : 'pendente'
            ]">

            {{ item.status === 'confirmado' ? textos[idioma].statusConfirmado : textos[idioma].statusPendente }}

          </span>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue"

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs
} from "firebase/firestore"

import { db } from "../services/firebase"
import emailjs from "@emailjs/browser"
import { idioma } from "../composables/useIdioma"

const textos = {
  pt: {
    titulo: "Agendar Visita",
    instituicao: "Nome da Instituição",
    responsavel: "Responsável",
    telefone: "Telefone",
    alunos: "Qtd. de Alunos",
    professores: "Qtd. de Professores",
    selecioneHorario: "Selecione o horário",
    tipoVisita: "Tipo de visita",
    visitaGuiada: "Visita Guiada",
    visitaLivre: "Visita Livre",
    oficinaEducativa: "Oficina Educativa",
    observacoes: "Observações",
    enviando: "Enviando...",
    enviarSolicitacao: "Enviar Solicitação",
    datasJaSolicitadas: "Datas Já Solicitadas",
    nenhumAgendamento: "Nenhum agendamento encontrado.",
    data: "Data:",
    horario: "Horário:",
    status: "Status:",
    statusPendente: "Pendente",
    statusConfirmado: "Confirmado",
    conflito: "Data e horário já estão reservados.",
    sucesso: "Solicitação enviada com sucesso!",
    erro: "Erro ao enviar solicitação."
  },
  en: {
    titulo: "Schedule a Visit",
    instituicao: "Institution Name",
    responsavel: "Responsible Person",
    telefone: "Phone",
    alunos: "Number of Students",
    professores: "Number of Teachers",
    selecioneHorario: "Select a time",
    tipoVisita: "Visit type",
    visitaGuiada: "Guided Visit",
    visitaLivre: "Free Visit",
    oficinaEducativa: "Educational Workshop",
    observacoes: "Notes",
    enviando: "Sending...",
    enviarSolicitacao: "Submit Request",
    datasJaSolicitadas: "Already Requested Dates",
    nenhumAgendamento: "No appointments found.",
    data: "Date:",
    horario: "Time:",
    status: "Status:",
    statusPendente: "Pending",
    statusConfirmado: "Confirmed",
    conflito: "This date and time are already booked.",
    sucesso: "Request submitted successfully!",
    erro: "Error submitting request."
  }
}

const mensagem = ref("")
const loading = ref(false)
const agendamentos = ref([])

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

async function carregarAgendamentos() {
  try {
    const snapshot = await getDocs(collection(db, "agendamentos"))

    agendamentos.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

  } catch (error) {
    console.error("Erro ao carregar agendamentos:", error)
  }
}

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

    const disponivel = await verificarDisponibilidade()

    if (!disponivel) {
      mensagem.value = textos[idioma.value].conflito
      loading.value = false
      return
    }

    await addDoc(collection(db, "agendamentos"), {
      ...form,
      status: "pendente",
      createdAt: serverTimestamp()
    })

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

    mensagem.value = textos[idioma.value].sucesso

    Object.keys(form).forEach(key => {
      form[key] = ""
    })

    // 🔥 Atualiza lista
    await carregarAgendamentos()

  } catch (error) {

    console.error("Erro:", error)
    mensagem.value = textos[idioma.value].erro

  }

  loading.value = false
}

onMounted(() => {
  carregarAgendamentos()
})
</script>

<style scoped>

.agendamento {
  max-width: 850px;
  margin: 0 auto;
  padding: 120px 24px 80px;
}

/* TITULOS */

h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.4rem;
  color: #1e3a5f;
  font-weight: 700;
}

.lista-agendamentos h2 {
  font-size: 2rem;
  margin-bottom: 28px;
  color: #1e3a5f;
}

/* FORM */

form {
  display: flex;
  flex-direction: column;
  gap: 18px;

  background: white;
  padding: 40px;
  border-radius: 18px;

  box-shadow:
    0 4px 20px rgba(0,0,0,0.05);
}

/* INPUTS */

input,
select,
textarea {
  width: 100%;

  padding: 16px 18px;

  border-radius: 10px;
  border: 1px solid #d6d6d6;

  font-size: 1rem;

  transition: 0.2s ease;
  background: #fafafa;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #1e3a5f;
  background: white;

  box-shadow:
    0 0 0 4px rgba(30,58,95,0.08);
}

/* TEXTAREA */

textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

/* BOTÃO */

button {
  padding: 16px;

  background-color: #1e3a5f;
  color: white;

  border: none;
  border-radius: 10px;

  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;

  transition: 0.25s ease;
}

button:hover {
  transform: translateY(-2px);

  background: #16314f;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* MENSAGEM */

.mensagem {
  margin-top: 24px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
}

/* LISTA */

.lista-agendamentos {
  margin-top: 70px;
}

/* CARD */

.card-agendamento {
  border: 1px solid #e5e5e5;

  border-radius: 16px;

  padding: 24px;

  margin-bottom: 20px;

  background: white;

  display: flex;
  flex-direction: column;

  gap: 12px;

  box-shadow:
    0 2px 10px rgba(0,0,0,0.04);
}

/* TEXTO DO CARD */

.card-agendamento div {
  font-size: 1rem;
  line-height: 1.7;
}

/* STATUS */

.status {
  padding: 6px 14px;
  border-radius: 999px;

  color: white;
  font-weight: 700;

  font-size: 0.9rem;
}

.confirmado {
  background: #15803d;
}

.pendente {
  background: #b45309;
}

/* VAZIO */

.vazio {
  text-align: center;
  color: #777;
  margin-top: 30px;
  font-size: 1rem;
}

/* RESPONSIVO */

@media (max-width: 768px) {

  .agendamento {
    padding: 100px 18px 60px;
  }

  form {
    padding: 24px;
  }

  h1 {
    font-size: 2rem;
  }

  .lista-agendamentos h2 {
    font-size: 1.6rem;
  }

}

</style>

