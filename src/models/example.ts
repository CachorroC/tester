const range = {
  from: 10
  , to  : 58
  , [ Symbol.asyncIterator ]() {
    return {
      current: this.from
      , last   : this.to

      , async next() {
        // note: we can use "await" inside the async next:
        await new Promise(
          (
            resolve
          ) => {
            return setTimeout(
              resolve, 10
            );
          }
        ); // (3)

        if ( this.current <= this.last ) {
          return {
            done : false
            , value: this.current++,
          };
        }

        return {
          done: true,
        };
      },
    };
  },
};

( async () => {
  for await ( const value of range ) {
    // (4)
    console.log(
      `${ JSON.stringify(
        value, null, 2
      ) } of ${ JSON.stringify(
        range, null, 2
      ) }`,
    );
  }
} )();
