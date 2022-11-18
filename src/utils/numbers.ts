// Extracts place values from given number and returns them in an array
// in the following order: ones, tens, hundreds, thousands, etc.
// for example: 1234 => [4, 3, 2, 1]
export function extractPlaceValues(numberToExtractFrom: number): number[] {
  const placeValues: number[] = [];
  let numberToExtract = numberToExtractFrom;

  while (numberToExtract > 0) {
    placeValues.push(numberToExtract % 10);
    numberToExtract = Math.floor(numberToExtract / 10);
  }

  return placeValues;
}
