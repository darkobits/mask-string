/**
 * Provided a mask character and a string, returns a string of mask characters
 * of the same length.
 *
 * @example
 *
 * maskToken('foo') // => '***'
 * maskToken('bar', '#') // => '###'
 */
export default function maskToken(str: string, maskChar = '*') {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected first argument to be of type "string", got "${typeof str}".`);
  }

  if (typeof maskChar !== 'string') {
    throw new TypeError(`Expected second argument to be of type "string", got "${typeof maskChar}".`);
  }

  if (maskChar.length !== 1) {
    throw new Error(`Expected length of second argument to be 1, got ${maskChar.length}`);
  }

  return str.split('').map(() => maskChar).join('');
}
