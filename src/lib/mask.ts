import maskString from 'lib/mask-token';


/**
 * Provided a pattern or array of patterns, an input string, and an optional
 * mask character, returns a new string modified such that any tokens therein
 * matching one of the provided patterns is replaced by a string of mask
 * characters of the same length.
 *
 * @example
 *
 * mask(/foo/g, 'foo bar') // => '*** bar'
 */
export default function mask(pattern: string | RegExp | Array<string | RegExp>, str: string, maskChar = '*') {
  if (typeof str !== 'string') {
    throw new Error(`Expected second argument to be of type "string", got "${typeof str}".`);
  }

  // Array-ify pattern(s).
  const patterns = Array.isArray(pattern) ? pattern : [pattern];

  // Initialize output string to input string.
  let output = str;

  patterns.forEach(curPattern => {
    if (typeof curPattern !== 'string' && (curPattern instanceof RegExp) === false) {
      throw new Error(`Expected pattern to be of type "string" or "RegExp", got "${typeof curPattern}".`);
    }

    // RegExp-ify the current pattern.
    const regEx = new RegExp(curPattern);

    // Get initial match results.
    let matchResults = regEx.exec(output);

    // Iterate until match results are exhausted.
    while (matchResults) {
      const [token] = matchResults;

      // Replace the matched token with a string of mask characters of the same
      // length.
      output = output.slice(0, matchResults.index) + maskString(token, maskChar) + output.slice(matchResults.index + token.length);

      // Get next set of match results.
      matchResults = regEx.exec(output);
    }
  });

  return output;
}
