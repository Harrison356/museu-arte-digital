// Importações
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Config do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDnn1MuwgNPh7CuKXaPFvGx25zmS87BJP0",
  authDomain: "museu-a6610.firebaseapp.com",
  projectId: "museu-a6610",
  storageBucket: "museu-a6610.firebasestorage.app",
  messagingSenderId: "490328975518",
  appId: "1:490328975518:web:078649b97602a0700b738f"
}

// 🔥 Inicializa o app
const app = initializeApp(firebaseConfig)

// 🔥 Inicializa serviços
const db = getFirestore(app)
const auth = getAuth(app)

// 🔥 Exporta TUDO
export { db, auth }