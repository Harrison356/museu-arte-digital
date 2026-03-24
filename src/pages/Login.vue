<template>
  <section class="login">
    <h1>Login Admin</h1>

    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="senha" type="password" placeholder="Senha" />

    <button @click="entrar">Entrar</button>

    <p v-if="erro" class="erro">{{ erro }}</p>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const email = ref("")
const senha = ref("")
const erro = ref("")
const router = useRouter()

async function entrar() {
  const auth = getAuth()

  try {
    await signInWithEmailAndPassword(auth, email.value, senha.value)
    router.push("/admin")
  } catch (e) {
    erro.value = "Email ou senha inválidos"
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 80px auto;
  text-align: center;
}

input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}

button {
  padding: 10px;
  width: 100%;
  background: #1e3a5f;
  color: white;
  border: none;
  cursor: pointer;
}

.erro {
  color: red;
  margin-top: 10px;
}
</style>