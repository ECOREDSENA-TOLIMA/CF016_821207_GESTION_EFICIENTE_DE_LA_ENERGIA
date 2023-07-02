<template lang="pug">
.curso-main-container.pb-3.tema1
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

    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Resultados de la revisión energética

    p(data-aos="fade-right") De acuerdo con la Guía Técnica Colombiana GTC-ISO 50006:2017 la información que brinda como resultado del proceso de revisión energética y que se utiliza para la identificación de los indicadores de desempeño energético y las líneas de base energética se resumen en la siguiente tabla:


    .tabla-a.color-acento-botones.mb-5 
      table
        caption Nota. Adaptado de Instituto Colombiano de Normas Técnicas y Certificación (2017).
        thead
          tr
            th(colspan="2") Actividades del proceso de Revisión Energética
            th Salidas o resultados típicos
        tbody
          tr
            td(rowspan="2") Análisis de uso y consumo de la energía con base en mediciones y otra información de la organización.
            td Identificación de los recursos o fuentes de energía que utiliza la organización.
            td 
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Listado de fuentes energéticas.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Matriz de consumos energéticos con información de las fuentes de energía con mayor utilización, y mayor costo.
          tr
            td Evaluación del uso y el consumo de cada uno de los energéticos, y de los usos de la energía en el tiempo presente y en los meses y años pasados.
            td 
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Gráficos de tendencia de consumos para las diferentes fuentes energéticas.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Gráficos de tendencia de consumos para el consumo total de la organización.
          tr
            td(rowspan="4") Identificación de las áreas, equipos, o procesos donde se consume mayor cantidad de energía (usos significativos de la energía).
            td 
              p Identificación de las instalaciones, procesos, sistemas, edificios, equipos que inciden en el uso y consumo significativo de la energía en la organización.
              p Identificación del personal que trabaja para la organización o en nombre de la organización, y que inciden en la operación y mantenimiento de los usos de la energía.
            td 
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Listado de instalaciones, equipos, procesos y sistemas de la organización.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Listado de las personas que inciden en la operación y mantenimiento de los usos de la energía identificados.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Valores de consumo energético para cada uno de los usos de la energía de la organización.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Identificación de los usos significativos de la energía (USE) en la organización.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Diagramas de flujo y de proceso para los usos significativos de la energía.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Gráficos de tendencia de consumos para cada uno de los usos significativos de la energía identificados.
          tr
            td Identificación de las variables que afectan el comportamiento de los usos significativos de la energía (USE).
            td 
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Identificación de las variables relevantes y otros factores que afectan el comportamiento energético de la organización.
          tr
            td Caracterización del desempeño energético real de los equipos, edificios, instalaciones, sistemas y procesos que tienen relación con los USE identificados.
            td 
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Elaboración de un listado con la priorización de las actividades que se encuentran alineadas con los objetivos estratégicos de la organización.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Establecer los límites de los indicadores de desempeño energético (IDEn).
                li.mb-0
                  i.fas.fa-angle-right 
                  | Identificar los IDEn para cada uno de los límites determinados.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Calcular y establecer las líneas de base energética (LBEn) para cada uno de los IDEn.
          tr
            td Estimación del uso y el consumo energético futuros.
            td 
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Estimación de los valores de energía utilizando la herramienta gráfica de tendencia.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Estimación de los valores de energía utilizando modelos estadísticos si aplica.
          tr
            td Identificación, priorización y registro de las oportunidades de mejora del desempeño energético de la organización.
            td Identificación, priorización y registro de las oportunidades de mejora del desempeño energético de la organización.
            td
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Elaboración del listado de oportunidades de mejora (OM) del desempeño energético de la organización.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Para cada una de las OM, determinar la forma en que se pueden usar los IDEn para verificar la eficacia de la OM.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Establecer en el listado el valor meta para cada IDEn u oportunidad de mejora.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Listado del presupuesto económico para la implementación de cada OM.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Ordenar o priorizar las OM de acuerdo con el retorno de inversión.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Realizar el plan de implementación y verificación de las OM.


    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Alcance del SGEn y límites para los IDEn

    .row.justify-content-center.align-items-center.mb-5
      .col-md-9.col-12
        p Para la definición de los límites para los IDEn se debe tener en cuenta inicialmente el alcance del SGEn definido durante la etapa de planificación. Por ejemplo, si en una organización se define que el alcance del SGEn es el consumo de electricidad para la sede principal, se deben centrar los esfuerzos en determinar los IDEn que permitan cuantificar y validar el desempeño energético sólo bajo este alcance. Una vez se tenga claro el alcance para los IDEn, se debe establecer los límites dentro del alcance para cada uno de los IDEn a desarrollar.
        p La Guía Técnica Colombiana GTC-ISO 50006:2017 establece tres niveles para la determinación de los límites de los IDEn:
      .col-md-3.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-02.svg', alt='')


    .tabla-a.color-acento-botones.mb-5 
      table
        caption Nota. Adaptado de Instituto Colombiano de Normas Técnicas y Certificación (2017).
        thead
          tr
            th Nivel para el límite de los IDEn
            th Ejemplo
            th Descripción
        tbody
          tr
            td
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Instalación individual.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Equipo.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Procesos.
            td
              p Motor de 300 HP para proceso.
              p Compresores de la sala No.1 (rack de compresores) para refrigeración.
              p Equipos de producción de vapor (caldera No.1, caldera No. 2, etc.).
            td 
              p El límite del IDEn se determina para un perímetro físico de una instalación, equipo o proceso que se requiere controlar e implementar mejoras.
          tr 
            td
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Sistemas.
            td Sistema de aire acondicionado centralizado del edificio. (Incluye todos los equipos de compresión, condensación, unidades manejadoras, automatización, etc.)
            td El límite del IDEn se determina para un perímetro físico de un grupo de instalaciones, equipos o procesos que interactúan mutuamente y en donde se requiere controlar e implementar mejoras.
          tr 
            td
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Organizacional.
            td
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Consumo de electricidad del total del edificio.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Consumo total de gas natural de la empresa.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Consumo total de gas natural para el proceso de generación y distribución de vapor en la empresa.
            td El límite del IDEn se determina para un perímetro físico de diferentes grupos o subgrupos de instalaciones, equipos o procesos que interactúan mutuamente y en donde se requiere controlar e implementar mejoras.

    p(data-aos="fade-right") En general, para la determinación de los límites se debe tener en cuenta los siguientes aspectos:
    
    .row.mt-5.mb-5.align-items-stretch
      .col-lg-4.col-md-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p El alcance y los límites del sistema de gestión de la energía.
      .col-lg-4.col-md-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p El uso o los usos significativos de la energía (USE) que la organización defina para controlar y mejorar el desempeño.
      .col-lg-4.col-md-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Los equipos, procesos (y subprocesos), edificios, donde la organización ha identificado que se puede realizar la gestión de la energía.


            

         






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
