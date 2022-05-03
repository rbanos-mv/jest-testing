const stringLength = require('../src/stringLength');

it('string length', () => {
  const testString = '12345';
  expect(stringLength(testString)).toBe(5);
});

it('string length between 1 and 10 - lengh is ZERO', () => {
  const testString = '';
  expect(() => stringLength(testString)).toThrow('length out of range (1-10)');
})

it('string length between 1 and 10 - lengh is greater than 10', () => {
  const testString = '123456789012';
  expect(() => stringLength(testString)).toThrow('length out of range (1-10)');
})