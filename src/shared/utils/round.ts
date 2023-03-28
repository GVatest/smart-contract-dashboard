export function round(value: number | string, roundPlaces: number) {
  if (typeof value === 'number') {
    return parseFloat(value.toFixed(roundPlaces).toString());
  }
  return parseFloat(parseFloat(value).toFixed(roundPlaces).toString());
}
