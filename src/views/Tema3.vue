<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Utilización de los IDEn y las LBEn para la gestión de la energía 

    p.mb-5(data-aos="fade-right") El establecimiento de los indicadores de desempeño energético (IDEn) y las líneas de base energética (LBEn) es fundamental para el sistema de gestión de la energía, ya que a través de la comparación entre ellos es posible verificar el desempeño energético de la organización y determinar la efectividad de los planes de acción planteados para el SGEn.

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Cálculo del desempeño energético
            p Para calcular el desempeño energético de la organización, se debe realizar la comparación entre los valores del IDEn durante el periodo actual y el valor de la LBEn determinada. Si como resultado de la comparación se da un resultado que permita evidenciar la reducción del consumo de energía o el aumento de la eficiencia de algún proceso, sistema o equipo, se puede afirmar que se ha mejorado el desempeño energético. De lo contrario, se debe analizar con más detalle el por qué de este valor y si se debe a que han ocurrido ineficiencias en el uso de la energía o se han producido cambios en las variables relevantes o los factores estáticos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-01.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Generalmente para el cálculo del desempeño energético de la organización se utiliza alguno de los siguientes tres enfoques:
            p #[strong Diferencia:] mediante este enfoque se realiza la diferencia entre el valor actual del IDEn menos el valor de la LBEn, de la siguiente manera:
            figure
              img(src='@/assets/curso/temas/tema3/tema3-03.png', alt='')
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-02.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p #[strong Cambio porcentual:] mediante este enfoque se calcula el porcentaje de variación entre el IDEn y la LBEn de la siguiente manera:
            figure
              img(src='@/assets/curso/temas/tema3/tema3-04.png', alt='')
            p.mt-3 #[strong Razón actual:] mediante este enfoque se calcula el desempeño energético en función de la siguiente relación:
            figure
              img(src='@/assets/curso/temas/tema3/tema3-05.png', alt='')
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-02.png', alt='')

    p(data-aos="fade-right") A continuación, se muestran los dos ejemplos de modelos más comúnmente utilizados:

    .row.justify-content-center.align-items-center.mb-5.p-4(data-aos="fade-right" style="background-color:#F3EDFF; border-radius:1rem")
      .col-md-7.col-12
        h4 Ejemplo:
        p Para la misma planta de beneficio de aves vista en los anteriores casos de ejemplo, y en donde en el mes de septiembre del 2021 se realizaron varias inversiones en la compra y puesta en marcha de variadores de velocidad para tres motores eléctricos, se tiene que el valor del consumo de energía total de la planta y los kilos de producto para el mes de octubre de 2021 son los siguientes:
        .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
          table
            thead
              tr
                th Consumo de energía total de planta [kWh]
                th Kilos totales de productos [kg]
            tbody
              tr
                td.text-center 1.450.988,0
                td.text-center 4.015.250,0
        p(data-aos="fade-right") El IDEn establecido por la compañía se denomina.
        div.text-center(data-aos="fade-right")
          math.text-center
            mfrac
              msup
                mi.italic EPT = Consumo de energía total de la planta [kWh]
              msup
                mi.italic Kilos totales de producción [kg]

      .col-md-5.col-12
        figure
          img(src='@/assets/curso/temas/tema3/tema3-06.svg', alt='')


          
    .row.justify-content-center.align-items-center.mb-5.p-4(data-aos="fade-right")
      .col-md-7.col-12
        p Para este caso el valor del IDEn para el mes de Octubre de 2021 es:
        div.text-center
          mfrac
            mi.italic EP<sub>T</sub> =&nbsp;
          math.text-center
            mfrac
              msup
                mi.italic 1.450.988
              msup
                mi.italic 4.015.250
          mfrac
            mi.italic = 0,3613 [kWh/kg]
        p.mt-3 Ahora se debe determinar el valor de la LBEn con el fin de compararlo con el valor de EPT. Para eso se debe calcular primero la energía que se habría consumido con el mismo nivel de producción del mes de octubre de 2021, antes de la ejecución del proyecto de mejora energética, utilizando la ecuación establecida para la determinación de la LBEn de la siguiente manera:
        div.text-center
          mfrac
            mi.italic Energía = 0,2896 * Kilos totales de Producción Octubre de 2021 + 301.630 [kWh/mes]
        div.text-center
          mfrac
            mi.italic Energía = 0,2896 * 4.015.250 + 301.630 = 1.464.446,4 [kWh/mes]
        p.mt-3 Por lo tanto
        div.text-center
          mfrac
            mi.italic LBEn<sub>EP<sub>T</sub></sub> =&nbsp;
          math.text-center
            mfrac
              msup
                mi.italic 1.464.446,4
              msup
                mi.italic 4.015.250
          mfrac
            mi.italic = 0,3647 [kWh/kg]
        p Una vez obtenido el valor de la LBEn, se procede a realizar la diferencia de la siguiente manera:
        div.text-center
          mfrac
            mi.italic Desempeño = EP<sub>t</sub> - LBEn<sub>EP<sub>T</sub></sub> = 0,3613 - 0,3647 = - 0,0034

        p.mt-3 Para este caso como el valor de  EP<sub>t</sub> es menor que LBEn<sub>EP<sub>T</sub></sub> se puede afirmar que para el mes de Octubre del año 2021, se ha obtenido una mejora en el desempeño energético porque se ha consumido menos energía eléctrica por kilogramo de producto que la proyectada por la LBEn para esa misma cantidad de producción.


      .col-md-5.col-12
        figure
          img(src='@/assets/curso/temas/tema3/tema3-06.svg', alt='')


</template>

<script>
export default {
  name: 'Tema3',
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
