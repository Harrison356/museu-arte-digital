<template>
  <section class="admin">
    <h1>Painel de Agendamentos</h1>

    <table>
      <thead>
        <tr>
          <th>Instituição</th>
          <th>Data</th>
          <th>Horário</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        <template v-for="item in agendamentos" :key="item.id">
          
          <!-- Linha principal -->
          <tr>
            <td>{{ item.instituicao }}</td>
            <td>{{ item.data }}</td>
            <td>{{ item.horario }}</td>
            <td>{{ item.status }}</td>
            <td>
              <button 
                v-if="item.status !== 'confirmado'"
                @click="confirmar(item.id)">
                Confirmar
              </button>

              <button 
                @click="excluir(item.id)"
                class="btn-excluir">
                Excluir
              </button>

              <button @click="toggleDetalhes(item.id)">
                {{ aberto === item.id ? "Fechar" : "Ver detalhes" }}
              </button>
            </td>
          </tr>

          <!-- Linha expandida -->
          <tr v-if="aberto === item.id">
            <td colspan="5" class="detalhes">
              <p><strong>CNPJ:</strong> {{ item.cnpj }}</p>
              <p><strong>Responsável:</strong> {{ item.responsavel }}</p>
              <p><strong>Telefone:</strong> {{ item.telefone }}</p>
              <p><strong>Email:</strong> {{ item.email }}</p>
              <p><strong>Alunos:</strong> {{ item.alunos }}</p>
              <p><strong>Professores:</strong> {{ item.professores }}</p>
              <p><strong>Tipo de visita:</strong> {{ item.tipoVisita }}</p>
              <p><strong>Observações:</strong> {{ item.observacoes }}</p>
            </td>
          </tr>

        </template>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { 
  collection, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc 
} from "firebase/firestore"

import { db } from "../services/firebase"

const agendamentos = ref([])
const aberto = ref(null)

// 🔥 Carregar dados
async function carregarAgendamentos() {
  try {
    const snapshot = await getDocs(collection(db, "agendamentos"))

    agendamentos.value = snapshot.docs.map(d => ({
      id: d.id,
      ...d.data()
    }))
  } catch (error) {
    console.error("Erro ao carregar agendamentos:", error)
  }
}

// 🔥 Mostrar/ocultar detalhes
function toggleDetalhes(id) {
  aberto.value = aberto.value === id ? null : id
}

// 🔥 Confirmar
async function confirmar(id) {
  try {
    const refDoc = doc(db, "agendamentos", id)
    await updateDoc(refDoc, { status: "confirmado" })

    await carregarAgendamentos()
  } catch (error) {
    console.error("Erro ao confirmar:", error)
  }
}

// 🔥 Excluir
async function excluir(id) {
  const confirmarExclusao = confirm("Tem certeza que deseja excluir este agendamento?")
  if (!confirmarExclusao) return

  try {
    const refDoc = doc(db, "agendamentos", id)
    await deleteDoc(refDoc)

    await carregarAgendamentos()
  } catch (error) {
    console.error("Erro ao excluir:", error)
  }
}

onMounted(() => {
  carregarAgendamentos()
})
</script>

<style scoped>
.admin {
  padding: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

button {
  padding: 6px 12px;
  background: #1e3a5f;
  color: white;
  border: none;
  cursor: pointer;
  margin: 2px;
}

.btn-excluir {
  background: #b91c1c;
}

/* 🔥 Detalhes expandido */
.detalhes {
  text-align: left;
  background: #f3f4f6;
  padding: 15px;
}

.detalhes p {
  margin: 5px 0;
}
</style>