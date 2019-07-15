import maskString from './mask-token';


describe('maskString', () => {
  it('should return a string of the same length consisting of the mask character', () => {
    expect(maskString('a')).toBe('*');
    expect(maskString('bb')).toBe('**');
    expect(maskString('ccc')).toBe('***');
    expect(maskString('ddd', '#')).toBe('###');
  });

  describe('passing invalid arguments', () => {
    it('should throw an error', () => {
      expect(() => {
        // @ts-ignore
        maskString(false);
      }).toThrow();

      expect(() => {
        // @ts-ignore
        maskString('foo', false);
      }).toThrow();

      expect(() => {
        // @ts-ignore
        maskString('foo', 'bar');
      }).toThrow();
    });
  });
});
