const Calculator = require('../src/calculator');
describe('Calculator', () => {
  describe('add()', () => {
    it('positives', () => {
      const number1 = 100;
      const number2 = 200;
      expect(Calculator.add(number1, number2)).toBe(number1 + number2);
    });

    it('negatives', () => {
      const number1 = -100;
      const number2 = -200;
      expect(Calculator.add(number1, number2)).toBe(number1 + number2);
    });

    it('positive and negative', () => {
      const number1 = -100;
      const number2 = +200;
      expect(Calculator.add(number1, number2)).toBe(number1 + number2);
    });
  });

  describe('subtract()', () => {
    it('positives', () => {
      const number1 = 100;
      const number2 = 200;
      expect(Calculator.subtract(number1, number2)).toBe(number1 - number2);
    });

    it('negatives', () => {
      const number1 = -100;
      const number2 = -200;
      expect(Calculator.subtract(number1, number2)).toBe(number1 - number2);
    });

    it('positive and negative', () => {
      const number1 = -100;
      const number2 = +200;
      expect(Calculator.subtract(number1, number2)).toBe(number1 - number2);
    });
  }) 

  describe('multiply()', () => {
    it('positives', () => {
      const number1 = 100;
      const number2 = 200;
      expect(Calculator.multiply(number1, number2)).toBe(number1 * number2);
    });

    it('negatives', () => {
      const number1 = -100;
      const number2 = -200;
      expect(Calculator.multiply(number1, number2)).toBe(number1 * number2);
    });

    it('positive and negative', () => {
      const number1 = -100;
      const number2 = +200;
      expect(Calculator.multiply(number1, number2)).toBe(number1 * number2);
    });
    
  }) 

  describe('divide()', () => {
    it('positives', () => {
      const number1 = 100;
      const number2 = 200;
      expect(Calculator.divide(number1, number2)).toBe(number1 / number2);
    });

    it('negatives', () => {
      const number1 = -100;
      const number2 = -200;
      expect(Calculator.divide(number1, number2)).toBe(number1 / number2);
    });

    it('positive and negative', () => {
      const number1 = -100;
      const number2 = +200;
      expect(Calculator.divide(number1, number2)).toBe(number1 / number2);
    });  
  }) 
})
