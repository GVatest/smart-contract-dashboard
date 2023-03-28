export function shortenString(value: string, length: number) {
  if (value.length <= length + 3) {
    return value;
  }

  const lenghtToCut = length - 3;

  return `${value.substring(
    0,
    Math.floor(lenghtToCut / 2)
  )}...${value.substring(
    value.length - Math.ceil(lenghtToCut / 2),
    value.length
  )}`;
}
