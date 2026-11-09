<script setup>
import { idioma } from '../../../composables/useIdioma'
import img1 from '../../../assets/img1.webp'
import img2 from '../../../assets/img2.webp'
import img3 from '../../../assets/img3.webp'
import img4 from '../../../assets/img4.webp'
import img5 from '../../../assets/img5.webp'
import img6 from '../../../assets/img6.webp'
import img7 from '../../../assets/img7.webp'
import img8 from '../../../assets/img8.webp'

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
img: img1,
titulo:{
pt:"Casa Cabeça",
en:"House Head"
}
},

{
id:2,
img: img2,
titulo:{
pt:"Objeto Religioso",
en:"Religious Object"
}
},

{
id:3,
img: img3,
titulo:{
pt:"Artesanato",
en:"Handcraft"
}
},

{
id:4,
img: img4,
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
}
},

{
id:5,
img: img5,
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
}
},

{
id:6,
img: img6,
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
}
},

{
id:7,
img: img7,
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
}
},

{
id:8,
img: img8,
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
padding:50px 40px 40px;
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

/* MOBILE */
@media (max-width: 768px) {
  .pagina {
    padding: 30px 20px 30px;
  }

  .titulo {
    flex-direction: column;
    gap: 12px;
    font-size: 26px;
    margin-bottom: 40px;
  }

  .linha {
    width: 60px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 420px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>