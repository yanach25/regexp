import Validator from '../app';

describe('test app.js', () => {
  it('should validate user name', () => {
    expect(Validator.validateUsername('test-12_b')).toBeTruthy();
  });

  it('should return false with wrong name', () => {
    expect(Validator.validateUsername('1test-12b')).toBeFalsy();
    expect(Validator.validateUsername('test-12b1')).toBeFalsy();
    expect(Validator.validateUsername('-test-13b')).toBeFalsy();
    expect(Validator.validateUsername('test-12-')).toBeFalsy();
    expect(Validator.validateUsername('_test-12b')).toBeFalsy();
    expect(Validator.validateUsername('test-12b_')).toBeFalsy();
    expect(Validator.validateUsername('t111est-123b')).toBeFalsy();
  });
});
