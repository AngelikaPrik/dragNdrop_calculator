export function validate(value: string): string {
  return value
    .replace(/[^,.\d-]+/gi, '')
    .replace(/\./g, ',')
    .replace(/^-/, '$#$')
    .replace(/-/g, '')
    .replace('$#$', '-')
    .replace(/^(-,)/, '-0,')
    .replace(/^(,)/, '0,')
    .replace(/(,\d*){2,}/g, match => match.slice(0, -1));
}
