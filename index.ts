const server = Bun.serve(
  {
    port: 5050,
    fetch(
      req 
    ) {
      return new Response(
        'Bun!' 
      );
    },
  } 
);

console.log(
  `Listening on http://localhost:${ server.port } ...` 
);

import { Thenable } from './src/models/thenable';

async function f () {
  const thener = new Thenable(
    1, '11001400302520170090300'
  );

  // waits for 1 second, then result becomes 2
  const result = await thener.wait();

  console.log(
    JSON.stringify(
      result, null, 2
    )
  );
}

f();