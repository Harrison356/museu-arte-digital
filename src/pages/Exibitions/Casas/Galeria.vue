<script setup>
import { ref } from "vue"

const idioma = ref("pt")

const textos = {
  pt: {
    titulo: "CASAS - CABEÇAS"
  },
  en: {
    titulo: "HOUSES - HEADS"
  }
}

const fotos = [

{
id:1,
img:"/src/assets/img1.png",
titulo:{
pt:"Casa Cabeça",
en:"House Head"
}
},

{
id:2,
img:"/src/assets/img2.png",
titulo:{
pt:"Objeto Religioso",
en:"Religious Object"
}
},

{
id:3,
img:"/src/assets/img3.png",
titulo:{
pt:"Artesanato",
en:"Handcraft"
}
},

{
id:4,
img:"/src/assets/img4.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
}
},

{
id:5,
img:"/src/assets/img5.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
}
},

{
id:6,
img:"/src/assets/img6.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
}
},

{
id:7,
img:"/src/assets/img7.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
}
},

{
id:8,
img:"/src/assets/img8.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
}
}

]

function abrir(foto){
  window.location.href = `/galeria/${foto.id}`
}
</script>

<template>

<section class="pagina">

<h1 class="titulo">

<span class="linha"></span>

{{ textos[idioma].titulo }}

<span class="linha"></span>

<div class="idioma">
<button @click="idioma='pt'">PT</button>
<button @click="idioma='en'">EN</button>
</div>

</h1>

<div class="grid">

<div
class="card"
v-for="foto in fotos"
:key="foto.id"
@click="abrir(foto)"
>
<img :src="foto.img" />
</div>

</div>

</section>

</template>

<style scoped>

.pagina{
padding:40px;
text-align:center;
background: linear-gradient(to bottom, #247d8d, #64f0e9);
}

.titulo{
font-size:40px;
color:white;
display:flex;
align-items:center;
justify-content:center;
gap:20px;
margin-bottom:60px;
position:relative;
}

.linha{
width:120px;
height:3px;
background:white;
}

.grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:40px;
max-width:900px;
margin:auto;
}

.card{
cursor:pointer;
transition:0.3s;
}

.card img{
width:100%;
border-radius:6px;
}

.card:hover{
transform:scale(1.05);
}

.idioma{
position:absolute;
right:0;
display:flex;
gap:10px;
}

.idioma button{
background:transparent;
border:1px solid white;
padding:6px 12px;
color:white;
cursor:pointer;
transition:0.3s;
}

.idioma button:hover{
background:white;
color:#5e4a2e;
}

</style>