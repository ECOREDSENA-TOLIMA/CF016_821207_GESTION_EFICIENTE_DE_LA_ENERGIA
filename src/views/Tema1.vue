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
        p Los indicadores de desempeño energético (IDEn) son variables determinadas por la organización que se utilizan para cuantificar y determinar el desempeño energético dentro del sistema de gestión de la energía. 
        br
        br
        | Los IDEn se deben establecer con base a los resultados obtenidos en la revisión energética, y por lo general se asocian para cada USE. Para la determinación de los IDEn es necesario tener en cuenta que una vez sean definidos, posteriormente se deben comparar sus valores con respecto a una línea de base energética (identificada en la siguiente etapa) con el fin de evaluar si las acciones de mejora del desempeño implementadas por el sistema de gestión de la energía han sido efectivas. Por lo tanto, es de vital importancia que en el momento de definir cada IDEn se cuente con registros de información histórica para poder calcular la línea de base; de lo contrario, el IDEn creado por la organización no tendrá punto de comparación. 

    p.mb-4(data-aos="flip-right") A continuación, se muestra la información más relevante que se debe tener en cuenta para definir los IDEn:

    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Resultados de la revisión energética

    p(data-aos="fade-right") De acuerdo con la Guía Técnica Colombiana GTC-ISO 50006:2017, la información que brinda como resultado del proceso de revisión energética y que se utiliza para la identificación de los indicadores de desempeño energético y las líneas de base energética se resumen en el siguiente anexo: 

    .tarjeta.color-primario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/descargar.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Para profundizar aún más en éste tema, diríjase al Anexo 1.
              p.text-small Revisión energética y principales salidas y resultados.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_Revision_energetica.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    //- .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
    //-   table
    //-     caption Nota. Adaptado de Instituto Colombiano de Normas Técnicas y Certificación (2017).
    //-     thead
    //-       tr
    //-         th(colspan="2") Actividades del proceso de Revisión Energética
    //-         th Salidas o resultados típicos
    //-     tbody
    //-       tr
    //-         td(rowspan="2") Análisis de uso y consumo de la energía con base en mediciones y otra información de la organización.
    //-         td Identificación de los recursos o fuentes de energía que utiliza la organización.
    //-         td 
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Listado de fuentes energéticas.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Matriz de consumos energéticos con información de las fuentes de energía con mayor utilización, y mayor costo.
    //-       tr
    //-         td Evaluación del uso y el consumo de cada uno de los energéticos, y de los usos de la energía en el tiempo presente y en los meses y años pasados.
    //-         td 
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Gráficos de tendencia de consumos para las diferentes fuentes energéticas.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Gráficos de tendencia de consumos para el consumo total de la organización.
    //-       tr
    //-         td(rowspan="4") Identificación de las áreas, equipos, o procesos donde se consume mayor cantidad de energía (usos significativos de la energía).
    //-         td 
    //-           p Identificación de las instalaciones, procesos, sistemas, edificios, equipos que inciden en el uso y consumo significativo de la energía en la organización.
    //-           p Identificación del personal que trabaja para la organización o en nombre de la organización, y que inciden en la operación y mantenimiento de los usos de la energía.
    //-         td 
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Listado de instalaciones, equipos, procesos y sistemas de la organización.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Listado de las personas que inciden en la operación y mantenimiento de los usos de la energía identificados.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Valores de consumo energético para cada uno de los usos de la energía de la organización.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Identificación de los usos significativos de la energía (USE) en la organización.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Diagramas de flujo y de proceso para los usos significativos de la energía.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Gráficos de tendencia de consumos para cada uno de los usos significativos de la energía identificados.
    //-       tr
    //-         td Identificación de las variables que afectan el comportamiento de los usos significativos de la energía (USE).
    //-         td 
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Identificación de las variables relevantes y otros factores que afectan el comportamiento energético de la organización.
    //-       tr
    //-         td Caracterización del desempeño energético real de los equipos, edificios, instalaciones, sistemas y procesos que tienen relación con los USE identificados.
    //-         td 
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Elaboración de un listado con la priorización de las actividades que se encuentran alineadas con los objetivos estratégicos de la organización.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Establecer los límites de los indicadores de desempeño energético (IDEn).
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Identificar los IDEn para cada uno de los límites determinados.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Calcular y establecer las líneas de base energética (LBEn) para cada uno de los IDEn.
    //-       tr
    //-         td Estimación del uso y el consumo energético futuros.
    //-         td 
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Estimación de los valores de energía utilizando la herramienta gráfica de tendencia.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Estimación de los valores de energía utilizando modelos estadísticos si aplica.
    //-       tr
    //-         td Identificación, priorización y registro de las oportunidades de mejora del desempeño energético de la organización.
    //-         td Identificación, priorización y registro de las oportunidades de mejora del desempeño energético de la organización.
    //-         td
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Elaboración del listado de oportunidades de mejora (OM) del desempeño energético de la organización.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Para cada una de las OM, determinar la forma en que se pueden usar los IDEn para verificar la eficacia de la OM.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Establecer en el listado el valor meta para cada IDEn u oportunidad de mejora.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Listado del presupuesto económico para la implementación de cada OM.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Ordenar o priorizar las OM de acuerdo con el retorno de inversión.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Realizar el plan de implementación y verificación de las OM.


    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Alcance del SGEn y límites para los IDEn

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-md-9.col-12
        p Para la definición de los límites para los IDEn se debe tener en cuenta inicialmente el alcance del SGEn definido durante la etapa de planificación. Por ejemplo, si en una organización se define que el alcance del SGEn es el consumo de electricidad para la sede principal, se deben centrar los esfuerzos en determinar los IDEn que permitan cuantificar y validar el desempeño energético sólo bajo este alcance. Una vez se tenga claro el alcance para los IDEn, se debe establecer los límites dentro del alcance para cada uno de los IDEn a desarrollar.
        //- p La Guía Técnica Colombiana GTC-ISO 50006:2017, establece tres niveles para la determinación de los límites de los IDEn:
      .col-md-3.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-02.svg', alt='')


    .tarjeta.color-primario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/descargar.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small La Guía Técnica Colombiana GTC-ISO 50006:2017 establece tres niveles para la determinación de los límites de los IDEn Diríjase al Anexo 2 - Niveles determinantes de los límites de los IDEn. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_Niveles_determinantes_de_los_limites_de_los_IDEn.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    //- .tabla-a.color-acento-botones.mb-5(data-aos="fade-right")
    //-   table
    //-     caption Nota. Adaptado de Instituto Colombiano de Normas Técnicas y Certificación (2017).
    //-     thead
    //-       tr
    //-         th Nivel para el límite de los IDEn
    //-         th Ejemplo
    //-         th Descripción
    //-     tbody
    //-       tr
    //-         td
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Instalación individual.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Equipo.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Procesos.
    //-         td
    //-           p Motor de 300 HP para proceso.
    //-           p Compresores de la sala No.1 (rack de compresores) para refrigeración.
    //-           p Equipos de producción de vapor (caldera No.1, caldera No. 2, etc.).
    //-         td 
    //-           p El límite del IDEn se determina para un perímetro físico de una instalación, equipo o proceso que se requiere controlar e implementar mejoras.
    //-       tr 
    //-         td
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Sistemas.
    //-         td Sistema de aire acondicionado centralizado del edificio. (Incluye todos los equipos de compresión, condensación, unidades manejadoras, automatización, etc.)
    //-         td El límite del IDEn se determina para un perímetro físico de un grupo de instalaciones, equipos o procesos que interactúan mutuamente y en donde se requiere controlar e implementar mejoras.
    //-       tr 
    //-         td
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Organizacional.
    //-         td
    //-           ul.lista-ul.mb-2
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Consumo de electricidad del total del edificio.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Consumo total de gas natural de la empresa.
    //-             li.mb-0
    //-               i.fas.fa-angle-right 
    //-               | Consumo total de gas natural para el proceso de generación y distribución de vapor en la empresa.
    //-         td El límite del IDEn se determina para un perímetro físico de diferentes grupos o subgrupos de instalaciones, equipos o procesos que interactúan mutuamente y en donde se requiere controlar e implementar mejoras.

    p(data-aos="fade-right") En general, para la determinación de los límites se debe tener en cuenta los siguientes aspectos:
    
    .row.mt-5.mb-4.align-items-stretch(data-aos="fade-right")
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

    Separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Cuantificación de flujos de energía

    p(data-aos="fade-right") Los flujos de energía por lo general se relacionan con diagramas de bloques (o cajas) interconectados entre sí, de tal manera que se representa de forma visual y gráfica el flujo y el recorrido de la energía de entrada y los procesos donde se consume o transforma, incluyendo los productos resultantes para dicho proceso. 

    .tarjeta.tarjeta--azul.p-4.mb-4(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Adicionalmente, en este tipo de diagramas pueden incluir los equipos o instrumentos de medición y registro de las variables que influyen en el desempeño energético. Los recursos visuales más utilizados para la representación de los flujos de energía son los diagramas de bloques (o de vallas) y los mapas energéticos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-06.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Durante esta etapa para la identificación de los IDEn, una vez se hayan definidos los límites, se debe conocer los flujos de energía dentro de dicho límite. Es decir, se debe aislar de forma gráfica el equipo, proceso, instalación o sistema y analizar los flujos de energía que inciden en el desempeño energético y se debe identificar la información disponible y los recursos de medición y registro que pueden ser utilizados para hacer seguimiento a los IDEn. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-07.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p También, a través de esta actividad se pueden registrar las necesidades de medición para una futura compra de equipos u otro tipo de recursos que se requieran para hacer la gestión de la energía.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-08.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p En la siguiente imagen se muestra un ejemplo de flujo de energía para el sistema de refrigeración de lácteos y carnes frías para un supermercado de tamaño mediano, en donde se ha definido que el alcance del sistema de gestión de la energía es la energía eléctrica consumida, y de acuerdo a los resultados de la revisión energética el sistema completo de refrigeración para lácteos y carnes frías es uno de los usos significativos de la energía. Para este caso la organización tiene planeado la determinación de un indicador de desempeño energético que permita monitorear, controlar y gestionar este USE, con lo cual el nivel para el límite de los IDEn corresponde al sistema.
            p Las flechas azules corresponde al flujo de electricidad y las flechas de color verde corresponde al flujo del proceso de refrigeración. También se aprecia que la salida del sistema es obtener una temperatura constante de 3°C durante las 24 horas del día con el fin de que el producto se conserve, y que la organización cuenta con dos medidores de electricidad que facilita y se deben tener en cuenta para la recopilación de datos para el cálculo del IDEn.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-09.png', alt='', @click="modal1=true")
     
    Separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.4 Variables relevantes y factores estáticos

    p(data-aos="fade-right") De acuerdo con las definiciones de la norma ISO 50001, una variable relevante es un factor que se puede cuantificar y que impacta de forma considerable el desempeño energético de un equipo, sistema, o proceso. Adicionalmente, una variable relevante como su nombre lo dice, cambia su valor de manera rutinaria. 

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down")
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-25.png', alt='')
          .col-md-8
            p De forma similar, un factor estático, es un factor que impacta de forma considerable el desempeño energético de un equipo, sistema, o proceso, pero su diferencia principal es que su valor se mantiene constante o no cambia de manera rutinaria. A continuación, se muestran las características de cada uno de ellos:
        .row(titulo="2")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-26.png', alt='')
          .col-md-8
            h4 Variables relevantes.
            p Para la determinación de las variables relevantes se utilizan inicialmente los resultados de la revisión energética. Posterior a la identificación de los usos significativos de la energía (USE) y la determinación de los límites para los indicadores de desempeño energético (IDEn) de la organización, esta debe definir y cuantificar las variables relevantes en cada uno de los límites de los IDEn. El proceso para la definición de las variables relevantes, inicia con la identificación de todas las variables que podrían afectar el desempeño energético dentro del límite del IDEn definido.
        .row(titulo="3")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-27.png', alt='')
          .col-md-8
            p En este proceso de identificación se van a encontrar muchas variables que pueden o no afectar el desempeño energético. Las fuentes de información para la identificación inicial de las variables que afectan el desempeño son (entre otras):
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right 
                | Resultados de la revisión energética o auditorías energéticas.
              li.mb-0
                i.fas.fa-angle-right 
                | Manuales de operación de equipos.
              li.mb-0
                i.fas.fa-angle-right 
                | Instructivos y manuales de operación y mantenimiento de equipos o procesos.
              li.mb-0
                i.fas.fa-angle-right 
                | Recomendaciones de los fabricantes de equipos.
              li.mb-0
                i.fas.fa-angle-right 
                | Entrevistas con operadores, supervisores y coordinadores de procesos y mantenimiento de equipos.
        .row(titulo="4")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-28.png', alt='')
          .col-md-8
            p De acuerdo con Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE (2019), generalmente se pueden encontrar las siguientes variables relevantes en el sector industrial:
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right 
                | Nivel de producción (por ejemplo número de piezas, toneladas de producto, etc.).
              li.mb-0
                i.fas.fa-angle-right 
                | Nivel de ocupación (por ejemplo cantidad de personas en un edificio de oficinas, centro comercial, supermercado, etc.).
              li.mb-0
                i.fas.fa-angle-right 
                | Condiciones operacionales de procesos o equipos (por ejemplo temperatura, presión, velocidad, revoluciones por minuto, relación aire/combustible, cantidad de paradas, regímenes de operación, cantidad de purgas al día, planeación de la producción, nivel de desperdicio, mermas, etc.).
              li.mb-0
                i.fas.fa-angle-right 
                | Condiciones climáticas (temperatura ambiente, humedad relativa, nivel de polución, grados día de temperatura, etc.).
              li.mb-0
                i.fas.fa-angle-right 
                | Condiciones de mantenimiento (frecuencia o periodo de limpieza, cantidad de ajustes, número de mantenimientos preventivos, etc.).

    p(data-aos="fade-right") La norma ISO 50001 sugiere el siguiente método para la identificación y cuantificación de las variables relevantes:

    .row.mt-4.mb-5(data-aos="fade-left")
      .col-12
        span.h4.titulos-tema-1.px-5.py-2 Primer Paso:


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-9.col-12
        p Observar gráficamente la relación entre el consumo de energía del total de la organización, de los USE (equipos, sistemas, procesos, edificios, etc.) teniendo en cuenta los límites definidos, y las variables potenciales que se considere podrían afectar el comportamiento energético. Lo anterior se puede lograr mediante el uso de gráficas de tendencias, en donde se grafique la tendencia del consumo de energía y a su vez se grafique la tendencia del comportamiento a través del tiempo de la variable potencial. Lo anterior permitirá identificar de forma rápida si existe en primera instancia una relación que se puede analizar con más detalle posteriormente. 
      .col-md-3.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-4.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='')
      .col-md-8.col-12
        h4 Ejemplo:
        p En una planta de beneficio de aves en la cual se realizó una auditoría energética que concluye que uno de los consumos significativos es la energía eléctrica, con un aporte del 80 % del total del consumo energético de la planta. En vista de lo anterior y ante los resultados presentados a la gerencia de la compañía por parte del tecnólogo en gestión eficiente de la energía, la alta dirección solicita que la definición de un indicador de desempeño energético (IDEn) para el consumo de electricidad total de la planta que tenga el alcance de nivel organizacional (es decir que el alcance es el total de la planta). De acuerdo a la revisión documental de los resultados de la revisión energética, se plantea inicialmente evaluar si la variable llamada kilos totales de producción influye en el comportamiento energético del consumo de electricidad del total de la planta, tomando como base la siguiente información:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Kilos totales vs. Comportamiento energético.</i>
        .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
          table
            caption Nota. SENA (2022).
            thead
              tr
                th Año
                th Energía Total Planta [kWh]
                th Kilos Totales de Producción
            tbody
              tr.text-center
                td ene-21
                td 1.377.634 
                td  3.887.774 
              tr.text-center
                td feb-21
                td 1.425.958 
                td 3.805.694
              tr.text-center
                td mar-21
                td 1.424.816
                td 3.992.733
              tr.text-center
                td abr-21
                td 1.586.562
                td 4.488.033
              tr.text-center
                td may-21
                td 1.537.503
                td 4.350.180
              tr.text-center
                td jun-21
                td 1.538.755
                td 4.118.342
              tr.text-center
                td jul-21
                td 1.568.499
                td 4.344.984
              tr.text-center
                td ago-21
                td 1.543.502
                td 4.126.265
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-3.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')
      .col-md-9.col-12
        p De acuerdo con la información anterior, se procede a realizar una gráfica de tendencia que permita ver el comportamiento de la energía total consumida (kWh) y los kilos totales de producción. La gráfica debe tener un eje principal que para este caso se definió como el consumo de energía total y un eje secundario para los kilos totales producidos. En el eje X se grafica los meses asociados a cada valor de la tabla. Utilizando cualquier #[em software] u hoja de cálculo se puede obtener la figura 1:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-11.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Tendencia de energía total planta vs. kilos totales del producto.</i>
        figure
          img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='')
          figcaption Nota. SENA (2022).

    p(data-aos="fade-right") Del gráfico anterior se puede observar que la tendencia de cada una de las figuras, se parecen entre sí. Es decir, en varios períodos cuando los kilos totales de producción aumentan, se presenta un aumento del consumo total de electricidad. Así mismo, se observa que en algunos meses cuando los kilos totales de producción disminuyen, se presenta una disminución del consumo total de electricidad. De acuerdo con lo anterior, la variable kilos totales de producción es candidata a convertirse en variable relevante, sin embargo, se debe analizar con mayor detalle en los siguientes pasos. Cabe resaltar que también puede existir el caso donde si la variable aumenta de valor, el consumo de energía disminuye de valor y viceversa. Si se presenta esta situación, también se debe tener en cuenta como potencial variable relevante.


    .row.mt-4.mb-5.mt-5(data-aos="fade-left")
      .col-12
        span.h4.titulos-tema-1.px-5.py-2 Segundo Paso:
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-9.col-12
        p Una vez sean identificadas las variables potenciales que pueden convertirse en variables relevantes, se sugiere determinar cuantitativamente el grado de correlación que tiene cada una de ellas con el consumo de energía dependiendo de los límites que se pretenden analizar, para posteriormente definir los IDE. El objetivo principal es confirmar si efectivamente dicha variable identificada se puede considerar como una variable relevante. La herramienta más utilizada para realizar este análisis es la elaboración de un diagrama X-Y simple o también llamados gráficos de dispersión (llamados así en las hojas de cálculo) en donde los valores del eje Y se pueden graficar los consumos de energía y para los valores del eje X se pueden graficar los kilos totales de producción. Así mismo, esta herramienta permite la elaboración de una gráfica lineal que permite observar si los puntos están relacionados y teniendo en cuenta el valor del coeficiente de determinación “R<sup>2</sup>” se puede determinar el grado de relación entre los puntos y que tan lineal es el comportamiento. Mientras más cercano a 1 sea el valor del coeficiente de correlación, más significativa va a ser la variable en análisis. 
      .col-md-3.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='')


    p(data-aos="fade-right") A continuación, se muestra la gráfica resultante de acuerdo con los datos analizados en el primer paso:
 
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Energía total vs. Kilos totales.</i>
        figure
          img(src='@/assets/curso/temas/tema1/tema1-15.png', alt='')
          figcaption Nota. SENA (2022).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-4.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-16.png', alt='')
      .col-md-8.col-12
        p De la gráfica anterior se puede observar que el valor del coeficiente de determinación para el ejemplo es de 0,7884 con lo cual se puede afirmar que es una variable significativa en un grado medio, por lo tanto, se podría tomar los kilos totales de producción como una variable relevante. Cabe recordar que mientras más cercano a uno (1) sea el valor del coeficiente de determinación R<sup>2</sup>, la variable se vuelve relevante en un grado mayor, y mientras el valor del coeficiente de determinación R<sup>2</sup> se acerca más a cero (0) la variable se convierte en irrelevante para el desempeño energético.
        p La importancia de la identificación de las variables relevantes es que por medio de ellas podremos construir varios de los indicadores de desempeño energético (IDEn) y adicionalmente dan una pauta para determinar de primera mano las variables a las que debo realizar controles operacionales para el sistema de gestión de la energía, debido a su influencia en el desempeño energético.


    .row.mt-4.mb-5.mt-5(data-aos="fade-left")
      .col-12
        span.h4.titulos-tema-1.px-5.py-2 Factores estáticos

    p(data-aos="fade-left") Los factores estáticos son aquellos factores que impactan significativamente en el desempeño energético y no cambian su valor de forma rutinaria. Para la identificación de estos factores se puede utilizar el paso 1 de la metodología para la identificación de variables relevantes. Es importante identificar en la gráfica que en la mayoría del tiempo el valor de factor estático no cambie significativamente, pero en el periodo en que se presente una variación significativa, esta se refleje en el consumo de energía.
  
    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Algunos ejemplos de factor estático son:  
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right 
                | Valor del área o superficie de un edificio.
              li.mb-0
                i.fas.fa-angle-right 
                | Cantidad de luminarias instaladas.
              li.mb-0
                i.fas.fa-angle-right 
                | Consumo de energía de una carga significativa que permanezca siempre encendida con un valor constante.
              li.mb-0
                i.fas.fa-angle-right 
                | Cantidad de motores eléctricos instalados.
              li.mb-0
                i.fas.fa-angle-right 
                | Cantidad de calderas instaladas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Otros  ejemplos de factor estático son:
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right 
                | Longitud de tubería de distribución de vapor.
              li.mb-0
                i.fas.fa-angle-right 
                | Cantidad de productos de una línea de producción que fabrica la empresa de forma constante.
              li.mb-0
                i.fas.fa-angle-right 
                | Potencia instalada de equipos consumidores de energía.
              li.mb-0
                i.fas.fa-angle-right 
                | Nivel de ocupación constante en edificios.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 A manera de ejemplo
            p En un banco que funciona en varios edificios se obtuvo como resultado de una auditoría energética que debido al consumo de electricidad en la iluminación del edificio No. 1 se considera como uso significativo de la energía. La empresa ha determinado que el límite para el control de este USE es de nivel Sistema, y adicionalmente considera que se puede evaluar la influencia del área iluminada en el consumo de energía. 
            p De acuerdo con lo anterior, se procede a realizar el primer paso para determinar la relación entre el consumo dentro del límite definido y la superficie iluminada del edificio en metros cuadrados, obteniendo los siguientes resultados:
          .col-md-6
            .titulo-sexto.color-acento-contenido
              p.titulo.pb-0.mb-0.text-small <i>Consumo iluminación edificio vs. metros cuadrados iluminados edificio.</i>
            figure
              img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 En la gráfica de tendencias
            p Se puede observar que los metros cuadrados iluminados normalmente no cambian su valor ya que para este caso la superficie es constante. Sin embargo, en el mes de junio se observa que se aumentó la superficie iluminada probablemente por una remodelación, lo cual tuvo como consecuencia el aumento considerable del consumo en la iluminación del edificio No. 1. Como la superficie iluminada no cambia de valor mes a mes, y las remodelaciones no son constantes, se puede considerar que la superficie iluminada del edificio 1 es un factor estático.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              p.titulo.pb-0.mb-0.text-small <i>Tendencia iluminación edificio 1 y superficie edificio 1.</i>
            figure
              img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')


    Separador
    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.5 Recopilación de datos

    p(data-aos="flip-left") Para cada indicador de desempeño energético (IDEn) y línea de base energética (LBEn) a implementar, la organización debe determinar cuáles son los datos que se requieren recolectar y cuáles son las capacidades actuales (medidores, registros y demás que se encuentran en la actualidad) para poder construir el IDEn y poder hacer medición y registro del mismo. 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="flip-right")
      .row.justify-content-center.align-items-center(titulo="Necesidades de medida y registro")
        .col-md-7.mb-4.mb-md-0
          p ● Este mismo ejercicio servirá para identificar las necesidades de medida y registro que necesita la empresa ya sea porque no existen equipos de medición, o porque los equipos de medición existentes no poseen la tecnología de comunicaciones que permite de forma automática la recolección de la información.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-31.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Autonomía de definir")
        .col-md-7.mb-4.mb-md-0
          p ● La organización tiene la autonomía de definir cómo se realizará la recopilación de los datos y si compra medidores o implementa redes de comunicación en una posterior etapa y definirlo como una de las metas dentro del sistema de gestión de la energía. También se debe tener en cuenta dentro de la recopilación de datos, la determinación de la forma en que se va a recolectar la información de las variables relevantes y factores estáticos definidos por la organización.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-32.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Planificación para la recopilación de datos")
        .col-md-7.mb-4.mb-md-0
          p ● Cabe mencionar que la recopilación de datos hace parte de la planificación para la recopilación de datos de la energía como requisito de la norma ISO 50001 explicado en el numeral 1.6. Recopilación de datos de la energía del Componente Formativo Planificación y Mejora Continua del SGEn, por lo tanto, para cada uno de los datos identificados por la organización que deben ser recolectados, deben especificar lo siguiente: 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-33.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Datos especificos")
        .col-md-7.mb-4.mb-md-0
          p.mb-0 - Nombre y descripción del dato a recolectar. 
          p.mb-0 - Fuente de información o lugar donde se recolecta la información. 
          p.mb-0 - Frecuencia de recolección (diaria, semanal, mensual). 
          p.mb-0 - Lugar donde se guardará la información registrada (base de datos, archivo en intranet, etc.). 
          p.mb-0 - Responsable de la recolección y registro. 
          p - ¿Para qué se va a usar el dato recolectado?.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-34.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Retos de las organizaciones frente a la recopilación de datos")
        .col-md-7.mb-4.mb-md-0
          p ● Las empresas y organizaciones generalmente se enfrentan a los siguientes escenarios donde se definen una serie de retos que normalmente se convierten en oportunidades, como puede ser: 
          p Falta de datos en tiempo real por parte de las empresas comercializadoras de energía.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-35.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Empresas pequeñas")
        .col-md-7.mb-4.mb-md-0
          p ● En las empresas pequeñas normalmente el consumo de la energía se registra a través de la factura de energía que llega posterior al mes de consumo registrado. Frente a esta problemática, se puede consultar con los comercializadores de energía la posibilidad de instalar un medidor con comunicaciones o también que la propia organización adquiera un medidor y lo instale en la frontera donde se presta el servicio cumpliendo con la normativa.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-36.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Falta de datos para las variables relevantes")
        .col-md-7.mb-4.mb-md-0
          p ● Falta de datos para las variables relevantes: se sugiere evaluar la adquisición de sensores que permitan medir y registrar los datos, en lugar de depender de mediciones temporales con equipos portátiles durante la auditoría energética. 
          p La falta de datos de consumo energético interno puede resolverse mediante la adquisición e instalación de submedidores para subdividir el consumo por áreas y equipos dentro de la organización. Esto permite obtener información más precisa y relevante sobre los usos significativos de la energía. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-37.png', alt='')
      .row.justify-content-center.align-items-center(titulo="La calidad de los datos")
        .col-md-7.mb-4.mb-md-0
          p ● La calidad de los datos es crucial para tomar decisiones acertadas. Para garantizar precisión, las organizaciones deben implementar planes de mantenimiento, calibración y verificación de equipos de medida. Se puede ahorrar costos calibrando un equipo como referencia para verificar otros equipos similares internamente.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-38.png', alt='')



    Separador
    #t_1_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.6 Establecimiento de los IDEn

    p(data-aos="flip-left") Para el establecimiento de los IDEn se debe revisar la siguiente información:

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-8.col-12
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right 
            | Resultados de la revisión energética.
          li.mb-0
            i.fas.fa-angle-right 
            | Caracterización de los usos y consumo de la energía.
          li.mb-0
            i.fas.fa-angle-right 
            | Identificación y caracterización de los usos significativos de la energía (USE).
          li.mb-0
            i.fas.fa-angle-right 
            | Objetivos y metas energéticas.
          li.mb-0
            i.fas.fa-angle-right 
            | Acciones de mejora para el desempeño energético.
      .col-md-4.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-21.png', alt='')


    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            h4 Los IDEn se debe establecer de tal forma que sus valores permitan:
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right 
                | La definición de metas para el desempeño energético de los equipos, procesos, sistemas, edificios y demás definidos por la organización dentro del alcance del sistema de gestión de la energía.
              li.mb-0
                i.fas.fa-angle-right 
                | Ser comparados periódicamente de tal forma que la organización pueda evidenciar los cambios en el desempeño energético y el cumplimiento de las metas propuestas.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/tema1-22.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p A continuación, se describen algunos conceptos que se deben tener en cuenta a la hora de establecer los IDEn:
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right 
                | #[b Determinación de los usuarios de los indicadores de desempeño energético (IDEn):]
            p #[b 1.] En las organizaciones existen varios niveles como por ejemplo gerencial, administrativo, operacional, mantenimiento, etc, por lo tanto se debe realizar la identificación del personal que va a utilizar los resultados de los IDEn con el fin de determinar sus necesidades y asegurar que la información que brinda cada IDEn sea entendible por el usuario.
            p #[b 2.] Por ejemplo, probablemente a la alta dirección le interese establecer un IDEn que permita relacionar el consumo total de la planta o empresa con la producción como medida del nivel de competitividad, pero poco le puede interesar un IDEn que relacione el consumo de energía de un motor con respecto al número de paradas no programadas de planta. Este último IDEn a pesar de no ser de interés para la alta dirección, es de vital importancia para el área de mantenimiento de la empresa.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-23.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p #[b De acuerdo con la norma ISO 50001, a continuación se describen algunos de los usuarios más comunes identificados en las organizaciones:]
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right 
                | #[strong Alta dirección:] generalmente los IDEn de interés para este tipo de usuarios son los que involucren el desempeño de toda la organización en términos de competitividad y disminución de costos totales, más no de sectores específicos.
              li.mb-0
                i.fas.fa-angle-right 
                | #[strong Gerentes de planta o área específica:] generalmente los IDEn de interés para este tipo de usuarios son los mismos de la alta dirección, sumado a los que involucran el desempeño energético de los usos significativos de la energía, los niveles de producción y mantenimiento.
              li.mb-0
                i.fas.fa-angle-right 
                | #[strong Personal de mantenimiento y operaciones:] los IDEn de interés para este tipo de usuarios son los relacionados sólo al área específica que tienen a su cargo.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-24.png', alt='')



    .row.mt-4.mb-5.mt-5(data-aos="fade-left")
      .col-12
        span.h4.titulos-tema-1.px-5.py-2 Características específicas de los indicadores de desempeño energético (IDEn)

    p(data-aos="fade-left") La norma ISO 50001 establece los siguientes tipos de IDEn y los casos en donde se debería usar cada uno de la siguiente manera:

  
    .tarjeta.color-primario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/descargar.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small La norma ISO 50001 establece los siguientes tipos de IDEn y los casos en donde se debería usar cada uno de la siguiente manera. Diríjase al Anexo 3 - Tipos de IDEn según norma ISO 50001.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_Tipos_de_IDEn_segun_norma_ISO_50001.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    //- .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
    //-   .col-md-12.col-12
    //-     .tabla-a.color-acento-botones.mb-5(data-aos="fade-right")
    //-       table
    //-         caption Nota. Adaptado Instituto Colombiano de Normas Técnicas y Certificación (2017) y Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019).
    //-         thead
    //-           tr
    //-             th Tipo de indicador de desempeño energético
    //-             th Utilidad
    //-             th Ejemplo
    //-             th Notas acerca del tipo de indicador
    //-         tbody
    //-           tr
    //-             td Medida del valor energético.
    //-             td 
    //-               ul.lista-ul.mb-2
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Medida de la reducción en el consumo de la energía.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Medida de reducción de costos energéticos.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Se puede utilizar en edificios de oficinas, centros comerciales y grandes superficies donde la temperatura exterior no varíe significativamente, o se requiera comparar con valores de consumo con periodos anteriores con las mismas condiciones climáticas.
    //-             td 
    //-               ul.lista-ul.mb-2
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Consumo de energía mensual en caldera No. 1. [kWh/mes].
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Consumo de electricidad mensual total de la planta. [kWh/mes].
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Consumo de biomasa por mes [ton/mes].
    //-             td 
    //-               ul.lista-ul.mb-2
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | No permite identificar la eficiencia energética.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Se pueden presentar errores en la interpretación al no tener en cuenta la influencia de las variables relevantes y los factores estáticos.
    //-           tr
    //-             td Cociente de valores medidos.
    //-             td 
    //-               ul.lista-ul.mb-2
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Medición de la eficiencia energética de equipos, sistemas o procesos que se relacionan con una única variable relevante.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Comparación entre varias instalaciones. Por ejemplo, cuando una organización tiene varias oficinas en una misma ciudad o en diferentes ciudades donde se requiera comparar el desempeño.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Cumplimiento de requisitos legales.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Es el más utilizado a nivel industrial y comercial.
    //-             td
    //-               ul.lista-ul.mb-2
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | kWh / tonelada de producto.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   |  Gigajulios / unidad de producto.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Consumo de iluminación kWh / metro cuadrado.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Eficiencia de una caldera. [%]
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Consumo de energía / ocupación.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Consumo de energía / nivel de carga.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Galones de combustible / kilómetro recorrido. 
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Consumo kWh / unidades vendidas.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | kWh / número de producto.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Cantidad de energía en refrigeración / cantidad de producto almacenado.
    //-             td
    //-               ul.lista-ul.mb-2
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Puede presentar errores de interpretación cuando una empresa produce gran variedad de productos de diferentes características.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Se requiere que la variable relevante tenga una correlación alta con el consumo de energía.
    //-           tr 
    //-             td Modelo estadístico.
    //-             td 
    //-               ul.lista-ul.mb-2
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Sistemas, equipos o procesos con más de una variable relevante.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Elaboración de modelos para predicción de consumos futuros.
    //-             td 
    //-               p Por lo general se utiliza el modelo de regresión lineal con múltiples variables:
    //-               p E = m<sub>1</sub> * V<sub>1</sub> + m<sub>2</sub> * V<sub>2</sub>
    //-               p +...+m<sub>n</sub> * V<sub>n</sub> + E<sub>o</sub>
    //-               p donde 
    //-               p E = consumo de energía 
    //-               p m<sub>n</sub> = constantes del modelo 
    //-               p E<sub>o</sub> = constante
    //-               p V<sub>n</sub> = variable significativa
    //-             td
    //-               ul.lista-ul.mb-2
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | El cálculo tiene mayor grado de complejidad que los tipos de IDEn anteriores.
    //-                 li.mb-0
    //-                   i.fas.fa-angle-right 
    //-                   | Se requiere que las variables relevantes tengan una correlación alta con el consumo de energía.








    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-09.png', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    modal1: false,
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
