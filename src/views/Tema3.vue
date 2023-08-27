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
        p(data-aos="fade-right") El IDEn establecido por la compañía se denomina:
        div.text-center(data-aos="fade-right")
          mfrac
            mi.italic EP<sub>T</sub> =&nbsp;
          math.text-center
            mfrac
              msup
                mi.italic Consumo de energía total de la planta [kWh]
              msup
                mi.italic Kilos totales de producción [kg]

      .col-md-5.col-12
        figure
          img(src='@/assets/curso/temas/tema3/tema3-06.svg', alt='')


          
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
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
        p.mt-3 Ahora se debe determinar el valor de la LBEn con el fin de compararlo con el valor de EP#[sub T]. Para eso se debe calcular primero la energía que se habría consumido con el mismo nivel de producción del mes de octubre de 2021, antes de la ejecución del proyecto de mejora energética, utilizando la ecuación establecida para la determinación de la LBEn de la siguiente manera:
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
        p.mt-4 Una vez obtenido el valor de la LBEn, se procede a realizar la diferencia de la siguiente manera:
        div.text-center
          mfrac
            mi.italic Desempeño = EP<sub>t</sub> - LBEn<sub>EP<sub>T</sub></sub> = 0,3613 - 0,3647 = - 0,0034

        p.mt-3 Para este caso como el valor de  EP<sub>t</sub> es menor que LBEn<sub>EP<sub>T</sub></sub> se puede afirmar que para el mes de Octubre del año 2021, se ha obtenido una mejora en el desempeño energético porque se ha consumido menos energía eléctrica por kilogramo de producto que la proyectada por la LBEn para esa misma cantidad de producción.


      .col-md-5.col-12
        figure
          img(src='@/assets/curso/temas/tema3/tema3-07.png', alt='')

    .row.mb-4(data-aos="fade-down")
      .col-md-3.col-xs-12
        figure
            img(src='@/assets/curso/temas/tema3/17.svg', alt='')
      .col-md-9.col-xs-12.mt-3
        h4 Cambio porcentual:
        p Mediante este enfoque se calcula el porcentaje de variación entre el IDEn y la LBEn de la siguiente manera:
        .row
          .col-2
          .col-md-7.col-xs-12.justify-content-center.align-items-center.mb-5.p-4( style="background-color:#E2D4FF; border-radius:1rem")
            div
              mfrac
                mi.italic Desempeño<sub>cambio porcentual</sub> =&nbsp;
              math.text-center
                mfrac
                  msup
                    mi.italic (IDEn - LBEn) 
                  msup
                    mi.italic LBEn 
              mfrac 
                mi &nbsp;* 100 %
          .col-2


    .row.justify-content-center.align-items-center.mb-5.p-4(data-aos="fade-right" style="background-color:#F3EDFF; border-radius:1rem")
      .col-md-4.col-12
        figure
          img(src='@/assets/curso/temas/tema3/tema3-08.png', alt='')
      .col-md-8.col-12
        h4(data-aos="fade-right") Ejemplo:
        p(data-aos="fade-right") Continuando con el caso anterior de la planta de beneficio, con este enfoque el desempeño energético se mide de la siguiente forma:
        
        .row
          .col-2
          .col-7.justify-content-center.align-items-center.p-4( style="background-color:#FFFFFF; border-radius:1rem")
            div.text-center(data-aos="fade-right")
              mfrac
                mi.italic Desempeño =&nbsp;
              math.text-center
                mfrac
                  msup
                    mi.italic (0,3613 - 0,3647)
                  msup
                    mi.italic 0,3647 
              mfrac 
                mi &nbsp;*100 % = -0,93 %
          .col-2      
        p.mt-3(data-aos="fade-right") Del valor anterior se puede afirmar que, el desempeño en este indicador mejoró un 0,93 % al estar por debajo del valor de la LBEn en ese valor porcentual.
        p(data-aos="fade-right") La ventaja de utilizar el enfoque del cambio porcentual es que se puede obtener de forma rápida el porcentaje de reducción o aumento de consumo total de energía para la evaluación del cumplimiento de las metas y objetivos energéticos asociados al IDEn. Es decir, para el caso del ejemplo, como el valor del desempeño tiene signo negativo, se entiende que existe una disminución de consumo y si se desea calcular el ahorro obtenido con respecto a la línea de base energética se puede calcular de la siguiente manera:
        div.text-center(data-aos="fade-right")
          mfrac
            mi.italic Resultado energético = Desempeño [%] * Energía calculada a través de la línea de base energética
        p.mt-3(data-aos="fade-right") Para el caso del ejemplo, se obtiene:
        div.text-center(data-aos="fade-right")
          mfrac
            mi.italic Resultado energético = - (0,93/100) *1.464.446,4 [kWh] = -13.619,35 [kWh/mes]
        p.mt-3(data-aos="fade-right") El anterior resultado indica que, durante el mes de octubre de 2021, se han obtenido ahorros de 13.619,35 kWh al mes, debido a la implementación de la puesta en marcha de los variadores de velocidad.  


    .row.mb-4(data-aos="fade-down")      
      .col-md-7.col-xs-12
        h4 Razón actual:
        p Mediante este enfoque se calcula el desempeño energético en función de la siguiente relación:
        .row
          .col-2
          .col-md-7.col-xs-12.justify-content-center.align-items-center.p-4( style="background-color:#E2D4FF; border-radius:1rem")           
            div
              mfrac
                mi.italic Desempeño<sub>razón actual</sub> =&nbsp;
              math.text-center
                mfrac
                  msup
                    mi.italic IDEn
                  msup
                    mi.italic LBEn 
          p.mt-3 Para el mismo ejemplo anterior, el desempeño se calcula de la siguiente manera:
        .row
          .col-2  
          .col-md-7.col-xs-12.justify-content-center.align-items-center.p-4( style="background-color:#E2D4FF; border-radius:1rem")           
            div
              mfrac
                mi.italic Desempeño<sub>razón actual</sub> =&nbsp;
              math.text-center
                mfrac
                  msup
                    mi.italic 0,3613
                  msup
                    mi.italic 0,3647 
              mfrac 
                mi.italic &nbsp;= 0,9906
        p.mt-3 El anterior resultado se puede interpretar como una mejora del desempeño energético en términos del valor de la línea de base.
      .col-md-5.col-xs-12
        figure
            img.mt-5(src='@/assets/curso/temas/tema3/18.svg', alt='')
        
    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Seguimiento de planes, objetivos y metas energéticas

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-09.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El seguimiento al cumplimiento de los objetivos, metas energéticas y planes de acción para alcanzarlos, son muy importantes para el Sistema de Gestión de la Energía ya que permiten a la organización demostrar a través de resultados, el cumplimiento de la política energética establecida.
          br
          br
          | La comparación entre los IDEn y las LBEn permiten evaluar cuantitativamente la efectividad de los planes de acción, metas u objetivos energéticos. En la siguiente tabla se puede visualizar el uso del IDEn definido como kWh/m³ con límite equipo y tipo cociente de valores medidos, como medida de la evaluación del desempeño de los planes de acción, la meta y el objetivo energético descrito.

    .tarjeta.color-primario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/descargar.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small.mb-0 Podrá consultar un ejemplo del uso de IDEn según la evaluación de desempeño en el:
              p.text-small #[b Anexo 4.] - Ejemplo de uso del IDEn según evaluación de desempeño. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_4_Ejemplo_de_uso_del_IDEn.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    //- .row.justify-content-center.my-5(data-aos="fade-right")
    //-   .col-md-10.col-12
    //-     .titulo-sexto.color-acento-botones.mb-1
    //-       p.titulo.pb-0.mb-0 <b>Tabla 8. </b> <i>Ejemplo de uso del IDEn según evaluación de desempeño.</i>

    

    //- .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
    //-   table(style="min-width: 1200px !important")     
    //-     caption Nota. SENA (2022).
    //-     thead
    //-       tr
    //-         th No.
    //-         th Objetivo
    //-         th Meta
    //-         th Evaluación del desempeño
    //-         th Plan de acción
    //-         th Responsable
    //-         th Recursos
    //-         th Verificación plan de acción
    //-         th Fecha límite
    //-     tbody
    //-       tr
    //-         td(rowspan="2") 1
    //-         td(rowspan="2") Reducción del consumo total de electricidad de la sede Norte en un 5 %.
    //-         td(rowspan="2") Reducir en 30 % el consumo de electricidad en el uso de bombeo de agua.
    //-         td(rowspan="2") Comprobación de reducción a través del IDEn para el cuarto de bombeo agua [kWh/m3].
    //-         td 1.1. Cambio de motores trifásicos No. 4 y No. 5 de la sala principal de bombeo por motores de eficiencia Premium IE3. 
    //-         td Coordinador de mantenimiento.
    //-         td 
    //-           p Contrato No. 1024 de 2021 por valor de 30.000.000 de pesos.
    //-           p Grupo de servicios y mantenimiento (2 días).
    //-         td 
    //-           p Verificar cronograma de ejecución.
    //-           p Verificar cronograma de presupuesto ejecutado.
    //-           p Comparación de mediciones eléctricas antes del cambio versus después del cambio.
    //-         td Marzo 15 de 2022.
    //-       tr 
    //-         td 1.2. Instalación de variador de velocidad para el motor trifásico No. 8 de 50 HP. 
    //-         td Coordinador área de automatización.
    //-         td 
    //-           p Orden de compra No. 20221032 por valor de 10.000.000 de pesos.
    //-           p Grupo de servicios y mantenimiento (7 días).
    //-         td 
    //-           p Verificar cronograma de ejecución.
    //-           p Comparación de mediciones eléctricas antes del cambio versus después del cambio.
    //-         td Febrero 20 de 2022.

    p(data-aos="fade-right") De la tabla que se encuentra en el anexo anterior, se puede afirmar que la forma hacer el seguimiento y evaluar el cumplimiento de la meta energética de reducción del 30 % en el consumo de electricidad en el uso de bombeo de agua, se debe calcular el IDEn para el cuarto de bombeo agua [kWh/m3] y compararlo con la línea de base energética la cual se debe establecer con los datos históricos de las mediciones de las bombas de agua antes de la ejecución de los planes de acción 1.1 y 1.2. Del resultado de la comparación utilizando el enfoque de cambio porcentual, es posible determinar si la meta energética se cumple o si se requiere hacer más controles operacionales para que se pueda cumplir. 


    .tarjeta.color-primario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/documentos.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Documento - Estudios de Caso SGEn
              p.text-small En el siguiente material complementario realizado por Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE (2019) se pueden observar dos estudios de caso con datos reales donde se utilizan los IDEn y las LBEn para la evaluación del desempeño energético.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/2_Estudios_de_Caso_SGEn.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
                
    .tarjeta.tarjeta--azul.p-4.mb-4(data-aos="fade-right" style="background-color:#DBE6F5")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center(titulo="1")
          .col-md-5.mb-4.mb-md-0
            p En muchas ocasiones, cuando por primera vez se determinan los indicadores de desempeño energético (IDEn) y las líneas de base energéticas (LBEn) se pueden presentar casos en donde los valores medidos de la IDEn no muestran de forma real las características del desempeño energético de la organización.            
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/11.svg', alt='')
        .row.justify-content-around.align-items-center(titulo="2")
          .col-md-5.mb-4.mb-md-0
            p Es importante considerar que algunas variables relevantes pueden no haber sido tenidas en cuenta o que cambios en la infraestructura física u operativa no se hayan considerado durante la determinación de los Indicadores de Desempeño Energético (IDEn). Cuando se detectan estas situaciones, se debe ajustar los IDEn y las Líneas de Base Energéticas (LBEn) para caracterizar de manera precisa el desempeño energético de la organización.             
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/12.svg', alt='')
        .row.justify-content-around.align-items-center(titulo="3")
          .col-md-5.mb-4.mb-md-0
            p Si una organización ya tiene establecidos los Indicadores de Desempeño Energético (IDEn) y las Líneas de Base Energéticas (LBEn) que reflejan adecuadamente su desempeño energético, pero posteriormente realiza cambios en instalaciones, tecnología, usos de energía o fuentes de energía, y variables relevantes, es necesario asegurar que los IDEn, las LBEn y los límites sigan siendo apropiados para caracterizar el desempeño energético impactado por esos cambios.             
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/13.svg', alt='')
        .row.justify-content-around.align-items-center(titulo="4")
          .col-md-5.mb-4.mb-md-0
            h4 Para cumplir con lo anterior, se tienen dos opciones: 
            p - Reemplazar los IDEn y las LBEn actuales por unos nuevos que reflejen la realidad del desempeño después de los cambios en la organización. 
            p - Ajustar las líneas de base energética (LBEn) sin cambiar la caracterización del indicador de desempeño energético.            
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/14.svg', alt='')                
        .row.justify-content-around.align-items-center(titulo="5")
          .col-md-5.mb-4.mb-md-0
            h4 Para evaluar la validez de los Indicadores de Desempeño Energético (IDEn) y las Líneas de Base Energéticas (LBEn) después de hacer cambios en la organización, se puede:
            p Verificar si los nuevos valores de las variables relevantes se encuentran dentro de un rango estadístico válido en relación a la LBEn actual.
            p Detectar cambios  en factores estáticos que invaliden la LBEn o requieran ajustes en los límites de los IDEn, de las líneas de producción o cambios en los turnos de producción.                          
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/15.svg', alt='')
        .row.justify-content-around.align-items-center(titulo="6")
          .col-md-5.mb-4.mb-md-0.col-xs-12
            p Si de acuerdo a lo anterior, los valores de las LBEn y los IDEn no caracterizan el desempeño energético, se puede confirmar que no son válidos y se necesita hacer cambios y/o ajustes. Cabe resaltar que los cambios o ajustes realizados a las LBEn y los IDEn se deben documentar y registrar.             
          .col-md-7.mb-4.mb-md-0.col-xs-12
            figure
              img(src='@/assets/curso/temas/tema3/16.svg', alt='')


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
