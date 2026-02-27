<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/sobre">Sobre</router-link>
    <router-link to="/contato">Contato</router-link>
  </nav>
</template>

<style>
.navbar {
  background: #2c3e50;
  padding: 15px;
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}

a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>
