<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Reporte del desempeño energético y del SGEn

    p.mb-5(data-aos="fade-down") Los reportes del desempeño energético y del sistema de gestión de la energía (SGEn) permiten comunicar de forma efectiva el comportamiento energético de la organización e identificar el nivel de cumplimiento de los objetivos y metas energéticas. Dentro del SGEn la organización puede definir y utilizar diversos tipos de métodos de seguimiento y presentación de informes, sin embargo, los más utilizados son los siguientes: 

    .row.mb-5
      .col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-right")
          .row(titulo="Reporte diario del desempeño energético")
            .col-md-7.mb-4.mb-md-0(data-aos="fade-right")
              p Para organizaciones principalmente del sector industrial donde los niveles de producción y el valor de las variables relevantes cambian de forma continua, generalmente se utiliza un reporte diario de los indicadores de desempeño energético con el fin de identificar desviaciones que se puedan corregir de manera rápida por los encargados del proceso. El tipo de usuarios para este tipo de reportes diarios son las personas que trabajan en las áreas de operación, mantenimiento y producción. En la práctica muchas empresas recurren a pantallas digitales distribuidas por sectores de la empresa o a tableros físicos donde se imprimen los resultados diariamente. 
              p En la siguiente figura se muestra un ejemplo de reporte diario del desempeño energético, en la cual se muestra el cumplimiento diario de las metas y el acumulado del mes en valores porcentuales, su equivalente a valor monetario y emisiones de gases de efecto invernadero (GEI). Adicionalmente se muestra el desempeño de cuatro usos de la energía en color verde los que tienen un desempeño adecuado y en color rojo los que tienen un desempeño a mejorar.
            .col-md-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema4/tema4-01.png', alt='')
            .col-12.mt-5(data-aos="fade-down")
              figure
                img(src='@/assets/curso/temas/tema4/tema4-02.png', alt='')
                figcaption Nota. Adaptado de la Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE (2019).
 
          .row.justify-content-center.align-items-center(titulo="Reporte semanal / quincenal / mensual del desempeño energético")
            .col-12.mb-md-0
              p Para las organizaciones del sector comercial o de oficinas, normalmente no se utiliza el reporte diario debido a que sus variables relevantes no varían de forma significativa de un día a otro, por lo cual se prefiere que el periodo de reporte sea semanal, quincenal o mensual. Este tipo de reportes es muy utilizado por los coordinadores de las áreas de los usos significativos de la energía como centros de datos, iluminación, aire acondicionado, equipos de ofimática, ascensores, entre otros. Lo anterior no quiere decir que solo está limitado a este tipo de usuarios, ya que también en el sector industrial son utilizados en los niveles que reportan a la alta dirección.
              p En la siguiente figura se presenta un ejemplo de reporte de desempeño energético de tipo mensual para un edificio de oficinas.
            .col-12.col-md-10.mt-4
              figure
                img(src='@/assets/curso/temas/tema4/tema4-03.png', alt='')
                figcaption Nota. SENA (2022).

          .row.justify-content-center.align-items-center(titulo="Reporte anual del desempeño energético")
            .col-12.mb-md-0
              p Este tipo de reportes es muy utilizado por la alta dirección, ya que por lo general la evaluación del cumplimiento de los objetivos a este nivel se realiza en períodos anuales. Por lo tanto este tipo de informes son muy útiles para:
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | La evaluación por parte del equipo de gestión de la energía del desempeño energético anual de la organización.
                li.mb-0
                  i.fas.fa-angle-right 
                  | La determinación de cambios en las líneas de base energéticas.
                li
                  i.fas.fa-angle-right 
                  | La consolidación de la información de entrada para la ejecución de la revisión por la dirección que comprenden como mínimo : el nivel o grado de cumplimiento de cada uno de los objetivos y las metas energéticas, el resultado del desempeño energético y los resultados de las mejoras en el desempeño energético implementadas, los resultados del seguimiento y medición de los IDEn, y los USE, el estado de cada uno de los planes de acción determinados dentro del SGEn, las barreras, inconvenientes y situaciones a solucionar presentadas durante la implementación y operación del SGEn, entre otras.
                p A través de un año se pueden presentar diversas situaciones en la organización respecto al comportamiento del desempeño energético, sin embargo, en este tipo de reportes se pretende que la información sea lo más resumida posible y se prefiere la representación gráfica.
            .col-12.col-md-10.mt-4
              p En la siguiente figura se muestra la tendencia de comportamiento para una organización:
              figure
                img(src='@/assets/curso/temas/tema4/tema4-04.png', alt='')
                figcaption Nota. Adaptado de Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE (2019).


          .row.justify-content-center.align-items-center(titulo="Reporte de auditoría interna al SGEn")
            .col-12.mb-md-0
              p El objetivo principal de las auditorías internas es determinar el nivel de cumplimiento y desempeño del SGEn, y evidenciar de una manera imparcial y objetiva su efectividad frente a los objetivos y metas energéticas planteadas por la organización. Como uno de los resultados de la auditoría interna se debe realizar un informe que contiene como mínimo la siguiente información:
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-angle-right 
                  | Objetivos de la auditoría.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Alcance de la auditoría.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Identificación de la organización a auditar.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Identidad del equipo auditor.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Fechas y ubicaciones en donde se realizaron las actividades de la auditoría.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Criterios de la auditoría.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Hallazgos de la auditoría y las evidencias que los soportan.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Identificación de oportunidades de mejora en el SGEn.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Identificación de fortalezas de la organización frente al SGEn.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Registro de las No conformidades.
                li.mb-0
                  i.fas.fa-angle-right 
                  | Conclusiones de la auditoría.

          .row.justify-content-center.align-items-center(titulo="Reporte de comportamiento energético")
            .col-12.mb-md-0
              p Los reportes de comportamiento energético son informes mediante los cuales la organización decide realizar un diagnóstico del comportamiento energético de sus procesos, sistemas o equipos. Este tipo de reportes requiere en ocasiones en donde se necesita un análisis detallado que permita brindar un panorama de la situación energética particular.
              .tarjeta.color-primario.p-3.mb-5.mt-5(data-aos="fade-down")
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/componentes/documentos.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Documento - Reporte Diagnostico
                        p.text-small En el siguiente enlace se puede observar el reporte técnico de un cine en donde se caracteriza el comportamiento energético y se informan algunas de las oportunidades de ahorro.
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/3_Reporte Diagnostico.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download

          .row.justify-content-center.align-items-center(titulo="Registro de cumplimiento de requisitos legales y otros requisitos")
            .col-12.mb-md-0
              p En lo posible, se debe utilizar el resultado de la evaluación del comportamiento de los indicadores de desempeño energético como medida para determinar el cumplimiento de los requisitos legales. Aunque la evaluación del cumplimiento de requisitos legales no requiere de un análisis exhaustivo ya que la naturaleza del resultado es el cumplimiento o incumplimiento del requisito, en algunos casos resulta útil referenciar el IDEn asociado.
            .col-12.mb-md-0
              h4 Ejemplo:
              p Una de las sedes del Ministerio de Minas y Energía ubicadas en la ciudad de Bogotá, tiene implementado su sistema de gestión de la energía, a través del cual se ha identificado uno de los requisitos legales que debe cumplir por pertenecer al sector público:
            .col-12.mb-md-0
              .tabla-b.color-acento-contenido.mb-5
                .tabla-b__header
                  h4.mb-0 MATRIZ DE REQUISITOS LEGALES Y OTROS REQUISITOS
                table
                  caption Nota. SENA (2022).
                  tr
                    th No.
                    th Requisito
                    th Nombre del requisito
                    th Tema
                    th Emisor / parte interesada
                    th ¿Aplica para el SGEn?
                    th Forma de cumplimiento
                    th Responsable
                    th Frecuencia / forma de Revisión
                  tr 
                    td 2
                    td Ley 1955 de 2019.
                    td Artículo 292. Objetivo para el primer año un ahorro en el consumo de energía de mínimo 15 %.
                    td Gestión de la Energía.
                    td Congreso de la República.
                    td Sí. Obligatorio por pertenecer al sector público.
                    td Resultado del IDEn Consumo Total Edificio [kWh].
                    td Departamento de Operaciones.
                    td Anual / verificación con responsables.
            .col-12
              p Como se puede observar en la matriz de requisitos legales, la forma para determinar el cumplimiento del requisito es a través del valor del IDEn Consumo Total Edificio [kWh]. A partir de lo anterior, en el momento de la evaluación del cumplimiento de requisitos legales y otros requisitos se puede presentar el siguiente registro determinado por el sistema de gestión de la organización:
              .tabla-b.color-acento-contenido.mb-5
                .tabla-b__header
                  h4.mb-0 REGISTRO DE SEGUIMIENTO Y EVALUACIÓN DEL CUMPLIMIENTO DE REQUISITOS LEGALES Y OTROS REQUISITOS
                table
                  caption Nota. SENA (2022).
                  tr
                    th No.
                    th Requisito
                    th Tema
                    th Frecuencia / Forma de Revisión
                    th Forma de Cumplimiento
                    th Fecha del seguimiento / Evaluación
                    th Cumple (SI / NO)
                    th Evidencia
                    th Personal entrevistado
                  tr 
                    td 2
                    td Ley 1955 de 2019. Artículo 292. Objetivo para el primer año un ahorro en el consumo de energía de mínimo 15%.
                    td Gestión de la energía.
                    td Anual / verificación con responsables.
                    td Resultado del IDEn consumo total edificio [kWh].
                    td Enero 15 de 2022.
                    td Sí
                    td El valor promedio del IDEn consumo total edificio [kWh] para los 12 meses año 2021 fue de 124.350 kWh/mes. La meta del 15% de disminución fue superada en 4%, ya que se obtuvo un ahorro final del 19%.
                    td Jefe de operaciones / Ver correo electrónico.


</template>

<script>
export default {
  name: 'Tema4',
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
