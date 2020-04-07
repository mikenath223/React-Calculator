import Big from 'big.js';

const operator = (num1, num2, operand) => {
  try {
    const x = Big(num1);
    const y = Big(num2);
    let result;
    if (operand === '+') {
      result = x.plus(y);
    } if (operand === '-') {
      result = x.minus(y);
    } if (operand === '÷') {
      result = x.div(y);
    } if (operand === 'x') {
      result = x.mul(y);
    } if (operand === '%') {
      result = x.mod(y);
    }
    const len = result.c.length;
    if (len > 20) x.c.length = 20;
    return result.toString();
  } catch (e) {
    return `ERROR ${e.message}`;
  }
};


export default operator;
