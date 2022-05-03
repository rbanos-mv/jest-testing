const reverseString = require('../src/reverseString');


it('reverse string 12345', () => {
  const itString = '12345';
  const expectation = '54321';
  expect(reverseString(itString)).toBe(expectation);
});


it('reverse string 98765', () => {
  const itString = '98765';
  const expectation = '56789';
  expect(reverseString(itString)).toBe(expectation);
});
