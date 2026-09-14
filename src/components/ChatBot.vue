<script setup>
import { ref, nextTick } from 'vue'
import {
  respostasChatbot,
  respostaPadrao,
  mensagemBoasVindas
} from '../data/chatbotRespostas'

const aberto = ref(false)
const jaAbriu = ref(false)
const digitando = ref(false)
const textoInput = ref('')
const listaMensagens = ref(null)

const mensagens = ref([])

// intervalo de marcas de acento combinadas (Unicode 768 a 879), usado para remover acentos após normalize('NFD')
const REGEX_ACENTOS = new RegExp('[' + String.fromCharCode(768) + '-' + String.fromCharCode(879) + ']', 'g')

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(REGEX_ACENTOS, '')
}

function buscarResposta(pergunta) {
  const perguntaNormalizada = normalizar(pergunta)

  const encontrada = respostasChatbot.find(item =>
    item.palavrasChave.some(palavra =>
      perguntaNormalizada.includes(normalizar(palavra))
    )
  )

  return encontrada ? encontrada.resposta : respostaPadrao
}

async function rolarParaFinal() {
  await nextTick()
  if (listaMensagens.value) {
    listaMensagens.value.scrollTop = listaMensagens.value.scrollHeight
  }
}

function toggleChat() {
  aberto.value = !aberto.value

  if (aberto.value && !jaAbriu.value) {
    jaAbriu.value = true
    mensagens.value.push({ autor: 'bot', texto: mensagemBoasVindas })
    rolarParaFinal()
  }
}

function enviarMensagem() {
  const texto = textoInput.value.trim()
  if (!texto) return

  mensagens.value.push({ autor: 'usuario', texto })
  textoInput.value = ''
  rolarParaFinal()

  digitando.value = true

  setTimeout(() => {
    digitando.value = false
    mensagens.value.push({ autor: 'bot', texto: buscarResposta(texto) })
    rolarParaFinal()
  }, 600)
}
</script>

<template>
  <div class="chatbot">

    <!-- JANELA DO CHAT -->
    <div v-if="aberto" class="janela">

      <div class="topo">
        <span>💬 Assistente do Museu</span>
        <button class="fechar" @click="toggleChat">✕</button>
      </div>

      <div class="mensagens" ref="listaMensagens">
        <div
          v-for="(msg, index) in mensagens"
          :key="index"
          :class="['balao', msg.autor]"
        >
          {{ msg.texto }}
        </div>

        <div v-if="digitando" class="balao bot digitando">
          <span></span><span></span><span></span>
        </div>
      </div>

      <form class="entrada" @submit.prevent="enviarMensagem">
        <input
          v-model="textoInput"
          type="text"
          placeholder="Digite sua pergunta..."
        />
        <button type="submit">Enviar</button>
      </form>

    </div>

    <!-- BOTÃO FLUTUANTE -->
    <button class="botao-flutuante" @click="toggleChat" :aria-label="aberto ? 'Fechar chat' : 'Abrir chat'">
      {{ aberto ? '✕' : '💬' }}
    </button>

  </div>
</template>

<style scoped>
.chatbot {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
}

/* BOTÃO FLUTUANTE */
.botao-flutuante {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: #537bff;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(83, 123, 255, 0.4);
  transition: 0.3s;
}

.botao-flutuante:hover {
  transform: scale(1.08);
}

/* JANELA */
.janela {
  width: 320px;
  max-width: 85vw;
  height: 420px;
  max-height: 70vh;
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.topo {
  background: #1e3a5f;
  color: white;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
}

.fechar {
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

/* MENSAGENS */
.mensagens {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f5f7fb;
}

.balao {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 14px;
  line-height: 1.4;
}

.balao.bot {
  align-self: flex-start;
  background: white;
  color: #222;
  border-bottom-left-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.balao.usuario {
  align-self: flex-end;
  background: #537bff;
  color: white;
  border-bottom-right-radius: 4px;
}

/* INDICADOR "DIGITANDO" */
.digitando {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 12px 14px;
}

.digitando span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #aaa;
  animation: piscar 1s infinite ease-in-out;
}

.digitando span:nth-child(2) {
  animation-delay: 0.2s;
}

.digitando span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes piscar {
  0%, 80%, 100% { opacity: 0.3; }
  40% { opacity: 1; }
}

/* ENTRADA */
.entrada {
  display: flex;
  border-top: 1px solid #eee;
  padding: 10px;
  gap: 8px;
}

.entrada input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
}

.entrada input:focus {
  border-color: #537bff;
}

.entrada button {
  background: #537bff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.entrada button:hover {
  background: #3f63e0;
}

/* MOBILE */
@media (max-width: 480px) {
  .chatbot {
    right: 12px;
    bottom: 12px;
  }

  .janela {
    width: 90vw;
  }
}
</style>
