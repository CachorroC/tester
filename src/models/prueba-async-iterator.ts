import { ConsultaNumeroRadicacion } from '../types/procesos';

export async function* generateSequence(
  start, end 
) {
  for ( let i = start; i <= end; i++ ) {
    // Wow, can use await!
    await new Promise(
      (
        resolve 
      ) => {
        return setTimeout(
          resolve, 1000 
        );
      } 
    );

    yield i;
  }
}

export async function* createAsyncGenerator(
  llaveProceso: string 
) {
  if ( llaveProceso === 'SinEspecificar' ) {
    yield null;
  }

  const request = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this.llaveProceso }&SoloActivos=false&pagina=1`,
  );

  if ( !request.ok ) {
    throw new Error(
      'request not ok' 
    );
  }

  const answer = ( await request.json() ) as ConsultaNumeroRadicacion;
  yield await Promise.resolve(
    3 
  );
}

const range = {
  from: 0,
  to  : 600,

  // esta línea es la misma que [Symbol.asyncIterator]: async function*() {
  async *[ Symbol.asyncIterator ]() {
    for ( let value = this.from; value <= this.to; value++ ) {
      // hacer una pausa entre valores, esperar algo
      await new Promise(
        (
          resolve 
        ) => {
          return setTimeout(
            resolve, 1000 
          );
        } 
      );

      yield value;
    }
  },
};

( async () => {
  for await ( const value of range ) {
    alert(
      value 
    ); // 1, luego 2, luego 3, luego 4, luego 5
  }
} )();

async function* fetchCommits(
  repo 
) {
  let url = `https://api.github.com/repos/${ repo }/commits`;

  while ( url ) {
    const response = await fetch(
      url, {
      // (1)
        headers: {
          'User-Agent': 'Our script',
        }, // github requiere encabezado de user-agent
      } 
    );

    const body = await response.json(); // (2) la respuesta es un JSON (array de commits)

    // (3) la URL de la página siguiente está en los encabezados, extráigala
    let nextPage = response.headers.get(
      'Link' 
    )
      .match(
        /<(.*?)>; rel="next"/ 
      );
    nextPage = nextPage?.[ 1 ];

    url = nextPage;

    for ( const commit of body ) {
      // (4) concede commits uno por uno, hasta que termine la página
      yield commit;
    }
  }
}
