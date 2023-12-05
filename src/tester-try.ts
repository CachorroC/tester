async function* myGenerator(carpetaRaw) {
  await new Promise((resolve) => {
    return setTimeout(resolve, 1000);
  });
  const newCarpeta = new CarptaB();
}

export async function pruebaIterator() {
  let step = 5;

  for await (const commit of myGenerator(step++)) {
    console.log(commit);
  }
}

console.log(pruebaIterator());
