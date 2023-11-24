const data = [
  {
    llaveProceso: '2530740030012017025000',
    numero      : 1,
    tipoProceso : 'HIPOTECARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 39581581,
      direccion: 'mz 7 cs 6 ub hda/ girardot',
      email    : '34|',
      tel      : {
        fijo   : null,
        celular: null,
      },
      primerNombre   : 'alexandra',
      segundoNombre  : 'milena',
      primerApellido : 'jimenez',
      segundoApellido: 'aguilar',
    },
    demanda: {
      fechaPresentacion      : '2017-05-30T00:00:00.000Z',
      mandamientoPago        : null,
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '2530740030012017025000',
      capitalAdeudado        : 40589422,
      tipoProceso            : 'HIPOTECARIO',
      etapaProcesal          : 'SENTENCIA',
      municipio              : 'GIRARDOT',
      obligacion             : [
        '2273 320145954'
      ],
      radicado         : '2017 - 00250',
      vencimientoPagare: [
        '2026-11-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    cc        : 39581581,
    idProcesos: null,
  },
  {
    llaveProceso: '11001310304320170055400',
    numero      : 2,
    tipoProceso : 'HIPOTECARIO',
    category    : 'Terminados',
    deudor      : {
      cedula: 1026259010,
      direccion:
        'diagonal 77 b no 119 a-73  interior 1 apartamento 602',
      email: 'edwin06cuervo@hotmail.com',
      tel  : {
        fijo   : 3935996,
        celular: 3142064177,
      },
      primerNombre   : 'edwin',
      segundoNombre  : 'andres',
      primerApellido : 'cuervo',
      segundoApellido: 'verdugo',
    },
    demanda: {
      fechaPresentacion      : '2017-10-27T00:00:00.000Z',
      mandamientoPago        : '2018-02-13T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-09-08T00:00:00.000Z',
      expediente             : '11001310304320170055400',
      capitalAdeudado        : 162012163,
      tipoProceso            : 'HIPOTECARIO',
      etapaProcesal          : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : [
        '1930085200  /190184  /377813469298997',
        '4513070079097239  /5303714507623618',
      ],
      radicado         : '2017 - 00554',
      vencimientoPagare: [
        '2018-09-01T05:00:00.000Z'
      ],
      departamento: 'BOGOTÁ',
      juzgados    : [],
    },
    codeudor: {
      cedula   : 1070587091,
      direccion: 'CARRERA 8 BIS No 151-19 APARTAMENTO 105',
      nombre   : 'diana lorena sanchez jimenez',
      telefono : 2165272,
    },
    cc        : 1026259010,
    idProcesos: [
      52281244
    ],
    procesos: [
      {
        idProceso           : 52281244,
        idConexion          : 310,
        llaveProceso        : '11001310304320170055400',
        fechaProceso        : '2017-10-31T00:00:00',
        fechaUltimaActuacion: '2021-09-20T00:00:00',
        despacho:
          'JUZGADO 002 CIVIL DEL CIRCUITO DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: EDWIN ANDRES CUERVO VERDUGO Y OTRA | Demandado: DIANA LORENA SANCHEZ JIMENEZ Y OTRO ',
        esPrivado: false,
        cantFilas: -1,
      },
    ],
    fecha          : '2021-09-20T05:00:00.000Z',
    ultimaActuacion: {
      idRegActuacion: 978518214,
      llaveProceso  : '11001310304320170055400',
      consActuacion : 57,
      fechaActuacion: '2021-09-20T00:00:00',
      actuacion     : 'Inventario',
      anotacion     : 'PROCESO TERMINADO PASA PARA ARCHIVO',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2021-09-20T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 57,
    },
  },
  {
    llaveProceso: '25126408900220170071500',
    numero      : 3,
    tipoProceso : 'PRENDARIO',
    category    : 'Terminados',
    deudor      : {
      cedula: 1018441487,
      direccion:
        'carrera 2 e no 1 a  - 60 casa 126 - cajica',
      email: null,
      tel  : {
        fijo   : null,
        celular: null,
      },
      primerNombre   : 'maria',
      segundoNombre  : 'claudia',
      primerApellido : 'reatiga',
      segundoApellido: 'urrea',
    },
    demanda: {
      fechaPresentacion      : '2018-09-28T00:00:00.000Z',
      mandamientoPago        : '2018-02-02T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-09-18T00:00:00.000Z',
      expediente             : '25126408900220170071500',
      capitalAdeudado        : 33175721,
      tipoProceso            : 'PRENDARIO',
      etapaProcesal          : 'NOTIFICACION',
      municipio              : 'CAJICA',
      obligacion             : [
        12204943
      ],
      radicado         : '2017 - 00715',
      vencimientoPagare: [
        '2017-09-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    cc        : 1018441487,
    idProcesos: [],
    procesos  : [],
  },
  {
    llaveProceso: '11001400305320170072000',
    numero      : 4,
    tipoProceso : 'HIPOTECARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 93437973,
      direccion: 'carrera 104 no. 12  b-94 bogota',
      email    : 'dipsonsanchez16@g0mail.com',
      tel      : {
        fijo   : null,
        celular: 3182165543,
      },
      primerNombre   : 'dipson',
      segundoNombre  : 'eusebio',
      primerApellido : 'sanchez',
      segundoApellido: 'castiblanco',
    },
    demanda: {
      fechaPresentacion      : '2017-05-30T00:00:00.000Z',
      mandamientoPago        : null,
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '11001400305320170072000',
      capitalAdeudado        : 29925624,
      tipoProceso            : 'HIPOTECARIO',
      etapaProcesal          : null,
      municipio              : 'BOGOTA',
      obligacion             : [
        '2273 320158101'
      ],
      radicado         : '2017 - 00720',
      vencimientoPagare: [
        '2022-11-01T05:00:00.000Z'
      ],
      departamento: 'BOGOTÁ',
      juzgados    : [],
    },
    cc        : 93437973,
    idProcesos: [
      11997693
    ],
    procesos: [
      {
        idProceso           : 11997693,
        idConexion          : 261,
        llaveProceso        : '11001400305320170072000',
        fechaProceso        : '2017-06-01T00:00:00',
        fechaUltimaActuacion: '2018-06-14T00:00:00',
        despacho            : 'JUZGADO 053 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento        : 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: DIPSO EUSEBIO  SANCHEZ CASTIBLANCO ',
        esPrivado: false,
        cantFilas: -1,
      },
    ],
    fecha          : '2018-06-14T05:00:00.000Z',
    ultimaActuacion: {
      idRegActuacion: 155319973,
      llaveProceso  : '11001400305320170072000',
      consActuacion : 19,
      fechaActuacion: '2018-06-14T00:00:00',
      actuacion     : 'Archivo Definitivo',
      anotacion     : 'PAQUETE 1082 T ',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2018-06-14T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 19,
    },
  },
  {
    llaveProceso: '25322418900120170016800',
    numero      : 5,
    tipoProceso : 'HIPOTECARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 20645940,
      direccion: 'carrera 9 no. 2-03 guasca',
      email    : 'patoavella8210@hotmail.com',
      tel      : {
        fijo   : null,
        celular: 3217662673,
      },
      primerNombre   : 'fany',
      segundoNombre  : 'patricia',
      primerApellido : 'avellaneda',
      segundoApellido: 'tovar',
    },
    demanda: {
      fechaPresentacion      : '2017-06-05T00:00:00.000Z',
      mandamientoPago        : '2017-10-05T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '25322418900120170016800',
      capitalAdeudado        : 25184150,
      tipoProceso            : 'HIPOTECARIO',
      etapaProcesal          : null,
      municipio              : 'GUASCA',
      obligacion             : [
        '2273 320172490'
      ],
      radicado         : '2017 - 00168',
      vencimientoPagare: [
        '1934-02-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    cc        : 20645940,
    idProcesos: [],
    procesos  : [],
  },
  {
    llaveProceso: '11001400307620170044400',
    numero      : 6,
    tipoProceso : 'HIPOTECARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 79645559,
      direccion: 'calle 6 bis a 90 a-80 torre 7 apto 203',
      email    : null,
      tel      : {
        fijo   : null,
        celular: 3118469698,
      },
      primerNombre   : 'francisco',
      segundoNombre  : 'montaña',
      primerApellido : 'quesada',
      segundoApellido: null,
    },
    demanda: {
      fechaPresentacion      : '2017-05-30T00:00:00.000Z',
      mandamientoPago        : null,
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '11001400307620170044400',
      capitalAdeudado        : 16313851,
      tipoProceso            : 'HIPOTECARIO',
      etapaProcesal          : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : [
        '2273 320111490'
      ],
      radicado         : '2017 -00444',
      vencimientoPagare: [
        '2008-09-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    codeudor: {
      cedula   : 46374311,
      direccion: 'DIAGONAL 83 N 76 C-22 BOGOTA',
      nombre   : 'maria cristina chaparro piragauta',
      telefono : '4380641//3114720261',
    },
    cc        : 79645559,
    idProcesos: [],
    procesos  : [],
  },
  {
    llaveProceso: '11001310302720170037400',
    numero      : 7,
    tipoProceso : 'PRENDARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 79733852,
      direccion: 'calle 21 bis sur no. 88-58 bogota',
      email    : null,
      tel      : {
        fijo   : null,
        celular: null,
      },
      primerNombre   : 'jose',
      segundoNombre  : 'ricardo',
      primerApellido : 'prieto',
      segundoApellido: 'cruz',
    },
    demanda: {
      fechaPresentacion      : '2017-05-24T00:00:00.000Z',
      mandamientoPago        : null,
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '11001310302720170037400',
      capitalAdeudado        : 134026609,
      tipoProceso            : 'PRENDARIO',
      etapaProcesal          : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : [
        2553057
      ],
      radicado         : '2017 - 00374',
      vencimientoPagare: [
        '2020-04-01T05:00:00.000Z'
      ],
      departamento: 'BOGOTÁ',
      juzgados    : [],
    },
    cc        : 79733852,
    idProcesos: [
      62733402
    ],
    procesos: [
      {
        idProceso           : 62733402,
        idConexion          : 180,
        llaveProceso        : '11001310302720170037400',
        fechaProceso        : '2017-05-25T00:00:00',
        fechaUltimaActuacion: '2022-03-09T00:00:00',
        despacho:
          'JUZGADO 027 CIVIL DEL CIRCUITO DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S. A. | Demandado: JOSE RICARDO PRIETO CRUZ ',
        esPrivado: false,
        cantFilas: -1,
      },
    ],
    fecha          : '2022-03-09T05:00:00.000Z',
    ultimaActuacion: {
      idRegActuacion: 1151407522,
      llaveProceso  : '11001310302720170037400',
      consActuacion : 15,
      fechaActuacion: '2022-03-09T00:00:00',
      actuacion     : 'Archivo Definitivo',
      anotacion     : 'CAJA 65 STICKERS  1002766814',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2022-03-09T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 15,
    },
  },
  {
    llaveProceso: '11001400301420170066700',
    numero      : 8,
    tipoProceso : 'PRENDARIO',
    category    : 'Terminados',
    deudor      : {
      cedula: 79642493,
      direccion:
        'calle 118 no. 18-65 apto 504 anaya el parque bogota',
      email: null,
      tel  : {
        fijo   : null,
        celular: 3106980002,
      },
      primerNombre   : 'jose',
      segundoNombre  : 'wilson',
      primerApellido : 'rojas',
      segundoApellido: 'valdes',
    },
    demanda: {
      fechaPresentacion      : '2017-05-24T00:00:00.000Z',
      mandamientoPago        : null,
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '11001400301420170066700',
      capitalAdeudado        : 25758912,
      tipoProceso            : 'PRENDARIO',
      etapaProcesal          : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : [
        2008124
      ],
      radicado         : '2017 - 00667',
      vencimientoPagare: [
        '2020-04-01T05:00:00.000Z'
      ],
      departamento: 'BOGOTÁ',
      juzgados    : [],
    },
    cc        : 79642493,
    idProcesos: [
      50465740
    ],
    procesos: [
      {
        idProceso           : 50465740,
        idConexion          : 259,
        llaveProceso        : '11001400301420170066700',
        fechaProceso        : '2017-05-25T00:00:00',
        fechaUltimaActuacion: '2017-08-16T00:00:00',
        despacho            : 'JUZGADO 014 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento        : 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: JOSE  WILSON ROJAS VALDES ',
        esPrivado: false,
        cantFilas: -1,
      },
    ],
    fecha          : '2017-08-16T05:00:00.000Z',
    ultimaActuacion: {
      idRegActuacion: 638268360,
      llaveProceso  : '11001400301420170066700',
      consActuacion : 11,
      fechaActuacion: '2017-08-16T00:00:00',
      actuacion     : 'Retiro de demanada',
      anotacion     : 'retiro de demanda apoderada',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2017-08-16T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 11,
    },
  },
  {
    llaveProceso: '1100140030442017099800',
    numero      : 9,
    tipoProceso : 'SINGULAR',
    category    : 'Terminados',
    deudor      : {
      cedula   : 1020731500,
      direccion: 'diagonal 77  b no 19 a - 73',
      email    : 'dany_aleja@hotmail.com',
      tel      : {
        fijo   : 731500,
        celular: 1020731500,
      },
      primerNombre   : 'daniela',
      segundoNombre  : 'alejandra',
      primerApellido : 'cardenas',
      segundoApellido: 'rodriguez',
    },
    demanda: {
      fechaPresentacion      : '2017-09-25T00:00:00.000Z',
      mandamientoPago        : '2017-10-20T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-09-19T00:00:00.000Z',
      expediente             : '1100140030442017099800',
      capitalAdeudado        : 78071921,
      tipoProceso            : 'SINGULAR',
      etapaProcesal          : 'SENTENCIA',
      municipio              : 'BOGOTA',
      obligacion             : [
        '2290099308    /2170086682'
      ],
      radicado         : '2017 - 00998',
      vencimientoPagare: [
        '2015-01-01T05:00:00.000Z',
        '2021-01-01T05:00:00.000Z',
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    cc        : 1020731500,
    idProcesos: null,
  },
  {
    llaveProceso: '11001418900320170090900',
    numero      : 10,
    tipoProceso : 'PRENDARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 52396019,
      direccion: 'carrera 109a no. 148-91 bogota',
      email    : null,
      tel      : {
        fijo   : null,
        celular: 3202705987,
      },
      primerNombre   : 'marina',
      segundoNombre  : 'morales',
      primerApellido : 'hernandez',
      segundoApellido: null,
    },
    demanda: {
      fechaPresentacion      : '2017-05-24T00:00:00.000Z',
      mandamientoPago        : null,
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '11001418900320170090900',
      capitalAdeudado        : 15946341,
      tipoProceso            : 'PRENDARIO',
      etapaProcesal          : 'ADMISION',
      municipio              : 'SUBA',
      obligacion             : [
        2405037
      ],
      radicado         : '2017 - 00909',
      vencimientoPagare: [
        '2020-04-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    cc        : 52396019,
    idProcesos: [],
    procesos  : [],
  },
  {
    llaveProceso: '11001400303720170083900',
    numero      : 11,
    tipoProceso : 'PRENDARIO',
    category    : 'LiosJuridicos',
    deudor      : {
      cedula   : 80743147,
      direccion: 'cra 18 h no. 76 a-53 sur bogota',
      email    : 'sandrapatriciajoya-2545@hotmail.com',
      tel      : {
        fijo   : null,
        celular: 3209229120,
      },
      primerNombre   : 'javier',
      segundoNombre  : 'romero',
      primerApellido : 'reyes',
      segundoApellido: null,
    },
    demanda: {
      fechaPresentacion      : '2018-09-05T00:00:00.000Z',
      mandamientoPago        : null,
      entregaGarantiasAbogado: '2017-06-07T00:00:00.000Z',
      expediente             : '11001400303720170083900',
      capitalAdeudado        : 21596919,
      tipoProceso            : 'PRENDARIO',
      etapaProcesal:
        'EL 12-06-2018 EL JUZGADO DECRETA TERMINACION PROCESO POR PAGO CUOTAS EN MORA //EL 4-08-2018 SE DEVOLVIERON GARANTIAS A AECSA S.A. // EL JUEZ NO ACCEDIO A SOLICITUD ENTREGA DESEMBARGO PARTE ACTORA 1-02-2019 SE ARCHIVA PROCESO CAJA 240 // PAGAR DESARCHIVE Y REQUERIR AL JUEZ PARA QUE DE CUMPLIMIENTO A ENTREGA DE OFICIO DADO QUE PERSISTE EL EMBARGO A PESAR QUE EL CLIENTE ESTA AL DIA',
      municipio : 'BOGOTA',
      obligacion: [
        '12313737//377815899589556',
        4513070106144855,
      ],
      radicado         : '2017 - 00839',
      vencimientoPagare: [
        '2017-08-01T05:00:00.000Z'
      ],
      departamento: 'BOGOTÁ',
      juzgados    : [],
    },
    cc        : 80743147,
    idProcesos: [
      50508570
    ],
    procesos: [
      {
        idProceso           : 50508570,
        idConexion          : 259,
        llaveProceso        : '11001400303720170083900',
        fechaProceso        : '2017-06-15T00:00:00',
        fechaUltimaActuacion: '2023-07-10T00:00:00',
        despacho:
          'JUZGADO 014 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: JAVIER ROMERO REYES ',
        esPrivado: false,
        cantFilas: -1,
      },
    ],
    fecha          : '2023-07-10T05:00:00.000Z',
    ultimaActuacion: {
      idRegActuacion: 1804706930,
      llaveProceso  : '11001400303720170083900',
      consActuacion : 48,
      fechaActuacion: '2023-07-10T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion     : 'SE ENVIA AL AREA DE OFICIOS HENRYBERNAL',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2023-07-10T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 47,
    },
  },
  {
    llaveProceso: '25269400300220180015800',
    numero      : 12,
    tipoProceso : 'HIPOTECARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 11436632,
      direccion: 'calle 2 e 1 a-85 sur facatativa',
      email    : 'triracso25@hotmail.com',
      tel      : {
        fijo   : null,
        celular: 3214791915,
      },
      primerNombre   : 'oscar',
      segundoNombre  : 'manuel',
      primerApellido : 'triviño',
      segundoApellido: 'garcia',
    },
    demanda: {
      fechaPresentacion      : '2017-05-30T00:00:00.000Z',
      mandamientoPago        : '2017-09-18T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '25269400300220180015800',
      capitalAdeudado        : null,
      tipoProceso            : 'HIPOTECARIO',
      etapaProcesal          : 'APELACION',
      municipio              : 'FACATATIVA',
      obligacion             : [
        2273320140425
      ],
      radicado         : '2017 - 00488/ 2018 - 00158',
      vencimientoPagare: [
        '2026-07-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    cc        : 11436632,
    idProcesos: [],
    procesos  : [],
  },
  {
    llaveProceso: '25867418900120170002000',
    numero      : 13,
    tipoProceso : 'SINGULAR',
    category    : 'Terminados',
    deudor      : {
      cedula   : 447028,
      direccion: 'finca el hospicio viani',
      email    : null,
      tel      : {
        fijo   : null,
        celular: 3106890300,
      },
      primerNombre   : 'pascual',
      segundoNombre  : 'ortega',
      primerApellido : 'enciso',
      segundoApellido: null,
    },
    demanda: {
      fechaPresentacion      : '2017-05-31T00:00:00.000Z',
      mandamientoPago        : '2007-06-02T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '25867418900120170002000',
      capitalAdeudado        : 23326974,
      tipoProceso            : 'SINGULAR',
      etapaProcesal          : 'NOTIFICACION',
      municipio              : 'VIANI',
      obligacion             : [
        3720087139
      ],
      radicado         : '2017 - 00020',
      vencimientoPagare: [
        '2018-07-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    codeudor: {
      cedula   : 21094922,
      direccion: 'FINCA EL HOSPICIO VIANI',
      nombre   : 'carmen julia mora rodriguez',
      telefono : 3132796326,
    },
    cc        : 447028,
    idProcesos: [],
    procesos  : [],
  },
  {
    llaveProceso: '25740418900120170028400',
    numero      : 14,
    tipoProceso : 'HIPOTECARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 52441656,
      direccion: 'transversal 6 b  no 12 a - 18   sibate',
      email    : 'elmisosro1@hotmailcom',
      tel      : {
        fijo   : 5295780,
        celular: 3133743400,
      },
      primerNombre   : 'elsa',
      segundoNombre  : 'milena',
      primerApellido : 'sosa',
      segundoApellido: [
        '',
        'romero'
      ],
    },
    demanda: {
      fechaPresentacion      : '2017-09-27T00:00:00.000Z',
      mandamientoPago        : null,
      entregaGarantiasAbogado: '2017-09-19T00:00:00.000Z',
      expediente             : '25740418900120170028400',
      capitalAdeudado        : 15987259,
      tipoProceso            : 'HIPOTECARIO',
      etapaProcesal          : null,
      municipio              : 'SIBATE',
      obligacion             : [
        4517
      ],
      radicado         : '2017 - 00284',
      vencimientoPagare: [
        '2023-03-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    cc        : 52441656,
    idProcesos: [],
    procesos  : [],
  },
  {
    llaveProceso: '11001400307220170065400',
    numero      : 15,
    tipoProceso : 'PRENDARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 1098678636,
      direccion: 'carrera 78 f 50 interior 2 ap/ ca 101',
      email    : null,
      tel      : {
        fijo   : null,
        celular: 3155112901,
      },
      primerNombre   : 'silvia',
      segundoNombre  : 'susana',
      primerApellido : 'sierra',
      segundoApellido: 'castañeda',
    },
    demanda: {
      fechaPresentacion      : '2017-05-24T00:00:00.000Z',
      mandamientoPago        : '2017-06-01T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '11001400307220170065400',
      capitalAdeudado        : 24792093,
      tipoProceso            : 'PRENDARIO',
      etapaProcesal          : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : [
        2450966
      ],
      radicado         : '2017 - 00654',
      vencimientoPagare: [],
      departamento     : 'BOGOTÁ',
      juzgados         : [],
    },
    codeudor: {
      nombre: 0,
    },
    cc        : 1098678636,
    idProcesos: [
      50468310
    ],
    procesos: [
      {
        idProceso           : 50468310,
        idConexion          : 259,
        llaveProceso        : '11001400307220170065400',
        fechaProceso        : '2017-05-26T00:00:00',
        fechaUltimaActuacion: '2020-01-15T00:00:00',
        despacho            : 'JUZGADO 072 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento        : 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: SILVIA SUSANA SIERRA CASTAÑEDA ',
        esPrivado: false,
        cantFilas: -1,
      },
    ],
    fecha          : '2020-01-15T05:00:00.000Z',
    ultimaActuacion: {
      idRegActuacion: 945315380,
      llaveProceso  : '11001400307220170065400',
      consActuacion : 36,
      fechaActuacion: '2020-01-15T00:00:00',
      actuacion     : 'Entrega Desglose',
      anotacion     : null,
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2020-01-15T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 36,
    },
  },
  {
    llaveProceso: '11001400300320170088400',
    numero      : 16,
    tipoProceso : 'PRENDARIO',
    category    : 'Bancolombia',
    deudor      : {
      cedula: 1077969975,
      direccion:
        'carrera 77b no 68b - 19 barrio santa helenita',
      email: 'yess_Id@hotmail.com',
      tel  : {
        fijo   : null,
        celular: 3212337597,
      },
      primerNombre   : 'yesid',
      segundoNombre  : 'albeiro',
      primerApellido : 'ramos',
      segundoApellido: null,
    },
    demanda: {
      fechaPresentacion      : '2017-05-24T00:00:00.000Z',
      mandamientoPago        : '2017-06-02T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '11001400300320170088400',
      capitalAdeudado        : 33791309,
      tipoProceso            : 'PRENDARIO',
      etapaProcesal          : 'EMPLAZAMIENTO',
      municipio              : 'BOGOTA',
      obligacion             : [
        2530444
      ],
      radicado         : '2017 - 00884',
      vencimientoPagare: [
        '2020-05-01T05:00:00.000Z'
      ],
      departamento: 'BOGOTÁ',
      juzgados    : [],
    },
    cc        : 1077969975,
    idProcesos: [
      50468620,
      113956611
    ],
    procesos: [
      {
        idProceso           : 50468620,
        idConexion          : 259,
        llaveProceso        : '11001400300320170088400',
        fechaProceso        : '2017-05-26T00:00:00',
        fechaUltimaActuacion: '2023-11-21T00:00:00',
        despacho            : 'JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento        : 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: YESID ALBEIRO RAMOS ',
        esPrivado: false,
        cantFilas: -1,
      },
      {
        idProceso           : 113956611,
        idConexion          : 320,
        llaveProceso        : '11001400300320170088400',
        fechaProceso        : '2017-05-24T00:00:00',
        fechaUltimaActuacion: null,
        despacho            : 'JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento        : 'BOGOTÁ',
        sujetosProcesales:
          'Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: YESID ALBEIRO RAMOS  (Emplazado) | Defensor Publico: MARIA HELENA SUAREZ GARCIA ',
        esPrivado: false,
        cantFilas: -1,
      },
    ],
    fecha          : '2023-11-21T05:00:00.000Z',
    ultimaActuacion: {
      idRegActuacion: 1936452500,
      llaveProceso  : '11001400300320170088400',
      consActuacion : 104,
      fechaActuacion: '2023-11-21T00:00:00',
      actuacion     : 'Recepción memorial',
      anotacion     : 'RESPUESTA TRANSUNION ',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2023-11-21T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 104,
    },
  },
  {
    llaveProceso: '25754418900220170048000',
    numero      : 17,
    tipoProceso : 'HIPOTECARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 52953923,
      direccion: 'calle 17 no. 24 c-17 sur bogota',
      email    : 'importex1112@gmail.com',
      tel      : {
        fijo   : null,
        celular: null,
      },
      primerNombre   : 'yedsy',
      segundoNombre  : 'carolay',
      primerApellido : 'rojas',
      segundoApellido: 'gamboa',
    },
    demanda: {
      fechaPresentacion      : '2017-05-30T00:00:00.000Z',
      mandamientoPago        : '2017-08-22T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '25754418900220170048000',
      capitalAdeudado        : 13684674,
      tipoProceso            : 'HIPOTECARIO',
      etapaProcesal          : 'NOTIFICACION',
      municipio              : 'SOACHA',
      obligacion             : [
        '2273 320131950'
      ],
      radicado         : '2017 - 00480',
      vencimientoPagare: [
        '2025-09-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    cc        : 52953923,
    idProcesos: [],
    procesos  : [],
  },
  {
    llaveProceso: '25175400300320170026900',
    numero      : 18,
    tipoProceso : 'PRENDARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 79205977,
      direccion: 'cra 4 no. 5-51 chía',
      email    : null,
      tel      : {
        fijo   : null,
        celular: null,
      },
      primerNombre   : 'luis',
      segundoNombre  : 'enrique',
      primerApellido : 'acosta',
      segundoApellido: 'chavarria',
    },
    demanda: {
      fechaPresentacion      : '2017-05-30T00:00:00.000Z',
      mandamientoPago        : '2017-07-10T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '25175400300320170026900',
      capitalAdeudado        : 67068123,
      tipoProceso            : 'PRENDARIO',
      etapaProcesal          : 'AUDIENCIA',
      municipio              : 'CHIA',
      obligacion             : [
        12645083,
        12340733
      ],
      radicado         : '2017 - 00269',
      vencimientoPagare: [
        '2017-04-01T05:00:00.000Z'
      ],
      departamento: 'CUNDINAMARCA',
      juzgados    : [],
    },
    cc        : 79205977,
    idProcesos: [],
    procesos  : [],
  },
  {
    llaveProceso: '11001400302120170175500',
    numero      : 19,
    tipoProceso : 'HIPOTECARIO',
    category    : 'Terminados',
    deudor      : {
      cedula: 80001905,
      direccion:
        'calle 42 sur no 87 c -18  interior 2 apartamento 203',
      email: 'eliacid@hotmail.com',
      tel  : {
        fijo   : null,
        celular: null,
      },
      primerNombre   : 'eliacid',
      segundoNombre  : 'chaves',
      primerApellido : 'obando',
      segundoApellido: null,
    },
    demanda: {
      fechaPresentacion      : null,
      mandamientoPago        : null,
      entregaGarantiasAbogado: '2017-09-19T00:00:00.000Z',
      expediente             : '11001400302120170175500',
      capitalAdeudado        : 1539150811,
      tipoProceso            : 'HIPOTECARIO',
      etapaProcesal          : null,
      municipio              : 'BOGOTA',
      obligacion             : [
        103560
      ],
      radicado         : '2017 - 01755',
      vencimientoPagare: [
        '2022-12-01T05:00:00.000Z'
      ],
      departamento: 'BOGOTÁ',
      juzgados    : [],
    },
    codeudor: {
      cedula   : 52171586,
      direccion: 'CARRERA 88 C No 42 - 20 SUR',
      nombre   : 'sandra patricia rodriiguez rodrriiguez',
      telefono : 4062058,
    },
    cc        : 80001905,
    idProcesos: [
      50869770
    ],
    procesos: [
      {
        idProceso           : 50869770,
        idConexion          : 259,
        llaveProceso        : '11001400302120170175500',
        fechaProceso        : '2017-11-24T00:00:00',
        fechaUltimaActuacion: '2018-02-01T00:00:00',
        despacho            : 'JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento        : 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A | Demandado: ELIACID CHAVES OBANDO ',
        esPrivado: false,
        cantFilas: -1,
      },
    ],
    fecha          : '2018-02-01T05:00:00.000Z',
    ultimaActuacion: {
      idRegActuacion: 683021000,
      llaveProceso  : '11001400302120170175500',
      consActuacion : 8,
      fechaActuacion: '2018-02-01T00:00:00',
      actuacion     : 'Retiro Demanda Rechazada',
      anotacion     : 'POR DIANA PATRICIA TRIANA SUAREZ.',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2018-02-01T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 8,
    },
  },
  {
    llaveProceso: '11001400302220170048300',
    numero      : 20,
    tipoProceso : 'PRENDARIO',
    category    : 'Terminados',
    deudor      : {
      cedula   : 94482258,
      direccion: 'carrera 72 r no. 37-90 sur',
      email    : 'sotocolombiano@gmail.com',
      tel      : {
        fijo   : null,
        celular: null,
      },
      primerNombre   : 'andres',
      segundoNombre  : 'mauricio',
      primerApellido : 'fernandez',
      segundoApellido: [
        'de',
        'soto',
        'dominguez'
      ],
    },
    demanda: {
      fechaPresentacion      : '2017-05-24T00:00:00.000Z',
      mandamientoPago        : '2017-06-09T00:00:00.000Z',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      expediente             : '11001400302220170048300',
      capitalAdeudado        : 58957417,
      tipoProceso            : 'PRENDARIO',
      etapaProcesal          : null,
      municipio              : 'BOGOTA',
      obligacion             : [
        2551197
      ],
      radicado         : '2017 - 00483',
      vencimientoPagare: [
        '2020-04-01T05:00:00.000Z'
      ],
      departamento: 'BOGOTÁ',
      juzgados    : [],
    },
    cc        : 94482258,
    idProcesos: [
      50466490
    ],
    procesos: [
      {
        idProceso           : 50466490,
        idConexion          : 259,
        llaveProceso        : '11001400302220170048300',
        fechaProceso        : '2017-05-25T00:00:00',
        fechaUltimaActuacion: '2017-10-13T00:00:00',
        despacho            : 'JUZGADO 022 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento        : 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: ANDRES  MAURICIO  FERNANDEZ  DE SOTO  DOMINGUEZ ',
        esPrivado: false,
        cantFilas: -1,
      },
    ],
    fecha          : '2017-10-13T05:00:00.000Z',
    ultimaActuacion: {
      idRegActuacion: 690458400,
      llaveProceso  : '11001400302220170048300',
      consActuacion : 15,
      fechaActuacion: '2017-10-13T00:00:00',
      actuacion     : 'Retiro demanda',
      anotacion     : 'maria helena suarez',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2017-10-13T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 15,
    },
  },
];

const result = Object.groupBy(
  data, (
    {

    }
  ) => {
    return category;
  }
);


console.log(
  result
);