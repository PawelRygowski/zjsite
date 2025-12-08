export function createShort(text) {
  let trimmed = text.substring(0, 255);
  let result =
    trimmed.substring(0, Math.min(trimmed.length, trimmed.lastIndexOf(" "))) +
    " ...";
  return result;
}
