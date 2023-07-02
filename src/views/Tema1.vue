<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Identificación de los Indicadores de Desempeño Energético (IDEn)

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los indicadores de desempeño energético (IDEn) son variables determinadas por la organización que se utilizan para cuantificar y determinar el desempeño energético dentro del sistema de gestión de la energía. Los IDEn se deben establecer con base a los resultados obtenidos en la revisión energética, y por lo general se asocian para cada USE. Para la determinación de los IDEn es necesario tener en cuenta que una vez sean definidos, posteriormente se deben comparar sus valores con respecto a una línea de base energética (identificada en la siguiente etapa) con el fin de evaluar si las acciones de mejora del desempeño implementadas por el sistema de gestión de la energía han sido efectivas. Por lo tanto, es de vital importancia que en el momento de definir cada IDEn se cuente con registros de información histórica para poder calcular la línea de base; de lo contrario, el IDEn creado por la organización no tendrá punto de comparación. 

    p.mb-5(data-aos="flip-right") A continuación, se muestra la información más relevante que se debe tener en cuenta para definir los IDEn:
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
