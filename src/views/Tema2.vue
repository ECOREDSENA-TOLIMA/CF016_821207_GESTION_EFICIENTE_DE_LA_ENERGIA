<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Determinación de las Líneas de Base Energéticas (LBEn)

    p(data-aos="flip-right") Una vez se han definido los indicadores de desempeño energético (IDEn) requeridos por la organización, se debe construir una línea de base energética para cada uno de ellos teniendo en cuenta un periodo de tiempo base adecuado. 

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="flip-left") 
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 En otras palabras
            p Las líneas de base energéticas corresponden a los valores pasados de los IDEn que se utilizan para comparar el desempeño energético actual de la organización. Los valores de las LBEn determinan el estado del desempeño energético antes de realizar acciones de mejora por lo tanto la comparación de los valores actuales de los IDEn con la LBEn permite verificar la efectividad y la mejora continua del sistema de gestión de la energía. A continuación, se muestran los pasos para el cálculo de las LBEn de acuerdo con la norma ISO 50001:
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-01.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 a. Establecimiento de un periodo base adecuado
            p Generalmente, el periodo de base recomendado y utilizado por la mayoría de organizaciones es de un año de recolección de información. Es decir, si el IDEn que se determinó se va a evaluar de forma mensual, el período de base recomendado para la construcción de la línea de base energética es de 12 meses equivalente a un año.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-02.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Sin embargo
            p Pueden existir casos en donde no se tiene información durante un año debido a que no se tenía medidores, o que por alguna razón hubo una modificación reciente en la infraestructura del edificio o planta de producción que modificó el comportamiento energético de la organización. Para este caso se pueden tomar periodos de base menores a un año. También se puede dar el caso donde la organización decida utilizar un periodo base mayor a un año porque sus condiciones de infraestructura no han cambiado considerablemente y tienen información suficiente para obtener modelos estadísticos más confiables.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-03.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Siguiendo con la idea
            p Lo que se debe garantizar con el periodo de base seleccionado por la organización es que sea de una duración suficiente que permita el registro de las variaciones de las diferentes variables relevantes establecidas, como por ejemplo variaciones en la temperatura exterior, niveles de producción, nivel de ocupación, etc.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-04.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 b. Recopilación de la información
            p Una vez se define el periodo de base, se procede a recopilar la información de los consumos, variables relevantes y factores estáticos determinados por la organización, y que han sido registrados durante el periodo de base seleccionado. Se recomienda seguir las indicaciones del plan de recopilación de información de datos de energía desarrollada en la etapa de planificación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-05.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 c. Cálculo de la línea de base energética
            p Dependiendo del tipo de IDEn identificado, se procede a realizar el cálculo de la línea de base energética para cada uno de ellos, y si se requiere o no de un modelo estadístico.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-06.png', alt='')

    p.mb-5(data-aos="flip-down")  A continuación, se muestran los dos ejemplos de modelos más comúnmente utilizados:

    .row.justify-content-center.align-items-center.mb-5.p-4(data-aos="fade-right" style="background-color:#F3EDFF; border-radius:1rem")
      .col-md-7.col-12
        p #[strong Ejemplo 1:]
        p En un edificio de oficinas ubicado en una ciudad de Colombia donde no se presentan estaciones climáticas acentuadas, y en el último año no se han realizado modificaciones o cambios tecnológicos en el edificio, la alta dirección de la empresa requiere de un IDEn que permita observar el desempeño energético del total del edificio. El equipo de gestión de la energía decide determinar un IDEn de nivel organizacional y un IDEn de tipo Medida del valor energético, de la siguiente manera:
        div.mt-4.mb-4.text-center(style=" background-color: #ABC4E7; padding: 1rem; border-radius:1rem")
          span #[i Energía Eléctrica Total (EET) = Consumo Mensual Electricidad [kWh/mes]]
        p A pesar de que este IDEn no tiene en cuenta la influencia de las variables relevantes, es de gran utilidad para la dirección porque puede hacer de forma rápida sus cálculos de presupuesto anual requerido para el concepto de energía eléctrica. Para la toma de datos de este indicador, se cuenta con un medidor instalado en la frontera eléctrica del edificio que tiene la capacidad de ser consultado vía internet, de tal forma que no es necesario esperar a que la comercializadora envíe la factura de electricidad.
      .col-md-5.col-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-07.svg', alt='')

    p.mb-5(data-aos="flip-right") Para la construcción de la línea de base energética, se cuenta con el registro de las facturas de los últimos doce meses con la siguiente información:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-md-5.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Registro de facturación del último año.</i>
        .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
          table
            caption Nota. Sena (2022).
            thead
              tr
                th Año
                th Consumo Total electricidad Edificio [kWh] 
            tbody
              tr
                td ene-21
                td 88.800
              tr
                td feb-21
                td 89.006
              tr
                td mar-21
                td 89.504
              tr
                td abr-21
                td 89.005
              tr
                td may-21
                td 89.904
              tr
                td jun-21
                td 89.205
              tr
                td jul-21
                td 90.004
              tr
                td ago-21
                td 90.083
              tr
                td sep-21
                td 89.055
              tr
                td oct-21
                td 89.995
              tr
                td nov-21
                td 89.409 
              tr
                td dic-21
                td 88.929
              tr
                td Promedio
                td 89.409
      .col-md-7.col-12
        .titulo-sexto.color-acento-contenido.mb-3
          p.titulo.mb-0 <b>Figura 3. </b> <i>Línea de base de IDEn - EET (energía eléctrica total).</i>
        figure
          img(src='@/assets/curso/temas/tema2/tema2-08.png', alt='')
          figcaption Nota. Sena (2022).

    p.mb-5(data-aos="fade-down") De acuerdo con la tabla y figura anterior, se puede definir como línea de base energética para el IDEn Energía Eléctrica Total (EET) el valor promedio del consumo de los últimos 12 meses correspondiente a 89.409 kWh. Opcionalmente, se puede tomar como línea de base el valor de consumo de cada mes, para que en la evaluación del indicador se compare con el mismo mes que se está evaluando.


    .row.justify-content-center.align-items-center.mb-5.p-4(data-aos="fade-right" style="background-color:#DBE6F5; border-radius:1rem")
      .col-md-5.col-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-09.svg', alt='')
      .col-md-7.col-12
        p #[strong Ejemplo 2: línea de base energética univariable]
        p Volviendo al ejemplo de una planta de beneficio de aves en la cual se realizó una auditoría energética que concluye que uno de los consumos significativos es la energía eléctrica con un aporte del 80 % del total del consumo energético de la planta. En vista de lo anterior y ante los resultados presentados a la gerencia de la compañía por parte del tecnólogo en gestión eficiente de la energía, la alta dirección solicita que la definición de un indicador de desempeño energético (IDEn) para el consumo de electricidad total de la planta que tenga el alcance de nivel organizacional (es decir que el alcance es el total de la planta). 
        p Durante el proceso de planificación ya se había determinado que los kilos totales de producción es una variable y se había obtenido un grado de correlación alto debido al valor del coeficiente de determinación de acuerdo con los siguientes datos y figura:


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-md-5.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Energía total vs. kilos totales de producción.</i>
        .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
          table
            caption Nota. Sena (2022).
            thead
              tr
                th Año
                th Energía Total Planta [kWh]
                th Kilos Totales de Producción
            tbody
              tr
                td ene-21
                td 1.377.634
                td 3.887.774
              tr
                td feb-21
                td 1.425.958
                td 3.805.694
              tr
                td mar-21
                td 1.424.816
                td 3.992.733
              tr
                td abr-21
                td 1.586.562
                td 4.488.033
              tr
                td may-21
                td 1.537.503
                td 4.350.180
              tr
                td jun-21
                td 1.538.755
                td 4.118.342
              tr
                td jul-21
                td 1.568.499
                td 4.344.984
              tr
                td ago-21
                td 1.543.502
                td 4.126.265 
      .col-md-7.col-12
        .titulo-sexto.color-acento-contenido.mb-3
          p.titulo.mb-0 <b>Figura 4. </b> <i>Graficación energía total vs. kilos totales de producción.</i>
        figure
          img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')

    p.mb-5(data-aos="fade-down") Debido a lo anterior, el equipo de gestión de la energía decide establecer un IDEn de tipo cociente de valores medidos, con alcance organizacional, denominado como EP_T  donde sea posible la creación de un modelo que permita relacionar el consumo de energía total de la planta y la producción total en kilos mensuales.

    .row.justify-content-center.align-items-center.mb-5.p-4(data-aos="fade-right" style="background-color:#F3EDFF; border-radius:1rem")
      .col-md-6.col-12
        p Para la construcción de la línea de base energética (LBEn) para el IDEn determinado, se debe calcular la ecuación en el mismo gráfico XY donde se graficó la relación entre el consumo de energía y los kilos totales de producción. Esto se puede realizar mediante las mismas herramientas de la hoja de cálculo y se tiene como resultado lo siguiente:
      .col-md-6.col-12
        .titulo-sexto.color-acento-contenido.mb-3
          p.titulo.mb-0 <b>Figura 5. </b> <i>Ecuación de la graficación energía total vs. kilos totales de producción.</i>
        figure
          img(src='@/assets/curso/temas/tema2/tema2-11.png', alt='')
          figcaption Nota. SENA (2022).


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-5.col-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-12.png', alt='')
      .col-md-7.col-12
        p De acuerdo con los resultados anteriores, se puede obtener el valor de la línea de base energética para el consumo de electricidad del total de la planta de acuerdo con el nivel de producción a partir de la ecuación que resulta del análisis estadístico de la siguiente manera:
        div.mt-4.mb-4.text-center(style=" background-color: #ABC4E7; padding: 1rem; border-radius:1rem")
          span #[i Energía = 0,2896 * Kilos totales de Producción [en kg] + 301.630 [kWh/mes]]
        p Con esta ecuación es posible predecir el consumo de energía asociada a la producción para determinado mes. Cabe recordar que esta ecuación se ajusta al modelo debido a que se tiene un coeficiente de determinación R² con valor 0,7884 que indica una buena correlación de los datos. Para los casos donde R² se encuentra por debajo de 0,6 se recomienda verificar los datos o se debe buscar otro modelo que pueda representar a la línea de base energética, incluyendo más variables relevantes para los cálculos del modelo.

    p(data-aos="fade-left") Aunque los dos métodos mostrados en los ejemplos anteriores son los más utilizados, también se pueden aplicar modelos con un grado de complejidad mayor, pero que resultan muy útiles para la determinación de las líneas de base energéticas. 

    .tarjeta.color-primario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/documentos.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Documento - Línea de base Energética Univariable
              p.text-small En el siguiente enlace se encuentra la información realizada por Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE (2019) donde se describe el método de ecuación multivariable cuando se requiere crear un modelo con dos o más variables relevantes y el método por producción equivalente.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/1_Modelos_LBEn.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
