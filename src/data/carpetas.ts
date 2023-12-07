import { CarpetaRaw } from '../types/carpetas';

const Carpetas: CarpetaRaw[] = [
  {
    numero  : 1
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39581581
      , nombre   : 'ALEXANDRA MILENA JIMENEZ AGUILAR'
      , telefono : 8361704
      , email    : '34|'
      , direccion: 'MZ 7 CS 6 UB HDA/ GIRARDOT',
    }

    , demanda: {
      vencimientoPagare: '28/11/2026'
      , obligacion       : {
        A: '2273 320145954',
      }
      , capitalAdeudado        : '$ 40.589.422'
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GIRARDOT'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00250'
      , llaveProceso           : '2530740030012017025000'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '30/05/2017'
      , mandamientoPago        : '22/0617'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: 43059,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/0617'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 2
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1026259010
      , nombre   : 'EDWIN ANDRES CUERVO VERDUGO'
      , telefono : 'F 3935996                CEL 3142064177'
      , email    : 'edwin06cuervo@hotmail.com'
      , direccion: 'DIAGONAL 77 B No 119 A-73  INTERIOR 1 APARTAMENTO 602',
    }
    , codeudor: {
      cedula   : 1070587091
      , nombre   : 'DIANA LORENA SANCHEZ JIMENEZ'
      , telefono : 2165272
      , direccion: 'CARRERA 8 BIS No 151-19 APARTAMENTO 105',
    }
    , demanda: {
      vencimientoPagare: '9/09/2018'
      , obligacion       : {
        A: '1930085200  /190184  /377813469298997'
        , B: '4513070079097239  /5303714507623618',
      }
      , capitalAdeudado        : '$ 162.012.163'
      , entregaGarantiasAbogado: '8/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00554'
      , llaveProceso           : '11001310304320170055400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '27/10/2017'
      , mandamientoPago        : '13/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 43503
          , resultado    : 'POSITIVO'
          , fechaAporta  : 43354,
        }
        , '292': {
          fechaRecibido: 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: 43525,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '13/02/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 3
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1018441487
      , nombre  : 'MARIA CLAUDIA REATIGA URREA'
      , telefono: 60277773

      , direccion: 'CARRERA 2 E No 1 A  - 60 CASA 126 - CAJICA',
    }

    , demanda: {
      vencimientoPagare: '13/09/2017'
      , obligacion       : {
        A: 12204943,
      }
      , capitalAdeudado        : '33..175.721.69'
      , entregaGarantiasAbogado: '18/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CAJICA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00715'
      , llaveProceso           : '25126408900220170071500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/09/2018'
      , mandamientoPago        : '2/02/2018'
      , notificacion           : {
        tipo          : 'OK'
        , autoNotificado: 'SOLICITUD EPS',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '2/02/2018'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 4
    , category: 'Terminados'
    , deudor  : {
      cedula   : 93437973
      , nombre   : 'DIPSON EUSEBIO SANCHEZ CASTIBLANCO'
      , telefono : '4741056//3182165543'
      , email    : 'dipsonsanchez16@g0mail.com'
      , direccion: 'CARRERA 104 No. 12  B-94 BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '15/11/2022'
      , obligacion       : {
        A: '2273 320158101',
      }
      , capitalAdeudado        : 29925624
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00720'
      , llaveProceso           : '11001400305320170072000'

      , fechaPresentacion: '30/05/2017'

      , notificacion: {
        '291': {
          fechaAporta:
            'CASA 255 CONJUNTO RESIDENCIAL SABANA GRANDE 2 LOTE 3 UBCADO EN LA CALLE 14 No. 108-48 ESCRITURA No. 5252 DEL 17 DE OCTUBRE DE 2012 NOTARÍA 37 DE BOGOTÁ',
        },
      },
    },
  }
  , {
    numero  : 5
    , category: 'Terminados'
    , deudor  : {
      cedula   : 20645940
      , nombre   : 'FANY PATRICIA AVELLANEDA TOVAR'
      , telefono : '3217662673//8573134'
      , email    : 'patoavella8210@hotmail.com'
      , direccion: 'CARRERA 9 No. 2-03 GUASCA',
    }

    , demanda: {
      vencimientoPagare: '14/02/1934'
      , obligacion       : {
        A: '2273 320172490',
      }
      , capitalAdeudado        : '$ 25.184.150'
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GUASCA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00168'
      , llaveProceso           : '25322418900120170016800'

      , fechaPresentacion: '5/06/2017'
      , mandamientoPago  : '5/10/2017'
      , notificacion     : {
        tipo: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 6
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79645559
      , nombre  : 'FRANCISCO MONTAÑA QUESADA'
      , telefono: '4380641//3118469698'

      , direccion: 'CALLE 6 BIS A 90 A-80 TORRE 7 APTO 203',
    }
    , codeudor: {
      cedula   : 46374311
      , nombre   : 'MARIA CRISTINA CHAPARRO PIRAGAUTA'
      , telefono : '4380641//3114720261'
      , direccion: 'DIAGONAL 83 N 76 C-22 BOGOTA',
    }
    , demanda: {
      vencimientoPagare: '5/09/2008'
      , obligacion       : {
        A: '2273 320111490',
      }
      , capitalAdeudado        : 16313851
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 -00444'
      , llaveProceso           : '11001400307620170044400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '30/05/2017',
    },
  }
  , {
    numero  : 7
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79733852
      , nombre  : 'JOSE RICARDO PRIETO CRUZ'
      , telefono: 4003113

      , direccion: 'CALLE 21 BIS SUR No. 88-58 BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '26/04/2020'
      , obligacion       : {
        A: 2553057,
      }
      , capitalAdeudado        : 134026609
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00374'
      , llaveProceso           : '11001310302720170037400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '24/05/2017',
    },
  }
  , {
    numero  : 8
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79642493
      , nombre  : 'JOSE WILSON ROJAS VALDES'
      , telefono: '6224552//3106980002'

      , direccion: 'CALLE 118 No. 18-65 APTO 504 ANAYA EL PARQUE BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '20/04/2020'
      , obligacion       : {
        A: 2008124,
      }
      , capitalAdeudado        : '$ 25.758.912'
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00667'
      , llaveProceso           : '11001400301420170066700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '24/05/2017',
    },
  }
  , {
    numero  : 9
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1020731500
      , nombre   : 'DANIELA ALEJANDRA CARDENAS RODRIGUEZ'
      , telefono : '1020731500 / 3105583907'
      , email    : 'dany_aleja@hotmail.com'
      , direccion: 'DIAGONAL 77  B No 19 A - 73',
    }

    , demanda: {
      vencimientoPagare: '18/02//2021'
      , obligacion       : {
        A: '2290099308    /2170086682',
      }
      , capitalAdeudado        : '78.071.921.68'
      , entregaGarantiasAbogado: '19/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00998'
      , llaveProceso           : '1100140030442017099800'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '25/09/2017'
      , mandamientoPago        : '20/10/2017'
      , notificacion           : {
        certimail: '18/01/2018'

        , tipo          : 'CERTIMAIL'
        , autoNotificado: 43150,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '20/10/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 10
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52396019
      , nombre  : 'MARINA MORALES HERNANDEZ'
      , telefono: 3202705987

      , direccion: 'CARRERA 109A No. 148-91 BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '26/04/2020'
      , obligacion       : {
        A: 2405037,
      }
      , capitalAdeudado        : '$ 15.946.341'
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SUBA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00909'
      , llaveProceso           : '11001418900320170090900'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '24/05/2017'

      , notificacion: {
        '291': {
          resultado: 'BOGOTA'
          , fechaAporta:
            'AUTOMOVIL MARCA KIA MODELO 2013 COLOR PLATA SERVICIO PARTICULAR LINEA PICANTO EX',
        },
      },
    },
  }
  , {
    numero  : 11
    , category: 'LiosJuridicos'
    , deudor  : {
      cedula   : 80743147
      , nombre   : 'JAVIER ROMERO REYES'
      , telefono : '3903652//3209229120'
      , email    : 'sandrapatriciajoya-2545@hotmail.com'
      , direccion: 'CRA 18 H No. 76 A-53 SUR BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '28/08/2017'
      , obligacion       : {
        A: '12313737//377815899589556'
        , B: 4513070106144855,
      }
      , capitalAdeudado        : 21596919
      , entregaGarantiasAbogado: '7/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00839'
      , llaveProceso           : '11001400303720170083900'
      , etapaProcesal:
        'EL 12/06/2018 EL JUZGADO DECRETA TERMINACION PROCESO POR PAGO CUOTAS EN MORA //EL 4/08/2018 SE DEVOLVIERON GARANTIAS A AECSA S.A. // EL JUEZ NO ACCEDIO A SOLICITUD ENTREGA DESEMBARGO PARTE ACTORA 1/02/2019 SE ARCHIVA PROCESO CAJA 240 // PAGAR DESARCHIVE Y REQUERIR AL JUEZ PARA QUE DE CUMPLIMIENTO A ENTREGA DE OFICIO DADO QUE PERSISTE EL EMBARGO A PESAR QUE EL CLIENTE ESTA AL DIA'
      , fechaPresentacion: '5/09/2018'
      , mandamientoPago:
        'SOLICITA ENTREGA OFICIOS A JUZGADO PARA QUE REALICEN OFICIO LEVANTAMIENTO.// A 28/09/2023 NO HA SALIDO OFICIO',
    },
  }
  , {
    numero  : 12
    , category: 'Terminados'
    , deudor  : {
      cedula   : 11436632
      , nombre   : 'OSCAR MANUEL TRIVIÑO GARCIA'
      , telefono : 3214791915
      , email    : 'triracso25@hotmail.com'
      , direccion: 'CALLE 2 E 1 A-85 SUR FACATATIVA',
    }

    , demanda: {
      vencimientoPagare: '5/07/2026'
      , obligacion       : {
        A: 2273320000000,
      }
      , capitalAdeudado        : '50000000+ 6007.134'
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FACATATIVA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00488/ 2018 - 00158'
      , llaveProceso           : '25269400300220180015800'
      , etapaProcesal          : 'APELACION'
      , fechaPresentacion      : '30/05/2017'
      , mandamientoPago        : '18/09/2017'
      , notificacion           : {
        certimail     : 'PERSONAL'
        , fisico        : 'PERSONAL'
        , tipo          : 'PERSONAL'
        , autoNotificado: 43151,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '18/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 13
    , category: 'Terminados'
    , deudor  : {
      cedula  : 447028
      , nombre  : 'PASCUAL ORTEGA ENCISO'
      , telefono: 3106890300

      , direccion: 'FINCA EL HOSPICIO VIANI',
    }
    , codeudor: {
      cedula   : 21094922
      , nombre   : 'CARMEN JULIA MORA RODRIGUEZ'
      , telefono : 3132796326
      , direccion: 'FINCA EL HOSPICIO VIANI',
    }
    , demanda: {
      vencimientoPagare: '3/07/2018'
      , obligacion       : {
        A: 3720087139,
      }
      , capitalAdeudado        : 23326974
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'VIANI'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00020'
      , llaveProceso           : '25867418900120170002000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '31/05/2017'
      , mandamientoPago        : '2/06/2007',
    },
  }
  , {
    numero  : 14
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52441656
      , nombre   : 'ELSA MILENA SOSA  ROMERO'
      , telefono : '5295780 / 3133743400'
      , email    : 'elmisosro1@hotmail.com'
      , direccion: 'TRANSVERSAL 6 B  No 12 A - 18   SIBATE',
    }

    , demanda: {
      vencimientoPagare: '5/03/2023'
      , obligacion       : {
        A: 4517,
      }
      , capitalAdeudado        : '15.987.259.39'
      , entregaGarantiasAbogado: '19/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SIBATE'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00284'
      , llaveProceso           : '25740418900120170028400'

      , fechaPresentacion: '27/09/2017',
    },
  }
  , {
    numero  : 15
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1098678636
      , nombre  : 'SILVIA SUSANA SIERRA CASTAÑEDA'
      , telefono: '3155112901//3043581350'

      , direccion: 'CARRERA 78 F 50 INTERIOR 2 AP/ CA 101',
    }
    , codeudor: {
      nombre: 0,
    }
    , demanda: {
      obligacion: {
        A: 2450966,
      }
      , capitalAdeudado        : 24792093
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00654'
      , llaveProceso           : '11001400307220170065400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '24/05/2017'
      , mandamientoPago        : '1/06/2017'
      , notificacion           : {
        tipo: 'FUERA DEL PAIS',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '1/06/2017'
        , medidaSolicitada  : 'EMBARGO VEHICULO',
      },
    },
  }
  , {
    numero  : 16
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1077969975
      , nombre   : 'YESID ALBEIRO RAMOS'
      , telefono : 'CEL 3212337597'
      , email    : 'yess_Id@hotmail.com'
      , direccion: 'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA',
    }

    , demanda: {
      vencimientoPagare: '4/05/2020'
      , obligacion       : {
        A: 2530444,
      }
      , capitalAdeudado        : '$ 33.791.309'
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00884'
      , llaveProceso           : '11001400300320170088400'
      , etapaProcesal          : 'EMPLAZAMIENTO'
      , fechaPresentacion      : '24/05/2017'
      , mandamientoPago        : '2/06/2017'
      , notificacion           : {
        '291': {
          fechaAporta: '11/07/2018',
        }
        , '292': {
          fechaAporta: '11/07/2018'
          , resultado  : '31/03/1901',
        }

        , autoNotificado: '11/07/2018',
      }
      , medidasCautelares: {
        medidaSolicitada: 'VEHICULO',
      },
    },
  }
  , {
    numero  : 17
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52953923
      , nombre   : 'YEDSY CAROLAY ROJAS GAMBOA'
      , telefono : 8135263
      , email    : 'importex1112@gmail.com'
      , direccion: 'CALLE 17 No. 24 C-17 SUR BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '7/09/2025'
      , obligacion       : {
        A: '2273 320131950',
      }
      , capitalAdeudado        : '$ 13.684.674'
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00480'
      , llaveProceso           : '25754418900220170048000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '30/05/2017'
      , mandamientoPago        : '22/08/2017'
      , notificacion           : {
        tipo: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/08/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 18
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79205977
      , nombre  : 'LUIS ENRIQUE ACOSTA CHAVARRIA'
      , telefono: 8638948

      , direccion: 'cra 4 No. 5-51 Chía',
    }

    , demanda: {
      vencimientoPagare: '27/04/2017'
      , obligacion       : {
        A: 12645083
        , B: 12340733,
      }
      , capitalAdeudado        : 67068123
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CHIA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00269'
      , llaveProceso           : '25175400300320170026900'
      , etapaProcesal          : 'AUDIENCIA'
      , fechaPresentacion      : '30/05/2017'
      , mandamientoPago        : '10/07/2017'
      , notificacion           : {
        certimail     : 'PERSONAL'
        , fisico        : 'PERSONAL'
        , tipo          : 'PERSONAL'
        , autoNotificado: 43236,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '10/07/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 19
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80001905
      , nombre   : 'ELIACID CHAVES OBANDO'
      , telefono : 4062058
      , email    : 'eliacid@hotmail.com'
      , direccion: 'CALLE 42 SUR No 87 C -18  INTERIOR 2 APARTAMENTO 203',
    }
    , codeudor: {
      cedula   : 52171586
      , nombre   : 'SANDRA PATRICIA RODRIIGUEZ RODRRIIGUEZ'
      , telefono : 4062058
      , direccion: 'CARRERA 88 C No 42 - 20 SUR',
    }
    , demanda: {
      vencimientoPagare: '6/12/2022'
      , obligacion       : {
        A: 103560,
      }
      , capitalAdeudado        : '15.391.508.11'
      , entregaGarantiasAbogado: '19/09/2017'
      , departamento           : 'CUNDINNAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01755'
      , llaveProceso           : '11001400302120170175500'

      , fechaPresentacion: '25/09/2017'

      , notificacion: {
        tipo: 'OK',
      },
    },
  }
  , {
    numero  : 20
    , category: 'Terminados'
    , deudor  : {
      cedula   : 94482258
      , nombre   : 'ANDRES MAURICIO FERNANDEZ DE SOTO DOMINGUEZ'
      , telefono : 4630870
      , email    : 'sotocolombiano@gmail.com'
      , direccion: 'Carrera 72 R No. 37-90 SUR',
    }

    , demanda: {
      vencimientoPagare: '25/04/2020'
      , obligacion       : {
        A: 2551197,
      }
      , capitalAdeudado        : 58957417
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00483'
      , llaveProceso           : '11001400302220170048300'

      , fechaPresentacion: '24/05/2017'
      , mandamientoPago  : '9/06/2017'
      , notificacion     : {
        '291': {
          resultado: 'GIRON'
          , fechaAporta:
            'AUTOMOVIL MARCA KIA LINEA SERATO PROEX SERVICIO PARTICULAR MODELO 2017 COLOR PLATA MOTOR G4GGH611514',
        }

        , certimail: '9/06/2017'
        , fisico   : 'EMBARGO VEHICULO',
      },
    },
  }
  , {
    numero  : 21
    , category: 'Terminados'
    , deudor  : {
      cedula   : 11309242
      , nombre   : 'RAMIRO CRISTANCHO CONTRERAS'
      , telefono : 312821861
      , email    : 'edware960720@hotmail.com'
      , direccion: 'CALLE 522 -68 fusagasuga',
    }

    , demanda: {
      obligacion: {
        A: 15537944
        , B: 42874,
      }

      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'FUSAGASUGA'
      , tipoProceso      : 'SINGULAR'
      , radicado         : '2017 - 00437'
      , llaveProceso     : '25290400300120170043700'
      , etapaProcesal    : 42886
      , fechaPresentacion: '25/07/2017'
      , mandamientoPago  : '25/07/2017'
      , notificacion     : {
        '291': {
          fechaRecibido: 42948,
        }
        , '292': {
          resultado: 43250,
        }
        , certimail: 'BANCOS'
        , fisico   : 4257
        , tipo     : 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/07/2017'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 22
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 80073174
      , nombre  : 'JOSE EDWIN GARCES ARDILA'
      , telefono: 'F 7978419'

      , direccion:
        'CALLE 160 No. 58-75 TORRE 6 APTO 503 BOGOTA /// YOPAL CASANARE',
    }

    , demanda: {
      vencimientoPagare: '26/04/2020'
      , obligacion       : {
        A: 2453698,
      }
      , capitalAdeudado        : '$ 29.690.679'
      , entregaGarantiasAbogado: '11/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00849'
      , llaveProceso           : '11001400308520170084900'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '24/05/2017'
      , mandamientoPago        : '21/07/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '19/07/2018'
          , resultado    : 'POSITIVO',
        }
        , '292': {
          fechaRecibido: '19/07/2018'
          , fechaAporta  : '8/08/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'EMPLAZAMIENTO'
        , autoNotificado: '8/08/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/05/2018'
        , medidaSolicitada  : 'EMBARGO VEHICULO',
      },
    },
  }
  , {
    numero  : 23
    , category: 'Terminados'
    , deudor  : {
      cedula   : 11207272
      , nombre   : 'EDER ALEXIS HERRERA SAENZ'
      , telefono : 3186899839
      , email    : 'karendiaz@hotmail.com'
      , direccion: 'MANZANA D CS 8 DIAMANTE GIRARDOT',
    }

    , demanda: {
      vencimientoPagare: '26/04/2017'
      , obligacion       : {
        A: 12517400
        , B: 5306941968938113,
      }
      , capitalAdeudado        : '37209133/3162345'
      , entregaGarantiasAbogado: '19/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GIRARDOT'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00337'
      , llaveProceso           : '25307400300120170033700'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '30/05/2017'
      , mandamientoPago        : '26/07/2017'
      , notificacion           : {
        tipo          : 'OK'
        , autoNotificado: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/07/2017'
        , medidaSolicitada  : '26/07/2017',
      },
    },
  }
  , {
    numero  : 24
    , category: 'Terminados'
    , deudor  : {
      cedula   : 3034074
      , nombre   : 'WILSON ARMANDO RODRIGUEZ MORA'
      , telefono : 3102354541
      , email    : 'jechos243@hotmail.com'
      , direccion: 'Urbanización la Pola Manzana C casa 31 Gama',
    }

    , demanda: {
      vencimientoPagare: '20/10/2016 - 05/08/16'
      , obligacion       : {
        A: 5303730000000000
        , B: 5303720000000000,
      }
      , capitalAdeudado        : '4513074195981020//3778813009303695'
      , entregaGarantiasAbogado: '19/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GAMA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00024'
      , llaveProceso           : '25299418900120170002400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '5/07/2017'
      , mandamientoPago        : '5/07/2017'
      , notificacion           : {
        tipo: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/07/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 25
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 3197274
      , nombre  : 'OMAR DARIO ZEA GALVIS'
      , telefono: 'F 7479415'

      , direccion: 'CL 14 No. 10 - 45 Bucaramanga',
    }

    , demanda: {
      vencimientoPagare: '10/05/2020'
      , obligacion       : {
        A: 12705806,
      }
      , capitalAdeudado        : '$ 107.818.114'
      , entregaGarantiasAbogado: '19/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00335'
      , llaveProceso           : '11001310301120170033500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '30/05/2017'
      , mandamientoPago        : '14/08/2017'
      , notificacion           : {
        '291': {
          resultado  : 'NEGATIVO'
          , fechaAporta: '17/07/2018',
        }
        , '292': {
          fechaAporta: '17/07/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'EMPLAZAMIENTO'
        , autoNotificado: '21/08/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/08/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 26
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52744376
      , nombre  : 'YUDY RODRIGUEZ'
      , telefono: 3183517022

      , direccion: 'CALLE 67 No.86A-49 BOGOTA',
    }
    , codeudor: {
      cedula   : 79504113
      , nombre   : 'PEDRO ANTONIO TORRES RIAÑO'
      , telefono : 2232710
      , direccion: 'CALLE 67 No.86 A-49 BOGOTA',
    }
    , demanda: {
      vencimientoPagare: '3/03/2024'
      , obligacion       : {
        A: 20990116310,
      }
      , capitalAdeudado        : '$ 17.307.303'
      , entregaGarantiasAbogado: '19/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00827'
      , llaveProceso           : '11001400306520170082700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '30/05/2017'
      , mandamientoPago        : '11/07/2017'
      , notificacion           : {
        tipo: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/07/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 27
    , category: 'Insolvencia'
    , deudor  : {
      cedula   : 79004127
      , nombre   : 'NORBEY LOMBANA MAHECHA'
      , telefono : 'F 34746523'
      , email    : 347620
      , direccion: 'CALLE 4 No. 14-161 GUADUAS (CUNDINAMARCA)',
    }

    , demanda: {
      vencimientoPagare: '11/04/2017'
      , obligacion       : {
        A: 7910080321,
      }
      , capitalAdeudado        : '$ 96.608.106'
      , entregaGarantiasAbogado: '19/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GUADUAS'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00195'
      , llaveProceso           : '25320310300120170019500'
      , etapaProcesal          : '25320318900120170019500'
      , fechaPresentacion      : 'CENTRO DE CONCILIACION'
      , mandamientoPago        : '31/05/2017'
      , notificacion           : {
        '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '19/07/2017'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '29/08/2017'
        , medidaSolicitada  : '19/07/2017',
      },
    },
  }
  , {
    numero  : 28
    , category: 'Terminados'
    , deudor  : {
      cedula   : 20563933
      , nombre   : 'MARIA SOCORRO TORRES DE GONZALEZ'
      , telefono : '8671269 / /3102301734'
      , email    : 'anyelicllau2006@hotmail.com'
      , direccion: 'CALLE 17 No 8-41 APTO 101 FUSAGASUGA',
    }

    , demanda: {
      vencimientoPagare: '3/09/2025'
      , obligacion       : {
        A: 127011,
      }

      , entregaGarantiasAbogado: '30/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUSAGASUGA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00369'
      , llaveProceso           : '25290400300120170036900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '8/06/2017'
      , mandamientoPago        : '28/06/2017'
      , notificacion           : {
        '291': {
          fechaAporta: 'APTO 301 EDIFICIO ADRIANA  FOLIIO MATR15731010',
        }

        , certimail: '28/06/2017',
      },
    },
  }
  , {
    numero  : 29
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80814800
      , nombre   : 'WHITMAN JEFERSON NAJAR RAMIREZ'
      , telefono : 8638680
      , email    : 'whitman.najarramirez@hotmail.com'
      , direccion: 'CARRERA  9 No 19 - 59 CHIA',
    }

    , demanda: {
      vencimientoPagare: '5/12/2029'
      , obligacion       : {
        A: 179301,
      }
      , capitalAdeudado        : '51.217.496.86'
      , entregaGarantiasAbogado: '19/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CHIA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00511'
      , llaveProceso           : '25175400300120170051100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '26/09/2017',
    },
  }
  , {
    numero  : 30
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52367601
      , nombre   : 'MIREYA VIVIANA BELTRAN HERRERA'
      , telefono : 3002107965
      , email    : 'mivibel@yahoo.com'
      , direccion: 'CARRERA 8 No 192 - 60  APARTAMENTO  312  / GARAGE  29',
    }
    , codeudor: {
      cedula   : 8742730
      , nombre   : 'HECTOR MANUEL TARIFFE DE MOYA'
      , telefono : 8742730
      , direccion: 'CALLE 181 C No  13 - 54. INTERIOR 21 APARTAMENTO 403',
    }
    , demanda: {
      vencimientoPagare: '2/12/2031'
      , obligacion       : {
        A: 146247,
      }
      , capitalAdeudado        : '48.945.056.03'
      , entregaGarantiasAbogado: '18/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00951'
      , llaveProceso           : '11001400303020170095100'

      , mandamientoPago: '10/10/2017'
      , notificacion   : {
        tipo          : 'P/NAL'
        , autoNotificado: 43035,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '10/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 31
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79590985
      , nombre  : 'JORGE PEREZ'
      , telefono: '7793347 // 3014192323'
      , email   : 'jpkafu@gmail.com'
      , direccion:
        'CARRERA 13 sur No. 49-37 soacha y venida 19 nO. 118-95 ofc 411',
    }
    , codeudor: {
      cedula   : 28550572
      , nombre   : 'BLANCA SENET PINEDA'
      , telefono : 3012692815
      , direccion: 'CARRERA 13 SUR No. 49-37',
    }
    , demanda: {
      vencimientoPagare: '9/12/1936'
      , obligacion       : {
        A: 530311042614581
        , B: 4513077790909121,
      }
      , capitalAdeudado        : '0377813522815548//209901793015'
      , entregaGarantiasAbogado: '30/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00211'
      , llaveProceso           : '25754400300320170021100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '9/06/2017'
      , mandamientoPago        : '25/01/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '090'
          , resultado    : '5/02/2018'
          , fechaAporta:
            'APARTAMENTO 201 DE LA TORRE 3 CONJUNTO RESIDENCIA SAUCE ii UBICADO EN LA TRANSVERSAL 40 No. 14-11  SOACHA',
        }

        , certimail: '25/01/2018'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 32
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 1022940572
      , nombre   : 'JONATHAN ANDRES  BERNAL PARRA'
      , telefono : 'CEL 3134775602'
      , email    : 'jhonannicky@hotmail.com'
      , direccion: 'CALLE 36 B SUR No. 11-25 APTO 1307 BOGOTA',
    }
    , codeudor: {
      cedula   : 1023881288
      , nombre   : 'JOHANNA MERCEDES MEDINA SANTANDER'
      , telefono : '2067151//3015485509'
      , direccion: 'CARRERA 4 A ESTE No. 30-13 SUR BOGOTA',
    }
    , demanda: {
      vencimientoPagare: '1/08/2028'
      , obligacion       : {
        A: 4280019446
        , B: '5406915580101610 4513077620518209//20990166568',
      }
      , capitalAdeudado        : '$ 54.812.000'
      , entregaGarantiasAbogado: '30/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018- 00384'
      , llaveProceso           : '11001400304320180038400'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '8/06/2017 // 12/04/2018'
      , mandamientoPago        : '28/07/2017'
      , notificacion           : {
        tipo          : 'CERTIMAIL'
        , autoNotificado: '7/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '28/07/2017'
        , medidaSolicitada  : 'VEHICULO E INMUEBLE',
      },
    },
  }
  , {
    numero  : 33
    , category: 'Terminados'
    , deudor  : {
      cedula   : 28936365
      , nombre   : 'NINI JOHANA CORTES MONROY'
      , telefono : '4762591//3118113651'
      , email    : 'snaluistol@gmail.com'
      , direccion: 'CALLE 401 SUR 72 L -40 CRISTALES  BOGOTA',
    }
    , codeudor: {
      cedula   : 28936365
      , nombre   : 'NINI CORTES'
      , telefono : 3134775602
      , direccion: 'CALLE 401 SUR 72 L -40 CRISTALES  BOGOTA',
    }
    , demanda: {
      vencimientoPagare: '3/03/2020'
      , obligacion       : {
        A: 377813824603022
        , B: 4513078713738027,
      }
      , capitalAdeudado        : '5303716097990273// AUDIOPRESTAMOS'
      , entregaGarantiasAbogado: '30/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00649'
      , llaveProceso           : '11001400308220170064900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '9/06/2017'
      , mandamientoPago        : '15/06/2017'
      , notificacion           : {
        tipo: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '15/06/2017',
      },
    },
  }
  , {
    numero  : 34
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1070612757
      , nombre  : 'KAREN JULIETH PINZON GUTIERREZ'
      , telefono: 3006308169
      , email   : 'kjpg_11@hotmail.com'
      , direccion:
        'M 7 TORRE 6 APTO 404 GIRARDOT// CALLE 3 No. 27-01 edificio torr 6 manzana 7 ciudadela Cafam del Sol apto 404',
    }
    , codeudor: {
      telefono: '4762591//3118113651',
    }
    , demanda: {
      vencimientoPagare: '26/04/2036'
      , obligacion       : {
        A: 23595,
      }
      , capitalAdeudado        : 26815877
      , entregaGarantiasAbogado: '6/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GIRARDOT'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00330'
      , llaveProceso           : '25307400300320170033000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '8/06/2017'
      , mandamientoPago        : '21/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 1292
          , resultado    : 'BOGOTA',
        }

        , certimail: '21/06/2017'
        , fisico   : 'EMBARGO APTO',
      },
    },
  }
  , {
    numero  : 35
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 72262201
      , nombre   : 'LUIS CARLOS GUTIERREZ VELANDIA'
      , telefono : 'CEL 3106199094'
      , email    : 'luiscagv@yahoo.com'
      , direccion: 'CARRERA 33 No. 1 H-86 DUITAMA (BOYACÁ)',
    }
    , codeudor: {
      cedula   : 46674085
      , nombre   : 'JAQUELINE RODRIGUEZ COLMENARES'
      , telefono : '7264921//3203987609'
      , direccion: 'CALLE 14 B No. 5C-72 DIUTAMA',
    }
    , demanda: {
      vencimientoPagare: '16/09/2016'
      , obligacion       : {
        A: 5303722385820750
        , B: 'AUTOPRESTAMO',
      }
      , capitalAdeudado        : '$ 26.464.177'
      , entregaGarantiasAbogado: '19/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-00511'
      , llaveProceso           : '11001400302620170051100'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '30/05/2017'
      , mandamientoPago        : '30/06/2017'
      , notificacion           : {
        '292': {
          resultado: 'POSITIVO',
        }

        , tipo          : 'CERTIMAIL'
        , autoNotificado: '19/12/2017',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/06/2017'
        , medidaSolicitada  : 'SALARIOS',
      },
    },
  }
  , {
    numero  : 36
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52314251
      , nombre  : 'SANDRA PATRICIA AGUDELO MONTAGUT'
      , telefono: '4189692//3012419992'

      , direccion: 'CALLE 49 SUR No. 89 B-30 Etapa 1 CAsa1',
    }

    , demanda: {
      vencimientoPagare: '15/09/2017'
      , obligacion       : {
        A: 65758,
      }
      , capitalAdeudado        : 9633585
      , entregaGarantiasAbogado: '6/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00892'
      , llaveProceso           : '11001400306620170089200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '14/06/2017'
      , mandamientoPago        : '28/06/2017'
      , notificacion           : {
        tipo          : 'FISICO'
        , autoNotificado: 43011,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '28/06/2017'
        , medidaSolicitada  : 'EMBARGO CASA',
      },
    },
  }
  , {
    numero  : 37
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1030536736
      , nombre   : 'LUIS ALBERTO ALFONSO GIRALDO'
      , telefono : 3208091862
      , email    : 'luis.alfonso@correo.polica.gov.co'
      , direccion: 'CALLE 14 Mo. 8 -04 BARRIO SAN JUAN SIBATE',
    }
    , codeudor: {
      cedula   : 1030536736
      , nombre   : 'LUIS ALBERTO AFONSO GIRALDO'
      , telefono : 3208091862
      , direccion: 'CALLE 14 Mo. 8 -04 BARRIO SAN JUAN SIBATE',
    }
    , demanda: {
      vencimientoPagare: '26/05/2020'
      , obligacion       : {
        A: 12548843,
      }
      , capitalAdeudado        : 12707877
      , entregaGarantiasAbogado: '6/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SIBATE'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00217'
      , llaveProceso           : '25740418900120170021700'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '09/06/2017//27/07/17'
      , mandamientoPago        : '11/08/2017'
      , notificacion           : {
        tipo          : 'PERSONAL'
        , autoNotificado: 43174,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/08/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 38
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39808625
      , nombre   : 'LUZ MIRYAM GUTÍERREZ MARTÍNEZ'
      , telefono : 3142310966
      , email    : 'hjg296@hotmail.com'
      , direccion: 'CALLE 2 No. 1-24 CASA 2 TABIO',
    }

    , demanda: {
      vencimientoPagare: '19/03/2020'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: '34328697321//377815467278467',
      }
      , capitalAdeudado        : 16006640
      , entregaGarantiasAbogado: '6/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'TABIO'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00102'
      , llaveProceso           : '25785418900120170010200'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '15/06/2017'
      , mandamientoPago        : '23/032018'
      , notificacion           : {
        tipo          : 'FISICO'
        , autoNotificado: 43119,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/032018'
        , medidaSolicitada  : 'EMBARGO CUENTAS* NEGARON EMBARGO INMUEBLE',
      },
    },
  }
  , {
    numero  : 39
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79982488
      , nombre   : 'JORGE ALONSO TRUJILLO GÓMEZ'
      , telefono : 'F 7053290                CEL 3012746201'
      , email    : 'trujete@hotmail.com'
      , direccion: 'CALLE 120 No. 11 B-66 BOGOTA',
    }

    , demanda: {
      obligacion: {
        A: '1030083498/10322560611//377815447801594'
        , B: '4513074699689599//5303710402241209',
      }
      , capitalAdeudado        : '$ 23.090.872'
      , entregaGarantiasAbogado: '7/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00903'
      , llaveProceso           : '11001400306520170090300'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '13/06/2017'
      , mandamientoPago        : '11/07/2017'
      , notificacion           : {
        tipo          : 'CORREO'
        , autoNotificado: 43122,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/07/2017'
        , medidaSolicitada  : 'ESTABLECIMIENTO DE COMERCIO',
      },
    },
  }
  , {
    numero  : 40
    , category: 'Terminados'
    , deudor  : {
      cedula  : 19173252
      , nombre  : 'JOSÉ ENRIQUE RIAÑO HENRIQUEZ'
      , telefono: 5401243

      , direccion: 'CALLE 70 No. 113 b - 40  BARRIO RIVIERA',
    }

    , demanda: {
      vencimientoPagare: '22/07/2021'
      , obligacion       : {
        A: '4670083309 // 377813453296510'
        , B: '5303711693085438 / AUDIOPRESTAMO',
      }
      , capitalAdeudado        : 19865254
      , entregaGarantiasAbogado: '7/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00809'
      , llaveProceso           : '11001400303420170080900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '13/06/2017'
      , mandamientoPago        : '3/08/2017'
      , notificacion           : {
        tipo: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '3/08/2017'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 41
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52991801
      , nombre   : 'YENCY KARINA CASTIBLANCO BOHORQUEZ'
      , telefono : '6050054//3103247337'
      , email    : 'karicazo@yahoo.com'
      , direccion: 'CARRERA 80 D No. 7-B-83 BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '2/01/2020'
      , obligacion       : {
        A: 186924,
      }
      , capitalAdeudado        : 62998254
      , entregaGarantiasAbogado: '8/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01190'
      , llaveProceso           : '11001400303520170119000'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '11/08/17'
      , mandamientoPago        : '30/08/2017'
      , notificacion           : {
        tipo: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/08/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 42
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 1072421639
      , nombre   : 'JUAN DANIEL MORENO CIFUENTES'
      , telefono : 'CEL 3126139284'
      , email    : 'jdanielmoreno87@hotmail.com'
      , direccion: 'BARRIO SANTA ANA FC LA CAMPIÑA ANAPOIMA',
    }

    , demanda: {
      obligacion: {
        A: 3840082880,
      }
      , capitalAdeudado        : '$ 12.956.286'
      , entregaGarantiasAbogado: '19/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'ANAPOIMA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00108'
      , llaveProceso           : '25035408900120170010800'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '31/05/2017'
      , mandamientoPago        : '28/07/2017'
      , notificacion           : {
        tipo          : 'CERTIMAIL'
        , autoNotificado: '1/03/2018',
      }
      , medidasCautelares: {
        medidaSolicitada: 'SALARIOS',
      },
    },
  }
  , {
    numero  : 43
    , category: 'Terminados'
    , deudor  : {
      cedula  : 11188351
      , nombre  : 'JOSE FREDDY VARGAS RUIZ'
      , telefono: '2520054//31240411133'

      , direccion:
        'CARRERA 80 No. 67-41 CALLE 66 No. 113-C- 45 APTO 404 INTERIOR 4 SEVILLA REAL CONJUNTO RESIDENCIAL',
    }
    , codeudor: {
      cedula   : 28168817
      , nombre   : 'MARTHA MURCIA CARDENAS'
      , telefono : '28168817//3102605021'
      , direccion: 'CARRERA 80 No. 67-41',
    }
    , demanda: {
      vencimientoPagare: '18/11/2024'
      , obligacion       : {
        A: 377813731599891,
      }
      , capitalAdeudado        : '$ 2.078.520'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00882'
      , llaveProceso           : '11001400301220170088200'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '23/06/2017'
      , mandamientoPago        : '24/08/2017'
      , notificacion           : {
        certimail: '24/08/2017',
      }
      , medidasCautelares: {
        medidaSolicitada: 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 44
    , category: 'Terminados'
    , deudor  : {
      cedula  : 11188351
      , nombre  : 'JOSE FREDDY VARGAS RUIZ'
      , telefono: '2520054//31240411133'

      , direccion:
        'CARRERA 80 No. 67-41 CALLE 66 No. 113-C- 45 APTO 404 INTERIOR 4 SEVILLA REAL CONJUNTO RESIDENCIAL',
    }
    , codeudor: {
      cedula   : 28168817
      , nombre   : 'MARTHA MURCIA CARDENAS'
      , telefono : '28168817//3102605021'
      , direccion: 'CARRERA 80 No. 67-41',
    }
    , demanda: {
      vencimientoPagare: '18/11/2024'
      , obligacion       : {
        A: 377813731599891,
      }
      , capitalAdeudado        : '$ 2.078.520'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00882'
      , llaveProceso           : '11001400301220170088200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '11/08/2017'
      , mandamientoPago        : '25/09/2017'
      , notificacion           : {
        '292': {
          resultado: 43339,
        }

        , autoNotificado: 'ESPERA AUTO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 45
    , category: 'Terminados'
    , deudor  : {
      cedula  : 4042105
      , nombre  : 'EDISON PALMA CARDENAL'
      , telefono: 3123142449

      , direccion: 'SIN INFORMACION',
    }

    , demanda: {
      vencimientoPagare: '2/02/2020'
      , obligacion       : {
        A: 377815134447388
        , B: '40999835900267587//53037142299024763',
      }
      , capitalAdeudado        : 11832595
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00528'
      , llaveProceso           : '11001400301920170052800'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '14/06/2017'
      , mandamientoPago        : '6/07/2017'
      , notificacion           : {
        tipo          : 'FISICO'
        , autoNotificado: 43404,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '6/07/2017'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 46
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 11251297
      , nombre   : 'ALVARO RODRIGUEZ ALONSO'
      , telefono : 'CEL 3166182970'
      , email    : 'alvaro.r@live.com'
      , direccion: 'Carrera 2B No.14-04 BARRIO VILLA ALEJANDRA CHOCONTA',
    }

    , demanda: {
      vencimientoPagare: '18/04/20//04/05/20'
      , obligacion       : {
        A: 53037139326557900
        , B: 4099839496308260,
      }
      , capitalAdeudado        : '$ 12.537.973'
      , entregaGarantiasAbogado: '19/05/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CHOCONTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017-00106'
      , llaveProceso           : '25183400300120170010600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '30/05/2017'
      , mandamientoPago        : '21/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '18/07/2019'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '29/07/2019',
        }
        , '292': {
          fechaRecibido: '30/0772019'
          , fechaAporta  : '1/08/2019'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'PERSONAL'
        , autoNotificado: '2/08/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '21/06/2017'
        , medidaSolicitada  : 'EMBARGO VEHICULO',
      },
    },
  }
  , {
    numero  : 47
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 52129551
      , nombre  : 'ANA RITA GUZMAN GOMEZ'
      , telefono: 'CEL 32291500487'

      , direccion: 'CALLE 61 J No. 17D - 55 Sur',
    }

    , demanda: {
      vencimientoPagare: '22/09/2019'
      , obligacion       : {
        A: '377816034633036//45130802058774831'
        , B: 53003720132046710,
      }
      , capitalAdeudado        : '$ 21.530.598'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-00302'
      , llaveProceso           : '11001400300620170030200'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '20/06/2017'
      , mandamientoPago        : '12/07/2017'
      , notificacion           : {
        '292': {
          resultado: 'POSITIVO',
        }

        , tipo          : 'CORREO'
        , autoNotificado: '18/04/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/07/217'
        , medidaSolicitada  : 'BANCOS/INMUEBLE Y SALARIOS',
      },
    },
  }
  , {
    numero  : 48
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52837630
      , nombre   : 'JENNY ADRIANA PATARROYO TORRES'
      , telefono : 'F 2031266'
      , email    : 'jennyadrianapt@gmail.com'
      , direccion: 'CARRERA  39 B No  27 A - 40 SUR',
    }

    , demanda: {
      vencimientoPagare: '12/09/2017'
      , obligacion       : {
        A: 12549338,
      }
      , capitalAdeudado        : '$ 28.468.389'
      , entregaGarantiasAbogado: '18/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01425'
      , llaveProceso           : '11001400303520170142500'
      , etapaProcesal          : '11001400303520170142500'
      , fechaPresentacion      : 'TERMINO ERRADAMENTE POR PAGO TOTAL'
      , mandamientoPago        : '26/09/2017'
      , notificacion           : {
        '292': {
          fechaRecibido: '6/04/2018',
        }
        , certimail: '17/10/2017'
        , fisico   : 'NO TIENE EN CUENTA'

        , autoNotificado: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '24/05/2018'
        , medidaSolicitada  : '17/10/2017',
      },
    },
  }
  , {
    numero  : 49
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79532034
      , nombre  : 'JOSE ISRAEL MONROY CORDOBA'
      , telefono: '7824394//3165275725'
      , email   : 'ramirosilva80@hotmail.com'
      , direccion:
        'CARRERA 77  L No. 57-H39 SUR//CARRERA 11B No. 12-68 SUR BOGOTA//  TRANSVERSAL 31 No. 28-31 Apto 103 bloque 7',
    }
    , codeudor: {
      cedula: 52507659
      , nombre: 'ANA PATRICIA VILLAMIZAR MONTOYA'

      , direccion:
        'CARRERA 77 No. 57-H39 SUR//CARRERA 11B No. 12-68 SUR BOGOTA//TRANSVERSAL 31 No. 28-31 Apto 103 bloque 7',
    }
    , demanda: {
      vencimientoPagare: '2/03/2027'
      , obligacion       : {
        A: '320 149552',
      }
      , capitalAdeudado        : 35031244
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00644'
      , llaveProceso           : '11001400305120170064400'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '20/06/2017'

      , notificacion: {
        '291': {
          fechaAporta:
            'CARRERA 77 No. 57-H39 SUR//CARRERA 11B No. 12-68 SUR BOGOTA// TRANSVERSAL 31 No. 28-31 Apto 103 bloque 7',
        },
      },
    },
  }
  , {
    numero  : 50
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52444244
      , nombre   : 'GLORIA ASTRID RODRÍGUEZ BAQUERO'
      , telefono : '3893349//3212062887'
      , email    : 'gloriaaz@yahoo.com'
      , direccion: 'CARRERA 54 C No. 143 S-90',
    }

    , demanda: {
      vencimientoPagare: '1/06/2019'
      , obligacion       : {
        A: '1800088260//377813230167802'
        , B: 4513070115042991,
      }
      , capitalAdeudado        : 22309546
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00614'
      , llaveProceso           : '11001400303420180061400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '16/06/2017 // 08/06/2018'
      , mandamientoPago        : '3/09/2018'
      , notificacion           : {
        tipo: 'ADMISION',
      },
    },
  }
  , {
    numero  : 51
    , category: 'Terminados'
    , deudor  : {
      cedula  : 37549188
      , nombre  : 'MARIA CAROLINA MARTINEZ VERA'
      , telefono: '7262316//3175921396'
      , email   : 'caromartinezvera@gmail.com'
      , direccion:
        'CARRERA 54C No. 143-A-90//CARRERA 54C No. 143-A-90 APTO 213 TORRE 2 CONJUNTO RESIDENCIAL BARCELONA PH',
    }
    , codeudor: {
      cedula: 79948168
      , nombre: 'DANILO HUMBERTO MARROQUIN SALAS'

      , direccion: 'CARRERA 54C No. 143-A-90',
    }
    , demanda: {
      vencimientoPagare: '21/02/2017'
      , obligacion       : {
        A: '6610083691//161451//3778815787383070'
        , B: '5303715153971258//4513076874137526//AUDIOPRESTAMO',
      }

      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00607'
      , llaveProceso           : '11001400300920170060700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '23/06/2017',
    },
  }
  , {
    numero  : 52
    , category: 'Terminados'
    , deudor  : {
      cedula  : 35412591
      , nombre  : 'MARTHA STELLA GOMEZ BOLIVAR'
      , telefono: 3114720151

      , direccion:
        'CARRERA 7 No. 25-51 BQ/ TO 9 APTO 104 PARQUE RESIDENCIAL VILLAZO ZIPAQUIRA',
    }
    , codeudor: {
      cedula  : 11337901
      , nombre  : 'HECTOR MANUEL MANJARRES VEGA'
      , telefono: 3114720151
      , direccion:
        'CARRERA 7 No. 25-51 BQ/ TO 9 APTO 104 PARQUE RESIDENCIAL VILLAZO ZIPAQUIRA',
    }
    , demanda: {
      vencimientoPagare: '18/01/2031'
      , obligacion       : {
        A: '320 160226'
        , B: '160226//377813713927961',
      }
      , capitalAdeudado        : '$ 16.302.625'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'ZIPAQUIRA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00256'
      , llaveProceso           : '25899400300220170025600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/06/2017'
      , mandamientoPago        : '29/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 1086

          , fechaAporta:
            'CARRERA 7 No. 25-51 BQ/ TO 9 APTO 104 PARQUE RESIDENCIAL VILLAZO ZIPAQUIRA',
        }

        , certimail: '29/06/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 53
    , category: 'Terminados'
    , deudor  : {
      cedula  : 53051476
      , nombre  : 'DIANA MARCELA SANCHEZ LOZANO'
      , telefono: '2241552//3212307798'
      , email   : 'dimarce1513@hotmail.com'
      , direccion:
        'calle 64 No. 85-60 INTERIOR 1 LOTE 19 MANZANA 36 URBANIZACION LA ISABELA  ETAPA IIcalle 64 I No. 86-60',
    }
    , codeudor: {
      cedula  : 79263455
      , nombre  : 'EDGAR BUSTAMANTE ANGEL'
      , telefono: '2241552//3212307798'
      , direccion:
        'calle 64 no. 85-60 INTERIOR 1 LOTE 19 MANZANA 36 URBANIZACION LA ISABELA  ETAPA IIcalle 64 I No. 86-60',
    }
    , demanda: {
      vencimientoPagare: '1/09/2025'
      , obligacion       : {
        A: '320 131802',
      }
      , capitalAdeudado        : 97712903
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00975'
      , llaveProceso           : '11001400308520170097500'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '21/06/2017'
      , mandamientoPago        : '31/07/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 4625
          , resultado    : '16/08/2017'
          , fechaAporta:
            'calle 64 no. 85-60 INTERIOR 1 LOTE 19 MANZANA 36 URBANIZACION LA ISABELA  ETAPA IIcalle 64 I No. 86-60',
        }

        , certimail: '31/07/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 54
    , category: 'Terminados'
    , deudor  : {
      cedula  : 38261511
      , nombre  : 'OLGA GALLEGO'
      , telefono: '7385452/3138615288'
      , email   : 'olgagallego63@hotmail.com'
      , direccion:
        'CARRERA 87D No. 48-03 SUR//DIAGONAL 49 No. 85-79 SUR TORRE 10 APARTAMENTO 2',
    }

    , demanda: {
      vencimientoPagare: '2/04/2022'
      , obligacion       : {
        A: 320095437,
      }
      , capitalAdeudado        : '$ 18.400.665'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01138'
      , llaveProceso           : '11001400306420170113800'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '21/06/2017'
      , mandamientoPago        : '25/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 3396
          , resultado    : '11/09/2017'
          , fechaAporta:
            'CARRERA 87D No. 48-03 SUR//DIAGONAL 49 No. 85-79 SUR TORRE 10 APARTAMENTO 2',
        }

        , certimail: '25/08/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 55
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80353430
      , nombre   : 'DOUGLAS AYURE RIOS'
      , telefono : '8252559//3124488945'
      , email    : 'faride1109@yahoo.com'
      , direccion: 'CALLE 11 A No. 3-29 URBANIZACION EL PORVENIR MADRID',
    }
    , codeudor: {
      cedula   : 20736637
      , nombre   : 'ANA ISABEL JURADO LEON'
      , telefono : 8252559
      , direccion: 'CALLE 11 A No. 3-29 URBANIZACION EL PORVENIR MADRID',
    }
    , demanda: {
      vencimientoPagare: '6/03/2018'
      , obligacion       : {
        A: '3830084858//4090832249783283'
        , B: 'AUTOPRESTAMO',
      }
      , capitalAdeudado        : 35544456
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MADRID'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01087'
      , llaveProceso           : '25430400300120170108700'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '20/06/2017'
      , mandamientoPago        : '6/12/2017'
      , notificacion           : {
        tipo          : 'PERSONAL'
        , autoNotificado: 43181,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '6/12/2017'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 56
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52039387
      , nombre   : 'GLADYS HERNANDEZ LOPEZ'
      , telefono : 'F 7900454              CEL 3138551970'
      , email    : 'gladys12357@hotmail.com'
      , direccion: 'DIAGONAL 62 C No. 19-C-12 ACACIA SAN',
    }
    , codeudor: {
      cedula   : 52039387
      , nombre   : 'GLADYS HERNANDEZ LOPEZ'
      , telefono : '7900454//3138551970'
      , direccion: 'DIAGONAL 62 C No. 19-C-12 ACACIA SAN',
    }
    , demanda: {
      vencimientoPagare: '19/10/2022'
      , obligacion       : {
        A: '2273 320157242',
      }
      , capitalAdeudado        : '$ 116.728.485'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2014 - 00703'
      , llaveProceso           : '11001400302720140070300'
      , etapaProcesal          : '11001400302720140070300'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '22/06/2017'
      , notificacion           : {
        certimail: '27/07/2018'

        , autoNotificado: 'ACUMULADO',
      },
    },
  }
  , {
    numero  : 57
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39556705
      , nombre   : 'CARMEN CECILIA APONTE ZAMBRANO'
      , telefono : '7500346//3102279518'
      , email    : 'ceciliaaponte@hotmail.com'
      , direccion: 'AVDA 80 No. 60-95  RIO INTERIOR 3 APTO 11',
    }

    , demanda: {
      obligacion: {
        A: '710084822//377813215734547'
        , B: '4513072329336110//5303713387599294',
      }
      , capitalAdeudado        : 28250394
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00512'
      , llaveProceso           : '11001400302820170051200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '15/06/2017',
    },
  }
  , {
    numero  : 58
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 14273737
      , nombre   : 'JOSÉ URIEL PAEREZ PERDOMO'
      , telefono : 'F 4183276               CEL 3228293322'
      , email    : 'lejopaerez@hotmail.com'
      , direccion: 'CALLE 23 D No.107-32 BOGOTA',
    }

    , demanda: {
      obligacion: {
        A: '5820083643//377816164971529'
        , B: '4513080225477441//5303720124048311',
      }
      , capitalAdeudado        : '$ 96.125.453'
      , entregaGarantiasAbogado: '8/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-00760'
      , llaveProceso           : '11001400304220170076000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '13/06/2017'
      , mandamientoPago        : '25/07/2017'
      , notificacion           : {
        '291': {
          fechaAporta: '30/05/2018',
        }
        , '292': {
          fechaAporta: '30/05/2018',
        }

        , tipo          : 'CORREO'
        , autoNotificado: '16/07/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/07/2017'
        , medidaSolicitada  : 'EMBARGO CUOTAS PARTES LIQUIDACIÓN CONYUGAL',
      },
    },
  }
  , {
    numero  : 59
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52341348
      , nombre   : 'NANCY RODRIGUEZ  GOMEZ'
      , telefono : '6977403 / 3103161197'
      , email    : 'nancyta1905@hotmail.com'
      , direccion: 'CALLE 70 C No 105 H - 06',
    }
    , codeudor: {
      cedula   : 52801359
      , nombre   : 'NUBIA RODRIGUEZ GOMEZ'
      , telefono : 3102876473
      , direccion: 'CALLE 70 C - No 105 H - 06',
    }
    , demanda: {
      vencimientoPagare: '4/10/2017'
      , obligacion       : {
        A: 490098936,
      }
      , capitalAdeudado        : '12.847.942.00'
      , entregaGarantiasAbogado: '19/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01064'
      , llaveProceso           : '11001400302520170106400'

      , fechaPresentacion: '26/09/2017',
    },
  }
  , {
    numero  : 60
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1032373332
      , nombre  : 'LADY JOHANNA BAYONA GARCÍA'
      , telefono: 'lady.bayona@Ifgcolombia.com'
      , email   : 'CRA 77 A No. 63f-47 piso 2',
    }
    , codeudor: {
      direccion: 43150,
    }
    , demanda: {
      vencimientoPagare: 12438741
      , obligacion       : {
        B: 35987412,
      }
      , capitalAdeudado        : '$ 42.898'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00901'
      , llaveProceso           : '11001400302020170090100'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '18/09/2017'

      , notificacion: {
        '291': {
          resultado: '9/04/2018',
        }
        , '292': {
          fechaAporta: '9/04/2018'
          , resultado  : 'CERTIMAIL',
        }

        , tipo          : 43280
        , autoNotificado: 42996,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'VEHICULO'
        , medidaSolicitada  : '5305',
      },
    },
  }
  , {
    numero  : 61
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80197126
      , nombre   : 'JUAN PABLO RUBIO ESGUERRA'
      , telefono : 8000178
      , email    : 'arqrasjuan1989@htmail.com'
      , direccion: 'CALLE 165 No. 74 C-07 CASA 1',
    }

    , demanda: {
      vencimientoPagare: '4/11/2017'
      , obligacion       : {
        A: 12653060
        , B: '377813471593666//5303720056388123',
      }
      , capitalAdeudado        : 21493086
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00557'
      , llaveProceso           : '11001400304620170055700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '16/06/2017'
      , mandamientoPago        : '19/07/2017'
      , notificacion           : {
        tipo          : 'PERSONAL'
        , autoNotificado: 43158,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/07/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 62
    , category: 'Terminados'
    , deudor  : {
      cedula  : 80722943
      , nombre  : 'LUIS EDUARDO CARRANZA BUSTOS'
      , telefono: '7417183//3138253554'

      , direccion: 'DIAGONAL 60 SUR NO. 28-I 72 INTERIOR 3 APTO 204',
    }
    , codeudor: {
      cedula   : 53011591
      , nombre   : 'YURANI VERGARA NAGLES'
      , telefono : '7340105//304410804'
      , direccion: 'DIAGONAL 60 SUR NO. 28-I 72 INTERIOR 3 APTO 204',
    }
    , demanda: {
      vencimientoPagare: '31/01/2022'
      , obligacion       : {
        A: '320 093516',
      }
      , capitalAdeudado        : 15445371
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00537'
      , llaveProceso           : '11001400306320180016800'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '21/06/2017'
      , mandamientoPago        : '21/03/2018'
      , notificacion           : {
        '292': {
          resultado: '06/07/2018',
        }

        , tipo          : 'CERTIMAI'
        , autoNotificado: 43328,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '21/03/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 63
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1022943195
      , nombre   : 'DIANA MARCELA IPUZ SUAREZ'
      , telefono : '7493169 / 7672067'
      , email    : 'marcelaipuzsuarez@hotmail.com'
      , direccion: 'CALLE 72B BIS No 5A 22 SUR',
    }
    , codeudor: {
      cedula   : 1032416632
      , nombre   : 'JHONNY HERNANDO BELTRAN SALCEDO'
      , telefono : '7493169 /3185405968'
      , direccion: 'CALLE 67 C SUR 1B ESTE  APARTAMENTO 404 TORRE 2',
    }
    , demanda: {
      vencimientoPagare: '18/11/2021'
      , obligacion       : {
        A: 145608,
      }
      , capitalAdeudado        : 20600721.7
      , entregaGarantiasAbogado: '6/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00089'
      , llaveProceso           : '11001418900920170008900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '19/09/2017'
      , mandamientoPago        : '15/12/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '15/12/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 64
    , category: 'Insolvencia'
    , deudor  : {
      cedula   : 79891952
      , nombre   : 'RAFAEL ERNESTO CADENA PARGA'
      , telefono : 'F 3157900              CEL 3157900006'
      , email    : 'rafael.cadena@signsas.com'
      , direccion: 'CARRERA 13 A No. 150-25 INT 3 APTO 203',
    }

    , demanda: {
      vencimientoPagare: '22/10/2017'
      , obligacion       : {
        A: 125348220,
      }
      , capitalAdeudado        : '$ 32.926.699'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00557'
      , llaveProceso           : '11001400302920170055700'
      , etapaProcesal          : '11001400302920170055700'
      , fechaPresentacion      : 'PROCESO DE REESTRUCTURACION SUPER SOCIEDADES'
      , mandamientoPago        : '15/06/2017'
      , notificacion           : {
        '292': {
          fechaRecibido: '26/07/2018',
        }
        , certimail: '30/06/2017'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'SUPER SOCIEDADES'
        , medidaSolicitada  : '30/06/2017',
      },
    },
  }
  , {
    numero  : 65
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79276611
      , nombre   : 'ERNESTO AUGUSTO IDARRAGA QUINTERO'
      , telefono : 'F 7615662'
      , email    : 'ernes_Idar2021@hotmail.com'
      , direccion: 'CALLE 70 SUR No. 3-23',
    }

    , demanda: {
      vencimientoPagare: '19/12/2019'
      , obligacion       : {
        A: 12730628,
      }
      , capitalAdeudado        : '$ 50.511.309'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00776'
      , llaveProceso           : '11001400302020170077600'
      , etapaProcesal          : '11001400302020170077600'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '15/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '31/08/2017',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '14/08/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '3/04/2018'
        , medidaSolicitada  : '14/08/2017',
      },
    },
  }
  , {
    numero  : 66
    , category: 'Terminados'
    , deudor  : {
      cedula   : 66841096
      , nombre   : 'SANDRA PATRICIA SUAREZ GALVIS'
      , telefono : '8017389//3144113614'
      , email    : 'sansuarez.ga@gmail.com'
      , direccion: 'CARRERA 22 No. 161-26 PISO 2',
    }

    , demanda: {
      vencimientoPagare: '8/10/2018'
      , obligacion       : {
        A: 12525003,
      }
      , capitalAdeudado        : 12845011
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00702'
      , llaveProceso           : '11001400301920170070200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '21/07/2017'
      , mandamientoPago        : '27/07/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 1944
          , resultado    : '31/07/2017',
        }
        , '292': {
          fechaRecibido: '24/08/2017',
        }
        , certimail: '27/07/2017'
        , fisico   : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 67
    , category: 'Terminados'
    , deudor  : {
      cedula   : 78076295
      , nombre   : 'HUMBERTO ENRIQUE AVENA CORRALES'
      , telefono : '6215383//3005146155'
      , email    : 'havena@ingeobrasas.com'
      , direccion: 'cl 106 No. 50-21 BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '23/06/2018'
      , obligacion       : {
        A: '5303716461821906//5306948999859317//12611392'
        , B: '4513072520491185//0377815106380054//12496791',
      }
      , capitalAdeudado        : 173618623
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00360'
      , llaveProceso           : '11001310301720170036000'
      , etapaProcesal          : 1.10014003047201e50
      , fechaPresentacion      : 'SENTENCIA'
      , mandamientoPago        : '20/06/2017'
      , notificacion           : {
        certimail: '23/08/2017'

        , tipo          : '05/03/2018'
        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'OK'
        , medidaSolicitada  : '23/08/2017',
      },
    },
  }
  , {
    numero  : 68
    , category: 'Terminados'
    , deudor  : {
      cedula  : 35412591
      , nombre  : 'MARTHA STELLA GOMEZ BOLIVAR'
      , telefono: 3114720151

      , direccion:
        'CARRERA 7 No. 25-51 BQ/ TO 9 APTO 104 PARQUE RESIDENCIAL VILLAZO ZIPAQUIRA',
    }
    , codeudor: {
      cedula: 11337901,
    }
    , demanda: {
      vencimientoPagare: '18/01/2031'
      , obligacion       : {
        A: '320 160226'
        , B: '160226//377813713927961',
      }
      , capitalAdeudado        : '$ 16.302.625'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'ZIPAQUIRA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00270'
      , llaveProceso           : '25899400300220170027000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/06/2017'
      , mandamientoPago        : '13/07/2017'
      , notificacion           : {
        '291': {
          fechaAporta:
            'CARRERA 7 No. 25-51 BQ/ TO 9 APTO 104 PARQUE RESIDENCIAL VILLAZO ZIPAQUIRA',
        }

        , certimail: '13/07/2017',
      },
    },
  }
  , {
    numero  : 69
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 53008703
      , nombre  : 'DERLY CATHERINE CASTRO IZQUIERDO'
      , telefono: 'F 7507842 2856110'

      , direccion: 'CARRERA 5 No. 30 - 77',
    }

    , demanda: {
      vencimientoPagare: '12/08/2019'
      , obligacion       : {
        A: 4200023595,
      }
      , capitalAdeudado        : '$ 83.955.014'
      , entregaGarantiasAbogado: '8/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-00419'
      , llaveProceso           : '11001400300620170041900'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '13/06/2017//21/07/17'
      , mandamientoPago        : '27/07/2017'
      , notificacion           : {
        '292': {
          resultado: 'POSITIVO',
        }

        , tipo          : 'OK'
        , autoNotificado: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '27/07/2017'
        , medidaSolicitada  : 'VEHICULO E INMUEBLE',
      },
    },
  }
  , {
    numero  : 70
    , category: 'Terminados'
    , deudor  : {
      cedula   : 14250539
      , nombre   : 'CESAR AUGUSTO ARIAS'
      , telefono : 'CEL 3152248920'
      , email    : 'ariascesaraugustoarias@gmail.com'
      , direccion: 'CALLE 54 # 22 - 50',
    }

    , demanda: {
      vencimientoPagare: '7/06/2017'
      , obligacion       : {
        A: 12587175,
      }
      , capitalAdeudado        : '$ 74.069.982'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01084'
      , llaveProceso           : '11001400308520170108400'
      , etapaProcesal          : '11001400308520170108400'
      , fechaPresentacion      : 'SENTENCIA'
      , mandamientoPago        : '14/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '16/11/2018'
          , fechaAporta  : 43483,
        }
        , '292': {
          fechaRecibido: '18/01/2019'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '17/08/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '18/01/2019'
        , medidaSolicitada  : '23/01/2018',
      },
    },
  }
  , {
    numero  : 71
    , category: 'Terminados'
    , deudor  : {
      cedula   : 53015307
      , nombre   : 'BETTY STEPHANI TORRES ROJAS'
      , telefono : 2590618
      , email    : 'stephanytorresrojas@gmail.com'
      , direccion: 'CL 146A # 53A - 10 APT 102',
    }
    , codeudor: {
      cedula   : 80799160
      , nombre   : 'ARGELINO ANDRES GOMEZ PINEDA'
      , telefono : 6819627
      , direccion: 'CL 118 # 93 - 22',
    }
    , demanda: {
      vencimientoPagare: '7/06/2017'
      , obligacion       : {
        A: 12615209,
      }
      , capitalAdeudado        : 24193522
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01065'
      , llaveProceso           : '11001400304720170106500'
      , etapaProcesal          : '11001400304720170106500'
      , fechaPresentacion      : 'NOTIFICACION'
      , mandamientoPago        : '20/06/2017'
      , notificacion           : {
        certimail: '30/11/2017'

        , tipo          : '09/07/2018'
        , autoNotificado: 'SOLICITUD EPS',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '13/09/2018 SOL EPS'
        , medidaSolicitada  : '30/11/2017 PERSONAL BETTY',
      },
    },
  }
  , {
    numero  : 72
    , category: 'Terminados'
    , deudor  : {
      cedula: 1030545462
      , nombre: 'NESTOR FABIAN ESPITIA FRAILE'

      , email    : '1988fac@gmail.com'
      , direccion: 'CARRERA 88 # 26 - 68',
    }

    , demanda: {
      vencimientoPagare: '7/06/2017'
      , obligacion       : {
        A: 2474005,
      }

      , entregaGarantiasAbogado: '12/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01241'
      , llaveProceso           : '11001400306020170124100'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '16/06/2017'
      , mandamientoPago        : '14/12/2017'
      , notificacion           : {
        tipo          : 'CERTIMAIL'
        , autoNotificado: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/12/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 73
    , category: 'Terminados'
    , deudor  : {
      cedula   : 31877993
      , nombre   : 'SONIA MAZUERA'
      , telefono : 'F 2333333 4432706'
      , email    : 'mrocha@hotmail.com'
      , direccion: 'CARRERA 55 A No. 165-27 int 7 apto 102',
    }

    , demanda: {
      vencimientoPagare: '27/08/2018'
      , obligacion       : {
        A: 12537545,
      }
      , capitalAdeudado        : '$ 78.297.335'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00575'
      , llaveProceso           : '11001400300420170057500'
      , etapaProcesal          : '11001400300420170057500'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '14/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '12/06/2018',
        }
        , '292': {
          fechaRecibido: '25/01/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '17/07/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/04/2018'
        , medidaSolicitada  : '17/07/2017',
      },
    },
  }
  , {
    numero  : 74
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79789620
      , nombre   : 'CARLOS ANDRÉS BORRAY ARCE'
      , telefono : 3138327713
      , email    : 'carlosborray@gmail.com'
      , direccion: 'CARRERA 18 # 120 - 65 APTO 306',
    }
    , codeudor: {
      cedula   : 52666505
      , nombre   : 'VERONICA MARTINEZ SEGURA'
      , telefono : 8040407
      , direccion: 'CALLE 107A # 54- 57 APTO 202',
    }
    , demanda: {
      vencimientoPagare: '7/06/2017'
      , obligacion       : {
        A: 12185017,
      }
      , capitalAdeudado        : 44110828
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00507'
      , llaveProceso           : '11001400304820170050700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '15/06/2017'
      , mandamientoPago        : '25/07/2017'
      , notificacion           : {
        tipo          : 'PNAL'
        , autoNotificado: '06/06/2018 AMBOS',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/07/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 75
    , category: 'Terminados'
    , deudor  : {
      cedula: 80792132
      , nombre: 'MARIO ANDRES BOJACA CRUZ'

      , email    : '44955363/31249909451'
      , direccion: 'marioabc_83@hotmail.com',
    }
    , codeudor: {
      cedula:
        'CALLE 8 C No. 92-72 casa 20 conjunto residencial ciudad tital ph'
      , nombre   : '52216958/'
      , telefono : 'MARIA ISABEL GUEVARA OSMA'
      , direccion: '44955363/31249909451',
    }
    , demanda: {
      vencimientoPagare:
        'CALLE 8 C No. 92-72 casa 20 conjunto residencial ciudad tital ph'
      , obligacion: {
        A: 44690
        , B: '320 096597',
      }

      , entregaGarantiasAbogado:
        '###############################################################################################################################################################################################################################################################'
      , departamento: 'CUNDINAMARCA'
      , municipio   : 'BOGOTA'
      , tipoProceso : 'HIPOTECARIO'
      , radicado    : '2017 - 00918'
      , llaveProceso: '11001400305820170091800'

      , mandamientoPago: '21/06/2017'
      , notificacion   : {
        certimail: '06/07/2017//13/07/17',
      }
      , medidasCautelares: {
        medidaSolicitada: '6/07/2017',
      },
    },
  }
  , {
    numero  : 76
    , category: 'Terminados'
    , deudor  : {
      cedula   : 20493423
      , nombre   : 'ESTELA MARIN GARZÓN'
      , telefono : 'CEL 3112110025'
      , email    : 'stellamarin23@hotmail.com'
      , direccion: 'CALLE 8 # 2 - 32 CHOCONTA',
    }
    , codeudor: {
      cedula   : 80394005
      , nombre   : 'ADELMO ABRIL FORERO'
      , telefono : 3143782313
      , direccion: 'CALLE 8 # 2 - 32 CHOCONTA',
    }
    , demanda: {
      vencimientoPagare: '21/07/2019'
      , obligacion       : {
        A: 2660080368,
      }
      , capitalAdeudado        : '$ 17.517.434'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CHOCONTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00119'
      , llaveProceso           : '25183400300120170011900'
      , etapaProcesal          : '25183400300120170011900'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '21/06/2017'
      , notificacion           : {
        certimail: '17/07/2017'

        , autoNotificado: 'PNAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '16/08/2017'
        , medidaSolicitada  : '17/07/2017',
      },
    },
  }
  , {
    numero  : 77
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1030554218
      , nombre   : 'JEIMY CAROLINA LEGUIZAMON VASQUEZ'
      , telefono : 'F 5663711              CEL 3174386730'
      , email    : 'carito_abril3@hotmail.com'
      , direccion: 'CALLE 16 A No. 44-C-S.28 MANZANA 6 ET 1 SOACHA',
    }
    , codeudor: {
      cedula   : 1030554218
      , nombre   : 'JEIMY CAROLINA LEGUIZAMON VASQUEZ'
      , telefono : '5663711/3174386730'
      , direccion: 'CALLE 16 A No. 44-C-S.28 MANZANA 6 ET 1 SOACHA',
    }
    , demanda: {
      vencimientoPagare: '24/10/2027'
      , obligacion       : {
        A: '320 157362'
        , B: '157362//377813499486349',
      }
      , capitalAdeudado        : '$ 19.693.963'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'SINGULAR ACUMULADO CON HIPOTECARIO'
      , radicado               : '2017 - 00837'
      , llaveProceso           : '25754418900120170083700'
      , etapaProcesal          : '25754400300120170083700'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '11/08/2017'
      , notificacion           : {
        '292': {
          fechaRecibido: '17/09/2018',
        }
        , certimail: '29/09/2017'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/10/2018'
        , medidaSolicitada  : '29/09/2017',
      },
    },
  }
  , {
    numero  : 78
    , category: 'Terminados'
    , deudor  : {
      cedula   : 7711481
      , nombre   : 'JAIME EDISON SANTOS MARTIN'
      , telefono : 3158939957
      , email    : 'santosjaime07@yahoo.es'
      , direccion: 'CALLE 44D # 45 - 45 APTO 904 INT 7U',
    }

    , demanda: {
      vencimientoPagare: '05/07/2016 // 16/04/16'
      , obligacion       : {
        A: 5303729451744848
        , B: '0377816394649010',
      }
      , capitalAdeudado        : 11590469
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01231'
      , llaveProceso           : '11001400306420170123100'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '20/06/2017',
    },
  }
  , {
    numero  : 79
    , category: 'Terminados'
    , deudor  : {
      cedula   : 38289111
      , nombre   : 'CRISTINA CASTAÑO CASTILLO'
      , telefono : 'F 2653927'
      , email    : 'ccctina0218@gmail.com'
      , direccion: 'DIAGONAL 2 # 64A - 65 INT 1 APTO 401',
    }

    , demanda: {
      vencimientoPagare: '4/08/2020'
      , obligacion       : {
        A: 3890084585,
      }
      , capitalAdeudado        : '$ 23.640.676'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00892'
      , llaveProceso           : '11001400303320170089200'
      , etapaProcesal          : '11001400303320170089200'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '16/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '30/08/2017',
        }

        , certimail: '9/08/2017'
        , fisico   : 'NO'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/10/2017'
        , medidaSolicitada  : '6/10/2017',
      },
    },
  }
  , {
    numero  : 80
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79882688
      , nombre   : 'JORGE ANDRES PORRAS VARGAS'
      , telefono : 'F 8785890'
      , email    : 'joranpo@hotmail.com'
      , direccion: 'CALLE 11 # 4 - 39 TOCANCIPA',
    }

    , demanda: {
      vencimientoPagare: '1/09/2019'
      , obligacion       : {
        A: 377817000000000,
      }
      , capitalAdeudado        : '$ 16.208.319'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'TOCANCIPA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00351'
      , llaveProceso           : '25817418900120170035100'
      , etapaProcesal          : '25817408900120170035100'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '22/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '1/08/2017',
        }
        , '292': {
          fechaRecibido: '18/01/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '29/06/2017'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/01/2018'
        , medidaSolicitada  : '29/06/2017',
      },
    },
  }
  , {
    numero  : 81
    , category: 'Terminados'
    , deudor  : {
      cedula  : 900789612
      , nombre  : 'DS&D SOLUCIONES CONSTRUCTIVAS S.A.S.'
      , telefono: 'F 6721931'

      , direccion: 'CARRERA 7 # 171A - 14 LA CALERA',
    }
    , codeudor: {
      cedula   : 21068402
      , nombre   : 'ANDRES FELIPE JIMENEZ REDONDO Y CARMEN JULIA REDONDO PLAZAS'
      , telefono : 6784175
      , direccion: 'CALLE 163A # 7B - 39',
    }
    , demanda: {
      vencimientoPagare: '26/10/2018'
      , obligacion       : {
        A: 1680096092,
      }
      , capitalAdeudado        : '$ 17.337.417'
      , entregaGarantiasAbogado: '12/062017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00554'
      , llaveProceso           : '11001400303620170055400'
      , etapaProcesal          : '11001400303620170055400'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '21/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '5/09/2018',
        }
        , '292': {
          fechaRecibido: '19/10/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '21/06/2017'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/07/2018'
        , medidaSolicitada  : '29/11/2019',
      },
    },
  }
  , {
    numero  : 82
    , category: 'Terminados'
    , deudor  : {
      cedula  : 13921619
      , nombre  : 'RAFAEL GONZALEZ OLEJUA'
      , telefono: 311284993

      , direccion: 'CALLE 89 # 95G- 26',
    }
    , codeudor: {
      cedula   : 28239573
      , nombre   : 'ANA LIBIA GARCIA FLOREZ'
      , telefono : 2284139
      , direccion: 'CALLE 89 # 95G - 26',
    }
    , demanda: {
      vencimientoPagare: '27/08/2018'
      , obligacion       : {
        A: 1980094471,
      }
      , capitalAdeudado        : 39576493
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01065'
      , llaveProceso           : '11001400300320170106500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '20/06/2017',
    },
  }
  , {
    numero  : 83
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19438068
      , nombre   : 'LUIS ADOLFO PEÑA ARCINIEGAS'
      , telefono : '2478114 /3115672367'
      , email    : 'luisadopa@gmail.com'
      , direccion: 'CARRERA 29 No 12  A - 46',
    }

    , demanda: {
      vencimientoPagare: '20/09/2017'
      , obligacion       : {
        A: 12436479,
      }
      , capitalAdeudado        : '14.272.971.42'
      , entregaGarantiasAbogado: '22/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01025'
      , llaveProceso           : '11001400301920170102500'
      , etapaProcesal          : '11001400301920170102500'
      , fechaPresentacion:
        'EL 4 DE ABRIL DE 2019 SE DEVOLVIERON GARANTIAS A AECSA S.A. // EL 27/03/2019 SE RADICO EN EL SIM OFICIO DE LEVANTAMIENTO DE MEDIDA CAUTELAR DE EMBARGO SOBRE VEHICULO // EL 26 DE ABRIL DE 2019 SE ARCHIVO EL PROCESO EN LA CAJA 631 EL 19 DE MARZO 2019',
    },
  }
  , {
    numero  : 84
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79108747
      , nombre   : 'EDGAR HERNANDEZ RUBIO'
      , telefono : 'F 8054434               CEL 3118802970'
      , email    : 'edgarH62@hotmail.com'
      , direccion: 'CARRERA 17 A No. 175-82 INTERIOR 1 PTO 601',
    }

    , demanda: {
      vencimientoPagare: '5/11/2019'
      , obligacion       : {
        A: 377815178176828
        , B: 53037234659826290,
      }
      , capitalAdeudado        : '$ 12.128.189'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-00800'
      , llaveProceso           : '11001400303920170080000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '14/06/2017'
      , mandamientoPago        : '22/06/2017'
      , notificacion           : {
        '292': {
          resultado: 'POSITIVO',
        }

        , tipo          : 'AVISO'
        , autoNotificado: '22/06/2017',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/06/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 85
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39673896
      , nombre   : 'SANDRA PATRICIA MALAVER ALVAREZ'
      , telefono : 7466151
      , email    : 'sma9511@hotmail.com'
      , direccion: 'CALLE 143 # 118 - 15 APTO 503 INT 2',
    }

    , demanda: {
      vencimientoPagare: '10/04/2020'
      , obligacion       : {
        A: 6820082421
        , B: '377815190381158 // 530371010816',
      }
      , capitalAdeudado        : 24227539
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00834'
      , llaveProceso           : '11001400303420170083400'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '20/06/2017'
      , mandamientoPago        : '10/07/2017'
      , notificacion           : {
        autoNotificado: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '10/07/2017'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 86
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 1087781966
      , nombre   : 'RHONALD MEZA TARAPUES'
      , telefono : 'F 4062925  7496611'
      , email    : 'mezaronald@yahoo.com'
      , direccion: 'CARRERA 73 A BIS No. 2 A-32 SUR BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '11/11/2018'
      , obligacion       : {
        A: 2250084171,
      }
      , capitalAdeudado        : '$ 17.632.026'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-00567'
      , llaveProceso           : '11001400302220170056700'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '14/06/2017'
      , mandamientoPago        : '6/09/2017'
      , notificacion           : {
        '292': {
          resultado: 'POSITIVO',
        }

        , tipo          : 'OK'
        , autoNotificado: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '6/09/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 87
    , category: 'Terminados'
    , deudor  : {
      cedula   : 4198210
      , nombre   : 'OMAR ESPITIA REYES'
      , telefono : 7109935
      , email    : 'omar690501@hotmail.com'
      , direccion: 'CALLE 39 I # 72F - 53 SUR',
    }
    , codeudor: {
      cedula   : 46676055
      , nombre   : 'NOHEMI SANCHEZ FORERO'
      , telefono : 2048159
      , direccion: 'CARRERA 68K # 38 SUR - 42',
    }
    , demanda: {
      vencimientoPagare: '20/04/2018'
      , obligacion       : {
        A: 2150091074,
      }
      , capitalAdeudado        : 11777235
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00561'
      , llaveProceso           : '11001400304620170056100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '20/06/2017'
      , mandamientoPago        : '27/07/2017'
      , notificacion           : {
        tipo          : 'PERSONAL'
        , autoNotificado: 43453,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '27/07/2017'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 88
    , category: 'Terminados'
    , deudor  : {
      cedula   : 51890871
      , nombre   : 'IDALY FERRO CARDONA'
      , telefono : '7779254//3103126814'
      , email    : 'lasmi40@hotmail.com'
      , direccion: 'calle 6 No. 4-07 BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '1/07/2018'
      , obligacion       : {
        A: 12488415,
      }

      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'BOGOTA'
      , tipoProceso      : 'PRENDARIO'
      , radicado         : '2017 - 00528'
      , llaveProceso     : '1100140030820170052800'
      , etapaProcesal    : 'NOTIFICACION'
      , fechaPresentacion: '20/06/2017'
      , mandamientoPago  : '28/06/2017'
      , notificacion     : {
        '291': {
          fechaRecibido: 1369

          , fechaAporta:
            'AUTOMOVIL MARCA HYNDAI LINEA ACCENT GL MODELO 2016 COLOR BLANCO CRISTAL',
        }

        , certimail: '28/06/2017'
        , fisico   : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 89
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1030551366
      , nombre   : 'JULIAN ARMANDO ACOSTA RODRIGUEZ'
      , telefono : 4815285
      , email    : 'jvargas88@hotmail.com'
      , direccion: 'CARRERA 78P BIS # 33A - 91 SUR',
    }

    , demanda: {
      vencimientoPagare: '9/06/2017'
      , obligacion       : {
        A: 12431049,
      }
      , capitalAdeudado        : 8451598
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00615'
      , llaveProceso           : '11001400306520170093400'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '21/07/2017 // 18/09/2017',
    },
  }
  , {
    numero  : 90
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1032432802
      , nombre   : 'LUIS ESNEIDER ORDUZ FARFAN'
      , telefono : 'F 4712921'
      , email    : 'orduzcrit2@hotmail.com'
      , direccion: 'CARRERA 95 # 138 - 58',
    }
    , codeudor: {
      cedula: 1015435620
      , nombre: 'JESICA PAOLA GUZMAN OSPINA',
    }
    , demanda: {
      vencimientoPagare: '9/06/2020'
      , obligacion       : {
        A: 12330030,
      }
      , capitalAdeudado        : '$ 26.515.333'
      , entregaGarantiasAbogado: '0/01/1900'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00836'
      , llaveProceso           : '11001400303420170083600'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '20/06/2017'
      , mandamientoPago        : '10/07/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '2/12/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '18/07/2018',
        }
        , '292': {
          fechaAporta: '18/07/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'EMPLAZAMIENTO'
        , autoNotificado: '25/01/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '10/07/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 91
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79456791
      , nombre   : 'JAIME JESUS REYES OROZCO'
      , telefono : 'JAIME JESUS REYES OROZCO'
      , email    : 'F3554893              CEL 3165211980'
      , direccion: 'jaime.precco@gmail.com',
    }
    , codeudor: {
      cedula: 'CALLE 152 No 72 - 50  BOGOTA',
    }
    , demanda: {
      obligacion: {
        A: '05/04/2018 15/01/2021'
        , B: 2500083807,
      }
      , capitalAdeudado: '5491580435077256 / 5303719778865608'
      , entregaGarantiasAbogado:
        '###############################################################################################################################################################################################################################################################'
      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'BOGOTA'
      , tipoProceso      : 'SINGULAR'
      , radicado         : '2018 - 00406'
      , llaveProceso     : '11001400303120180040600'
      , etapaProcesal    : '2018 - 00406'
      , fechaPresentacion: '11001400301420180040600',
    },
  }
  , {
    numero  : 92
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52214536
      , nombre   : 'MAGDA MILENA SALINAS RODRIGUEZ'
      , telefono : 'F 8142058'
      , email    : 'magda-mile@hotmail.com'
      , direccion: 'CARRERA 40A # 1H - 06',
    }

    , demanda: {
      vencimientoPagare: '9/06/2020'
      , obligacion       : {
        A: 11875034
        , B: 5406920000000000,
      }
      , capitalAdeudado        : '$ 20.568.241'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00841'
      , llaveProceso           : '11001400301320170084100'
      , etapaProcesal          : '11001400301320170084100'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '20/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '3/11/2017',
        }
        , '292': {
          fechaRecibido: '3/11/2017'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '30/06/2017'
        , fisico   : 'NO'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/10/2017'
        , medidaSolicitada  : '30/06/2017',
      },
    },
  }
  , {
    numero  : 93
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1140835529
      , nombre   : 'VIVIAN PAOLA BRUGES MEDINA'
      , telefono : 3599167
      , email    : 'vivibruges@hotmail.com'
      , direccion: 'CALLE 133 # 53 - 365CJ LOMAS DE (BARRANQUILLA)',
    }

    , demanda: {
      vencimientoPagare: '6/08/2031'
      , obligacion       : {
        A: 166689,
      }
      , capitalAdeudado        : 37074975
      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CAJICA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00496'
      , llaveProceso           : '25126408900120170049600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '20/06/2017'
      , mandamientoPago        : '5/10/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '5/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 94
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1030527169
      , nombre   : 'AIDA YURANI GRIJALBA MARTINEZ'
      , telefono : 2607867
      , email    : 'o'
      , direccion: 'CARRERA 70C # 1A - 86 SUR',
    }

    , demanda: {
      vencimientoPagare: '9/10/2034'
      , obligacion       : {
        A: 177994,
      }
      , capitalAdeudado        : 95244711
      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00591'
      , llaveProceso           : '11001400305620170059100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '29/06/2017'

      , notificacion: {
        '291': {
          fechaRecibido: 1721
          , resultado    : '2/08/2017',
        }

        , certimail: '18/07/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 95
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1015410386
      , nombre   : 'EDWIN JHOBANI PEREZ PITA'
      , telefono : 4758582
      , email    : 'edwinperez8302@hotmail.com'
      , direccion: 'CARRERA 40B # 1 - 61',
    }

    , demanda: {
      vencimientoPagare: '13/06/2017'
      , obligacion       : {
        A: 12099135,
      }
      , capitalAdeudado        : 19146744
      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00575'
      , llaveProceso           : '11001400302820170057500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '29/06/2017'
      , mandamientoPago        : '10/07/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '10/07/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 96
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52818959
      , nombre   : 'YURANNY POLANCO CESPEDES'
      , telefono : 4638445
      , email    : 'bluemoontauro@hotmail.com'
      , direccion: 'CARRERA 72 # 57B - 50',
    }

    , demanda: {
      vencimientoPagare: '30/01/2033'
      , obligacion       : {
        A: 160742
        , B: 377815863029282,
      }
      , capitalAdeudado        : 46027552
      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00871'
      , llaveProceso           : '11001400305320170087100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '29/06/2017',
    },
  }
  , {
    numero  : 97
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19270589
      , nombre   : 'JOSE ALFREDO RIAÑO MALDONADO'
      , telefono : 2388711
      , email    : 'conjuexeu@hotmail.com'
      , direccion: 'CALLE 52 A BIS  No 35 B 41 SUR',
    }

    , demanda: {
      obligacion: {
        A: 20990137187,
      }
      , capitalAdeudado        : '79.862.886.23'
      , entregaGarantiasAbogado: '20/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2016 - 00319'
      , llaveProceso           : '11001400308520160031900'
      , etapaProcesal          : 'NOTIFICACION'

      , mandamientoPago: '12/01/2018'
      , notificacion   : {
        tipo          : 'P/NAL'
        , autoNotificado: 43124,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/01/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 98
    , category: 'Terminados'
    , deudor  : {
      cedula   : 41672170
      , nombre   : 'MARIA DEL CARMEN CHAPARRO LEMUS'
      , telefono : 2501908
      , email    : 'carmenzachaparro@outlook.com'
      , direccion: 'CARRERA 50A # 68 - 39',
    }

    , demanda: {
      vencimientoPagare: '25/01/2030'
      , obligacion       : {
        A: 190459,
      }

      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00623'
      , llaveProceso           : '11001400301120170062300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '29/06/2017'
      , mandamientoPago        : '8/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '8/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 99
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79996551
      , nombre  : 'YONI ALEXANDER RESTREPO PEÑUELA'
      , telefono: 7754676

      , direccion: 'TRANSVERSAL 78A # 71A - 71 SUR',
    }

    , demanda: {
      vencimientoPagare: '13/062017'
      , obligacion       : {
        A: 5306934855078754
        , B: 12378896,
      }
      , capitalAdeudado        : 16215928
      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'KENNEDY'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01110'
      , llaveProceso           : '1100141037512017111000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '08/08/17'
      , mandamientoPago        : '24/01/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '24/01/2018'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 100
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80430881
      , nombre   : 'JHON JAIRO RUBIO ORTIZ'
      , telefono : 3143190799
      , email    : 'jojaro07@hotmail.com'
      , direccion: 'CALLE 8 # 1 - 92E MADRID',
    }

    , demanda: {
      vencimientoPagare: '13/06/2017'
      , obligacion       : {
        A: 377814000000000
        , B: 12484407,
      }
      , capitalAdeudado        : '$ 17.280.117'
      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MADRID'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00684'
      , llaveProceso           : '25430418900120170068400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '29/06/2017'
      , mandamientoPago        : '25/07/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'J2017-673'
          , resultado    : '1/08/2017',
        }
        , '292': {
          fechaRecibido: '28/09/2017',
        }
        , certimail: '25/07/2017'
        , fisico   : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 101
    , category: 'Terminados'
    , deudor  : {
      cedula   : 57452535
      , nombre   : 'LEILA JOHANNA MARTINEZ MORA'
      , telefono : 3004975278
      , email    : 'lei.m@hotmail.com'
      , direccion: 'CALLE 102 # 15 - 58 APTO 204',
    }

    , demanda: {
      vencimientoPagare: '13/06/2017'
      , obligacion       : {
        A: 12545412,
      }
      , capitalAdeudado        : 54468401
      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00653'
      , llaveProceso           : '11001400301020170065301'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '29/06/2017'
      , mandamientoPago        : '3/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 2436
          , resultado    : '18/08/2017',
        }
        , '292': {
          fechaRecibido: '24/08/2017',
        }
        , certimail: '3/08/2017'
        , fisico   : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 102
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 1070329396
      , nombre  : 'ERIKA ALEJANDRA QUINTERO REYES'
      , telefono: 'CEL 3114456631'

      , direccion: 'CALL 2 No. 8-40 EL COLEGIO',
    }

    , demanda: {
      vencimientoPagare: '5/07/2019'
      , obligacion       : {
        A: 7300080586,
      }
      , capitalAdeudado        : '$ 50.000.000'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MESITAS'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-00239'
      , llaveProceso           : '25245408900120170023900'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '15/06/2017 // 29/08/2017'
      , mandamientoPago        : '7/11/2017'
      , notificacion           : {
        '291': {
          fechaAporta: '17/05/2018',
        }
        , '292': {
          fechaAporta: '17/05/2018'
          , resultado  : 'POSITIVO',
        }

        , tipo          : 'CORREO'
        , autoNotificado: '17/07/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '7/11/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 103
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 16831314
      , nombre   : 'EDUARDO ENRIQUE ARANGO CHACON'
      , telefono : 'CEL 3216066052'
      , email    : 'kikearango@hotmail.com'
      , direccion: 'CARRERA 74 No. 25 G-69',
    }

    , demanda: {
      vencimientoPagare: '13/05/2019'
      , obligacion       : {
        A: '1800088189//377813488630162'
        , B: '4513071987853655//5303715363121332',
      }
      , capitalAdeudado        : '$ 43.921.469'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-00680'
      , llaveProceso           : '11001400308220170068000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '16/06/2017'
      , mandamientoPago        : '17/07/2017'
      , notificacion           : {
        '291': {
          resultado  : 'POSITIVO'
          , fechaAporta: '5/02/2018',
        }
        , '292': {
          resultado: 'POSITIVO',
        }

        , tipo          : 'CORREO'
        , autoNotificado: 'SOLICITUD EPS',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '17/07/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 104
    , category: 'Terminados'
    , deudor  : {
      cedula   : 51922135
      , nombre   : 'NANCY HERRERA MENDEZ'
      , telefono : '7573897//3103230563'
      , email    : 'nancy_herrera2@hotmail.es'
      , direccion: 'CARRERA 73 No. 87-07 APARTAMENTO 211 TORRE 6',
    }

    , demanda: {
      vencimientoPagare: '28/08/2015'
      , obligacion       : {
        A: 127061
        , B: 540084358,
      }
      , capitalAdeudado        : '$ 3.244.441'
      , entregaGarantiasAbogado: '19/07/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00417'
      , llaveProceso           : '11001400300620170041700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '21/07/2017'
      , mandamientoPago        : '27/07/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '1415/1416'
          , resultado    : '4/08/2017',
        }

        , certimail: '27/07/2017'
        , fisico   : 'INMUEBLE/BANCOS',
      },
    },
  }
  , {
    numero  : 105
    , category: 'Terminados'
    , deudor  : {
      cedula  : 15319344
      , nombre  : 'ESTELIO DE JESUS  ROLDAN POZO'
      , telefono: 3133809713

      , direccion: 'CALLE 42 A BIS SUR No. 90A -64',
    }
    , codeudor: {
      cedula: 15271543
      , nombre: 'HERNANDO ESTELIO ROLDAN UPEGUI'

      , direccion: 'CARRERA 58 No.42-125 medellin//fernando.roldan1979@gmail.com',
    }
    , demanda: {
      vencimientoPagare: '27/04/2020'
      , obligacion       : {
        A: 5850082368,
      }
      , capitalAdeudado        : '$ 13.688.162'
      , entregaGarantiasAbogado: '19/07/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01113'
      , llaveProceso           : '11001400300720170111300'

      , fechaPresentacion: 'ADMISION'
      , mandamientoPago  : '21/07/2017'
      , notificacion     : {
        certimail: '14/08/2017'

        , autoNotificado: 'OK',
      }
      , medidasCautelares: {
        medidaSolicitada: '14/08/2017',
      },
    },
  }
  , {
    numero  : 106
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 501492
      , nombre   : 'DANIEL HERNANDEZ GONZALEZ'
      , telefono : 'F 2716567'
      , email    : 'danielher84@gmail.com'
      , direccion: 'CALLE 134 No. 58-58',
    }

    , demanda: {
      vencimientoPagare: '28/08/2018'
      , obligacion       : {
        A: 12515504,
      }
      , capitalAdeudado        : '$ 16.497.281'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00483'
      , llaveProceso           : '11001400305920170048300'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '16/06/2017'
      , mandamientoPago        : '19/07/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '12/08/2017'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '12/08/2017',
        }
        , '292': {
          fechaRecibido: '28/08/2017'
          , fechaAporta  : '14/02/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '15/05/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/07/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 107
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80112954
      , nombre   : 'HANYELO EFRAIN MARTINEZ TURRIAGO'
      , telefono : '5936306 // 3176550987'
      , email    : 'efrain.martinez.1021@hotmail.com'
      , direccion: 'DIAGONAL 52 B SUER # 5C - 20 ESTE',
    }

    , demanda: {
      vencimientoPagare: '29/01/2016'
      , obligacion       : {
        A: 6900084281
        , B: '4513070458359200 // AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 13.303.855'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00790'
      , llaveProceso           : '11001400305720170079000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '8/08/2017'
      , mandamientoPago        : '30/08/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '30/08/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 108
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79558732
      , nombre   : 'MIGUEL ANGEL HUERTAS VALENCIA'
      , telefono : 'F 2723136'
      , email    : 'miguelangelhuertasv@hotmail.com'
      , direccion: 'TRANVERSAL 15A # 31-09 SUR',
    }

    , demanda: {
      vencimientoPagare: '7/06/2020'
      , obligacion       : {
        A: 12455661
        , B: '12657330//12748966',
      }
      , capitalAdeudado        : '$ 211.610.991'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00736'
      , llaveProceso           : '11001310302520170073600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '20/06/2017'
      , mandamientoPago        : '23/10/2017'
      , notificacion           : {
        '291': {
          fechaAporta: '11/05/2018',
        }
        , '292': {
          fechaAporta: '11/05/2018',
        }

        , tipo          : 'CERTIMAIL'
        , autoNotificado: '11/05/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/10/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 109
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1018428090
      , nombre   : 'OSCAR IVAN AGUDELO MORA'
      , telefono : 3045449490
      , email    : 'oscar.agudelo@crcom.gov.co'
      , direccion: 'CARRERA 3 D # 32A - 69 SUR',
    }

    , demanda: {
      vencimientoPagare: '26/07/2017'
      , obligacion       : {
        A: 12491571,
      }
      , capitalAdeudado        : 21660562
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2018 - 00119'
      , llaveProceso           : '11001400302420180011900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '8/08/2017'
      , mandamientoPago        : '3/04/2018'
      , notificacion           : {
        certimail: 'CERTIMAIL'

        , tipo          : 'P/NAL'
        , autoNotificado: 43228,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '3/04/2018'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 110
    , category: 'Terminados'
    , deudor  : {
      cedula  : 46677093
      , nombre  : 'MARLENE RONCANCIO BENITEZ'
      , telefono: 'F 5710351'

      , direccion: 'CALLE 33 SUR No. 82 B-06',
    }
    , codeudor: {
      cedula: '1055962390//80.072.429'
      , nombre:
        'JORGE ALBEIRO RONCANCIO BENITEZ Y VICTOR MANUEL PERILLA CASTAÑEDA'
      , telefono : '3142888137(1) 3107509193 (2)'
      , direccion: 'DIAGONAL 34 No. 82 B-06 (1) DIAGONAL 34 A No.81 F-13 (2)',
    }
    , demanda: {
      vencimientoPagare: '18/07/2019'
      , obligacion       : {
        A: 430103643,
      }
      , capitalAdeudado        : '$ 25.119.879'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00774'
      , llaveProceso           : '11001400304520170077400'
      , etapaProcesal          : '11001400304520170077400'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '20/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '1/09/2017',
        }
        , '292': {
          fechaRecibido: '26/01/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '27/06/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/03/2018'
        , medidaSolicitada  : '27/06/2017',
      },
    },
  }
  , {
    numero  : 111
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1020743892
      , nombre   : 'KAREN VIVIANA CASTAÑO CORONADO'
      , telefono : '2131545 // 3014347540'
      , email    : 'karenvivicastano@gmail.com'
      , direccion: 'CALLE 141 # 7B - 50 APTO 501',
    }

    , demanda: {
      vencimientoPagare: '26/07/2017'
      , obligacion       : {
        A: 12156526,
      }
      , capitalAdeudado        : '$ 12.433.690'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00712'
      , llaveProceso           : '11001400305420170071200'

      , fechaPresentacion: '8/08/2017',
    },
  }
  , {
    numero  : 112
    , category: 'Terminados'
    , deudor  : {
      cedula  : 23993605
      , nombre  : 'MARIA TRINIDAD SOTELO TORRES'
      , telefono: 'F 5399415              CEL 3124740888'

      , direccion: 'CARRERA 129 # 131 - 03',
    }

    , demanda: {
      vencimientoPagare: '26/07/2020 // 3/07/2020'
      , obligacion       : {
        A: 4513070000000000
        , B: '5303710149625331//12716727',
      }
      , capitalAdeudado        : '$ 98.478.181'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00974'
      , llaveProceso           : '11001400302020170097400'
      , etapaProcesal          : '11001400302020170097400'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '8/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '30/11/2017',
        }
        , '292': {
          fechaRecibido: '26/02/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '2/11/2017'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '8/08/2018'
        , medidaSolicitada  : '2/11/2017',
      },
    },
  }
  , {
    numero  : 113
    , category: 'Terminados'
    , deudor  : {
      cedula   : 53178044
      , nombre   : 'SANDRA BIBIANA URREGO MAYORGA'
      , telefono : '6210512 // 3167289932'
      , email    : 'bibi0225@hotmail.es'
      , direccion: 'CALLE 153 # 97B - 30 CASA ALTA',
    }
    , codeudor: {
      cedula   : 28052816
      , nombre   : 'MIRIAM MAYORGA'
      , telefono : 6210515
      , direccion: 'CALLE 153 # 97B - 30 CASA ALTA',
    }
    , demanda: {
      vencimientoPagare: '16/05/2021'
      , obligacion       : {
        A: 860669,
      }
      , capitalAdeudado        : '$ 16.305.609'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01817'
      , llaveProceso           : '11001400303020170181700'
      , etapaProcesal          : '11001400303020170181700'
      , fechaPresentacion      : 'LIQUIDACION'
      , mandamientoPago        : '8/08/2017 // 29/11/2017'
      , notificacion           : {
        certimail: '4/12/2017'

        , tipo          : 43248
        , autoNotificado: 'FISICO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/08/2018'
        , medidaSolicitada  : '4/12/2017',
      },
    },
  }
  , {
    numero  : 114
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79209455
      , nombre   : 'JOSE ANTONIO CAICEDO RUIZ'
      , telefono : '3213173 // 3128067314'
      , email    : 'antoniocaicedo1972@gmail.com'
      , direccion: 'CALLE 11 # 52A - 14 SOACHA',
    }

    , demanda: {
      vencimientoPagare: '15/11/2023'
      , obligacion       : {
        A: '377813527966924/'
        , B: '000000020990112484.',
      }
      , capitalAdeudado        : '$ 20.501.855'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00752'
      , llaveProceso           : '25754418900220170075200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '11/08/2017'
      , mandamientoPago        : '24/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 1087
          , resultado    : '31/08/2017',
        }

        , certimail: '24/08/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 115
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52174728
      , nombre   : 'SILVIA MARIA VALENZUELA VELASQUEZ'
      , telefono : '5741561 // 3212344417'
      , email    : 'jucana92@hotmail.com'
      , direccion: 'CARRERA 80 # 41G - 09 SUR',
    }

    , demanda: {
      vencimientoPagare: '17/06/2025'
      , obligacion       : {
        A: 129471,
      }
      , capitalAdeudado        : 17831989
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00809'
      , llaveProceso           : '11001400305220170080900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '8/08/2017'
      , mandamientoPago        : '23/01/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '23/01/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 116
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52548162
      , nombre   : 'ANA KARINA MANTILLA PARDO'
      , telefono : '3579028 // 3164355892'
      , email    : 'karinamantilla@hotmail.com'
      , direccion: 'CARRERA 51A # 127 - 75 APTO 1102',
    }
    , codeudor: {
      cedula: 79781289
      , nombre: 'DIEGO FERNANDO DELGADO ACOSTA',
    }
    , demanda: {
      vencimientoPagare: '26/07/2017'
      , obligacion       : {
        A: 12001404
        , B: '4513070579287120.',
      }
      , capitalAdeudado        : '$ 18.077.141'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00830'
      , llaveProceso           : '11001400301020170083000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '8/08/2017'
      , mandamientoPago        : '14/09/2017'
      , notificacion           : {
        '292': {
          resultado: 43294,
        }

        , tipo: 'SOLICITUD EPS',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/09/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 117
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 19386444
      , nombre  : 'NICOLAS FERNANDO MONTOYA CORREA'
      , telefono: 'F 2531962'
      , email   : 3176677592
      , direccion:
        'CALLE 18 # 19 - 75 / CALLE 26 NTE No. 5A - 54 Cali - Valle //CR 60 D 97 85 BRR ANDES BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '21/01/2019'
      , obligacion       : {
        A: 420087224,
      }
      , capitalAdeudado        : '$ 17.256.863'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00566'
      , llaveProceso           : '11001400307020170056600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '20/06/2017'
      , mandamientoPago        : '30/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '10/05/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '25/06/2018',
        }
        , '292': {
          fechaAporta: '25/06/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'SI'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '25/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/08/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 118
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19308014
      , nombre   : 'JAIME ORLANDO PEÑA ROJAS'
      , telefono : '5353320// 3103358755'
      , email    : 'plangeluchis@gmail.com'
      , direccion: 'TRANSVERSAL 119 # 151A - 51 TORRE 11 APTO 602',
    }

    , demanda: {
      vencimientoPagare: '2/02/2022'
      , obligacion       : {
        A: 37813676080923
        , B: 20990093604,
      }
      , capitalAdeudado        : 1092045
      , entregaGarantiasAbogado: '4/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01456'
      , llaveProceso           : '11001400305320170145600'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '11/08/2017'
      , mandamientoPago        : '04/12/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '04/12/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 119
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79693495
      , nombre   : 'CESAR AUGUSTO GIL GALLEGO'
      , telefono : '4610722 // 3103789233'
      , email    : 'carolcecesar@gmail.com'
      , direccion: 'DIAGONAL 2A SUER # 78L - 81 APTO 501B',
    }

    , demanda: {
      vencimientoPagare: '13/05/2019'
      , obligacion       : {
        A: 450087082,
      }
      , capitalAdeudado        : 20987589
      , entregaGarantiasAbogado: '4/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00988'
      , llaveProceso           : '11001400301420170098800'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '11/08/2017'
      , mandamientoPago        : '19/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '19/09/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 120
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 900212673
      , nombre  : 'JENCELL E.U.'
      , telefono: 'F 5753416'

      , direccion: 'CARRERA 3 # 29A - 02',
    }
    , codeudor: {
      cedula   : 52771090
      , nombre   : 'YENY ESPERANZA ARIAS MENDIETA'
      , telefono : 5753416
      , direccion: 'CARRERA 3 # 29A - 02 LOCAL 1057',
    }
    , demanda: {
      vencimientoPagare: '12/04/2021'
      , obligacion       : {
        A: 6240082776,
      }
      , capitalAdeudado        : '$ 13.906.249'
      , entregaGarantiasAbogado: '4/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00755'
      , llaveProceso           : '25754418900320170075500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '11/08/2017'
      , mandamientoPago        : '8/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '12/12/2017'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '12/12/2017',
        }
        , '292': {
          fechaAporta: '12/12/2017'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '9/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '8/09/2017'
        , medidaSolicitada  : 'EMBARGO INMUEBLE DE LA CODEUDORA',
      },
    },
  }
  , {
    numero  : 121
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19453362
      , nombre   : 'JAIME ORLANDO LUGO RODRIGUEZ'
      , telefono : 8207907
      , email    : 'orlandolugo.r@gmail.com'
      , direccion: 'CARRERA 22 A # 8D - 08 SUR',
    }

    , demanda: {
      vencimientoPagare: '26/12/2029'
      , obligacion       : {
        A: '451305630938242.'
        , B: '20990179915 // AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 55.929.373'
      , entregaGarantiasAbogado: '4/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MADRID'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00273'
      , llaveProceso           : '25430400300120180027300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '11/08/2017'
      , mandamientoPago        : '16/05/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 43244,
        }

        , tipo: 'FISICA',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '16/05/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 122
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52543321
      , nombre  : 'PAOLA ANDREA FERNANDEZ RINCON'
      , telefono: 'andreafernandez@hotmail.com'
      , email   : 'CALLE 1H # 32A - 17',
    }

    , demanda: {
      vencimientoPagare: 135435
      , obligacion       : {
        A: 4513073601094195
        , B: 15774711,
      }
      , capitalAdeudado        : '$ 42.951'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR ACUM HIPOTECARIO'
      , radicado               : '2017 - 01193'
      , llaveProceso           : '11001400304020170119300'
      , etapaProcesal          : 42958
      , fechaPresentacion      : '13/09/2017'

      , notificacion: {
        '291': {
          fechaRecibido: 'POSITIVO'
          , resultado    : '3/09/2018',
        }

        , certimail: 'ENVIADO 292  24/08'
        , fisico   : 43268

        , autoNotificado: 42991,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '3828',
      },
    },
  }
  , {
    numero  : 123
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79547983
      , nombre  : 'GUSTAVO SANTAMARIA MOSQUERA'
      , telefono: 'gustavo_santamaria@hotmail.com'
      , email   : 'DIAGONAL 146 # 136A - 79 IN 3 AP 3',
    }

    , demanda: {
      vencimientoPagare: '7/10/2419'
      , obligacion       : {
        B: 48365616,
      }
      , capitalAdeudado        : '$ 42.951'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00754'
      , llaveProceso           : '11001400306920170075400'
      , etapaProcesal          : 42958
      , fechaPresentacion      : '3/10/2017'

      , notificacion: {
        '292': {
          resultado: 'FISICA',
        }

        , autoNotificado: 43011,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '3731',
      },
    },
  }
  , {
    numero  : 124
    , category: 'Terminados'
    , deudor  : {
      cedula   : 40025572
      , nombre   : 'BLANCA EDELMIRA ARIAS MELO'
      , telefono : '6749599 // 3202092701'
      , email    : 'eariasseguros@hotmail.com'
      , direccion: 'CALLE 181 # 17B 47 SAN ANTONIO',
    }

    , demanda: {
      obligacion: {
        A: 153313
        , B: 377815399826276,
      }

      , entregaGarantiasAbogado: '9/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01180'
      , llaveProceso           : '11001400303320170118000'

      , fechaPresentacion: '16/08/2017',
    },
  }
  , {
    numero  : 125
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 74338870
      , nombre  : 'MILCIADES GALINDO CASTEBLANCO'
      , telefono: 'F 4536131'

      , direccion: 'CARRERA 18 # 12 - 72',
    }
    , codeudor: {
      cedula   : 1098436221
      , nombre   : 'GERMAN ALONSO SANCHEZ PICO'
      , telefono : 3155275805
      , direccion: 'CALEE 4 # 20 - 85',
    }
    , demanda: {
      vencimientoPagare: '27/11/2020'
      , obligacion       : {
        A: 300093705,
      }
      , capitalAdeudado        : '$ 21.613.985'
      , entregaGarantiasAbogado: '12/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01520'
      , llaveProceso           : '11001400304720170152000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '20/06/2017 // 28/08/2017'
      , mandamientoPago        : '14/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '26/06/2018'
          , resultado    : 'NEGATIVO'
          , fechaAporta  : '26/06/2018',
        }
        , '292': {
          fechaAporta: '26/06/2018'
          , resultado  : 'NEGATIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'EMPLAZAMIENTO'
        , autoNotificado: 'PENDIENTE',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 126
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79834592
      , nombre   : 'YONNY ARTURO PINZON PULIDO'
      , telefono : '8211035 // 3138725407'
      , email    : 'japp161@hotmail.com'
      , direccion: 'CALLE 34 # 2- 07 TORRE 23 APTO 101',
    }

    , demanda: {
      obligacion: {
        A: 'AUDIOPRESTAMO'
        , B: '4513075306389036 // 5303715369427808',
      }
      , capitalAdeudado        : 14675091
      , entregaGarantiasAbogado: '11/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00762'
      , llaveProceso           : '25754418900320170076200'
      , etapaProcesal          : '25754418900320170076200'
      , fechaPresentacion      : 'LIQUIDACION'
      , mandamientoPago        : '16/08/2017'
      , notificacion           : {
        certimail: '24/08/2017'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'OK'
        , medidaSolicitada  : '24/08/2017',
      },
    },
  }
  , {
    numero  : 127
    , category: 'Terminados'
    , deudor  : {
      cedula   : 41610065
      , nombre   : 'ZOILA IRENE SUAVITA DE TRILLERAS'
      , telefono : '3614483 // 3124498840'
      , email    : 'albertotrilleras@hotmail.com'
      , direccion: 'CARRERA 23 # 20 - 40 SUR',
    }
    , codeudor: {
      cedula: 79481751
      , nombre: 'EDGAR EFREN PARRA',
    }
    , demanda: {
      llaveProceso     : 'SinEspecificar'
      , vencimientoPagare: '26/05/2021 // 26/07/2017'
      , obligacion       : {
        A: 6670083892
        , B: 12074022,
      }
      , capitalAdeudado        : '$ 51.302.541'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00735'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '27/10/2017'
      , mandamientoPago        : '3/11/2017'
      , notificacion           : {
        '292': {
          resultado: 43042,
        }

        , tipo          : 'VEHICULO INMUEBLE'
        , autoNotificado: '2438                  2439',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '15/11/2017'
        , medidaSolicitada  : 'VEHICULO INMUEBLE',
      },
    },
  }
  , {
    numero  : 128
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52385097
      , nombre   : 'MARIA GLADYS  GONZALEZ SOSA'
      , telefono : 2173287
      , email    : 'mariagladyys@hotmail.com'
      , direccion: 'CALLE 62B SUR # 70 F - 45',
    }
    , codeudor: {
      cedula: '52768380/'
      , nombre: 'LUZ MERY GONZALEZ SOSA',
    }
    , demanda: {
      vencimientoPagare: '11/05/2018'
      , obligacion       : {
        A: 4060080684,
      }
      , capitalAdeudado        : '$ 13.149.185'
      , entregaGarantiasAbogado: '15/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00733'
      , llaveProceso           : '11001400307820170073300'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '18/08/2017'
      , mandamientoPago        : '25/08/2017'
      , notificacion           : {
        tipo          : 'OK'
        , autoNotificado: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/08/2017'
        , medidaSolicitada  : 'VEHICULO/BANCOS',
      },
    },
  }
  , {
    numero  : 129
    , category: 'Terminados'
    , deudor  : {
      cedula   : 41709257
      , nombre   : 'ELENA QUIÑONES'
      , telefono : '6928962 // 3184581490'
      , email    : 'ele41709257@hotmail.com'
      , direccion: 'CALLE 150A # 101 - 20 TORRE 3 APTO 802',
    }

    , demanda: {
      vencimientoPagare: '29/07/2019 // 29/11/2021'
      , obligacion       : {
        A: 54744000041
        , B: '634444000044 // 377813872494423 // 5306935267717699',
      }
      , capitalAdeudado        : 12046670
      , entregaGarantiasAbogado: '15/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01064'
      , llaveProceso           : '11001400304320170106400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '18/08/2017'
      , mandamientoPago        : '15/09/2017'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: 43028,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '15/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 130
    , category: 'Terminados'
    , deudor  : {
      cedula   : 77010352
      , nombre   : 'ARMANDO ENRIQUE ROSADO MESTRE'
      , telefono : '6371679 // 3125855939'
      , email    : 'arosadomestre@yahoo.com'
      , direccion: 'CALLE 116 # 11C - 15 APTO 104',
    }

    , demanda: {
      obligacion: {
        A: 377815000000000,
      }
      , capitalAdeudado        : '12477030.70/'
      , entregaGarantiasAbogado: '15/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01153'
      , llaveProceso           : '11001400306420170115300'
      , etapaProcesal          : 'LIQUIDACION'
      , fechaPresentacion      : '18/08/2017'
      , mandamientoPago        : '29/08/2017'
      , notificacion           : {
        '292': {
          resultado: 43278,
        }

        , tipo          : 'CERTIMAIL'
        , autoNotificado: 43287,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '29/08/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 131
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52830770
      , nombre  : 'ROCIO ALEIDA ORTIZ BARRETO'
      , telefono: 'rachiy_26@hotmail.com'
      , email   : 'CARRERA 9 ESTE # 36 - 40 CASA 34',
    }
    , codeudor: {
      direccion: 45026,
    }
    , demanda: {
      vencimientoPagare: '15/12/2192'
      , obligacion       : {
        B: 16924662,
      }
      , capitalAdeudado        : '$ 42.965'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00774'
      , llaveProceso           : '25754418900120170077400'
      , etapaProcesal          : 42965
      , fechaPresentacion      : '5/09/2017'
      , mandamientoPago        : 'FISICO'
      , notificacion           : {
        '291': {
          resultado: '17/09/2018',
        }
        , '292': {
          fechaAporta: 43404
          , resultado  : 'FISICO',
        }

        , tipo          : 43413
        , autoNotificado: 42983,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '1064',
      },
    },
  }
  , {
    numero  : 132
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80049317
      , nombre   : 'JOVANI EMILIO RESTREPO RAMIREZ'
      , telefono : '8023973 // 3214033971'
      , email    : 'jovanirestrepo@hotmail.com'
      , direccion: 'CARRERA 145 # 144C - 72 TORRE 9 APTO 9',
    }
    , codeudor: {
      cedula   : 63476244
      , nombre   : 'RUBIN EMILCE ROJAS CALDERON'
      , telefono : 8023973
      , direccion: 'CALLE 142C # 141B - 60 LOCAL 9',
    }
    , demanda: {
      obligacion: {
        A: '1770990 // 4513076455160970'
        , B: 5303711546384996,
      }
      , capitalAdeudado        : 57161766
      , entregaGarantiasAbogado: '11/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01051'
      , llaveProceso           : '11001400306820170105100'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '23/08/2017'
      , mandamientoPago        : '28/09/2017             17/11/2017'
      , notificacion           : {
        tipo          : 'OK'
        , autoNotificado: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '28/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 133
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80820336
      , nombre   : 'CARLOS GIOVANNY RONDON GARCIA'
      , telefono : '4316891 // 3125757941'
      , email    : 'carlosrondon2008@hotmail.com'
      , direccion: 'CALLE 89A BIS B 113 - 23',
    }
    , codeudor: {
      cedula   : 1014188433
      , nombre   : 'LIDA ARCELIA PEREZ GOMEZ'
      , telefono : '6417865 // 3112288329'
      , direccion: 'CALLE 70 A BIS A 116 C 21  BLOQUE 9',
    }
    , demanda: {
      obligacion: {
        A: 130201,
      }
      , capitalAdeudado        : '$ 24.624.884'
      , entregaGarantiasAbogado: '11/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00950'
      , llaveProceso           : '11001400301220170095000'
      , etapaProcesal          : '11001400301220170095000'
      , fechaPresentacion      : 'LIQUIDACION'
      , mandamientoPago        : '22/08/2017'
      , notificacion           : {
        certimail: '12/09/2017'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '4/04/2018'
        , medidaSolicitada  : '12/09/2017',
      },
    },
  }
  , {
    numero  : 134
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80722626
      , nombre   : 'FREDY ALEXANDER BUENO PARADA'
      , telefono : '8284768 // 3105519200'
      , email    : 'fredy8221@hotmail.com'
      , direccion: 'CARRERA 2 # 1 - 04 BLOQUE 8 APTO 101',
    }
    , codeudor: {
      cedula   : 23473890
      , nombre   : 'CLEMENCIA PARADA AMAYA'
      , telefono : 3138687321
      , direccion: 'CALLE 31 # 3A 28',
    }
    , demanda: {
      vencimientoPagare: '28/08/2028'
      , obligacion       : {
        A: 167364
        , B: '377813624212172.',
      }
      , capitalAdeudado        : '$ 54.428.394'
      , entregaGarantiasAbogado: '16/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MADRID'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01083'
      , llaveProceso           : '25430400300120170108300'

      , fechaPresentacion: '24/08/2017',
    },
  }
  , {
    numero  : 135
    , category: 'Terminados'
    , deudor  : {
      cedula  : 5654542
      , nombre  : 'RUBER ANDRES VALENZUELA SIERRA'
      , telefono: 'F 6045701              CEL 3007704166'

      , direccion: 'CARRERA 16 # 10 - 30',
    }
    , codeudor: {
      cedula   : 52201411
      , nombre   : 'SANDRA STELLA CASTRO'
      , telefono : 7537111
      , direccion: 'TRANSVERSAL 11D ESTE # 42 - 24 SUR',
    }
    , demanda: {
      vencimientoPagare: '31/12/2020'
      , obligacion       : {
        A: 410086468,
      }
      , capitalAdeudado        : '$ 12.203.589'
      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00639'
      , llaveProceso           : '11001400300420170063900'
      , etapaProcesal          : '11001400300420170063900'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '29/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '19/12/2017',
        }
        , '292': {
          fechaRecibido: '19/12/2017'
          , fechaAporta  : 'NEGATIVO',
        }
        , certimail: '14/08/2017   20/09/2017'
        , fisico   : 'NO'

        , autoNotificado: 'EMPLAZAMIENTO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '24/03/2019',
      },
    },
  }
  , {
    numero  : 136
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79463388
      , nombre   : 'JORGE ERNESTO ROA MANRIQUE'
      , telefono : '2990898 // 3125225701'
      , email    : 'jorgeernesto@hotmail.com'
      , direccion: 'CALLE 46 SUR # 81G - 15',
    }

    , demanda: {
      vencimientoPagare: '4/10/2025'
      , obligacion       : {
        A: 132651,
      }
      , capitalAdeudado        : '$ 41.735.442'
      , entregaGarantiasAbogado: '16/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01491'
      , llaveProceso           : '11001400304720170149100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '23/08/2017'
      , mandamientoPago        : '21/11/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '21/11/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 137
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52818134
      , nombre   : 'EDNA MILENA MUÑOZ SANCHEZ'
      , telefono : '3002766 // 3002908272'
      , email    : 'ednita22ms@hotmail.com'
      , direccion: 'CALLE 181C # 11 - 75 TORRE 3 APTO 302',
    }
    , codeudor: {
      cedula   : 51568155
      , nombre   : 'LUZ MARINA MUÑOZ SANCHEZ'
      , telefono : '2124131 77 3004482243'
      , direccion: 'TRANSVERSAL 96A # 75B - 10 INTERIOR 10',
    }
    , demanda: {
      vencimientoPagare: '31/10/2023'
      , obligacion       : {
        A: 235349,
      }
      , capitalAdeudado        : 19926084.89
      , entregaGarantiasAbogado: '15/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01713'
      , llaveProceso           : '11001400304720170171300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '23/08/2017'
      , mandamientoPago        : '1/12/2017'
      , notificacion           : {
        tipo          : 'OK'
        , autoNotificado: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '1/12/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 138
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52323645
      , nombre   : 'FLOR YAMILE BARRANTES CARO'
      , telefono : '5471164 // 3103446498'
      , email    : 'ybarrantes@gmail.com'
      , direccion: 'CARRERA 19 # 22C - 75',
    }

    , demanda: {
      vencimientoPagare: '11/10/2027'
      , obligacion       : {
        A: 156979,
      }
      , capitalAdeudado        : 45758347.68
      , entregaGarantiasAbogado: '15/08/25017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01160'
      , llaveProceso           : '11001400306420170116000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/08/2017'
      , mandamientoPago        : '31/08/2017'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: 43034,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '31/08/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 139
    , category: 'Terminados'
    , deudor  : {
      cedula   : 20896387
      , nombre   : 'ANA EMILCE ROJAS SARMIENTO'
      , telefono : '7502262 // 3204955563'
      , email    : 'jose_agudelo@juancarpas.edu.com'
      , direccion: 'CARRERA 32 # 18 - 31 SUR',
    }
    , codeudor: {
      cedula   : '18153551 DNI'
      , nombre   : 'JOSE MARIA VILLACAMPA AINSA'
      , telefono : 3204955563
      , direccion: 'CARRERA 32 # 18 - 31 SUR',
    }
    , demanda: {
      obligacion: {
        A: 146579,
      }
      , capitalAdeudado        : '$ 91.986.323'
      , entregaGarantiasAbogado: '15/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00793'
      , llaveProceso           : '11001400306120170079300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '23/08/2017'
      , mandamientoPago        : '29/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '29/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 140
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80933170
      , nombre   : 'JHON FABER FORIGUA GARCIA'
      , telefono : 'F 4075393'
      , email    : 'Jfcomercializadorajb@hotmail.com'
      , direccion: 'CARRERA 8 # 13 - 34 SUR BLOQUE 6 APTO 101',
    }

    , demanda: {
      vencimientoPagare: '12/06/2020'
      , obligacion       : {
        A: 12480702,
      }
      , capitalAdeudado        : '$ 38.664.283'
      , entregaGarantiasAbogado: '28/06/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00568'
      , llaveProceso           : '11001400307720170056800'
      , etapaProcesal          : '11001400307720170056800'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '29/06/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '03/09/2018',
        }
        , '292': {
          fechaRecibido: '9/02/2019'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '1/08/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '8/06/2018'
        , medidaSolicitada  : '01/08/2017',
      },
    },
  }
  , {
    numero  : 141
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79412583
      , nombre   : 'EDGAR DAVID HERNANDEZ RINCON'
      , telefono : '4137430 // 3003932311'
      , email    : 'edgardavid302@hotmail.com'
      , direccion: 'CARREA 54 # 18 - 30 SUR APTO 201',
    }
    , codeudor: {
      cedula   : 1022357168
      , nombre   : 'LEIDY FERNANDA SANCHEZ GAMBA'
      , telefono : 5103158
      , direccion: 'TRANSVERSAL 54 # 18 - 30 SUR INTERIOR 3 APTO 201',
    }
    , demanda: {
      vencimientoPagare: '24/09/2017'
      , obligacion       : {
        A: 156285,
      }
      , capitalAdeudado        : 28130302.27
      , entregaGarantiasAbogado: '15/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01100'
      , llaveProceso           : '11001400303920170110000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/08/2017',
    },
  }
  , {
    numero  : 142
    , category: 'Terminados'
    , deudor  : {
      cedula  : 36184358
      , nombre  : 'DEISY POLANIA CUELLAR'
      , telefono: 3882131

      , direccion: 'CARREA 2 # 21 - 55 TO 402 J FUNZA',
    }

    , demanda: {
      obligacion: {
        A: 20990186969,
      }
      , capitalAdeudado        : 123933432.79
      , entregaGarantiasAbogado: '11/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUNZA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00742'
      , llaveProceso           : '25286310300120170074200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '23/08/2017'
      , mandamientoPago        : '9/10/2017'
      , notificacion           : {
        '292': {
          resultado: 43257,
        }

        , tipo: 'FISICO',
      }
      , medidasCautelares: {
        medidaSolicitada: 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 143
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1023904524
      , nombre   : 'PAOLA ANDREA RODRIGUEZ MORALES'
      , telefono : 8136733
      , email    : 'dalila_paito@hotmail.com'
      , direccion: 'CALLE 22C SUR # 5 - 54',
    }
    , codeudor: {
      cedula   : 5568506
      , nombre   : 'JOSE MANUEL ARDILA'
      , telefono : 8136733
      , direccion: 'CALLE 22C SUR # 5 - 54',
    }
    , demanda: {
      vencimientoPagare: '30/06/2017'
      , obligacion       : {
        A: 4280023643,
      }
      , capitalAdeudado        : 9079297
      , entregaGarantiasAbogado: '17/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01089'
      , llaveProceso           : '11001400303420170108900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/08/2017'
      , mandamientoPago        : '14/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '14/09/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 144
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52581513
      , nombre  : 'MARIA FILOMENA GONZALES SALAS'
      , telefono: 'CEL 3124794983'

      , direccion: 'CALLE 136A # 100A - 07',
    }
    , codeudor: {
      cedula: 1019036435
      , nombre: 'JHON EDER CHACON GONZALEZ'

      , direccion: 'CALLE 136A # 100A - 07',
    }
    , demanda: {
      vencimientoPagare: '26/10/2020'
      , obligacion       : {
        A: 1980094643,
      }
      , capitalAdeudado        : '$ 10.481.215'
      , entregaGarantiasAbogado: '16/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00872'
      , llaveProceso           : '11001400302620170087200'
      , etapaProcesal          : '11001400302620170087200'
      , fechaPresentacion      : 'LIQUIDACIÓN DEL CRÉDITO SOLICITADA'
      , mandamientoPago        : '22/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '19/09/2018',
        }
        , '292': {
          fechaRecibido: '11/10/2018'
          , fechaAporta  : 'NEGATIVO'
          , resultado    : 43646,
        }
        , certimail     : '29/08/2017'
        , fisico        : 'NO'
        , tipo          : 43770
        , autoNotificado: 'EMPLAZAMIENTO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/11/2019'
        , medidaSolicitada  : '29/08/2017',
      },
    },
  }
  , {
    numero  : 145
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79714749
      , nombre   : 'JHON JAMINTON FUENTES CARREÑO'
      , telefono : 7244449
      , email    : 'joja1114@hotmail.com'
      , direccion: 'CALLE 66A SUR # 66 - 81 TORRE 16 APTO 661',
    }

    , demanda: {
      vencimientoPagare: '19/11/2035'
      , obligacion       : {
        A: 189023
        , B: '4099835384362938 // 5303715821335466',
      }
      , capitalAdeudado        : 53995817.72
      , entregaGarantiasAbogado: '15/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00817'
      , llaveProceso           : '11001400305520170081700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/08/2017'
      , mandamientoPago        : '28/09/2017'
      , notificacion           : {
        tipo          : 'OK'
        , autoNotificado: 43276,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '28/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 146
    , category: 'Terminados'
    , deudor  : {
      cedula   : 4520757
      , nombre   : 'PEDRO NEL PELAEZ TISNES'
      , telefono : '2103564 // 3116216567'
      , email    : 'pelaezpedro@hotmail.com'
      , direccion: 'TRANVERSAL 3 # 52B - 09 APTO 405',
    }

    , demanda: {
      vencimientoPagare: '11/08/2017'
      , obligacion       : {
        A: 12730731
        , B: '377813515714351.',
      }
      , capitalAdeudado        : '377813515714351 // 4513084893961108'
      , entregaGarantiasAbogado: '17/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00826'
      , llaveProceso           : '11001400308620170082600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/08/2017'
      , mandamientoPago        : '11/12/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '11/12/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 147
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80080669
      , nombre   : 'MILTON ANDRES LAITON RINCON'
      , telefono : 'F 6320923              CEL 3133912606'
      , email    : 'andreslaiton@hotmail.com'
      , direccion: 'CALLE 75 # 89B - 09 APTO 104 TORRE 8',
    }

    , demanda: {
      vencimientoPagare: '5/12/2021'
      , obligacion       : {
        A: 4800902204,
      }
      , capitalAdeudado        : '$ 84.049.009'
      , entregaGarantiasAbogado: '15/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00747'
      , llaveProceso           : '11001400305920170074700'
      , etapaProcesal          : '11001400305920170074700'
      , fechaPresentacion      : 'EJECUCION'
      , mandamientoPago        : '22/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO',
        }

        , certimail: '20/09/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/02/2018'
        , medidaSolicitada  : '20/09/2017',
      },
    },
  }
  , {
    numero  : 148
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79505815
      , nombre   : 'NESTOR GERARDO OSORIO MORALES'
      , telefono : '4109980 // 6255975'
      , email    : 'nestorg1969@hotmail.com'
      , direccion: 'AERONAUTICA CIVIL AVENIDA CALLE 26 # 106 - 33',
    }
    , codeudor: {
      cedula: 55162346
      , nombre: 'LIBNA AUDY GARZON GUTIERREZ',
    }
    , demanda: {
      vencimientoPagare: '10/08/2017'
      , obligacion       : {
        A: 12447813,
      }
      , capitalAdeudado        : 30873492
      , entregaGarantiasAbogado: '16/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00813'
      , llaveProceso           : '11001400300920170081300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/08/2017'
      , mandamientoPago        : '22/08/2017'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: '17/01/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/08/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 149
    , category: 'Terminados'
    , deudor  : {
      cedula  : 23181779
      , nombre  : 'MAGDA TATIANA TORRES GONZALEZ'
      , telefono: '7867106 // 3138172167'
      , email   : 'tatianamag12@hotmail.com'
      , direccion:
        'CENTRO COMERCIAL SURICENTRO LOCAL 6 -97 (MONTERIA) 77 CARRERA 4 ESTE # 38 - 56 ESTAPA H4 CASA 62',
    }

    , demanda: {
      vencimientoPagare: '29/08/2042'
      , obligacion       : {
        A: 155176,
      }
      , capitalAdeudado        : 51748331.77
      , entregaGarantiasAbogado: '18/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00256'
      , llaveProceso           : '25754400300220170025600'

      , fechaPresentacion: '22/08/2017',
    },
  }
  , {
    numero  : 150
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79988076
      , nombre   : 'VICTOR TRIANA ALARCON'
      , telefono : '3156448 // 3156448156'
      , email    : 'g.o75@hotmail.com'
      , direccion: 'CALLE 136 # 157 - 91',
    }

    , demanda: {
      vencimientoPagare: '19/01/2025'
      , obligacion       : {
        A: 180394,
      }
      , capitalAdeudado        : 47820559
      , entregaGarantiasAbogado: '23/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00249'
      , llaveProceso           : '2575440030012017024900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '19/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '19/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 151
    , category: 'Terminados'
    , deudor  : {
      cedula: 88227428
      , nombre: 'ANDRES FELIPE HIGUITA CARDONA'

      , email: 'higuitac@gmail.com'
      , direccion:
        'CALLE 180 # 12A - 16 INT 3 APT 202 ETAPA 3 // CALLE 137 # 91 - 40 INT 5 APTO 404',
    }

    , demanda: {
      obligacion: {
        A: '2273320123786.'
        , B: 337815690656158,
      }

      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01135'
      , llaveProceso           : '11001400307320170113500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '11/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 3675
          , resultado    : '18/09/2017',
        }

        , certimail: '11/09/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 152
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1032431042
      , nombre   : 'NICOLAS OSORIO RODRIGUEZ'
      , telefono : 'F 3142566               CEL 3142566974'
      , email    : 'nicolas.osorio@finamerica.com.co'
      , direccion: 'CARRERA 111 BIS # 154A - 30 TORRE 2 APTO 1007',
    }
    , codeudor: {
      cedula  : 1069729949
      , nombre  : 'JENNY BRIGITTE BALLEN MESA'
      , telefono: 8113984
      , direccion:
        'CARRERA 42 # 22 - 11  // CARRERA 11 BIS # 154A - 30 APTO 1007 TORRE 2',
    }
    , demanda: {
      vencimientoPagare: '5/02/2035'
      , obligacion       : {
        A: 180950,
      }
      , capitalAdeudado        : '$ 76.394.840'
      , entregaGarantiasAbogado: '23/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01136'
      , llaveProceso           : '110014007320170113600'
      , etapaProcesal          : '11001400307320170113600'
      , fechaPresentacion:
        'DESDE EL 25/03/2022 APARECE OFICIO CORREGIDO SIN TRAMITAR Y PASA A LA LETRA'
      , mandamientoPago: '5/09/2018',
    },
  }
  , {
    numero  : 153
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52230614
      , nombre   : 'MARBELL ROCIO DOMINGUEZ ALVAREZ'
      , telefono : '5168872 // 3214064280'
      , email    : 'rocio4332@hotmail.com'
      , direccion: 'CARRERA 15B # 6 - 32 TORRE 8 APTO 202',
    }

    , demanda: {
      obligacion: {
        A: 179883,
      }
      , capitalAdeudado        : 20221005.96
      , entregaGarantiasAbogado: '24/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00714'
      , llaveProceso           : '25754418900220170071400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '4/04/2018'
      , notificacion           : {
        tipo          : 43194
        , autoNotificado: 'INMUEBLE',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '00/04/2018',
      },
    },
  }
  , {
    numero  : 154
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79840930
      , nombre   : 'GABRIEL EDUARDO MEJIA LADINO'
      , telefono : '7347505 // 3112945552'
      , email    : 'gabriel.eml@hotmail.com'
      , direccion: 'CARRERA 79 BIS A # 73 - 92 SUR APTO 304 INT 3',
    }
    , codeudor: {
      cedula   : 53114743
      , nombre   : 'ELDORA ANDREA TRIANA SILVA'
      , telefono : 3143903
      , direccion: 'DIAGONAL 73A SUR # 78 - 40 CASA 11',
    }
    , demanda: {
      vencimientoPagare: '21/02/2018 // 26/10/20247'
      , obligacion       : {
        A: 5670083032
        , B: '377813199287708 // 4513075700372455 // 123470',
      }
      , capitalAdeudado        : 29366625.4
      , entregaGarantiasAbogado: '23/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , radicado               : '2017 - 00841'
      , llaveProceso           : '11001400303620170084100'
      , etapaProcesal:
        'EL 11/07/2018 EL JUZGADO DECRETA TERMINACION PROCESO POR PAGO CUOTAS EN MORA // EL 5/09/2018 SE DEVOLVIERON GARANTIAS A AECSA S.A. // 30/08/2022 NO SE HAN LEVANTADO MEDIDAS CAUTELARES// PAGAR DESARCHIVE Y TRAMITAR OFICIO RECIENTE // ARCHIVO DEFINITIVO 596-2018'
      , fechaPresentacion: '5/09/2018',
    },
  }
  , {
    numero  : 155
    , category: 'Terminados'
    , deudor  : {
      cedula: 71557211
      , nombre: 'CARLOS ARTURO RUEDA ALZATE'

      , email    : 'ruedacarlos47@gmail.com'
      , direccion: 'CALLE 7 # 5 - 29 TORRE 8 APTO 303',
    }
    , codeudor: {
      cedula   : 53063756
      , nombre   : 'SULLMAN JANETH SABOGAL JIMENEZ'
      , telefono : '6197842 // 3112563218'
      , direccion: 'CL 7 5 29 TR 8 AP 303',
    }
    , demanda: {
      vencimientoPagare: '29/11/2028'
      , obligacion       : {
        A: 4513082821740149
        , B: 20990170294,
      }
      , capitalAdeudado        : 40423614
      , entregaGarantiasAbogado: '4/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00717'
      , llaveProceso           : '11001400308320170071700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '11/08/2017'
      , mandamientoPago        : '4/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '4/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 156
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52431512
      , nombre   : 'MARTHA PATRICIA MORALES SARMIENTO'
      , telefono : 'F 8295963'
      , email    : 'gerencia@logimontacargas.com'
      , direccion: 'CARRERA 10 # 5 - 62 TORRE 7 APTO 127',
    }

    , demanda: {
      vencimientoPagare: '15/08/2020'
      , obligacion       : {
        A: 12519120
        , B: 12549733,
      }
      , capitalAdeudado        : '$ 41.371.151'
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MOSQUERA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00777'
      , llaveProceso           : '25473400300120170077700'
      , etapaProcesal          : '25473400300120170077700'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '28/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '27/10/2017',
        }
        , '292': {
          fechaRecibido: '27/10/2017'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '19/09/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '31/10/2017'
        , medidaSolicitada  : '19/09/2017',
      },
    },
  }
  , {
    numero  : 157
    , category: 'Terminados'
    , deudor  : {
      cedula: 19146821
      , nombre: 'LUIS ALBERTO MENDOZA CASTAÑO',
    }

    , demanda: {
      departamento: 'CUNDINAMARCA'
      , municipio   : 'BOGOTA'
      , tipoProceso : 'SINGULAR'
      , radicado    : '2017 - 00889'
      , llaveProceso: '11001400301120170088900'

      , fechaPresentacion: '28/08/2017',
    },
  }
  , {
    numero  : 158
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80808819
      , nombre   : 'JULIAN JHOHANY GALLEGO MONTES'
      , telefono : 'F 3115070'
      , email    : 'jjgallego14@hotmail.com'
      , direccion: 'CARRERA 3 ESTE # 6B - 36 CHIA',
    }
    , codeudor: {
      cedula   : 53911221
      , nombre   : 'LUZ ANGELA POVEDA RAMOS'
      , telefono : 8393651
      , direccion: 'CARRERA 3 ESTE # 6B - 36 CHIA',
    }
    , demanda: {
      vencimientoPagare: '26/03/2034'
      , obligacion       : {
        A: 173482
        , B: '4099849860904006 // AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 183.128.611'
      , entregaGarantiasAbogado: '17/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'ZIPAQUIRA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00393'
      , llaveProceso           : '25899310300120170039300'
      , etapaProcesal          : '25899310300120170039300'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '29/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '23/05/2018',
        }
        , '292': {
          fechaRecibido: '23/05/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '7/03/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '13/07/2018'
        , medidaSolicitada  : '7/03/2017',
      },
    },
  }
  , {
    numero  : 159
    , category: 'Terminados'
    , deudor  : {
      cedula   : 98389962
      , nombre   : 'ALLAN FREDY TOBAR ENCISO'
      , telefono : 3125586008
      , email    : 'allantobar@gmail.com'
      , direccion: 'CARRERA 14 # 11 - 14 SUR BLOQUE 10',
    }

    , demanda: {
      vencimientoPagare: '16/08/2017'
      , obligacion       : {
        A: 11932772,
      }
      , capitalAdeudado        : 18653826
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01333'
      , llaveProceso           : '11001400307320170133300'

      , fechaPresentacion: '28/08/2017',
    },
  }
  , {
    numero  : 160
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79387342
      , nombre   : 'JAIRO ALBERTO CARRILLO SALINAS'
      , telefono : '6047182 // 3118411820'
      , email    : 'jairocarrillosa@hotmail.com'
      , direccion: 'CALLE 28A SUR # 28A - 18',
    }

    , demanda: {
      vencimientoPagare: '7/12/20149'
      , obligacion       : {
        A: 103083921,
      }
      , capitalAdeudado        : 12000000
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00762'
      , llaveProceso           : '11001400307820170076200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '31/08/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '31/08/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 161
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79335809
      , nombre   : 'RICARDO ALBERTO BELTRAN HERNANDEZ'
      , telefono : '3153808 // 3153808376'
      , email    : 'norina@reservalaboral.com.co'
      , direccion: 'CALLE 23 # 5 - 23 CASA 4 INT 10',
    }

    , demanda: {
      vencimientoPagare: '31/10/2033'
      , obligacion       : {
        A: 169486,
      }
      , capitalAdeudado        : 120292568
      , entregaGarantiasAbogado: '24/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MOSQUERA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00956'
      , llaveProceso           : '25286310300120170095600'

      , fechaPresentacion: '31/08/2017',
    },
  }
  , {
    numero  : 162
    , category: 'Terminados'
    , deudor  : {
      cedula  : 900432476
      , nombre  : 'MANHATTAN DOTACIONES S.A.S'
      , telefono: 'OK'
      , email   : 7514006,
    }
    , codeudor: {
      cedula   : 'CARRERA 34 # 34 - 71 SUR INT 10'
      , nombre   : 52076347
      , telefono : 'CARMEN ALICIA RAMIREZ CHURQUE'
      , direccion: 4738129,
    }
    , demanda: {
      vencimientoPagare: 'AVENIDA 68 # 4 - 40 BLOQUE 6 APTO 402'
      , obligacion       : {
        A: 43449
        , B: 1540086035,
      }

      , entregaGarantiasAbogado: 17877732
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00946'
      , llaveProceso           : '11001400304120170094600'

      , fechaPresentacion: 'SENTENCIA'
      , mandamientoPago  : '30/08/2017'
      , notificacion     : {
        certimail: '2/11/2017'
        , fisico   : 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/09/2018',
      },
    },
  }
  , {
    numero  : 163
    , category: 'Terminados'
    , deudor  : {
      cedula: 71557211
      , nombre: 'CARLOS ARTURO RUEDA ALZATE'

      , email    : 'ruedacarlos47@gmail.com'
      , direccion: 'CALLE 7 # 5 - 29 TORRE 8 APTO 303',
    }
    , codeudor: {
      cedula   : 53063756
      , nombre   : 'SULLMAN JANETH SABOGAL JIMENEZ'
      , telefono : '6197842 // 3112563218'
      , direccion: 'CL 7 5 29 TR 8 AP 303',
    }
    , demanda: {
      vencimientoPagare: '29/11/2028'
      , obligacion       : {
        A: 4513082821740149
        , B: 20990170294,
      }
      , capitalAdeudado        : 40423614
      , entregaGarantiasAbogado: '4/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MOSQUERA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00924'
      , llaveProceso           : '25473418900120170092400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '6/10/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '6/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 164
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 14255996
      , nombre  : 'URIEL RUIZ DIAZ'
      , telefono: 'CEL 3102785072'

      , direccion: 'CARRERA 82 A No. 6B-30 CASA 36',
    }

    , demanda: {
      vencimientoPagare: '30/09/2019'
      , obligacion       : {
        A: 6240082772,
      }
      , capitalAdeudado        : '$ 25.519.225'
      , entregaGarantiasAbogado: '19/07/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00905'
      , llaveProceso           : '11001400304520170090500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '21/07/2017'
      , mandamientoPago        : '1/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '29/09/2017'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '15/02/2018',
        }
        , '292': {
          fechaAporta: '25/01/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '28/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '1/09/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 165
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 86057132
      , nombre   : 'FREDY MENESES'
      , telefono : 'F 4088069              CEL 3125312823'
      , email    : 'imagenfmr@yahoo.com'
      , direccion: 'Carrera 40 D No. 1H-28',
    }

    , demanda: {
      vencimientoPagare: '18/08/2019'
      , obligacion       : {
        A: 2310089458
        , B: '4513088545588847// AUDIO PRESTAMO',
      }
      , capitalAdeudado        : '$ 44.742.148'
      , entregaGarantiasAbogado: '19/07/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00635'
      , llaveProceso           : '11001400307620170063500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '21/07/2017'
      , mandamientoPago        : '3/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '6/06/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '6/06/2018',
        }
        , '292': {
          fechaAporta: '6/06/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'PERSONAL'
        , autoNotificado: '6/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '3/08/2017'
        , medidaSolicitada  : 'VEHICULO//BCOS',
      },
    },
  }
  , {
    numero  : 166
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52432989
      , nombre   : 'DORA AIDE PEÑA PEÑA'
      , telefono : 'F 54006426            CEL 3142403097'
      , email    : 'aide116455@hotmail.com'
      , direccion: 'CALLE 70C # 111D - 06',
    }

    , demanda: {
      vencimientoPagare: '16/08/2020'
      , obligacion       : {
        A: 12752576,
      }
      , capitalAdeudado        : '$ 30.526.136'
      , entregaGarantiasAbogado: '22/082017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00837'
      , llaveProceso           : '11001400300920170083700'
      , etapaProcesal          : '11001400300920170083700'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '20/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '6/12/2017',
        }
        , '292': {
          fechaRecibido: '25/01/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '25/09/2018'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/01/2018'
        , medidaSolicitada  : '25/09/2018',
      },
    },
  }
  , {
    numero  : 167
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79688268
      , nombre   : 'JOSE MAURICIO GONZALEZ CALDERON'
      , telefono : 'F 4589855              CEL 3196564315'
      , email    : 'maurgonzal@yahoo.com'
      , direccion: 'CARRERA 83A # 116A - 72 CASA 214',
    }
    , codeudor: {
      cedula   : 51856840
      , nombre   : 'ROSALINA AYALA PEREZ'
      , telefono : 4589855
      , direccion: 'CARRERA 83A # 116A - 72 CASA 214',
    }
    , demanda: {
      vencimientoPagare: '7/10/2031'
      , obligacion       : {
        A: 197033,
      }
      , capitalAdeudado        : '$ 118.940.346'
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00710'
      , llaveProceso           : '11001310301020170071000'
      , etapaProcesal          : '11001310301020170071000'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '6/12/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '20/06/2018',
        }
        , '292': {
          fechaRecibido: '20/06/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '21/02/2018'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL CON APODERADO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '21/08/2018'
        , medidaSolicitada  : '21/02/2018',
      },
    },
  }
  , {
    numero  : 168
    , category: 'Terminados'
    , deudor  : {
      cedula   : 21046826
      , nombre   : 'MARIA STELLA HERNANDEZ BELTRAN'
      , telefono : '6861327 // 3164673352'
      , email    : 'sergio830@hotmail.com'
      , direccion: 'CARRERA 7 # 71 - 24',
    }
    , codeudor: {
      cedula   : 53067291
      , nombre   : 'CINDY MABEL ALVARADO HERNANDEZ'
      , telefono : 8033725
      , direccion: 'CARRERA 102B # 140A - 45 SEGUNDO PISO',
    }
    , demanda: {
      vencimientoPagare: '24/03/2024'
      , obligacion       : {
        A: 116942,
      }
      , capitalAdeudado        : 18141791
      , entregaGarantiasAbogado: '17/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00872'
      , llaveProceso           : '11001400301920170087200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '26/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '26/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 169
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 23553904
      , nombre   : 'RITA BLANCO DE GOMEZ'
      , telefono : 'F 3861894'
      , email    : 'dorancy1@hotmail.com'
      , direccion: 'Carrera 67 No. 65-22 sur Torre 15 Apto 559',
    }
    , codeudor: {
      cedula: 46453644
      , nombre: 'NIDIA DORANCY GOMEZ BLANCO',
    }
    , demanda: {
      vencimientoPagare: '15/03/2020'
      , obligacion       : {
        A: 12498762
        , B: 'audioprestamo',
      }
      , capitalAdeudado        : '$ 13.144.437'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01264'
      , llaveProceso           : '11001400300320170126400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '21/07/2017'
      , mandamientoPago        : '3/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '26/11/2019'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '5/12/2019',
        }
        , '292': {
          fechaAporta: '12/12/2019'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '12/12/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '3/08/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 170
    , category: 'Terminados'
    , deudor  : {
      cedula   : 55303731
      , nombre   : 'ISABEL CRISTINA GARCIA DURAN'
      , telefono : '5514126 // 3006509338'
      , email    : 'isagarcia@hotmail.com'
      , direccion: 'CALLE 138 # 11B - 16 APTO 401',
    }

    , demanda: {
      obligacion: {
        A: 4513075095312892
        , B: 5303718444914360,
      }
      , capitalAdeudado        : 8108220
      , entregaGarantiasAbogado: '18/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01114'
      , llaveProceso           : '11001400301320170111400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '30/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '3151-2017'
          , resultado    : '20/09/2017',
        }

        , certimail: '30/08/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 171
    , category: 'Terminados'
    , deudor  : {
      cedula: 1024468871
      , nombre: 'MARITZA NATALI RODRIGUEZ URREA'

      , email    : 'jlaura00@hotmail.com'
      , direccion: 'CALLE 59C SUR # 87K - 64 APTO 1016',
    }

    , demanda: {
      vencimientoPagare: '14/08/2017'
      , obligacion       : {
        A: 12766386,
      }
      , capitalAdeudado        : 46042338
      , entregaGarantiasAbogado: '24/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00863'
      , llaveProceso           : '11001400308620170086300'

      , fechaPresentacion: '28/08/2017',
    },
  }
  , {
    numero  : 172
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52475256
      , nombre  : 'ADRIANA DEL PILAR ALFONSO BAQUERO'
      , telefono: 6967694

      , direccion: 'CARRERA 79B # 45 - 19 SUR',
    }

    , demanda: {
      vencimientoPagare: '16/08/2017'
      , obligacion       : {
        A: 11895200,
      }
      , capitalAdeudado        : 13487506
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00850'
      , llaveProceso           : '11001400302720170085000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '05/0/2017'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: 43196,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '05/0/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 173
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79878252
      , nombre   : 'DIEGO ALEXANDER CAYCEDO OCHOA'
      , telefono : 'F 7230139               CEL 3114901649'
      , email    : 'diegoc8a@gmail.com'
      , direccion: 'CALLE 69A SUR # 104 - 18 CASA 177',
    }
    , codeudor: {
      cedula   : 52792026
      , nombre   : 'IVONNE MARITZA CASTILLO BLANCO'
      , telefono : 7856815
      , direccion: 'CALLE 69A SUR # 104 - 18 CASA 177',
    }
    , demanda: {
      vencimientoPagare: '9/08/2028'
      , obligacion       : {
        A: 166760,
      }
      , capitalAdeudado        : '$ 41.576.997'
      , entregaGarantiasAbogado: '24/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01161'
      , llaveProceso           : '11001400301520170116100'

      , fechaPresentacion: 'NOTIFICACION'
      , mandamientoPago  : '28/08/2017'
      , notificacion     : {
        certimail: '26/09/2017',
      }
      , medidasCautelares: {
        medidaSolicitada: '26/09/2017',
      },
    },
  }
  , {
    numero  : 174
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 52189873
      , nombre   : 'DARNELLY HERNANDEZ MARTINEZ'
      , telefono : 'F 4530972                 CEL 3144189224'
      , email    : 'darnelly-74@hotmail.com'
      , direccion: 'CALLE 74G # 80 - 58 SUR',
    }

    , demanda: {
      vencimientoPagare: '10/03/2026'
      , obligacion       : {
        A: 136962,
      }
      , capitalAdeudado        : '$ 14.795.921'
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00903'
      , llaveProceso           : '11001400302520170090300'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '18/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '20/06/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '20/06/2018',
        }
        , '292': {
          fechaAporta: '20/06/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '22/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '18/09/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 175
    , category: 'Terminados'
    , deudor  : {
      cedula   : 91354321
      , nombre   : 'OMAR GUSTAVO FULA AVILA'
      , telefono : '8212461 // 3118866968'
      , email    : 'omarfula@hotmail.com'
      , direccion: 'CALLE 36 # 1 ESTE - 81 BLOQUE 21 CASA 11 SOACHA',
    }
    , codeudor: {
      cedula   : 53065435
      , nombre   : 'LUZ HELENA SOLANO ARDILA'
      , telefono : '3118570587 // 7515699'
      , direccion: 'CALLE 36 # 1 - 81 CASA 11 BLOQUE 21',
    }
    , demanda: {
      vencimientoPagare: '22/04/2024'
      , obligacion       : {
        A: 20990117740,
      }
      , capitalAdeudado        : 16618551
      , entregaGarantiasAbogado: '24/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00761'
      , llaveProceso           : '25754418900220170076100'

      , fechaPresentacion: '31/08/2017',
    },
  }
  , {
    numero  : 176
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79787268
      , nombre   : 'JHON FREDY MURILLO DAZA'
      , telefono : '7562457 // 3182221747'
      , email    : 'ingedibutec@gmail.com'
      , direccion: 'CALLE 26 # 103 - 09',
    }

    , demanda: {
      vencimientoPagare: '27/11/2023'
      , obligacion       : {
        A: 113835
        , B: 377813623621787,
      }
      , capitalAdeudado        : 20211828
      , entregaGarantiasAbogado: '16/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00801'
      , llaveProceso           : '11001400300420170080100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '28/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 3327
          , resultado    : '11/10/17',
        }

        , certimail: '28/09/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 177
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79327475
      , nombre   : 'LEONARDY HERRERA ROJAS'
      , telefono : 4663467
      , email    : 'leonardyherrera@yahoo.com'
      , direccion: 'CARRERA 85 # 52 - 05 SUR',
    }

    , demanda: {
      vencimientoPagare: '2/06/2022'
      , obligacion       : {
        A: 2290099501,
      }
      , capitalAdeudado        : 18696053
      , entregaGarantiasAbogado: '24/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01041'
      , llaveProceso           : '11001400304520170104100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '1/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '1/09/2017'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 178
    , category: 'Terminados'
    , deudor  : {
      cedula   : 37861286
      , nombre   : 'MARYLUZ OCASIONES PINZON'
      , telefono : '7675057 // 3156780088'
      , email    : 'maryluzocasiones1104.p@hotmail.com'
      , direccion: 'DIAGONAL 52# 3 - 24 APTO 50',
    }

    , demanda: {
      vencimientoPagare: '15/08/2017'
      , obligacion       : {
        A: 4099831431615063
        , B: '5303715050478433 // 5306940349167962 // 12641256',
      }
      , capitalAdeudado        : 39243095
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARO'
      , radicado               : '2017 - 01221'
      , llaveProceso           : '11001400306620170122100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '6/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '6/09/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 179
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 12254068
      , nombre   : 'GUILLERMO GONZALEZ TAGUA'
      , telefono : 'F 5642974              CEL 3218180993'
      , email    : 'guillermogonzalez_tagua@hotmail.com'
      , direccion: 'CARRERA 30 No.68 J-08 SUR',
    }
    , codeudor: {
      cedula   : 12254177
      , nombre   : 'JAVIER GONZALEZ TAGUA'
      , telefono : '5643632//3125598323'
      , direccion: 'DIAGONAL 68 J No.26-15 SUR',
    }
    , demanda: {
      vencimientoPagare: '2/11/2019'
      , obligacion       : {
        A: 5670085162,
      }
      , capitalAdeudado        : '$ 12.687.427'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01084'
      , llaveProceso           : '11001400301120170108400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '21/07/2017'
      , mandamientoPago        : '15/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '27/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '8/04/2018',
        }
        , '292': {
          fechaAporta: '8/04/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '7/05/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '15/11/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 180
    , category: 'Terminados'
    , deudor  : {
      cedula  : 21016631
      , nombre  : 'ALCIRA DELIA SAENZ GARAVIS'
      , telefono: 3104832

      , direccion: 'CALLE 3 # 5 - 31 VIOTA',
    }

    , demanda: {
      vencimientoPagare: '15/08/2017'
      , obligacion       : {
        A: 12594582,
      }
      , capitalAdeudado        : 68421268
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'VIOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00218'
      , llaveProceso           : '25878418900120170021800'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '29/08/2017'
      , mandamientoPago        : '18/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '18/09/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 181
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1033783222
      , nombre   : 'LEONARDO ALIRIO GARCIA GUERRERO'
      , telefono : '7177769 // 3103048137'
      , email    : 'leoguegar@hotmail.com'
      , direccion: 'CALLE 69J # 20B - 52',
    }

    , demanda: {
      vencimientoPagare: '16/08/2017'
      , obligacion       : {
        A: 12569604,
      }
      , capitalAdeudado        : 25340036
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00115'
      , llaveProceso           : '11001418901020170011500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '5/10/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '5/10/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 182
    , category: 'Terminados'
    , deudor  : {
      cedula   : 11185630
      , nombre   : 'WILSON ALFONSO JIMENEZ MENDIETA'
      , telefono : 'F 5714329'
      , email    : 'grupocomerciallasabana@hotmail.com'
      , direccion: 'CARRERA 81C # 2B - 80 PISO 2',
    }

    , demanda: {
      vencimientoPagare: '3/11/2019'
      , obligacion       : {
        A: 2150091504,
      }
      , capitalAdeudado        : '$ 25.833.335'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01001'
      , llaveProceso           : '11001400300120170100100'
      , etapaProcesal          : '11001400300120170100100'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '8/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '6/02/2018',
        }
        , '292': {
          fechaRecibido: '6/06/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '5/09/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/06/2018'
        , medidaSolicitada  : '5/09/2017',
      },
    },
  }
  , {
    numero  : 183
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 11185630
      , nombre   : 'WILSON ALFONSO JIMENEZ MENDIETA'
      , telefono : 'F 5714329'
      , email    : 'grupocomerciallasabana@hotmail.com'
      , direccion: 'CARRERA 81C # 2B - 80 PISO 2',
    }

    , demanda: {
      vencimientoPagare: '3/11/2019'
      , obligacion       : {
        A: 2150091504,
      }
      , capitalAdeudado        : '$ 25.833.335'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01001'
      , llaveProceso           : '11001400300120170100100'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '8/08/2017'
      , mandamientoPago        : '5/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '6/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '6/06/2018',
        }
        , '292': {
          fechaAporta: '6/06/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CORREO'
        , autoNotificado: '22/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/09/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 184
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 17650971
      , nombre  : 'JUAN CARLOS TOVAR TOLEDO'
      , telefono: 'F 83107389'

      , direccion: 'CARRERA 86 # 69 H - 40',
    }

    , demanda: {
      vencimientoPagare: '15/12/2021'
      , obligacion       : {
        A: 8470081213,
      }
      , capitalAdeudado        : '$ 22.277.206'
      , entregaGarantiasAbogado: '1/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00807'
      , llaveProceso           : '11001400302520170080700'
      , etapaProcesal          : 'DESIGNACIÓN CURADOR AD LITEM'
      , fechaPresentacion      : '8/08/2017'
      , mandamientoPago        : '14/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '19/03/2019'
          , resultado    : 'NEGATIVO',
        }
        , '292': {
          fechaAporta: '19/03/2019'
          , resultado  : 'NEGATIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'NO'
        , tipo          : 'EMPLAZAMIENTO'
        , autoNotificado: '6/10/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/08/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 185
    , category: 'Terminados'
    , deudor  : {
      cedula   : 10294828
      , nombre   : 'WILLIAM GIOVANNI DORADO FERNANDEZ'
      , telefono : '3351000 // 3103397090'
      , email    : 'willdany@hotmail.com'
      , direccion: 'CARRERA 4 ESTE # 38 - 56',
    }

    , demanda: {
      obligacion: {
        B: 20990158916,
      }
      , capitalAdeudado        : 41262275
      , entregaGarantiasAbogado: '11/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00283'
      , llaveProceso           : '25754400300320170028300'

      , fechaPresentacion: 'NOTIFICACION'
      , mandamientoPago  : '28/08/2017'
      , notificacion     : {
        certimail: '15/12/2017'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '20/06/2018'
        , medidaSolicitada  : '15/12/2017',
      },
    },
  }
  , {
    numero  : 186
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 24134505
      , nombre  : 'CELY MARGOTH ROJAS VELANDIA'
      , telefono: 'F 5267343'

      , direccion: 'CALLE 29 A # 2 - 76 APTO 304 CHIA',
    }
    , codeudor: {
      cedula   : 24134635
      , nombre   : 'QUENIA MILENA ROJAS VELANDIA'
      , telefono : 3118661189
      , direccion: 'CALLE 172 # 21A - 17',
    }
    , demanda: {
      vencimientoPagare: '29/01/2021'
      , obligacion       : {
        A: 1680097051,
      }
      , capitalAdeudado        : '$ 13.319.130'
      , entregaGarantiasAbogado: '11/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CHIA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00412'
      , llaveProceso           : '25175408900220170041200'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '15/08/2017'
      , mandamientoPago        : '19/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '8/07/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '30/08/2018',
        }
        , '292': {
          fechaAporta: '20/08/2018',
        },
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/09/2017'
        , medidaSolicitada:
          'EMBARGO DE DINEROS EN BANCOS // REMANENTES 2017-00129',
      },
    },
  }
  , {
    numero  : 187
    , category: 'Terminados'
    , deudor  : {
      cedula  : 39624423
      , nombre  : 'YAZMIN ALVARADO PINZON'
      , telefono: 'F 8717658               CEL 3138851725'

      , direccion: 'CARRERA 6 # 16A - 84 FUSAGASUGA',
    }

    , demanda: {
      vencimientoPagare: '19/03/2020 //  15/10/2019'
      , obligacion       : {
        A: 4513070000000000
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 10.928.053'
      , entregaGarantiasAbogado: '23/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUSAGASUGA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00552'
      , llaveProceso           : '25290400300220170055200'
      , etapaProcesal          : '25290400300220170055200'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '28/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '23/10/2017',
        }
        , '292': {
          fechaRecibido: '23/10/2017'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '31/08/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/10/2017'
        , medidaSolicitada  : '31/08/2017',
      },
    },
  }
  , {
    numero  : 188
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1019029250
      , nombre  : 'DIEGO ARMANDO AREVALO VELANDIA'
      , telefono: 'arevalodiego77@gmail.com'
      , email   : 'CARRERA 86 # 77A - 28',
    }
    , codeudor: {
      direccion: 47099,
    }
    , demanda: {
      vencimientoPagare: 170638
      , obligacion       : {
        A: 5303710467974930
        , B: 31660690,
      }
      , capitalAdeudado        : '$ 42.969'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01269'
      , llaveProceso           : '11001400306720170126900'
      , etapaProcesal          : 42967
      , fechaPresentacion      : '12/02/2018'

      , notificacion: {
        '292': {
          resultado: 'FISICO',
        }

        , tipo          : 43243
        , autoNotificado: 43143,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '0594',
      },
    },
  }
  , {
    numero  : 189
    , category: 'Terminados'
    , deudor  : {
      cedula   : 4547635
      , nombre   : 'WILDER DE JESUS ROMAN GRISALES'
      , telefono : '3213559 // 3142125039'
      , email    : 'wilderj11@yahoo.com'
      , direccion: 'CALLE 10 # 8 - 07 TOCANCIPA',
    }

    , demanda: {
      vencimientoPagare: '09/06/2034'
      , obligacion       : {
        A: 175217
        , B: 5303718084430842,
      }
      , capitalAdeudado        : 71966685
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'TOCANCIPA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00494'
      , llaveProceso           : '25817418900120170049400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '29/08/2017'
      , mandamientoPago        : '31/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 2629
          , resultado    : '11/09/2017',
        }

        , certimail: '31/08/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 190
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79909315
      , nombre   : 'VICTOR EDUARDO  MORA ESPINOSA'
      , telefono : 'victormor84@outlook.com'
      , email    : 'CARRERA 18C # 121 - 40'
      , direccion: 41537019,
    }
    , codeudor: {
      cedula   : 'MARIA DEL CARMEN ESPINOSA'
      , nombre   : 8262523
      , telefono : 'CALLE 21 # 6A - 14'
      , direccion: 48364,
    }
    , demanda: {
      vencimientoPagare: 152366
      , obligacion       : {
        B: 18539423,
      }
      , capitalAdeudado        : '$ 42.971'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUNZA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00781'
      , llaveProceso           : '25286400300120170078100'
      , etapaProcesal          : 42977
      , fechaPresentacion      : '7/12/2017'

      , notificacion: {
        '292': {
          resultado: 'FISICO',
        }

        , tipo          : 43174
        , autoNotificado: 43076,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 191
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 80231798
      , nombre   : 'JOHN ALEXANDER VALENCIA MARQUEZ'
      , telefono : 'F 2376454  2371468                CEL 3004525014'
      , email    : 'jhon.valencia@jvtel.com.co'
      , direccion: 'CARRERA 32 B # 2 - 64',
    }

    , demanda: {
      vencimientoPagare: '30/11/2020'
      , obligacion       : {
        A: 1220084112,
      }
      , capitalAdeudado        : '$ 87.649.981'
      , entregaGarantiasAbogado: '11/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01082'
      , llaveProceso           : '11001400307920170108200'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '23/08/2017'
      , mandamientoPago        : '13/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '15/05/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '22/05/2018',
        }
        , '292': {
          fechaAporta: '22/05/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '22/05/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '13/09/2017'
        , medidaSolicitada  : 'ACCIONES SALARIO BANCOS',
      },
    },
  }
  , {
    numero  : 192
    , category: 'Terminados'
    , deudor  : {
      cedula   : 53053612
      , nombre   : 'DIANA PATRICIA SANCHEZ SALCEDO'
      , telefono : 2572857
      , email    : 'baldini@mybosi.com'
      , direccion: 'TRANVERSAL 142 # 150 - 50 CASA 2 ET 8',
    }

    , demanda: {
      vencimientoPagare: '22/02/2021 // 19/05/20258'
      , obligacion       : {
        A: 490098495
        , B: 128775,
      }
      , capitalAdeudado        : 38393691
      , entregaGarantiasAbogado: '17/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01532'
      , llaveProceso           : '1100140030732017015300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '101/09/2017'
      , mandamientoPago        : '28/11/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '28/11/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 193
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 52465691
      , nombre   : 'CARMEN ELIZABETH QUESADA MARTINEZ'
      , telefono : 'F 7829236              CEL 3204792977'
      , email    : 'equesada01@hotmail.com'
      , direccion: 'CARRERA 80 # 70A - 09',
    }

    , demanda: {
      vencimientoPagare: '9/08/2020'
      , obligacion       : {
        A: 12750180,
      }
      , capitalAdeudado        : '$ 24.590.710'
      , entregaGarantiasAbogado: '16/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01750'
      , llaveProceso           : '11001400302420170175000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '23/08/2017'
      , mandamientoPago        : '15/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '26/06/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '26/06/2018',
        }
        , '292': {
          fechaAporta: '26/06/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '24/09/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '15/02/2018'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 194
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52790965
      , nombre   : 'FABIOLA MARTINEZ RUEDA'
      , telefono : 3107976282
      , email    : 'fabiola_19805@hotmail.com'
      , direccion: 'CALLE 20C # 106 - 27 APTO 202 INT 13',
    }

    , demanda: {
      vencimientoPagare: '23/08/2017'
      , obligacion       : {
        A: 12601534,
      }
      , capitalAdeudado        : 47317351
      , entregaGarantiasAbogado: '28/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01297'
      , llaveProceso           : '11001400303520170129700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '31/08/2017'
      , mandamientoPago        : '25/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 3621
          , resultado    : '4/10/2017',
        }

        , certimail: '25/09/2017'
        , fisico   : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 195
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80244664
      , nombre   : 'DOUGLAS FABIAN SIZA CORTES'
      , telefono : '4429545 // 3118280782'
      , email    : 'gufo2299@hotmail.com'
      , direccion: 'CARRERA 95 BIS # 90A - 12',
    }
    , codeudor: {
      cedula   : 52347132
      , nombre   : 'JOHANNA ESMERALDA PULIDO DURAN'
      , telefono : '8222969 // 3112842488'
      , direccion: 'CARRERA 6 # 23 - 70 BLOQUE 29 CASA 34',
    }
    , demanda: {
      vencimientoPagare: '4/05/2026'
      , obligacion       : {
        A: 138546,
      }
      , capitalAdeudado        : 25303069
      , entregaGarantiasAbogado: '24/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 0991'
      , llaveProceso           : '1100140030122017099100'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '30/08/2017'
      , mandamientoPago        : '19/09/2017'
      , notificacion           : {
        tipo          : 'P/NAL DDA'
        , autoNotificado: '01/03/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 196
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80130064
      , nombre   : 'JAIRO TIBATA'
      , telefono : 'F 7677881              CEL 3157303099'
      , email    : 'jairotibata@hotmail.com'
      , direccion: 'TRANSVERSAL 5Q  # 48P - 06 SUR',
    }

    , demanda: {
      vencimientoPagare: '15/03/2037'
      , obligacion       : {
        A: 2330086807
        , B: '200865 // 377813427489837 // 4513070249553475 // 5303710103729395',
      }
      , capitalAdeudado        : '$ 124.710.637'
      , entregaGarantiasAbogado: '22/082017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00471'
      , llaveProceso           : '11001310302120170047100'
      , etapaProcesal          : '11001310302120170047100'
      , fechaPresentacion      : 'PAGO TOTAL'
      , mandamientoPago        : '30/08/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '15/08/2018',
        }
        , '292': {
          fechaRecibido: '15/08/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '28/11/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '27/09/2018'
        , medidaSolicitada  : '28/11/2017',
      },
    },
  }
  , {
    numero  : 197
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79457880
      , nombre   : 'MARIO JEAN PINZON BARON'
      , telefono : 2159919
      , email    : 'mariojean1@yahoo.es'
      , direccion: 'CALLE 106 # 8A - 19 CASA 698',
    }

    , demanda: {
      vencimientoPagare: '23/08/2017'
      , obligacion       : {
        A: 11705210,
      }
      , capitalAdeudado        : 16983619
      , entregaGarantiasAbogado: '28/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01086'
      , llaveProceso           : '11001400304520170108600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '4/09/2017'
      , mandamientoPago        : '21/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '21/09/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 198
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1012318156
      , nombre   : 'HECTOR MANUEL RAMIREZ PUENTES'
      , telefono : '3142498 // 3142998727'
      , email    : 'hectormanuelverdolaga@gmail.com'
      , direccion: 'CARRERA 80M # 74 - 04 SUR',
    }

    , demanda: {
      vencimientoPagare: '3/09/2028'
      , obligacion       : {
        A: 167542,
      }
      , capitalAdeudado        : 29204879
      , entregaGarantiasAbogado: '29/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01329'
      , llaveProceso           : '11001400304020170132900'

      , fechaPresentacion: '4/09/2017',
    },
  }
  , {
    numero  : 199
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 1106893308
      , nombre  : 'MARTHA LILIANA RAMIREZ COLORADO'
      , telefono: 'CEL 3108612781        CEL 3502772711'
      , email   : 'liliaramirez17@gmail.com'
      , direccion:
        'VEREDA BOQUERON . FINCA LA MILAGROSA. MUNICIPIO FUSA // CALLE 3 # 37 - 21 BARRIO SICAMORO. MELGAR',
    }

    , demanda: {
      vencimientoPagare: '16/08/2020'
      , obligacion       : {
        A: 12650694,
      }
      , capitalAdeudado        : '$ 28.594.040'
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'TOLIMA'
      , municipio              : 'MELGAR'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00259'
      , llaveProceso           : '73449408900220170025900'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '31/08/2017'
      , mandamientoPago        : '19/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '12/12/2017'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '13/12/2017',
        }
        , '292': {
          fechaAporta: '12/12/2017'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'PERSONAL'
        , autoNotificado: '13/12/2017',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/09/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 200
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79582683
      , nombre   : 'ALEXANDER ROJAS CASTAÑEDA'
      , telefono : 'F 7600199                 CEL 3103770989'
      , email    : 'mmx4b@msn.com'
      , direccion: 'TRANVERSAL 16A # 42 - 58 SUR',
    }

    , demanda: {
      vencimientoPagare: '10/10/2028'
      , obligacion       : {
        A: 168737,
      }
      , capitalAdeudado        : '$ 34.506.455'
      , entregaGarantiasAbogado: '28/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01012'
      , llaveProceso           : '11001400301220170101200'
      , etapaProcesal          : '11001400301220170101200'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '4/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '15/06/2018',
        }
        , '292': {
          fechaRecibido: '15/06/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '17/10/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '13/07/2018'
        , medidaSolicitada  : '17/10/2017',
      },
    },
  }
  , {
    numero  : 201
    , category: 'Insolvencia'
    , deudor  : {
      cedula   : 51733931
      , nombre   : 'PIEDAD MARITZA OLGA ROCIO PRIETO VARGAS'
      , telefono : 'F 6256456              CEL 3108711046'
      , email    : 'sebantialbeltransprieto@hotmail.com'
      , direccion: 'CALLE 127D # 21 - 80 APTO 105',
    }

    , demanda: {
      vencimientoPagare: '16/11/2019 // 6/03/2020'
      , obligacion       : {
        A: 377816483778266
        , B: 4513080485378479,
      }
      , capitalAdeudado        : '$ 27.602.952'
      , entregaGarantiasAbogado: '23/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01142'
      , llaveProceso           : '11001400307920170114200'
      , etapaProcesal          : '11001400307920170114200'
      , fechaPresentacion      : 'PROCESO DE INSOLVENCIA'
      , mandamientoPago        : '4/09/2017'
      , notificacion           : {
        certimail: '4/10/2017',
      }
      , medidasCautelares: {
        medidaSolicitada: '4/10/2017',
      },
    },
  }
  , {
    numero  : 202
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52488943
      , nombre   : 'SONIA MIREYA PANTOJA SANDOVAL'
      , telefono : 'F 2287856'
      , email    : 'tocami96@hotmail.com'
      , direccion: 'CALLE 89 # 98 - 27',
    }

    , demanda: {
      vencimientoPagare: '30/05/2022'
      , obligacion       : {
        A: 151374,
      }
      , capitalAdeudado        : '$ 54.240.143'
      , entregaGarantiasAbogado: '28/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01287'
      , llaveProceso           : '11001400308520170128700'
      , etapaProcesal          : '11001400308520170128700'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '4/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '21/02/2018',
        }
        , '292': {
          fechaRecibido: '21/02/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '12/09/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '18/07/2018'
        , medidaSolicitada  : '12/09/2017',
      },
    },
  }
  , {
    numero  : 203
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80380775
      , nombre   : 'GONZALO VILLABON MARTINEZ'
      , telefono : '7672705 // 3118264932'
      , email    : 'fantavillabon@hotmail.com'
      , direccion: 'CALLE 92 BIS SUR # 3 - 61',
    }

    , demanda: {
      vencimientoPagare: '28/11/2024'
      , obligacion       : {
        A: 179104,
      }
      , capitalAdeudado        : 60804048
      , entregaGarantiasAbogado: '29/082017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01060'
      , llaveProceso           : '11001400300820170106000'

      , fechaPresentacion: '4/09/2017'
      , mandamientoPago  : '11/09/2017'
      , notificacion     : {
        tipo          : 'CERTIMAIL'
        , autoNotificado: '7/03/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 204
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 46679232
      , nombre   : 'FLOR ESPERANZA GUTIERREZ'
      , telefono : 'F 5754502'
      , email    : 'carito220@hotmail.es'
      , direccion: 'CARRERA 34 # 9 - 60',
    }

    , demanda: {
      vencimientoPagare: '23/08/2020'
      , obligacion       : {
        A: 12743098,
      }
      , capitalAdeudado        : '$ 41.990.538'
      , entregaGarantiasAbogado: '28/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01063'
      , llaveProceso           : '11001400304520170106300'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '30/08/2017'
      , mandamientoPago        : '12/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '13/03/2020'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '13/03/2020',
        }
        , '292': {
          fechaAporta: '13/03/2020'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CORREO'
        , autoNotificado: '13/03/2020',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/09/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 205
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 51856244
      , nombre  : 'NELIDA DEL CARMEN RIVERA MESA'
      , telefono: 'F 7616370               CEL 3143313269'

      , direccion: 'CARRERA 2A BIS A ESTE # 89A  SUR',
    }
    , codeudor: {
      cedula   : 79604259
      , nombre   : 'FABIO ALBERTO RIVERA MESA'
      , telefono : 3118869672
      , direccion: 'CARRERA 138A # 142B - 11',
    }
    , demanda: {
      vencimientoPagare: '9/09/2021'
      , obligacion       : {
        A: 430103841,
      }
      , capitalAdeudado        : '$ 14.068.639'
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00971'
      , llaveProceso           : '11001400301220170097100'
      , etapaProcesal          : 'EJECUCIÓN SOLICITAR LIQUIDACIÓN A REINTEGRA'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '19/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '8/05/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '6/07/2018',
        }
        , '292': {
          fechaAporta: '28/05/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail: 'NO'
        , fisico   : 'SI'
        , tipo     : 'CORREO // DESISTIMIENDO DE NELIDA',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '20/08/2019'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 206
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80729141
      , nombre   : 'EDGAR MARTINEZ VELANDIA'
      , telefono : 7902763
      , email    : 'edgar_julian@hotmail.com'
      , direccion: 'CARRERA 17 F 71A - 95 SUR  CASA 239',
    }
    , codeudor: {
      cedula   : 53067213
      , nombre   : 'ANGIE PAOLA DIAZ PASTAS'
      , telefono : 5383916
      , direccion: 'CARRERA 6 # 17 - 90',
    }
    , demanda: {
      vencimientoPagare: '16//11/2021'
      , obligacion       : {
        A: 120356
        , B: 1590082995,
      }
      , capitalAdeudado        : 30556160
      , entregaGarantiasAbogado: '29/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01469'
      , llaveProceso           : '11001400306420170146900'

      , fechaPresentacion: '5/09/2017',
    },
  }
  , {
    numero  : 207
    , category: 'Terminados'
    , deudor  : {
      cedula   : 51993007
      , nombre   : 'SANDRA BIBIANA RUGE RODRIGUEZ'
      , telefono : 4806528
      , email    : 'sanbiru_69@hotmail.com'
      , direccion: 'CALLE 148 # 94A - 10/60 APTO 408 ETAPA 5',
    }

    , demanda: {
      vencimientoPagare: '28/02/2017'
      , obligacion       : {
        A: 112910,
      }
      , capitalAdeudado        : 23404368
      , entregaGarantiasAbogado: '17/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01024'
      , llaveProceso           : '11001400302220170102400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '5/09/2017'
      , mandamientoPago        : '18/10/2017                16/11/2017        07/02/2018'
      , notificacion           : {
        '292': {
          resultado: 43357,
        }

        , tipo          : 'PERSONAL'
        , autoNotificado: 43354,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '18/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 208
    , category: 'Reintegra'
    , deudor  : {
      cedula: 80357801
      , nombre: 'JEOVANY ROJAS CRUZ'

      , email    : 'jeovanyrojas@outlook.com'
      , direccion: 'CALLE 34 # 1A - 40 CASA 247',
    }

    , demanda: {
      vencimientoPagare: '15/08/2020'
      , obligacion       : {
        A: 12725973,
      }
      , capitalAdeudado        : '$ 27.819.415'
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00265'
      , llaveProceso           : '25754400300220170026500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '12/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '28/08/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '28/08/2018',
        }
        , '292': {
          fechaAporta: '7/09/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CORREO'
        , autoNotificado: '7/09/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/09/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 209
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79852094
      , nombre   : 'CESAR ALFONSO UMAÑA CAÑON'
      , telefono : 'F 31006108               CEL 3212406004'
      , email    : 'cesa861@hotmail.com'
      , direccion: 'CARRERA 68M # 37D - 47 SUR',
    }

    , demanda: {
      vencimientoPagare: '31/08/2020'
      , obligacion       : {
        A: 2170085697
        , B: '377813567054276 // 451377194627824 // 5303710806169667 // 5306726083237084 // AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 54.090.336'
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01191'
      , llaveProceso           : '11001400306420170119100'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '6/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '31/10/2017'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '31/10/2017',
        }
        , '292': {
          fechaAporta: '31/10/2017'
          , resultado  : 'POSITIVO',
        }
        , certimail: 'SI'
        , fisico   : 'NO'
        , tipo     : 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '6/09/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 210
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 343334
      , nombre  : 'JOSE ANTONIO CASTILLO CORTES'
      , telefono: 'F 4658342                 CEL 3015004499'

      , direccion: 'CARRERA 50 # 113 - 09 VIVE EN CALI',
    }

    , demanda: {
      vencimientoPagare: '5/01/2020  5/01/2020'
      , obligacion       : {
        A: 377813597718262
        , B: '4513070908078111 // 5303714709873201',
      }
      , capitalAdeudado        : '$ 10.555.422'
      , entregaGarantiasAbogado: '22/082017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00163'
      , llaveProceso           : '11001400302120180016300'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '5/03/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '15/07/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '26/07/3018',
        }
        , '292': {
          fechaAporta: '26/07/3018'
          , resultado  : 'NEGATIVO',
        }
        , certimail: 'NO'
        , fisico   : 'SI'
        , tipo     : 'EMPLAZAMIENTO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/03/2018'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 211
    , category: 'Terminados'
    , deudor  : {
      cedula   : 17652071
      , nombre   : 'SAUL BARBOSA RAMIREZ'
      , telefono : 'F 7555569'
      , email    : 'marimar832010@hotmail.com'
      , direccion: 'CARRERA 4A # 11 - 44 FUNZA',
    }
    , codeudor: {
      cedula   : 52901502
      , nombre   : 'MARIA NUBIA MARTINEZ CELY'
      , telefono : 7555569
      , direccion: 'CARRERA 4 # 11 - 44 // CL 64 D No. 69-22',
    }
    , demanda: {
      vencimientoPagare: '2/08/2028'
      , obligacion       : {
        A: 166601,
      }
      , capitalAdeudado        : '$ 36.520.799'
      , entregaGarantiasAbogado: '24/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MOSQUERA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00105'
      , llaveProceso           : '25473400300120180010500'
      , etapaProcesal          : '25286400300120180010500'
      , fechaPresentacion      : 'NOTIFICACIÓN CERTIMAIL A MARIA NUBIA MARTINEZ CELY'
      , mandamientoPago        : '6/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '10/08/2018',
        }
        , '292': {
          fechaRecibido: '10/08/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '25/05/2018'
        , fisico   : 'NO'

        , autoNotificado: 'PERSONAL SAUL BARBOSA RAMIREZ',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '10/08/2018'
        , medidaSolicitada  : '29/10/2018',
      },
    },
  }
  , {
    numero  : 212
    , category: 'Terminados'
    , deudor  : {
      cedula   : 14320811
      , nombre   : 'FERNANDO VERA FARFAN'
      , telefono : 3005421
      , email    : 'verafarfan@hotmail.com'
      , direccion: 'CARRERA 145 # 142F - 60  CASA 164',
    }
    , codeudor: {
      cedula   : 55057911
      , nombre   : 'ANA ISABEL OLIVERA'
      , telefono : 4818738
      , direccion: 'CARRERA 566 # 132 - 40',
    }
    , demanda: {
      vencimientoPagare: '9/05/2017'
      , obligacion       : {
        A: 99873,
      }
      , capitalAdeudado        : 12660698
      , entregaGarantiasAbogado: '29/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01035'
      , llaveProceso           : '11001400304620170103500'

      , fechaPresentacion: '4/09/2017',
    },
  }
  , {
    numero  : 213
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52325613
      , nombre   : 'MYRIAM CONSUELO RIOS FONSECA'
      , telefono : 5739502
      , email    : 'miricu143@hotmail.com'
      , direccion: 'CARRERA 98B # 14 - 06 CASA 166',
    }
    , codeudor: {
      cedula: 79846140
      , nombre: 'OSCAR GONZALEZ GONZALEZ',
    }
    , demanda: {
      vencimientoPagare: '25/04/2021'
      , obligacion       : {
        A: 85712,
      }
      , capitalAdeudado        : 12573628
      , entregaGarantiasAbogado: '30/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01488'
      , llaveProceso           : '11001400308822017014880'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '4/09/2017'
      , mandamientoPago        : '13/12/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '0049'
          , resultado    : '15/01/2018',
        }

        , certimail: '13/12/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 214
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52702559
      , nombre   : 'YENNY PATRICIA RUBIO MAHECHA'
      , telefono : '7290666 // 3204297147'
      , email    : 'jennyprm@hotmail.com'
      , direccion: 'CALLE 6D # 5 - 60 MANZANA C CASA 17',
    }

    , demanda: {
      vencimientoPagare: '28/06/2017'
      , obligacion       : {
        A: 147381,
      }
      , capitalAdeudado        : 27490437
      , entregaGarantiasAbogado: '17/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00867'
      , llaveProceso           : '25754418900222017008670'

      , fechaPresentacion: '4/09/2017',
    },
  }
  , {
    numero  : 215
    , category: 'Terminados'
    , deudor  : {
      cedula   : 36458257
      , nombre   : 'LUZ DARY HURTADO RIOS'
      , telefono : 3182448
      , email    : 'luzdary.hurtado.rios@hotmail.com'
      , direccion: 'CARRERA 98B # 14 - 06 CASA 155',
    }
    , codeudor: {
      cedula   : 80228299
      , nombre   : 'JORGE ARMANDO LOPEZ CASTAÑO'
      , telefono : 4185127
      , direccion: 'CARRERA 98B # 14 - 06 PUEBLO NUEVO 1',
    }
    , demanda: {
      vencimientoPagare: '30/03/2017'
      , obligacion       : {
        A: 85677,
      }
      , capitalAdeudado        : 12241665
      , entregaGarantiasAbogado: '23/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01273'
      , llaveProceso           : '11001400300820170127300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '4/09/2017'
      , mandamientoPago        : '3/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 3169
          , resultado    : '15/11/2017',
        }
        , '292': {
          resultado: 43063,
        }
        , certimail: '3/11/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 216
    , category: 'Terminados'
    , deudor  : {
      cedula  : 51833717
      , nombre  : 'BLANCA JANETH PINZON SUAREZ'
      , telefono: 'janethpinzon@hotmail.com'
      , email   : 'CARRERA 123 # 131 - 32',
    }
    , codeudor: {
      direccion: 44697,
    }
    , demanda: {
      vencimientoPagare: 96859
      , obligacion       : {
        B: 13401112,
      }
      , capitalAdeudado        : '$ 42.977'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01255'
      , llaveProceso           : '11001400300520170125500'
      , etapaProcesal          : 42982
      , fechaPresentacion      : '23/10/2017'
      , mandamientoPago        : 'OK'
      , notificacion           : {
        '291': {
          resultado: '27/09/2018',
        }
        , '292': {
          fechaAporta: 43370,
        }

        , autoNotificado: 43031,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '17-3682',
      },
    },
  }
  , {
    numero  : 217
    , category: 'LiosJuridicos'
    , deudor  : {
      cedula   : 52328942
      , nombre   : 'DIANA VANESSA NARANJO HERNANDEZ'
      , telefono : '2256952 // 3108096132'
      , email    : 'casas_castillo@hotmail.com'
      , direccion: 'CALLE 58 # 45 - 86',
    }

    , demanda: {
      obligacion: {
        A: 182540
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : 206655465
      , entregaGarantiasAbogado: '17/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00453'
      , llaveProceso           : '11001310303720170045300'
      , etapaProcesal:
        'EL 24/07/2019 JUZGADO 3 DE EJECUCION DECRETA TERMINACION DEL PROCESO POR PAGO CUOTAS EN MORA // EL 12/12/2019 SE DEVOLVIO DESGLOSE CON GARANTIAS A AECSA S.A. // EL 31/08/2022 SE VERIFICA Y NO SE HA LEVANTADO MEDIDA CAUTELAR //CAJA  387 DE 2021'
      , fechaPresentacion: '12/12/2019'
      , mandamientoPago:
        'SE SOLICITO DESARCHIVE EL 31 AGOSTO 2023 A ARCHIVO CENTRAL',
    },
  }
  , {
    numero  : 218
    , category: 'Terminados'
    , deudor  : {
      cedula  : 12402596
      , nombre  : 'ELIO ALVARADO HERNANDEZ'
      , telefono: 6896897

      , direccion: 'CALLE 144 # 136A - 45',
    }
    , codeudor: {
      cedula   : 34322133
      , nombre   : 'LIDA AMPARO HORMIGA M.'
      , telefono : 7026848
      , direccion: 'CALLE 144 # 136A - 45 APTO 502 INT 14',
    }
    , demanda: {
      obligacion: {
        A: 20990118584
        , B: '0377813642739792',
      }
      , capitalAdeudado        : 12963196
      , entregaGarantiasAbogado: '25/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00840'
      , llaveProceso           : '11001400300220170084000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '11/09/2017'
      , mandamientoPago        : '25/10/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '25/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 219
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80921416
      , nombre   : 'BLAS LAITON PATIÑO'
      , telefono : 7287007
      , email    : 'layton_blas@live.com'
      , direccion: 'CARRERA 99A # 61A - 19 CASA 61',
    }

    , demanda: {
      vencimientoPagare: '19/07/2032'
      , obligacion       : {
        A: 25214,
      }
      , capitalAdeudado        : 50891805
      , entregaGarantiasAbogado: '4/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01075'
      , llaveProceso           : '11001400307220170107500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '11/09/2017'
      , mandamientoPago        : '18/09/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '18/09/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 220
    , category: 'Terminados'
    , deudor  : {
      cedula   : 51726361
      , nombre   : 'MARIA EUGENIA SALCEDO PINEDA'
      , telefono : '7842477 // 3144468420'
      , email    : 'mariae131@hotmail.com'
      , direccion: 'AVENIDA CALLE 34 # 58 - 51',
    }
    , codeudor: {
      cedula   : 19436494
      , nombre   : 'NELSON RINCON LOZANO'
      , telefono : 19436494
      , direccion: 'CARRERA 87G BIS # 57F - 04 SUR',
    }
    , demanda: {
      vencimientoPagare: '14/10/2023'
      , obligacion       : {
        A: 112462,
      }
      , capitalAdeudado        : 13810342
      , entregaGarantiasAbogado: '4/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01509'
      , llaveProceso           : '11001400304020170150900'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '11/09/2017'
      , mandamientoPago        : '12/10/2017'
      , notificacion           : {
        tipo          : 'FISICO'
        , autoNotificado: 43245,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 221
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52192430
      , nombre  : 'BEATRIZ HELENA MACHADO'
      , telefono: 'F 4506940                  CEL 3103025587'

      , direccion: 'CARRERA 81A # 54 - 32',
    }
    , codeudor: {
      cedula   : 5607979
      , nombre   : 'HERNANDO GONZALEZ GARCIA'
      , telefono : '3063338 // 3142580589'
      , direccion: 'CARRERA 81A # 54 - 32',
    }
    , demanda: {
      vencimientoPagare: '19/04/2022'
      , obligacion       : {
        A: 20990095881,
      }
      , capitalAdeudado        : '$ 15.864.394'
      , entregaGarantiasAbogado: '18/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01157'
      , llaveProceso           : '11001400301320170115700'
      , etapaProcesal          : '11001400301320170115700'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '4/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '25/07/2018',
        }
        , '292': {
          fechaRecibido: '25/07/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '13/09/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/07/2018'
        , medidaSolicitada  : '13/09/2017',
      },
    },
  }
  , {
    numero  : 222
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79332273
      , nombre   : 'DUFRESNY AUGUSTO PINILLA'
      , telefono : '5705869 // 3005705869'
      , email    : 'htcolombia@gmail.com'
      , direccion: 'CARRERA 13 # 155 - 88 CASA 39',
    }
    , codeudor: {
      cedula   : 51922265
      , nombre   : 'LUCY STELLA OSMA RODRIGUEZ'
      , telefono : '6443645 // 7584507'
      , direccion: 'CARRERA 25A # 155 - 88',
    }
    , demanda: {
      vencimientoPagare: '3/05/2022'
      , obligacion       : {
        A: 96356,
      }
      , capitalAdeudado        : 51145474
      , entregaGarantiasAbogado: '30/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00858'
      , llaveProceso           : '11001400302820170085800'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '4/09/2017'
      , mandamientoPago        : '12/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 2000
          , resultado    : '4/10/2017',
        }

        , certimail: '12/09/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 223
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 17174720
      , nombre   : 'GERARDO ANTONIO MONCADA VEGA'
      , telefono : 'F 3349755                 CEL 3153330306'
      , email    : 'gerardomoncada70@hotmail.com'
      , direccion: 'CALLE 159 # 15 - 45',
    }

    , demanda: {
      vencimientoPagare: '18/04/2020  5/05/2020  15/12/2019'
      , obligacion       : {
        A: 11903330957
        , B: '377816208286710 // 4513083951499464 // 5176407001878614 // 5303720129694960 // AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 43.653.352'
      , entregaGarantiasAbogado: '23/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00860'
      , llaveProceso           : '11001400305520170086000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '28/08/2017'
      , mandamientoPago        : '30/01/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '20/06/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '20/06/2018',
        }
        , '292': {
          fechaAporta: '20/06/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '28/01/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/01/2018'
        , medidaSolicitada  : 'EMBARGO INMUEBLE Y DINEROS BANCOS',
      },
    },
  }
  , {
    numero  : 224
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52616509
      , nombre   : 'MARIA ROSA ZARATE CORTES'
      , telefono : 3114881698
      , email    : 'mariarosacortes2233@hotmail.com'
      , direccion: 'CALLE 5 # 21 - 76',
    }
    , codeudor: {
      cedula   : 74181815
      , nombre   : 'GILBERANIO SUAREZ RODRIGUEZ'
      , telefono : 8471503
      , direccion: 'CALLE 4 # 26 - 38',
    }
    , demanda: {
      vencimientoPagare: '30/04/2023'
      , obligacion       : {
        A: 4600,
      }
      , capitalAdeudado        : 36182458
      , entregaGarantiasAbogado: '29/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'LA MESA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00407'
      , llaveProceso           : '25386400300120170040700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '8/09/2017'
      , mandamientoPago        : '23/11/2017       23/01/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '23/11/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 225
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79815721
      , nombre  : 'LUIS OCTAVIO ROJAS VALBUENA'
      , telefono: 7232380

      , direccion: 'CARRERA 88 C # 62 - 09 SUR APTO 104',
    }
    , codeudor: {
      cedula   : 52288677
      , nombre   : 'MARIA YANNETH RUIZ PAVA'
      , telefono : 7232380
      , direccion: 'CARRERA 88C # 62 - 09 SUR',
    }
    , demanda: {
      obligacion: {
        A: 141663,
      }
      , capitalAdeudado        : 23287784
      , entregaGarantiasAbogado: '18/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01163'
      , llaveProceso           : '11001400301320170116300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '4/09/2017'
      , mandamientoPago        : '30/11/2017                  06/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '3821-2017'
          , resultado    : '14/12/2017',
        }

        , certimail: '30/11/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 226
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80513085
      , nombre   : 'NESTOR GERMAN URREGO AGUILERA'
      , telefono : 80513085
      , email    : 'ngurrero@hotmail.com'
      , direccion: 'CALLE 77 # 84 - 34',
    }

    , demanda: {
      vencimientoPagare: '31/08/2017'
      , obligacion       : {
        A: 12583959,
      }
      , capitalAdeudado        : 19290331
      , entregaGarantiasAbogado: '6/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00943'
      , llaveProceso           : '11001400305520170094300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '13/09/2017'
      , mandamientoPago        : '27/10/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '27/10/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 227
    , category: 'Terminados'
    , deudor  : {
      cedula  : 23550435
      , nombre  : 'ROSA ELENA MARTINEZ DE DUITAMA'
      , telefono: 'F 2775447'

      , direccion: 'CARRERA 50 # 2A - 4 APTO 101',
    }

    , demanda: {
      vencimientoPagare: '30/08/2020'
      , obligacion       : {
        A: 12499205,
      }
      , capitalAdeudado        : '$ 18.546.821'
      , entregaGarantiasAbogado: '4/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01249'
      , llaveProceso           : '11001400301520170124900'
      , etapaProcesal          : '11001400301520170124900'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '13/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '6/05/2018'
          , fechaAporta  : 43242,
        }
        , '292': {
          fechaRecibido: '6/06/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '25/10/2017'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '20/06/2018'
        , medidaSolicitada  : '25/10/2017',
      },
    },
  }
  , {
    numero  : 228
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80740039
      , nombre   : 'FABIAN ALEXANDER GIL GIL'
      , telefono : 'F 7609920'
      , email    : 'fabianalexanderg@yahoo.es'
      , direccion: 'CALLE 48B SUR # 6C - 06',
    }
    , codeudor: {
      cedula   : 52747161
      , nombre   : 'YOMAR YANIRA RUBIANO'
      , telefono : 3948677
      , direccion: 'CALLE 49B SUR 9 - 89 TORRE 2B APTO 405',
    }
    , demanda: {
      vencimientoPagare: '3/06/2024'
      , obligacion       : {
        A: 119098,
      }
      , capitalAdeudado        : '$ 13.622.019'
      , entregaGarantiasAbogado: '4/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01517'
      , llaveProceso           : '11001400301820170151700'
      , etapaProcesal          : '11001400301820170151700'
      , fechaPresentacion      : 'EJECUCION'
      , mandamientoPago        : '13/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '18/03/2018'
          , fechaAporta  : 43238,
        }
        , '292': {
          fechaRecibido: '8/06/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '10/10/2017'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '8/07/2018'
        , medidaSolicitada  : '10/10/2017',
      },
    },
  }
  , {
    numero  : 229
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52818428
      , nombre   : 'JENNIFER ALEJANDRA MOGOLLÓN BERNAL'
      , telefono : 4166717
      , email    : 'alejandramogollonbernal@gmail.com'
      , direccion: 'CALLE 24D # 72A - 81  CASA 9',
    }
    , codeudor: {
      cedula: '51597916 // 19315420'

      , telefono : 4166717
      , direccion: 'CALLE 24D # 72A - 81  CASA 9',
    }
    , demanda: {
      obligacion: {
        A: 141432,
      }
      , capitalAdeudado        : 102825603
      , entregaGarantiasAbogado: '4/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01240'
      , llaveProceso           : '11001400306820170124000'

      , fechaPresentacion: '1309/2017',
    },
  }
  , {
    numero  : 230
    , category: 'Insolvencia'
    , deudor  : {
      cedula   : 1014185483
      , nombre   : 'FREDY ALEXANDER MUÑOZ CASTAÑEDA'
      , telefono : 'F 8137713              CEL 3057528084'
      , email    : 'alexander.arquitecto@gmail.com'
      , direccion: 'CALLE 95 # 71 - 45 TORRE 8 APTO 1604',
    }

    , demanda: {
      vencimientoPagare: '23/0/72018'
      , obligacion       : {
        A: 12519174,
      }
      , capitalAdeudado        : '$ 29.908.812'
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00906'
      , llaveProceso           : '11001400305220170090600'
      , etapaProcesal          : '11001400305220170090600'
      , fechaPresentacion      : 'SUSPENDIDO CENTRO DE CONCILIACIÓN'
      , mandamientoPago        : '30/08/2017'
      , notificacion           : {
        certimail: '16/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/09/2018'
        , medidaSolicitada  : '16/02/2018',
      },
    },
  }
  , {
    numero  : 230
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1014185483
      , nombre   : 'FREDY ALEXANDER MUÑOZ CASTAÑEDA'
      , telefono : 'F 8137713              CEL 3057528084'
      , email    : 'alexander.arquitecto@gmail.com'
      , direccion: 'CALLE 95 # 71 - 45 TORRE 8 APTO 1604',
    }

    , demanda: {
      vencimientoPagare: '23/0/72018'
      , obligacion       : {
        A: 12519174,
      }
      , capitalAdeudado        : '$ 29.908.812'
      , entregaGarantiasAbogado: '22/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00906'
      , llaveProceso           : '11001400305220170090600'
      , etapaProcesal          : '11001400305220170090600'
      , fechaPresentacion      : 'SUSPENDIDO CENTRO DE CONCILIACIÓN'
      , mandamientoPago        : '30/08/2017'
      , notificacion           : {
        certimail: '16/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/09/2018'
        , medidaSolicitada  : '16/02/2018',
      },
    },
  }
  , {
    numero  : 231
    , category: 'Terminados'
    , deudor  : {
      cedula: 1022943195
      , nombre: 'DIANA MARCELA IPUZ SUAREZ Y OTRO'

      , email    : '7493169 / 7672067'
      , direccion: 'marcelaipuzsuarez@hotmail.com',
    }
    , codeudor: {
      cedula   : 'CALLE 72B BIS No 5A 22 SUR'
      , nombre   : 1032416632
      , telefono : 'JHONNY HERNANDO BELTRAN SALCEDO'
      , direccion: '7493169 /3185405968',
    }
    , demanda: {
      vencimientoPagare: 'CALLE 67 C SUR 1B ESTE  APARTAMENTO 404 TORRE 2'
      , obligacion       : {
        A: 44518
        , B: 145608,
      }

      , entregaGarantiasAbogado: 20600721.7
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00089'
      , llaveProceso           : '11001418900920170008900'

      , fechaPresentacion: 'NOTIFICACION'
      , mandamientoPago  : '19/09/2017'
      , notificacion     : {
        certimail: '15/12/2017',
      }
      , medidasCautelares: {
        medidaSolicitada: '15/12/2017',
      },
    },
  }
  , {
    numero  : 232
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1023868827
      , nombre   : 'SANDRA MILENA CUBILLOS LINARES'
      , telefono : 3679910
      , email    : 'sandrujs2009@hotmail.com'
      , direccion: 'calle 39 SUR 9B 29 ESTE',
    }

    , demanda: {
      vencimientoPagare: '22/03/2033'
      , obligacion       : {
        A: 162559,
      }
      , capitalAdeudado        : '19.844.757.17'
      , entregaGarantiasAbogado: '6/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00879'
      , llaveProceso           : '11001400304820170087900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '18/09/2017'
      , mandamientoPago        : '19/10/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '19/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 233
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 11313124
      , nombre   : 'JOSE LUIS TORRES TAMAYO'
      , telefono : 'F 3138216              CEL 3138216786'
      , email    : 'jotorres@perosnalsoft.com.co'
      , direccion: 'CALLE 145 # 46 - 13 APTO 202 INT 5',
    }

    , demanda: {
      vencimientoPagare: '24/08/2020'
      , obligacion       : {
        A: 4099838997529750
        , B: '5303712728390736 // 12141636',
      }
      , capitalAdeudado        : '$ 30.506.109'
      , entregaGarantiasAbogado: '29/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00849'
      , llaveProceso           : '11001400302820170084900'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '1/09/2017'
      , mandamientoPago        : '19/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '26/01/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '18/04/2018',
        }
        , '292': {
          fechaAporta: '18/04/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '30/04/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/10/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 234
    , category: 'Terminados'
    , deudor  : {
      cedula   : 16940930
      , nombre   : 'MAURICIO ALEXANDER AGUIRRE BERMUDEZ'
      , telefono : '7451585 /3052392765'
      , email    : 'mauricio.aguirre@bav.sabmiller'
      , direccion: 'CALLE 152 12 35 INT 7',
    }

    , demanda: {
      obligacion: {
        A: '377815075274932 / 5176400101402245'
        , B: '5303729008808054 // AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '15.414.194.82'
      , entregaGarantiasAbogado: '6/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-01205'
      , llaveProceso           : '11001400304320170120500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '18/09/2017'
      , mandamientoPago        : '24/10/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '24/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 235
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 79853115
      , nombre   : 'FANOR DIAZ AGUDELO'
      , telefono : 'F 8060271                CEL 3212406193'
      , email    : 'fanor.diaz@gmail.com'
      , direccion: 'DIAGONAL 56 BIS 84 A 10 SUR TR 1',
    }

    , demanda: {
      vencimientoPagare: '14/02/2017'
      , obligacion       : {
        A: 148931,
      }
      , capitalAdeudado        : '$ 27.603.821'
      , entregaGarantiasAbogado: '6/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01134'
      , llaveProceso           : '11001400300820170113400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '18/09/2017'
      , mandamientoPago        : '21/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '6/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '6/02/2018',
        }
        , '292': {
          fechaAporta: '6/02/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '7/05/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '21/09/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 236
    , category: 'Terminados'
    , deudor  : {
      cedula   : 3165933
      , nombre   : 'RIGOBERTO MORENO OLAYA'
      , telefono : '7191321 /3123836799'
      , email    : 'rigoberto-moreno20@hotmail.com'
      , direccion: 'CARRERA 81 F 71F 56',
    }

    , demanda: {
      vencimientoPagare: '21/12/2032'
      , obligacion       : {
        A: 159497,
      }
      , capitalAdeudado        : '31.688.075.43'
      , entregaGarantiasAbogado: '6/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01362'
      , llaveProceso           : '11001400308520170136200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '18/09/2017'
      , mandamientoPago        : '21/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '4874/4875'
          , resultado    : '29/09/2017',
        }

        , certimail: '21/09/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 237
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80237050
      , nombre   : 'NUMAEL AUGUSTO GONZALEZ SALGUERO'
      , telefono : '8656241 /3114602334'
      , email    : 'numasue@gmail.com'
      , direccion: 'CARRERA 9 No 3-93',
    }
    , codeudor: {
      cedula   : 1078366269
      , nombre   : 'INGRID DAYHANA FORERO PALACIOS'
      , telefono : '8656241 /3124269483'
      , direccion: 'CARRERA 9 No 3-93',
    }
    , demanda: {
      vencimientoPagare: '14/05/2017'
      , obligacion       : {
        A: 151792,
      }
      , capitalAdeudado        : '90.276.951.42'
      , entregaGarantiasAbogado: '29/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'TENJO'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00247'
      , llaveProceso           : '25799418900120170024700'

      , fechaPresentacion: '19/09/2017',
    },
  }
  , {
    numero  : 238
    , category: 'Terminados'
    , deudor  : {
      cedula  : 7181490
      , nombre  : 'FREDY ALEXANDER RUDA ARIAS'
      , telefono: '2362747 /3106289389'
      , email   : 'blamblemooo1@gmail.com',
    }
    , codeudor: {
      cedula   : 1015446817
      , nombre   : 'LINA PAOLA RUDA BENITEZ'
      , telefono : 3147198973
      , direccion: 'CALLE 128 No 96 A-33',
    }
    , demanda: {
      vencimientoPagare: '05/09/2017 //13/08/2030'
      , obligacion       : {
        A: 12541785
        , B: 186378,
      }
      , capitalAdeudado        : '60.433.884.09'
      , entregaGarantiasAbogado: '11/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01106'
      , llaveProceso           : '11001400304320170110600'

      , fechaPresentacion: '19/09/2017',
    },
  }
  , {
    numero  : 239
    , category: 'Terminados'
    , deudor  : {
      cedula  : 53131901
      , nombre  : 'NIDIA JACQUELINE RIVEROS ARAQUE'
      , telefono: 7839904

      , direccion: 'CARRERA 88C  63 SUR 67 TORRE 5 APARTAMENTO 1',
    }

    , demanda: {
      obligacion: {
        A: 20990135265,
      }
      , capitalAdeudado        : '17.882.476.98'
      , entregaGarantiasAbogado: '13/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , radicado               : '2017 - 01164'
      , llaveProceso           : '11001400304520170116400'
      , etapaProcesal:
        'SIN LEVANTAMIENTO DE MEDIDA CAUTELAR AL 18/01/2023 SE ENCUENTRA DESARCHIVE DESDE EL 14 DE DICI DE 2022'
      , fechaPresentacion: '25/10/2017',
    },
  }
  , {
    numero  : 240
    , category: 'Terminados'
    , deudor  : {
      cedula   : 180145973
      , nombre   : 'CESAR ALIRIO MORENO MONGUI'
      , telefono : '5774513 /3134293286'
      , email    : 'cesarramm09@hotmail.com'
      , direccion: 'CARRERA 8 No 3-33',
    }
    , codeudor: {
      cedula   : 1033683759
      , nombre   : 'MARIA LORENA MORALES SEGURA'
      , telefono : 3134293286
      , direccion: 'CARRERA 6 No 7B 03 SUR  SOACHA',
    }
    , demanda: {
      vencimientoPagare: '23/06/2026'
      , obligacion       : {
        A: 140122,
      }
      , capitalAdeudado        : '21.616.444.55'
      , entregaGarantiasAbogado: '120/09/2017'
      , departamento           : 'CUN DINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00829'
      , llaveProceso           : '25754418900220170082900'

      , fechaPresentacion: '19/09/2017',
    },
  }
  , {
    numero  : 241
    , category: 'Terminados'
    , deudor  : {
      cedula   : 900535464
      , nombre   : 'PUBLI MAGIC S..A.S.'
      , telefono : 4796494
      , email    : 'publi.magic@hotmail.com'
      , direccion: 'CARRERA 8 BIS A No 151-86 APARTAMENTO 201',
    }
    , codeudor: {
      cedula   : 1020787803
      , nombre   : 'ANGELICA PAOLA CASTILLO GARCIA'
      , telefono : 4791494
      , direccion: 'CARRERA 8A BIS No 151-86 BARRIO CEDRO',
    }
    , demanda: {
      vencimientoPagare: '27/07/2018'
      , obligacion       : {
        A: 18000088458,
      }
      , capitalAdeudado        : '12.677.786.00'
      , entregaGarantiasAbogado: '11/09/2017'
      , departamento           : 'CUNDINNAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01044'
      , llaveProceso           : '11001400302320170104400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '19/09/2017'
      , mandamientoPago        : '26/10/2017'
      , notificacion           : {
        '292': {
          resultado: '20/06/2018 JAIME',
        }
        , certimail: 'JAIME CASTILLO'

        , tipo          : 'PNAL'
        , autoNotificado: '18/06/2018 REP LEGAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/10/2017'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 242
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79793904
      , nombre   : 'JOHN HADER OTALVARO  ROMO'
      , telefono : '4805457 /3223968514'
      , email    : 'johnhader70@hotmail.com'
      , direccion: 'CALLE 183 No11 -55 BLOQUE 9 APARTAMENTO 102',
    }
    , codeudor: {
      cedula   : 1018430139
      , nombre   : 'LUISA FERNANDA SALAZAR PATARROYO'
      , telefono : 6680643
      , direccion: 'CARRERA 38 No 14-93 BLOQUE  1 CASA 301 SOACHA',
    }
    , demanda: {
      vencimientoPagare: '20/04/2023'
      , obligacion       : {
        A: 20990182990,
      }
      , capitalAdeudado        : '21.740.168.69'
      , entregaGarantiasAbogado: '11/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00903'
      , llaveProceso           : '25754418900220180036300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '19/09/2017'
      , mandamientoPago        : '6/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 1339
          , resultado    : '13/10/2017',
        }

        , certimail: '6/10/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 243
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 300388244
      , nombre  : 'MARIA OLGA CASTAÑEDA PERUGACHI'
      , telefono: 'F 1111111              CEL 32222239883 3143072762'

      , direccion: 'CALLE 15 # 15 - 45',
    }

    , demanda: {
      vencimientoPagare: '11/08/2020'
      , obligacion       : {
        A: 12577419,
      }
      , capitalAdeudado        : '$ 46.109.381'
      , entregaGarantiasAbogado: '25/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00845'
      , llaveProceso           : '11001400306920170084500'
      , etapaProcesal          : 'EN EJECUCIÓN LIQUIDACIÓN CREDITO SOLICITADA A COVINOC'
      , fechaPresentacion      : '31/08/2017'
      , mandamientoPago        : '5/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '23/02/2018'
          , resultado    : 'NEGATIVO'
          , fechaAporta  : '23/02/2018',
        }

        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '13/02/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/10/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 244
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80144827
      , nombre   : 'RICARDO ANDRES NOCUA GUATAMA'
      , telefono : 7232237
      , email    : 'pajulo8@hotmail.com'
      , direccion: 'CALLE 62 A SUR 87C -58',
    }
    , codeudor: {
      cedula   : 1012324304
      , nombre   : 'JANETH ELIANA SARMIENTO GAMBA'
      , telefono : 7839314
      , direccion: 'CALLE 62A87C-58',
    }
    , demanda: {
      vencimientoPagare: '28/02/2033'
      , obligacion       : {
        A: 161786,
      }
      , capitalAdeudado        : '37.800.911.06'
      , entregaGarantiasAbogado: '12/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01006'
      , llaveProceso           : '11001400302620170100600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '19/09/2017'
      , mandamientoPago        : '10/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 5603
          , resultado    : '20/10/2017',
        }

        , certimail: '10/10/2017',
      },
    },
  }
  , {
    numero  : 245
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79893549
      , nombre   : 'JAVIER ORLANDO GOMEZ DIAZ'
      , telefono : 2389440
      , email    : 'jaorgodi@hotmail.com'
      , direccion: 'CALLE 76 C SUR 1H 27',
    }
    , codeudor: {
      cedula   : 1061675
      , nombre   : 'LUIS ALONSO GOMEZ DIAS'
      , telefono : 41777788
      , direccion: 'TRANSVERSAL 40 No 14-93 TORRE 1 APTO 301 SOACHA',
    }
    , demanda: {
      vencimientoPagare: '21/11/2022'
      , obligacion       : {
        A: 103058,
      }
      , capitalAdeudado        : '35.432.721.58'
      , entregaGarantiasAbogado: '6/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00957'
      , llaveProceso           : '11001400303820170095700'

      , fechaPresentacion: '19/09/2017',
    },
  }
  , {
    numero  : 246
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79805533
      , nombre  : 'EDWIN BUITRAGO VILLAMIL'
      , telefono: '7696884 /3204979488'

      , direccion: 'CARRERA 26 No 44-76 SUR',
    }
    , codeudor: {
      cedula   : 52228840
      , nombre   : 'SANDRA JANNETH BUITAGO BERNAL'
      , telefono : '7692061 /2077527'
      , direccion: 'CARRERA 26 No 44-76 SUR',
    }
    , demanda: {
      vencimientoPagare: '21/11/2023'
      , obligacion       : {
        A: 113645,
      }
      , capitalAdeudado        : '18.012.121.45'
      , entregaGarantiasAbogado: '13/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00242'
      , llaveProceso           : '11001400304720180024200'

      , fechaPresentacion: '19/09/2017',
    },
  }
  , {
    numero  : 247
    , category: 'Terminados'
    , deudor  : {
      cedula   : 179290
      , nombre   : 'DIONISIO LANCHEROS NOVOA'
      , telefono : 3115221604
      , email    : 'dlancheros92@hotmail.com'
      , direccion: 'CALLE 5 No  0-19 ANAPOIMA',
    }

    , demanda: {
      vencimientoPagare: '20/03/2017'
      , obligacion       : {
        A: '377815356092904//45130711799741999'
        , B: 5303714068687853,
      }
      , capitalAdeudado        : '17.635.164.44'
      , entregaGarantiasAbogado: '6/09/2017'
      , departamento           : 'CUNDINNAMARCA'
      , municipio              : 'ANAPOIMA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00173'
      , llaveProceso           : '25035418900120170017300'

      , fechaPresentacion: 'SENTENCIA'
      , mandamientoPago  : '18/09/2017'
      , notificacion     : {
        certimail: '24/10/2017'

        , autoNotificado: 'CERTIMIAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/06/2018'
        , medidaSolicitada  : '24/10/2017',
      },
    },
  }
  , {
    numero  : 248
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19475788
      , nombre   : 'HENRY CARRANZA ALBA'
      , telefono : '4070342/ 3193196261'
      , email    : 'hemacarblan@hotmail.com'
      , direccion: 'CALLE 31 SUR No 12-33',
    }
    , codeudor: {
      cedula   : 1013592416
      , nombre   : 'FELIPE ANDRES CARRANZA BLANCO'
      , telefono : '4786479 /3142987388'
      , direccion: 'CALLE 31 C SUR No 14A33',
    }
    , demanda: {
      vencimientoPagare: '22/04/2017'
      , obligacion       : {
        A: 130619,
      }
      , capitalAdeudado        : '49.971.067.69'
      , entregaGarantiasAbogado: '7/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00871'
      , llaveProceso           : '11001400305920170087100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '14/09/2017'
      , mandamientoPago        : '4/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 4071
          , resultado    : '20/10/2017',
        }

        , certimail: '04/10/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 249
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 19069228
      , nombre   : 'JORGE ALBERTO MARTINEZ BENDEK'
      , telefono : 'F 6701643              CEL 3134749213'
      , email    : 'jorgemar24@gmail.com'
      , direccion: 'CARRERA 15 # 188 - 39',
    }

    , demanda: {
      vencimientoPagare: '18/05/2020  // 5/05/2020 // 15/05/2019'
      , obligacion       : {
        A: 377813517259835
        , B: '377814405234039 // 45130727777594186 // 5491572487025564 // AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 44.933.312'
      , entregaGarantiasAbogado: '23/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00875'
      , llaveProceso           : '11001400301620170087500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '4/09/2017'
      , mandamientoPago        : '11/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '28/06/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '28/06/2018',
        }
        , '292': {
          fechaAporta: '28/06/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '5/09/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/09/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE Y DE VEHICULO',
      },
    },
  }
  , {
    numero  : 250
    , category: 'Terminados'
    , deudor  : {
      cedula   : 72165243
      , nombre   : 'FRANCISCO CONTRERAS RAMIREZ'
      , telefono : '8715525 /3135348199'
      , email    : 'vivipu@hotmail.com.co'
      , direccion: 'CALLE 3 A No 5-56 APARTAAMENTO 101 SOPO',
    }
    , codeudor: {
      cedula   : 52454328
      , nombre   : 'VIVIANA ANDREA ARBOLEDA HERNANDEZ'
      , telefono : 8715525
      , direccion: 'CALLE 3 No 5-56 APARTAMENTO 101 SOPO',
    }
    , demanda: {
      vencimientoPagare: '29/08/2017'
      , obligacion       : {
        A: '37781325203 /4513088996703762'
        , B: '5303729275150891 /12642123',
      }
      , capitalAdeudado        : '46.432.606.87'
      , entregaGarantiasAbogado: '4/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOPO'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00599'
      , llaveProceso           : '25758418900120170059900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '14/09/2017'
      , mandamientoPago        : '16/11/2017'
      , notificacion           : {
        tipo          : 'PERSONAL'
        , autoNotificado: 43191,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '16/11/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 251
    , category: 'Terminados'
    , deudor  : {
      cedula   : 7226283
      , nombre   : 'CARLOS JAVIER BECERRA BENAVIDES'
      , telefono : 'CEL 3178195535'
      , email    : 'cajux@hotmail.com'
      , direccion: 'CARRERA 11A # 17 - 24 SANTA BARBARA',
    }

    , demanda: {
      vencimientoPagare: '22/08/2017'
      , obligacion       : {
        A: 12703441,
      }
      , capitalAdeudado        : '$ 56.386.936'
      , entregaGarantiasAbogado: '25/04/2020'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01162'
      , llaveProceso           : '11001400301320170116200'
      , etapaProcesal          : '2017 - 01162'
      , fechaPresentacion      : '11001400301320170116200'
      , mandamientoPago        : 'EJECUCIÓN'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : 'NO'
          , fechaAporta  : '15/12/2017',
        }
        , '292': {
          fechaAporta: '15/12/2017'
          , resultado  : 'POSITIVO',
        }
        , certimail: '4/09/2017'
        , fisico   : '13/09/2017',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'CERTIMAIL'
        , medidaSolicitada  : '12/02/2018',
      },
    },
  }
  , {
    numero  : 252
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1023863956
      , nombre   : 'ANGEL JOVANI SUAREZ GOMEZ'
      , telefono : 2848432
      , email    : 'angelsuarez.23@hotmail.com'
      , direccion: 'CALLE 67 C SUR 1 B 23 EST',
    }
    , codeudor: {
      cedula   : 1032423457
      , nombre   : 'DAMARIS MILENA CAICEDO FARIETA'
      , telefono : 10324223457
      , direccion: 'CALLE 67 C SUR 1B 23 ESTE APARTAMENTO 503 TORRE 9',
    }
    , demanda: {
      vencimientoPagare: '5/01/2027'
      , obligacion       : {
        A: 147600,
      }
      , capitalAdeudado        : '26.469.309.75'
      , entregaGarantiasAbogado: '5/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01236'
      , llaveProceso           : '11001400303420170123600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '14/09/2017'
      , mandamientoPago        : '25/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 2253
          , resultado    : '01/11/2017',
        }
        , '292': {
          resultado: '28/11/2017',
        }
        , certimail: '25/10/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 253
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1013604409
      , nombre   : 'JORGE EDUARDO ACOSTA CORREDOR'
      , telefono : 'F 3521314                 CEL 3115197002'
      , email    : 'jan_2504@hotmail.com'
      , direccion: 'CALLE 47 SUR No 27-81',
    }

    , demanda: {
      vencimientoPagare: '4/09/2020'
      , obligacion       : {
        A: 12395327,
      }
      , capitalAdeudado        : '$ 15.114.966'
      , entregaGarantiasAbogado: '7/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00998'
      , llaveProceso           : '11001400302520170099800'
      , etapaProcesal          : '11001400302520170099800'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '14/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '8/06/2018',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '29/09/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '8/06/2018'
        , medidaSolicitada  : '29/09/2017',
      },
    },
  }
  , {
    numero  : 254
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 52344904
      , nombre   : 'YOHAIRA PRADO VALOYES'
      , telefono : 'F 8615372                  CEL 3103291690'
      , email    : 'yohairapadro@gmail.com'
      , direccion: 'CARRERA 9A 14F - 28C - UNIDAD 22 CHIA',
    }

    , demanda: {
      vencimientoPagare: '9/05/2018'
      , obligacion       : {
        A: 9460081795
        , B: 5303727444531025,
      }
      , capitalAdeudado        : '$ 12.993.948'
      , entregaGarantiasAbogado: '28/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CHIA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00477'
      , llaveProceso           : '25175408900320170047700'

      , fechaPresentacion: '8/09/2017'
      , mandamientoPago  : '22/10/018'
      , notificacion     : {
        '291': {
          fechaRecibido: '1/11/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '1/11/2018',
        }
        , '292': {
          fechaAporta: '22/11/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail: 'SI'
        , fisico   : 'NO'
        , tipo     : 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '3/11/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 255
    , category: 'Terminados'
    , deudor  : {
      cedula  : 23946115
      , nombre  : 'YEIMI ZORAIDA PEREZ ACEVEDO'
      , telefono: 'F 2593579'

      , direccion: 'DIAGONAL 136 BIS # 3 - 80 SUR',
    }
    , codeudor: {
      cedula   : 1002415012
      , nombre   : 'PABLO ANDRES PEREZ ACEVEDO'
      , telefono : '7708676 // 3142983369'
      , direccion: 'CALLE 136 # 14 - 22 SUR',
    }
    , demanda: {
      vencimientoPagare: '19/07/2019'
      , obligacion       : {
        A: 940082843,
      }
      , capitalAdeudado        : '$ 15.311.681'
      , entregaGarantiasAbogado: '1/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01021'
      , llaveProceso           : '11001400301220170102100'
      , etapaProcesal          : '11001400301220170102100'
      , fechaPresentacion      : 'EJECUCION'
      , mandamientoPago        : '5/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO',
        }
        , '292': {
          fechaAporta: 'NEGATIVO',
        }
        , certimail: '3/10/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        medidaSolicitada: '3/10/2017',
      },
    },
  }
  , {
    numero  : 256
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79881862
      , nombre   : 'FREDDY ARIAS MARTINEZ'
      , telefono : 3552430
      , email    : 'freddydanasebas@hotmail.com'
      , direccion: 'TRANSVERSAL 112 C No  64 D -15. BLOQUE 7 APARTAMENTO 4',
    }
    , codeudor: {
      cedula   : 53160708
      , nombre   : 'YENNY PAOLA URIBE  GOMEZ'
      , telefono : 4416629
      , direccion: 'TRANSVERSAL 112 C No 64 D- 15  TORRE 1 APARTAMENTO 404',
    }
    , demanda: {
      vencimientoPagare: '2/09/2019'
      , obligacion       : {
        A: 40800882948
        , B: 96296,
      }
      , capitalAdeudado        : '6.165.522.03'
      , entregaGarantiasAbogado: '18/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01410'
      , llaveProceso           : '11001400300720170141000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '21/09/2017'
      , mandamientoPago        : '4/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 3903
          , resultado    : '24/10/2017',
        }

        , certimail: '4/10/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 257
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79706920
      , nombre  : 'PAUL RICHARD CAICEDO'
      , telefono: 7527164

      , direccion: 'CALLE 8 A No 88B - 31 ETAPA 7 CASA 196',
    }

    , demanda: {
      vencimientoPagare: '25/04/2017'
      , obligacion       : {
        A: 20990083482,
      }
      , capitalAdeudado        : '13.036.109.81'
      , entregaGarantiasAbogado: '13/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00138'
      , llaveProceso           : '11001418900720170013800'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '21/09/2017'
      , mandamientoPago        : '18/10/2017'
      , notificacion           : {
        tipo          : 'PNAL'
        , autoNotificado: 43216,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '18/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 258
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 51740544
      , nombre   : 'SOL JUDITH BUITRAGO DUQUE'
      , telefono : 'F 3002001'
      , email    : 'dirfinanciera.sol@gmail.com'
      , direccion: 'CARRERA 121 # 128B - 52 BLOQUE 8 CASA 34',
    }

    , demanda: {
      vencimientoPagare: '26/01/2018'
      , obligacion       : {
        A: 5470083833
        , B: '377813735559305 // 5303724061518310',
      }
      , capitalAdeudado        : '$ 18.506.672'
      , entregaGarantiasAbogado: '1/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01178'
      , llaveProceso           : '11001400301320170117800'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '6/09/2017'
      , mandamientoPago        : '13/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '14/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '14/02/2018',
        }
        , '292': {
          fechaAporta: '14/02/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '03/04/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '13/09/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 259
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52770471
      , nombre   : 'LUZ NELLY RUIZ LARA'
      , telefono : 4505648
      , email    : 'nelly_ruiz1980@hotmail.com'
      , direccion: 'CARRERA 87 F - No 26-74 SUR',
    }

    , demanda: {
      vencimientoPagare: '23/04/2017'
      , obligacion       : {
        A: 153884,
      }
      , capitalAdeudado        : '79.266.368.98'
      , entregaGarantiasAbogado: '13/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01256'
      , llaveProceso           : '11001400303920170125600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '21/09/2017'
      , mandamientoPago        : '1/11/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '1/11/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 260
    , category: 'Terminados'
    , deudor  : {
      cedula   : 11384155
      , nombre   : 'HERNAN ALVAREZ PARDO'
      , telefono : 3133854
      , email    : 'heralvarezpa@misena.edu.co'
      , direccion: 'CARRERA 4 ESTE 4-42  FUSAGASUGA',
    }

    , demanda: {
      vencimientoPagare: '12/09/2017'
      , obligacion       : {
        A: 132687
        , B: 3778133800181884,
      }
      , capitalAdeudado        : '16.242.560.72'
      , entregaGarantiasAbogado: '18/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUSAGASUGA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00634'
      , llaveProceso           : '25290400300120170063400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '27/09/2017'
      , mandamientoPago        : '18/10/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '18/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 261
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79901800
      , nombre   : 'DANIEL ALBERTO IBAÑEZ DELGADO'
      , telefono : '2737360 / 3125489014'
      , email    : 'dsenna_22@yahoo.com'
      , direccion: 'CALLE 1 No 78 M 21 BLOQUE H4 APARTAMENTO 502',
    }

    , demanda: {
      vencimientoPagare: '11/09/2017'
      , obligacion       : {
        A: 12686980,
      }
      , capitalAdeudado        : '18.220.483.45'
      , entregaGarantiasAbogado: '18/09/2017'
      , departamento           : 'CUNDINNAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01116'
      , llaveProceso           : '11001400308220170111600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '27/09/2017'
      , mandamientoPago        : '5/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 3481
          , resultado    : '12/10/2017',
        }

        , certimail: '5/10/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 262
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1069737167
      , nombre   : 'RAFAEL ANDRES MORENO ZAMORA'
      , telefono : '8864238/3103247146'
      , email    : 'rafael_moreno.z@hotmail.com'
      , direccion: 'DIAGONAL 1C No 25B -18  FUSAGASUGA',
    }
    , codeudor: {
      cedula: '11.383.194'
      , nombre: 'RAFAEL ANTONIO MORENO FRANCO'

      , direccion: 'DIAGONAL 1C No 25 B - 18  FUSAGASUFA',
    }
    , demanda: {
      vencimientoPagare: '1/08/2018'
      , obligacion       : {
        A: '9450082213 /0377847716751531'
        , B: '0377847593768038',
      }
      , capitalAdeudado        : '15.840.545.83'
      , entregaGarantiasAbogado: '12/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUSAGASUGA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00631'
      , llaveProceso           : '2590400300220170063100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '27/09/2017'
      , mandamientoPago        : '5/10/2017'
      , notificacion           : {
        tipo: 'SOLICITUD EPS',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '5/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 263
    , category: 'Terminados'
    , deudor  : {
      cedula   : 9856710
      , nombre   : 'ANCIZAR GIRALDO BOTERO'
      , telefono : 8555661
      , email    : 'latablita1404@hotmail.com'
      , direccion: 'CARRERA  6 No 8-16 PENSILVANIA',
    }

    , demanda: {
      vencimientoPagare: '20/09/2017'
      , obligacion       : {
        A: 12603197,
      }
      , capitalAdeudado        : '21.435.278.32'
      , entregaGarantiasAbogado: '22/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'PENSILVANIA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01007'
      , llaveProceso           : '11001400307020170100700'

      , fechaPresentacion: '27/09/2017',
    },
  }
  , {
    numero  : 264
    , category: 'Terminados'
    , deudor  : {
      cedula   : 3058707
      , nombre   : 'HECTOR JULIO GARZON PEÑA'
      , telefono : 3105683065
      , email    : 'N / A'
      , direccion: 'VEREDA POTRERO LARGO  GUATAVITA',
    }

    , demanda: {
      vencimientoPagare: '4/08/2017'
      , obligacion       : {
        A: 3360084994,
      }
      , capitalAdeudado        : '36.756..277.00'
      , entregaGarantiasAbogado: '20/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SESQUILE'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00166'
      , llaveProceso           : '25736408900120170016600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '28/09/2017'
      , mandamientoPago        : '12/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 1066
          , resultado    : '18/10/2017',
        }

        , certimail: '12/10/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 265
    , category: 'Insolvencia'
    , deudor  : {
      cedula   : 7601476
      , nombre   : 'JULIO RENE SANCHEZ ARGOTE'
      , telefono : 'F 3018759                 CEL 3118027001'
      , email    : 'jsanchezargote@gmail.com'
      , direccion: 'CARRERA 90 C No 6A - 31   - CASA 148',
    }

    , demanda: {
      vencimientoPagare: '4/05/2020'
      , obligacion       : {
        A: 186718
        , B: '3778153354915637 / 4513079095670572',
      }
      , capitalAdeudado        : '$ 115.224.736'
      , entregaGarantiasAbogado: '21/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00650'
      , llaveProceso           : '1100140030202100050100'
      , etapaProcesal          : '11001400306320180065000'
      , fechaPresentacion      : 'PROCESO DE INSOLVENCIA PASO A LIQUIDACION JUDICIAL'
      , mandamientoPago        : '27/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '26/02/2018'
          , fechaAporta  : '3/04/2018',
        }
        , '292': {
          fechaRecibido: '30/05/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '9/10/2017'
        , fisico   : 'NO'

        , autoNotificado: 'FISICA',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '1/06/2018'
        , medidaSolicitada  : '9/10/2017',
      },
    },
  }
  , {
    numero  : 266
    , category: 'Terminados'
    , deudor  : {
      cedula   : 71192974
      , nombre   : 'JULIAN DE JESUS ISAZA AGUIRRE'
      , telefono : 3138085772
      , email    : 'mayaconfecciones1@gmail.com'
      , direccion: 'CARRERA 24 H No 23 A - 08 SUR',
    }

    , demanda: {
      vencimientoPagare: '20/09/2017'
      , obligacion       : {
        A: 12468489,
      }
      , capitalAdeudado        : '67.660.913.00'
      , entregaGarantiasAbogado: '22/09/2017'
      , departamento           : 'CUNDINNAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01219'
      , llaveProceso           : '11001400302020170121900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '27/09/2017'
      , mandamientoPago        : '7/11/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '7/11/2017'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 267
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52102735
      , nombre  : 'ANA FABIOLA CARDOZO HERREÑO'
      , telefono: 'F 5672482'

      , direccion: 'CARRERA 5 C BIS No  54 - 06 SUR',
    }

    , demanda: {
      vencimientoPagare: '20/09/2020'
      , obligacion       : {
        A: 12547875,
      }
      , capitalAdeudado        : '$ 32.830.090'
      , entregaGarantiasAbogado: '22/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01229'
      , llaveProceso           : '11001400306220170122900'
      , etapaProcesal          : '11001400306220170122900'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '27/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '18/06/018',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '4/10/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '31/08/2018'
        , medidaSolicitada  : '4/10/2017',
      },
    },
  }
  , {
    numero  : 268
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79592811
      , nombre   : 'JORGE HUGO LEAL SERRATO'
      , telefono : 'F 7598804'
      , email    : 'johuleal@gmail.com'
      , direccion: 'CARRERA 72 No 23 - 24 APARTAMENTO 402  I',
    }
    , codeudor: {
      nombre: 'JUAN CARLOS ORTIZ LEAL',
    }
    , demanda: {
      vencimientoPagare: '21/09/2020'
      , obligacion       : {
        A: 12649406,
      }
      , capitalAdeudado        : '$ 48.855.784'
      , entregaGarantiasAbogado: '25/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01475'
      , llaveProceso           : '11001400303520170147500'
      , etapaProcesal          : '11001400303520170147500'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '5/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '30/05/2018'
          , fechaAporta  : 43340,
        }
        , '292': {
          fechaRecibido: '30/10/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '17/10/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '15/01/2019'
        , medidaSolicitada  : '17/10/2017',
      },
    },
  }
  , {
    numero  : 269
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80162950
      , nombre   : 'JUAN CARLOS ORTIZ CUERVO'
      , telefono : 5490735
      , email    : 'ju@yahoo.es'
      , direccion: 'CARRERA 16 No 14 - 36',
    }

    , demanda: {
      vencimientoPagare: '31/03/2025'
      , obligacion       : {
        A: 182524,
      }
      , capitalAdeudado        : '105.666.670.22'
      , entregaGarantiasAbogado: '21/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUNZA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00421'
      , llaveProceso           : '25286400300120180042100'

      , fechaPresentacion: 'TERMINO POR PAGO TOTAL'
      , mandamientoPago  : '20/04/2018'
      , notificacion     : {
        certimail: '13/06/2018'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '17/08/2018'
        , medidaSolicitada  : '13/0620178',
      },
    },
  }
  , {
    numero  : 270
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1018423770
      , nombre   : 'WILMER ANDRES QUIÑONES HERNANDEZ'
      , telefono : '4566333 / 3107727822'
      , email    : 'andresxaw@gmail.com'
      , direccion: 'CALLE 37 B No 68 I - 23 SUR',
    }

    , demanda: {
      vencimientoPagare: '21/09/2017'
      , obligacion       : {
        A: 12327160,
      }
      , capitalAdeudado        : '15.921.423.12'
      , entregaGarantiasAbogado: '25/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01139'
      , llaveProceso           : '11001408903420170113900'

      , fechaPresentacion: '05/10/2017',
    },
  }
  , {
    numero  : 271
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52850427
      , nombre  : 'AURA GEOVANA RODRIGUEZ MORA'
      , telefono: 'geomora850@hotmail.com'
      , email   : 'CARRERA 16 No  24 - 34 APARTAMENTO 302',
    }
    , codeudor: {
      direccion: '22/09/2017',
    }
    , demanda: {
      vencimientoPagare: 12600924
      , obligacion       : {
        B: '39.495.993.87',
      }
      , capitalAdeudado        : '26/09/2017'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00990'
      , llaveProceso           : '11001400405420170099000'
      , etapaProcesal          : '05/10/2017'
      , fechaPresentacion      : '17/10/2017'
      , mandamientoPago        : 'NIEGA CERTIMAIL'
      , notificacion           : {
        autoNotificado: '17/10/2017',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'VEHICULO'
        , medidaSolicitada  : '3877',
      },
    },
  }
  , {
    numero  : 272
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80406979
      , nombre   : 'LUIS FERNANDO GUTIERREZ RODRIGUEZ'
      , telefono : 7697763
      , email    : 'nellyandreabotiab@hotmail.com'
      , direccion: 'CALLE 9 No 1 - 32     TABIO',
    }

    , demanda: {
      vencimientoPagare: '21/09/2017'
      , obligacion       : {
        A: 12381866,
      }
      , capitalAdeudado        : '14.586.242.26'
      , entregaGarantiasAbogado: '25/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00763'
      , llaveProceso           : '11001400300620170076300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '05/10/2017'
      , mandamientoPago        : '09/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 2064
          , resultado    : '26/10/2017',
        }

        , certimail: '09/10/2017'
        , fisico   : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 273
    , category: 'Insolvencia'
    , deudor  : {
      cedula   : 1024479389
      , nombre   : 'SONIA MARCELA MOLINA QUIMBAYO'
      , telefono : 'F 7650684'
      , email    : 'sonymarce20@hotmail.com'
      , direccion: 'CALLE 67 No 17 C-63 SUR',
    }

    , demanda: {
      vencimientoPagare: '5/10/2022'
      , obligacion       : {
        A: 156791,
      }
      , capitalAdeudado        : '$ 65.355.736'
      , entregaGarantiasAbogado: '25/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 01029'
      , llaveProceso           : '11001400306420180102900'
      , etapaProcesal          : '11001400306420180102900'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '05/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '17/09/2018',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '31/08/2018'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '24/09/2018'
        , medidaSolicitada  : '11/09/2018',
      },
    },
  }
  , {
    numero  : 274
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80312466
      , nombre   : 'ANDRES GUILLERMO ACEVEDO BORRAEZ'
      , telefono : '6915340 /3178134824'
      , email    : 'andresacevedo24@hotmail.com'
      , direccion: 'carrera 28 No  84 - 36',
    }

    , demanda: {
      vencimientoPagare: '27/06/2017'
      , obligacion       : {
        A: 109481,
      }
      , capitalAdeudado        : '12.918.060.89'
      , entregaGarantiasAbogado: '21/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01484'
      , llaveProceso           : '11001400300720170148400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '05/10/2017'
      , mandamientoPago        : '09/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 4374
          , resultado    : '01/12/2017',
        }

        , certimail: '09/11/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 275
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39670695
      , nombre   : 'HORTENCIA GARZON'
      , telefono : '6012243 / 3208100658'
      , email    : 'rokerita19748@hotmail.com'
      , direccion: 'TRANSVERSAL 4 B No 3 - 64 sur  APTO 473  SOACHA',
    }

    , demanda: {
      vencimientoPagare: '09/12/2024'
      , obligacion       : {
        A: 20990124579,
      }
      , capitalAdeudado        : '11.599.559.60'
      , entregaGarantiasAbogado: '27/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00969'
      , llaveProceso           : '25754408900320170096900'

      , fechaPresentacion: '05/10/2017',
    },
  }
  , {
    numero  : 276
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79200345
      , nombre   : 'NELSON MAYORGA GOMEZ'
      , telefono : '9008364 / 3204283595'
      , email    : 'nelson_mayorga@outlook.com'
      , direccion: 'CARRERA 5  No 5 - 30 APARTAMENTO 202 SOACHA',
    }

    , demanda: {
      vencimientoPagare: '05/02/2017'
      , obligacion       : {
        A: 190886,
      }
      , capitalAdeudado        : '46.086.886.44'
      , entregaGarantiasAbogado: '21/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00381'
      , llaveProceso           : '25754400300420170038100'

      , fechaPresentacion: '05/10/2017',
    },
  }
  , {
    numero  : 277
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39687966
      , nombre   : 'OLGA LUCIA HERAZO PERDOMO'
      , telefono : 'F 2120692'
      , email    : 'olgalucia.herazo@gmail.com'
      , direccion: 'DIAGONAL 76 # 6 - 12 APTO 604',
    }

    , demanda: {
      vencimientoPagare: '7/08/2019'
      , obligacion       : {
        A: 1710090192
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 23.454.012'
      , entregaGarantiasAbogado: '1/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00980'
      , llaveProceso           : '11001400308320170098000'
      , etapaProcesal          : '11001400308320170098000'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '6/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '4/03/2018',
        }
        , '292': {
          fechaRecibido: '10/04/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '25/10/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '10/04/2018'
        , medidaSolicitada  : '25/10/2017',
      },
    },
  }
  , {
    numero  : 278
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 35506033
      , nombre   : 'LUZ DARY PUERTA JARAMILLO'
      , telefono : 'F 4357832                CEL 3103430010'
      , email    : 'natis-rolita@hotmail.con'
      , direccion: 'CARRERA  101  No 71 B - 53',
    }
    , codeudor: {
      cedula   : 4337296
      , nombre   : 'JOSE NOEL PUERTA PUERTA'
      , telefono : 3103431255
      , direccion: 'CARRERA  115 No 89 A - 31 INT 12 APART 202',
    }
    , demanda: {
      vencimientoPagare: '18/03/2019'
      , obligacion       : {
        A: 4670083154,
      }
      , capitalAdeudado        : '$ 12.347.548'
      , entregaGarantiasAbogado: '28/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01391'
      , llaveProceso           : '11001400303720170139100'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '10/10/2017'
      , mandamientoPago        : '16/01/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '30/04/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '14/09/2018',
        }
        , '292': {
          fechaRecibido: '15/05/2018'
          , fechaAporta  : '8/06/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '3/09/2018',
      },
    },
  }
  , {
    numero  : 279
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 1069745324
      , nombre  : 'ANDRES FELIPE GUTIERREZ TRUJILLO'
      , telefono: 'CEL 3115964170'

      , direccion: 'CALLE 14A SUR # 11M - 18 CASA 22',
    }

    , demanda: {
      vencimientoPagare: '7/12/2020'
      , obligacion       : {
        A: 2330087057,
      }
      , capitalAdeudado        : '$ 14.404.721'
      , entregaGarantiasAbogado: '25/08/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01058'
      , llaveProceso           : '11001400300820170105800'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '4/09/2017'
      , mandamientoPago        : '13/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '6/07/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '6/07/2018',
        }
        , '292': {
          fechaAporta: '6/07/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '31/07/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '13/09/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 280
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 19447966
      , nombre   : 'JOSE HERNANDO SANCHEZ VALBUENA'
      , telefono : 'F 4789274              CEL 3125826241'
      , email    : 'jhernandosanchez@yahoo.es'
      , direccion: 'CR 12B 24-37 SUR',
    }

    , demanda: {
      vencimientoPagare: '15/012021'
      , obligacion       : {
        A: 8920084662,
      }
      , capitalAdeudado        : '$ 11.796.195'
      , entregaGarantiasAbogado: '11/09/2017'
      , departamento           : 'CUNDINNAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01279'
      , llaveProceso           : '11001400300920170127900'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '19/09/2017'
      , mandamientoPago        : '12/12/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '27/06/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '27/06/2018',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '27/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/12/2017'
        , medidaSolicitada  : 'EMBARGO ESTABLECIMIENTO DE COMERCIO',
      },
    },
  }
  , {
    numero  : 281
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1069712582
      , nombre  : 'YENNY MARGOTH LARA MUÑOZ'
      , telefono: 'yennychipaque@outlook.com'
      , email   : 'CALLE 34 No 2 - 15 SOACHA',
    }

    , demanda: {
      vencimientoPagare: 21258
      , obligacion       : {
        B: '112.243.598.43',
      }
      , capitalAdeudado        : '02 / 10/2017'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'ARBELAEZ'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00049'
      , llaveProceso           : '25053408900120180004900'
      , etapaProcesal          : '10/10/2017 // 13/03/2018'
      , fechaPresentacion      : '13/04/2018'

      , notificacion: {
        '291': {
          resultado: '06/09/2018',
        }
        , '292': {
          fechaAporta: '10/09/2018',
        }

        , autoNotificado: '13/04/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '2018-0589',
      },
    },
  }
  , {
    numero  : 282
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 19255260
      , nombre   : 'MATIAS HUMBERTO AVILA AGUILAR'
      , telefono : 'F 4170527              CEL 3125024008'
      , email    : 'maifren_13@yahoo.es'
      , direccion: 'CALLE 2 C No 62 - 20',
    }
    , codeudor: {
      cedula   : '41759787 // 39710157'
      , nombre   : 'CARMELINA AGUILAR  //  ANA LUCIA AGUILAR'
      , telefono : '3204613419 //3107627120'
      , direccion: 'DG 3B No. 0-78 ESTE',
    }
    , demanda: {
      vencimientoPagare: '5/05/2024'
      , obligacion       : {
        A: 174366,
      }
      , capitalAdeudado        : '$ 66.362.959'
      , entregaGarantiasAbogado: '21/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01394'
      , llaveProceso           : '11001400301520170139400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '10/10/2017'
      , mandamientoPago        : '08/11/2017    09/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '14/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '08/06/2018',
        }
        , '292': {
          fechaRecibido: '23/02/2018'
          , fechaAporta  : '08/06/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO/ PERSONAL'
        , autoNotificado: '23/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '08/11/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 283
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1010188573
      , nombre   : 'JANSON DAVID CARREÑO QUIJANO'
      , telefono : 4095235
      , email    : 'jansonmalak@hotmail.com'
      , direccion: 'CALLE 6 D No 88 D 59  APARTAMENTO  402',
    }

    , demanda: {
      vencimientoPagare: '20/07/2017'
      , obligacion       : {
        A: 1860086996,
      }
      , capitalAdeudado        : '21.109.451.00'
      , entregaGarantiasAbogado: '26/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01140'
      , llaveProceso           : '11001400304120170114000'
      , etapaProcesal          : 'LIQUIDACION'
      , fechaPresentacion      : 'RT'
      , mandamientoPago        : '19/01/2017'
      , notificacion           : {
        tipo          : 'FISICO'
        , autoNotificado: '05/07/2018 CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/01/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 284
    , category: 'Terminados'
    , deudor  : {
      cedula   : 93119101
      , nombre   : 'ARMANDO BARRIOS VARGAS'
      , telefono : 3380250
      , email    : 'abarriosleg@yahoo.es'
      , direccion: 'VEREDA EL TIME  ( COTA )',
    }

    , demanda: {
      obligacion: {
        A: 300093754,
      }
      , capitalAdeudado        : '15.488.696.00'
      , entregaGarantiasAbogado: '27/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'COTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00704'
      , llaveProceso           : '25214400300120170070400'

      , fechaPresentacion: '10/10/2017',
    },
  }
  , {
    numero  : 285
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52318314
      , nombre   : 'ADRIANA MARIA PEREZ GOMEZ'
      , telefono : '8065373                  CEL 3134576869'
      , email    : 'adrianitaa@gmail.com'
      , direccion: 'CALLE 19 A 82 65 TR 4 APARTAMENTO 301',
    }

    , demanda: {
      vencimientoPagare: '10/06/2017'
      , obligacion       : {
        A: 6900083898
        , B: '4513086465970276 // AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 21.223.176'
      , entregaGarantiasAbogado: '12/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01326'
      , llaveProceso           : '11001400300520170132600'
      , etapaProcesal          : '11001400300520170132600'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '18/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '6/06/2018',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '8/11/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/05/2018'
        , medidaSolicitada  : '8/11/2017',
      },
    },
  }
  , {
    numero  : 286
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 80259791
      , nombre   : 'ALIRIO HEREDIA BUITRAGO'
      , telefono : 'F 2796621'
      , email    : 'gerencia.seguridadgf@gmail.com'
      , direccion: 'DIAGONAL 48 J No 5C- 34 SUR',
    }

    , demanda: {
      vencimientoPagare: '6/09/2020'
      , obligacion       : {
        A: 12711612,
      }
      , capitalAdeudado        : '$ 94.533.343'
      , entregaGarantiasAbogado: '11/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01195'
      , llaveProceso           : '11001400301720170119500'
      , etapaProcesal          : 'CURADOR AD LITEM'
      , fechaPresentacion      : '19/09/2017'
      , mandamientoPago        : '12/10/2017'
      , notificacion           : {
        '292': {
          resultado: 'NEGATIVO',
        }
        , certimail: 'SI'
        , fisico   : 'NO'
        , tipo     : 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/10/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 287
    , category: 'Insolvencia'
    , deudor  : {
      cedula   : 79861754
      , nombre   : 'CARLOS GERMAN RUGE CASTAÑEDA'
      , telefono : 'F 6087374              CEL 3104865508'
      , email    : 'carlosgrugec@hotmail.com'
      , direccion: 'CALLE 72 A No  74 A - 77',
    }

    , demanda: {
      vencimientoPagare: '29/09/2020'
      , obligacion       : {
        A: 12592504,
      }
      , capitalAdeudado        : '$ 44.309.785'
      , entregaGarantiasAbogado: '4/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00157'
      , llaveProceso           : '11001400301620170015700'
      , etapaProcesal          : '11001400371620170015700'
      , fechaPresentacion      : 'PROCESO DE INSOLVENCIA'
      , mandamientoPago        : '6/10/2017'
      , notificacion           : {
        certimail: '27/11/2018',
      }
      , medidasCautelares: {
        medidaSolicitada: '27/11/2018',
      },
    },
  }
  , {
    numero  : 288
    , category: 'Terminados'
    , deudor  : {
      cedula   : 20371142
      , nombre   : 'VIVIANA MARCELA ROA VIVAS'
      , telefono : 8454465
      , email    : 'isafrevi@hotmail.com'
      , direccion: 'DIAGONAL  15 B No 104 - 46',
    }

    , demanda: {
      vencimientoPagare: '15/04/2017'
      , obligacion       : {
        A: 138027,
      }
      , capitalAdeudado        : '60.495.232.79'
      , entregaGarantiasAbogado: '3/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01133'
      , llaveProceso           : '11001400308320170113300'

      , fechaPresentacion: '6/10/2017',
    },
  }
  , {
    numero  : 289
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 12229243
      , nombre   : 'JOSE AHINSONJOBER TORO VARGAS'
      , telefono : 'F 4651401'
      , email    : 'serdiajo@gmail.com'
      , direccion: 'AVENIDA 1 DE MAYO No 29-06',
    }

    , demanda: {
      vencimientoPagare: '22/03/2020'
      , obligacion       : {
        A: 5306940432740470,
      }
      , capitalAdeudado        : '$ 14.645.611'
      , entregaGarantiasAbogado: '11/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01522'
      , llaveProceso           : '11001400301820170152200'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '14/09/2017'
      , mandamientoPago        : '26/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '25/06/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '25/06/2018',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '25/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/09/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 290
    , category: 'Terminados'
    , deudor  : {
      cedula   : 40035102
      , nombre   : 'ELIZABETH GIL RODRIGUEZ'
      , telefono : '6051177 / 3152504510'
      , email    : 'luz.y31@hotmail.com'
      , direccion: 'DIAGONAL 15 B - 104 - 45 CASA  55',
    }

    , demanda: {
      vencimientoPagare: '13/12/2020'
      , obligacion       : {
        A: 83616,
      }
      , capitalAdeudado        : '13.869.971.40'
      , entregaGarantiasAbogado: '27/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00975'
      , llaveProceso           : '11001400305920170097500'
      , etapaProcesal          : 'SUSPENDIDO'
      , fechaPresentacion      : '6/10/2017'
      , mandamientoPago        : '17/10/2017'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: 43195,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '17/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 291
    , category: 'Terminados'
    , deudor  : {
      cedula   : 35427969
      , nombre   : 'YEIMMY CAROLINA FINO BALLEN'
      , telefono : 8520724
      , email    : 'carof111@hotmail.com'
      , direccion: 'CARRERA 91 No 157 B - 82  TORRE 2 APARTAMENTO 40',
    }

    , demanda: {
      vencimientoPagare: '4/08/2017'
      , obligacion       : {
        A: '200828  / 4513070087585399'
        , B: 55303710092258330,
      }
      , capitalAdeudado        : '55.186.030.51'
      , entregaGarantiasAbogado: '29/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01330'
      , llaveProceso           : '11001400303920170133000'
      , etapaProcesal          : 'LIQUIDACION'
      , fechaPresentacion      : '06/102017'
      , mandamientoPago        : '20/10/2017'
      , notificacion           : {
        '292': {
          resultado: '09/04/2018 CERTIMAIL',
        }

        , autoNotificado: 43222,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '20/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 292
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 80205694
      , nombre   : 'JOHN FREDY HERREÑO RAMIREZ'
      , telefono : 'F 7641957                CEL 3124102'
      , email    : 'kellyo.1508@hotmail.com'
      , direccion: 'DIAGONAL 82 A SUR No 7C 19  ESTE',
    }
    , codeudor: {
      cedula   : 52831430
      , nombre   : 'KELLI YOJANA ORTIZ SALAMANCA'
      , telefono : 3105719302
      , direccion: 'DIAGONAL 82B SUR No 7C - 19',
    }
    , demanda: {
      vencimientoPagare: '31/08/2020'
      , obligacion       : {
        A: 300094317,
      }
      , capitalAdeudado        : '$ 25.766.204'
      , entregaGarantiasAbogado: '13/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00128'
      , llaveProceso           : '11001410375220170012800'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '21/09/2017'
      , mandamientoPago        : '17/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '27/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '6/07/2018',
        }
        , '292': {
          fechaAporta: '06/07/018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '6/03/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '17/10/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 293
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1032383389
      , nombre   : 'ANDERSON REVELO SANTOS'
      , telefono : 'F 4725511              CEL 3118526428'
      , email    : 'ars.09@hotmail.com'
      , direccion: 'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104',
    }

    , demanda: {
      vencimientoPagare: '5/03/2020'
      , obligacion       : {
        A: '320088443  / 377813441863587'
        , B: 4513070212799642,
      }
      , capitalAdeudado        : '$ 12.249.598'
      , entregaGarantiasAbogado: '19/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00974'
      , llaveProceso           : '11001400304820170097400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '6/10/2017'
      , mandamientoPago        : '3/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '30/01/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '30/01/2018',
        }
        , '292': {
          fechaAporta: '30/01/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '23/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '3/11/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 294
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79292743
      , nombre   : 'HERNANDO PULECIO PAREDES'
      , telefono : 'F 4619449'
      , email    : 'hpulecio@cable.net.co'
      , direccion: 'CALLE 86 A No 69 T -41  TORRE 1 APARTAMENTO 902',
    }

    , demanda: {
      vencimientoPagare: '13/09/2020'
      , obligacion       : {
        A: 12676248,
      }
      , capitalAdeudado        : '$ 48.498.610'
      , entregaGarantiasAbogado: '18/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00924'
      , llaveProceso           : '11001400306320170092400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '21/09/2017'
      , mandamientoPago        : '25/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '21/06/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : 43293,
        }
        , '292': {
          fechaRecibido: '12/07/2018'
          , fechaAporta  : '12/07/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'PERSONAL'
        , autoNotificado: 43293,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/09/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHÍCULO',
      },
    },
  }
  , {
    numero  : 295
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 36536419
      , nombre  : 'RITA CECILIA FERNANDEZ IBAÑEZ'
      , telefono: 'F 2131020'

      , direccion: 'CALLE 124 No  20-76 APARTAMENTO 503',
    }

    , demanda: {
      vencimientoPagare: '12/09/2020'
      , obligacion       : {
        A: 12389160,
      }
      , capitalAdeudado        : '$ 25.845.669'
      , entregaGarantiasAbogado: '18/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01113'
      , llaveProceso           : '11001400305120170111300'
      , etapaProcesal          : 'PENDIENTE SENTENCIA Y OFICIOS'
      , fechaPresentacion      : '21/09/2017'
      , mandamientoPago        : '2/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '26/03/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '1/03/2018',
        }
        , '292': {
          fechaRecibido: '3/04/2018'
          , fechaAporta  : '18/04/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '14/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '2/10/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHÍCULO',
      },
    },
  }
  , {
    numero  : 296
    , category: 'Terminados'
    , deudor  : {
      cedula   : 86074992
      , nombre   : 'DIDIER HARVEY PRADA AGUIRRE'
      , telefono : 'F 7356359'
      , email    : 'diharveypra@yahoo.es'
      , direccion: 'DIAGONAL 40 G SUR-  No 72 J - 35 INTERIOR 2A',
    }

    , demanda: {
      vencimientoPagare: '4/10/2020'
      , obligacion       : {
        A: 12445450,
      }
      , capitalAdeudado        : '$ 20.063.065'
      , entregaGarantiasAbogado: '6/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'KENNEDY'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01291'
      , llaveProceso           : '11001410375220170129100'
      , etapaProcesal          : '11001410375220170129100'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '17/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '1/03/2018',
        }
        , '292': {
          fechaRecibido: '8/03/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '12/01/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '3/05/2018'
        , medidaSolicitada  : '12/01/2018',
      },
    },
  }
  , {
    numero  : 297
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 6006685
      , nombre  : 'MIGUEL ANGEL MARTINEZ HUERTAS'
      , telefono: 'CEL 3123077900'

      , direccion: 'CALLE 5 A No 6 - 23 UMBITA',
    }

    , demanda: {
      vencimientoPagare: '10/07/2019'
      , obligacion       : {
        A: 5450082766
        , B: 5450083252,
      }
      , capitalAdeudado        : '$ 28.485.816'
      , entregaGarantiasAbogado: '21/09/2017'
      , departamento           : 'BOYACÁ'
      , municipio              : 'UMBITA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00095'
      , llaveProceso           : '15842408900120170009500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '12/10/2017'
      , mandamientoPago        : '23/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '19/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '23/02/2018',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'PERSONAL'
        , autoNotificado: '23/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/10/2017'
        , medidaSolicitada  : 'EMBARGO DE CULTIVOS',
      },
    },
  }
  , {
    numero  : 298
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79659040
      , nombre   : 'HECTOR GABRIEL RAMIREZ BOHORQUEZ'
      , telefono : '2053366/  3164700074'
      , email    : 'gabrielisag61@hotmail.com'
      , direccion: 'CALLE 58 A SUR No 18 B -35 INT 6',
    }

    , demanda: {
      vencimientoPagare: '4/04/2017'
      , obligacion       : {
        A: 155487,
      }
      , capitalAdeudado        : '96.442.977.80'
      , entregaGarantiasAbogado: '13/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00986'
      , llaveProceso           : '11001400307820170098600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '17/10/2017'
      , mandamientoPago        : '20/10/2017'
      , notificacion           : {
        '292': {
          resultado: 43277,
        }

        , tipo: 'CERTMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '20/10/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 299
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80879280
      , nombre   : 'ROBERTO STIVENSON ACERO BARON'
      , telefono : 7307304
      , email    : 'roberto.g12@hotmail.com'
      , direccion: 'CARRERA 9 ESTE No 36-59 SUR  SOACHA',
    }
    , codeudor: {
      cedula   : 53005799
      , nombre   : 'LAURA DEL PILAR ARANDA AROCA'
      , telefono : 3208790281
      , direccion: 'CALLE 75 C BIS No 2-09 SUR  BOGOTA',
    }
    , demanda: {
      vencimientoPagare: '15/07/2017'
      , obligacion       : {
        A: 6980085637
        , B: 120353,
      }
      , capitalAdeudado        : '28.432.149.77'
      , entregaGarantiasAbogado: '13/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00346'
      , llaveProceso           : '25754400300320170034600'

      , fechaPresentacion: 'NOTIFICACION'
      , mandamientoPago  : '17/10/2017'
      , notificacion     : {
        certimail: '8/02/2018'

        , autoNotificado: 'CERTIMAIL LAURA',
      },
    },
  }
  , {
    numero  : 300
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79617611
      , nombre   : 'FABIO EDILBERTO JARA SANCHEZ'
      , telefono : '2623688 /3174280231'
      , email    : 'fabiojara@gmail.com'
      , direccion: 'CARRERA 3 E No 11-60 INTERIOR 9 CASA 2  FUNZA',
    }

    , demanda: {
      vencimientoPagare: '26/05/2017'
      , obligacion       : {
        A: 12245382,
      }
      , capitalAdeudado        : '19.678.334.90'
      , entregaGarantiasAbogado: '12/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUNZA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00816'
      , llaveProceso           : '25286400300120170081600'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '18/10/2017',
    },
  }
  , {
    numero  : 301
    , category: 'Terminados'
    , deudor  : {
      cedula  : 35220385
      , nombre  : 'BLANCA YOLANDA ACOSTA RODRIGUEZ'
      , telefono: 'yolanda23wp@hotmail.com'
      , email   : 'CALLE 1 A - No 6-68 PORTAL  GUASCA',
    }
    , codeudor: {
      direccion: 44166,
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        A: 169241
        , B: '24.721.567.58',
      }
      , capitalAdeudado        : '$ 43.021'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GUASCA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00022'
      , llaveProceso           : '25322418900120180002200'
      , etapaProcesal          : 43026,
    },
  }
  , {
    numero  : 302
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79906707
      , nombre   : 'EDGAR GODOY LOPEZ'
      , telefono : '8272125 /3005821212'
      , email    : 's3curityinformation@gmail.com'
      , direccion: 'CARRER 5  No 2-35  MANZANA 21 CASA 208- MOSQUERA',
    }
    , codeudor: {
      cedula   : 39678085
      , nombre   : 'RUBY AMINTA BARRERO CUECA'
      , telefono : 2705042
      , direccion: 'CARRERA 68 A  No 31  A- 06 SUR',
    }
    , demanda: {
      vencimientoPagare: '24/12/2032'
      , obligacion       : {
        A: 159541,
      }
      , capitalAdeudado        : '153.236.346.48'
      , entregaGarantiasAbogado: '12/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUNZA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01003'
      , llaveProceso           : '25286310300120170100300'

      , fechaPresentacion: '19/10/2017',
    },
  }
  , {
    numero  : 303
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1118532643
      , nombre   : 'RAFAEL ALFONSO CAMACHO VELANDIA'
      , telefono : 'F 7170610           CEL 3202777672'
      , email    : 'willintong950@gmail.com  rafaelalfonsocamachovelandia@gmail.com'
      , direccion: 'CARRERA 16 No 66 A 16',
    }
    , codeudor: {
      cedula   : 74377064
      , nombre   : 'CARLOS ANDRES RODRIGUEZ HERRERA'
      , telefono : 'F 2776196'
      , direccion: 'MANZANA A CASA 6 LA SALINA',
    }
    , demanda: {
      vencimientoPagare: '14/07/2020'
      , obligacion       : {
        A: '2620088246 / 3777813457586759'
        , B: 4594250105313477,
      }
      , capitalAdeudado        : '$ 12.534.383'
      , entregaGarantiasAbogado: '16/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01579'
      , llaveProceso           : '11001400303020170157900'
      , etapaProcesal          : '11001400303020170157900'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '12/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '28/05/2018'
          , fechaAporta  : '28/05/2018',
        }
        , '292': {
          fechaRecibido: '28/05/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '23/10/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '01/06/208'
        , medidaSolicitada  : '23/10/2017',
      },
    },
  }
  , {
    numero  : 304
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79892240
      , nombre   : 'FERNANDO GONZALEZ TELLEZ'
      , telefono : '7621723/3212414138'
      , email    : 'ferchog01@yahoo.es'
      , direccion: 'CALLE 76 A SUR No 1 B - 40 ESTE',
    }

    , demanda: {
      vencimientoPagare: '26/11/2025'
      , obligacion       : {
        A: 134175,
      }
      , capitalAdeudado        : '61.821.425.75'
      , entregaGarantiasAbogado: '18/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , radicado               : '2017 - 01411'
      , llaveProceso           : '11001400307320170141100'
      , etapaProcesal          : 'SIN LEVANTAMIENTO DE MEDIDSA CAUTELAR  PAQUETE 269'
      , fechaPresentacion      : '08/11/17',
    },
  }
  , {
    numero  : 305
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19479861
      , nombre   : 'FERNANDO RINCON RODRIGUEZ'
      , telefono : 'F8035212'
      , email    : 'serinconr@hotmail.com'
      , direccion: 'DIAGONAL 5 D BIS No 44 A -45',
    }

    , demanda: {
      vencimientoPagare: '11/10/2020'
      , obligacion       : {
        A: 12048231,
      }
      , capitalAdeudado        : '$ 11.961.381'
      , entregaGarantiasAbogado: '17/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01256'
      , llaveProceso           : '11001400308220170125600'
      , etapaProcesal          : '11001400308220170125600',
    },
  }
  , {
    numero  : 306
    , category: 'Terminados'
    , deudor  : {
      cedula   : 7217446
      , nombre   : 'JORGE ARTURO JIMENEZ LEAL'
      , telefono : 'F 2953878           CEL 3102050752'
      , email    : 'N MI'
      , direccion: 'CALLE 127 B No 19-60 APTO 402',
    }

    , demanda: {
      vencimientoPagare: '10/810/2020'
      , obligacion       : {
        A: 11788203,
      }
      , capitalAdeudado        : '$ 18.368.757'
      , entregaGarantiasAbogado: '20/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01490'
      , llaveProceso           : '11001400306420170149000'
      , etapaProcesal          : '11001400306420170149000'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '24/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '2/02/2018',
        }
        , '292': {
          fechaRecibido: '6/02/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '9/11/2017'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/04/2018'
        , medidaSolicitada  : '9/11/2017',
      },
    },
  }
  , {
    numero  : 307
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79309509
      , nombre   : 'CARLOS ARTURO CASTAÑO ALDANA'
      , telefono : 4675567
      , email    : 'cac.marketing@hotmail.com'
      , direccion: 'TRANSVERSAL 70 G No 63-52 SUR APTO 27 TORRE 2',
    }

    , demanda: {
      vencimientoPagare: '27/01/2031'
      , obligacion       : {
        A: 190522
        , B: 4594250022871300,
      }
      , capitalAdeudado        : '70.693.047.83'
      , entregaGarantiasAbogado: '20/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01125'
      , llaveProceso           : '11001400303620170112500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '24/10/2017'
      , mandamientoPago        : '2/11/2017'
      , notificacion           : {
        tipo: 'AVISO 292 CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '2/11/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 308
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80271269
      , nombre   : 'OSCAR ERNESTO SERRANO VELASCO'
      , telefono : 7197503
      , email    : 'osfacer@hotmail.com'
      , direccion: 'CARRERA 76 No 57 Z-46 SUR INTERIOR 3 APARTAMENTO 6',
    }

    , demanda: {
      vencimientoPagare: '27/05/2017'
      , obligacion       : {
        A: 143579,
      }
      , capitalAdeudado        : '83.592.166.60'
      , entregaGarantiasAbogado: '23/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01176'
      , llaveProceso           : '11001400302220170117600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '24/10/2017'
      , mandamientoPago        : '27/11/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '27/11/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 309
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19332163
      , nombre   : 'HENRY NOEL CASTELBLANCO SOSA'
      , telefono : 4424940
      , email    : 'hencast@hotmail.com'
      , direccion: 'CARRERA 69 C No 98A -50',
    }

    , demanda: {
      vencimientoPagare: '22/04/2017'
      , obligacion       : {
        A: 4513080019699192
        , B: '0377815686597168',
      }
      , capitalAdeudado        : '20.515.858.82'
      , entregaGarantiasAbogado: '24/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01613'
      , llaveProceso           : '11001400306720170161300'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '31/10/2017'
      , mandamientoPago        : '12/03/2018'
      , notificacion           : {
        tipo          : 'CERTIMAIL'
        , autoNotificado: 43256,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/03/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 310
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 79388145
      , nombre   : 'LIBARDO ALFONSO GONZALEZ TRIVIÑO'
      , telefono : 'F 2928108'
      , email    : 'li_bcar@hotmail.com'
      , direccion: 'CARRERA 72 A- No 9 - 44',
    }

    , demanda: {
      vencimientoPagare: '23/03/2020'
      , obligacion       : {
        A: '1740086734 4513073749673967'
        , B: 5303719549810730,
      }
      , capitalAdeudado        : '$ 40.406.421'
      , entregaGarantiasAbogado: '04/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01532'
      , llaveProceso           : '11001400302120170153200'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '10/10/2017'
      , mandamientoPago        : '30/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '25/04/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '06/07/2018',
        }
        , '292': {
          fechaRecibido: '27/05/2019'
          , fechaAporta  : '27/05/2019'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '17/06/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/11/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 311
    , category: 'Terminados'
    , deudor  : {
      cedula   : 32730630
      , nombre   : 'PAULA ANDREA PINZON OTALVARO'
      , telefono : 5745876
      , email    : 'pa_pinzon@hotmail.com'
      , direccion: 'CARRERA 65 No 22 A- 43 APARTAMENTO 1002- 5',
    }

    , demanda: {
      vencimientoPagare: '20/07/2017'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: '00377815346213420',
      }
      , capitalAdeudado        : '10.761.991.62'
      , entregaGarantiasAbogado: '24/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00184'
      , llaveProceso           : '11001400370820170018400'
      , etapaProcesal          : 'LIQUIDACION'
      , fechaPresentacion      : '31/10/2017'
      , mandamientoPago        : '2/11/2017'
      , notificacion           : {
        '292': {
          resultado: '15/06/2018',
        }

        , tipo          : 'CERTIMAIL'
        , autoNotificado: '-',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '2/11/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 312
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80394456
      , nombre   : 'PEDRO PABLO SARMIENTO MAYORGA'
      , telefono : 8138756
      , email    : 'pedrosebastin394@hotmail.com'
      , direccion: 'CARRERA 87 D No 42 A 20 SUR INTERIOR 6',
    }
    , codeudor: {
      cedula   : 28949691
      , nombre   : 'YOLANDA RATIVA MESA'
      , telefono : 3202780646
      , direccion: 'CARRERA 87 D No 42 A-20 SUR IN 6 C',
    }
    , demanda: {
      vencimientoPagare: '8/06/2017'
      , obligacion       : {
        A: 82317,
      }
      , capitalAdeudado        : '10.668.327.59'
      , entregaGarantiasAbogado: '26/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01140'
      , llaveProceso           : '11001418904320170114000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '21/10/2017'
      , mandamientoPago        : '30/11/2017'

      , medidasCautelares: {
        fechaOrdenaMedidas: '30/11/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 313
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80490307
      , nombre   : 'MAURICIO PEREZ PLAZAS'
      , telefono : 'F 8042266'
      , email    : 'mauricioperez7314@hotmail.com'
      , direccion: 'DIAGONAL 68 SUR No 37-69 INT 136',
    }

    , demanda: {
      vencimientoPagare: '22/06/2017'
      , obligacion       : {
        A: 3000093979,
      }
      , capitalAdeudado        : '$ 12.521.212'
      , entregaGarantiasAbogado: '25/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01049'
      , llaveProceso           : '11001400307820170104900'
      , etapaProcesal          : '11001400307820170104900'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '31/10/2017'
      , notificacion           : {
        '292': {
          fechaRecibido: '8/06/2018',
        }
        , certimail: '3/11/2017'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '06/07/2018'
        , medidaSolicitada  : '3/11/2017',
      },
    },
  }
  , {
    numero  : 314
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1075655673
      , nombre   : 'TATIANA RAMON PEPICANO'
      , telefono : 8510171
      , email    : 'revisionvillavicencio@gmail.co'
      , direccion: 'CARRERA 2 B - No 2 J - 55  LOTE 6 MZ 25',
    }
    , codeudor: {
      cedula: 17644906
      , nombre: 'NORBEY RAMON CHAVARRO'

      , direccion: 'NO SE CONOCE',
    }
    , demanda: {
      vencimientoPagare: '6/03/2033'
      , obligacion       : {
        A: 161979,
      }
      , capitalAdeudado        : '21.139.648.63'
      , entregaGarantiasAbogado: '31/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CAJICA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00768'
      , llaveProceso           : '25126408900220170076800'
      , etapaProcesal          : 'TERMINADO'
      , fechaPresentacion      : '8/11/2017'

      , notificacion: {
        '291': {
          fechaAporta: '06/07/2018',
        }
        , '292': {
          fechaRecibido: 'SOLICITUD EPS'

          , resultado: 43123,
        }

        , tipo          : 'INMUEBLE'
        , autoNotificado: '0120',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/01/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 315
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80203869
      , nombre   : 'BLADIMIR GUTIERREZ CIFUENTES'
      , telefono : 9015412
      , email    : 'bladimir0612@hotmail.com'
      , direccion: 'CALLE 34 A SUR No 13 - 46  SOACHA',
    }

    , demanda: {
      vencimientoPagare: '5/12/2033'
      , obligacion       : {
        A: 170453,
      }
      , capitalAdeudado        : '47.230.309.94'
      , entregaGarantiasAbogado: '28/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00364'
      , llaveProceso           : '25754400300320170036400'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '1/11/2017'
      , mandamientoPago        : '13/02/2018'
      , notificacion           : {
        '292': {
          resultado: 43315,
        }

        , fisico        : 'X'
        , tipo          : 'FISICA'
        , autoNotificado: 43375,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '13/02/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 316
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 8799171
      , nombre   : 'MANUEL ENRIQUE ARTEAGA OROZCO'
      , telefono : 'F 5164071'
      , email    : 'saliradelante2012@hotmail.com'
      , direccion: 'CARRERA 18 B No 4 C -  20  SOACHA',
    }

    , demanda: {
      vencimientoPagare: '23/03/2020'
      , obligacion       : {
        A: '180049   53037120066499008'
        , B: '3778133433049336 /4513075801129044',
      }
      , capitalAdeudado        : '$ 44.944.657'
      , entregaGarantiasAbogado: '26/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00323'
      , llaveProceso           : '25754400300120170032300'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '1/11/2017'
      , mandamientoPago        : '24/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '15/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '15/02/2018',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '22/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '24/11/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 317
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80251653
      , nombre   : 'WILSON JAVIER SANCHEZ'
      , telefono : 5971320
      , email    : 'wilsoningind@yahoo.es'
      , direccion: 'CALLE 62 G  No 75 g - 18 sur',
    }
    , codeudor: {
      cedula   : 53089914
      , nombre   : 'YINET ESNEDA GAVIRIA GAVIRIA'
      , telefono : 5971320
      , direccion: 'CALLE  62G No 75 G-18 SUR',
    }
    , demanda: {
      vencimientoPagare: '21/10/2024'
      , obligacion       : {
        A: 123326,
      }
      , capitalAdeudado        : '15.008.514.94'
      , entregaGarantiasAbogado: '31/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01813'
      , llaveProceso           : '11001400301820170181300'
      , etapaProcesal          : 'LIQUIDACION'
      , fechaPresentacion      : '7/11/2017'
      , mandamientoPago        : '1/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '16/07/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : 'POSITIVO',
        }
        , '292': {
          resultado: '14/09/2018 WILSON',
        }

        , fisico        : 'ENVIADO 292 24/08/2018'
        , tipo          : 'FISICA'
        , autoNotificado: 43370,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '1/02/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 318
    , category: 'Terminados'
    , deudor  : {
      cedula  : 51673703
      , nombre  : 'SONIA JANETH RODRIGUEZ'
      , telefono: 'sonianicolas@hotmail.com'
      , email   : 'CALLE 52 SUR No 97 C - 20',
    }
    , codeudor: {
      direccion: 45531,
    }
    , demanda: {
      vencimientoPagare: 121594
      , obligacion       : {
        B: '14.703.952.55',
      }
      , capitalAdeudado: '$ 43.033'

      , departamento : 'CUNDINAMARCA'
      , municipio    : 'BOGOTA'
      , tipoProceso  : 'HIPOTECARIO'
      , radicado     : '2017 - 01164'
      , llaveProceso : '11001400307020170116400'
      , etapaProcesal: 43041

      , notificacion: {
        '292': {
          resultado: 'PERSONAL',
        }

        , tipo          : '17/07/2018'
        , autoNotificado: 43193,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUBELE'
        , medidaSolicitada  : '02316',
      },
    },
  }
  , {
    numero  : 319
    , category: 'Terminados'
    , deudor  : {
      cedula: 33307437
      , nombre: 'GLORIA ANGELICA PRASCA MEJIA'

      , direccion: 'CARRERA 2 No 1 - 23  cajica',
    }

    , demanda: {
      vencimientoPagare: '5/12/2017'
      , obligacion       : {
        A: '335008770 /3350086329'
        , B: '53003710116636165/0377813180199052',
      }
      , capitalAdeudado        : '24.165.959.99'
      , entregaGarantiasAbogado: '25/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CAJICA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00756'
      , llaveProceso           : '25126400300120170075600'
      , etapaProcesal          : 'LIQUIDACION'
      , fechaPresentacion      : '8/11/2017'
      , mandamientoPago        : '30/04/2018'
      , notificacion           : {
        tipo          : 'CERTIMAIL'
        , autoNotificado: 43298,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/04/2018',
      },
    },
  }
  , {
    numero  : 320
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1032492078
      , nombre   : 'MARIA CAMILA MACIAS PADILLA'
      , telefono : 'F 7681014'
      , email    : 'crisandres12@hotmail.com'
      , direccion: 'CARRERA 1F ESTE No 90-63 SUR',
    }
    , codeudor: {
      cedula   : 1031162923
      , nombre   : 'CRISTHIAN ANDRES GOMEZ CAPEDA'
      , telefono : 7681014
      , direccion: 'CARRERA  1 F ESTE No 90-63 SUR',
    }
    , demanda: {
      vencimientoPagare: '26/10/2020'
      , obligacion       : {
        A: 12727553,
      }
      , capitalAdeudado        : '$ 27.247.328'
      , entregaGarantiasAbogado: '31/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01312'
      , llaveProceso           : '11001400305620170131200'
      , etapaProcesal          : '11001400305620170130200'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '8/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '11/05/2018'
          , fechaAporta  : '11/05/2018',
        }
        , '292': {
          fechaRecibido: '11/05/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '23/01/2018'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL DOS DEUDORES',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/05/2018'
        , medidaSolicitada  : '23/01/2018',
      },
    },
  }
  , {
    numero  : 321
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52391771
      , nombre  : 'ADELA BARAJAS MORENO'
      , telefono: 2928808

      , direccion: 'TRANSVERSAL 78 B No 6 B - 20 APARTAMENTO 101',
    }

    , demanda: {
      vencimientoPagare: '21/09/2018'
      , obligacion       : {
        A: 2150091479,
      }
      , capitalAdeudado        : '13.867.980.00'
      , entregaGarantiasAbogado: '2/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01367'
      , llaveProceso           : '11001400301620170136700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '7/11/2017  13/12/17 2DA VEZ'
      , mandamientoPago        : '19/12/2017          22/032017 REFORMA'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: 43194,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/12/2017          22/032017 REFORMA'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 322
    , category: 'Terminados'
    , deudor  : {
      cedula   : 63395806
      , nombre   : 'CLAUDIA YAMILE SUAREZ POBLADOR'
      , telefono : '5205695 / 3112326151'
      , email    : 'claudiasuarezp@gmail.com'
      , direccion: 'CALLE 127 C - No  2 B - 18  APARTAMENTO 101',
    }

    , demanda: {
      vencimientoPagare: '11/09/2027'
      , obligacion       : {
        A: 155766,
      }
      , capitalAdeudado        : '87.015.973.35'
      , entregaGarantiasAbogado: '25/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01205'
      , llaveProceso           : '11001400308620170120500'

      , fechaPresentacion: '7/11/2017',
    },
  }
  , {
    numero  : 323
    , category: 'Terminados'
    , deudor  : {
      cedula   : 11319802
      , nombre   : 'LUIS FERNANDO MEDINA POTES'
      , telefono : 317636780
      , email    : 'fermedina11@gmail.com'
      , direccion: 'CALLE 40 SUR  No  72 G -01  APARTAMENTO 101',
    }
    , codeudor: {
      cedula   : 52121666
      , nombre   : 'CLAUDIA JANNETH ORTIZ ALFONSO'
      , telefono : 3176363780
      , direccion: 'CALLE  51 No 31 - 96 SUR',
    }
    , demanda: {
      vencimientoPagare: '20/10/2021'
      , obligacion       : {
        A: 90669,
      }
      , capitalAdeudado        : '19.362.960.22'
      , entregaGarantiasAbogado: '21/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01509'
      , llaveProceso           : '11001400303720170150900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '2/11/2017'
      , mandamientoPago        : '22/01/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '22/01/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 324
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80032088
      , nombre   : 'JOSE EDWIN MORALES ALFONSO'
      , telefono : 9016510
      , email    : 'majupi170301@hotmail.com'
      , direccion: 'TRANSVERSAL 28 No 22-13 APARTAMENTO 304 TORRE 7 SOACHA',
    }

    , demanda: {
      vencimientoPagare: '21/11/2020'
      , obligacion       : {
        A: 164578
        , B: 1380081489,
      }
      , capitalAdeudado        : '35.732.574.50'
      , entregaGarantiasAbogado: '17/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00849'
      , llaveProceso           : '11001400300120170084900'
      , etapaProcesal          : 'LIQUIDACION'
      , fechaPresentacion      : '1/11/2017'
      , mandamientoPago        : '26/01/2018'
      , notificacion           : {
        '292': {
          resultado: '20/06/2018',
        }

        , tipo: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/01/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 325
    , category: 'Terminados'
    , deudor  : {
      cedula: 30583011
      , nombre: 'MARCELA PATRICIA DIAZ PEREIRA',
    }

    , demanda: {
      departamento: 'CUNDINAMARCA'
      , municipio   : 'BOGOTA'
      , tipoProceso : 'SINGULAR'
      , radicado    : '2017 - 00760'
      , llaveProceso: '11001400308020170076000'

      , fechaPresentacion: '2/11/2017',
    },
  }
  , {
    numero  : 326
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19352146
      , nombre   : 'JORGE ELIECER GOMEZ LOPEZ'
      , telefono : '7102329 / 3138267838'
      , email    : 'elpotegomez@hotmail.com'
      , direccion: 'DIAGONAL 58 No 28 - 72    APARTAMENTO 603 INTERIOR 6',
    }

    , demanda: {
      vencimientoPagare: '26/11/2022'
      , obligacion       : {
        A: 103162,
      }
      , capitalAdeudado        : '19.550.288.60'
      , entregaGarantiasAbogado: '27/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01471'
      , llaveProceso           : '11001400303420170147100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '2/11/2017'
      , mandamientoPago        : '4/12/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 2515
          , resultado    : '12/12/2017',
        }

        , certimail: '4/12/2017'
        , fisico   : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 327
    , category: 'Terminados'
    , deudor  : {
      cedula: 94524378
      , nombre: 'JOSE DANIEL ESCOBAR PATIÑO'

      , email    : '6332400 / 3155459543'
      , direccion: 'jose.daniel.escobar@hotmail.co',
    }
    , codeudor: {
      cedula: 'CARRERA 19 A  No 136- 73 APARTAMENTO 402 NIVEL 5 o´4',
    }
    , demanda: {
      obligacion: {
        A: 43945
        , B: 80517,
      }

      , entregaGarantiasAbogado: '23.116.785.92'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01369'
      , llaveProceso           : '11001400301220170136900'

      , fechaPresentacion: '14/11/2017'
      , mandamientoPago  : '14/11/2017'
      , notificacion     : {
        certimail: '20/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '-'
        , medidaSolicitada  : '20/02/2018',
      },
    },
  }
  , {
    numero  : 328
    , category: 'LiosJuridicos'
    , deudor  : {
      cedula   : 52907317
      , nombre   : 'SANDRA MILENA BARRETO BERMUDEZ'
      , telefono : 5787068
      , email    : 'milena125@hotmail.com'
      , direccion: 'CALLE 74 A  SUR No 92 -21 torre 3',
    }

    , demanda: {
      vencimientoPagare: '6/05/2017'
      , obligacion       : {
        A: '5740084189 /5740084216'
        , B: '160204/377813372389032',
      }
      , capitalAdeudado        : '33.615.204.45'
      , entregaGarantiasAbogado: '001/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01293'
      , llaveProceso           : '11001400302620170129300'
      , etapaProcesal          : 'SIN LEVANTAMIENTO DE MEDIDA CAUTELAR PQQUETE 767 DE 2018'
      , fechaPresentacion      : '18/12/2017'
      , mandamientoPago:
        '30 AGOSTO SE ENVIO SOLICITUD DESARCHIVE A ARCHIVO CENTRAL',
    },
  }
  , {
    numero  : 329
    , category: 'Terminados'
    , deudor  : {
      cedula  : 10180062
      , nombre  : 'REINALDO ADRIAN MELENDEZ  VARON'
      , telefono: 'F 2287430           CEL 3107584138'
      , email   : 'reinaldomelen@hotmail.com'
      , direccion:
        'AVENIDA CALLE 153 No 119 -40 INTERIOR 1 CASA 17 BOSQUES DE CAMINO VERDE AGRUPACION 2',
    }
    , codeudor: {
      cedula  : 52079975
      , nombre  : 'YENY PATRICIA PODADA ROMERO'
      , telefono: 'F 2287430'
      , direccion:
        'AVENIDA CALLE 153 No 119 -40 INTERIOR 1 CASA 17 BOSQUES DE CAMINO VERDE AGRUPACION 2',
    }
    , demanda: {
      vencimientoPagare: '11/02/2020'
      , obligacion       : {
        A: 79669,
      }
      , capitalAdeudado        : '$ 13.537.828'
      , entregaGarantiasAbogado: '1/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01596'
      , llaveProceso           : '11001400308520170159600'
      , etapaProcesal          : '11001400308520170159600'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '9/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '23/03/2018 3/04/2018',
        }
        , '292': {
          fechaRecibido: '6/05/2018  5/07/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '19/12/2017'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/07/2018'
        , medidaSolicitada  : '19/12/2017',
      },
    },
  }
  , {
    numero  : 330
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80185084
      , nombre   : 'NELSON ARBEY CANGREJO SUAREZ'
      , telefono : '6822121 / 3176822122'
      , email    : 'arby3920@hotmail.com'
      , direccion: 'CARRERA 95 A  No 136 - 47 APARTAMENTO 401 BLOQUE 3',
    }
    , codeudor: {
      cedula   : 1022956167
      , nombre   : 'JACKELLIN GONZALEZ VARGAS'
      , telefono : 3144200
      , direccion: 'CARRRA 1 D ESTE No 64 - 29 SUR APTO 6',
    }
    , demanda: {
      vencimientoPagare: '9/10/2042'
      , obligacion       : {
        A: 156888,
      }
      , capitalAdeudado        : '36.103.545.25'
      , entregaGarantiasAbogado: '31/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01218'
      , llaveProceso           : '11001400307020170121800'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '14/11/2017',
    },
  }
  , {
    numero  : 331
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1016043191
      , nombre  : 'CHRISTIAN DARIO RUIZ AVELLANEDA'
      , telefono: 'krisdark225@hotmail.com'
      , email   : 'CALLE 23 SUR No 96 - 82',
    }
    , codeudor: {
      direccion: 43059,
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '10.670.890.00',
      }
      , capitalAdeudado: '$ 43.041'

      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'BOGOTA'
      , tipoProceso      : 'SINGULAR'
      , radicado         : '2017 - 01300'
      , llaveProceso     : '11001410375220170130000'
      , etapaProcesal    : 43053
      , fechaPresentacion: '16/01/2018'

      , notificacion: {
        '291': {
          resultado: '3/07/2018',
        }
        , '292': {
          fechaAporta: 43284
          , resultado  : 'CERTIMAIL',
        }

        , tipo          : 43329
        , autoNotificado: 43116,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'BANCOS'
        , medidaSolicitada  : '18-0118',
      },
    },
  }
  , {
    numero  : 332
    , category: 'Terminados'
    , deudor  : {
      cedula   : 91284725
      , nombre   : 'MIGUEL ANTONIO SANCHEZ MARROQUIN'
      , telefono : '9032416 /3168017488'
      , email    : 'nichemen@hotmail.com'
      , direccion: 'CARRERA 7 A  No  2 A - 35 TORRE 10 APARTAMENTO 303',
    }

    , demanda: {
      vencimientoPagare: '5/06/2017'
      , obligacion       : {
        A: '161947 /377813179503108'
        , B: 377813223799561,
      }
      , capitalAdeudado        : '38.034.170.49'
      , entregaGarantiasAbogado: '8/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018   00098'
      , llaveProceso           : '25754400100420180009800'

      , fechaPresentacion: '16/11/2017 // 15/03/2018',
    },
  }
  , {
    numero  : 333
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52085839
      , nombre   : 'AHIDA LUCERO GUEVARA BECERRA'
      , telefono : 3049740
      , email    : 'ahidaguevara@gmail.com'
      , direccion: 'CALLE 55 No 78 -74  APARTAMENTO 1110',
    }

    , demanda: {
      vencimientoPagare: '8/11/2017'
      , obligacion       : {
        A: 12710799,
      }
      , capitalAdeudado        : '18.898.421.00'
      , entregaGarantiasAbogado: '10/11/2017 2DA 18/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01317'
      , llaveProceso           : '11001400306320170131700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '15/01/2018'
      , mandamientoPago        : '15/01/2018'
      , notificacion           : {
        certimail: '15/01/2018',
      },
    },
  }
  , {
    numero  : 334
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79853302
      , nombre   : 'NESTOR JULIO MARTINEZ ORJUELA'
      , telefono : 'F 7459324                CEL 3132088678'
      , email    : 'nanbravo04@hotmail.com'
      , direccion: 'CALLE  70 A BIS  No 117-16',
    }

    , demanda: {
      vencimientoPagare: '15/01/2020'
      , obligacion       : {
        A: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 15.018.661'
      , entregaGarantiasAbogado: '26/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01306'
      , llaveProceso           : '11001400306820170130600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '10/10/2017'
      , mandamientoPago        : '20/10/1017'
      , notificacion           : {
        '291': {
          fechaRecibido: '15/06/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '26/06/2018',
        }
        , '292': {
          fechaRecibido: '26/06/2018'
          , fechaAporta  : '26/06/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '26/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '20/10/12017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 335
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1030601547
      , nombre   : 'CRISTIAN CAMILO GARCIA ESCOBAR'
      , telefono : 7786659
      , email    : 'cam.g.4@hotmail.com'
      , direccion: 'CARRERA 72  No 57 B -85 SUR INTERIOR 8 APARTAMENTO 2',
    }

    , demanda: {
      vencimientoPagare: '30/11/2020'
      , obligacion       : {
        A: 4020082793
        , B: 4513070099197613,
      }
      , capitalAdeudado        : '13.464.765.14'
      , entregaGarantiasAbogado: '10/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00118'
      , llaveProceso           : '11001400301120180011800'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '21/11/2017       6/02/2018'
      , mandamientoPago        : '26/02/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '26/02/2018',
      },
    },
  }
  , {
    numero  : 336
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79860814
      , nombre   : 'JOSE ALFREDO CARDOZO RODRIGUEZ'
      , telefono : 4592342
      , email    : 'catirimorales79@hotmail.com'
      , direccion: 'CALLE 63 No   26 - 10',
    }

    , demanda: {
      vencimientoPagare: '24/05/82021'
      , obligacion       : {
        A: 530092248,
      }
      , capitalAdeudado        : '18.295.501.00'
      , entregaGarantiasAbogado: '14/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01756'
      , llaveProceso           : '11001400303020170175600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '20/11/2017'
      , mandamientoPago        : '27/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '0041'
          , resultado    : '12/01/2018',
        }

        , certimail: '27/11/2017'
        , fisico   : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 337
    , category: 'Insolvencia'
    , deudor  : {
      cedula   : 79666742
      , nombre   : 'HECTOR ALFONSO TORRES RIOS'
      , telefono : 'F 7651426 CEL 3115030138'
      , email    : 'rubypaez71@hotmail.com'
      , direccion: 'TRANSVERSAL 17 No  64 F - 04 CASA 1 BIFAMILIAR MARLY',
    }

    , demanda: {
      vencimientoPagare: '22/06/2026'
      , obligacion       : {
        A: 140085,
      }
      , capitalAdeudado        : '$ 99.119.191'
      , entregaGarantiasAbogado: '16/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00964'
      , llaveProceso           : '11001400300620170096400'
      , etapaProcesal          : '11001400300620170096400'
      , fechaPresentacion      : 'PORCESO DE INSOLVENCUA'
      , mandamientoPago        : '20/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '6/02/2018'
          , fechaAporta  : '24/04/2018',
        }
        , '292': {
          fechaRecibido: '25/04/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '27/11/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/04/2018'
        , medidaSolicitada  : '27/11/2017',
      },
    },
  }
  , {
    numero  : 338
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 20427976
      , nombre  : 'BLANCA MELBA MOYANO BELTRAN'
      , telefono: 'F 3213718'

      , direccion: 'CARRERA 3 No 9 - 02 /08  CAPARRAPI (CUNDINAMARCA)',
    }

    , demanda: {
      vencimientoPagare: '1/04/2020'
      , obligacion       : {
        A: 7910080245,
      }
      , capitalAdeudado        : '$ 42.530.688'
      , entregaGarantiasAbogado: '21/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CAPARRAPI'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00096'
      , llaveProceso           : '25148408900120170009600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '19/10/2017'
      , mandamientoPago        : '9/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '19/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '6/03/2018',
        }
        , '292': {
          fechaRecibido: '27/02/2018'
          , fechaAporta  : '27/02/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'PERSONAL'
        , autoNotificado: '27/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '9/11/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 339
    , category: 'Terminados'
    , deudor  : {
      cedula   : 91072102
      , nombre   : 'LUIS ALFONSO MOJICA ZAMBRANO'
      , telefono : 3560348
      , email    : 'alfonso.mojica@sumatronicltda.com'
      , direccion: 'CARRERA 53 No 153 - 84  INTERIOR 5 APARTAMENTO  204',
    }

    , demanda: {
      vencimientoPagare: '20/04/2021'
      , obligacion       : {
        A: 53392043
        , B: '530092506 /530092671',
      }
      , capitalAdeudado        : '$ 36.069.195'
      , entregaGarantiasAbogado: '9/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01195'
      , llaveProceso           : '11001400305620170119500'

      , fechaPresentacion: 'SENTENCIA'
      , mandamientoPago  : '20/11/2017'
      , notificacion     : {
        '292': {
          fechaRecibido: '18/02/2018',
        }
        , certimail: '5/12/2017'

        , autoNotificado: 'AVISO 292 CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '8/02/2018'
        , medidaSolicitada  : '5/12/2017',
      },
    },
  }
  , {
    numero  : 340
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79573945
      , nombre   : 'WILLIAM CORTES ROJAS'
      , telefono : 'F 2054674'
      , email    : 'cubrimage@hotmail.com'
      , direccion: 'CARRERA 19  No 56 A  SUR - 72',
    }

    , demanda: {
      vencimientoPagare: '25/09/2018'
      , obligacion       : {
        A: 6690082032,
      }
      , capitalAdeudado        : '$ 14.986.915'
      , entregaGarantiasAbogado: '4/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01014'
      , llaveProceso           : '11001400306020170101400'
      , etapaProcesal          : '11001400306020170101400'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '10/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '18/06/2020'
          , fechaAporta  : '18/06/2020',
        }
        , '292': {
          fechaRecibido: '18/06/2020'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '23/11/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '21/06/2018'
        , medidaSolicitada  : '23/11/2017',
      },
    },
  }
  , {
    numero  : 341
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19294251
      , nombre   : 'MARIO VELEZ PARRA'
      , telefono : '6155668 / 3102124649'
      , email    : 'mariovelezparra@gmail.com'
      , direccion: 'CARRERA 14 No  127 - 10 OFICINA 707',
    }
    , codeudor: {
      cedula:
        '09-08-2018 SE RADICA DEMANDA //13 Aug 2018 RADICACIÓN DE PROCESO ***AL DESPACHO POR REPARTO ///21 Sep 2018 AUTO LIBRA MANDAMIENTO EJECUTIVO ***AUTO DECRETA MEDIDA CAUTELAR FIJACION ESTADO 24 Sep 2018 ///26 Sep 2018 OFICIO ELABORADO EMBARGO CUOTA PARTE INMUEBLE //11 Dec 2018 CONSTANCIA SECRETARIALMINIMA',
    }
    , demanda: {
      vencimientoPagare: '19/07/2017'
      , obligacion       : {
        A: '3777816328330786 / 459425002'
        , B: 5303721445053527,
      }
      , capitalAdeudado        : '12.731.580.01'
      , entregaGarantiasAbogado: '8/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01289'
      , llaveProceso           : '11001400305720170128900'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '15/11/2017'
      , mandamientoPago        : '7/12/2017'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: 43124,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '7/12/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 342
    , category: 'Terminados'
    , deudor  : {
      cedula  : 91240362
      , nombre  : 'GABRIEL AUGUSTO CASTILLO CASTELBLANCO'
      , telefono: 'gabocastillocastelblanco@gmail.com'
      , email   : 'CARRERA 87 No  17 - 59',
    }

    , demanda: {
      vencimientoPagare: 4594250054867309
      , obligacion       : {
        A: 5303720026675088
        , B: '27.570.000.00',
      }
      , capitalAdeudado: '$ 43.053'

      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'BOGOTA'
      , tipoProceso      : 'SINGULAR'
      , radicado         : '2017 - 01400'
      , llaveProceso     : '11001400301220170140000'
      , etapaProcesal    : 43059
      , fechaPresentacion: '13/12/2017'

      , notificacion: {
        autoNotificado: 43082,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '0332',
      },
    },
  }
  , {
    numero  : 343
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80803306
      , nombre   : 'EDUARDO ALFONSO RICO JIMENEZ'
      , telefono : '5470813 / 3188426582'
      , email    : 'magia.orfen@hotmail.com'
      , direccion: 'CALLE 22 L  No 123 A - 35',
    }

    , demanda: {
      vencimientoPagare: '7/07/2019'
      , obligacion       : {
        A: '23110089362 / 2044038'
        , B: '8291213 / 3131312135',
      }
      , capitalAdeudado        : '12.767.956.00'
      , entregaGarantiasAbogado: '1/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01517'
      , llaveProceso           : '11001400303920170151700'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '17/11/2017'
      , mandamientoPago        : '31/01/2018'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: 43225,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '31/01/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 344
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79505982
      , nombre   : 'LUIS AUGUSTO SANCHEZ ORTIZ'
      , telefono : 'F 8003961              CEL 3174409073'
      , email    : 'luissanchez69@live.com'
      , direccion: 'CALLE 168 No 8 G - 61 BLOQUE  5 APARTAMENTO  102',
    }

    , demanda: {
      vencimientoPagare: '9/12/2019       5/03/2020'
      , obligacion       : {
        A: '377815565830854  4513071889404813'
        , B: '5176409000345363    5306946666855816',
      }
      , capitalAdeudado        : '$ 19.977.436'
      , entregaGarantiasAbogado: '29/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01474'
      , llaveProceso           : '11001400303320170147400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '6/10/2017'
      , mandamientoPago        : '17/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '1/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '1/02/2018',
        }
        , '292': {
          fechaAporta: '1/02/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '22/02/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '17/10/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 345
    , category: 'Terminados'
    , deudor  : {
      cedula   : 51974282
      , nombre   : 'SANDRA JEANNETTE PRADA GUTIERREZ'
      , telefono : 'F 7216691               CEL 3204900530'
      , email    : 'sjpradag@yahoo.es'
      , direccion: 'CALLE 128 C No 45 - 08 INTERIOR 22',
    }

    , demanda: {
      vencimientoPagare: '5/06/2019'
      , obligacion       : {
        A: 2290097439,
      }
      , capitalAdeudado        : '$ 12.944.433'
      , entregaGarantiasAbogado: '15/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01476'
      , llaveProceso           : '11001400304520170147600'
      , etapaProcesal          : '11001400304520170147600'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '22/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '24/11/2017'
          , fechaAporta  : 43150,
        }
        , '292': {
          fechaRecibido: '26/02/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '24/11/2017'
        , fisico   : 'SI'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/02/2018'
        , medidaSolicitada  : '24/11/2017',
      },
    },
  }
  , {
    numero  : 346
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1019101174
      , nombre   : 'PAULA ANDREA GOMEZ LOPEZ'
      , telefono : '4668308 / 30163933457'
      , email    : 'paulisgomez94@gmail.com'
      , direccion: 'CALLE 13 B No 72 A - 40 INRERIOR  2 APARTAMENTO 402',
    }

    , demanda: {
      vencimientoPagare: '17/03/2021'
      , obligacion       : {
        A: 540691617249629400
        , B: 1010082331,
      }
      , capitalAdeudado        : '12.938.618.00'
      , entregaGarantiasAbogado: '9/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01545'
      , llaveProceso           : '11001400307320170154500'
      , etapaProcesal          : 'TERMINADO'
      , fechaPresentacion      : '22/11/2017'
      , mandamientoPago        : '1/12/2017'
      , notificacion           : {
        tipo          : 43070
        , autoNotificado: 'INMUEBLE',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/12/2017',
      },
    },
  }
  , {
    numero  : 347
    , category: 'Terminados'
    , deudor  : {
      cedula   : 41888857
      , nombre   : 'MARIA ELENA ZULUAGA URIBE'
      , telefono : '2869149 / 2681212'
      , email    : 'equiposysuministroscapital@hotmail.com'
      , direccion: 'CALLE 19 No  18 - 54 APARTAMENTO 301',
    }

    , demanda: {
      obligacion: {
        A: 4513080135113862
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '11.831.747.86'
      , entregaGarantiasAbogado: '10/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01525'
      , llaveProceso           : '11001400303920170152500'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '21/11/2017'
      , mandamientoPago        : '1/02/2018'
      , notificacion           : {
        '292': {
          resultado: 43236,
        }
        , certimail: 'OK'

        , tipo          : 'CERTIMAIL'
        , autoNotificado: 43266,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '1/02/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 348
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 41688661
      , nombre   : 'ANA BEATRIZ CORREDOR RIVERA'
      , telefono : 'F 5101587               CEL 3106630177'
      , email    : 'anabeatrizcorredor@yahoo.es'
      , direccion: 'CARRERA 8 No 190 - 22 Hoy Carrera 31 No. 190-04',
    }

    , demanda: {
      vencimientoPagare: '2/12/2021        3/09/2020'
      , obligacion       : {
        A: 6260082762
        , B: 377813367146983,
      }
      , capitalAdeudado        : '$ 76.735.593'
      , entregaGarantiasAbogado: '28/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01309'
      , llaveProceso           : '11001400300120170130900'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '6/10/2017'
      , mandamientoPago        : '10/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '14/09/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '2/10/2018',
        }
        , '292': {
          fechaRecibido: '24/10/2018'
          , fechaAporta  : '12/10/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '24/1072018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '10/10/2017'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 349
    , category: 'Terminados'
    , deudor  : {
      cedula   : 30746589
      , nombre   : 'LILIANA GARCIA ROSERO'
      , telefono : '5814164/3155831999'
      , email    : 'admithel.ltda@yahoo.com'
      , direccion: 'CARRERA 73 B No  146 F - 50 INTERIOR 9 APARTAMENTO 604',
    }

    , demanda: {
      vencimientoPagare: '18/07/2016'
      , obligacion       : {
        A: 140864,
      }
      , capitalAdeudado        : '17.074.755.31'
      , entregaGarantiasAbogado: '14/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01272'
      , llaveProceso           : '11001400302720170127200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '23/11/2017'
      , mandamientoPago        : '4/12/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 43153
          , resultado    : 'POSITIVO'
          , fechaAporta  : 'POSITIVO',
        }

        , tipo          : 'AVISO 292 FISICO'
        , autoNotificado: 43188,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '4/12/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 350
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80111672
      , nombre   : 'DIEGO FERNEY VERGARA VALDERRAMA'
      , telefono : '4647087 / 3112441540'
      , email    : 'diegovergarav@hotmail.com'
      , direccion: 'CALLE 51  SUR No  80 - 24',
    }

    , demanda: {
      vencimientoPagare: '5/05/2020'
      , obligacion       : {
        A: '6740081982 / 451308007555923'
        , B: 5303717744146285,
      }
      , capitalAdeudado        : '24.965.682.98'
      , entregaGarantiasAbogado: '15/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01357'
      , llaveProceso           : '11001400305020170135700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '23/11/2017'
      , mandamientoPago        : '16/04/2018'
      , notificacion           : {
        tipo          : 'P/NAL'
        , autoNotificado: '03/05/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '16/04/2018'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 351
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80800256
      , nombre   : 'CRISTIAN JOSUE CARDENAS NORIEGA'
      , telefono : '7612712 3134704885'
      , email    : 'sariguella35@hotmail.com'
      , direccion: 'CALLE 73 B  SUR No 1A - 06',
    }

    , demanda: {
      vencimientoPagare: '24/02/2024'
      , obligacion       : {
        A: 116080
        , B: 116080,
      }
      , capitalAdeudado        : '16.487.437.90'
      , entregaGarantiasAbogado: '22/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00024'
      , llaveProceso           : '1100141037520180002400'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '27/11/2017',
    },
  }
  , {
    numero  : 352
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 71992491
      , nombre  : 'MARIO DE JESUS OSSA PULGARIN'
      , telefono: 'F 7673180'

      , direccion: 'TRANSVERSAL 2 C BIS No 97 B-05 SUR',
    }
    , codeudor: {
      cedula   : 24764240
      , nombre   : 'BLANCA NUBIA LOPEZ CIFUENTES'
      , telefono : 3144245852
      , direccion: 'TRANSVERSAL 2 C BIS No 97 B -05 SUR',
    }
    , demanda: {
      vencimientoPagare: '20/05/2019'
      , obligacion       : {
        A: 4280023383,
      }
      , capitalAdeudado        : '$ 11.853.652'
      , entregaGarantiasAbogado: '29/09/2017'
      , departamento           : 'CUNDINAMRCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01016'
      , llaveProceso           : '11001400307620170101600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '17/10/2017'
      , mandamientoPago        : '25/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '18/07/2018'
          , resultado    : 'NEGATIVO'
          , fechaAporta  : '06/07/2018',
        }
        , '292': {
          fechaAporta: '06/07/2018'
          , resultado  : 'NEGATIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'EMPLAZAMIENTO'
        , autoNotificado: '25/04/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/10/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 353
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19297891
      , nombre   : 'RICARDO ARIAS GUZMAN'
      , telefono : 4587493
      , email    : 'ricardoagi1955@gmail.com'
      , direccion: 'CALLE 1 H  No 29 - 73',
    }

    , demanda: {
      vencimientoPagare: '15/05/2017'
      , obligacion       : {
        A: '4513082447756537/4513085528567731'
        , B: '5303728067784305/',
      }
      , capitalAdeudado        : '$ 24.172.047'
      , entregaGarantiasAbogado: '16/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01563'
      , llaveProceso           : '11001400307320170156300'

      , fechaPresentacion: 'SENTENCIA'
      , mandamientoPago  : '27/11/2017'
      , notificacion     : {
        certimail: '7/12/2017'

        , autoNotificado: 'P/NAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '27/02/2018'
        , medidaSolicitada  : '7/12/2017',
      },
    },
  }
  , {
    numero  : 354
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80032437
      , nombre   : 'BERNARDO ANIBAL GIL TORRES'
      , telefono : '6854161 / 3003813863'
      , email    : 'bagilt@yahoo.com'
      , direccion: 'CARRERA 102 No 155 - 19 INTERIOR 5 APARTAMENTO  230',
    }
    , codeudor: {
      cedula   : 1032388321
      , nombre   : 'ELDY CONSUELO MELO VILLALBA'
      , telefono : 2955785
      , direccion: 'CALLE 22C No 73 - 41',
    }
    , demanda: {
      vencimientoPagare: '1/03/2037'
      , obligacion       : {
        A: 199177,
      }
      , capitalAdeudado        : '162.645.743.97'
      , entregaGarantiasAbogado: '24/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00359'
      , llaveProceso           : '11001310304520170035900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '29/11/2017'
      , mandamientoPago        : '31/01/2018',
    },
  }
  , {
    numero  : 355
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80800763
      , nombre   : 'NELSON IVAN SEGURA MENDEZ'
      , telefono : 4653573
      , email    : 'nelsonivansegura@hotmail.com'
      , direccion: 'CARRERA 98 A No 15 A -70 INTERIOR 18 APARTAMENTO 6',
    }

    , demanda: {
      vencimientoPagare: '21/02/2026'
      , obligacion       : {
        A: 136483,
      }
      , capitalAdeudado        : '34.896.224.94'
      , entregaGarantiasAbogado: '21/11/201'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01526'
      , llaveProceso           : '11001400301720170152600'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '27/11/2017'
      , mandamientoPago        : '14/12/2017'
      , notificacion           : {
        '292': {
          resultado: 43271,
        }

        , tipo: 'FISICO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/12/2017'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 356
    , category: 'Terminados'
    , deudor  : {
      cedula   : 53119460
      , nombre   : 'SONIA XIMENA RODRIGUEZ SANCHEZ'
      , telefono : '4707082 /'
      , email    : 'ximenars29@hotmail.com'
      , direccion: 'CARRERA 81 B No  19 B- 50 APARTAMENTO 601',
    }
    , codeudor: {
      cedula   : 80732347
      , nombre   : 'YEISER ALEXIS FLOREZ CORONADO'
      , telefono : '4707082 / 3143227603'
      , direccion: 'CARRERA 81 B No  19 B- 50 APARTAMENTO 601',
    }
    , demanda: {
      vencimientoPagare: '3/08/2017'
      , obligacion       : {
        A: 162697,
      }
      , capitalAdeudado        : '30.573.555.51'
      , entregaGarantiasAbogado: '28/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01708'
      , llaveProceso           : '11001400302420170170800'
      , etapaProcesal          : '11001400302420170170800'
      , fechaPresentacion:
        'EL 7 DE SEPTIEMBRE DE 2018 SE TERMINO PROCESO POR PAGO CUOTAS EN MORA // EL 17 DE ENERO DE 2019 SE DEVOLVIERON GARANTIAS A AECSA S.A. // EL 21/09/2018 SE HIZO LEVANTAMIENTO DE MEDIDAS CAUTELARES SEGÚN CERTIFICADO'
      , mandamientoPago: '17/01/2019',
    },
  }
  , {
    numero  : 357
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1012330386
      , nombre   : 'DIANA SAYURI RODRIGUEZ GARCIA'
      , telefono : '4493410/ 313241'
      , email    : 'disayuri@hotmail.com'
      , direccion: 'CALLE 79 SUR No 77 L- 72 INT 59',
    }

    , demanda: {
      vencimientoPagare: '21/0/2017'
      , obligacion       : {
        A: 146999,
      }
      , capitalAdeudado        : '22.149.641.28'
      , entregaGarantiasAbogado: '04/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01378'
      , llaveProceso           : '11001400305520170137800'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '12/12/2017'
      , mandamientoPago        : '19-02-2018',
    },
  }
  , {
    numero  : 358
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 1116782267
      , nombre   : 'JOGLI JOAQUIN OTERO VARGAS'
      , telefono : 'CEL 3005941798'
      , email    : 'juanotero1989@gmail.com'
      , direccion: 'DIAGONAL 2  No 79 F- 04',
    }

    , demanda: {
      vencimientoPagare: '26/02/2019'
      , obligacion       : {
        A: 3880082626,
      }
      , capitalAdeudado        : '$ 22.130.224'
      , entregaGarantiasAbogado: '6/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00975'
      , llaveProceso           : '11001400307820170097500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '12/10/2017'
      , mandamientoPago        : '20/10/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '23/05/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '01/06/2018',
        }
        , '292': {
          fechaAporta: '01/06/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '14/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '20/10/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 359
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79357895
      , nombre  : 'JOSE DAVID PEÑA SAAVEDRA'
      , telefono: '31665335 / 3165335 / 3165335586'

      , direccion: 'CARRERA 123 No 13 - 85 casa 364',
    }

    , demanda: {
      vencimientoPagare: '29/07/2018'
      , obligacion       : {
        A: 71141,
      }
      , capitalAdeudado        : '8.725.321.75'
      , entregaGarantiasAbogado: '24/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01786'
      , llaveProceso           : '11001400306520170178600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '07/12/2017'
      , mandamientoPago        : '02/02/2018'
      , notificacion           : {
        tipo          : 'PERSONAL'
        , autoNotificado: '10/04/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '02/02/2018        25/05/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 360
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52327561
      , nombre   : 'NOHORA DEL PILAR VARGAS BERNAL'
      , telefono : '7416881 / 3002261859'
      , email    : 'jana578@hotmail.com'
      , direccion: 'CARRERA 110 C No 77- 15',
    }

    , demanda: {
      vencimientoPagare: '02/03/2024'
      , obligacion       : {
        A: 116252,
      }
      , capitalAdeudado        : '15.576.784.43'
      , entregaGarantiasAbogado: '04/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01452'
      , llaveProceso           : '11001400302320170145200'

      , fechaPresentacion: '12/12/2017',
    },
  }
  , {
    numero  : 361
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 53064513
      , nombre   : 'NATALIA CUESTAS MONDRAGON'
      , telefono : 'F4782781'
      , email    : 'ncuestas@mccain.com.co'
      , direccion: 'CARRERA 68 D No 40-53 SUR TORRE 6 APARTAMENTO 1006',
    }

    , demanda: {
      vencimientoPagare: '26/03/2021'
      , obligacion       : {
        A: 'SO79522009'
        , B: 5491570044098801,
      }
      , capitalAdeudado        : '$ 32.318.533'
      , entregaGarantiasAbogado: '26/09/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01336'
      , llaveProceso           : '11001400301720170133600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '17/10/2017'
      , mandamientoPago        : '23/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '15/03/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '27/04/2018',
        }
        , '292': {
          fechaRecibido: '27/04/2018'
          , fechaAporta  : '27/04/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '5/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/11/2017              05/06/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 362
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52031089
      , nombre   : 'YANETH HERNANDEZ SUAREZ'
      , telefono : '7553091 / 3007553091'
      , email    : 'HERNANDEZ_YANETH@HOTMAIL.COM'
      , direccion: 'CARRERA 80 J No 73-27',
    }

    , demanda: {
      vencimientoPagare: '03/07/2036'
      , obligacion       : {
        A: 165609,
      }
      , capitalAdeudado        : '42.269.61'
      , entregaGarantiasAbogado: '05/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00031'
      , llaveProceso           : '25754400300220180003100'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '12/12/2017'
      , mandamientoPago        : '08/03/2018'
      , notificacion           : {
        '292': {
          fechaRecibido: 'PERSONAL'
          , fechaAporta  : '21/05/2018'
          , resultado    : '8/03/2018',
        }

        , tipo          : 'INMUEBLE'
        , autoNotificado: 363,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '15/03/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 363
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52645617
      , nombre  : 'MARIA LILIANA CASTAÑEDA ZAPATA'
      , telefono: 'maria_castañeda06@hotmail.com'
      , email   : 'CARRERA 4 A ESTE No 38 - 56 CASA 127 SOACHA',
    }
    , codeudor: {
      direccion: '27/07/2028',
    }
    , demanda: {
      vencimientoPagare: '2210088055/158705'
      , obligacion       : {
        A: 4513077734943038
        , B: '31.247.705.94',
      }
      , capitalAdeudado        : '04/12/2017'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 00409'
      , llaveProceso           : '25754400300220170040900'
      , etapaProcesal          : '12/12/2017'
      , fechaPresentacion      : '16/01/2018'

      , notificacion: {
        '292': {
          resultado: 'PERSONAL',
        }

        , tipo          : '29/05/2018'
        , autoNotificado: '16/01/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '0033',
      },
    },
  }
  , {
    numero  : 364
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52102754
      , nombre   : 'SANDRA PATRICIA SANCHEZ VELASQUEZ'
      , telefono : 4671755
      , email    : 'spatriciasanchez2011@hotmail.com'
      , direccion: 'CALLE 6 B No 80 G-95 TORRE 5 APARTAMENTO 717',
    }

    , demanda: {
      vencimientoPagare: '26/10/82026'
      , obligacion       : {
        A: 144698,
      }
      , capitalAdeudado        : '60.161.467.78'
      , entregaGarantiasAbogado: '06/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01647'
      , llaveProceso           : '11001400307320170164700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '14/12/2017'
      , mandamientoPago        : '18/01/2018'
      , notificacion           : {
        fisico: 'FISICO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '18/01/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 365
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79861680
      , nombre   : 'RICHARD CAMILO IRIARTE GARCIA'
      , telefono : 2275729
      , email    : 'richard.iriarte76@hotmail.com'
      , direccion: 'CARRERA 105 A No 70 D- 90 INT 1 APART 5',
    }
    , codeudor: {
      cedula   : 52234865
      , nombre   : 'MARICEL ARBELAEZ MORALES'
      , telefono : 4540096
      , direccion: 'CARRERA 105 A No 70D - 90 INT 1 APARTA 5',
    }
    , demanda: {
      vencimientoPagare: '10/03/2023'
      , obligacion       : {
        A: 106172,
      }
      , capitalAdeudado        : '23.970.146.05'
      , entregaGarantiasAbogado: '07/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00140'
      , llaveProceso           : '11001400305020180014000'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '14/12/2017'

      , notificacion: {
        '292': {
          resultado: '16/05/2018',
        }

        , tipo: 'PERSONAL RICHARD',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '24/04/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 366
    , category: 'Terminados'
    , deudor  : {
      cedula   : 53094561
      , nombre   : 'YURI ANDREA GONZALEZ TORRES'
      , telefono : 7380081
      , email    : 'yurisita_05@hotmail.com'
      , direccion: 'CARRERA 87 K No 70-44 SUR',
    }

    , demanda: {
      vencimientoPagare: '22/11/2025'
      , obligacion       : {
        A: 134032,
      }
      , capitalAdeudado        : '$ 19.041.643'
      , entregaGarantiasAbogado: '11/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01361'
      , llaveProceso           : '11001400300920170136100'
      , etapaProcesal          : '11001400300920170136100'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '15/12/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '6/03/2018'
          , fechaAporta  : 43197,
        }
        , '292': {
          fechaRecibido: '8/03/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '30/01/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '8/03/2018'
        , medidaSolicitada  : '30/01/2018',
      },
    },
  }
  , {
    numero  : 367
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79416270
      , nombre   : 'ANDRES ANTONIO  AMEZQUITA PAEZ'
      , telefono : 'F 6481255             CEL 3144899865'
      , email    : 'amezquitapaa@gmail.com'
      , direccion: 'CALLE 130 C BIS A No 99-49',
    }
    , codeudor: {
      cedula   : 52019717
      , nombre   : 'CARMEN ROJAS CARDENAS'
      , telefono : 'F 6876682'
      , direccion: 'CALLE 130 C BIS A No 99-49',
    }
    , demanda: {
      vencimientoPagare: '10/10/2033'
      , obligacion       : {
        A: 168725,
      }
      , capitalAdeudado        : '$ 29.419.277'
      , entregaGarantiasAbogado: '01/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01235'
      , llaveProceso           : '11001400307820170123500'
      , etapaProcesal          : '11001400307820170123500'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '12/12/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '30/04/2018'
          , fechaAporta  : 43229,
        }
        , '292': {
          fechaRecibido: '19/09/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '18/12/2017'
        , fisico   : 'SI'

        , autoNotificado: 'NOTIFICADOS PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/05/2018'
        , medidaSolicitada  : '18/12/2017',
      },
    },
  }
  , {
    numero  : 368
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39577914
      , nombre   : 'CAROLINA MARTINEZ CALDERON'
      , telefono : 69115123
      , email    : 'caro_23mc@hotmail.com'
      , direccion: 'CARRERA 19 No 13-20 GIRARDOT',
    }

    , demanda: {
      vencimientoPagare: '02/05/2026'
      , obligacion       : {
        A: 6841,
      }
      , capitalAdeudado        : '36.307.716.54'
      , entregaGarantiasAbogado: '11/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GIRARDOT'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00066'
      , llaveProceso           : '25307400300120180006600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '18/12/2017     09/02/2018'
      , mandamientoPago        : '19/02/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '19/02/2018',
      },
    },
  }
  , {
    numero  : 369
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 900336193
      , nombre  : 'INVERSION RIVOLI S.A.S.'
      , telefono: 'F 3727561'

      , direccion: 'CARRERA 24 G No20-35 SUR',
    }
    , codeudor: {
      cedula   : 41519807
      , nombre   : 'MARTHA LUCIA CUARTAS BETANCUR'
      , telefono : 3114472300
      , direccion: 'CARRERA 24 No 20-35 SUR',
    }
    , demanda: {
      vencimientoPagare: '8/10/2018'
      , obligacion       : {
        A: 2290098960,
      }
      , capitalAdeudado        : '$ 34.749.647'
      , entregaGarantiasAbogado: '17/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017-1208'
      , llaveProceso           : '11001400302220170120800'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '31/10/2017'
      , mandamientoPago        : '29/11/2017'
      , notificacion           : {
        '291': {
          fechaAporta: '3/05/2018',
        }
        , '292': {
          fechaAporta: 43223,
        }

        , tipo          : 'EMPLAZAMIENTO'
        , autoNotificado: '-',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '29/11/2017'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 370
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52840906
      , nombre   : 'LILIAN ANDREA HERNANDEZ SUAREZ'
      , telefono : 4793387
      , email    : 'hernandezsuarez28@hotmail.com'
      , direccion: 'CARRERA 51 B No 18-28 SUR',
    }

    , demanda: {
      vencimientoPagare: '06/02/2030'
      , obligacion       : {
        A: 180998
        , B: 3778813729098781,
      }
      , capitalAdeudado        : '51.466.338.84'
      , entregaGarantiasAbogado: '11/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2017 - 01556'
      , llaveProceso           : '11001400302020170155600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '14/12/2017'
      , mandamientoPago        : '12/02/2018'
      , notificacion           : {
        '292': {
          resultado: '20/06/2018',
        }

        , tipo          : 'CERTIMAIL'
        , autoNotificado: '26/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/02/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 371
    , category: 'LiosJuridicos'
    , deudor  : {
      cedula   : 39765816
      , nombre   : 'MARTHA ANDREA MORA COLLAZOS'
      , telefono : 6236600
      , email    : 'andreato1a@hotmaul.com'
      , direccion: 'CALLE 50 SUR 93 D- 38 APTO 401 TORRE 6',
    }

    , demanda: {
      vencimientoPagare: '30/03/2024'
      , obligacion       : {
        A: 117171
        , B: 377813401553319,
      }
      , capitalAdeudado        : '$ 10.775.194'
      , entregaGarantiasAbogado: '16/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00143'
      , llaveProceso           : '11001400302420180014300'
      , etapaProcesal:
        'SIN LEVANTAMIENTO DE MEDIDA CAUTELAR NO HA SIDO ARCHIVADO POR EL JUZGADO'
      , fechaPresentacion: '19/02/2018'
      , mandamientoPago:
        '31 AGOSTO SE ENVIO SOLICITUD DESARCHIVE A ARCHIVO CENTRAL',
    },
  }
  , {
    numero  : 372
    , category: 'Terminados'
    , deudor  : {
      cedula   : 51953414
      , nombre   : 'JANETH RUBIELA GORDILLO PINZON'
      , telefono : '6795197//3152482331'
      , email    : 'janethrpinzon@gmail.com'
      , direccion: 'TRANSVERSAL 49 # 3 - 92 CASA 360 ZAPAN 3',
    }
    , codeudor: {
      cedula: 1014202066
      , nombre: 'CARLOS ANDRES SUAREZ GORDILLO',
    }
    , demanda: {
      vencimientoPagare: '31/07/2024'
      , obligacion       : {
        A: 120770,
      }
      , capitalAdeudado        : '$ 17.921.982'
      , entregaGarantiasAbogado: '11/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00070'
      , llaveProceso           : '25754400300220180007000'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '19/01/2018',
    },
  }
  , {
    numero  : 373
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79616846
      , nombre   : 'RODRIGO ALBERTO RUIZ VILLALBA'
      , telefono : '8388423//3112764286'
      , email    : 'rodrigo_ruiz33@hotmail.com'
      , direccion: 'CARRERA 5 # 12 - 53 APULO',
    }

    , demanda: {
      obligacion: {
        A: 4513087158442953
        , B: 5306966000650228,
      }
      , capitalAdeudado        : 10725698
      , entregaGarantiasAbogado: '18/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'APULO'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00005'
      , llaveProceso           : '25599400300120180000500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/01/2018'
      , mandamientoPago        : '23/01/2018'
      , notificacion           : {
        tipo          : 'PERSONAL'
        , autoNotificado: 43342,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/01/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 374
    , category: 'Terminados'
    , deudor  : {
      cedula  : 80850549
      , nombre  : 'JHOAN ANTONIO BARAJAS MONTENEGRO'
      , telefono: 7384582
      , email   : 'jjhoan_27@hotmail.com'
      , direccion:
        'CALLE 2 SUR 16 - 36 MANZANA 104 // CARRERA 96 D 6 - 55 CADA 81 ET 1',
    }
    , codeudor: {
      cedula   : 52936062
      , nombre   : 'ELIZABETH YAYA SIERRA'
      , telefono : 7326829
      , direccion: 'CARRERA 96 D # 6 - 55 CASA 81 ESTAPA 1',
    }
    , demanda: {
      vencimientoPagare: '26/08/2024'
      , obligacion       : {
        A: 121543,
      }
      , capitalAdeudado        : 27006100
      , entregaGarantiasAbogado: '15/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00067'
      , llaveProceso           : '11001400308620180006700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/01/2018',
    },
  }
  , {
    numero  : 375
    , category: 'Terminados'
    , deudor  : {
      cedula   : 74845495
      , nombre   : 'JHON ALFREDO ZORRO MARTINEZ'
      , telefono : 7315902
      , email    : 'alfredozorromart@hotmail.com'
      , direccion: 'CALLE 59A SUR 45D - 15',
    }

    , demanda: {
      vencimientoPagare: '24/08/2034'
      , obligacion       : {
        A: 179854,
      }
      , capitalAdeudado        : 66255617
      , entregaGarantiasAbogado: '15/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00123'
      , llaveProceso           : '11001400304020180012300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/01/2018'
      , mandamientoPago        : '16/02/2018'
      , notificacion           : {
        '292': {
          resultado: 43257,
        }

        , tipo: 'FISICO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '16/02/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 376
    , category: 'LiosJuridicos'
    , deudor  : {
      cedula   : 11203111
      , nombre   : 'ROBERTO RICO RUIZ'
      , telefono : 6597446
      , email    : 'roberto.rico.ruiz@gmail.com'
      , direccion: 'CALLE 128 96A - 05 CASA 3 MULTIFAMILIAR ARRAYANES',
    }
    , codeudor: {
      cedula   : 52804144
      , nombre   : 'DORIS GARZON TALERO'
      , telefono : 3491122
      , direccion: 'CALLE 128 96A - 05',
    }
    , demanda: {
      vencimientoPagare: '29/04/2019'
      , obligacion       : {
        A: 118010
        , B: '377813183474353 // 4513074148699942 / 5491579209500691',
      }
      , capitalAdeudado        : 27308454
      , entregaGarantiasAbogado: '17/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00052'
      , llaveProceso           : '11001400307620180005200'
      , etapaProcesal:
        'EL 22/08/2018 EL JUZGADO DECRETO LA TERMINACIÓN DEL PROCESO POR PAGO CUOTAS EN MORA DE LA OBLIGACIÓN HIPOTECARIA //  SE ENVIO SOLICITUD DESARCHIVE EL 18 DE AGOSOTO DE 2023 A ARCHIVO CENTRAL .'
      , fechaPresentacion: '22/08/2018'
      , mandamientoPago:
        '18 AGOSTO SE ENVIO SOLICTUD DESARCHIVE A ARCHIVO CENTRAL',
    },
  }
  , {
    numero  : 377
    , category: 'Terminados'
    , deudor  : {
      cedula   : 40356325
      , nombre   : 'GLADIS VELASQUEZ CASTRO'
      , telefono : 3118206
      , email    : 'sacave22@gmail.com'
      , direccion: 'CARRERA 79D 36 - 74',
    }
    , codeudor: {
      cedula   : 86004461
      , nombre   : 'FABIAN CASTRILLON GUTIERREZ'
      , telefono : 4710758
      , direccion: 'CALLE 8 B 70 - 76',
    }
    , demanda: {
      vencimientoPagare: '27/09/2018'
      , obligacion       : {
        A: 2150091493,
      }
      , capitalAdeudado        : 13503258
      , entregaGarantiasAbogado: '17/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00107'
      , llaveProceso           : '11001400304620180010700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '24/01/2018'
      , mandamientoPago        : '29/01/2018'
      , notificacion           : {
        '292': {
          resultado: '14/09/2018 GLADIS',
        }

        , fisico: 'ENVIADO 24/08'

        , autoNotificado: 'FABIAN NOT.',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '29/01/2018'
        , medidaSolicitada  : 'BANCOS',
      },
    },
  }
  , {
    numero  : 378
    , category: 'Terminados'
    , deudor  : {
      cedula  : 11346521
      , nombre  : 'NELSON YESITH MORENO LEON'
      , telefono: 'yesith.moreno@correo.policia.gov.co'
      , email   : 'DIAGINAL 51A 59 A - 17 APARTAMENTO 1',
    }

    , demanda: {
      vencimientoPagare: 4594250463791785
      , obligacion       : {
        B: 15270162,
      }
      , capitalAdeudado: '17/01/2018'

      , departamento : 'CUNDINAMARCA'
      , municipio    : 'BOGOTA'
      , tipoProceso  : 'SINGULAR'
      , radicado     : '2018 - 00181'
      , llaveProceso : '11001400301120180018100'
      , etapaProcesal: 11346521,
    },
  }
  , {
    numero  : 379
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79804965
      , nombre   : 'JHON ALEXANDER ALARCON GALVIS'
      , telefono : 'F 5686327              CEL 3157236856'
      , email    : 'jhondoblea@hotmail.com'
      , direccion: 'CALLE 36C No 3A - 25',
    }

    , demanda: {
      vencimientoPagare: '31/08/2027'
      , obligacion       : {
        A: 155380,
      }
      , capitalAdeudado        : '$ 40.292.980'
      , entregaGarantiasAbogado: '11/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00111'
      , llaveProceso           : '11001400308120180011100'
      , etapaProcesal          : '11001400308120180011100'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '24/01/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '3/05/2018'
          , fechaAporta  : 43223,
        }
        , '292': {
          fechaRecibido: '3/05/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '7/02/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/05/2018'
        , medidaSolicitada  : '7/02/2018',
      },
    },
  }
  , {
    numero  : 380
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79804965
      , nombre   : 'JHON ALEXANDER ALARCON GALVIS'
      , telefono : 'F 5686327              CEL 3157236856'
      , email    : 'jhondoblea@hotmail.com'
      , direccion: 'CALLE 36C No 3A - 25',
    }

    , demanda: {
      vencimientoPagare: '31/08/2027'
      , obligacion       : {
        A: 155380,
      }
      , capitalAdeudado        : '$ 40.292.980'
      , entregaGarantiasAbogado: '11/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00111'
      , llaveProceso           : '11001400308120180011100'
      , etapaProcesal          : '11001400308120180011100'
      , fechaPresentacion:
        'EL 2/07/2021 EL JUZGADO DECRETA TERMINACION PROCESO POR PAGO CUOTAS EN MORA //EL 30/08/2022 SE DEVOLVIERON GARANTIAS Y DESGLOSE A AECSA // EL 4/05/2022 LA OFICIAN DE REGISTRO LEVANTO MEDIDA CAUTELAR DE EMBARGO'
      , mandamientoPago: '4/05/2022',
    },
  }
  , {
    numero  : 381
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1032396480
      , nombre  : 'NIELCEN MARISOL MARIN MELO'
      , telefono: 3203430311
      , email   : 'nimary20@hotmail.com'
      , direccion:
        'CARRERA 81 B No 66 - 51 CASA 139 TERRAZA DE CASTILLA // TRV 70 G # 63 - 52 SUR APTO 604 BL 5',
    }

    , demanda: {
      vencimientoPagare: '6/09/2027'
      , obligacion       : {
        A: 155586,
      }
      , capitalAdeudado        : 24878276
      , entregaGarantiasAbogado: '18/01/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00075'
      , llaveProceso           : '11001400304120180007500'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '24/01/2018',
    },
  }
  , {
    numero  : 382
    , category: 'Terminados'
    , deudor  : {
      cedula  : 80403235
      , nombre  : 'CARLOS ALBERTO LANCHEROS BARRAGAN'
      , telefono: 3107518479

      , direccion: 'CARRERA 4 NO 5 - 02 SAN JUAN DE RIO SECO',
    }

    , demanda: {
      vencimientoPagare: '8/09/2019'
      , obligacion       : {
        A: 3720086711,
      }
      , capitalAdeudado        : 11224313
      , entregaGarantiasAbogado: '11/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SAN JUAN DE RIOSECO'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00004'
      , llaveProceso           : '25662408900120180000400'

      , fechaPresentacion: 'NOTIFICACION'
      , mandamientoPago  : '25/01/2018'
      , notificacion     : {
        '291': {
          fechaRecibido: 'X',
        }

        , certimail: '22/02/2018'

        , tipo          : 43378
        , autoNotificado: 'FISICO',
      }
      , medidasCautelares: {
        medidaSolicitada: '22/02/2018',
      },
    },
  }
  , {
    numero  : 383
    , category: 'Terminados'
    , deudor  : {
      cedula  : 65706810
      , nombre  : 'NOHORA ESPERANZA BARRERO RODRIGUEZ'
      , telefono: 8231926
      , email   : 'nonbaro@hotmail.com'
      , direccion:
        'CALLE 12 # 2C - 55 SENDEROS DE FUNZA // CALLE 50 SUR # 93D - 38',
    }
    , codeudor: {
      cedula   : 74327316
      , nombre   : 'RODEGAN LOPEZ MENDOZA'
      , telefono : 7340264
      , direccion: 'CARRERA 98 # 15A - 80',
    }
    , demanda: {
      vencimientoPagare: '16/03/2024'
      , obligacion       : {
        A: 116650,
      }
      , capitalAdeudado        : 14735254
      , entregaGarantiasAbogado: '18/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'KENNEDY'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00479'
      , llaveProceso           : '11001400302620180047900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '26/01/2018 //02/04/2018'
      , mandamientoPago        : '22/05/2018'
      , notificacion           : {
        certimail: '22/05/2018',
      },
    },
  }
  , {
    numero  : 384
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80026753
      , nombre   : 'DIEGO JAVIER GALINDO MEJIA'
      , telefono : '3069272//3202116040'
      , email    : 'd8003galindo@gmail.com'
      , direccion: 'TRANSVERSAL 73 # 11B - 77 INT 2 APTO 504',
    }

    , demanda: {
      vencimientoPagare: '7/06/2025'
      , obligacion       : {
        A: 130026,
      }
      , capitalAdeudado        : '$ 30.413.921'
      , entregaGarantiasAbogado: '24/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00110'
      , llaveProceso           : '11001400305620180011000'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '30/01/2018'
      , mandamientoPago        : '15/02/2018'
      , notificacion           : {
        '292': {
          resultado: 43269,
        }
        , certimail: 'X'

        , autoNotificado: 43272,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '15/02/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 385
    , category: 'Terminados'
    , deudor  : {
      cedula  : 406547
      , nombre  : 'AVELINO SIERRA SIERRA'
      , telefono: 235426

      , direccion: 'TRANVERSAL 11A # 9A - 13',
    }
    , codeudor: {
      cedula   : 406828
      , nombre   : 'JOSE CARLOS JULIO RINCON SIERRA'
      , telefono : 3143667
      , direccion: 'CALLE 126 # 11G - 78',
    }
    , demanda: {
      vencimientoPagare: '29/07/2019'
      , obligacion       : {
        A: 9450082795,
      }
      , capitalAdeudado        : '$ 15.344.261'
      , entregaGarantiasAbogado: '19/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00074'
      , llaveProceso           : '11001400303520180007400'

      , fechaPresentacion: 'NOTIFICACION'
      , mandamientoPago  : '30/01/2018'
      , notificacion     : {
        certimail: '6/02/2018',
      }
      , medidasCautelares: {
        medidaSolicitada: '6/02/2018',
      },
    },
  }
  , {
    numero  : 386
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1070950842
      , nombre   : 'ALEXANDER PRADA PALMAR'
      , telefono : 'F 8429325'
      , email    : 'pradalexander@hotmail.com'
      , direccion: 'CARRERA 4 B  SUR No 4 - 30  FACATATIVA',
    }

    , demanda: {
      vencimientoPagare: '10/11/2020'
      , obligacion       : {
        A: 12722464,
      }
      , capitalAdeudado        : '$ 26.468.936'
      , entregaGarantiasAbogado: '16/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FACATATIVA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 00744'
      , llaveProceso           : '25269400300120170074400'
      , etapaProcesal          : '25269408900120170074400',
    },
  }
  , {
    numero  : 387
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 91263617
      , nombre   : 'LEONARDO SANABRIA SANABRIA'
      , telefono : 'F 4251180           CEL 3118066048'
      , email    : 'leo.sanabria@live.com.mx'
      , direccion: 'CARRERA 85  B No  23 B - 69  INTERIOR 7 APARTAMENTO  314',
    }

    , demanda: {
      vencimientoPagare: '5/05/2019'
      , obligacion       : {
        A: 2500085167
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 36.331.525'
      , entregaGarantiasAbogado: '9/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01336'
      , llaveProceso           : '11001400305020170133600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '20/11/2017'
      , mandamientoPago        : '12/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '28(8/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '14/09/2018',
        }
        , '292': {
          fechaRecibido: '6/10/2018'
          , fechaAporta  : '12/10/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '12/10/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/02/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 388
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52644132
      , nombre   : 'XIMENA  ESCOBAR PUCCETI'
      , telefono : '6126610 / 3124575163'
      , email    : 'ximpucci1@hotmail.com'
      , direccion: 'CARRERA 14 B No 119 - 30  BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '26/11/2020'
      , obligacion       : {
        A: 1310089728
        , B: '377813368402583 /AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '27.696.651'
      , entregaGarantiasAbogado: '29/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00111'
      , llaveProceso           : '11001400301720180011100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '05/02/2018'
      , mandamientoPago        : '22/02/2018'
      , notificacion           : {
        tipo          : 'PERSONAL'
        , autoNotificado: 43200,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/02/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 389
    , category: 'Terminados'
    , deudor  : {
      cedula: 79874218
      , nombre: 'MIGUEL ANGEL GRANADOS GUTIERREZ',
    }

    , demanda: {
      departamento: 'CUNDINAMARCA'
      , municipio   : 'BOGOTA'
      , tipoProceso : 'SINGULAR'
      , radicado    : '2018 - 00121'
      , llaveProceso: '11001400307020180012100',
    },
  }
  , {
    numero  : 390
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 71603563
      , nombre   : 'GILBERTO JAIME BETANCOURT'
      , telefono : 'F 3138547'
      , email    : 'gilbertojaime@hotmail.com'
      , direccion: 'CARRERA 82  No  19 - 20',
    }

    , demanda: {
      vencimientoPagare: '21/07/2020'
      , obligacion       : {
        A: 2500084774
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 50.509.238'
      , entregaGarantiasAbogado: '16/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01266'
      , llaveProceso           : '11001400300420170126600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '20/11/2017'
      , mandamientoPago        : '17/01/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '5/04/2020'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '9/04/2018',
        }
        , '292': {
          fechaRecibido: '11/05/2020'
          , fechaAporta  : '8/06/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '9/04/2020',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '17/01/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 391
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52190973
      , nombre   : 'YANETH BIBIANA VARGAS CANO'
      , telefono : 'F 7802492'
      , email    : 'bibianvargas@gmail.com'
      , direccion: 'AVENIDA(CALLE) 68 SUR No 70D-71. APARTAMENTO 1302',
    }

    , demanda: {
      vencimientoPagare: '26/02/2033'
      , obligacion       : {
        A: 161684,
      }
      , capitalAdeudado        : '$ 48.945.502'
      , entregaGarantiasAbogado: '29/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00129'
      , llaveProceso           : '11001400305020180012900'

      , fechaPresentacion: 'LIQUIDACION'
      , mandamientoPago  : '05/02/2018'
      , notificacion     : {
        '292': {
          fechaRecibido: '20/06/2018',
        }
        , certimail: '18/04/2018'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        medidaSolicitada: '18/04/2018',
      },
    },
  }
  , {
    numero  : 392
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79712791
      , nombre   : 'EDGAR JOBANNY MATEUS CASTILLO'
      , telefono : 'F 8511988'
      , email    : 'giovannymat@yahoo.com'
      , direccion: 'CALLE 3 C No  13 - 07   ZIPAQUIRA',
    }

    , demanda: {
      vencimientoPagare: '22/08/2020'
      , obligacion       : {
        A: 3320087751
        , B: 3320088190,
      }
      , capitalAdeudado        : '$ 38.847.950'
      , entregaGarantiasAbogado: '9/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'ZIPAQUIRA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00131'
      , llaveProceso           : '25899400300220170013100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '20/11/2017'
      , mandamientoPago        : '12/04/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '11/06/2019'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '31/07/2019',
        }
        , '292': {
          fechaRecibido: '3/07/2019'
          , fechaAporta  : '31/07/2019'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '12/12/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/04/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 393
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79134529
      , nombre   : 'MIGUEL ALEJANDRO GARCIA RODRIGUEZ'
      , telefono : '6356262 / 3013377704'
      , email    : 'aeljogarcia69@gmail.com'
      , direccion: 'CARRERA 79 No 19A - 28. APARTAMENTO 1102',
    }

    , demanda: {
      obligacion: {
        A: 377816034306740,
      }
      , capitalAdeudado        : '25.857.393'
      , entregaGarantiasAbogado: '29/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00149'
      , llaveProceso           : '11001400303820180014900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '05/02/2018'
      , mandamientoPago        : '22/03/2018'
      , notificacion           : {
        '292': {
          resultado: '04/05/2018',
        }

        , tipo: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/03/2018'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 394
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79424813
      , nombre   : 'OMAR HERNANDO QUIROGA TORRES'
      , telefono : '5605872 / 3153113742'
      , email    : 'servicioscyga@hotmail.com'
      , direccion: 'CARRERA 16 No 7 - 32  BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '08/07/2033'
      , obligacion       : {
        A: 165720,
      }
      , capitalAdeudado        : '25.863.164'
      , entregaGarantiasAbogado: '25/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00299'
      , llaveProceso           : '11001400305120180029900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '05/02/2018'
      , mandamientoPago        : '22/03/2018'
      , notificacion           : {
        '292': {
          resultado: '06/06/2018',
        }

        , tipo: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/03/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 395
    , category: 'Terminados'
    , deudor  : {
      cedula   : 2869326
      , nombre   : 'JORGE BERMEO ROJAS'
      , telefono : 6436451
      , email    : 'jbermeo01@hotmail.com'
      , direccion: 'CARRERA 59 A No 136- 25 APARTAMENTO 302 BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '29/09/2018'
      , obligacion       : {
        A: 60144000242,
      }
      , capitalAdeudado        : '13.974.554'
      , entregaGarantiasAbogado: '29/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00090'
      , llaveProceso           : '11001400308420180009000'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '05/02/2018',
    },
  }
  , {
    numero  : 396
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 80733467
      , nombre   : 'ORLANDO ENRIQUE NOVOA BARRETO'
      , telefono : 'F 7836655           CEL 3118163887'
      , email    : 'orlandonovoa9@gmail.com'
      , direccion: 'CARRERA 88 A No  67 - 44',
    }

    , demanda: {
      vencimientoPagare: '8/06/2019'
      , obligacion       : {
        A: 10000090724,
      }
      , capitalAdeudado        : '$ 24.000.000'
      , entregaGarantiasAbogado: '15/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01623'
      , llaveProceso           : '11001400306420170162300'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '21/11/2017'
      , mandamientoPago        : '6/09/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '13/05/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '30/05/2018',
        }
        , '292': {
          fechaRecibido: '18/05/2018'
          , fechaAporta  : '30/05/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '7/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '6/09/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 397
    , category: 'Terminados'
    , deudor  : {
      cedula   : 13812570
      , nombre   : 'JOSE DE JESUS TAPIAS ESTEVEZ'
      , telefono : 'F 8290169'
      , email    : 'jtapias@pastasdoria.com'
      , direccion: 'CALLE 12A No 1B ESTE-80 MANZANA 2 CASA MOSQUERA',
    }

    , demanda: {
      vencimientoPagare: '31/05/2022'
      , obligacion       : {
        A: 430104535,
      }
      , capitalAdeudado        : '$ 14.467.701'
      , entregaGarantiasAbogado: '19/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MOSQUERA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00106'
      , llaveProceso           : '25473400300120180010600'
      , etapaProcesal          : '25473400300120180010600'
      , fechaPresentacion      : 'CURADOR AD LITEM'
      , mandamientoPago        : '06/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '4/07/2018',
        }
        , '292': {
          fechaRecibido: '4/0772018'
          , fechaAporta  : 'NEGATIVO',
        }
        , certimail: '07/07/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CURADOR AD LITEM',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'CURADOR AD LITEM'
        , medidaSolicitada  : '07/07/2018',
      },
    },
  }
  , {
    numero  : 398
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52465659
      , nombre   : 'LILIANA ANDREA ERAZO LOPEZ'
      , telefono : '4669771/ 3214771295'
      , email    : 'liancridana@hotmail.com'
      , direccion: 'CARRERA 87 BIS No 50 SUR-75 PISO 2',
    }

    , demanda: {
      vencimientoPagare: '29/01/2044'
      , obligacion       : {
        A: 171882,
      }
      , capitalAdeudado        : '52.854.078'
      , entregaGarantiasAbogado: '24/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00064'
      , llaveProceso           : '25754400300120180006400'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '07/02/2018'
      , mandamientoPago        : '10/04/2018'
      , notificacion           : {
        certimail: 'PERSONAL'

        , tipo          : 'PERSONAL'
        , autoNotificado: '07/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '10/04/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 399
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79704579
      , nombre   : 'GIOVANNI  PERDOMO QUIROGA'
      , telefono : 3372263
      , email    : 'giogol5@hotmail.com'
      , direccion: 'CARRER PUBICHAS CASA 27 D EXTERIOR',
    }
    , codeudor: {
      cedula   : 1030559747
      , nombre   : 'ANGELICA MARIA TORRES QUIROGA'
      , telefono : 3372263
      , direccion: 'CARRERA 11 ESTE No 12 SUR-48',
    }
    , demanda: {
      vencimientoPagare: '12/02/2033'
      , obligacion       : {
        A: 161174,
      }
      , capitalAdeudado        : '40.477.377'
      , entregaGarantiasAbogado: '25/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00132'
      , llaveProceso           : '11001400303720180013200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '08/02/2018'
      , mandamientoPago        : '26/04/2018'
      , notificacion           : {
        '292': {
          resultado: '20/06 ANGELICA FISICO',
        }

        , tipo          : 'P/NAL GIOVANNI'
        , autoNotificado: '09/05/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/04/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 400
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79652256
      , nombre   : 'OSCAR GUILLERMO LOZANO GONZALEZ'
      , telefono : 8361124
      , email    : 'ocaelmejor@yahoo.es'
      , direccion: 'XARRERA 2 No 10-30B CENTENARIO - GIRARDOT',
    }

    , demanda: {
      vencimientoPagare: '21/12/2020'
      , obligacion       : {
        A: 6590084682,
      }
      , capitalAdeudado        : '17.247.376'
      , entregaGarantiasAbogado: '23/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GIRARDOT'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00075'
      , llaveProceso           : '25307400300220180007500'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '09/02/2018'
      , mandamientoPago        : '16/02/2018// ACLARACION'
      , notificacion           : {
        certimail: 'PERSONAL'
        , fisico   : 'PERSONAL'

        , autoNotificado: '24/08/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '16/02/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 401
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52357813
      , nombre   : 'SANDRA PATRICIA  OJEDA RODRIGUEZ'
      , telefono : '7232225 / 31125727752'
      , email    : 'dandraojeda_5@hotmail.com'
      , direccion: 'CALLE 50 SUR No 87 D- 81',
    }

    , demanda: {
      vencimientoPagare: '15/10/2017'
      , obligacion       : {
        A: 142837,
      }
      , capitalAdeudado        : '26.633.997'
      , entregaGarantiasAbogado: '15/02/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018-0237'
      , llaveProceso           : '11001400302520180023700'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '20/02/2018',
    },
  }
  , {
    numero  : 402
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39766624
      , nombre   : 'BLANCA CECILIA ARDILA HUERTAS'
      , telefono : '4596827 /3205307727'
      , email    : 'geraldin316@hotmail.com'
      , direccion: 'CALLE 92 SUR No 14 A 57',
    }

    , demanda: {
      vencimientoPagare: '26/07/2022'
      , obligacion       : {
        A: 154048,
      }
      , capitalAdeudado        : '41.146.013.90'
      , entregaGarantiasAbogado: '15/02/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00218'
      , llaveProceso           : '11001400306420180021800'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '20/02/2018'
      , mandamientoPago        : '26/02/2018'
      , notificacion           : {
        certimail: '26/02/2018',
      },
    },
  }
  , {
    numero  : 403
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52361215
      , nombre   : 'CLAUDIA YANETH VALENCIA AYA'
      , telefono : 74881010
      , email    : 'claudia.1120@hotmail.com'
      , direccion: 'DIAGONAL 77 B No 123 A- 43 CASA 173',
    }
    , codeudor: {
      cedula   : 21046617
      , nombre   : 'BERTHA JUDITH AYA DE VALENCIA'
      , telefono : '74881010 / 3202269928'
      , direccion: 'CARRERA 89 B No 85 B-25',
    }
    , demanda: {
      vencimientoPagare: '3/8/2017'
      , obligacion       : {
        A: 141356,
      }
      , capitalAdeudado        : '27.607.878'
      , entregaGarantiasAbogado: '15/02/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018-0191'
      , llaveProceso           : '11001400304920180019100'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '20/02/2018',
    },
  }
  , {
    numero  : 404
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1013586083
      , nombre   : 'CESAR AUGUSTO PINEDA RIOS'
      , telefono : '2035780 / 3102259717'
      , email    : 'cesar.rios_30@hotmail.com'
      , direccion: 'DIAGONAL 18 B No 44-24',
    }

    , demanda: {
      vencimientoPagare: '28/08/2033'
      , obligacion       : {
        A: 167362,
      }
      , capitalAdeudado        : '18.236.088'
      , entregaGarantiasAbogado: '15/02/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00177'
      , llaveProceso           : '257544189003201800177'
      , etapaProcesal          : 'SENTENCIA'
      , fechaPresentacion      : '21/02/2018'
      , mandamientoPago        : '14/03/2018'
      , notificacion           : {
        '292': {
          resultado: '10/06/2018',
        }

        , tipo: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/03/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 405
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 79396995
      , nombre   : 'ARTURO LINCE GOMEZ'
      , telefono : 'F 4244358                CEL 31088445603'
      , email    : 'arthurlingo64@hotmail.com'
      , direccion: 'CALLE 12 A No 71 B - 60',
    }

    , demanda: {
      vencimientoPagare: '27/01/2021'
      , obligacion       : {
        A: 87823,
      }
      , capitalAdeudado        : '$ 22.592.583'
      , entregaGarantiasAbogado: '15/02/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00236'
      , llaveProceso           : '11001400302120180023600'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '22/02/2018'
      , mandamientoPago        : '01/03/20108            2/03/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '8/04/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '10/04/2018',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'PERSONAL'
        , autoNotificado: '19/04/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '01/03/20108'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 406
    , category: 'Terminados'
    , deudor  : {
      cedula  : 8510459
      , nombre  : 'SANTIAGO JAVIER SARABIA JIMENEZ'
      , telefono: 7793825

      , direccion: 'CALLE 86 A SUR No 80K-40',
    }

    , demanda: {
      vencimientoPagare: '15/10/2033'
      , obligacion       : {
        A: 112507,
      }
      , capitalAdeudado        : '12.024.877'
      , entregaGarantiasAbogado: '15/02/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00205'
      , llaveProceso           : '11001400300220180020500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '23/02/2018'
      , mandamientoPago        : '01/03/2018'
      , notificacion           : {
        '292': {
          resultado: '18/07/2018',
        }

        , tipo: 'FISICO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '01/03/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 407
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79328264
      , nombre   : 'NESTOR ALBERTO CRISTANCHO LOPEZ'
      , telefono : 'F 5266894'
      , email    : 'nescri64@hotmail.com'
      , direccion: 'CARRERA 11 No  144 - 22 APARTAMENTO 301',
    }

    , demanda: {
      vencimientoPagare: '26/01/2024'
      , obligacion       : {
        A: 3550083774
        , B: '4513082972339 / 5303714867753385',
      }
      , capitalAdeudado        : '$ 31.100.999'
      , entregaGarantiasAbogado: '16/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01164'
      , llaveProceso           : '11001400307820170116400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '27/11/2017'
      , mandamientoPago        : '1/12/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '30/01/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '30/01/2018',
        }
        , '292': {
          fechaRecibido: '20/06/2018'
          , fechaAporta  : '20/06/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '29/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '1/12/2018'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 408
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80792987
      , nombre   : 'JHON ALEXANDER BEJARANO FONSECA'
      , telefono : 3750917
      , email    : 'jhonbeja227@gmail.com'
      , direccion: 'CALLE 4 D No 39 C-22',
    }

    , demanda: {
      vencimientoPagare: '06/06/2018'
      , obligacion       : {
        A: 152654,
      }
      , capitalAdeudado        : '17.508.189'
      , entregaGarantiasAbogado: '15/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00264'
      , llaveProceso           : '11001400308120180026400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '22/02/2018'
      , mandamientoPago        : '03/04/2018'
      , notificacion           : {
        '292': {
          resultado: '11/05/2018',
        }

        , tipo: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '05/04/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 409
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 900545720
      , nombre   : 'CREAS CONSULTORES S.A.S'
      , telefono : 'F 8626344                  CEL 3107982028'
      , email    : 'andibarracosta@gmail.com'
      , direccion: 'CARRERA 50 1# 47 - 50 INT 1 APTO 101',
    }
    , codeudor: {
      cedula   : 12192291
      , nombre   : 'ANDRES ENRIQUE IBARRA ACOSTA'
      , telefono : 'F 8626344'
      , direccion: 'CALLE 56 # 17 - 03 CASA 65 NEIVA',
    }
    , demanda: {
      vencimientoPagare: '20/06/2018'
      , obligacion       : {
        A: 4550087219,
      }
      , capitalAdeudado        : '$ 11.949.471'
      , entregaGarantiasAbogado: '15/02/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00221'
      , llaveProceso           : '11001400305620180022100'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '28/02/2018'
      , mandamientoPago        : '22/03/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '18/05/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '18/05/2018',
        }
        , '292': {
          fechaAporta: '18/05/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '18/05/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/03/2018'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 410
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52304124
      , nombre   : 'JENNY LILIANA MONTOYA VILLAMIL'
      , telefono : 2048816
      , email    : 'jennymontoyav@hotmail.com'
      , direccion: 'TRANSVERSAL 4H No 31-17',
    }

    , demanda: {
      vencimientoPagare: '12/02/2018'
      , obligacion       : {
        A: 450089940,
      }
      , capitalAdeudado        : '22.835.665'
      , entregaGarantiasAbogado: '22/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00370'
      , llaveProceso           : '11001400303520180037000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '03/04/2018'
      , mandamientoPago        : '7/05/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '7/05/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 411
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1032362698
      , nombre   : 'NATALI VASQUEZ RUBIO'
      , telefono : 6307546
      , email    : 'natis2596@hotmail.com'
      , direccion: 'DIAGONAL 24 No 42-95 - HORTENSIA',
    }

    , demanda: {
      vencimientoPagare: '24/06/2034'
      , obligacion       : {
        A: 20990175542,
      }
      , capitalAdeudado        : '21.817.515'
      , entregaGarantiasAbogado: '16/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018-0365'
      , llaveProceso           : '25754418900220180036500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '26/04/2018'
      , mandamientoPago        : '18/05/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '18/05/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 412
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80896755
      , nombre   : 'FABIO NELSON PEREZ CRISTIANO'
      , telefono : 3204063623
      , email    : 'fabiop0917@hotmail.com'
      , direccion: 'CARRERA 7C- No 02-85 SUR',
    }
    , codeudor: {
      cedula   : 53122368
      , nombre   : 'MARTHA LILIANA POLOCHE AGUJA'
      , telefono : 3006354505
      , direccion: 'CALLE 4 No 4J-09 QUINTANARE',
    }
    , demanda: {
      vencimientoPagare: '28/12/2026'
      , obligacion       : {
        A: 20990147276,
      }
      , capitalAdeudado        : '19.865.454'
      , entregaGarantiasAbogado: '16/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00364'
      , llaveProceso           : '25754418900220180036400'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '26/04/2018',
    },
  }
  , {
    numero  : 413
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1018430139
      , nombre   : 'LUISA FERNANDA SALAZAR  PATARROYO'
      , telefono : 6680643
      , email    : 'luifermkt889@hotmail.com'
      , direccion: 'CARRERA 38 No 14-93 BLOQUE 9 APTO 102',
    }
    , codeudor: {
      cedula   : 79793904
      , nombre   : 'JHON  HADER OTALVARO  ROMO'
      , telefono : 4805457
      , direccion: 'CALLLE 183 No 11-55 BLQ 9 APTO 102',
    }
    , demanda: {
      vencimientoPagare: '20/04/2035'
      , obligacion       : {
        A: 20990182990,
      }
      , capitalAdeudado        : '21.470.052'
      , entregaGarantiasAbogado: '12/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00363'
      , llaveProceso           : '25754418900220180036300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '26/04/2018'
      , mandamientoPago        : '18/05/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '18/05/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 414
    , category: 'Terminados'
    , deudor  : {
      cedula   : 51712277
      , nombre   : 'ELDA YANET CORTES'
      , telefono : 'F 279786'
      , email    : 'eldayanetcortes@gmail.com'
      , direccion: 'CALLE 48 N SUR No 3-90',
    }

    , demanda: {
      vencimientoPagare: '17/07/2020 // 3/05/2020'
      , obligacion       : {
        A: 377813000000000
        , B: 45513100000000000,
      }
      , capitalAdeudado        : '$ 10.224.254'
      , entregaGarantiasAbogado: '12/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00566'
      , llaveProceso           : '11001400304420180056600'
      , etapaProcesal          : '11001400304420180056600'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '25/04/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '14/06/2018',
        }
        , '292': {
          fechaRecibido: '14/06/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '1/06/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/06/2018'
        , medidaSolicitada  : '6/09/2018',
      },
    },
  }
  , {
    numero  : 415
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1024479982
      , nombre  : 'INGRID CATHERINE TAPIAS RICO'
      , telefono: 'ictapiasr@gmail.com'
      , email   : 'CALLE 61 SUR No 20 D-60 INT11  APTO 501',
    }
    , codeudor: {
      direccion: 49996,
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        A: 5303710000000000
        , B: '33.785.911',
      }
      , capitalAdeudado: '$ 43.208'

      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'BOGOTA'
      , tipoProceso      : 'HIPOTECARIO'
      , radicado         : '2018 - 00474'
      , llaveProceso     : '11001400304320180047400'
      , etapaProcesal    : 43217
      , fechaPresentacion: '13/06/2018'

      , notificacion: {
        autoNotificado: 43264,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '17-2313',
      },
    },
  }
  , {
    numero  : 416
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79512506
      , nombre   : 'JOSE ANTONIO MONTEALEGRE HERNANDEZ'
      , telefono : 'F 2724305              CEL 3134664560'
      , email    : 'yulypgarcia.montplas@gmail.com'
      , direccion: 'CALLE 24 No 24 - 16  SUR',
    }
    , codeudor: {
      cedula   : 52730300
      , nombre   : 'YULI MARCELA PEÑA GARCIA'
      , telefono : 'CEL 3103018266'
      , direccion: 'CALLE 24 No 24-26 SUR',
    }
    , demanda: {
      vencimientoPagare: '2/02/2020'
      , obligacion       : {
        A: 2330087192
        , B: 2330087423,
      }
      , capitalAdeudado        : '$ 51.606.071'
      , entregaGarantiasAbogado: '14/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , radicado               : '2017 - 01477'
      , llaveProceso           : '11001400302020170147700'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '24/11/2017'
      , mandamientoPago        : '19/02/2018                         12/04/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '4/07/2018'
          , resultado    : 43340
          , fechaAporta  : '14/09/2018',
        }
        , '292': {
          fechaRecibido: 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '14/09/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '19/02/2018                         12/04/2018',
      },
    },
  }
  , {
    numero  : 417
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 19275068
      , nombre   : 'OSCAR HUMBERTO GOMEZ CHUCHIN'
      , telefono : 'F 2511959          CEL 3105638608'
      , email    : 'oscarmultibog@hotmail.com'
      , direccion: 'CALLE 71 A No 70 B-11',
    }

    , demanda: {
      vencimientoPagare: '2/09/2021 / 3/01/2021'
      , obligacion       : {
        A: 5740084511
        , B: 6390082501,
      }
      , capitalAdeudado        : '$ 40.942.872'
      , entregaGarantiasAbogado: '19/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 01250'
      , llaveProceso           : '11001400307120170125000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '06/12/2017'
      , mandamientoPago        : '20-02-2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '7/05/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '9/10/2018',
        }
        , '292': {
          fechaRecibido: '9/10/2018'
          , fechaAporta  : '9/10/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '20/0572019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '16/02/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 418
    , category: 'Terminados'
    , deudor  : {
      cedula   : 35521020
      , nombre   : 'AURA LETICIA GAMEZ ROJAS'
      , telefono : 6104622
      , email    : 'aurag2599@hotmail.com'
      , direccion: 'CALLE 11B- No 10-21',
    }

    , demanda: {
      obligacion: {
        A: 377817000000000
        , B: 451388000000000,
      }
      , capitalAdeudado        : '23.159.598'
      , entregaGarantiasAbogado: '12/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FACATATIVA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00246'
      , llaveProceso           : '25269400300120180024600'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '19//04/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '7/05/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 419
    , category: 'Terminados'
    , deudor  : {
      cedula  : 73133278
      , nombre  : 'ALVARO HERNAN RUIZ HERNANDEZ'
      , telefono: 'alvarohernandezruiz@yahoo.es'
      , email   : 'CALLE 1 SUR No 5A- 179 CASA 26',
    }

    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        A: 5303710000000000
        , B: '20.453.625',
      }
      , capitalAdeudado: '$ 43.211'

      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'CHIA'
      , tipoProceso      : 'SINGULAR'
      , radicado         : '2018 - 00237'
      , llaveProceso     : '25175410300120180023700'
      , etapaProcesal    : 43217
      , fechaPresentacion: '11/05/2018'

      , notificacion: {
        autoNotificado: 43231,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '0758/2018',
      },
    },
  }
  , {
    numero  : 420
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 52773230
      , nombre   : 'DIANA PATRICIA BARRETO OSMA'
      , telefono : 'F 3085025             CEL 3107706773'
      , email    : 'N / A'
      , direccion: 'CALLE 42 No 78 H - 38 SUR',
    }

    , demanda: {
      vencimientoPagare: '08/07/2020'
      , obligacion       : {
        A: '377813451010780 / 4513070410107739'
        , B: 5303710165958750,
      }
      , capitalAdeudado        : '$ 10.382.732'
      , entregaGarantiasAbogado: '01/12/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HMM PISO 1'
      , radicado               : '11001400306320170129000'
      , llaveProceso           : '11001400306320170129000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '12/12/2017'
      , mandamientoPago        : '14/12/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '22/02/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '30/05/2018',
        }
        , '292': {
          fechaRecibido: '26/03/2018'
          , fechaAporta  : '30/05/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '30/05/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/12/2017'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 421
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79837700
      , nombre   : 'ALEXANDER MUÑOZ ORTIZ'
      , telefono : 4514661
      , email    : 'alexmortiz76@yahoo.com'
      , direccion: 'DIAGONAL 2 No 79 A-45 BLOQ 2 APTO 402',
    }
    , codeudor: {
      telefono: 4514661,
    }
    , demanda: {
      obligacion: {
        A: 4099840000000000,
      }
      , capitalAdeudado        : '13.704.853'
      , entregaGarantiasAbogado: '24/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00617'
      , llaveProceso           : '11001400307520180061700'
      , etapaProcesal          : 'LIQUIDACION'
      , fechaPresentacion      : '27/04/2018'
      , mandamientoPago        : '11/05/2018'
      , notificacion           : {
        tipo: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/05/2018'
        , medidaSolicitada  : 'VEHICULO',
      },
    },
  }
  , {
    numero  : 422
    , category: 'Terminados'
    , deudor  : {
      cedula   : 41722029
      , nombre   : 'LUZ YOLANDA MUÑOZ MURCIA'
      , telefono : 'F 40390564'
      , email    : 'miyura1212@hotmail.com'
      , direccion: 'CALLE 12 C- No 71C-60 INT. 6 APTO 403',
    }

    , demanda: {
      vencimientoPagare: '03/0/82024'
      , obligacion       : {
        A: 2099120807,
      }
      , capitalAdeudado        : '$ 23.440.288'
      , entregaGarantiasAbogado: '16/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'kENNEDY'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00602'
      , llaveProceso           : '11001410307520180060200'
      , etapaProcesal          : '11001410375220180060200'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '25/04/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '31/10/2018',
        }
        , '292': {
          fechaRecibido: '4/10/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '18/06/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '31/10/2018'
        , medidaSolicitada  : '13/08/2018',
      },
    },
  }
  , {
    numero  : 423
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80059977
      , nombre   : 'ANDRES PEDRAZA GARCIA'
      , telefono : 6949499
      , email    : 'andrespedraza12933@gmail.com'
      , direccion: 'CARRER 1 ESTE No 67 A - 60 SUR  APTO 103 TORRE 7',
    }
    , codeudor: {
      cedula   : 52297401
      , nombre   : 'YUBY CLAYRE GARZON VELASQUEZ'
      , telefono : 7683537
      , direccion: 'CALLE 14 G ESTE No 76B-52SUR APTO 102',
    }
    , demanda: {
      vencimientoPagare: '30/12/2024'
      , obligacion       : {
        A: 20990125146
        , B: 377813000000000,
      }
      , capitalAdeudado        : '19.715.538'
      , entregaGarantiasAbogado: '16/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00443'
      , llaveProceso           : '11001400301920180044300'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '25/04/2018'
      , mandamientoPago        : '9/05/2018'
      , notificacion           : {
        '292': {
          resultado: 43284,
        }

        , tipo: 'RECURSO DE CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '9/05/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 424
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79742224
      , nombre   : 'JAIME LEONARDO SOSA ROODRIGUEZ'
      , telefono : 8031739
      , email    : 'leo-sosa44@hotmail.com'
      , direccion: 'CALLE 31A No 22-13 SUR',
    }

    , demanda: {
      vencimientoPagare: '18/02/82020'
      , obligacion       : {
        A: 6980085367,
      }
      , capitalAdeudado        : '18.240.978'
      , entregaGarantiasAbogado: '12/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00459'
      , llaveProceso           : '110014003015201800459'
      , etapaProcesal          : '11001400301520180045900'
      , fechaPresentacion:
        'EL 4/09/2019 SE DEVUELVE DESGLOSE CON GARANTIAS A AECSA // EL 18/03/2019 EL JUZGADO DA POR TERMINADO PROCESO POR PAGO CUOTAS EN MORA // EL 2/11/2022 SE PIDIO CERTIFICADO CON LEVANTAMIENTO DE MEDIDA CAUTELAR'
      , mandamientoPago: '4/07/2019',
    },
  }
  , {
    numero  : 425
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52498444
      , nombre   : 'SANDRA RAQUEL LOPEZ DE MESA OSES'
      , telefono : 6043134
      , email    : 'sandralopezdemesa@hotmail.com'
      , direccion: 'CARRERA 29 No 40 A-53  APTO 604',
    }

    , demanda: {
      vencimientoPagare: '24/02/2025'
      , obligacion       : {
        A: 20990126656,
      }
      , capitalAdeudado        : '27.503.283'
      , entregaGarantiasAbogado: '25/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00674'
      , llaveProceso           : '11001400307520180067400'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '8/05/2018'
      , mandamientoPago        : '23/05/2018'
      , notificacion           : {
        '292': {
          resultado: 43476,
        }

        , tipo: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/05/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 426
    , category: 'Terminados'
    , deudor  : {
      cedula   : 19395095
      , nombre   : 'FELIX  HERNANDO MONTENEGRO GARCIA'
      , telefono : 4779065
      , email    : 'hernando.22.95@hotmail.com'
      , direccion: 'CARRERA 151 C No 109A-50',
    }

    , demanda: {
      obligacion: {
        A: 'AUDIOPRESTAMO'
        , B: 37781300000000000,
      }
      , capitalAdeudado        : '13.098.176'
      , entregaGarantiasAbogado: '26/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00476'
      , llaveProceso           : '11001400306820180047600'
      , etapaProcesal          : 'SUSPENDIDO'
      , fechaPresentacion      : '8/04/2018'
      , mandamientoPago        : '17/05/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '17/05/2018',
      },
    },
  }
  , {
    numero  : 427
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 1069738339
      , nombre  : 'JUAN CAMILO CHINGATE PENAGOS'
      , telefono: 'CEL 313389449'

      , direccion:
        'VEREDA LA 22 KILOMETRO 30 (CAJICA) // VEREDA SUBIA NORTE. PARTE BAJA. FINCA EL RINCON LOTE 2 (GRANADA- CUND): VEREDA SUBIA NORTE PARTE BAJA FINCA EL RINCON LOTE 2 (GRANADA - CUND)',
    }

    , demanda: {
      vencimientoPagare: '16/01/2021'
      , obligacion       : {
        A: 12730779,
      }
      , capitalAdeudado        : '$ 21.049.112'
      , entregaGarantiasAbogado: '19/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CAJICA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2018 - 00048'
      , llaveProceso           : '25126408900220180004800'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '1/02/2018'
      , mandamientoPago        : '26/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '8/05/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '8/05/2018',
        }
        , '292': {
          fechaRecibido: '16/07/2018'
          , fechaAporta  : '3/05/2018'
          , resultado    : 'NEGATIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'EMPLAZAMIENTO'
        , autoNotificado: '5/0572019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/02/2018'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 428
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1019016622
      , nombre   : 'SERGIO LIBARDO ESPINOSA GOMEZ'
      , telefono : 6901251
      , email    : 'gioser.87@hotmail.com'
      , direccion: 'CARRERA 47 A No 118-08 OF 106',
    }

    , demanda: {
      obligacion: {
        A: 377814000000000,
      }
      , capitalAdeudado        : '21.770.748.74'
      , entregaGarantiasAbogado: '30/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00520'
      , llaveProceso           : '11001400302420180052000'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '08/05/2018'
      , mandamientoPago        : '15/06/2018'
      , medidasCautelares      : {
        fechaOrdenaMedidas: '15/06/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 429
    , category: 'Terminados'
    , deudor  : {
      cedula   : 10260455
      , nombre   : 'ARCANGEL HERNANDEZ RODRIGUEZ'
      , telefono : '7644527 /3157637045'
      , email    : 'arcangel0605@hotmail.com'
      , direccion: 'DIAGONAL 82 BIS SUR No 5 A-50 ESTE',
    }

    , demanda: {
      obligacion: {
        A: 4594250000000000,
      }
      , capitalAdeudado        : '14.054.721.06'
      , entregaGarantiasAbogado: '26/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00612'
      , llaveProceso           : '11001400306520180061200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '08/05/2018'
      , mandamientoPago        : '18/05/2018'
      , notificacion           : {
        '292': {
          resultado: 43238,
        }

        , tipo          : 'INMUEBLE'
        , autoNotificado: 2006,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '28/05/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 430
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1024517216
      , nombre   : 'JHONATAN ALEJANDRO  CUELLAR ARIAS'
      , telefono : '4596744/3112907361'
      , email    : 'alejaso1291@hotmail.com'
      , direccion: 'DIAGONAL 68 D No 70C-31',
    }
    , codeudor: {
      cedula   : 1024527755
      , nombre   : 'JESSICA ALEXANDRA SANTOS AVENDAÑO'
      , telefono : 3134216520
      , direccion: 'DIAGONAL 68D No 70C-31',
    }
    , demanda: {
      vencimientoPagare: '10/04/2028'
      , obligacion       : {
        A: 20990162905,
      }
      , capitalAdeudado        : '29.045.383.03'
      , entregaGarantiasAbogado: '27/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00404'
      , llaveProceso           : '11001410300120180040400'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '08/05/2018',
    },
  }
  , {
    numero  : 431
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1014181498
      , nombre  : 'DUVY MARIELA RODRIGUEZ ROCHA'
      , telefono: 'duvy.rodriguez@outlook.com'
      , email   : 'CARRERA 75 No 64 A- 22',
    }
    , codeudor: {
      direccion: 44609,
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        A: 5303720000000000
        , B: '15.796.908.07',
      }
      , capitalAdeudado: '$ 43.214'

      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'BOGOTA'
      , tipoProceso      : 'SINGULAR'
      , radicado         : '2018 - 00604'
      , llaveProceso     : '11001400302220180060400'
      , etapaProcesal    : 43228
      , fechaPresentacion: '7/06/2018'

      , notificacion: {
        autoNotificado: 43258,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'VEHICULO'
        , medidaSolicitada  : '2807/18',
      },
    },
  }
  , {
    numero  : 432
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52757086
      , nombre   : 'LILIA YANIRA DIAZ CARO'
      , telefono : 2791198
      , email    : 'yannisf25@hotmail.com'
      , direccion: 'CARRERA 5 N BIS No 49-31 SUR',
    }

    , demanda: {
      vencimientoPagare: '5/04/2023'
      , obligacion       : {
        A: 530091199
        , B: 377813000000000,
      }
      , capitalAdeudado        : '$ 30.053.475'
      , entregaGarantiasAbogado: '27/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00583'
      , llaveProceso           : '11001400308120180058300'

      , fechaPresentacion: 'NOTIFICACION'
      , mandamientoPago  : '9/05/2018'
      , notificacion     : {
        certimail: '15/05/2018'

        , tipo          : 43266
        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '4/07/2018'
        , medidaSolicitada  : '15/05/2018',
      },
    },
  }
  , {
    numero  : 433
    , category: 'Terminados'
    , deudor  : {
      cedula  : 3116420
      , nombre  : 'JORGE ALBERTO BELTRAN PAEZ'
      , telefono: 'jorgebepe@gmail.com'
      , email   : 'CALLE 3 No 17-36',
    }

    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '24.057.365',
      }
      , capitalAdeudado: '$ 43.237'

      , departamento: 'CUNDINAMARCA'
      , municipio   : 'ZIPAQUIRA'
      , tipoProceso : 'SINGULAR'
      , radicado    : '2018 - 00222'
      , llaveProceso: '25899400300120180022200'

      , mandamientoPago: 'NO TIENE EN CUENTA'
      , notificacion   : {
        autoNotificado: 43251,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '5/01/1903',
      },
    },
  }
  , {
    numero  : 434
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80429531
      , nombre   : 'FRANCISCO JAVIER GIL FLOREZ'
      , telefono : '7536513/3193862544'
      , email    : 'diagonal132@gmail.com'
      , direccion: 'DIAGONAL 15B No 104-45 CASA  132',
    }
    , codeudor: {
      cedula   : 52484859
      , nombre   : 'LUZ ANGELA RODRIGUEZ ROZO'
      , telefono : '4223218/3124446521'
      , direccion: 'DIAGONAL 15B No 104-45',
    }
    , demanda: {
      vencimientoPagare: '4/04/2021'
      , obligacion       : {
        A: 20990085420,
      }
      , capitalAdeudado        : '12.204.639'
      , entregaGarantiasAbogado: '15/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00999'
      , llaveProceso           : '11001400306820180099900'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '22/05/2018',
    },
  }
  , {
    numero  : 435
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1012341563
      , nombre   : 'MARIBEL REVELO QUIROGA'
      , telefono : 7383907
      , email    : 'marysqs@hotmail.com'
      , direccion: 'CALLE 62A SUR-No 73C-21 T 1 APTO 202',
    }

    , demanda: {
      vencimientoPagare: '18/08/2025'
      , obligacion       : {
        A: 20990131392,
      }
      , capitalAdeudado        : '32.124.573'
      , entregaGarantiasAbogado: '16/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00573'
      , llaveProceso           : '11001400301620180057300'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '22/05/2018',
    },
  }
  , {
    numero  : 436
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79145374
      , nombre   : 'JUAN CAMILO BAQUERO BUTTNER'
      , telefono : 3483713
      , email    : 'jcbaquerob@gmail.com'
      , direccion: 'TRANSVERSAL 2A No 67-71',
    }

    , demanda: {
      obligacion: {
        A: 5491590000000
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '38.569.581'
      , entregaGarantiasAbogado: '23/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00756'
      , llaveProceso           : '11001400306320180075600'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '31/05/2018',
    },
  }
  , {
    numero  : 437
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80162319
      , nombre   : 'JAVIER ANTONIO ZIPA SALAMANCA'
      , telefono : 'F 8060262'
      , email    : 'javierzipa83@hotmail.com'
      , direccion: 'CARRERA 79A No 13-10',
    }

    , demanda: {
      vencimientoPagare: '23/05/2021 // 15/11/2020'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: 4513070000000000,
      }
      , capitalAdeudado        : '$ 22.725.078'
      , entregaGarantiasAbogado: '29/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00212'
      , llaveProceso           : '11001400371520180021200'
      , etapaProcesal          : '11001418901520180021200'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '31/05/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '27/06/2018'
          , fechaAporta  : 43293,
        }
        , '292': {
          fechaRecibido: '16/07/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '20/06/2018'
        , fisico   : 'NO'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '10/10/2018'
        , medidaSolicitada  : '20/06/2018',
      },
    },
  }
  , {
    numero  : 438
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52132383
      , nombre   : 'LUZ DARY VELANDIA GARCIA'
      , telefono : 3973634
      , email    : 'velandialuzd@yahooo.es'
      , direccion: 'CARRERA 24 B No 31C-64',
    }

    , demanda: {
      obligacion: {
        A: 15400866488,
      }
      , capitalAdeudado        : '13.337.934'
      , entregaGarantiasAbogado: '29/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00210'
      , llaveProceso           : '11001418900620180021000'
      , etapaProcesal          : 'EXCEPCIONES'
      , fechaPresentacion      : '31/05/2018'

      , notificacion: {
        tipo          : 'PERSONAL'
        , autoNotificado: 'OK',
      },
    },
  }
  , {
    numero  : 439
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79812352
      , nombre  : 'MIGUEL ESNEYDER DEVIA CEPEDA'
      , telefono: '7803858/3123170535'

      , direccion: 'TRANSVERSAL 78 No 68A-15 SUR',
    }
    , codeudor: {
      cedula   : 39652702
      , nombre   : 'MAGDA YANETH MORA MORENO'
      , telefono : 314408
      , direccion: 'CALLLE 21 No 5-06',
    }
    , demanda: {
      vencimientoPagare: '26/06/2028'
      , obligacion       : {
        A: 20990165412,
      }
      , capitalAdeudado        : '25.527.457'
      , entregaGarantiasAbogado: '15/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00555'
      , llaveProceso           : '25899400300320180055500'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '31/05/2018',
    },
  }
  , {
    numero  : 440
    , category: 'Terminados'
    , deudor  : {
      cedula   : 30387764
      , nombre   : 'BLANCA ESTHER QUIROGA GIRALDO'
      , telefono : 3107996508
      , email    : 'quirogag8878@gmail.com'
      , direccion: 'CARRERA 13 No 13-24 OFICINA 625',
    }

    , demanda: {
      obligacion: {
        A: 1330085524,
      }
      , capitalAdeudado        : '14.670.023'
      , entregaGarantiasAbogado: '29/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00223'
      , llaveProceso           : '11001408900820180022300'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '31/05/2018',
    },
  }
  , {
    numero  : 441
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52064928
      , nombre   : 'YANETH MILLAN PRIETO'
      , telefono : '3339300/3102762216'
      , email    : 'janeth2609@hotmail.com'
      , direccion: 'CARRERA 5 No 7-40 SUR',
    }

    , demanda: {
      vencimientoPagare: '18/09/2032'
      , obligacion       : {
        A: 20990156079,
      }
      , capitalAdeudado        : '17.141.891'
      , entregaGarantiasAbogado: '23/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00609'
      , llaveProceso           : '25899408900120180060900'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '31/05/2018',
    },
  }
  , {
    numero  : 442
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80183322
      , nombre   : 'JULIAN FELIPE ECHEVERRY FORERO'
      , telefono : 'F 41277825'
      , email    : 'felipe.ef82@gmail.com'
      , direccion: 'CARRERA 80 No 7D-05 CASA 231',
    }

    , demanda: {
      vencimientoPagare: '3/01/2021 // 2/02/2021'
      , obligacion       : {
        A: 3778810000000000
        , B: 4110540000000000,
      }
      , capitalAdeudado        : '$ 18.780.239'
      , entregaGarantiasAbogado: '15/06/25018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00623'
      , llaveProceso           : '11001400307820180062300'
      , etapaProcesal          : '11001400307820180062300'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '19/06/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '2/08/2018',
        }
        , '292': {
          fechaRecibido: '2/08/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '26/06/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '2/08/2018'
        , medidaSolicitada  : '13/07/2018',
      },
    },
  }
  , {
    numero  : 443
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80424051
      , nombre   : 'DIEGO FERNANDO BENITEZ ALVARADO'
      , telefono : 3502092709
      , email    : 'dieben71@gmail.com'
      , direccion: 'CARRERA 10 No 12-32. APTO 230 TORRE 8',
    }

    , demanda: {
      obligacion: {
        A: 'AUDIOPRESTAMO'
        , B: 1740087509,
      }
      , capitalAdeudado        : '13.303.941'
      , entregaGarantiasAbogado: '8/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00784'
      , llaveProceso           : '11001400301020180078400'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '19/06/2018'

      , notificacion: {
        '292': {
          resultado: 43299,
        }

        , tipo: 'CERTIMAIL',
      }
      , medidasCautelares: {
        medidaSolicitada: 'VEHICULO',
      },
    },
  }
  , {
    numero  : 444
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79562532
      , nombre  : 'PABLO CESAR SOACHA MORALES'
      , telefono: 'paceso@latinmail.com'
      , email   : 'CALLE 34 No 34C- 38 SUR',
    }

    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        A: 377816000000000
        , B: '36.820.559',
      }
      , capitalAdeudado: '8/06/208'

      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'BOGOTA'
      , tipoProceso      : 'HIPOTECARIO'
      , radicado         : '2018 - 00896'
      , llaveProceso     : '11001400304020180089600'
      , etapaProcesal    : 43270
      , fechaPresentacion: '26/06/2018'
      , mandamientoPago  : 'FISICO'
      , notificacion     : {
        autoNotificado: 43277,
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '17/12/1909',
      },
    },
  }
  , {
    numero  : 445
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79978846
      , nombre   : 'JUAN CARLOS GARZON BEJARANO'
      , telefono : 'F 3654986          CEL 3212282328'
      , email    : 'juangarzon21@hotmail.com'
      , direccion: 'CARRERA 10BIS B ESTE No 63-44 SUR',
    }

    , demanda: {
      vencimientoPagare: '3/07/2028'
      , obligacion       : {
        A: 20990165615,
      }
      , capitalAdeudado        : '$ 29.143.861'
      , entregaGarantiasAbogado: '14/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00572'
      , llaveProceso           : '25754400300120180057200'
      , etapaProcesal          : '25754418900120180057200'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '19/06/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '28/07/2018',
        }
        , '292': {
          fechaRecibido: '29/11/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '18/07/2018'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/01/2019'
        , medidaSolicitada  : '26/07/2018',
      },
    },
  }
  , {
    numero  : 446
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79725365
      , nombre  : 'RICARDO CUSPOCA'
      , telefono: 'mary07-69@hotmail.com'
      , email   : 'CALLE 36 No 69-56 SUR. B CARVAJAL',
    }
    , codeudor: {
      direccion: 45523,
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '16.392.987.23',
      }
      , capitalAdeudado: '$ 43.265'

      , departamento: 'CUNDINAMARCA'
      , municipio   : 'SOACHA'
      , tipoProceso : 'HIPOTECARIO'
      , radicado    : '2018 - 00573'
      , llaveProceso: '25899418900120180057300'

      , notificacion: {
        '291': {
          resultado: '17/09/2018',
        },
      },
    },
  }
  , {
    numero  : 447
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79698506
      , nombre  : 'CARLOS ANTONIO PACHECO TORRES'
      , telefono: 79698506

      , direccion: 'CARRERA 80 BIS A No 70A-15',
    }

    , demanda: {
      vencimientoPagare: '27/10/2027'
      , obligacion       : {
        A: 1010082679,
      }
      , capitalAdeudado        : '19.260.500.00'
      , entregaGarantiasAbogado: '21/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00711'
      , llaveProceso           : '11001400300520180071100'
      , etapaProcesal          : 'ADMISION',
    },
  }
  , {
    numero  : 448
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79342337
      , nombre   : 'LUIS ALFREDO NIÑO GARCIA'
      , telefono : 'F 8134170'
      , email    : 'ngluisalfredo@gmail.com'
      , direccion: 'CALLE 113 SUR No 3-30 ESTE',
    }

    , demanda: {
      vencimientoPagare: '15/01/2021'
      , obligacion       : {
        A: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 14.744.174'
      , entregaGarantiasAbogado: '21/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00810'
      , llaveProceso           : '11001400301220180081000'
      , etapaProcesal          : '11001400301220180081000'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '26/0772018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '21/08/2018',
        }
        , '292': {
          fechaRecibido: '21/08/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '25/07/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '21/08/2018'
        , medidaSolicitada  : '22/08/2018',
      },
    },
  }
  , {
    numero  : 449
    , category: 'Terminados'
    , deudor  : {
      cedula  : 4271429
      , nombre  : 'TULIO ERNESTO TELLEZ ROJAS'
      , telefono: 'F 7510457                       CEL 3204265908'

      , direccion: 'DIAGONAL 85 No 85A-22',
    }

    , demanda: {
      vencimientoPagare: '15/11/2020 // 17/11/2020'
      , obligacion       : {
        A: 'AUIDIOPRESTAMO'
        , B: 5306970000000000,
      }
      , capitalAdeudado        : '$ 14.170.111'
      , entregaGarantiasAbogado: '19/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00705'
      , llaveProceso           : '11001400301720180070500'
      , etapaProcesal          : '11001400301720180070500'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '26/06/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '28/02/2019',
        }
        , '292': {
          fechaRecibido: '14/05/2019'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '26/10/2018'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/05/2019'
        , medidaSolicitada  : '24/01/2019',
      },
    },
  }
  , {
    numero  : 450
    , category: 'Terminados'
    , deudor  : {
      cedula   : 53133179
      , nombre   : 'KELLY YOHANNA MURCIA DUCON'
      , telefono : 7192579
      , email    : 'kellyohamd@hotmail.com'
      , direccion: 'CALLE 63 SUR No 78 J-38 TORRE 4 APTO 603',
    }

    , demanda: {
      vencimientoPagare: '22/01/2021'
      , obligacion       : {
        A: 20990160362,
      }
      , capitalAdeudado        : '21.550.202.58'
      , entregaGarantiasAbogado: '19/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00647'
      , llaveProceso           : '11001400307820180064700'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '26/06/2018'
      , mandamientoPago        : '04/07/2018',
    },
  }
  , {
    numero  : 451
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1032389993
      , nombre   : 'JOSE JEISSON GALINDO CARRILLO'
      , telefono : '7163566/3209393337'
      , email    : 'jeisongc18@hotmail.com'
      , direccion: 'CALLE4 48B SUR No 72 M-21',
    }

    , demanda: {
      obligacion: {
        A: 377813000000000
        , B: 4513070000000000,
      }
      , capitalAdeudado        : '$ 10.691.310'
      , entregaGarantiasAbogado: '28/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00711'
      , llaveProceso           : '11001400305620180071100'

      , fechaPresentacion: 'LIQUIDACION'
      , mandamientoPago  : '6/07/2018'
      , notificacion     : {
        fisico: 'OK',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/09/2018',
      },
    },
  }
  , {
    numero  : 452
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 25126734
      , nombre   : 'MARIA MARIN DE OROZCO'
      , telefono : 'F 4412100           CEL 3124885346'
      , email    : 'mauriciosamu1128@gmail.com'
      , direccion: 'CARRERA 103 A  No 77D-22 MOLINOS- BOGOTA',
    }

    , demanda: {
      vencimientoPagare: '07/03/2020'
      , obligacion       : {
        A: 1740087269,
      }
      , capitalAdeudado        : '$ 22.244.760'
      , entregaGarantiasAbogado: '29/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00090'
      , llaveProceso           : '11001400305920180009000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '05/02/2018'
      , mandamientoPago        : '26/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '20/06/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '20/06/2018',
        }
        , '292': {
          fechaRecibido: '10/08/2018'
          , fechaAporta  : '13/08/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '10/09/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/02/2018'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 453
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79892208
      , nombre   : 'RICARDO RUEDA MELO'
      , telefono : 8297714
      , email    : 'ricardomelorr77@hotmail.com'
      , direccion: 'CARRERA 7 A No 5-22 MANZANA A CASA 3A',
    }

    , demanda: {
      obligacion: {
        A: 5303730000000000,
      }
      , capitalAdeudado        : '11.080.107'
      , entregaGarantiasAbogado: '26/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUNZA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00841'
      , llaveProceso           : '25286400300120180084100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '3/07/2018'
      , mandamientoPago        : '23/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 43417,
        }

        , certimail: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/10/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 454
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80089235
      , nombre   : 'NICOLAS ERNESTO COCOMA ARCINIEGAS'
      , telefono : 'F 2863225                     CEL 3114473402'
      , email    : 'cocomarnico@gmail.com'
      , direccion: 'CALLE 151 No 14A-32 APTO 10',
    }

    , demanda: {
      vencimientoPagare: '4/02/2021'
      , obligacion       : {
        A: 4594250000000000
        , B: 5303710000000000,
      }
      , capitalAdeudado        : '$ 15.580.021'
      , entregaGarantiasAbogado: '26/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00673'
      , llaveProceso           : '11001400308420180067300'
      , etapaProcesal          : '11001400308420180067300'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '29/06/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '28/09/2018',
        }
        , '292': {
          fechaRecibido: '28/09/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '13/08/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '28/09/2018'
        , medidaSolicitada  : '13/08/2018',
      },
    },
  }
  , {
    numero  : 455
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52434815
      , nombre   : 'YENNY MARCELA GOMEZ OLARTE'
      , telefono : 18109227
      , email    : 'yemargol@yahoo.es'
      , direccion: 'CALLE 43 SUR No 51F-23 PISO 2',
    }

    , demanda: {
      obligacion: {
        A: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '14.997.448'
      , entregaGarantiasAbogado: '29/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00835'
      , llaveProceso           : '11001400303820180083500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '6/07/2018'
      , mandamientoPago        : '2/08/2018'
      , notificacion           : {
        certimail: 'X',
      },
    },
  }
  , {
    numero  : 456
    , category: 'Terminados'
    , deudor  : {
      cedula  : 26407097
      , nombre  : 'ANA LUCIA YAÑEZ VARGAS (FALLECIDA)'
      , telefono: 'F 6407097'

      , direccion: 'CALLE  57B BIS No 99B-64 SUR BOSA SANTA FE',
    }

    , demanda: {
      vencimientoPagare: '29/01/2021'
      , obligacion       : {
        A: 10044000104,
      }
      , capitalAdeudado        : '$ 24.310.470'
      , entregaGarantiasAbogado: '29/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'KENNEDY'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 01121'
      , llaveProceso           : '11001410375120180112100'
      , etapaProcesal          : '11001410375120180112100'
      , fechaPresentacion      : 'PENDIENTE CURADOR AD LITEM'
      , mandamientoPago        : '6/07/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '9/10/2018',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '13/09/2018'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '09/10/2018'
        , medidaSolicitada  : '25/09/2018',
      },
    },
  }
  , {
    numero  : 457
    , category: 'Terminados'
    , deudor  : {
      cedula   : 900237555
      , nombre   : 'SOLINCON LIMITADA'
      , telefono : '7495406/31088812879'
      , email    : 'solinconltda@yahoo.es'
      , direccion: 'CARRERA 58 No 15-54 PISO 2',
    }
    , codeudor: {
      cedula   : '12198722   // 79858717'
      , nombre   : 'OSCAR JAVIER PARDO MORENO // ALUEN DAVID RONCANCIO'
      , telefono : '45840580  //7495406'
      , direccion: 'CARRERA 70 A No 4-544 APTO 201',
    }
    , demanda: {
      vencimientoPagare: '26/01/2019'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: '460091173/ 460090745',
      }
      , capitalAdeudado        : '24.765.475.00'
      , entregaGarantiasAbogado: '9/07/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00872'
      , llaveProceso           : '11001400307920180087200'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '18/07/2018',
    },
  }
  , {
    numero  : 458
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 52271112
      , nombre   : 'SANDRA PATRICIA BELTRAN OVIEDO'
      , telefono : 'F 6607900'
      , email    : 'saraja.7@hotmail.com'
      , direccion: 'CARRERA 101 No 70 A-14 INTERIOR 1 APARTAMENTO 408',
    }

    , demanda: {
      vencimientoPagare: '15/0/2020'
      , obligacion       : {
        A: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 17.502.203'
      , entregaGarantiasAbogado: '29/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00111'
      , llaveProceso           : '11001400303720180011100'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '05/02/2018'
      , mandamientoPago        : '26/02/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '13/06/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '30/05/2018',
        }
        , '292': {
          fechaAporta: '30/05/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '04/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/02/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 459
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79857627
      , nombre   : 'CESAR ARMANDO VANEGAS'
      , telefono : 3108121876
      , email    : 'cesarvanegas1425@gmail.com'
      , direccion: 'CALLE 131  No 109-13',
    }

    , demanda: {
      vencimientoPagare: '30/06/2024'
      , obligacion       : {
        A: 5470085449,
      }
      , capitalAdeudado        : '32.492.443.00'
      , entregaGarantiasAbogado: '16/07/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00945'
      , llaveProceso           : '11001400305320180094500'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '23/07/2018'
      , mandamientoPago        : '23/08/2018',
    },
  }
  , {
    numero  : 460
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79424825
      , nombre   : 'JORGE ABDOLONIO GUERRERO HERNANDEZ'
      , telefono : 'kathepiti@hotmail.com'
      , email    : 'DIAGONAL 31 No 24-63 SUR'
      , direccion: 52205842,
    }
    , codeudor: {
      cedula   : 'CLAUDIA JASMIN GOMEZ GUERRERO'
      , nombre   : 2028628
      , telefono : 'DIAGONAL 31 No 24-63  SUR'
      , direccion: 43168,
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '16.399.509.25',
      }
      , capitalAdeudado: '9/07/25018'

      , departamento : 'CUNDINAMARCA'
      , municipio    : 'BOGOTA'
      , tipoProceso  : 'HIPOTECARIO'
      , radicado     : '2019 - 00409'
      , llaveProceso : '11001400306620190040900'
      , etapaProcesal: 43294,
    },
  }
  , {
    numero  : 461
    , category: 'Terminados'
    , deudor  : {
      cedula   : 93288875
      , nombre   : 'JOSE ANTONIO FLOREZ OVIEDO'
      , telefono : 'F 6202859'
      , email    : 'joseaflorez@hotmail.com'
      , direccion: 'CALLLE 147 No 17-60. INT 5 APTO 402',
    }

    , demanda: {
      vencimientoPagare: '17/03/2021'
      , obligacion       : {
        A: 6980086687,
      }
      , capitalAdeudado        : '$ 22.458.995'
      , entregaGarantiasAbogado: '10/07/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00959'
      , llaveProceso           : '11001400303220180095900'
      , etapaProcesal          : '11001400303220180095900'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '18/07/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '28/02/2019',
        }
        , '292': {
          fechaRecibido: '28/02/2019'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '23/07/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '28/02/2019'
        , medidaSolicitada  : '27/07/2018',
      },
    },
  }
  , {
    numero  : 462
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80755973
      , nombre   : 'YAMID GELVES CACERES'
      , telefono : 'F 7279254                       CEL 3114915425'
      , email    : 'yamid11@hotmail.es'
      , direccion: 'CARRERA 87 No 69-165',
    }

    , demanda: {
      vencimientoPagare: '4/07/2043'
      , obligacion       : {
        A: 20990165644,
      }
      , capitalAdeudado        : '$ 21.997.013'
      , entregaGarantiasAbogado: '6/07/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00700'
      , llaveProceso           : '25754418900120180070000'
      , etapaProcesal          : '25754418900120180070000'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '12/07/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '28/02/2019',
        }
        , '292': {
          fechaRecibido: '28/02/2019'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '1/08/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/11/2018'
        , medidaSolicitada  : '9/08/2018',
      },
    },
  }
  , {
    numero  : 463
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 52883958
      , nombre   : 'LEIDY YANETH VIDAL RODRIGUEZ'
      , telefono : 'F 7114516'
      , email    : 'leidyyaneth.lyv@gmail.com'
      , direccion: 'DIAGONAL 2 No 21 B-20',
    }

    , demanda: {
      vencimientoPagare: '4/02/2021 // 16/02/2021'
      , obligacion       : {
        A: 'AMERICAN 0377814037749057'
        , B: 'VISA 4513083943843365 // MASTER 5303729958258417',
      }
      , capitalAdeudado        : '$ 24.501.535'
      , entregaGarantiasAbogado: '5/07/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00656'
      , llaveProceso           : '11001418901420190065600'
      , etapaProcesal          : 'CONTESTACION DEMANDA'
      , fechaPresentacion      : '12/07/2018'
      , mandamientoPago        : '7/05/2019'
      , notificacion           : {
        '291': {
          fechaRecibido: '28/09/2019'
          , resultado    : 'NEGATIVO'
          , fechaAporta  : '28/09/2019',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'SI'
        , tipo          : 'CERTIMAIL Y CORREO'
        , autoNotificado: '29/01/2020',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '14/05/2019'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 464
    , category: 'Terminados'
    , deudor  : {
      cedula   : 51944991
      , nombre   : 'RICARDO ARMANDO CELIS ANGEL'
      , telefono : 'maria.elizabeth2903@hotmail.co'
      , email    : 'TRANSVERSAL 4B No 3-75   CASA 44'
      , direccion: 51944991,
    }
    , codeudor: {
      cedula   : 'MARIA ELIZABETH GAVIRIA OSPINA'
      , nombre   : 3632557
      , telefono : 'TRANSVERSAL 48 No 3-75 MANZAN 5 CASA 44'
      , direccion: 45689,
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '19.080.628.51',
      }
      , capitalAdeudado: '$ 43.293'

      , departamento: 'CUNDINAMARCA'
      , municipio   : 'SOACHA'
      , tipoProceso : 'HIPOTECARIO'
      , radicado    : '2018 - 00664'
      , llaveProceso: '25754418900220180066400'

      , fechaPresentacion: '22/08/2018 EN CORRECCION'
      , mandamientoPago  : 'FALLA'
      , notificacion     : {
        certimail: 'X',
      },
    },
  }
  , {
    numero  : 465
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79789409
      , nombre  : 'GIOVANNY DURAN ANTONIO'
      , telefono: 2000101

      , direccion: 'CALLE 105 SUR No 2-22 ESTE',
    }

    , demanda: {
      vencimientoPagare: '2/03/2027'
      , obligacion       : {
        A: 209900000000
        , B: 377816000000000,
      }
      , capitalAdeudado        : '25.303.711'
      , entregaGarantiasAbogado: '29/07/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00854'
      , llaveProceso           : '11001400307720180085400'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '31/07/2018',
    },
  }
  , {
    numero  : 466
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 53160094
      , nombre   : 'DARLEY JULIED PAEZ HIGUERA'
      , telefono : 'F 14933266               CEL 3115754578'
      , email    : 'djpaez5@hotmail.com'
      , direccion: 'CALLE 130 No 126-96 INTERIOR 16 APARTAMENTO 302',
    }

    , demanda: {
      vencimientoPagare: '3/05/2020 // 17/04/2020'
      , obligacion       : {
        A: '37781415851035/'
        , B: '4099830008406922 / 5303710339142355',
      }
      , capitalAdeudado        : '$ 14.270.897'
      , entregaGarantiasAbogado: '29/01/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00117'
      , llaveProceso           : '11001400305220180011700'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '05/02/2018'
      , mandamientoPago        : '29/05/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '6/08/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '6/08/2018',
        }
        , '292': {
          fechaRecibido: '6/08/2018'
          , fechaAporta  : '12/10/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '12/10/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '29/05/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 467
    , category: 'Terminados'
    , deudor  : {
      cedula  : 79938802
      , nombre  : 'MANUEL SANTIAGO CORREAL ZUÑIGA'
      , telefono: 'santiagocorreal@hotmail.com'
      , email   : 'CARRERA 94 A No 18-14',
    }

    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        A: 5303720000000000
        , B: '19.774.658',
      }

      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00832'
      , llaveProceso           : '11001400301720180083200'
      , etapaProcesal          : '37/0/2018'
      , fechaPresentacion      : '27/09/2018 EN CORRECCION',
    },
  }
  , {
    numero  : 468
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79719969
      , nombre   : 'CARLOS EDUARDO NARANJO PIÑEROS'
      , telefono : 'F 2400591                       CEL 3102438242'
      , email    : 'cenp11@hotmail.com'
      , direccion: 'CALLE 63 BIS No 69 a-29',
    }

    , demanda: {
      vencimientoPagare: '8/06/2020'
      , obligacion       : {
        A: 3880083739
        , B: 377813000000000,
      }
      , capitalAdeudado        : '$ 16.881.706'
      , entregaGarantiasAbogado: '3/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00384'
      , llaveProceso           : '11001408900420180038400'
      , etapaProcesal          : '11001418900420180038400'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '9/08/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '6/11/2018',
        }
        , '292': {
          fechaRecibido: '25/02/2019'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '3/09/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/02/2019'
        , medidaSolicitada  : '3/0972018',
      },
    },
  }
  , {
    numero  : 469
    , category: 'Terminados'
    , deudor  : {
      cedula  : 46667409
      , nombre  : 'LUZ MYRIAM VALDERRAMA TUTA'
      , telefono: '8117033 /3123178629'

      , direccion: 'CALLE 43 No 80F-20',
    }

    , demanda: {
      vencimientoPagare: '15/11/2022'
      , obligacion       : {
        A: 21581018168,
      }
      , capitalAdeudado        : '14.770.792'
      , entregaGarantiasAbogado: '1/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2017 - 00922'
      , llaveProceso           : '11001400307020180092200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '9/08/2018'
      , mandamientoPago        : '21/09/2018',
    },
  }
  , {
    numero  : 470
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52711938
      , nombre  : 'ELIANA JANNETH LOZANO ARTURO'
      , telefono: 'eliananhtlozano@hotmail.com'
      , email   : 'TRANSVERSAL 2A No 74B-62 SUR',
    }
    , codeudor: {
      direccion: '2/4/2032',
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '21.955.632.15',
      }
      , capitalAdeudado: '26/07/2018'

      , departamento     : 'CUNDINAMARCA'
      , municipio        : 'SOACHA'
      , tipoProceso      : 'HIPOTECARIO'
      , radicado         : '2018 - 00841'
      , llaveProceso     : '25754418900320180084100'
      , etapaProcesal    : '09/08/2018'
      , fechaPresentacion: '7/09/2018'
      , mandamientoPago  : 'X'
      , notificacion     : {
        '291': {
          resultado: '8/10/2018',
        }
        , '292': {
          fechaAporta: 43381,
        }

        , fisico: '17/09/2018 ENVIO 291',
      },
    },
  }
  , {
    numero  : 471
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80742720
      , nombre   : 'ADRIANA MIREYA AGUILAR'
      , telefono : '7608072 / 3166997083'
      , email    : 'nanaleo24@hotmail.com'
      , direccion: 'CARRERA 13 BIS No 47 SUR- 32',
    }
    , codeudor: {
      cedula   : 52742707
      , nombre   : 'ADRIANA MIREYA AGUILAR'
      , telefono : 3166997083
      , direccion: 'TRANSVERSAL 16 A-BIS- No 46-32 SUR',
    }
    , demanda: {
      vencimientoPagare: '15/06/2022'
      , obligacion       : {
        A: 20990097950,
      }
      , capitalAdeudado        : '12.555.416.18'
      , entregaGarantiasAbogado: '26 07/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00712'
      , llaveProceso           : '1100140030152018007100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '09/08/2018'
      , mandamientoPago        : '17/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 43412,
        }

        , certimail: 'CERTIMAIL',
      },
    },
  }
  , {
    numero  : 472
    , category: 'Terminados'
    , deudor  : {
      cedula   : 91250936
      , nombre   : 'SERGIO ESPINEL CORREAL'
      , telefono : 6254528
      , email    : 'sergioespinel5@gmail.com'
      , direccion: 'CARRERA 7 D No 151-40 APTO 101',
    }

    , demanda: {
      vencimientoPagare: '13/03/2022'
      , obligacion       : {
        A: 2010085214
        , B: 3778150000000,
      }
      , capitalAdeudado        : '15.720.013.94'
      , entregaGarantiasAbogado: '03/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00389'
      , llaveProceso           : '11001418900920180038900'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '09/08/2018'
      , mandamientoPago        : '25/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 43417,
        }

        , certimail: 'CERTIMAIL',
      },
    },
  }
  , {
    numero  : 473
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52725153
      , nombre  : 'SANDRA MILENA VEGA AVILA'
      , telefono: 'protegeservicios@hotmail.com'
      , email   : 'TRANSVERSAL 2 ESTE No 32B-80 SUR',
    }

    , demanda: {
      departamento : 'CUNDINAMARCA'
      , municipio    : 'SOACHA'
      , tipoProceso  : 'HIPOTECARIO'
      , radicado     : '2018 - 00855'
      , llaveProceso : '25754418900320180085500'
      , etapaProcesal: '15/08/2018'

      , mandamientoPago: 'X'
      , notificacion   : {
        '292': {
          fechaAporta: '08/10/2018',
        }

        , fisico: '30/10/2018',
      },
    },
  }
  , {
    numero  : 474
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52788376
      , nombre   : 'NADIA KATERINE MORENO CAMACHO'
      , telefono : '4383117 / 3144765126'
      , email    : 'katiusaka79@gmail.com'
      , direccion: 'TRANSVERSAL 83 A No 73-10   ALMERIA',
    }

    , demanda: {
      vencimientoPagare: '04/01/2030'
      , obligacion       : {
        A: 20990125162,
      }
      , capitalAdeudado        : '23.110.934.37'
      , entregaGarantiasAbogado: '15/08/208'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 01271'
      , llaveProceso           : '11001418903220180127100'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '10/09/2018',
    },
  }
  , {
    numero  : 475
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 4281808
      , nombre   : 'JOSE LIBRANDO CANDELA MUNEVAR'
      , telefono : 'F 7113967'
      , email    : 'eedibrando600@hotmail.com'
      , direccion: 'CALLE 1 A No 13-30  SOACHA',
    }

    , demanda: {
      vencimientoPagare: '03/08//2019'
      , obligacion       : {
        A: 1000090987,
      }
      , capitalAdeudado        : '$ 39.146.947'
      , entregaGarantiasAbogado: '15/02/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00113'
      , llaveProceso           : '25754408900220180011300'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '22/02/2018'
      , mandamientoPago        : '22/03/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '19/06/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '18/05/2018',
        }
        , '292': {
          fechaRecibido: '19/06/2018'
          , fechaAporta  : '18/05/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '7/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '02/04/2018'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 476
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1081395456
      , nombre  : 'ARNULFO PASTES DAZA'
      , telefono: 'cerogube.1973@yahoo.com'
      , email   : 'CARRERA 24B No 44-24',
    }

    , demanda: {
      obligacion: {
        B: '28.251.567.19',
      }
      , capitalAdeudado: '21/08/2018'

      , departamento : 'CUNDINAMARCA'
      , municipio    : 'BOGOTA'
      , tipoProceso  : 'HIPOTECARIA'
      , radicado     : 'O'
      , llaveProceso : '11001418901220180064200'
      , etapaProcesal: '05/09/2018',
    },
  }
  , {
    numero  : 477
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79568543
      , nombre   : 'ADOLFO  LEON DAZA FERNANDEZ'
      , telefono : 'F 7038787'
      , email    : 'adolfo.daza@gmail.com'
      , direccion: 'CALLE 60 No 38-26 APTO 301',
    }

    , demanda: {
      vencimientoPagare: '15/08/2020'
      , obligacion       : {
        A: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 14.534.881'
      , entregaGarantiasAbogado: '21/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00475'
      , llaveProceso           : '11001400300420180047500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '25/04/2018'
      , mandamientoPago        : '8/05/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '13/06/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '13/06/2018',
        }
        , '292': {
          fechaAporta: '13/06/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '12/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '8/05/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 478
    , category: 'Terminados'
    , deudor  : {
      cedula   : 3199064
      , nombre   : 'FABIO HERNANDO PASTOR PASTOR'
      , telefono : '8646896 / 3202340560'
      , email    : 'juristenjo@hotmail.com'
      , direccion: 'CARRERA 4  No  1F-52  TENJO',
    }
    , codeudor: {
      cedula   : 19360879
      , nombre   : 'LEONARDO AUGUSTO CAMACHO GONZALEZ'
      , telefono : '8830921 / 3202785286'
      , direccion: 'CALLE 4 A No 1-46 CASA 43',
    }
    , demanda: {
      vencimientoPagare: '13/12/2019'
      , obligacion       : {
        A: '3450084783 / 3450084855'
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '16.147.359.00'
      , entregaGarantiasAbogado: '31/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'TENJO'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00335'
      , llaveProceso           : '25799418900120180033500'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '11/09/2018',
    },
  }
  , {
    numero  : 479
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39809183
      , nombre   : 'TANIA CONSUELO BOTIA CORREA'
      , telefono : 5099143
      , email    : 'tani_botia@hotmail.com'
      , direccion: 'CALLE 8 No 0-105  TABIO',
    }

    , demanda: {
      obligacion: {
        A: 4594250000000000
        , B: 5303720000000000,
      }
      , capitalAdeudado        : '12.821.536.32'
      , entregaGarantiasAbogado: '23/08/*2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'TABIO'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00171'
      , llaveProceso           : '25785418900120180017100'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '6/09/2018'
      , mandamientoPago        : '22/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '13/11/2018'
          , resultado    : 'FALLA',
        }

        , certimail: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/10/2018'
        , medidaSolicitada  : 'INMUEBLE',
      },
    },
  }
  , {
    numero  : 480
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 39575032
      , nombre   : 'ADRIANA VANEGAS PEÑA'
      , telefono : 'CEL 3152573448'
      , email    : 'adriana.0806@hotmail.com'
      , direccion: 'CARRERA 14 No 22-10  APARTAMENTO  202 GIRARDOT',
    }

    , demanda: {
      vencimientoPagare: '15/04/2021 // 6/04/2021'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: 5306960687119070,
      }
      , capitalAdeudado        : '$ 17.217.066'
      , entregaGarantiasAbogado: '23/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'GIRARDOT'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2021 - 00539'
      , llaveProceso           : '25307400300320210053900'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '13/09/2018'
      , mandamientoPago        : '27/09/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '23/0772019'
          , resultado    : 'NEGATIVO'
          , fechaAporta  : '23/0772019',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail: 'NO'
        , fisico   : 'SI'
        , tipo     : 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '18/10/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 481
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80019013
      , nombre   : 'WILLINTONG MARIO  YARURO PEÑARANDA'
      , telefono : '5731671 /  3144195480'
      , email    : 'willi.1977@hotmail.com'
      , direccion: 'CALLE 26 SUR No 95A-49 BL 9 APTO 102',
    }

    , demanda: {
      obligacion: {
        A: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '12.768.627.00'
      , entregaGarantiasAbogado: '03/9/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'kENNEDY'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00276'
      , llaveProceso           : '11001410375120190027600'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '13/09/2018'
      , mandamientoPago        : '27/09/2018'

      , medidasCautelares: {
        fechaOrdenaMedidas: '27/09/2018',
      },
    },
  }
  , {
    numero  : 482
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52380535
      , nombre   : 'CLAUDIA JANETH CORTES ROSAS'
      , telefono : 4138037
      , email    : 'ccortes3500@gmail.com'
      , direccion: 'CARRERA 88D No 6D-27 TORRE 6 APTO 618',
    }
    , codeudor: {
      cedula  : 80441668
      , nombre  : 'OSCAR CASTIBLANCO NIÑO'
      , telefono: 3568112,
    }
    , demanda: {
      obligacion: {
        A: 20990114419,
      }
      , capitalAdeudado        : '35.321.033.75'
      , entregaGarantiasAbogado: '22/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00936'
      , llaveProceso           : '11001400307120180093600'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '13/09/2018'
      , mandamientoPago        : '08/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '29/11/2018',
        }

        , certimail: 'CERTIMAIL',
      },
    },
  }
  , {
    numero  : 483
    , category: 'Terminados'
    , deudor  : {
      cedula  : 19459237
      , nombre  : 'WILSON RICARDO ESCOBAR ESCOBAR'
      , telefono: 7975211

      , direccion: 'CALLE 71 A No 69A-11 APTO  301',
    }

    , demanda: {
      vencimientoPagare: '21/21/2021'
      , obligacion       : {
        A: 5860083295,
      }
      , capitalAdeudado        : '14.134.623.00'
      , entregaGarantiasAbogado: '3/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BARRIOS UNIDOS'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 01370'
      , llaveProceso           : '11001418903220180137000'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '13/09/2018',
    },
  }
  , {
    numero  : 484
    , category: 'Terminados'
    , deudor  : {
      cedula  : 30339083
      , nombre  : 'JENNY  ANDREA AVILA GARZON'
      , telefono: 'F 6690738'

      , direccion: 'CARRERA 7A No  2-94 SUR',
    }
    , codeudor: {
      cedula   : 14277736
      , nombre   : 'NELSON MENDEZ VERJAN'
      , telefono : 'F 2000631'
      , direccion: 'CALLE 68 C No 2-04 SUR ESTE',
    }
    , demanda: {
      vencimientoPagare: '21/11/2032'
      , obligacion       : {
        A: 20990157739,
      }
      , capitalAdeudado        : '$ 26.503.795'
      , entregaGarantiasAbogado: '6/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 - 00270'
      , llaveProceso           : '25754418900320190027000'
      , etapaProcesal          : '25754418900320190027000'
      , fechaPresentacion      : 'NOTIFICACIÓN'
      , mandamientoPago        : '18/09/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '05/0972019',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '10/0572019'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        medidaSolicitada: '17/05/2019',
      },
    },
  }
  , {
    numero  : 485
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52115085
      , nombre   : 'DIANA MARGARITA BUSTOS BALLEN'
      , telefono : '43468511 / 3002667595'
      , email    : 'margobus2003@yahoo.com'
      , direccion: 'CALLE 75 A No 110C-17',
    }

    , demanda: {
      obligacion: {
        A: 'AUDIOPRETAMO / 377815771894801'
        , B: 4513070000000000,
      }
      , capitalAdeudado        : '16.492.041.34'
      , entregaGarantiasAbogado: '3/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00761'
      , llaveProceso           : '11001418900820180076100'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '18/09/2018',
    },
  }
  , {
    numero  : 486
    , category: 'Terminados'
    , deudor  : {
      cedula   : 40776578
      , nombre   : 'SANDRA PATRICIA LONDOÑO MURCIA'
      , telefono : 3609077
      , email    : 'salonmur@hotmail.com'
      , direccion: 'CARRERA 26B No 28-30  SUR INT 2',
    }

    , demanda: {
      obligacion: {
        A: 2330066914,
      }
      , capitalAdeudado        : '12.827.556.00'
      , entregaGarantiasAbogado: '10/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00210'
      , llaveProceso           : '11001418900520180021000'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '18/09/2018',
    },
  }
  , {
    numero  : 487
    , category: 'Terminados'
    , deudor  : {
      cedula  : 80473211
      , nombre  : 'GABRIEL MENDOZA MORINELLY'
      , telefono: 'morinelly@gmail.com'
      , email   : 'CARRERA 102 B No 151-15 TORRE 2  APTO 1309',
    }

    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        A: 4513090000000000
        , B: '12.028.842.57',
      }
      , capitalAdeudado        : '12/09/2018'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00789'
      , llaveProceso           : '11001400301420180078900'
      , etapaProcesal          : '20/09/2018'
      , fechaPresentacion      : '02/10/2018'
      , mandamientoPago        : 'CERTIMAIL'
      , notificacion           : {
        '292': {
          fechaAporta: '|',
        },
      },
    },
  }
  , {
    numero  : 488
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52837807
      , nombre  : 'SANDRA MILENA MORENO CAMPUZANO'
      , telefono: 'angel428041@gmail.com'
      , email   : 'CARRERA 69J No 63A- 49',
    }
    , codeudor: {
      direccion: '22/09/2024',
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '25.547.970.61',
      }
      , capitalAdeudado        : '12/09/2018'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00834'
      , llaveProceso           : '11001418901020180083400'
      , etapaProcesal          : '20/09/2018',
    },
  }
  , {
    numero  : 489
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80257279
      , nombre   : 'ORLANDO SILVA CALDERON'
      , telefono : 7183245
      , email    : 'jjanzola@hotmail.com'
      , direccion: 'CALLE 72 G- SUR No 35-13 SUR',
    }
    , codeudor: {
      cedula   : 10336884340
      , nombre   : 'LUZ MERY SALCEDO ESPINOSA'
      , telefono : 7308097
      , direccion: 'TRANSVERSAL 4B No 3-75 CASA 87',
    }
    , demanda: {
      vencimientoPagare: '19/02/2025'
      , obligacion       : {
        A: 20990126542,
      }
      , capitalAdeudado        : '23.041.704.34'
      , entregaGarantiasAbogado: '13/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIA'
      , radicado               : '2018 - 01008'
      , llaveProceso           : '25754418900320180100800'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '20/09/2018',
    },
  }
  , {
    numero  : 490
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80052004
      , nombre   : 'DIEGO ARMANDO MATEUS ESPITIA'
      , telefono : 'diegopetete04@hotmail.com'
      , email    : 'TRANSVERSAL 18 C- No 9C-11 SUR MANZANA 5 CASA 134'
      , direccion: 396776067,
    }
    , codeudor: {
      cedula   : 'BIBIANA ANGELICA NUÑEZ RIVERA'
      , nombre   : '2741459/  3125766946'
      , telefono : 'TRANSVERSAL 18C No 9C-11 SUR MANZANA 5'
      , direccion: '20/05/2025',
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '17.506.316.71',
      }
      , capitalAdeudado        : '13/09/2018'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00988'
      , llaveProceso           : '25754418900120180098800'
      , etapaProcesal          : '20/09/2018'
      , fechaPresentacion      : '02/11/2018'
      , mandamientoPago        : 'CERTIMAIL'
      , notificacion           : {
        fisico: '13/11/2018'

        , autoNotificado: '02/11/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: 'INMUEBLE'
        , medidaSolicitada  : '1906',
      },
    },
  }
  , {
    numero  : 491
    , category: 'Reintegra'
    , deudor  : {
      cedula  : 51987570
      , nombre  : 'SANDRA PATRICIA PACHECO RAMIREZ'
      , telefono: 'F 8121692'
      , email   : 'sandrabogota2007@yahoo.com'
      , direccion:
        'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III',
    }

    , demanda: {
      vencimientoPagare: '15/05/2021 // 5/07/2021 // 5/07/2021'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: '0377816345049476 // 4513070259455355 // 5303720114305077',
      }
      , capitalAdeudado        : '$ 18.100.699'
      , entregaGarantiasAbogado: '3/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , radicado               : '2018 - 00785'
      , llaveProceso           : '11001418900820180078500'

      , fechaPresentacion:
        'EMBARGO DE REMANENTES JUZGADO 27 PROCESO 2019 - 00251'
      , mandamientoPago: '20/09/2018'
      , notificacion   : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '02/11/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , '292': {
          fechaRecibido: '02/11/2018',
        }
        , certimail: '04/10/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        medidaSolicitada: '20/11/2018',
      },
    },
  }
  , {
    numero  : 492
    , category: 'Terminados'
    , deudor  : {
      cedula: 22444794
      , nombre: 'MARIBEL DEL ROSARIO RIVERA JIMENEZ'

      , direccion: 'CALLE 22 No 1-137',
    }

    , demanda: {
      obligacion: {
        A: 3360085515,
      }
      , capitalAdeudado        : '12.456.703'
      , entregaGarantiasAbogado: '18/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SESQUILE'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00135'
      , llaveProceso           : '25736408900120180013500'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '25/09/2018'
      , mandamientoPago        : '03/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '02/11/2018',
        }

        , certimail: 'X',
      },
    },
  }
  , {
    numero  : 493
    , category: 'Terminados'
    , deudor  : {
      cedula   : 53103504
      , nombre   : 'KELLY YULIANA QUINTERO FIERRO'
      , telefono : 4542788
      , email    : 'juliana.4455@hotmail.com'
      , direccion: 'CALLE 7 No 87B-90',
    }
    , codeudor: {
      cedula   : 1030602928
      , nombre   : 'LEINY ANDREA QUINTERO FIERRO'
      , telefono : 3208797
      , direccion: 'CALLE 7 No 87B-90',
    }
    , demanda: {
      obligacion: {
        A: 20990155357,
      }
      , capitalAdeudado        : '21.035.323.59'
      , entregaGarantiasAbogado: '6/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 01817'
      , llaveProceso           : '11001410375120180181700'
      , etapaProcesal          : 'SUBSANA'
      , fechaPresentacion      : '29/09/2018',
    },
  }
  , {
    numero  : 494
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1022332681
      , nombre   : 'LUISA ENELLY GUGU VITOPIA'
      , telefono : 3214747968
      , email    : 'vitopia1022@hotmail.com'
      , direccion: 'CARRERA 51F- No 37 A-26 SUR',
    }

    , demanda: {
      vencimientoPagare: '14/01/2026'
      , obligacion       : {
        A: 2099010000000,
      }
      , capitalAdeudado        : '16.225.494.45'
      , entregaGarantiasAbogado: '13/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 01022'
      , llaveProceso           : '25754418900320180102200'
      , etapaProcesal          : 'NOTIFICACION'
      , fechaPresentacion      : '26/09/2018'
      , mandamientoPago        : '25/10/2018'
      , notificacion           : {
        certimail: 'FALLA',
      },
    },
  }
  , {
    numero  : 495
    , category: 'Terminados'
    , deudor  : {
      cedula   : 17099495
      , nombre   : 'PABLO ELIAS MENDOZA MURILLO'
      , telefono : 'F 76131145'
      , email    : 'pablomendoza44@gmail.com'
      , direccion: 'CALLE 29 No 23-46  TORRE 1 APTO 701',
    }

    , demanda: {
      vencimientoPagare: '05/08/2021 // 07/05/2018'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: 377814000000000,
      }
      , capitalAdeudado        : '$ 29.229.159'
      , entregaGarantiasAbogado: '18/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 01236'
      , llaveProceso           : '11001400300320180123600'
      , etapaProcesal          : '11001400300320180123600'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '28/09/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '30/09/2019',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '08/10/2018'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '18/10/2019'
        , medidaSolicitada  : '05/07/2019',
      },
    },
  }
  , {
    numero  : 496
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 13222728
      , nombre   : 'MODESTO PINEDA PEREZ'
      , telefono : 'F 8852490'
      , email    : 'mopadinco@yahoo.com'
      , direccion: 'CARRERA 6 No 6-59',
    }

    , demanda: {
      vencimientoPagare: '14/09/2021 // 07/05/2021'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: 5491570347356810,
      }
      , capitalAdeudado        : '$ 27.373.832'
      , entregaGarantiasAbogado: '18/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CHIA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00602'
      , llaveProceso           : '25175408900320180060200'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '4/10/2018'
      , mandamientoPago        : '12/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '26/11/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '6/12/2018',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail: 'NO'
        , fisico   : 'SI'
        , tipo     : 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '22/10/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 497
    , category: 'Terminados'
    , deudor  : {
      cedula   : 11339859
      , nombre   : 'ROQUE ANTONIO SANCHEZ'
      , telefono : 8826149
      , email    : 'mluisa_06@hotmail.com'
      , direccion: 'CARRERA 11 No 24 A-21 APTO 30 RINCON DEL ZIPA',
    }

    , demanda: {
      vencimientoPagare: '2/09/2018'
      , obligacion       : {
        A: 20990142568,
      }
      , capitalAdeudado        : '23.678920.60'
      , entregaGarantiasAbogado: '26/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'ZIPAQUIRA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00435'
      , llaveProceso           : '25899410300120180043500'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '3/10/2018',
    },
  }
  , {
    numero  : 498
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80546020
      , nombre   : 'JOSE ALEXANDER BECERRA BARRERA'
      , telefono : 3112304
      , email    : 'kristal6020@gmail.com'
      , direccion: 'CARRERA 7 No 4-11  CENTRO',
    }
    , codeudor: {
      cedula   : 21022941
      , nombre   : 'MONICA MAYELI  CRISTANCHO  BALLEN'
      , telefono : '8513122/3132518401'
      , direccion: 'CALLE 5 No 1 A-12',
    }
    , demanda: {
      vencimientoPagare: '23/05/2031'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: 5306960218152465,
      }
      , capitalAdeudado        : '19.491.278.99'
      , entregaGarantiasAbogado: '18/09/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'ZIPAQUIRA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00429'
      , llaveProceso           : '25899400300320180042900'
      , etapaProcesal          : '25899400300320180042900'
      , fechaPresentacion:
        'PENDIENTE PAGAR ARANCEL $ 7000 Y DAR TRAMITE MARIA HELENA SUAREZ'
      , mandamientoPago: '08/10/2018',
    },
  }
  , {
    numero  : 499
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 3208569
      , nombre   : 'FLORESMIRO APONTE ACOSTA'
      , telefono : 'F 3208569'
      , email    : 'dcentro@pcpplasticos.com'
      , direccion: 'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
    }
    , codeudor: {
      cedula   : 51955296
      , nombre   : 'FLOR ANGELA RODRIGUEZ'
      , telefono : 'F 2286617'
      , direccion: 'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
    }
    , demanda: {
      vencimientoPagare: '31/11/2024'
      , obligacion       : {
        A: '20990123680  7/  377813468472239'
        , B: '4513079359765043 // 53037220341399596',
      }
      , capitalAdeudado        : '$ 24.807.317'
      , entregaGarantiasAbogado: '08/10/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARO'
      , radicado               : '2019 - 00708'
      , llaveProceso           : '11001418901320190070800'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '12/10/2018'
      , mandamientoPago        : '31/07/2019'
      , notificacion           : {
        '291': {
          fechaRecibido: '18/02/2020'

          , fechaAporta: '18/02/2020',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail: 'SI'
        , fisico   : 'NO'
        , tipo     : 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '13/02/2020'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 500
    , category: 'Reintegra'
    , deudor  : {
      cedula  : '900566964-9'
      , nombre  : 'SMARTITECH S.A.S'
      , telefono: 'F 3849696'

      , direccion: 'CARRERA 13 No 73-33',
    }
    , codeudor: {
      cedula   : 1032408735
      , nombre   : 'EDISSON ARMANDO KARL BUITRAGO CABRERA'
      , telefono : 2501533
      , direccion: 'CALLE 67 D - No 66 A-03',
    }
    , demanda: {
      vencimientoPagare: '27/05/2020'
      , obligacion       : {
        A: 68928057402
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '$ 15.086.199'
      , entregaGarantiasAbogado: '16/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00454'
      , llaveProceso           : '11001400300620180045400'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '27/04/2018'
      , mandamientoPago        : '23/05/2018             13/06/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '29/05/2018'
          , resultado    : 'NEGATIVO'
          , fechaAporta  : '29/05/2018',
        }
        , '292': {
          fechaRecibido: '12/06/2018'
          , fechaAporta  : '12/06/2018'
          , resultado    : 'NEGATIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'EMPLAZAMIENTO'
        , autoNotificado: '28/07/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '23/05/2018'
        , medidaSolicitada  : 'EMBARGO DE DINEROS EN BANCOS',
      },
    },
  }
  , {
    numero  : 501
    , category: 'Terminados'
    , deudor  : {
      cedula   : 830105220
      , nombre   : 'ASOCIACION AGROPECUARIA UCEBUL'
      , telefono : 'F 7552891'
      , email    : 'ucebul@gmail.com'
      , direccion: 'AVENIDA EL DORADO No 68C-61 OFICINA 702',
    }
    , codeudor: {
      cedula   : 19436512
      , nombre   : 'OSCAR WILLIAM FAJARDO GARCIA'
      , telefono : 'F 8028680'
      , direccion: 'AUT NORTE No 122 - 56 OFICINA 704 / CALLE 119 No 13-61',
    }
    , demanda: {
      vencimientoPagare: '01/06/2021//04/10/2021'
      , obligacion       : {
        A: '19353965852// 4549260357738974'
        , B: 4594260000000000,
      }
      , capitalAdeudado        : '$ 31.627.562'
      , entregaGarantiasAbogado: '9/10/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 01316'
      , llaveProceso           : '11001400305520180131600'
      , etapaProcesal          : '11001400305520180131600'
      , fechaPresentacion      : 'LIQUIDACIÓN'
      , mandamientoPago        : '17/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '17/12/2019',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '11/09/2019'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        medidaSolicitada: 'PENDIENTE',
      },
    },
  }
  , {
    numero  : 502
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 1023861016
      , nombre   : 'ANGELICA NATHALY ROZO FRANCO'
      , telefono : 'F 6594339'
      , email    : 'Anrf1985@hotmail.com'
      , direccion: 'TRANSVERSAL 70G SUR-68-52 TORRE 18 APARTAMENTO 1401',
    }

    , demanda: {
      vencimientoPagare: '05/01/2021'
      , obligacion       : {
        A: 4594260107010410,
      }
      , capitalAdeudado        : '$ 10.930.100'
      , entregaGarantiasAbogado: '12/10/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 01085'
      , llaveProceso           : '11001418901620190108500'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '24/10/2018'
      , mandamientoPago        : '19/06/2019'
      , notificacion           : {
        '291': {
          resultado: 'POSITIVO',
        }
        , '292': {
          fechaAporta: '12/12/2019'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '6/12/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '12/07/2019'
        , medidaSolicitada  : 'EMBARGO INMUEBLE',
      },
    },
  }
  , {
    numero  : 503
    , category: 'Terminados'
    , deudor  : {
      cedula   : 3096755
      , nombre   : 'JUAN CARLOS LEON MONTENEGRO'
      , telefono : 8058011
      , email    : 'jclm152@hotmail.com'
      , direccion: 'DIAGONAL 2 No 6 A-29',
    }

    , demanda: {
      obligacion: {
        A: 'AUDIOPRESTAMO'
        , B: '3360084365 / 3360084819',
      }
      , capitalAdeudado        : '15.631.923.00'
      , entregaGarantiasAbogado: '10/10/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MANTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00063'
      , llaveProceso           : '25436408900120180006300'
      , etapaProcesal          : 'ADMISIION'
      , fechaPresentacion      : '25/10/2018'
      , mandamientoPago        : '07/11/2018',
    },
  }
  , {
    numero  : 504
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52432037
      , nombre  : 'ANA DEL PILAR MENDEZ AMAYA'
      , telefono: 'ojodelluvia@yahoo.com',
    }
    , codeudor: {
      direccion: '22/08/2022',
    }
    , demanda: {
      vencimientoPagare: 'CREDITO HIPOTCARIO'
      , obligacion       : {
        B: '26.315.289.23',
      }
      , capitalAdeudado        : '22/10/2018'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SIBATE'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00370'
      , llaveProceso           : '25740410300120180037000'
      , etapaProcesal          : '29/10/2018',
    },
  }
  , {
    numero  : 505
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80156570
      , nombre   : 'WILLIAM  GIOVANNY GARZON LOPEZ'
      , telefono : 'F 2300145'
      , email    : 'organizacionapply@gmail.com'
      , direccion: 'CALLE 53 SUR No 82-38 CASA LADRILLO',
    }

    , demanda: {
      vencimientoPagare: '04/06/2021 //04/06/2021'
      , obligacion       : {
        A: '377813291831031 // 377815026183364'
        , B: '4099830041795208 /53037110111724925',
      }
      , capitalAdeudado        : '$ 14.634.269'
      , entregaGarantiasAbogado: '27/10/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'KENNEDY'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 02462'
      , llaveProceso           : '11001418902520180246200'
      , etapaProcesal          : '11001410375120180246200'
      , fechaPresentacion      : 'LIQUIDACION DEL CRÉDITO'
      , mandamientoPago        : '30/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '11/02/2019'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        medidaSolicitada: '18/02/2019',
      },
    },
  }
  , {
    numero  : 506
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1023891419
      , nombre   : 'EDWIN CAMILO SARMIENTO GOMEZ'
      , telefono : 'F 4616831'
      , email    : 'edwin.sarmiento@altipal.com'
      , direccion: 'CARRERA 3 No 6-25 SUR TORRE 6 APTO 104',
    }

    , demanda: {
      vencimientoPagare: '04/06/2021'
      , obligacion       : {
        A: 54915700000000000,
      }
      , capitalAdeudado        : '$ 15.426.759'
      , entregaGarantiasAbogado: '25/10/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR ACUMULADO CON HIPOTECARIO CAJA SOCIAL'
      , radicado               : '2021- 00611'
      , llaveProceso           : '11001418903120180138000'
      , etapaProcesal          : '11001400300420210061100'
      , fechaPresentacion      : 'ADMITIENDO HIPOTECARIO'
      , mandamientoPago        : '30/11/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '24/07/2019'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        medidaSolicitada: '24/07/2019',
      },
    },
  }
  , {
    numero  : 507
    , category: 'Terminados'
    , deudor  : {
      cedula  : 80468168
      , nombre  : 'WILLIAM  YOVANY CASALLAS ROMERO'
      , telefono: 'wcasallas@hotmail.com'
      , email   : 'CARRERA 4 A No 16 B-14  TORRE2',
    }
    , codeudor: {
      direccion: '6/08/2018',
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        A: 3380087493
        , B: '21.876.281',
      }
      , capitalAdeudado        : '02/11/2018'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'UBATE'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00499'
      , llaveProceso           : '25843410300120180049900'

      , fechaPresentacion: 'SIN LEVANTAMIENTO DE MEDIDA CAUTELAR'

      , notificacion: {
        certimail:
          '31 ENERO 2023 SE ENVIO MEMORIAL AL JUZGADO CON CAMARA Y CERTIFICADO',
      },
    },
  }
  , {
    numero  : 508
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 11230400
      , nombre   : 'JOSE ALFONSO VASQUEZ TOVAR'
      , telefono : 'CEL 3123703828'
      , email    : 'joalvato09@hotmail.com'
      , direccion: 'CALLE 2 A No 5-22 APTO 503',
    }

    , demanda: {
      vencimientoPagare: '01/03/2026'
      , obligacion       : {
        A: 2490084469,
      }
      , capitalAdeudado        : '$ 29.416.113'
      , entregaGarantiasAbogado: '26/11/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'LA CALERA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00371'
      , llaveProceso           : '25377408900120180037100'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '07/12/2018'
      , mandamientoPago        : '17/01/2019'
      , notificacion           : {
        '291': {
          fechaRecibido: '24/04/2019'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '24/04/2019',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail: 'NO'
        , fisico   : 'SI'
        , tipo     : 'CORREO',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '28/01/2019'
        , medidaSolicitada  : 'EMBARGO INMUEBLES',
      },
    },
  }
  , {
    numero  : 509
    , category: 'Terminados'
    , deudor  : {
      cedula: 20401209
      , nombre: 'DIANA CAROLINA PRADO FIQUITIVA'

      , email    : 'todostienenzero@hotmail.com'
      , direccion: 'CALLE 7 No 5-31',
    }

    , demanda: {
      vencimientoPagare: '15/10/218'
      , obligacion       : {
        A: 8270082134,
      }
      , capitalAdeudado        : '16.585.595.00'
      , entregaGarantiasAbogado: '30/11/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'COTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 01002'
      , llaveProceso           : '25214400300120180100200'

      , fechaPresentacion: 'ADMISION',
    },
  }
  , {
    numero  : 510
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80854028
      , nombre   : 'MANUEL ARNULFO ARAQUE MUÑOZ'
      , telefono : 8213897
      , email    : 'huesos254@gmail.com'
      , direccion: 'CALLE 68 No 81 G-16',
    }

    , demanda: {
      vencimientoPagare: '17/05/2033'
      , obligacion       : {
        A: 20990164067
        , B: 6980087352,
      }
      , capitalAdeudado        : '40.828.299.00'
      , entregaGarantiasAbogado: '26/11/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'SOACHA'
      , radicado               : '2018 - 00415'
      , llaveProceso           : '25754400300220180041500'
      , etapaProcesal          : '25754400300220190041500'
      , fechaPresentacion      : 'ADMISION',
    },
  }
  , {
    numero  : 511
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52851677
      , nombre   : 'DIANA MARJORIE ROMERO MONTOYA'
      , telefono : 52851677
      , email    : 'dhyanitaco@hotmail.com'
      , direccion: 'CARRRA 102 No 69-22',
    }

    , demanda: {
      vencimientoPagare: '12/04/2018'
      , obligacion       : {
        A: 20990201453,
      }
      , capitalAdeudado        : '41.522.255.15'
      , entregaGarantiasAbogado: '21/11/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'SOACHA'
      , radicado               : '2018 - 00416'
      , llaveProceso           : '25754400300220180041600'

      , fechaPresentacion: 'ADMISION',
    },
  }
  , {
    numero  : 512
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1014200510
      , nombre  : 'SANDRA MILENA MORALES GARCIA'
      , telefono: 'milemorales17@hotmail.com'
      , email   : 'CALLE 93 No 94 N -16',
    }
    , codeudor: {
      direccion: '09/07/2033',
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '21.856.062.58',
      }
      , capitalAdeudado        : '05/12/2018'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 01352'
      , llaveProceso           : '25754418900320180135200'
      , etapaProcesal          : '14/12/2018//13/05/2019',
    },
  }
  , {
    numero  : 513
    , category: 'Terminados'
    , deudor  : {
      cedula  : 80865782
      , nombre  : 'ERIK RICARDO PINTO RODRIGUEZ'
      , telefono: 'erickro11@yahoo.es'
      , email   : 'CALLE 64 C No 105 D- 36 PISO 3',
    }
    , codeudor: {
      direccion: '19/01/2022',
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: '40.290.738',
      }
      , capitalAdeudado        : '07/11/2018'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00165'
      , llaveProceso           : '11001400304420190016500'
      , etapaProcesal          : '01/02/2019',
    },
  }
  , {
    numero  : 514
    , category: 'Insolvencia'
    , deudor  : {
      cedula   : 19496623
      , nombre   : 'MANUEL ALBERTO LEON CALDERON'
      , telefono : 'F 3175879'
      , email    : 'terranova54@latinmail.com'
      , direccion: 'CARRERA 68 No 100-51 APTO 405',
    }

    , demanda: {
      vencimientoPagare: '10/03/2022'
      , obligacion       : {
        A: 7910080591
        , B: 4099830000000000,
      }
      , capitalAdeudado        : '$ 46.118.717'
      , entregaGarantiasAbogado: '30/11/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00179'
      , llaveProceso           : '11001400301720190017900'
      , etapaProcesal          : 1.10014e22
      , fechaPresentacion      : 'PROCESO SUSPENDIDO CENTRO DE CONCILIACION'
      , mandamientoPago        : '01/02/2019'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '11/06/2019',
        }
        , '292': {
          fechaAporta: 'NEGATIVO',
        }
        , certimail: '12/03/2019'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        medidaSolicitada: '21/03/2019',
      },
    },
  }
  , {
    numero  : 514
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79290475
      , nombre   : 'OSCAR ARMANDO TORRES GOMEZ'
      , telefono : 'SIN/INF'
      , email    : 'minforb@gmail.com'
      , direccion: 'KR 123 No 131 - 61. bloque 16 APTO 501',
    }

    , demanda: {
      vencimientoPagare: '29/11/2019'
      , obligacion       : {
        A: 2370091170
        , B: 5303710000000000,
      }
      , capitalAdeudado        : '$ 14.123.185'
      , entregaGarantiasAbogado: '25/10/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00291'
      , llaveProceso           : '11001418902120190029100'
      , etapaProcesal          : '11001418902120190029100'
      , fechaPresentacion      : 'EJECUCION'
      , mandamientoPago        : '01/02/2019'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '16/04/019',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '13/03/2019'
        , fisico   : 'NO'

        , autoNotificado: 'PERSONAL',
      }
      , medidasCautelares: {
        medidaSolicitada: '27/03/2019',
      },
    },
  }
  , {
    numero  : 516
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79245905
      , nombre   : 'ALVARO LUIS ASPRILLA LUCUMI'
      , telefono : 6315927
      , email    : 'asplucal@gmail.com'
      , direccion: 'CALLE 116 A- 70G-48 APTO 204',
    }

    , demanda: {
      obligacion: {
        A: 3778160000000000
        , B: 530372000000000,
      }
      , capitalAdeudado        : '16.800.337.38'
      , entregaGarantiasAbogado: '01/11/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00190'
      , llaveProceso           : '11001418901420190019000'
      , etapaProcesal          : 'ADMISION'
      , fechaPresentacion      : '01/02/2019',
    },
  }
  , {
    numero  : 517
    , category: 'Terminados'
    , deudor  : {
      cedula  : 52470211
      , nombre  : 'MARYLU VALENCIA SUAREZ'
      , telefono: 'mvalencia_9@yahoo.es'
      , email   : 'CARRERA 53A # 4F-67',
    }
    , codeudor: {
      direccion: '17/05/2022',
    }
    , demanda: {
      vencimientoPagare:
        '###############################################################################################################################################################################################################################################################'
      , obligacion: {
        B: 16262273,
      }
      , capitalAdeudado        : '30/01/2019'
      , entregaGarantiasAbogado: 'CUNDINAMARCA'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 - 00162'
      , llaveProceso           : '11001418901020190016200',
    },
  }
  , {
    numero  : 518
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80222254
      , nombre   : 'JORGE IVAN AVENDAÑO VANEGAS'
      , telefono : 3124487509
      , email    : 'CYBERGEORGE82@HOTMAIL.COM'
      , direccion: 'CARRERA 86 # 77 - 35 INT 13 APTO 339',
    }

    , demanda: {
      obligacion: {
        A: 377817000000000
        , B: 4513070000000000,
      }
      , capitalAdeudado        : 12203649
      , entregaGarantiasAbogado: '30/01/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00162'
      , llaveProceso           : '11001418900920190016200',
    },
  }
  , {
    numero  : 519
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1030529007
      , nombre  : 'LEIDY CATALINA LOSADA CABRERA'
      , telefono: 'F 7848716'
      , email   : 'catalinalosada_w@hotmail.com'
      , direccion:
        'CARRERA 98D # 61A-24 SUR (KR 113A # 61A-24 Sur Bosa Porvenir)',
    }

    , demanda: {
      vencimientoPagare: '23/03/2027'
      , obligacion       : {
        A: '2273 320150109',
      }
      , capitalAdeudado        : '$ 30.056.041'
      , entregaGarantiasAbogado: '25/01/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 - 00551'
      , llaveProceso           : '11001400307020190055100'
      , etapaProcesal          : '11001400307020190055100'
      , fechaPresentacion:
        'EL 3/12/2020 EL JUZGADO DECRETO TERMINACION PROCESO POR PAGO CUOTAS EN MORA // EL 12/05/2021 SE RETIRARON GARANTIAS DEL JUZGADO // EL 29/04/2021 SE ENVIO OFICIO A OFICINA DE REGISTRO // EL 22/09/2021 SUPERNOTARIADO LO DEVOLVIO POR NO PAGO // EL 11/11/2021 SE SOLICITO CERTIFICADO Y ESTA PENDIENTE LEVANTAMIENTO DE MEDIDA CAUTELAR //PAGAR DESGLOSE Y RETIRAR OFICIO PARA RADICAR LEVANTAMIENTO'
      , mandamientoPago: '6/02/2019',
    },
  }
  , {
    numero  : 520
    , category: 'Terminados'
    , deudor  : {
      cedula   : 92554673
      , nombre   : 'RAFAEL ADOLFO PAEZ ORTEGA'
      , telefono : 3919591
      , email    : 'farapaeos@gmail.com'
      , direccion: 'CARRERA 123 No 130C- 56  TORRE 52 APTO 201',
    }

    , demanda: {
      vencimientoPagare: '18/09/2023'
      , obligacion       : {
        A: 5470086745,
      }
      , capitalAdeudado        : '13.871.976.56'
      , entregaGarantiasAbogado: '15/02/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00287'
      , llaveProceso           : '11001400307320190028700'
      , etapaProcesal          : '11001418905520190028700'
      , fechaPresentacion      : '26/02/2019',
    },
  }
  , {
    numero  : 521
    , category: 'Terminados'
    , deudor  : {
      cedula   : 40050052
      , nombre   : 'MARIA AQUILINA RODRIGUEZ LANCHEROS'
      , telefono : 7622730
      , email    : 'aquimaria1965@gmail.com'
      , direccion: 'CARRERA 4A No 93-11p 1',
    }

    , demanda: {
      obligacion: {
        A: 4099830000000000,
      }
      , capitalAdeudado        : '20.616.779.01'
      , entregaGarantiasAbogado: '08/02/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00235'
      , llaveProceso           : '11001418901220190023500'

      , fechaPresentacion: '15/02/2019',
    },
  }
  , {
    numero  : 522
    , category: 'Terminados'
    , deudor  : {
      cedula   : 79359896
      , nombre   : 'ARMANDO RODRIGUEZ RODRIGUEZ'
      , telefono : 4742982
      , email    : 'dorapia@hotmail.com'
      , direccion: 'CALLE 42 C No 78  A-17 SUR',
    }

    , demanda: {
      vencimientoPagare: '19/12/2026'
      , obligacion       : {
        A: 20990146891
        , B: 450091594,
      }
      , capitalAdeudado        : '29.723.047.63'
      , entregaGarantiasAbogado: '12/02/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 - 01004'
      , llaveProceso           : '11001400306820190100400'

      , fechaPresentacion: '26/02/2019 // 4/06/19',
    },
  }
  , {
    numero  : 523
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1014185022
      , nombre   : 'LUISA ALEJANDRA ESCOBAR ANDRADE'
      , telefono : '7949511/3123704906'
      , email    : 'aleja202007@hotmail.com'
      , direccion: 'CALLE 90A No 45 A- 05',
    }

    , demanda: {
      vencimientoPagare: '26/11/2018'
      , obligacion       : {
        A: 20990158449,
      }
      , capitalAdeudado        : '22.144.741..93'
      , entregaGarantiasAbogado: '26/02/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 -00434'
      , llaveProceso           : '11001418907620190043400',
    },
  }
  , {
    numero  : 524
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52433839
      , nombre   : 'INGRIT YOHANA VASQUEZ ROJAS'
      , telefono : '2836157//3213987669'
      , email    : 'grpte@hotmail.com'
      , direccion: 'CARRERA 15 # 33-17',
    }

    , demanda: {
      vencimientoPagare: '25/04/2026'
      , obligacion       : {
        A: 20990138197,
      }
      , capitalAdeudado        : '19.951.135'
      , entregaGarantiasAbogado: '20/05/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 - 01008'
      , llaveProceso           : '11001400307520190100800'

      , fechaPresentacion: '04/06/2019',
    },
  }
  , {
    numero  : 525
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1030543356
      , nombre   : 'MAGDA LORENA RIASCOS DIAZ'
      , telefono : 2934384
      , email    : 'magda.riascos.diaz@gmail.com'
      , direccion: 'CALLE 48 SUR 87-86 TORRE 16 APTO 261',
    }

    , demanda: {
      vencimientoPagare: '16/05/2032'
      , obligacion       : {
        A: 20990151954,
      }

      , entregaGarantiasAbogado: '29/06/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 - 00496'
      , llaveProceso           : '11001400303620190049600'

      , fechaPresentacion: '04/06/2019',
    },
  }
  , {
    numero  : 526
    , category: 'Terminados'
    , deudor  : {
      cedula   : 1072642976
      , nombre   : 'CRISTIAN DAVID GUTIERREZ RODRIGUEZ'
      , telefono : 3202954313
      , email    : 'cristian20g@hotmail.com'
      , direccion: 'CALLE 17 #5-10 CHIA',
    }

    , demanda: {
      vencimientoPagare: '25/10/2024'
      , obligacion       : {
        A: 9320086222,
      }
      , capitalAdeudado        : '13.180.105'
      , entregaGarantiasAbogado: '20/05/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'CHIA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 00304'
      , llaveProceso           : '25175400300120190030400'

      , fechaPresentacion: '5/06/2019',
    },
  }
  , {
    numero  : 527
    , category: 'Terminados'
    , deudor  : {
      cedula   : 80654935
      , nombre   : 'JAIRO MARCELO GUIZA RODRIGUEZ'
      , telefono : 'F 8233553                          CEL 3108090708'
      , email    : 'jmarcelo_78@yahoo.com // samvari12@gmail.com'
      , direccion: 'CALLE 7A #7A-15 FUNZA',
    }
    , codeudor: {
      cedula   : 52661952
      , nombre   : 'SANDRA MILENA VALBUENA RINCON'
      , telefono : 'F 8259768'
      , direccion: 'CALLE 7A # 7A-15 FUNZA',
    }
    , demanda: {
      vencimientoPagare: '03/01/2022 //25/05/2022'
      , obligacion       : {
        A: '2273 320097153'
        , B: 'REF 42796745',
      }
      , capitalAdeudado        : '$ 29.140.667'
      , entregaGarantiasAbogado: '20/05/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUNZA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 - 00418'
      , llaveProceso           : '25286400300120190041800'
      , etapaProcesal          : '25286400300120190041800'
      , fechaPresentacion      : 'NOTIFICACION'
      , mandamientoPago        : '5/06/2019'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '03/07/2019'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        medidaSolicitada: '15/08/2019',
      },
    },
  }
  , {
    numero  : 528
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1065564377
      , nombre  : 'YOLADIS ESTHER BLANCO LOPEZ'
      , telefono: 'F 6601752'
      , email   : 'yoladisb@hotmail.com'
      , direccion:
        'CALLE  23 No 12-50 CASA 16 INT 12 MANZANA 1 CONJUNTO QUINTAS DE ZARAGOZA',
    }

    , demanda: {
      vencimientoPagare: '25/08/2030'
      , obligacion       : {
        A: '2273 320186673',
      }
      , capitalAdeudado        : '$ 46.371.154'
      , entregaGarantiasAbogado: '20/08/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MADRID'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 - 01160'
      , llaveProceso           : '25473400100120190116000'
      , etapaProcesal          : '25430400300120190116000'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '2/09/2019'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI'
          , resultado    : '13/12/2019'
          , fechaAporta  : 43861,
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '10/10/2019'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        medidaSolicitada: '2/12/2019',
      },
    },
  }
  , {
    numero  : 529
    , category: 'Terminados'
    , deudor  : {
      cedula   : 2976219
      , nombre   : 'GONZALO CONTRERAS POVEDA'
      , telefono : 4607474
      , email    : 'gcontreras@intecq.com'
      , direccion: 'CARRERA 39 B No 20T-1 APTO 303',
    }
    , codeudor: {
      cedula   : 35402673
      , nombre   : 'SUSANA CONTRERAS POVEDA'
      , telefono : 8060779
      , direccion: 'TRANS 60 No 119-30 apto 418 t 5',
    }
    , demanda: {
      vencimientoPagare: '24/01/2034'
      , obligacion       : {
        A: 20990171776
        , B: 'AUDIOPRESTAMO',
      }
      , capitalAdeudado        : '35.424.539.22'
      , entregaGarantiasAbogado: '14/11/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2019 - 01103'
      , llaveProceso           : '11001400305220190110300',
    },
  }
  , {
    numero  : 530
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 35455606
      , nombre   : 'MARIA CLARA REYES REYES'
      , telefono : 'F 60991181'
      , email    : 'mariaclarareyes@hotmail.com'
      , direccion: 'CALLE 175 No 70-40',
    }

    , demanda: {
      vencimientoPagare: '5/10/2020'
      , obligacion       : {
        A: 40998833882814000
        , B: 5303729887314280,
      }
      , capitalAdeudado        : '$ 14.409.411'
      , entregaGarantiasAbogado: '21/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00514'
      , llaveProceso           : '11001400308120180051400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '25/04/2018'
      , mandamientoPago        : '30/04/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '22/05/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '22/05/2018',
        }
        , '292': {
          fechaAporta: '22/05/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '8/06/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '30/04/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 531
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 51813018
      , nombre   : 'SANDRA LEONOR PAEZ MURCIA'
      , telefono : '6139147 // 3134386087'
      , email    : 'yadelcis@hotmail.com'
      , direccion: 'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA',
    }
    , codeudor: {
      cedula   : 19299851
      , nombre   : 'MARCO TULIO SANCHEZ MEDINA'
      , telefono : 6139147
      , direccion: 'KR 81 No. 127 - 46 Torre 1 Apt 401',
    }
    , demanda: {
      obligacion: {
        A: 2020084294
        , B: '2020087484 // 4594250317705437 //5303723260933890',
      }
      , capitalAdeudado        : '$ 35.608.653'
      , entregaGarantiasAbogado: '7/10/2020'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2020 - 00535'
      , llaveProceso           : '11001400304220200053500'
      , etapaProcesal          : 'EJECUCION'
      , fechaPresentacion      : '7/10/2020'

      , notificacion: {
        '291': {
          fechaRecibido: '22/06/2021'
          , resultado    : 'POSITICVO',
        }

        , certimail: 'SI'
        , fisico   : 'SI',
      },
    },
  }
  , {
    numero  : 532
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 900520023
      , nombre  : 'DIMOIN COLOMBIA S.A.S.'
      , telefono: 6708086

      , direccion: 'AV BOYACA 63D - 26 OFICINA 103',
    }

    , demanda: {
      obligacion: {
        A: 65886140334
        , B: 4594260446916180,
      }
      , capitalAdeudado        : '$ 15.324.570'
      , entregaGarantiasAbogado: '5/09/2020'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2020-1021'
      , llaveProceso           : '11001400306820200102100'
      , etapaProcesal          : 'CONTESTACIÓN DEMANDA',
    },
  }
  , {
    numero  : 533
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 79522009
      , nombre   : 'JAIRO ALFONSO PARDO JAIMES'
      , telefono : 'F 7808590'
      , email    : 'jairopardo8-11-70@hotmail.com'
      , direccion: 'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA',
    }

    , demanda: {
      vencimientoPagare: '15/11/2021'
      , obligacion       : {
        A: 1680097436
        , B: 148653,
      }
      , capitalAdeudado        : '$ 56.987.693'
      , entregaGarantiasAbogado: '14/11/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2018 - 00060'
      , llaveProceso           : '2575440030042018000600'
      , etapaProcesal          : 'EJECUCION',
    },
  }
  , {
    numero  : 534
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 11337530
      , nombre   : 'PEDRO JULIO TRIVIÑO VALBUENA'
      , telefono : 3115159670
      , email    : 'maribelbonita86@hotmail.com'
      , direccion: 'VEREDA SAN JORGE ZIPAQUIRA',
    }

    , demanda: {
      obligacion: {
        A: 377814085773793
        , B: 4513070445120640,
      }
      , capitalAdeudado        : '$ 33.000.833'
      , entregaGarantiasAbogado: '5/09/2020'
      , departamento           : 'CNDINAMARCA'
      , municipio              : 'ZIPAQUIRA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2020 - 00289'
      , llaveProceso           : '2589940010020200028900'
      , etapaProcesal          : 'EJECUCIÓN',
    },
  }
  , {
    numero  : 535
    , category: 'Terminados'
    , deudor  : {
      cedula   : 51918944
      , nombre   : 'AMANDA LUCIA GAITAN RINCÓN'
      , telefono : 2823872
      , email    : 'amandagaitan@hotmail.com'
      , direccion: 'CALLE 55 SUR 24C-28 APTO 502',
    }

    , demanda: {
      vencimientoPagare: '01/23/2021'
      , obligacion       : {
        A: 370091753
        , B: 3700700231,
      }
      , capitalAdeudado        : '$ 13.583.148'
      , entregaGarantiasAbogado: '25/09/2020'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2020 - 00823'
      , llaveProceso           : '11001400306920200082300'
      , etapaProcesal          : '11001400306920200082300'
      , fechaPresentacion      : 'NOTIFICACION',
    },
  }
  , {
    numero  : 536
    , category: 'Terminados'
    , deudor  : {
      cedula   : 39544073
      , nombre   : 'BLANCA LILIA BRAVO PAEZ'
      , telefono : 'F 2295550'
      , email    : 'blancall21@hotmail.com'
      , direccion: 'CALLE 64 C No 105-88',
    }

    , demanda: {
      vencimientoPagare: '2/08/2020'
      , obligacion       : {
        A: 4513070000000000
        , B: 5491580000000000,
      }
      , capitalAdeudado        : '$ 18.772.902'
      , entregaGarantiasAbogado: '26/04/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00479'
      , llaveProceso           : '11001400302020180047900'

      , fechaPresentacion: 'EJECUCIÓN'
      , mandamientoPago  : '8/05/2018'
      , notificacion     : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '11/01/2019',
        }
        , '292': {
          fechaRecibido: '11/01/2019'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '14/06/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '11/01/2019'
        , medidaSolicitada  : '4/07/2019',
      },
    },
  }
  , {
    numero  : 537
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 52155023
      , nombre   : 'SANDRA  LILIANA CRUZ BELTRAN'
      , telefono : 'F 5360278                          CEL 3108540511'
      , email    : 'mediconta@gmail.com'
      , direccion: 'CALLE 86A No 95A-15 APTO 108',
    }

    , demanda: {
      vencimientoPagare: '2/02/2022'
      , obligacion       : {
        A: 2270085292
        , B: 3778131949466660,
      }
      , capitalAdeudado        : '$ 20.353.079'
      , entregaGarantiasAbogado: '28/06/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00850'
      , llaveProceso           : '11001400305120180085000'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '6/07/2018'
      , mandamientoPago        : '24/07/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '11/01/2019'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '11/01/2019',
        }
        , '292': {
          fechaAporta: '11/01/2019'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'NO'
        , fisico        : 'SI'
        , tipo          : 'CORREO'
        , autoNotificado: '11/01/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '31/0/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 538
    , category: 'Terminados'
    , deudor  : {
      cedula   : 41564331
      , nombre   : 'GLORIA GIRALDO DE ROVIDA'
      , telefono : 'F 7383907'
      , email    : 'grovida@gmail.com'
      , direccion: 'CALLE 40 No 8-86',
    }

    , demanda: {
      vencimientoPagare: '24/09/2020'
      , obligacion       : {
        A: 4099840000000000,
      }
      , capitalAdeudado        : '$ 16.862.840'
      , entregaGarantiasAbogado: '17/05/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00577'
      , llaveProceso           : '11001400302720180057700'
      , etapaProcesal          : '11001400302720180057700'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '22/05/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: 'NO'
          , resultado    : '6/07/2018',
        }
        , '292': {
          fechaRecibido: '6/07/2018'
          , fechaAporta  : 'POSITIVO',
        }
        , certimail: '31/05/2018'
        , fisico   : 'SI'

        , autoNotificado: 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '25/07/2018'
        , medidaSolicitada  : '31/05/2018',
      },
    },
  }
  , {
    numero  : 539
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 51937267
      , nombre   : 'ADRIANA LUCIA MORA PLATA'
      , telefono : 'F 8146011'
      , email    : 'amoplata@yahoo.com'
      , direccion: 'CALLLE 106 B- No 54-57 APTO 201 PUENTE LARGO',
    }

    , demanda: {
      vencimientoPagare: '10/04/2021'
      , obligacion       : {
        A: 2070086628
        , B: 4594250056606570,
      }
      , capitalAdeudado        : '$ 32.026.447'
      , entregaGarantiasAbogado: '3/07/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00818'
      , llaveProceso           : '11001400303620180081800'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '11/07/2018'
      , mandamientoPago        : '19/07/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '8/08/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '8/08/2018',
        }
        , '292': {
          fechaAporta: '8/08/2018'
          , resultado  : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '19/07/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '1/08/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 540
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 3242760
      , nombre   : 'JOSE RODRIGO GARCIA QUINTERO'
      , telefono : 'F 6855750                   CEL 3143659602'
      , email    : 'rodrigogar68@hotmail.com'
      , direccion: 'CARRERA 86 No 99-23',
    }

    , demanda: {
      vencimientoPagare: '10/05/2121 // 10/05/2021'
      , obligacion       : {
        A: 1980096337
        , B: 6700083464,
      }
      , capitalAdeudado        : '$ 17.667.402'
      , entregaGarantiasAbogado: '26/07/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00929'
      , llaveProceso           : '11001400301420180092900'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '31/0772019'
      , mandamientoPago        : '9/0872018'
      , notificacion           : {
        '291': {
          fechaRecibido: '11/08/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '11/08/2018',
        }
        , '292': {
          fechaRecibido: '4/10/2018'
          , fechaAporta  : '12/10/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '12/10/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '17/08/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 541
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 79533771
      , nombre   : 'JOSE RAMON ESTRADA CASTILLO'
      , telefono : 'F 2998302'
      , email    : 'jrestradacastillo@gmail.com'
      , direccion: 'CARRERA 81 G No 48-03 SUR',
    }

    , demanda: {
      vencimientoPagare: '15/04/2021 // 6/05/2021'
      , obligacion       : {
        A: 'AUDIOPRESTAMO'
        , B: 5491580436291960,
      }
      , capitalAdeudado        : '$ 39.855.851'
      , entregaGarantiasAbogado: '31/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00964'
      , llaveProceso           : '11001400308220180096400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '10/09/2018'
      , mandamientoPago        : '17/09/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '25/10/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '25/10/2018',
        }
        , '292': {
          fechaRecibido: '04/11/2018'
          , fechaAporta  : '25/02/2019'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '25/02/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '17/09/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 542
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 53106069
      , nombre   : 'BIBIANA PATRICIA ESGUERRA VASQUEZ'
      , telefono : 'F 53106069'
      , email    : 'bicato10@hotmail.com'
      , direccion: 'CALLE 65 BIS No 86-50',
    }

    , demanda: {
      vencimientoPagare: '6/04/2021 // 6/04/2021'
      , obligacion       : {
        A: 'AMERICAN 377813618831557'
        , B: 'VISA 4513070030495183 // 5303715376619405',
      }
      , capitalAdeudado        : '$ 12.864.472'
      , entregaGarantiasAbogado: '22/08/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00644'
      , llaveProceso           : '11001418901220180064400'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '05/09/2018'
      , mandamientoPago        : '12/10/2018'
      , notificacion           : {
        '291': {
          fechaRecibido: '02/11/2018'
          , resultado    : 'ABIERTO'
          , fechaAporta  : '02/11/2018',
        }
        , '292': {
          fechaRecibido: '29/11/2018'
          , fechaAporta  : '20/02/2019'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '20/02/2019',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '26/10/2018'
        , medidaSolicitada  : 'EMBARGO DE INMUEBLE',
      },
    },
  }
  , {
    numero  : 543
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 51579807
      , nombre   : 'ROSALIA CHARRY  SARMIENTO'
      , telefono : 'F 2943968'
      , email    : 'rochi2656@hotmail.com'
      , direccion: 'CALLE 19 A No 82 - 65 INT 6 APTO 503',
    }

    , demanda: {
      vencimientoPagare: '13/03/2022'
      , obligacion       : {
        A: 3880083804
        , B: '4513074508682496 // 53037103332223839',
      }
      , capitalAdeudado        : '$ 24.849.682'
      , entregaGarantiasAbogado: '10/10/2018'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2018 - 00951'
      , llaveProceso           : '11001418901220180095100'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '19/10/2018'
      , mandamientoPago        : '11/01/2019'
      , notificacion           : {
        '291': {
          fechaRecibido: '27/02/2019'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '27/02/2019',
        }
        , '292': {
          resultado: 'POSITIVO',
        }
        , certimail: 'SI'
        , fisico   : 'NO'
        , tipo     : 'CERTIMAIL',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '31/01/2019'
        , medidaSolicitada  : 'EMBARGO INMUEBLE',
      },
    },
  }
  , {
    numero  : 544
    , category: 'Terminados'
    , deudor  : {
      cedula   : 52018939
      , nombre   : 'SONIA ANGELICA LOPEZ ORTIZ'
      , telefono : 'F 8055915                     CEL 3112925970'
      , email    : 'sonialo.ejm@gmail.com'
      , direccion: 'CALLE 78 D 110-22 INTERIOR 16',
    }

    , demanda: {
      vencimientoPagare: '4/03/2019 //5/02/2026'
      , obligacion       : {
        A: 1800092546
        , B: 1800092544,
      }
      , capitalAdeudado        : '$ 26.806.038'
      , entregaGarantiasAbogado: '04/12/2019'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2019 - 02159'
      , llaveProceso           : '11001400304320190215900'
      , etapaProcesal          : '11001400306120190215900'
      , fechaPresentacion      : 'EJECUCIÓN'
      , mandamientoPago        : '16/12/2019'
      , notificacion           : {
        '291': {
          fechaRecibido: 'SI',
        }
        , '292': {
          fechaAporta: 'POSITIVO',
        }
        , certimail: '20/01/2020'
        , fisico   : 'NO'

        , autoNotificado: 'CORREO',
      }
      , medidasCautelares: {
        medidaSolicitada: '31/01/2020',
      },
    },
  }
  , {
    numero  : 545
    , category: 'Terminados'
    , deudor  : {
      cedula: 79295686
      , nombre: 'JAIRO ALDANA VILLAMIZAR',
    }

    , demanda: {
      llaveProceso: 'SinEspecificar'
      , departamento: 'CUNDINAMARCA'
      , municipio   : 'BOGOTA'
      , tipoProceso : 'SINGULAR'
      , radicado    : 'SIN NUMERO',
    },
  }
  , {
    numero  : 546
    , category: 'Reintegra'
    , deudor  : {
      cedula   : 1116782267
      , nombre   : 'JOGLI JOAQUIN OTERO VARGAS'
      , telefono : 'CEL 3005941798'
      , email    : 'juanotero1989@gmail.com'
      , direccion: 'DIAGONAL 2 No 79 F -04',
    }

    , demanda: {
      vencimientoPagare: '4/10/2020'
      , obligacion       : {
        A: 12541235,
      }
      , capitalAdeudado        : '$ 41.372.568'
      , entregaGarantiasAbogado: '6/10/2017'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'PRENDARIO'
      , radicado               : '2017 - 01002'
      , llaveProceso           : '11001400300220170100200'
      , etapaProcesal          : 'EJECUCIÓN'
      , fechaPresentacion      : '12/10/2017'
      , mandamientoPago        : '27/11/2017'
      , notificacion           : {
        '291': {
          fechaRecibido: '22/05/2018'
          , resultado    : 'POSITIVO'
          , fechaAporta  : '3/01/2018',
        }
        , '292': {
          fechaRecibido: '5/07/2018'
          , fechaAporta  : '3/10/2018'
          , resultado    : 'POSITIVO',
        }
        , certimail     : 'SI'
        , fisico        : 'NO'
        , tipo          : 'CERTIMAIL'
        , autoNotificado: '3/10/2018',
      }
      , medidasCautelares: {
        fechaOrdenaMedidas: '27/11/2017'
        , medidaSolicitada  : 'EMBARGO DE VEHICULO',
      },
    },
  }
  , {
    numero  : 547
    , category: 'Terminados'
    , deudor  : {
      cedula: 348774
      , nombre: 'JOSE EDGAR ACHURI GONZALEZ',
    }

    , demanda: {
      departamento: 'CUNDINAMARCA'
      , municipio   : 'SOACHA'
      , tipoProceso : 'SINGULAR'
      , radicado    : '2021 - 00153'
      , llaveProceso: '25754400300120210015300',
    },
  }
  , {
    numero  : 548
    , category: 'Terminados'
    , deudor  : {
      cedula: 23270185
      , nombre: 'CLARA PATRICIA PEÑA BELTRAN',
    }

    , demanda: {
      departamento: 'CUNDINAMARCA'
      , municipio   : 'BOGOTA'
      , tipoProceso : 'PRENDARIO'
      , radicado    : '2017 - 01024'
      , llaveProceso: '11001400300820170102400',
    },
  }
  , {
    numero  : 549
    , category: 'Terminados'
    , deudor  : {
      cedula: 79405147
      , nombre: 'JOSE ANTONIO BEJARANO CARREÑO',
    }

    , demanda: {
      departamento: 'CUNDINAMARCA'
      , llaveProceso: 'SinEspecificar'
      , municipio   : 'BOGOTA'
      , tipoProceso : 'HIPOTECARIO'
      , radicado    : 'SIN NUMERO',
    },
  }
  , {
    numero  : 550
    , category: 'Terminados'
    , deudor  : {
      cedula: 1022336662
      , nombre: 'MIGUEL ANGEL AGUASACO PEÑUELA',
    }

    , demanda: {
      departamento: 'CUNDINAMARCA'
      , municipio   : 'SOACHA'
      , tipoProceso : 'HIPOTECARIO'
      , radicado    : '2019 - 00911'
      , llaveProceso: '25754418900120190091100',
    },
  }
  , {
    numero  : 551
    , category: 'Bancolombia'
    , deudor  : {
      cedula: 1075211773
      , nombre: 'PEDRO JONATHAN RAMIREZ GOMEZ'

      , email    : 'jonathansoldier@hotmail.com'
      , direccion: 'KR 1 2 41 Fusagasugá',
    }

    , demanda: {
      vencimientoPagare: '8/03/2028'
      , obligacion       : {
        A: 2640096179,
      }
      , capitalAdeudado        : '$ 28.018.855'
      , entregaGarantiasAbogado: '20/06/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUSAGASUGA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00371'
      , llaveProceso           : '25312400300320230037100',
    },
  }
  , {
    numero  : 552
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1023874668
      , nombre   : 'OSCAR MAURICIO GOMEZ MENDOZA'
      , telefono : 'F 2043773'
      , email    : 'oscar2794@hotmail.com'
      , direccion: 'CL 49 A BIS SUR No. 5 N 10',
    }

    , demanda: {
      vencimientoPagare: '10/02/2026 // 27/01/2026'
      , obligacion       : {
        A: 530104065
        , B: 530103261,
      }
      , capitalAdeudado        : '$ 77.376.262'
      , entregaGarantiasAbogado: '20/06/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00622'
      , llaveProceso           : '11001400300420230062200',
    },
  }
  , {
    numero  : 553
    , category: 'Bancolombia'
    , deudor  : {
      cedula: 80220698
      , nombre: 'JOSE ALEXANDER LAVERDE PENAGOS'

      , email    : 'lxndrlaverde@gmail.com'
      , direccion: 'Carrera 7 # 180 75 // Carrera 8 A No. 182 - 12',
    }

    , demanda: {
      vencimientoPagare: '25/02/2025'
      , obligacion       : {
        A: 130089828,
      }
      , capitalAdeudado        : '$ 31.804.872'
      , entregaGarantiasAbogado: '20/06/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01088'
      , llaveProceso           : '11001400308320230108800',
    },
  }
  , {
    numero  : 554
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 51976656
      , nombre  : 'SANDRA PATRICIA ALVAREZ RODRIGUEZ'
      , telefono: 'F 2297973 CELULAR 3157352910'
      , email   : 'sandris73@hotmail.com'
      , direccion:
        'Carrera 102 No. 69 - 81 Casa 5 Conjunto Residencial Montes de Tierra Grata',
    }

    , demanda: {
      vencimientoPagare: '22/02/2026 // 4/07/2026 // 6/03/2026'
      , obligacion       : {
        A: 2150100545
        , B: '377844028390801 y 4513080181283486',
      }
      , capitalAdeudado        : '$ 22.111.021'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01311'
      , llaveProceso           : '11001418901820230131100',
    },
  }
  , {
    numero  : 555
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 53130409
      , nombre   : 'JEIMMY SOLEY QUIROGA RAMIREZ'
      , telefono : 'F 3917539 CELULAR 3506509064'
      , email    : 'jsquiroga72@hotmail.com'
      , direccion: 'CL 55 BIS 16 48 Apartamento 702 Edificio Bangkok',
    }

    , demanda: {
      vencimientoPagare: '4/03/2026'
      , obligacion       : {
        A: 1920089307,
      }
      , capitalAdeudado        : '$ 80.906.224'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00904'
      , llaveProceso           : '11001400303220230090400',
    },
  }
  , {
    numero  : 556
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1022335014
      , nombre   : 'CIRO ERQUILIAN ONOFRE'
      , telefono : 'CELULAR 3023193548'
      , email    : 'ciro.onofe1105@gmail.com'
      , direccion: 'Carrera 13 # 4-20 Madrid (Cundinamarca)',
    }

    , demanda: {
      vencimientoPagare: '9/03/2026 // 9/03/2026 // 9/04/2026'
      , obligacion       : {
        A: '3830095699 // 3830095700'
        , B: 3830095701,
      }
      , capitalAdeudado        : '$ 149.444.779'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MADRID'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01127'
      , llaveProceso           : '25430400300120230112700',
    },
  }
  , {
    numero  : 557
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 71685758
      , nombre   : 'CARLOS HERNEY QUINTERO'
      , telefono : 'F 6485655 CELULAR 3002985587'
      , email    : 'cahequi8097@gmail.com  fundaoyuki@gmail.com'
      , direccion: 'KR 32 A 1 19 BARRIO SANTA MATILDE',
    }

    , demanda: {
      vencimientoPagare: '18/07/2026 // 4/03/2026'
      , obligacion       : {
        A: 840093593
        , B: 'PAGARE SIN NUMERO T. AMERICAN EXPRESS 0377844069636757',
      }
      , capitalAdeudado        : '$ 49.329.779'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00782'
      , llaveProceso           : '11001400301720230078200',
    },
  }
  , {
    numero  : 558
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 52531016
      , nombre  : 'CLAUDIA MARCELA ARIAS LÓPEZ'
      , telefono: 'CELULAR 3106736494'
      , email   : 'marcearias@yahoo.com'
      , direccion:
        'Calle 18 N 86 55 Etapa 1 Torre 5 Apartamento 403 Conjunto Residencial Parque de Ostente',
    }

    , demanda: {
      vencimientoPagare: '17/03/2026 // 4/03/2026'
      , obligacion       : {
        A: 3880005183
        , B: 'PAGARE SIN NUMERO T. MASTER CARD 5303720122061696',
      }
      , capitalAdeudado        : '$ 46.537.671'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 -  00315'
      , llaveProceso           : '11001400305920230031500',
    },
  }
  , {
    numero  : 559
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 80219425
      , nombre  : 'EDWIN ALEXANDER SALCEDO PEREZ'
      , telefono: 'CELULAR 3112633806'
      , email   : 'edwsal736@gmail.com'
      , direccion:
        'Calle 50 Sur No. 93 D 38 Torre 07 Apartamento 601 Conjunto Residencial Porvenir Reservado Etapa 7, Carrera 89 A No. 45 A – 33 Sur Casa 207 Agrupación de Vivienda La Margarita Etapa 9',
    }

    , demanda: {
      vencimientoPagare: '2/03/2026'
      , obligacion       : {
        A: 1080103378,
      }
      , capitalAdeudado        : '$ 42.598.393'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00886'
      , llaveProceso           : '11001418900420230088600',
    },
  }
  , {
    numero  : 560
    , category: 'Terminados'
    , deudor  : {
      cedula  : 1129565798
      , nombre  : 'HANSEL MARTINEZ BARROS'
      , telefono: 'F 3930210 CELULAR 3043463859 // 3005306070'
      , email   : 'inghanselmartinez@hotmail.com'
      , direccion:
        'CR 51 43 04 Barrio Abajo Barranquilla // Carrera 71 No. 88A - 31 Barranquilla // Calle 42 A No. 46 - 04 Barrio El Parque en Soledad (Atlantico)',
    }

    , demanda: {
      vencimientoPagare: '6/03/2026 //4/07/2026'
      , obligacion       : {
        A: 4770111750
        , B: 'PAGARÉ SIN NÚMERO T. MASTER CARD 5303720229555616 // T. VISA 4513070377907980',
      }
      , capitalAdeudado        : '$ 40.696.764'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BARRANQUILLA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00735'
      , llaveProceso           : '08001418901820230073500',
    },
  }
  , {
    numero  : 561
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 52278914
      , nombre  : 'LUZ JANNETH RODRIGUEZ MORENO'
      , telefono: 'F 17476445/7848056 CELULAR 3153208374'
      , email   : 'lurodrig@corona.com.co  jrodriguez2805@hotmail.com'
      , direccion:
        'Carrera 87 No. 48 – 50 Sur Casa 26 Conjunto Residencial Alameda de San José II',
    }

    , demanda: {
      vencimientoPagare: '2/03/2026 // 20/03/2026'
      , obligacion       : {
        A: 6520089408
        , B: 'TARJETA MASTER CARD No. 5303720118094313 Y TARJETA AMERICAN No. 0377844026948428',
      }
      , capitalAdeudado        : '$ 36.720.537'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00884'
      , llaveProceso           : '08001418901820230073500',
    },
  }
  , {
    numero  : 562
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 17139148
      , nombre  : 'MARIO HERNAN SALAMANCA PATIÑO'
      , telefono: 'F 7746112'
      , email   : 'ajasalama@gmail.com'
      , direccion:
        'Carrera 80 No. 8 - 11 Torre 3 Interior 5 Apartamento 519 Torres de Santa Barbara Conjunto Residencial',
    }

    , demanda: {
      vencimientoPagare: '10/05/2026 // 6/03/2026'
      , obligacion       : {
        A: 9960086465
        , B: 'TARJETA DE CREDITO MASTER CARD 5303720132348190',
      }
      , capitalAdeudado        : '$ 25.252.953'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00985'
      , llaveProceso           : '11001418900420230088400',
    },
  }
  , {
    numero  : 563
    , category: 'Bancolombia'
    , deudor  : {
      cedula: 7718318
      , nombre: 'MILTON MARINO LUGO GOMEZ'

      , email    : 'milugo1111@hotmail.com'
      , direccion: 'Carrera 57 No. 60 A - 20',
    }

    , demanda: {
      vencimientoPagare: '10/03/2026 // 25/06/2026 // 4/05/2025// 18/07/2026'
      , obligacion       : {
        A: '6890083869 // 6890084347'
        , B: '2250084884 // TARJETA DE CRÉDITO AMERICAN EXPRESS No. 0377815043687256',
      }
      , capitalAdeudado        : '$ 39.472.561'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00612'
      , llaveProceso           : '1100141890342023098500',
    },
  }
  , {
    numero  : 564
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 79399032
      , nombre   : 'JORGE ALEX ABADIA CARRILLO'
      , telefono : 'CELULAR 3125642401'
      , email    : 'abadiajorgesa@gmail.com'
      , direccion: 'Transversal 77 N 7A -16 Int 9 // Carrera 69 No. 31 - 68',
    }

    , demanda: {
      vencimientoPagare: '8/03/2026'
      , obligacion       : {
        A: 9460085166,
      }
      , capitalAdeudado        : '$ 29.090.298'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01280'
      , llaveProceso           : '11001418903220230061200',
    },
  }
  , {
    numero  : 565
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 1061047348
      , nombre  : 'SANDRA MILENA PALACIO RIVERA'
      , telefono: 'F 7442510 CELULAR 3058819253'
      , email   : 'sammy_1722@hotmail.es'
      , direccion:
        'Transversal 96 B No. 20 D - 70 Casa 23 Conjunto Residencial Casas del Portal de Hayuelos',
    }

    , demanda: {
      vencimientoPagare: '9/03/2026'
      , obligacion       : {
        A: 1010090492,
      }
      , capitalAdeudado        : '$ 24.994.278'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01273'
      , llaveProceso           : '11001418902120230128000',
    },
  }
  , {
    numero  : 566
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1013622120
      , nombre   : 'JOHAN ANDRES QUIROGA GALEANO'
      , telefono : 'F 7156426 CELULAR 3203203196'
      , email    : 'johanesquiroga@gmail.com'
      , direccion: 'Carrera 46 A No. 22 C - 36 Sur // Avenida 92 No. 15 - 40',
    }

    , demanda: {
      vencimientoPagare: '28/02/2026'
      , obligacion       : {
        A: 6620091753,
      }
      , capitalAdeudado        : '$ 19.218.060'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01243'
      , llaveProceso           : '11001400306920230127300',
    },
  }
  , {
    numero  : 567
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 94254761
      , nombre   : 'WILSON DE JESUS MOLINA QUIRAMA'
      , telefono : 'F 7766244 CELULAR 3144005060'
      , email    : 'wilsonmolina16@hotmail.com'
      , direccion: 'Calle 71 F No. 78 C - 50 Sur',
    }

    , demanda: {
      vencimientoPagare: '2/08/2027'
      , obligacion       : {
        A: 1000094307,
      }
      , capitalAdeudado        : '$ 19.188.290'
      , entregaGarantiasAbogado: '26/07/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01284'
      , llaveProceso           : '11001400306520230124300',
    },
  }
  , {
    numero  : 568
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1033739670
      , nombre   : 'LORENA GUISELLE CHAPARRO LEAL'
      , telefono : 'CELULAR 3046243064 CELULAR 3015181948'
      , email    : 'lorena19081@hotmail.com'
      , direccion: 'Calle 71 No. 46-08 Sur',
    }

    , demanda: {
      vencimientoPagare: '25/02/2028 // 17/06/2026'
      , obligacion       : {
        A: 5670094881
        , B: 'PAGARÉ SIN NÚMERO REF 100221151 TARJETA DE CRÉDITO MASTER CARD No. 5303730462170320',
      }
      , capitalAdeudado        : '$ 20.815.025'
      , entregaGarantiasAbogado: '2/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01627'
      , llaveProceso           : '11001400307520230128400',
    },
  }
  , {
    numero  : 569
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 52514115
      , nombre   : 'DIANA PATRICIA SILVARA RODRIGUEZ'
      , telefono : 'CELULAR 3203477527'
      , email    : 'dsilvarar28@gmail.com'
      , direccion: 'TV 96 B 20 D 70 CASA 3',
    }

    , demanda: {
      vencimientoPagare: '18/03/2026'
      , obligacion       : {
        A: 2990086384,
      }
      , capitalAdeudado        : '$ 28.820.731'
      , entregaGarantiasAbogado: '4/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00167'
      , llaveProceso           : '11001400306320230162700',
    },
  }
  , {
    numero  : 570
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 21386342
      , nombre  : 'MARTHA CECILIA OSPINA ARENAS'
      , telefono: 'F 42977768 // 7534515 CELULAR 3163096532'
      , email   : 'martacospina@hotmail.com'
      , direccion:
        'Av Suba No. 136-80 Bl B Ap 502 Cerros de Suba – Gratamira //Kr 75 No. 65 - 78 Ap 402 Edificio Montreal P.H. Medellín // Vereda Potrerito ?',
    }

    , demanda: {
      vencimientoPagare: '18/03/2026'
      , obligacion       : {
        A: 3990086952,
      }
      , capitalAdeudado        : '$ 19.170.517'
      , entregaGarantiasAbogado: '4/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01465'
      , llaveProceso           : '11001418907520230016700',
    },
  }
  , {
    numero  : 571
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 53132436
      , nombre  : 'ERLI YANETH OYUELA MARTINEZ'
      , telefono: 'F 5751066 CELULAR 3126172174'
      , email   : 'capryeyom@hotmail.com'
      , direccion:
        'Carrera 10 No. 5 - 62 Bloque Torre 1 Apartamento 202 Conjunto Residencial Belverde I del municipio de Mosquera',
    }

    , demanda: {
      vencimientoPagare: '7/03/2026'
      , obligacion       : {
        A: 1380089168,
      }
      , capitalAdeudado        : '$ 24.843.938'
      , entregaGarantiasAbogado: '4/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MOSQUERA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01289'
      , llaveProceso           : '11001418901420230146500',
    },
  }
  , {
    numero  : 572
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 9527771
      , nombre   : 'JAIME ENRIQUE QUINTERO MENDOZA'
      , telefono : 'F 6154763 CELULAR 3102997350'
      , email    : 'jaimequinterom1@hotmail.com'
      , direccion: 'CL 134 16 50 AP 104 Edificio Verona Barrio Contador Bogotá',
    }

    , demanda: {
      vencimientoPagare: '17/03/2026 // 3/08/2026'
      , obligacion       : {
        A: 1910090586
        , B: 94351552,
      }
      , capitalAdeudado        : '$ 91.487.785'
      , entregaGarantiasAbogado: '4/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00746'
      , llaveProceso           : '2547340030012023012900',
    },
  }
  , {
    numero  : 573
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 52327261
      , nombre   : 'SANDRA PATRICIA GALVIS ALMANZA'
      , telefono : 'F 4152969 CELULAR 3203369576'
      , email    : 'galvis-almanza@hotmail.com'
      , direccion: 'CR 104 No 13D 77 CS 241 Conjunto Residencial Sabanagrande 1',
    }

    , demanda: {
      vencimientoPagare: '17/03/2023 // 4/08/2026'
      , obligacion       : {
        A: 4020084965
        , B: 100260717,
      }
      , capitalAdeudado        : '$ 55.099.216'
      , entregaGarantiasAbogado: '4/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 001310'
      , llaveProceso           : '11001400305520230074600',
    },
  }
  , {
    numero  : 574
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 1014214413
      , nombre  : 'INGRID LIZETH PATARROYO BAEZ'
      , telefono: 'CELULAR 3007547824'
      , email   : 'ingridpatarroyobaez@gmail.com'
      , direccion:
        'CARRERA 85 L # 63B-42 CONJUNTO RESIDENCIAL PORTALES DE VILLALUZ ETAPA 1',
    }

    , demanda: {
      vencimientoPagare: '2/04/2026 // 24/04/2026 // 7/04/2026 // 7/04/2026'
      , obligacion       : {
        A: '2370110350 // 1410093357'
        , B: '43206562 T.C. VISA 4513080146836311 // 82377390 T.C. AMERICAN 0377816058360201',
      }
      , capitalAdeudado        : '$ 43.725.000'
      , entregaGarantiasAbogado: '17/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 -  01342'
      , llaveProceso           : '11001418900920230131000',
    },
  }
  , {
    numero  : 575
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 79780047
      , nombre  : 'JAVIER ALEJANDRO CARRERA SIACHOQUE'
      , telefono: 'FIJO 7574806 //7664931 CELULAR 3164336320'
      , email   : 'carrerasiachoque@yahoo.com'
      , direccion:
        'Carrera 13 A No. 113 42 Apartamento 207 Santa Paula // Carrera 11 No. 112 – 65 // Calle 119 No. 7 – 14 Consultorio 617 // Calle 85 A No. 21 - 51',
    }

    , demanda: {
      vencimientoPagare: '2/04/2026'
      , obligacion       : {
        A: 'Q 0000000079780047027001',
      }
      , capitalAdeudado        : '$ 86.945.177'
      , entregaGarantiasAbogado: '17/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00864'
      , llaveProceso           : '11001418900520230134200',
    },
  }
  , {
    numero  : 576
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1020754305
      , nombre   : 'JUAN CAMILO VELASQUEZ PEREIRA'
      , telefono : 'CELULAR 3188015288'
      , email    : 'jcamilovp@gmail.com'
      , direccion: 'Carrera 15 No. 127 - 32 Apartamento 105 Portaldel Country',
    }

    , demanda: {
      vencimientoPagare: '2/04/2026 //  23/04/2026'
      , obligacion       : {
        A: 4610082832
        , B: 'Q 0000001020754305027001',
      }
      , capitalAdeudado        : '$ 94.472.793'
      , entregaGarantiasAbogado: '17/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00843'
      , llaveProceso           : '11001400300620230086400',
    },
  }
  , {
    numero  : 577
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1068973010
      , nombre   : 'INDIRA MAYERLY FLOREZ CASTRO'
      , telefono : 'FIJO 4074724 CELULAR 3506837545 //3506837547'
      , email    : 'mayeflor21@hotmail.com'
      , direccion: 'CL 26 A SUR 12 L 21 Piso 3o. Barrio san José Sur',
    }

    , demanda: {
      vencimientoPagare: '2/04/2026 // 7/04/2026'
      , obligacion       : {
        A: 6670095919
        , B: '102800851 X T.C. MASTER 5303710105146382 Y T.C. AMERICAN 0377816042003354',
      }
      , capitalAdeudado        : '$ 26.690.131'
      , entregaGarantiasAbogado: '18/08/2021'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00212'
      , llaveProceso           : '11001400300520230084300',
    },
  }
  , {
    numero  : 578
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 35422519
      , nombre   : 'DIANA CRISTINA AREVALO ARBOLEDA'
      , telefono : 3203172020
      , email    : 'dicrisare@gmail.com'
      , direccion: 'CL 4 16 10 AP 201 Barrio Algarra III',
    }

    , demanda: {
      vencimientoPagare: '15/03/2026 // 17/08/2026'
      , obligacion       : {
        A: 3320096675
        , B: '83942050 X T.C MASTER 5491580158404844 Y AMERICAN 377816059851588',
      }
      , capitalAdeudado        : '$ 140.332.319'
      , entregaGarantiasAbogado: '18/08/2021'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'ZIPAQUIRA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 00442'
      , llaveProceso           : '11001418904120230021200',
    },
  }
  , {
    numero  : 579
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1024481233
      , nombre   : 'ANDREA CAROLINA DIAZ BARRETO'
      , telefono : 'F 8027134 CELULAR 3108012331'
      , email    : 'suenopandapijamas@gmail.com'
      , direccion: 'Calle 114 No. 6 A 92',
    }

    , demanda: {
      vencimientoPagare: '21/03/2026 // 7/03/2026'
      , llaveProceso     : 'SinEspecificar'
      , obligacion       : {
        A: 9440087467
        , B: '40733834 X T.C. VISA 4513080401547652',
      }
      , capitalAdeudado        : '$ 20.488.522'
      , entregaGarantiasAbogado: '18/08/2021'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 580
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 19488050
      , nombre   : 'JOSE IGNACIO GALEANO ALVARADO'
      , telefono : 'CELULAR 3103052825'
      , email    : 'joseignaciogaleanoa@gmail.com'
      , direccion: 'Transversal 78 No. 40J - 14 Sur',
    }

    , demanda: {
      vencimientoPagare: '18/08/2026 // 4/04/2026 // 5/08/2026'
      , obligacion       : {
        A: 790100533
        , B: '790101375 Y 101380449 X T.C. AMERICAN 0377844056881358',
      }
      , capitalAdeudado        : '$ 42.647.591'
      , entregaGarantiasAbogado: '24/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 0239'
      , llaveProceso           : '11001418904420230023900',
    },
  }
  , {
    numero  : 581
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 52760611
      , nombre  : 'ANGELICA GODOY GUTIERREZ Y EDISON ANDRES TUTA FORERO'
      , telefono: 'CELULAR 3116509661'
      , email   : 'angelicagodoygutierrez@gmail.com'
      , direccion:
        'Carrera 145 144 C 72 Torre 7 Apartamento 904 Conjunto Residencial Almenara P.H  de la ciudad de Bogotá',
    }
    , codeudor: {
      cedula  : 80798225
      , nombre  : 'EDISON ANDRES TUTA FORERO'
      , telefono: 'CELULAR 3116509661'
      , direccion:
        'Carrera 145 144 C 72 TR 7 AP 904 Conjunto Residencial Almenara P.H',
    }
    , demanda: {
      vencimientoPagare: '12/09/2034 // 30/03/2026'
      , obligacion       : {
        A: '22273 320177358'
        , B: 2470088213,
      }
      , capitalAdeudado        : '$ 51.081.164'
      , entregaGarantiasAbogado: '24/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2023 - 01056'
      , llaveProceso           : '11001400303320230105600',
    },
  }
  , {
    numero  : 582
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 7228260
      , nombre   : 'PEDRO ANTONIO DUARTE VARGAS'
      , telefono : 'CELULAR 3133073186'
      , email    : 'duartepedroantonio@hotmail.com'
      , direccion: 'Calle 23 No. 12 - 50 Bloque 14 Apto 15 Madrid (Cundinamarca)',
    }

    , demanda: {
      vencimientoPagare: '6/03/2026'
      , obligacion       : {
        A: 3830095609,
      }
      , capitalAdeudado        : '$ 16.827.889'
      , entregaGarantiasAbogado: '24/08/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MADRID'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01295'
      , llaveProceso           : '25430400300120230129500',
    },
  }
  , {
    numero  : 583
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 46668139
      , nombre   : 'ALBA YANETH APARICIO SANDOVAL'
      , telefono : 'FIJO 3031161 CELULAR 3124781732'
      , email    : 'yaneth_apar@hotmail.com'
      , direccion: 'Carrera 53 C No. 4 C 63',
    }

    , demanda: {
      vencimientoPagare: '15/04/2026 // 21/04/2026'
      , obligacion       : {
        A: 'Q 0000000046668139027001'
        , B: '0377815602619302',
      }
      , capitalAdeudado        : '$ 21.652.918'
      , entregaGarantiasAbogado: '5/09/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023 - 01414'
      , llaveProceso           : '11001400308120230141400',
    },
  }
  , {
    numero  : 584
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 53177851
      , nombre  : 'MARIA CAMILA MORALES RAMIREZ'
      , telefono: 'F 6056125 CELULAR 3045793470'
      , email   : 'moralesmariacamila@hotmail.com'
      , direccion:
        'Carrera 55 No. 152 - 35 Interior 4 Apto 603 Conjunto Residencial Mazuren 15 de Bogotá y/o en Condominio Residencial Portobari vía Tiquiza Fagua ubicado en el municipio de Chía (Cundinamarca)',
    }

    , demanda: {
      vencimientoPagare: '7/05/2026'
      , llaveProceso     : 'SinEspecificar'
      , obligacion       : {
        A: 149899724,
      }
      , capitalAdeudado        : '$ 43.869.730'
      , entregaGarantiasAbogado: '26/09/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 585
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 41336003
      , nombre  : 'MARIA GEORGINA FORERO DE MENDOZA'
      , telefono: 'F 3543562 CELULAR 3143644918'
      , email   : 'adrifor_co@hotmail.com'
      , direccion:
        'Calle 152 No. 12C - 12 TORRE 1 APTO 704 Conjunto Residencial ENTRECEDROS en Bogotá y/o Carrera 19 A No. 159 -70/84 Interior 4 Apto 503 Conjunto Residencial Sauces del Norte',
    }

    , demanda: {
      vencimientoPagare: '15/09/2026 // 22/05/2026 // 7/05/2026'
      , obligacion       : {
        A: 31035862
        , B: '377816195788645 X TC AMERICAN // 4099843107499631 X T.C. VISA',
      }
      , capitalAdeudado        : '$ 25.766.202'
      , entregaGarantiasAbogado: '26/09/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023-399'
      , llaveProceso           : '11001418907020230039900',
    },
  }
  , {
    numero  : 586
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 35507149
      , nombre   : 'MARIA NANCY PINEDA LEON'
      , telefono : 'CELULAR 3506013954'
      , email    : 'nancypleon13gmail.com'
      , direccion: 'Carrera 3a. No. 1 - 18 Silvania (Cundinamarca)',
    }

    , demanda: {
      vencimientoPagare: '7/12/2052'
      , llaveProceso     : 'SinEspecificar'
      , obligacion       : {
        A: 90000222424,
      }
      , capitalAdeudado        : '$ 255.635.733'
      , entregaGarantiasAbogado: '2/10/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'FUSAGASUGA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2023-00310',
    },
  }
  , {
    numero  : 587
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 80933163
      , nombre   : 'EDGAR MAURICIO VERA RODRIGUEZ'
      , telefono : 'F 3542468  CELULAR 3143688700'
      , email    : 'maovera23@gmail.com'
      , direccion: 'Carrera 54 No. 4 A - 33 Barrio Galan - Bogotá',
    }

    , demanda: {
      vencimientoPagare: '15/05/2026 // 5/06/2026'
      , obligacion       : {
        A: 'Q 0000000080933163027001'
        , B: 83083574,
      }
      , capitalAdeudado        : '$ 34.080.282'
      , entregaGarantiasAbogado: '3/10/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023-1967'
      , llaveProceso           : '11001400306320230196700',
    },
  }
  , {
    numero  : 588
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 52711493
      , nombre  : 'KAREN ALEXANDRA CASTAÑEDA GUERRERO'
      , telefono: 'CELULAR 3123137083'
      , email   : 'kalexa17@hotmail.com'
      , direccion:
        'Carrera 10 Bis No. 8 - 82 Sur // Carrrera 28 No. 11 - 67 Oficina 145 Bogotá',
    }

    , demanda: {
      vencimientoPagare: '15/08/2026 // 13/05/2026 // 4/09/2026'
      , obligacion       : {
        A: 'Q0000000052711493027001'
        , B: '300103191 // 87122211',
      }
      , capitalAdeudado        : '$ 89.544.516'
      , entregaGarantiasAbogado: '7/10/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023-1587'
      , llaveProceso           : '11001400308620230158700',
    },
  }
  , {
    numero  : 589
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1030573651
      , nombre   : 'YURLEDY PARRA HERNANDEZ'
      , telefono : 'CELULAR 3143490829'
      , email    : 'yurledyparra2024@hotmail.com'
      , direccion: 'Carrera 99 D BIS No. 38 - 37 Sur',
    }

    , demanda: {
      vencimientoPagare: '18/11/2052'
      , obligacion       : {
        A: 90000218729
        , B: 2010089751,
      }
      , capitalAdeudado        : '$ 58.421.147'
      , entregaGarantiasAbogado: '7/10/2023'
      , llaveProceso           : 'SinEspecificar'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'HIPOTECARIO'
      , radicado               : '2023-899',
    },
  }
  , {
    numero  : 590
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 10051411
      , nombre   : 'EDWIN JARAMILLO GALLEGO'
      , telefono : 'F 6012650706 CELULAR 3102650856'
      , email    : 'edisoccer_3@hotmail.com'
      , direccion: 'Calle 6a.  C No. 82A - 91',
    }

    , demanda: {
      vencimientoPagare: '13/12/2025  // 20/06/2026'
      , obligacion       : {
        A: 310149501
        , B: '101269167 T.C. MASTER CARD 5303730423512131',
      }
      , capitalAdeudado        : '$ 56.478.909'
      , entregaGarantiasAbogado: '9/10/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023-980'
      , llaveProceso           : '11001400301520230098000',
    },
  }
  , {
    numero  : 591
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1110450902
      , nombre   : 'MAYRA ALEJANDRA VALBUENA BARRERO'
      , telefono : 'CELULAR 3105821483'
      , email    : 'alejavalbar@hotmail.com'
      , direccion: 'Calle 139 7 C - 80 Apartamento 307. Edificio Andaluz',
    }

    , demanda: {
      vencimientoPagare:
        '4/02/2026 // 17/05/2026 // 17/05/2026 // 2/02/2026 // 17/05/2026'
      , obligacion: {
        A: 2170096325
        , B: '2170097811 //2170097810 // 2170097809 //',
      }
      , capitalAdeudado        : '$ 106.398.151'
      , entregaGarantiasAbogado: '13/10/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023-1167'
      , llaveProceso           : '11001400302720230116700',
    },
  }
  , {
    numero  : 592
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 79888775
      , nombre  : 'MARCEL LEONARDO MACHADO ROMERO Y VIVIANA MARTINEZ ARIAS'
      , telefono: 'F 4575011 CELULAR 3209005114'
      , email   : 'marcel-leo@hotmail.com     dillavivi@hotmail.com'
      , direccion:
        'CALLE 6 SUR No. 24 - 180 AP 1203 TO 7 CONJUNTO RESIDENCIAL LA PROSPERIDAD - FONTANA 3 P.H. MADRID - CUNDINAMARCA',
    }
    , codeudor: {
      cedula  : 52791903
      , nombre  : 'VIVIANA MARTINEZ ARIAS'
      , telefono: 'F 4575011 CELULAR 3209005114'
      , direccion:
        'CALLE 6 SUR No. 24 - 180 AP 1203 TO 7 CONJUNTO RESIDENCIAL LA PROSPERIDAD - FONTANA 3 P.H.',
    }
    , demanda: {
      vencimientoPagare: '21/02/2052'
      , obligacion       : {
        A: 90000179396,
      }
      , capitalAdeudado        : '$ 104.393.034'
      , entregaGarantiasAbogado: '13/10/2023'
      , llaveProceso           : 'SinEspecificar'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'MADRID'
      , tipoProceso            : 'HIPOTECARIO',
    },
  }
  , {
    numero  : 593
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 79823203
      , nombre  : 'ISMAEL CAMACHO GARCIA'
      , telefono: 'F 3042545 CELULAR 3103296632'
      , email   : 'mulasycamiones@hotmail.com'
      , direccion:
        'Calle 6 A No. 89 – 47 Casa 561 Conjunto Residencial TINTALA Fase VI de la ciudad de Bogotá',
    }

    , demanda: {
      vencimientoPagare: '4/06/2026'
      , obligacion       : {
        A: 2230105704,
      }
      , capitalAdeudado        : '$ 70.393.714'
      , entregaGarantiasAbogado: '20/10/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023-1099'
      , llaveProceso           : '11001400304220230109900',
    },
  }
  , {
    numero  : 594
    , category: 'Terminados'
    , deudor  : {
      cedula  : 63359557
      , nombre  : 'SANDRA MAGNOLIA CAMPOS ROBLES'
      , telefono: 'F 4206527 CELULAR 3007465888'
      , email   : 'sandracollection1@gmail.com'
      , direccion:
        'Calle 6 C No. 82 A-25 Interior 1 Apartamento 703 Conjunto Residencial Zapan de Castilla P.H.. de la ciudad de Bogotá.',
    }

    , demanda: {
      vencimientoPagare: '4/06/2026'
      , obligacion       : {
        A: 2250087454,
      }
      , capitalAdeudado        : '$ 65.371.302'
      , entregaGarantiasAbogado: '20/10/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , radicado               : '2023-1065'
      , llaveProceso           : '11001400303420230106500'
      , etapaProcesal          : '11001400303420230106500',
    },
  }
  , {
    numero  : 595
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 9116552
      , nombre   : 'JAVIER ARIAS VEGA'
      , telefono : 'CELULAR 3214001988'
      , email    : 'javierarias6552@gmail.com'
      , direccion: 'Calle 52 Sur No. 38 – 60 de la ciudad de Bogotá',
    }

    , demanda: {
      vencimientoPagare: '15/05/2026'
      , obligacion       : {
        A: 5670090363,
      }
      , capitalAdeudado        : '$ 17.492.978'
      , entregaGarantiasAbogado: '20/10/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023-1669'
      , llaveProceso           : '11001400306920230166900',
    },
  }
  , {
    numero  : 596
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 51774908
      , nombre  : 'ELSA CONSUELO ROBAYO'
      , telefono: 'CELULAR 3112328013'
      , email   : 'consu4908@hotmail.com'
      , direccion:
        'Calle 151 No. 109 A - 50 Casa 180 // Carrera 102 No. 154 - 30 Torre 6 Apto 201 Conjunto',
    }

    , demanda: {
      vencimientoPagare: '7/02/2049'
      , obligacion       : {
        A: 90000058700,
      }
      , capitalAdeudado        : '$ 78.458.975'
      , entregaGarantiasAbogado: '14/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , llaveProceso           : 'SinEspecificar'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO',
    },
  }
  , {
    numero  : 597
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1016021964
      , nombre   : 'DANNY EDUARDO SANCHEZ MORENO'
      , telefono : 'F 8293976 CELULAR 3115627079'
      , email    : 'daedsam@hotmail.com'
      , direccion: 'Calle 18 A No. 4 - 34 ESTE Mosquera (Cundinamarca)',
    }

    , demanda: {
      vencimientoPagare: '1/07/2026 // 7/08/2026'
      , obligacion       : {
        A: 400098501
        , B: 84153832,
      }
      , capitalAdeudado        : '$ 73.309.267'
      , entregaGarantiasAbogado: '14/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , llaveProceso           : 'SinEspecificar'
      , municipio              : 'MOSQUERA'
      , tipoProceso            : 'SINGULAR'
      , radicado               : '2023-01680',
    },
  }
  , {
    numero  : 598
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 80216942
      , nombre   : 'RODOLFO RAMIREZ CUBIDES'
      , telefono : 'CELULAR 3028155148'
      , email    : 'carteraisanet@gmail.com'
      , direccion: 'Avenida Calle 63 No. 80-46 Casa Bogotá D.C.',
    }

    , demanda: {
      vencimientoPagare: '9/03/2026'
      , llaveProceso     : 'SinEspecificar'
      , obligacion       : {
        A: 6980091120,
      }
      , capitalAdeudado        : '$ 73.348.449'
      , entregaGarantiasAbogado: '14/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 599
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 52151784
      , nombre  : 'CLAUDIA BEATRIZ PRIETO RINCON'
      , telefono: 'F 7396130 CELULAR 3176483774'
      , email   : 'claudiaprietorincon1@hotmail.com'
      , direccion:
        'Calle 154 A 94 - 80 // CARRERA 56 No. 167 A - 25 TORRE 2 APARTAMENTO 1102 EDIFICIO PRADO VERDE',
    }

    , demanda: {
      vencimientoPagare: '9/07/2026 // 8/07/2026'
      , obligacion       : {
        A: 5820090959
        , B: 83118231,
      }
      , capitalAdeudado        : '$ 48.451.989'
      , entregaGarantiasAbogado: '21/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , llaveProceso           : 'SinEspecificar'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 600
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 39754133
      , nombre  : 'DIANA PATRICIA ESCOBAR CASTRO'
      , telefono: 'F 6791808 CELULAR 3142969949'
      , email   : 'descovbar@hotmail.com'
      , direccion:
        'Calle 163 No. 54 C 68 Conjunto Residencial Mirador del Parque II Bogotá',
    }

    , demanda: {
      vencimientoPagare: '4/07/2026 // 19/07/2026'
      , obligacion       : {
        A: 9440003508
        , B: 377814040247933,
      }
      , capitalAdeudado        : '$ 85.581.623'
      , entregaGarantiasAbogado: '21/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , llaveProceso           : 'SinEspecificar'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 601
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 79166749
      , nombre  : 'JERONIMO LEONARDO GONZALEZ CASTAÑEDA'
      , telefono: 'CELULAR 3112027395'
      , email   : 'jeronimolgc@yahoo.com'
      , direccion:
        'Carrera 55 No. 151 – 90 Interior 3 Apartamento 203 del Conjunto Residencial Mazuren 11 de la ciudad de Bogotá D.C',
    }

    , demanda: {
      vencimientoPagare: '4/07/2026 // 18/08/2026'
      , obligacion       : {
        A: 6340091067
        , B: 101450659,
      }
      , capitalAdeudado        : '$ 50.683.098'
      , entregaGarantiasAbogado: '22/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , llaveProceso           : 'SinEspecificar'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 602
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 52928592
      , nombre  : 'IVONNE MARITZA BARRETO GUZMAN'
      , telefono: 'F 5219881 CELULAR 3214096825'
      , email   : 'ivonnemb_16@hotmail.com'
      , direccion:
        'Calle 149 No. 45 - 42 Torre 2 Apartamento 403 Edificio Gibraltar de Bogotá D.C.',
    }

    , demanda: {
      vencimientoPagare: '3/07/2026 // 11/07/2026'
      , obligacion       : {
        A: 5710091911
        , B: 2490086756,
      }
      , capitalAdeudado        : '$ 100.379.249'
      , entregaGarantiasAbogado: '22/11/2023'
      , llaveProceso           : 'SinEspecificar'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 603
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 1032411438
      , nombre  : 'FRANCY TATIANA LEON TOBARIA'
      , telefono: 'CELULAR 3203403190 // 3219999565'
      , email   : 'tatianaleon_6@hotmail.com'
      , direccion:
        'Carrera 2 BIS No. 41 A - 90  Urbanización Terraza santa Ines Tunja (Boyacá)',
    }

    , demanda: {
      vencimientoPagare: '10/10/2034'
      , llaveProceso     : 'SinEspecificar'
      , obligacion       : {
        A: '2273 320178028',
      }
      , capitalAdeudado        : '$ 168.578.525'
      , entregaGarantiasAbogado: '23/11/2023'
      , departamento           : 'BOYACÁ'
      , municipio              : 'TUNJA'
      , tipoProceso            : 'HIPOTECARIO',
    },
  }
  , {
    numero  : 604
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 3010366
      , nombre  : 'CARLOS ALBERTO MONCADA MORALES'
      , telefono: 'CELULAR 3197613676'
      , email   : 'carlosalbertomoncada63@gmail.com'
      , direccion:
        'Carrera 3 B No. 24 A 57 Barrio Camilo Torres Sector 2 de la ciudad de Soacha (Cundinamrca)',
    }

    , demanda: {
      vencimientoPagare: '7/07/2026'
      , obligacion       : {
        A: 2210097142,
      }
      , capitalAdeudado        : '$ 25.852.498'
      , entregaGarantiasAbogado: '23/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , llaveProceso           : 'SinEspecificar'
      , municipio              : 'SOACHA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 665
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 1104695882
      , nombre  : 'MARIO JAVIER LEGUIZAMON BERMUDEZ'
      , telefono: 'CELULAR 3103378368'
      , email   : 'mj001122@hotmail.com   mjleguizamonb@gmail.com'
      , direccion:
        'Calle 64 D No. 86 - 24 Apartamento 201 de la ciudad de Bogotá D.C.',
    }

    , demanda: {
      vencimientoPagare: '6/08/2026'
      , obligacion       : {
        A: 1770096862,
      }
      , capitalAdeudado        : '$ 35.774.452'
      , llaveProceso           : 'SinEspecificar'
      , entregaGarantiasAbogado: '24/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 666
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1058325371
      , nombre   : 'CAMILO ANDRES SANCHEZ CUESTA'
      , telefono : 'CELULAR 3229575170'
      , email    : 'camilo1998sanchez@gmail.com'
      , direccion: 'Calle 120 42-41 Barranquilla (Atlantico)',
    }

    , demanda: {
      vencimientoPagare: '7/07/2026'
      , obligacion       : {
        A: 7730091653,
      }
      , capitalAdeudado        : '$ 25.015.388'
      , entregaGarantiasAbogado: '24/11/2023'
      , departamento           : 'ATLANTICO'
      , llaveProceso           : 'SinEspecificar'
      , municipio              : 'BARRANQUILLA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 667
    , category: 'Bancolombia'
    , deudor  : {
      cedula  : 79975835
      , nombre  : 'EDWIN ALBERTO PIÑEROS ECHEVERRIA'
      , telefono: 'CELULAR 3143347187'

      , direccion:
        'Carrera 8 C BIS ESTE No. 38 - 62 Sur //  Calle 39 A SUR No. 8B - 41 ESTE  //',
    }

    , demanda: {
      vencimientoPagare: '21/10/2041 // 4/07/2026'
      , obligacion       : {
        A: 90000162232
        , B: 233094816,
      }
      , capitalAdeudado        : '$ 150.043.737'
      , entregaGarantiasAbogado: '24/11/2023'
      , llaveProceso           : 'SinEspecificar'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO',
    },
  }
  , {
    numero  : 668
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 1015410685
      , nombre   : 'MADAY SABAD CAMACHO BUITRAGO'
      , telefono : 'F 6604372 CELULAR 3208959590'
      , email    : 'maday_1989@hotmail.com'
      , direccion: 'Calle 67 D BIS No. 65 A - 71 AP 102',
    }
    , demanda: {
      vencimientoPagare: '23/03/2026 // 15/10/2026 // 3/07/2026'
      , llaveProceso     : 'SinEspecificar'
      , obligacion       : {
        A: 90000131368
        , B: 'Q 0000001015410685027001 // 1720089845',
      }
      , capitalAdeudado        : '$ 73.608.894'
      , entregaGarantiasAbogado: '24/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'HIPOTECARIO',
    },
  }
  , {
    numero  : 669
    , category: 'Bancolombia'
    , deudor  : {
      cedula   : 79405797
      , nombre   : 'ELKIN CARRILLO MARTINEZ'
      , telefono : 'CELULAR 3124704850'
      , email    : 'elkincar07@hotmail.com // elkincar66@hotmail.com'
      , direccion: 'Carrera 59 B No. 52B - 17 Sur',
    }

    , demanda: {
      vencimientoPagare: '15/08/2026 // 10/07/2023'
      , llaveProceso     : 'SinEspecificar'
      , obligacion       : {
        A: 'Q 0000000079405797027001'
        , B: 4670094552,
      }
      , capitalAdeudado        : '$ 46.179.087'
      , entregaGarantiasAbogado: '27/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA'
      , tipoProceso            : 'SINGULAR',
    },
  }
  , {
    numero  : 670
    , category: 'Bancolombia'
    , deudor  : {
      cedula: 1015458592
      , nombre: 'JOJAN ANDRES LOPEZ PARADA',
    }

    , demanda: {
      entregaGarantiasAbogado: '27/11/2023'
      , llaveProceso           : 'SinEspecificar'
      , departamento           : 'CUNDINAMARCA'
      , municipio              : 'BOGOTA',
    },
  }
  , {
    numero  : 671
    , category: 'Bancolombia'
    , deudor  : {
      nombre: 'ADRIANA LORENA FERNANDEZ SIERRA'
      , cedula: 123456789,
    }

    , demanda: {
      entregaGarantiasAbogado: '27/11/2023'
      , departamento           : 'CUNDINAMARCA'
      , llaveProceso           : 'SinEspecificar'
      , municipio              : 'BOGOTA',
    },
  }
];

export default Carpetas;
