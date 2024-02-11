export function fixSingleFecha(rawFecha: string) {
  const datesOutput: Date[] = [];

  const utcStyleMatch = rawFecha.matchAll(/(\d{2,4})-(\d{1,2})-(\d{1,2})/gm);

  const melissaStyleFecha = rawFecha.matchAll(
    /(\d{1,2})\/(\d{1,2})\/(\d{2,4})/gm,
  );

  for (const utcStyleMatched of utcStyleMatch) {
    const [allmatched, yearMatched, monthMatched, dayMatched] = utcStyleMatched;
    let newYear;
    console.log(allmatched);

    if (yearMatched.length === 2) {
      newYear = yearMatched.padStart(4, "20");
    } else if (yearMatched.length === 3) {
      const postYear = yearMatched.substring(1, 3);
      newYear = postYear.padStart(4, "20");
    } else {
      newYear = yearMatched;
    }

    const outputDate = new Date(
      Number(newYear),
      Number(monthMatched) - 1,
      Number(dayMatched.padStart(2, "0")),
    );

    if (outputDate.toString() === "Invalid Date") {
      continue;
    }

    datesOutput.push(outputDate);
  }

  for (const melissaStyleMatched of melissaStyleFecha) {
    const [allmatched, dayMatched, monthMatched, yearMatched] =
      melissaStyleMatched;
    let newYear;
    console.log(allmatched);

    if (yearMatched.length === 2) {
      newYear = yearMatched.padStart(4, "20");
    } else if (yearMatched.length === 3) {
      const postYear = yearMatched.substring(1, 3);
      newYear = postYear.padStart(4, "20");
    } else {
      newYear = yearMatched;
    }

    const outputDate = new Date(
      Number(newYear),
      Number(monthMatched) - 1,
      Number(dayMatched.padStart(2, "0")),
    );

    if (outputDate.toString() === "Invalid Date") {
      continue;
    }

    datesOutput.push(outputDate);
  }

  return datesOutput;
}

export function dateArrayBuilder(
  rawDate: string | number | Date | null | undefined,
) {
  console.log(typeof rawDate);

  if (!rawDate || rawDate === "") {
    return [];
  }

  const isNumber = typeof rawDate === "number";

  const isObject = typeof rawDate === "object";

  if (isObject) {
    const stringified = rawDate.toString();

    if (stringified === "Invalid Date") {
      return [];
    }

    return [rawDate];
  }

  if (isNumber) {
    const newNumberDate = new Date(rawDate);

    if (newNumberDate.toString() === "Invalid Date") {
      return [];
    }

    return [newNumberDate];
  }

  const fechasSet = [];

  const fechasSplitted = rawDate.split("//");

  for (const fecha of fechasSplitted) {
    //* Es una la primer fecha de presentacion
    const fechaFixed = fixSingleFecha(fecha);

    fechasSet.push(fechaFixed);
  }

  return fechasSet.flat();
}
