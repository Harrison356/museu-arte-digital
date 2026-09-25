<template>

<section class="pagina" v-if="item">

<h1 class="titulo">

<span class="linha"></span>

{{ item.titulo[idioma] }}

<span class="linha"></span>

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
import { idioma } from '../../../composables/useIdioma'
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img3 from '../../../assets/img3.png'
import img4 from '../../../assets/img4.png'
import img5 from '../../../assets/img5.png'
import img6 from '../../../assets/img6.png'
import img7 from '../../../assets/img7.png'
import img8 from '../../../assets/img8.png'

export default{

setup(){
  return { idioma }
},

data(){

return{

fotos:[

{
id:1,
img: img1,
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
img: img2,
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
img: img3,
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
img: img4,
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
img: img5,
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
img: img6,
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
img: img7,
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
img: img8,
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

  .conteudo {
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
  }

  .imagem {
    width: 100%;
    max-width: 320px;
  }

  .texto {
    max-width: 100%;
    text-align: center;
  }
}
</style>