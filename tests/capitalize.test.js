const capitalize = require('../src/capitalize');


it('capitalize 1', () => {
  const testString = 'hello world';
  const expectation = 'Hello world';
  expect(capitalize(testString)).toBe(expectation);
});
