<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-down") Para los sistemas de gestión de la energía, la determinación de los indicadores de desempeño energético (SGEn) y las líneas de base energética (LBEn) son fundamentales porque a través de ellos se caracteriza de una forma cuantitativa el desempeño energético y adicionalmente se puede demostrar la mejora continua del desempeño de la organización. En este capítulo se abordan los temas para la identificación, seguimiento, manejo de los IDEn y las LBEn, así como su utilidad para el cálculo del desempeño energético. Adicionalmente se muestran algunos tipos de reportes usados en los sistemas de gestión de la energía para comunicar el desempeño energético y otros alcances del SGEn.
    
    p.mb-5(data-aos="fade-down") En el siguiente vídeo, podrá enterarse en detalle sobre los contenidos de este componente:
    figure(data-aos="flip-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
