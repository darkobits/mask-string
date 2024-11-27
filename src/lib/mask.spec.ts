import { describe, it, expect } from 'vitest'

import mask from './mask'

describe('mask', () => {
  describe('providing invalid arguments', () => {
    it('should throw an error', () => {
      expect(() => {
        // @ts-expect-error - Deliberately passing invalid arguments
        mask('foo', false)
      }).toThrow()

      expect(() => {
        // @ts-expect-error - Deliberately passing invalid arguments
        mask([false], 'foo')
      }).toThrow()
    })
  })

  it('should mask all provided patterns in the input string', () => {
    expect(mask(['fox'], 'The quick brown fox jumps over the lazy dog.'))
      .toBe('The quick brown *** jumps over the lazy dog.')

    expect(mask(['quick', 'fox'], 'The quick brown fox jumps over the lazy dog.'))
      .toBe('The ***** brown *** jumps over the lazy dog.')

    expect(mask([/the/i, /jump/], 'The quick brown fox jumps over the lazy dog.'))
      .toBe('*** quick brown fox ****s over *** lazy dog.')
  })
})