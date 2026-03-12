<template>

<section class="pagina" v-if="item">

<h1 class="titulo">

<span class="linha"></span>

{{ item.titulo[idioma] }}

<span class="linha"></span>

<div class="idioma">
<button @click="idioma='pt'">PT</button>
<button @click="idioma='en'">EN</button>
</div>

</h1>

<div class="conteudo">

<img :src="item.img" class="imagem"/>

<p class="texto">
{{ item.descricao[idioma] }}
</p>

</div>

</section>

</template>

<script>

export default{

data(){

return{

idioma:"pt",

fotos:[

{
id:1,
img:"/src/assets/img1.png",
titulo:{
pt:"CASAS - CABEÇAS",
en:"HOUSES - HEADS"
},
descricao:{
pt:"Com a criação da Amazonas Filarmônica em 1997, muitos imigrantes do Leste Europeu se dirigiram a Manaus...",
en:"With the creation of the Amazonas Philharmonic in 1997, many immigrants from Eastern Europe moved to Manaus..."
}
},

{
id:2,
img:"/src/assets/img2.png",
titulo:{
pt:"Objeto Religioso",
en:"Religious Object"
},
descricao:{
pt:"Descrição da peça do museu.",
en:"Description of the museum piece."
}
},

{
id:3,
img:"/src/assets/img3.png",
titulo:{
pt:"Artesanato",
en:"Handcraft"
},
descricao:{
pt:"Objeto artesanal típico...",
en:"Typical handcrafted object..."
}
},

{
id:4,
img:"/src/assets/img4.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
},
descricao:{
pt:"Objeto simbólico utilizado...",
en:"Symbolic cultural object..."
}
},

{
id:5,
img:"/src/assets/img5.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
},
descricao:{
pt:"Objeto simbólico utilizado...",
en:"Symbolic cultural object..."
}
},

{
id:6,
img:"/src/assets/img6.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
},
descricao:{
pt:"Objeto simbólico utilizado...",
en:"Symbolic cultural object..."
}
},

{
id:7,
img:"/src/assets/img7.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
},
descricao:{
pt:"Objeto simbólico utilizado...",
en:"Symbolic cultural object..."
}
},

{
id:8,
img:"/src/assets/img8.png",
titulo:{
pt:"Símbolo cultural",
en:"Cultural Symbol"
},
descricao:{
pt:"Objeto simbólico utilizado...",
en:"Symbolic cultural object..."
}
}

]

}

},

computed:{

item(){

const id = parseInt(this.$route.params.id)

return this.fotos.find(f => f.id === id)

}

}

}

</script>

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

.conteudo{
display:flex;
gap:40px;
align-items:center;
justify-content:center;
margin-top:40px;
}

.imagem{
width:350px;
}

.texto{
max-width:500px;
text-align:left;
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