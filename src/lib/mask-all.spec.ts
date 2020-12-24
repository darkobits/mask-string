import maskAll from './mask-all';


describe('maskAll', () => {
  it('should return a string of the same length consisting of the mask character', () => {
    expect(maskAll('a')).toBe('*');
    expect(maskAll('bb')).toBe('**');
    expect(maskAll('ccc')).toBe('***');
    expect(maskAll('ddd', '#')).toBe('###');
  });

  describe('passing invalid arguments', () => {
    it('should throw an error', () => {
      expect(() => {
        // @ts-expect-error
        maskAll(false);
      }).toThrow();

      expect(() => {
        // @ts-expect-error
        maskAll('foo', false);
      }).toThrow();

      expect(() => {
        maskAll('foo', 'bar');
      }).toThrow();
    });
  });
});
