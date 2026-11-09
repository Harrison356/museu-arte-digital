import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "./firebase"

export async function login(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha)
}

export function logout() {
  return signOut(auth)
}

export function getUser() {
  return auth.currentUser
}